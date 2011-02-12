if(!Function.prototype.bind){Function.prototype.bind = function(scope) {var _function = this;return function() { return _function.apply(scope, arguments); } }}var cljs = cljs || {};
cljs.core = cljs.core || {};
(function() {

  this.Array = Array;
  
  for(var prop in cljs.core){ this[prop] = cljs.core[prop] };
  
  this._ = _;
  
  this.count = (function(col){
    return (function(){
      if(col){
       return col.length;
      } else {
       return 0;
      }
    }.bind(this))();
  }.bind(this));
  
  this.first = (function(col){
    return (function(){
      
      if(!col) return null;
      
      return (col[0]);
    
    }.bind(this))();
  }.bind(this));
  
  this.second = (function(col){
    return this.nth(col, 1);
  }.bind(this));
  
  this.rest = (function(col){
    return (function(){
      
      if(!col) return null;
      
      return this.Array.prototype.slice["call"](col,1);
    
    }.bind(this))();
  }.bind(this));
  
  this.inc = (function(n){
    return (function() {
      var out = arguments[0];
      for(var __i=1; __i<arguments.length; __i++) {
        out = out + arguments[__i];
      }
      return out;
    }).call(this, n, 1);
  }.bind(this));
  
  this.dec = (function(n){
    return (function() {
      var out = arguments[0];
      for(var __i=1; __i<arguments.length; __i++) {
        out = out - arguments[__i];
      }
      return out;
    }).call(this, n, 1);
  }.bind(this));
  
  this.nth = (function(col, n){
    return (function(){
      
      if(!(col && (col.length > n))) return null;
      
      return (col[n]);
    
    }.bind(this))();
  }.bind(this));
  
  this.last = (function(col){
    return (col[this.dec(col.length)]);
  }.bind(this));
  
  this.reduce = (function(f, initial, col){
    return (function(){
      var i = (function(){
        if(col){
         return initial;
        } else {
         return null;
        }
      }.bind(this))(),
      c = (function(){
        if(col){
         return col;
        } else {
         return initial;
        }
      }.bind(this))();
      
      return (function(){
        if(i){
         return this._["reduce"](c,f,i);
        } else {
         return this._["reduce"](c,f);
        }
      }.bind(this))();
    
    }.bind(this))();
  }.bind(this));
  
  this.map = (function(f, initial, col){
    return (function(){
      var i = (function(){
        if(col){
         return initial;
        } else {
         return null;
        }
      }.bind(this))(),
      c = (function(){
        if(col){
         return col;
        } else {
         return initial;
        }
      }.bind(this))();
      
      return (function(){
        
        if(!c) return null;
        
        return (function(){
          if(i){
           return this._["map"](c,f,i);
          } else {
           return this._["map"](c,f);
          }
        }.bind(this))();
      
      }.bind(this))();
    
    }.bind(this))();
  }.bind(this));
  
  this.str = (function(){
    var args = Array.prototype.slice.call(arguments, 0);
    return this.reduce((function(col, el){
      return (function() {
        var out = arguments[0];
        for(var __i=1; __i<arguments.length; __i++) {
          out = out + arguments[__i];
        }
        return out;
      }).call(this, col, el);
    }.bind(this)), "", this.filter((function(p1__6225_HASH_){
      return this._["identity"](p1__6225_HASH_);
    }.bind(this)), args));
  }.bind(this));
  
  this.println = (function(){
    var args = Array.prototype.slice.call(arguments, 0);
    return console["log"](args);
  }.bind(this));
  
  this.apply = (function(f, args){
    return f["apply"](this,args);
  }.bind(this));
  
  this.filter = (function(f, col){
    return (function(){
      if(col){
       return this._["filter"](col,f);
      }
    }.bind(this))();
  }.bind(this));
  
  this.concat = (function(cola, colb){
    return (function(){
      var out = [];
      
      out.push.apply(out, cola);out.push.apply(out, colb);return out;
    
    }.bind(this))();
  }.bind(this));
  
  this.take = (function(n, col){
    return col["slice"](0,n);
  }.bind(this));
  
  this.drop = (function(n, col){
    return (function(){
      
      if(!col) return null;
      
      return col["slice"](n);
    
    }.bind(this))();
  }.bind(this));
  
  this.partition = (function(n, col){
    return (function(){
      var f = (function(out, col){
        return (function(){
          if((0 == this.count(col))){
           return out;
          } else {
           return f(this.concat(out, [
            this.take(n, col)
          ]), this.drop(n, col));
          }
        }.bind(this))();
      }.bind(this));
      
      return f([], col);
    
    }.bind(this))();
  }.bind(this));
  
  this.assoc = (function(obj){
    var rest = Array.prototype.slice.call(arguments, 1);
    return (function(){
      var pairs = this.partition(2, rest);
      
      (function() {
        var G__6227 = pairs;
        for(var i=0; i < G__6227.length; i++) {
          (function(p){(obj[this.first(p)] = this.nth(p, 1))}.bind(this))(G__6227[i]);
        }
      }.bind(this))();return obj;
    
    }.bind(this))();
  }.bind(this));
  
  this.conj = (function(col){
    var rest = Array.prototype.slice.call(arguments, 1);
    (function() {
      var G__6228 = rest;
      for(var i=0; i < G__6228.length; i++) {
        (function(r){col["push"](r)}.bind(this))(G__6228[i]);
      }
    }.bind(this))();
    return col;
  }.bind(this));
  
  this.array_QM_ = (function(o){
    return (o && this._["isArray"](o));
  }.bind(this));
  
  this.object_QM_ = (function(o){
    return (o && (!this.array_QM_(o)) && (!this.string_QM_(o)));
  }.bind(this));
  
  this.string_QM_ = (function(o){
    return this._["isString"](o);
  }.bind(this));
  
  this.element_QM_ = (function(o){
    return (o && (this._["isElement"](o) || this._["isElement"](this.first(o))));
  }.bind(this));
  
  return this.merge = (function(){
    var objs = Array.prototype.slice.call(arguments, 0);
    return (function(){
      var o = ({
        
      });
      
      this.map((function(p1__6226_HASH_){
        return this._["extend"](o,p1__6226_HASH_);
      }.bind(this)), objs);return o;
    
    }.bind(this))();
  }.bind(this))

}).call(cljs.core);



var util = util || {};
(function() {

  this.Array = Array;
  
  for(var prop in cljs.core){ this[prop] = cljs.core[prop] };
  
  this.$ = $;
  
  this.string_QM_ = (function(o){
    return (o && (this.el.constructor == this.String));
  }.bind(this));
  
  this.array_QM_ = (function(el){
    return (el && (el.constructor == this.Array));
  }.bind(this));
  
  this.append = (function(p, c){
    (function(){
      if(this.array_QM_(c)){
       return this.map((function(c){
        return this.append(p, c);
      }.bind(this)), c);
      } else {
       return (function(){p["append"](c);return (function(){
        
        if(!(c instanceof jQuery)) return null;
        
        return c["trigger"]("postinsert");
      
      }.bind(this))()}.bind(this))();
      }
    }.bind(this))();
    return p;
  }.bind(this));
  
  return this.ready = (function(f){
    return this.$(document)["ready"](f);
  }.bind(this))

}).call(util);



var html = html || {};
(function() {

  this.Array = Array;
  
  for(var prop in cljs.core){ this[prop] = cljs.core[prop] };
  
  this.$ = $;
  
  this.util = util;
  
  this.parse_attrs = (function(args){
    return (function(){if((this.nth(args, 1) instanceof jQuery)){return ({
      
    });} else if(this.object_QM_(this.nth(args, 1))){return this.nth(args, 1);} else {return ({
      
    });}}.bind(this))();;
  }.bind(this));
  
  this.parse_body = (function(args){
    return (function(){var out = (function(){if((this.nth(args, 1) instanceof jQuery)){return this.drop(1, args);} else if(this.object_QM_(this.nth(args, 1))){return this.drop(2, args);} else {return this.drop(1, args);}}.bind(this))();;
    out = this.filter(this._.identity, out);out = this.filter((function(p1__8249_HASH_){
      return (!(undefined == p1__8249_HASH_));
    }.bind(this)), out);return out;}.bind(this))();
  }.bind(this));
  
  this.html = (function(args){
    return (function(){if(this.string_QM_(args)){return args;} else if(this.element_QM_(args)){return args;} else if(this.element_QM_(this.first(args))){return args;} else if((args instanceof jQuery)){return args;} else if(this.array_QM_(this.first(args))){return this.map(this.html, args);} else if(true){return (function(){
      var as = this.filter(this._.identity, args),
      tag = this.first(as),
      attrs = this.parse_attrs(as),
      body = this.parse_body(as),
      el = this.$(this.str("<", tag, "/>"));
      
      (function(){
        if(attrs){
         return el["attr"](attrs);
        }
      }.bind(this))();return this.util.append(el, this.map(this.html, body));
    
    }.bind(this))();}}.bind(this))();;
  }.bind(this));
  
  return this.$html = (function(args){
    return this.$(this.html(args));
  }.bind(this))

}).call(html);



var examples = examples || {};
(function() {

  this.Array = Array;
  
  for(var prop in cljs.core){ this[prop] = cljs.core[prop] };
  
  this.canvas = "(ns cljspad\n    (:use util))\n\n(def elem (doto (.createElement 'document \"canvas\")\n            (aset :width 500)\n            (aset :height 500)))\n\n(def ctx (.getContext elem \"2d\"))\n\n(defn next-step [pos dir]\n  (fn []\n    (.rotate ctx 15)\n    (set! ctx.fillStyle \"rgba(0,0,0,0.05)\")\n    (.fillRect ctx 0 0 elem.width elem.height)\n\n    (set! ctx.fillStyle \"rgba(255,0,0,1)\")\n    (.fillRect ctx pos pos 20 20)\n\n    (let [next-pos (+ pos dir)]\n      (cond\n       (> next-pos elem.width) ('setTimeout (next-step next-pos -1) 10)\n       (< (+ next-pos 20) 0) ('setTimeout (next-step next-pos 1) 10)\n       :else ('setTimeout (next-step next-pos dir) 10)))))\n\n(ready\n #(do\n    (.appendChild 'document.body elem)\n    (.fillRect ctx 0 0 elem.width elem.height)\n    ('setTimeout\n     (next-step 0 1)\n     10)))\n\n;; Adapted from http://ejohn.org/apps/spiral/canvas.html\n\n";;
  
  this.empty = "(ns cljspad)\n";;
  
  this.dom = "(ns cljspad-dom\n  (:use util html)\n  (:require [jQuery :as $]))\n\n(defn rand []\n  (.random 'Math))\n\n(defn random-color []\n  (str\n   \"rgba(\"\n   (.floor 'Math (* 255 (rand)))\n   \",\"\n   (.floor 'Math (* 255 (rand)))\n   \",\"\n   (.floor 'Math (* 255 (rand)))\n   \",\"\n   (+ (rand) 0.5)\n   \")\"))\n\n(defn move-el [el body]\n  (let [new-x (* (.width body)\n                 (rand))\n        new-y (* (.height body)\n                 (rand))]\n    (println (random-color))\n    (.css el {:background (random-color)})\n    (.animate el {:top new-y\n                  :left new-x})))\n\n(defn make-el [body]\n  (let [el ($html [:div \"mouseover me!\"])]\n    (.css el {:backgroundColor \"red\"\n              :height 100\n              :width 100\n              :margin \"10px\"\n              :position \"absolute\"\n              :color \"white\"\n              :padding \"10px\"})\n    (.mouseover el #(move-el el body))))\n\n(ready\n (fn []\n   (let [body ($ \"body\")]\n     (.css body {:backgroundImage \"url('/images/dombg.jpg')\"})\n     (append body (make-el body)))))\n";;
  
  return this.tpl = "(ns cljspad-templating\n  (:use util html))\n\n(defn split [del s]\n  (.split s del))\n\n(ready\n (fn []\n   (append\n    ($ \"body\")\n\n    ($html [:div {:style \"padding: 10px;\"}\n            [:h1 \"Hello World!\"]\n            [:p \"The quick brown fox jumps over the lazy dog.\"]\n            [:ul\n             (->> \"Lorem Ipsum Dolor Sit Amet\"\n                  (split \" \")\n                  (map #($html [:li %])))]]))))";

}).call(examples);



var widgets = widgets || {};
(function() {

  this.Array = Array;
  
  for(var prop in cljs.core){ this[prop] = cljs.core[prop] };
  
  for(var prop in html){ this[prop] = html[prop] };
  
  this.$ = $;
  
  this._ = _;
  
  this.defaults = ({
    
  });;
  
  this.tab = (function(title, content){
    return (function(){
      var link = this.$html([
        "a",
        ({
          'href':"#"
        }),
        title
      ]);
      
      return ({
        'title':link,
        'content':content,
        'focus':(function(){
          return (function(){link["addClass"]("selected");return content["css"](({
            'display':"block"
          }))}.bind(this))();
        }.bind(this)),
        'blur':(function(){
          return (function(){link["removeClass"]("selected");return content["css"](({
            'display':"none"
          }))}.bind(this))();
        }.bind(this)),
        'click':(function(p1__8250_HASH_){
          return link["click"](p1__8250_HASH_);
        }.bind(this))
      });
    
    }.bind(this))();
  }.bind(this));
  
  this.tab_panel = (function(){
    var tabs = Array.prototype.slice.call(arguments, 0);
    return (function(){
      var el = this.$html([
        "div",
        ({
          'class':"tab-panel"
        }),
        [
          "div",
          ({
            'class':"tabs"
          }),
          this.map((function(p1__8251_HASH_){
            return (p1__8251_HASH_['title']);
          }.bind(this)), tabs),
          [
            "div",
            ({
              'class':"clear"
            })
          ]
        ],
        [
          "div",
          ({
            'class':"clear"
          })
        ],
        [
          "div",
          ({
            'class':"tab-content"
          }),
          this.map((function(p1__8252_HASH_){
            return (p1__8252_HASH_['content']);
          }.bind(this)), tabs)
        ]
      ]);
      
      (function() {
        var G__8254 = tabs;
        for(var i=0; i < G__8254.length; i++) {
          (function(t){t["click"]((function(){
            this.map((function(p1__8253_HASH_){
              return p1__8253_HASH_["blur"]();
            }.bind(this)), tabs);
            t["focus"]();
            return false;
          }.bind(this)));
          t["blur"]()}.bind(this))(G__8254[i]);
        }
      }.bind(this))();this.first(tabs)["focus"]();return el;
    
    }.bind(this))();
  }.bind(this));
  
  this.panel = (function(){
    return this.$html([
      "div",
      ({
        'class':"panel"
      })
    ]);
  }.bind(this));
  
  this.h_splitter = (function(){
    return this.$html([
      "div",
      ({
        'class':"h-splitter"
      })
    ]);
  }.bind(this));
  
  this.percent_QM_ = (function(s){
    return (this.string_QM_(s) && (s["indexOf"]("%") > -1));
  }.bind(this));
  
  this.parse_percent = (function(s){
    return (function(){var out = s;
    out = out["replace"]("%","");out = parseFloat(out);out = (function() {
      var out = arguments[0];
      for(var __i=1; __i<arguments.length; __i++) {
        out = out / arguments[__i];
      }
      return out;
    }).call(this, out, 100);return out;}.bind(this))();
  }.bind(this));
  
  this.size_h_split_pane = (function(container, left_el, right_el, opts){
    return (function(){
      var w = container["width"](),
      h = container["height"](),
      split_pos = ((opts['splitter'])['pos']),
      split_width = ((opts['splitter'])['size']),
      left_width = (function(){if(this.percent_QM_(split_pos)){return (function() {
        var out = arguments[0];
        for(var __i=1; __i<arguments.length; __i++) {
          out = out * arguments[__i];
        }
        return out;
      }).call(this, w, this.parse_percent(split_pos));} else {return (((opts['splitter'])['pos']) || 200);}}.bind(this))();;
      
      left_el["css"](({
        'height':h,
        'width':(function() {
          var out = arguments[0];
          for(var __i=1; __i<arguments.length; __i++) {
            out = out - arguments[__i];
          }
          return out;
        }).call(this, left_width, split_width)
      }));return right_el["css"](({
        'height':h,
        'width':(function() {
          var out = arguments[0];
          for(var __i=1; __i<arguments.length; __i++) {
            out = out - arguments[__i];
          }
          return out;
        }).call(this, w, left_width)
      }));
    
    }.bind(this))();
  }.bind(this));
  
  this.v_splitter = (function(container, left_el, right_el, opts){
    return (function(){
      var el = this.$html([
        "div",
        ({
          'class':"v-splitter"
        })
      ])["css"](({
        'width':((opts['size']) || 10),
        'height':container["height"](),
        'float':"left"
      })),
      dragging = false,
      last_x = 0,
      body = this.$("body"),
      shim = this.$html([
        "div"
      ])["css"](({
        'zIndex':9999,
        'width':body["width"](),
        'height':body["height"](),
        'backgroundColor':"transparent",
        'position':"fixed",
        'top':0,
        'left':0
      }));
      
      el["mousedown"]((function(e){
        (dragging = true);
        (last_x = e.clientX);
        return body["append"](shim);
      }.bind(this)));this.$("body")["mousemove"]((function(e){
        return (function(){
          if(dragging){
           return (function(){
            var delta = (function() {
              var out = arguments[0];
              for(var __i=1; __i<arguments.length; __i++) {
                out = out - arguments[__i];
              }
              return out;
            }).call(this, e.clientX, last_x);
            
            (last_x = e.clientX);left_el["width"]((function() {
              var out = arguments[0];
              for(var __i=1; __i<arguments.length; __i++) {
                out = out + arguments[__i];
              }
              return out;
            }).call(this, left_el["width"](), delta));return right_el["width"]((function() {
              var out = arguments[0];
              for(var __i=1; __i<arguments.length; __i++) {
                out = out - arguments[__i];
              }
              return out;
            }).call(this, right_el["width"](), delta));
          
          }.bind(this))();
          }
        }.bind(this))();
      }.bind(this)));this.$("body")["mouseup"]((function(){
        (dragging = false);
        return shim["remove"]();
      }.bind(this)));return el;
    
    }.bind(this))();
  }.bind(this));
  
  this.h_split_pane = (function(o){
    return (function(){
      var split_opts = this.merge(({
        'pos':200,
        'size':10,
        'dynamic':false
      }), (o['splitter'])),
      opts = this.merge(({
        'splitter':split_opts
      }), o),
      container = (function(){var out = this.$html([
        "div",
        ({
          'class':"h-split-pane"
        })
      ]);
      out["css"](({
        'width':"100%",
        'height':"100%"
      }));
      return out}.bind(this)()),
      left_el = this.$html([
        "div",
        ({
          'class':"left-pane",
          'style':"float: left; width: 100%; height: 100%;"
        }),
        (opts['left'])["css"](({
          'width':"100%",
          'height':"100%"
        }))
      ]),
      right_el = this.$html([
        "div",
        ({
          'class':"right-pane",
          'style':"float: left;"
        }),
        (opts['right'])["css"](({
          'width':"100%",
          'height':"100%"
        }))
      ]),
      splitter = this.v_splitter(container, left_el, right_el, (opts['splitter']));
      
      this.util.append(container, left_el);(function(){
        
        if(!((opts['splitter'])['dynamic'])) return null;
        
        return this.util.append(container, splitter);
      
      }.bind(this))();this.util.append(container, right_el);this.util.append(container, this.$html([
        "div",
        ({
          'style':"clear: both"
        })
      ]));this.$(window)["resize"]((function(){
        return this.size_h_split_pane(container, left_el, right_el, opts);
      }.bind(this)));this.$(window)["resize"]((function(){
        return splitter["height"](container["height"]());
      }.bind(this)));this.on_insert(container, (function(){
        return splitter["height"](container["height"]());
      }.bind(this)));this.on_insert(container, (function(){
        return this.size_h_split_pane(container, left_el, right_el, opts);
      }.bind(this)));return container;
    
    }.bind(this))();
  }.bind(this));
  
  this.on_insert = (function(el, f){
    return el["bind"]("DOMNodeInserted",(function(){
      return (function(){
        
        if(!(el["parents"]("body")[0])) return null;
        
        return f();
      
      }.bind(this))();
    }.bind(this)));
  }.bind(this));
  
  this.size_v_split_pane = (function(container, top_el, bottom_el, opts){
    return (function(){
      
      if(!(container && top_el && bottom_el)) return null;
      
      return (function(){
        var w = container["outerWidth"](),
        h = container["outerHeight"](),
        top_height = ((function() {
          var out = arguments[0];
          for(var __i=1; __i<arguments.length; __i++) {
            out = out + arguments[__i];
          }
          return out;
        }).call(this, top_el["height"]()) || 200),
        bottom_height = (function() {
          var out = arguments[0];
          for(var __i=1; __i<arguments.length; __i++) {
            out = out - arguments[__i];
          }
          return out;
        }).call(this, h, top_height, (opts['splitter-height']));
        
        top_el["css"](({
          'height':top_height
        }));return bottom_el["css"](({
          'height':bottom_height
        }));
      
      }.bind(this))();
    
    }.bind(this))();
  }.bind(this));
  
  this.h_splitter = (function(container, top_el, bottom_el, opts){
    return (function(){
      var el = this.$html([
        "div",
        ({
          'class':"h-splitter"
        })
      ])["css"](({
        'height':((opts['splitter-height']) || 10)
      })),
      dragging = false,
      last_y = 0,
      body = this.$("body"),
      shim = this.$html([
        "div"
      ])["css"](({
        'zIndex':9999,
        'width':body["width"](),
        'height':body["height"](),
        'backgroundColor':"transparent",
        'position':"fixed",
        'top':0,
        'left':0
      }));
      
      el["mousedown"]((function(e){
        (dragging = true);
        (last_y = e.clientY);
        return body["append"](shim);
      }.bind(this)));this.$("body")["mousemove"]((function(e){
        return (function(){
          if(dragging){
           return (function(){
            var delta = (function() {
              var out = arguments[0];
              for(var __i=1; __i<arguments.length; __i++) {
                out = out - arguments[__i];
              }
              return out;
            }).call(this, e.clientY, last_y);
            
            (last_y = e.clientY);top_el["height"]((function() {
              var out = arguments[0];
              for(var __i=1; __i<arguments.length; __i++) {
                out = out + arguments[__i];
              }
              return out;
            }).call(this, top_el["height"](), delta));return bottom_el["height"]((function() {
              var out = arguments[0];
              for(var __i=1; __i<arguments.length; __i++) {
                out = out - arguments[__i];
              }
              return out;
            }).call(this, bottom_el["height"](), delta));
          
          }.bind(this))();
          }
        }.bind(this))();
      }.bind(this)));this.$("body")["mouseup"]((function(){
        (dragging = false);
        return shim["remove"]();
      }.bind(this)));return el;
    
    }.bind(this))();
  }.bind(this));
  
  return this.v_split_pane = (function(top, bottom, o){
    return (function(){
      var opts = (function(){
        if(o){
         return o;
        } else {
         return ({
          'splitter':false,
          'splitter-height':0
        });
        }
      }.bind(this))(),
      container = (function(){var out = this.$html([
        "div",
        ({
          'class':"v-split-pane"
        })
      ]);
      out["css"](({
        'width':"100%",
        'height':"100%"
      }));
      return out}.bind(this)()),
      top_el = this.$html([
        "div",
        ({
          'class':"top-pane"
        }),
        (top['el'])
      ]),
      bottom_el = this.$html([
        "div",
        ({
          'class':"bottom-pane"
        }),
        (bottom['el'])
      ]);
      
      this.util.append(container, top_el);(function(){
        if((opts['splitter'])){
         return this.util.append(container, this.h_splitter(container, top_el, bottom_el, opts));
        }
      }.bind(this))();this.util.append(container, bottom_el);container["resize"]((function(){
        return this.size_v_split_pane(container, top_el, bottom_el, opts);
      }.bind(this)));this.on_insert(container, (function(){
        return this.size_v_split_pane(container, top_el, bottom_el, opts);
      }.bind(this)));return container;
    
    }.bind(this))();
  }.bind(this))

}).call(widgets);



var app = app || {};
(function() {

  this.Array = Array;
  
  for(var prop in cljs.core){ this[prop] = cljs.core[prop] };
  
  for(var prop in util){ this[prop] = util[prop] };
  
  for(var prop in html){ this[prop] = html[prop] };
  
  this.wd = widgets;
  
  this.CodeMirror = CodeMirror;
  
  this.MirrorFrame = MirrorFrame;
  
  this.examples = examples;
  
  this.control_panel = (function(){
    return this.$html([
      "div",
      ({
        'class':"hello world"
      }),
      [
        "h1",
        "Control Panel"
      ]
    ]);
  }.bind(this));
  
  this.ajax = (function(opts){
    return this.$["ajax"](opts);
  }.bind(this));
  
  this.on_save = (function(cljs_ed, js_ed){
    this.ajax(({
      'url':"/compile",
      'type':"POST",
      'data':({
        'cljs-code':cljs_ed["getCode"]()
      }),
      'success':(function(resp){
        return js_ed["setCode"](resp);
      }.bind(this))
    }));
    return (function(){
      var form = this.$html([
        "form",
        ({
          'action':"/render",
          'id':"iframe-form",
          'method':"POST",
          'target':"render-iframe"
        }),
        [
          "input",
          ({
            'type':"text",
            'name':"cljs-code",
            'style':"display: none",
            'value':cljs_ed["getCode"]()
          })
        ]
      ]);
      
      return form["submit"]();
    
    }.bind(this))();
  }.bind(this));
  
  this.cljs_editor = null;;
  
  this.seed_link = (function(link_text, code){
    return (function(){var out = this.$html([
      "a",
      ({
        'href':"#"
      }),
      link_text
    ]);
    out["click"]((function(){
      this.cljs_editor["setCode"](code);
      return false;
    }.bind(this)));
    return out}.bind(this)());
  }.bind(this));
  
  return this.ready((function(){
    return (function(){
      var header = this.$html([
        "header",
        [
          "h1",
          "CljsPad"
        ]
      ]),
      content = this.$html([
        "div",
        ({
          'style':"height: 100%;"
        }),
        this.wd.h_split_pane(({
          'left':this.$html([
            "div",
            ({
              'class':"left-bar"
            }),
            [
              "div",
              ({
                'class':"left-content"
              }),
              [
                "p",
                "CljsPad is an live console for the experimental ",
                [
                  "a",
                  ({
                    'href':"http://clojure.org"
                  }),
                  "clojure"
                ],
                "(ish)-to-javscript compiler, ",
                [
                  "a",
                  ({
                    'href':"http://github.com/zkim/cljs"
                  }),
                  "cljs"
                ],
                "."
              ],
              [
                "br"
              ],
              [
                "p",
                "Place your cursor in the left pane, hit ctrl+s, and the cljs code will be transformed into javscript (top-right panel), executed, and the result displayed in the bottom-right panel."
              ],
              [
                "br"
              ],
              [
                "h4",
                "Examples"
              ],
              [
                "ul",
                [
                  "li",
                  this.seed_link("empty", this.examples.empty)
                ],
                [
                  "li",
                  this.seed_link("html5 canvas", this.examples.canvas)
                ],
                [
                  "li",
                  this.seed_link("jquery dom", this.examples.dom)
                ]
              ],
              [
                "li",
                this.seed_link("templating", this.examples.tpl)
              ]
            ]
          ])["css"](({
            'backgroundColor':"#eee",
            'borderRight':"solid black 1px",
            'zIndex':5000
          })),
          'right':this.wd.h_split_pane(({
            'left':this.$html([
              "div",
              ({
                'class':"cljs-editor-wrapper"
              }),
              [
                "textarea",
                ({
                  'id':"cljs-editor",
                  'style':""
                })
              ]
            ]),
            'right':this.wd.v_split_pane(({
              'el':this.$html([
                "div",
                ({
                  'class':"compiled-cljs-output"
                }),
                [
                  "textarea",
                  ({
                    'id':"js-editor",
                    'style':""
                  })
                ]
              ]),
              'height':400
            }), ({
              'el':this.$html([
                "iframe",
                ({
                  'id':"render-iframe",
                  'name':"render-iframe",
                  'src':"/render",
                  'style':"height: 99.9%; width: 99.9%; margin: 0px; padding: 0px;"
                })
              ])
            }), ({
              'splitter':true,
              'splitter-height':10
            })),
            'splitter':({
              'pos':"50%",
              'size':10,
              'dynamic':true
            })
          })),
          'splitter':({
            'pos':200,
            'size':5,
            'dynamic':false
          })
        }))
      ]);
      
      this.util.append(this.$("body"), this.wd.v_split_pane(({
        'el':header
      }), ({
        'el':content
      })));return (function(){
        var js_output = this.CodeMirror["fromTextArea"]("js-editor",({
          'path':"/js/codemirror/",
          'height':"100%",
          'width':"100%",
          'parserfile':[
            "parsejavascript.js",
            "tokenizejavascript.js"
          ],
          'stylesheet':"/css/jscolors.css"
        })),
        cljs_ed = this.CodeMirror["fromTextArea"]("cljs-editor",({
          'path':"/js/codemirror/",
          'content':this.examples.canvas,
          'height':"100%",
          'width':"100%",
          'parserfile':[
            "parsescheme.js",
            "tokenizescheme.js"
          ],
          'stylesheet':"/css/schemecolors.css",
          'saveFunction':(function(){
            return this.on_save(cljs_ed, js_output);
          }.bind(this))
        }));
        
        return (this.cljs_editor = cljs_ed);
      
      }.bind(this))();
    
    }.bind(this))();
  }.bind(this)))

}).call(app);