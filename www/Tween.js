function Delegate() {}
Delegate.create = function (o, f) {
	var a = new Array() ;
	var l = arguments.length ;
	for(var i = 2 ; i < l ; i++) a[i - 2] = arguments[i] ;
	return function() {
		var aP = [].concat(arguments, a) ;
		f.apply(o, aP);
	}
}

Tween = function(obj, prop, func, begin, finish, duration, suffixe){
	this.init(obj, prop, func, begin, finish, duration, suffixe)
}
var t = Tween.prototype;

t.obj = new Object();
t.prop='';
t.func = function (t, b, c, d) { return c*t/d + b; };
t.begin = 0;
t.change = 0;
t.prevTime = 0;
t.prevPos = 0;
t.looping = false;
t._duration = 0;
t._time = 0;
t._pos = 0;
t._position = 0;
t._startTime = 0;
t._finish = 0;
t.name = '';
t.suffixe = '';
t._listeners = new Array();	
t.setTime = function(t){
	this.prevTime = this._time;
	if (t > this.getDuration()) {
		if (this.looping) {
			this.rewind (t - this._duration);
			this.update();
			this.broadcastMessage('onMotionLooped',{target:this,type:'onMotionLooped'});
		} else {
			this._time = this._duration;
			this.update();
			this.stop();
			this.broadcastMessage('onMotionFinished',{target:this,type:'onMotionFinished'});
		}
	} else if (t < 0) {
		this.rewind();
		this.update();
	} else {
		this._time = t;
		this.update();
	}
}
t.getTime = function(){
	return this._time;
}
t.setDuration = function(d){
	this._duration = (d == null || d <= 0) ? 100000 : d;
}
t.getDuration = function(){
	return this._duration;
}
t.setPosition = function(p){
	this.prevPos = this._pos;
	var a = this.suffixe != '' ? this.suffixe : '';
	this.obj[this.prop] = Math.round(p) + a;
	this._pos = p;
	this.broadcastMessage('onMotionChanged',{target:this,type:'onMotionChanged'});
}
t.getPosition = function(t){
	if (t == undefined) t = this._time;
	return this.func(t, this.begin, this.change, this._duration);
};
t.setFinish = function(f){
	this.change = f - this.begin;
};
t.geFinish = function(){
	return this.begin + this.change;
};
t.init = function(obj, prop, func, begin, finish, duration, suffixe){
	if (!arguments.length) return;
	this._listeners = new Array();
	this.addListener(this);
	if(suffixe) this.suffixe = suffixe;
	this.obj = obj;
	this.prop = prop;
	this.begin = begin;
	this._pos = begin;
	this.setDuration(duration);
	if (func!=null && func!='') {
		this.func = func;
	}
	this.setFinish(finish);
}
t.start = function(){
	this.rewind();
	this.startEnterFrame();
	this.broadcastMessage('onMotionStarted',{target:this,type:'onMotionStarted'});
	//alert('in');
}
t.rewind = function(t){
	this.stop();
	this._time = (t == undefined) ? 0 : t;
	this.fixTime();
	this.update();
}
t.fforward = function(){
	this._time = this._duration;
	this.fixTime();
	this.update();
}
t.update = function(){
	this.setPosition(this.getPosition(this._time));
	}
t.startEnterFrame = function(){
	this.stopEnterFrame();
	this.isPlaying = true;
	this.onEnterFrame();
}
t.onEnterFrame = function(){
	if(this.isPlaying) {
		this.nextFrame();
		setTimeout(Delegate.create(this, this.onEnterFrame), 0);
	}
}
t.nextFrame = function(){
	this.setTime((this.getTimer() - this._startTime) / 1000);
	}
t.stop = function(){
	this.stopEnterFrame();
	this.broadcastMessage('onMotionStopped',{target:this,type:'onMotionStopped'});
}
t.stopEnterFrame = function(){
	this.isPlaying = false;
}

t.continueTo = function(finish, duration){
	this.begin = this._pos;
	this.setFinish(finish);
	if (this._duration != undefined)
		this.setDuration(duration);
	this.start();
}
t.resume = function(){
	this.fixTime();
	this.startEnterFrame();
	this.broadcastMessage('onMotionResumed',{target:this,type:'onMotionResumed'});
}
t.addListener = function(o){
	this.removeListener (o);
	return this._listeners.push(o);
}
t.removeListener = function(o){
	var a = this._listeners;	
	var i = a.length;
	while (i--) {
		if (a[i] == o) {
			a.splice (i, 1);
			return true;
		}
	}
	return false;
}
t.broadcastMessage = function(){
	var arr = new Array();
	for(var i = 0; i < arguments.length; i++){
		arr.push(arguments[i])
	}
	var e = arr.shift();
	var a = this._listeners;
	var l = a.length;
	for (var i=0; i<l; i++){
		if(a[i][e])
		a[i][e].apply(a[i], arr);
	}
}
t.fixTime = function(){
	this._startTime = this.getTimer() - this._time * 1000;
}
t.getTimer = function(){
	return new Date().getTime() - this._time;
}
Tween.regularEaseOut = function(t,b,c,d){
	return -c *(t/=d)*(t-2) + b;
}
