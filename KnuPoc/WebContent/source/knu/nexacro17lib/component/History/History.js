﻿
 //툴 로드 시와 runtime 제외 분기처리
if( system.navigatorname != "nexacro DesignMode" && system.navigatorname != "nexacro")
{	
	if (typeof JSON !== 'object') {
		JSON = {};
	}


	(function () {
		'use strict';
		
		var rx_one = /^[\],:{}\s]*$/,
			rx_two = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
			rx_three = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
			rx_four = /(?:^|:|,)(?:\s*\[)+/g,
			rx_escapable = /[\\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
			rx_dangerous = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;

		function f(n) {
			// Format integers to have at least two digits.
			return n < 10 
				? '0' + n 
				: n;
		}
		
		function this_value() {
			return this.valueOf();
		}

		if (typeof Date.prototype.toJSON !== 'function') {

			Date.prototype.toJSON = function () {

				return isFinite(this.valueOf())
					? this.getUTCFullYear() + '-' +
							f(this.getUTCMonth() + 1) + '-' +
							f(this.getUTCDate()) + 'T' +
							f(this.getUTCHours()) + ':' +
							f(this.getUTCMinutes()) + ':' +
							f(this.getUTCSeconds()) + 'Z'
					: null;
			};

			Boolean.prototype.toJSON = this_value;
			Number.prototype.toJSON = this_value;
			String.prototype.toJSON = this_value;
		}

		var gap,
			indent,
			meta,
			rep;


		
		function quote(string) 
		{
			rx_escapable.lastIndex = 0;
			return rx_escapable.test(string) 
				? '"' + string.replace(rx_escapable, function (a) {
					var c = meta[a];
					return typeof c === 'string'
						? c
						: '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
				}) + '"' 
				: '"' + string + '"';
		}


		function str(key, holder) {
			var i,          // The loop counter.
				k,          // The member key.
				v,          // The member value.
				length,
				mind = gap,
				partial,
				value = holder[key];

			if (value && typeof value === 'object' &&
					typeof value.toJSON === 'function') {
				value = value.toJSON(key);
			}

			if (typeof rep === 'function') {
				value = rep.call(holder, key, value);
			}

			switch (typeof value) {
			case 'string':
				return quote(value);

			case 'number':
				return isFinite(value) 
					? String(value) 
					: 'null';

			case 'boolean':
			case 'null':
				return String(value);
			case 'object':
				if (!value) {
					return 'null';
				}
				gap += indent;
				partial = [];
				if (Object.prototype.toString.apply(value) === '[object Array]') {
					length = value.length;
					for (i = 0; i < length; i += 1) {
						partial[i] = str(i, value) || 'null';
					}
					v = partial.length === 0
						? '[]'
						: gap
							? '[\n' + gap + partial.join(',\n' + gap) + '\n' + mind + ']'
							: '[' + partial.join(',') + ']';
					gap = mind;
					return v;
				}
				if (rep && typeof rep === 'object') {
					length = rep.length;
					for (i = 0; i < length; i += 1) {
						if (typeof rep[i] === 'string') {
							k = rep[i];
							v = str(k, value);
							if (v) {
								partial.push(quote(k) + (
									gap 
										? ': ' 
										: ':'
								) + v);
							}
						}
					}
				} else {
					for (k in value) {
						if (Object.prototype.hasOwnProperty.call(value, k)) {
							v = str(k, value);
							if (v) {
								partial.push(quote(k) + (
									gap 
										? ': ' 
										: ':'
								) + v);
							}
						}
					}
				}
				v = partial.length === 0
					? '{}'
					: gap
						? '{\n' + gap + partial.join(',\n' + gap) + '\n' + mind + '}'
						: '{' + partial.join(',') + '}';
				gap = mind;
				return v;
			}
		}
		if (typeof JSON.stringify !== 'function') {
			meta = {    // table of character substitutions
				'\b': '\\b',
				'\t': '\\t',
				'\n': '\\n',
				'\f': '\\f',
				'\r': '\\r',
				'"': '\\"',
				'\\': '\\\\'
			};
			JSON.stringify = function (value, replacer, space) {
				var i;
				gap = '';
				indent = '';
				if (typeof space === 'number') {
					for (i = 0; i < space; i += 1) {
						indent += ' ';
					}
				} else if (typeof space === 'string') {
					indent = space;
				}
				rep = replacer;
				if (replacer && typeof replacer !== 'function' &&
						(typeof replacer !== 'object' ||
						typeof replacer.length !== 'number')) {
					throw new Error('JSON.stringify');
				}
				return str('', {'': value});
			};
		}
		if (typeof JSON.parse !== 'function') {
			JSON.parse = function (text, reviver) {
				var j;

				function walk(holder, key) {
					var k, v, value = holder[key];
					if (value && typeof value === 'object') {
						for (k in value) {
							if (Object.prototype.hasOwnProperty.call(value, k)) {
								v = walk(value, k);
								if (v !== undefined) {
									value[k] = v;
								} else {
									delete value[k];
								}
							}
						}
					}
					return reviver.call(holder, key, value);
				}
				text = String(text);
				rx_dangerous.lastIndex = 0;
				if (rx_dangerous.test(text)) {
					text = text.replace(rx_dangerous, function (a) {
						return '\\u' +
								('0000' + a.charCodeAt(0).toString(16)).slice(-4);
					});
				}
				if (
					rx_one.test(
						text
							.replace(rx_two, '@')
							.replace(rx_three, ']')
							.replace(rx_four, '')
					)
				) {
					j = eval('(' + text + ')');
					return typeof reviver === 'function'
						? walk({'': j}, '')
						: j;
				}
				throw new SyntaxError('JSON.parse');
			};
		}
	}());


	/** HTML5 sessionStorage
	 * @build       2009-08-20 23:35:12
	 * @author      Andrea Giammarchi
	 * @license     Mit Style License
	 * @project     http://code.google.com/p/sessionstorage/
	 */		
	if (typeof sessionStorage === "undefined") {
		(function (j) {
			var k = j;
			try {
				while (k !== k.top) {
					k = k.top
				}
			} catch (i) {}
			var f = (function (e, n) {
				return {
					decode: function (o, p) {
						return this.encode(o, p)
					},
					encode: function (y, u) {
						for (var p = y.length, w = u.length, o = [], x = [], v = 0, s = 0, r = 0, q = 0, t; v < 256; ++v) {
							x[v] = v
						}
						for (v = 0; v < 256; ++v) {
							s = (s + (t = x[v]) + y.charCodeAt(v % p)) % 256;
							x[v] = x[s];
							x[s] = t
						}
						for (s = 0; r < w; ++r) {
							v = r % 256;
							s = (s + (t = x[v])) % 256;
							p = x[v] = x[s];
							x[s] = t;
							o[q++] = e(u.charCodeAt(r) ^ x[(p + t) % 256])
						}
						return o.join("")
					},
					key: function (q) {
						for (var p = 0, o = []; p < q; ++p) {
							o[p] = e(1 + ((n() * 255) << 0))
						}
						return o.join("")
					}
				}
			})(j.String.fromCharCode, j.Math.random);
			var a = (function (n) {
				function o(r, q, p) {
					this._i = (this._data = p || "").length;
					if (this._key = q) {
						this._storage = r
					} else {
						this._storage = {
							_key: r || ""
						};
						this._key = "_key"
					}
				}
				o.prototype.c = String.fromCharCode(1);
				o.prototype._c = ".";
				o.prototype.clear = function () {
					this._storage[this._key] = this._data
				};
				o.prototype.del = function (p) {
					var q = this.get(p);
					if (q !== null) {
						this._storage[this._key] = this._storage[this._key].replace(e.call(this, p, q), "")
					}
				};
				o.prototype.escape = n.escape;
				o.prototype.get = function (q) {
					var s = this._storage[this._key],
						t = this.c,
						p = s.indexOf(q = t.concat(this._c, this.escape(q), t, t), this._i),
						r = null;
					if (-1 < p) {
						p = s.indexOf(t, p + q.length - 1) + 1;
						r = s.substring(p, p = s.indexOf(t, p));
						r = this.unescape(s.substr(++p, r))
					}
					return r
				};
				o.prototype.key = function () {
					var u = this._storage[this._key],
						v = this.c,
						q = v + this._c,
						r = this._i,
						t = [],
						s = 0,
						p = 0;
					while (-1 < (r = u.indexOf(q, r))) {
						t[p++] = this.unescape(u.substring(r += 2, s = u.indexOf(v, r)));
						r = u.indexOf(v, s) + 2;
						s = u.indexOf(v, r);
						r = 1 + s + 1 * u.substring(r, s)
					}
					return t
				};
				o.prototype.set = function (p, q) {
					this.del(p);
					this._storage[this._key] += e.call(this, p, q)
				};
				o.prototype.unescape = n.unescape;

				function e(p, q) {
					var r = this.c;
					return r.concat(this._c, this.escape(p), r, r, (q = this.escape(q)).length, r, q)
				}
				return o
			})(j);
			if (Object.prototype.toString.call(j.opera) === "[object Opera]") {
				history.navigationMode = "compatible";
				a.prototype.escape = j.encodeURIComponent;
				a.prototype.unescape = j.decodeURIComponent
			}

			function l() {
				function r() {
					s.cookie = ["sessionStorage=" + j.encodeURIComponent(h = f.key(128))].join(";");
					g = f.encode(h, g);
					a = new a(k, "name", k.name)
				}
				var e = k.name,
					s = k.document,
					n = /\bsessionStorage\b=([^;]+)(;|$)/,
					p = n.exec(s.cookie),
					q;
				if (p) {
					h = j.decodeURIComponent(p[1]);
					g = f.encode(h, g);
					a = new a(k, "name");
					for (var t = a.key(), q = 0, o = t.length, u = {}; q < o; ++q) {
						if ((p = t[q]).indexOf(g) === 0) {
							b.push(p);
							u[p] = a.get(p);
							a.del(p)
						}
					}
					a = new a.constructor(k, "name", k.name);
					if (0 < (this.length = b.length)) {
						for (q = 0, o = b.length, c = a.c, p = []; q < o; ++q) {
							p[q] = c.concat(a._c, a.escape(t = b[q]), c, c, (t = a.escape(u[t])).length, c, t)
						}
						k.name += p.join("")
					}
				} else {
					r();
					if (!n.exec(s.cookie)) {
						b = null
					}
				}
			}
			l.prototype = {
				length: 0,
				key: function (e) {
					if (typeof e !== "number" || e < 0 || b.length <= e) {
						throw "Invalid argument"
					}
					return b[e]
				},
				getItem: function (e) {
					e = g + e;
					if (d.call(m, e)) {
						return m[e]
					}
					var n = a.get(e);
					if (n !== null) {
						n = m[e] = f.decode(h, n)
					}
					return n
				},
				setItem: function (e, n) {
					this.removeItem(e);
					e = g + e;
					a.set(e, f.encode(h, m[e] = "" + n));
					this.length = b.push(e)
				},
				removeItem: function (e) {
					var n = a.get(e = g + e);
					if (n !== null) {
						delete m[e];
						a.del(e);
						this.length = b.remove(e)
					}
				},
				clear: function () {
					a.clear();
					m = {};
					b.length = 0
				}
			};
			var g = k.document.domain,
				b = [],
				m = {}, d = m.hasOwnProperty,
				h;
			b.remove = function (n) {
				var e = this.indexOf(n);
				if (-1 < e) {
					this.splice(e, 1)
				}
				return this.length
			};
			if (!b.indexOf) {
				b.indexOf = function (o) {
					for (var e = 0, n = this.length; e < n; ++e) {
						if (this[e] === o) {
							return e
						}
					}
					return -1
				}
			}
			if (k.sessionStorage) {
				l = function () {};
				l.prototype = k.sessionStorage
			}
			l = new l;
			if (b !== null) {
				j.sessionStorage = l
			}
		})(window)
	};

	/** 
	 * History
	 */
	(function (context, namespace) {
		
		var _history;

		// pushState, state 지원 - IE : 10, Chrome : 18, FireFox : 4.0, Safari : 6.0
		if ( history.pushState && history.state !== undefined )
		{
			_history = {
				
				init: function(historyChangeListener, historyChangeListenerScope)
				{
					var me = _history;
					var initialHash = me.getLocationHash();
					
					me.currentHash = initialHash;
					
					me.historyChangeListener = historyChangeListener;
					me.historyChangeListenerScope = historyChangeListenerScope;

					window.onpopstate = me.checkLocationHash;
				},
				
				getLocationHash: function() 
				{
					return history.state ? history.state.hash : "";
				},
				
				checkLocationHash: function(e)
				{	
					var me = _history;
					var hash = e.state ? e.state.hash : "";

					if ( hash == me.currentHash )
					{
						return;
					}
					
					me.currentHash = hash;
					
					var data = me.getData(hash);
					
					me.historyChangeListener.call(me.historyChangeListenerScope, hash, data);
				},
				
				setLocationHash: function(hash, data)
				{
					var me = _history;
					
					if ( hash == me.currentHash )
					{
						return;
					}				
					
					me.currentHash = hash;
									
					var state = {
						'hash' : hash
					};
					
					// state 객체는 640k로 사이즈 제한이 있기에 sessionStorage에 담아둔다.
					sessionStorage.setItem(hash, JSON.stringify(data));
					
					history.pushState(state, hash);
				},
				
				back: function() 
				{
					context.history.go(-1);
				},

				forward: function()
				{
					context.history.go(1);
				},
				
				getData: function(hash)
				{
					var data = sessionStorage.getItem(hash);
					data = JSON.parse(data);
					return data;
				}
			};	
		}
		else
		{
			_history = {
				
				init: function(historyChangeListener, historyChangeListenerScope)
				{
					var me = _history;
					var initialHash = me.getLocationHash();
					
					me.currentHash = initialHash;
					
					me.historyChangeListener = historyChangeListener;
					me.historyChangeListenerScope = historyChangeListenerScope;

					if ( "onhashchange" in context )
					{
						if ( context.addEventListener ) 
						{
							context.addEventListener('hashchange', me.checkLocationHash, false);				
						}
						else
						{
							context.attachEvent('onhashchange', me.checkLocationHash);
						}
					}
					else
					{
						context.setInterval(function() {
							me.checkLocationHash();
						}, 50);
					}
				},
				
				getLocationHash: function() 
				{
					return context.location.hash.slice(1);
				},
				
				checkLocationHash: function()
				{				
					var me = _history;
					var hash = me.getLocationHash();
					
					if ( hash == me.currentHash )
					{
						return;
					}
					
					me.currentHash = hash;
					
					var data = me.getData(hash);

					me.historyChangeListener.call(me.historyChangeListenerScope, hash, data);
				},
				
				setLocationHash: function(hash, data)
				{
					var me = _history;
					
					sessionStorage.setItem(hash, JSON.stringify(data));
					
					me.currentHash = hash;

					context.location.hash = hash;
				},
				
				back: function() 
				{
					context.history.go(-1);
				},

				forward: function()
				{
					context.history.go(1);
				},
				
				getData: function(hash)
				{
					var data = sessionStorage.getItem(hash);
					data = JSON.parse(data);
					return data;
				}
			};		
		}
			
		context[namespace] = _history;
		
	}(window, "MyHistory"));
}