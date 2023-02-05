'use strict';
import * as $i_three from "three";
import * as $i_three$002faddons$002fOrbitControls$002ejs from "three/addons/OrbitControls.js";
var $linkingInfo = Object.freeze({
  "esVersion": 6,
  "assumingES6": true,
  "productionMode": false,
  "linkerVersion": "1.12.0",
  "fileLevelThis": this
});
var $getOwnPropertyDescriptors = (Object.getOwnPropertyDescriptors || (() => {
  var ownKeysFun;
  if ((((typeof Reflect) !== "undefined") && Reflect.ownKeys)) {
    ownKeysFun = Reflect.ownKeys
  } else {
    var getOwnPropertySymbols = (Object.getOwnPropertySymbols || ((o) => []));
    ownKeysFun = ((o) => Object.getOwnPropertyNames(o).concat(getOwnPropertySymbols(o)))
  };
  return ((o) => {
    var ownKeys = ownKeysFun(o);
    var descriptors = {};
    var len = (ownKeys.length | 0);
    var i = 0;
    while ((i !== len)) {
      var key = ownKeys[i];
      Object.defineProperty(descriptors, key, {
        "configurable": true,
        "enumerable": true,
        "writable": true,
        "value": Object.getOwnPropertyDescriptor(o, key)
      });
      i = ((i + 1) | 0)
    };
    return descriptors
  })
})());
var $L0;
function $propertyName(arg0) {
  for (var prop in arg0) {
    return prop
  }
}
function $Char(c) {
  this.c = c
}
$Char.prototype.toString = (function() {
  return String.fromCharCode(this.c)
});
function $valueDescription(arg0) {
  return (((typeof arg0) === "number") ? (((arg0 === 0) && ((1 / arg0) < 0)) ? "number(-0)" : (("number(" + arg0) + ")")) : ((arg0 instanceof $c_RTLong) ? "long" : ((arg0 instanceof $Char) ? "char" : ((!(!(arg0 && arg0.$classData))) ? arg0.$classData.name : (typeof arg0)))))
}
function $throwClassCastException(arg0, arg1) {
  throw new $c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError(new $c_jl_ClassCastException((($valueDescription(arg0) + " cannot be cast to ") + arg1)))
}
function $throwArrayCastException(arg0, arg1, arg2) {
  while ((--arg2)) {
    arg1 = ("[" + arg1)
  };
  $throwClassCastException(arg0, arg1)
}
function $throwArrayIndexOutOfBoundsException(arg0) {
  throw new $c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError(new $c_jl_ArrayIndexOutOfBoundsException(((arg0 === null) ? null : ("" + arg0))))
}
function $throwArrayStoreException(arg0) {
  throw new $c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError(new $c_jl_ArrayStoreException(((arg0 === null) ? null : $valueDescription(arg0))))
}
function $throwNegativeArraySizeException() {
  throw new $c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError(new $c_jl_NegativeArraySizeException())
}
function $noIsInstance(arg0) {
  throw new TypeError("Cannot call isInstance() on a Class representing a JS trait/object")
}
function $newArrayObject(arg0, arg1) {
  return $newArrayObjectInternal(arg0, arg1, 0)
}
function $newArrayObjectInternal(arg0, arg1, arg2) {
  var result = new arg0.constr(arg1[arg2]);
  if ((arg2 < (arg1.length - 1))) {
    var subArrayClassData = arg0.componentData;
    var subLengthIndex = (arg2 + 1);
    var underlying = result.u;
    for (var i = 0; (i < underlying.length); (i++)) {
      underlying[i] = $newArrayObjectInternal(subArrayClassData, arg1, subLengthIndex)
    }
  };
  return result
}
function $objectClone(arg0) {
  return Object.create(Object.getPrototypeOf(arg0), $getOwnPropertyDescriptors(arg0))
}
function $objectOrArrayClone(arg0) {
  return (arg0.$classData.isArrayClass ? arg0.clone__O() : $objectClone(arg0))
}
function $objectGetClass(arg0) {
  switch ((typeof arg0)) {
    case "string": {
      return $d_T.getClassOf()
    }
    case "number": {
      if ($isInt(arg0)) {
        if ((((arg0 << 24) >> 24) === arg0)) {
          return $d_jl_Byte.getClassOf()
        } else if ((((arg0 << 16) >> 16) === arg0)) {
          return $d_jl_Short.getClassOf()
        } else {
          return $d_jl_Integer.getClassOf()
        }
      } else if ($isFloat(arg0)) {
        return $d_jl_Float.getClassOf()
      } else {
        return $d_jl_Double.getClassOf()
      }
    }
    case "boolean": {
      return $d_jl_Boolean.getClassOf()
    }
    case "undefined": {
      return $d_jl_Void.getClassOf()
    }
    default: {
      if ((arg0 === null)) {
        return arg0.getClass__jl_Class()
      } else if ((arg0 instanceof $c_RTLong)) {
        return $d_jl_Long.getClassOf()
      } else if ((arg0 instanceof $Char)) {
        return $d_jl_Character.getClassOf()
      } else if ((!(!(arg0 && arg0.$classData)))) {
        return arg0.$classData.getClassOf()
      } else {
        return null
      }
    }
  }
}
function $objectClassName(arg0) {
  switch ((typeof arg0)) {
    case "string": {
      return "java.lang.String"
    }
    case "number": {
      if ($isInt(arg0)) {
        if ((((arg0 << 24) >> 24) === arg0)) {
          return "java.lang.Byte"
        } else if ((((arg0 << 16) >> 16) === arg0)) {
          return "java.lang.Short"
        } else {
          return "java.lang.Integer"
        }
      } else if ($isFloat(arg0)) {
        return "java.lang.Float"
      } else {
        return "java.lang.Double"
      }
    }
    case "boolean": {
      return "java.lang.Boolean"
    }
    case "undefined": {
      return "java.lang.Void"
    }
    default: {
      if ((arg0 === null)) {
        return arg0.getClass__jl_Class()
      } else if ((arg0 instanceof $c_RTLong)) {
        return "java.lang.Long"
      } else if ((arg0 instanceof $Char)) {
        return "java.lang.Character"
      } else if ((!(!(arg0 && arg0.$classData)))) {
        return arg0.$classData.name
      } else {
        return null.getName__T()
      }
    }
  }
}
function $dp_equals__O__Z(instance, x0) {
  switch ((typeof instance)) {
    case "string": {
      return $f_T__equals__O__Z(instance, x0)
    }
    case "number": {
      return $f_jl_Double__equals__O__Z(instance, x0)
    }
    case "boolean": {
      return $f_jl_Boolean__equals__O__Z(instance, x0)
    }
    case "undefined": {
      return $f_jl_Void__equals__O__Z(instance, x0)
    }
    default: {
      if (((!(!(instance && instance.$classData))) || (instance === null))) {
        return instance.equals__O__Z(x0)
      } else if ((instance instanceof $c_RTLong)) {
        return $f_jl_Long__equals__O__Z(instance, x0)
      } else if ((instance instanceof $Char)) {
        return $f_jl_Character__equals__O__Z($uC(instance), x0)
      } else {
        return $c_O.prototype.equals__O__Z.call(instance, x0)
      }
    }
  }
}
function $dp_hashCode__I(instance) {
  switch ((typeof instance)) {
    case "string": {
      return $f_T__hashCode__I(instance)
    }
    case "number": {
      return $f_jl_Double__hashCode__I(instance)
    }
    case "boolean": {
      return $f_jl_Boolean__hashCode__I(instance)
    }
    case "undefined": {
      return $f_jl_Void__hashCode__I(instance)
    }
    default: {
      if (((!(!(instance && instance.$classData))) || (instance === null))) {
        return instance.hashCode__I()
      } else if ((instance instanceof $c_RTLong)) {
        return $f_jl_Long__hashCode__I(instance)
      } else if ((instance instanceof $Char)) {
        return $f_jl_Character__hashCode__I($uC(instance))
      } else {
        return $c_O.prototype.hashCode__I.call(instance)
      }
    }
  }
}
function $dp_indexOf__I__I(instance, x0) {
  if (((typeof instance) === "string")) {
    return $f_T__indexOf__I__I(instance, x0)
  } else {
    return instance.indexOf__I__I(x0)
  }
}
function $dp_toString__T(instance) {
  return ((instance === (void 0)) ? "undefined" : instance.toString())
}
function $intDiv(arg0, arg1) {
  if ((arg1 === 0)) {
    throw new $c_jl_ArithmeticException("/ by zero")
  } else {
    return ((arg0 / arg1) | 0)
  }
}
function $intMod(arg0, arg1) {
  if ((arg1 === 0)) {
    throw new $c_jl_ArithmeticException("/ by zero")
  } else {
    return ((arg0 % arg1) | 0)
  }
}
function $doubleToInt(arg0) {
  return ((arg0 > 2147483647) ? 2147483647 : ((arg0 < (-2147483648)) ? (-2147483648) : (arg0 | 0)))
}
function $charAt(arg0, arg1) {
  var r = arg0.charCodeAt(arg1);
  if ((r !== r)) {
    throw new $c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError(new $c_jl_StringIndexOutOfBoundsException(arg1))
  } else {
    return r
  }
}
function $resolveSuperRef(arg0, arg1) {
  var getPrototypeOf = Object.getPrototyeOf;
  var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
  var superProto = arg0.prototype;
  while ((superProto !== null)) {
    var desc = getOwnPropertyDescriptor(superProto, arg1);
    if ((desc !== (void 0))) {
      return desc
    };
    superProto = getPrototypeOf(superProto)
  }
}
function $superGet(arg0, arg1, arg2) {
  var desc = $resolveSuperRef(arg0, arg2);
  if ((desc !== (void 0))) {
    var getter = desc.get;
    return ((getter !== (void 0)) ? getter.call(arg1) : getter.value)
  }
}
function $superSet(arg0, arg1, arg2, arg3) {
  var desc = $resolveSuperRef(arg0, arg2);
  if ((desc !== (void 0))) {
    var setter = desc.set;
    if ((setter !== (void 0))) {
      setter.call(arg1, arg3);
      return (void 0)
    }
  };
  throw new TypeError((("super has no setter '" + arg2) + "'."))
}
function $arraycopyCheckBounds(arg0, arg1, arg2, arg3, arg4) {
  if ((((((arg1 < 0) || (arg3 < 0)) || (arg4 < 0)) || (arg1 > ((arg0 - arg4) | 0))) || (arg3 > ((arg2 - arg4) | 0)))) {
    $throwArrayIndexOutOfBoundsException(null)
  }
}
function $arraycopyGeneric(arg0, arg1, arg2, arg3, arg4) {
  $arraycopyCheckBounds(arg0.length, arg1, arg2.length, arg3, arg4);
  if ((((arg0 !== arg2) || (arg3 < arg1)) || (((arg1 + arg4) | 0) < arg3))) {
    for (var i = 0; (i < arg4); i = ((i + 1) | 0)) {
      arg2[((arg3 + i) | 0)] = arg0[((arg1 + i) | 0)]
    }
  } else {
    for (var i = ((arg4 - 1) | 0); (i >= 0); i = ((i - 1) | 0)) {
      arg2[((arg3 + i) | 0)] = arg0[((arg1 + i) | 0)]
    }
  }
}
function $systemArraycopyRefs(arg0, arg1, arg2, arg3, arg4) {
  if (arg2.$classData.isAssignableFrom(arg0.$classData)) {
    $arraycopyGeneric(arg0.u, arg1, arg2.u, arg3, arg4)
  } else {
    var srcArray = arg0.u;
    $arraycopyCheckBounds(srcArray.length, arg1, arg2.u.length, arg3, arg4);
    for (var i = 0; (i < arg4); i = ((i + 1) | 0)) {
      arg2.set(((arg3 + i) | 0), srcArray[((arg1 + i) | 0)])
    }
  }
}
function $systemArraycopyFull(arg0, arg1, arg2, arg3, arg4) {
  var srcData = (arg0 && arg0.$classData);
  if ((srcData === (arg2 && arg2.$classData))) {
    if ((srcData && srcData.isArrayClass)) {
      arg0.copyTo(arg1, arg2, arg3, arg4)
    } else {
      $throwArrayStoreException(null)
    }
  } else if (((arg0 instanceof $ac_O) && (arg2 instanceof $ac_O))) {
    $systemArraycopyRefs(arg0, arg1, arg2, arg3, arg4)
  } else {
    $throwArrayStoreException(null)
  }
}
var $lastIDHash = 0;
var $idHashCodeMap = new WeakMap();
function $systemIdentityHashCode(obj) {
  switch ((typeof obj)) {
    case "string": {
      return $f_T__hashCode__I(obj)
    }
    case "number": {
      return $f_jl_Double__hashCode__I(obj)
    }
    case "bigint": {
      var biHash = 0;
      if ((obj < BigInt(0))) {
        obj = (~obj)
      };
      while ((obj !== BigInt(0))) {
        biHash = (biHash ^ Number(BigInt.asIntN(32, obj)));
        obj = (obj >> BigInt(32))
      };
      return biHash
    }
    case "boolean": {
      return (obj ? 1231 : 1237)
    }
    case "undefined": {
      return 0
    }
    case "symbol": {
      var description = obj.description;
      return ((description === (void 0)) ? 0 : $f_T__hashCode__I(description))
    }
    default: {
      if ((obj === null)) {
        return 0
      } else {
        var hash = $idHashCodeMap.get(obj);
        if ((hash === (void 0))) {
          hash = (($lastIDHash + 1) | 0);
          $lastIDHash = hash;
          $idHashCodeMap.set(obj, hash)
        };
        return hash
      }
    }
  }
}
function $isByte(arg0) {
  return ((((typeof arg0) === "number") && (((arg0 << 24) >> 24) === arg0)) && ((1 / arg0) !== (1 / (-0))))
}
function $isShort(arg0) {
  return ((((typeof arg0) === "number") && (((arg0 << 16) >> 16) === arg0)) && ((1 / arg0) !== (1 / (-0))))
}
function $isInt(arg0) {
  return ((((typeof arg0) === "number") && ((arg0 | 0) === arg0)) && ((1 / arg0) !== (1 / (-0))))
}
function $isFloat(arg0) {
  return (((typeof arg0) === "number") && ((arg0 !== arg0) || (Math.fround(arg0) === arg0)))
}
function $bC(arg0) {
  return new $Char(arg0)
}
var $bC0 = $bC(0);
function $uV(arg0) {
  return (((arg0 === (void 0)) || (arg0 === null)) ? (void 0) : $throwClassCastException(arg0, "java.lang.Void"))
}
function $uZ(arg0) {
  return ((((typeof arg0) === "boolean") || (arg0 === null)) ? (!(!arg0)) : $throwClassCastException(arg0, "java.lang.Boolean"))
}
function $uC(arg0) {
  return (((arg0 instanceof $Char) || (arg0 === null)) ? ((arg0 === null) ? 0 : arg0.c) : $throwClassCastException(arg0, "java.lang.Character"))
}
function $uB(arg0) {
  return (($isByte(arg0) || (arg0 === null)) ? (arg0 | 0) : $throwClassCastException(arg0, "java.lang.Byte"))
}
function $uS(arg0) {
  return (($isShort(arg0) || (arg0 === null)) ? (arg0 | 0) : $throwClassCastException(arg0, "java.lang.Short"))
}
function $uI(arg0) {
  return (($isInt(arg0) || (arg0 === null)) ? (arg0 | 0) : $throwClassCastException(arg0, "java.lang.Integer"))
}
function $uJ(arg0) {
  return (((arg0 instanceof $c_RTLong) || (arg0 === null)) ? ((arg0 === null) ? $L0 : arg0) : $throwClassCastException(arg0, "java.lang.Long"))
}
function $uF(arg0) {
  return (($isFloat(arg0) || (arg0 === null)) ? (+arg0) : $throwClassCastException(arg0, "java.lang.Float"))
}
function $uD(arg0) {
  return ((((typeof arg0) === "number") || (arg0 === null)) ? (+arg0) : $throwClassCastException(arg0, "java.lang.Double"))
}
function $uT(arg0) {
  return ((((typeof arg0) === "string") || (arg0 === null)) ? ((arg0 === null) ? "" : arg0) : $throwClassCastException(arg0, "java.lang.String"))
}
function $ct_O__($thiz) {
  return $thiz
}
/** @constructor */
function $c_O() {
  /*<skip>*/
}
$c_O.prototype.constructor = $c_O;
/** @constructor */
function $h_O() {
  /*<skip>*/
}
$h_O.prototype = $c_O.prototype;
$c_O.prototype.hashCode__I = (function() {
  return $systemIdentityHashCode(this)
});
$c_O.prototype.equals__O__Z = (function(that) {
  return (this === that)
});
$c_O.prototype.toString__T = (function() {
  var i = this.hashCode__I();
  return (($objectClassName(this) + "@") + $as_T($uD((i >>> 0.0)).toString(16)))
});
$c_O.prototype.toString = (function() {
  return this.toString__T()
});
function $ac_O(arg) {
  if (((typeof arg) === "number")) {
    if ((arg < 0)) {
      $throwNegativeArraySizeException()
    };
    this.u = new Array(arg);
    for (var i = 0; (i < arg); (i++)) {
      this.u[i] = null
    }
  } else {
    this.u = arg
  }
}
$ac_O.prototype = new $h_O();
$ac_O.prototype.constructor = $ac_O;
$ac_O.prototype.get = (function(i) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOfBoundsException(i)
  };
  return this.u[i]
});
$ac_O.prototype.set = (function(i, v) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOfBoundsException(i)
  };
  this.u[i] = v
});
$ac_O.prototype.copyTo = (function(srcPos, dest, destPos, length) {
  $arraycopyGeneric(this.u, srcPos, dest.u, destPos, length)
});
$ac_O.prototype.clone__O = (function() {
  return new $ac_O(this.u.slice())
});
function $ah_O() {
  /*<skip>*/
}
$ah_O.prototype = $ac_O.prototype;
function $ac_Z(arg) {
  if (((typeof arg) === "number")) {
    if ((arg < 0)) {
      $throwNegativeArraySizeException()
    };
    this.u = new Array(arg);
    for (var i = 0; (i < arg); (i++)) {
      this.u[i] = false
    }
  } else {
    this.u = arg
  }
}
$ac_Z.prototype = new $h_O();
$ac_Z.prototype.constructor = $ac_Z;
$ac_Z.prototype.get = (function(i) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOfBoundsException(i)
  };
  return this.u[i]
});
$ac_Z.prototype.set = (function(i, v) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOfBoundsException(i)
  };
  this.u[i] = v
});
$ac_Z.prototype.copyTo = (function(srcPos, dest, destPos, length) {
  $arraycopyGeneric(this.u, srcPos, dest.u, destPos, length)
});
$ac_Z.prototype.clone__O = (function() {
  return new $ac_Z(this.u.slice())
});
function $ac_C(arg) {
  if (((typeof arg) === "number")) {
    if ((arg < 0)) {
      $throwNegativeArraySizeException()
    };
    this.u = new Uint16Array(arg)
  } else {
    this.u = arg
  }
}
$ac_C.prototype = new $h_O();
$ac_C.prototype.constructor = $ac_C;
$ac_C.prototype.get = (function(i) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOfBoundsException(i)
  };
  return this.u[i]
});
$ac_C.prototype.set = (function(i, v) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOfBoundsException(i)
  };
  this.u[i] = v
});
$ac_C.prototype.copyTo = (function(srcPos, dest, destPos, length) {
  $arraycopyCheckBounds(this.u.length, srcPos, dest.u.length, destPos, length);
  dest.u.set(this.u.subarray(srcPos, ((srcPos + length) | 0)), destPos)
});
$ac_C.prototype.clone__O = (function() {
  return new $ac_C(this.u.slice())
});
function $ac_B(arg) {
  if (((typeof arg) === "number")) {
    if ((arg < 0)) {
      $throwNegativeArraySizeException()
    };
    this.u = new Int8Array(arg)
  } else {
    this.u = arg
  }
}
$ac_B.prototype = new $h_O();
$ac_B.prototype.constructor = $ac_B;
$ac_B.prototype.get = (function(i) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOfBoundsException(i)
  };
  return this.u[i]
});
$ac_B.prototype.set = (function(i, v) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOfBoundsException(i)
  };
  this.u[i] = v
});
$ac_B.prototype.copyTo = (function(srcPos, dest, destPos, length) {
  $arraycopyCheckBounds(this.u.length, srcPos, dest.u.length, destPos, length);
  dest.u.set(this.u.subarray(srcPos, ((srcPos + length) | 0)), destPos)
});
$ac_B.prototype.clone__O = (function() {
  return new $ac_B(this.u.slice())
});
function $ac_S(arg) {
  if (((typeof arg) === "number")) {
    if ((arg < 0)) {
      $throwNegativeArraySizeException()
    };
    this.u = new Int16Array(arg)
  } else {
    this.u = arg
  }
}
$ac_S.prototype = new $h_O();
$ac_S.prototype.constructor = $ac_S;
$ac_S.prototype.get = (function(i) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOfBoundsException(i)
  };
  return this.u[i]
});
$ac_S.prototype.set = (function(i, v) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOfBoundsException(i)
  };
  this.u[i] = v
});
$ac_S.prototype.copyTo = (function(srcPos, dest, destPos, length) {
  $arraycopyCheckBounds(this.u.length, srcPos, dest.u.length, destPos, length);
  dest.u.set(this.u.subarray(srcPos, ((srcPos + length) | 0)), destPos)
});
$ac_S.prototype.clone__O = (function() {
  return new $ac_S(this.u.slice())
});
function $ac_I(arg) {
  if (((typeof arg) === "number")) {
    if ((arg < 0)) {
      $throwNegativeArraySizeException()
    };
    this.u = new Int32Array(arg)
  } else {
    this.u = arg
  }
}
$ac_I.prototype = new $h_O();
$ac_I.prototype.constructor = $ac_I;
$ac_I.prototype.get = (function(i) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOfBoundsException(i)
  };
  return this.u[i]
});
$ac_I.prototype.set = (function(i, v) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOfBoundsException(i)
  };
  this.u[i] = v
});
$ac_I.prototype.copyTo = (function(srcPos, dest, destPos, length) {
  $arraycopyCheckBounds(this.u.length, srcPos, dest.u.length, destPos, length);
  dest.u.set(this.u.subarray(srcPos, ((srcPos + length) | 0)), destPos)
});
$ac_I.prototype.clone__O = (function() {
  return new $ac_I(this.u.slice())
});
function $ac_J(arg) {
  if (((typeof arg) === "number")) {
    if ((arg < 0)) {
      $throwNegativeArraySizeException()
    };
    this.u = new Array(arg);
    for (var i = 0; (i < arg); (i++)) {
      this.u[i] = $L0
    }
  } else {
    this.u = arg
  }
}
$ac_J.prototype = new $h_O();
$ac_J.prototype.constructor = $ac_J;
$ac_J.prototype.get = (function(i) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOfBoundsException(i)
  };
  return this.u[i]
});
$ac_J.prototype.set = (function(i, v) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOfBoundsException(i)
  };
  this.u[i] = v
});
$ac_J.prototype.copyTo = (function(srcPos, dest, destPos, length) {
  $arraycopyGeneric(this.u, srcPos, dest.u, destPos, length)
});
$ac_J.prototype.clone__O = (function() {
  return new $ac_J(this.u.slice())
});
function $ac_F(arg) {
  if (((typeof arg) === "number")) {
    if ((arg < 0)) {
      $throwNegativeArraySizeException()
    };
    this.u = new Float32Array(arg)
  } else {
    this.u = arg
  }
}
$ac_F.prototype = new $h_O();
$ac_F.prototype.constructor = $ac_F;
$ac_F.prototype.get = (function(i) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOfBoundsException(i)
  };
  return this.u[i]
});
$ac_F.prototype.set = (function(i, v) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOfBoundsException(i)
  };
  this.u[i] = v
});
$ac_F.prototype.copyTo = (function(srcPos, dest, destPos, length) {
  $arraycopyCheckBounds(this.u.length, srcPos, dest.u.length, destPos, length);
  dest.u.set(this.u.subarray(srcPos, ((srcPos + length) | 0)), destPos)
});
$ac_F.prototype.clone__O = (function() {
  return new $ac_F(this.u.slice())
});
function $ac_D(arg) {
  if (((typeof arg) === "number")) {
    if ((arg < 0)) {
      $throwNegativeArraySizeException()
    };
    this.u = new Float64Array(arg)
  } else {
    this.u = arg
  }
}
$ac_D.prototype = new $h_O();
$ac_D.prototype.constructor = $ac_D;
$ac_D.prototype.get = (function(i) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOfBoundsException(i)
  };
  return this.u[i]
});
$ac_D.prototype.set = (function(i, v) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOfBoundsException(i)
  };
  this.u[i] = v
});
$ac_D.prototype.copyTo = (function(srcPos, dest, destPos, length) {
  $arraycopyCheckBounds(this.u.length, srcPos, dest.u.length, destPos, length);
  dest.u.set(this.u.subarray(srcPos, ((srcPos + length) | 0)), destPos)
});
$ac_D.prototype.clone__O = (function() {
  return new $ac_D(this.u.slice())
});
function $TypeData() {
  this.constr = (void 0);
  this.ancestors = null;
  this.componentData = null;
  this.arrayBase = null;
  this.arrayDepth = 0;
  this.zero = null;
  this.arrayEncodedName = "";
  this._classOf = (void 0);
  this._arrayOf = (void 0);
  this.isAssignableFromFun = (void 0);
  this.wrapArray = (void 0);
  this.isJSType = false;
  this.name = "";
  this.isPrimitive = false;
  this.isInterface = false;
  this.isArrayClass = false;
  this.isInstance = (void 0)
}
$TypeData.prototype.initPrim = (function(zero, arrayEncodedName, displayName, arrayClass, typedArrayClass) {
  this.ancestors = {};
  this.zero = zero;
  this.arrayEncodedName = arrayEncodedName;
  var self = this;
  this.isAssignableFromFun = ((that) => (that === self));
  this.name = displayName;
  this.isPrimitive = true;
  this.isInstance = ((obj) => false);
  if ((arrayClass !== (void 0))) {
    this._arrayOf = new $TypeData().initSpecializedArray(this, arrayClass, typedArrayClass)
  };
  return this
});
$TypeData.prototype.initClass = (function(internalNameObj, isInterface, fullName, ancestors, isJSType, parentData, isInstance) {
  var internalName = $propertyName(internalNameObj);
  this.ancestors = ancestors;
  this.arrayEncodedName = (("L" + fullName) + ";");
  this.isAssignableFromFun = ((that) => (!(!that.ancestors[internalName])));
  this.isJSType = (!(!isJSType));
  this.name = fullName;
  this.isInterface = isInterface;
  this.isInstance = (isInstance || ((obj) => (!(!((obj && obj.$classData) && obj.$classData.ancestors[internalName])))));
  return this
});
$TypeData.prototype.initSpecializedArray = (function(componentData, arrayClass, typedArrayClass, isAssignableFromFun) {
  arrayClass.prototype.$classData = this;
  var name = ("[" + componentData.arrayEncodedName);
  this.constr = arrayClass;
  this.ancestors = {
    O: 1,
    jl_Cloneable: 1,
    Ljava_io_Serializable: 1
  };
  this.componentData = componentData;
  this.arrayBase = componentData;
  this.arrayDepth = 1;
  this.arrayEncodedName = name;
  this.name = name;
  this.isArrayClass = true;
  var self = this;
  this.isAssignableFromFun = (isAssignableFromFun || ((that) => (self === that)));
  this.wrapArray = (typedArrayClass ? ((array) => new arrayClass(new typedArrayClass(array))) : ((array) => new arrayClass(array)));
  this.isInstance = ((obj) => (obj instanceof arrayClass));
  return this
});
$TypeData.prototype.initArray = (function(componentData) {
  function ArrayClass(arg) {
    if (((typeof arg) === "number")) {
      if ((arg < 0)) {
        $throwNegativeArraySizeException()
      };
      this.u = new Array(arg);
      for (var i = 0; (i < arg); (i++)) {
        this.u[i] = null
      }
    } else {
      this.u = arg
    }
  }
  ArrayClass.prototype = new $ah_O();
  ArrayClass.prototype.constructor = ArrayClass;
  ArrayClass.prototype.set = (function(i, v) {
    if (((i < 0) || (i >= this.u.length))) {
      $throwArrayIndexOutOfBoundsException(i)
    };
    if ((((v !== null) && (!componentData.isJSType)) && (!componentData.isInstance(v)))) {
      $throwArrayStoreException(v)
    };
    this.u[i] = v
  });
  ArrayClass.prototype.copyTo = (function(srcPos, dest, destPos, length) {
    $arraycopyGeneric(this.u, srcPos, dest.u, destPos, length)
  });
  ArrayClass.prototype.clone__O = (function() {
    return new ArrayClass(this.u.slice())
  });
  var arrayBase = (componentData.arrayBase || componentData);
  var arrayDepth = (componentData.arrayDepth + 1);
  ArrayClass.prototype.$classData = this;
  var name = ("[" + componentData.arrayEncodedName);
  this.constr = ArrayClass;
  this.ancestors = {
    O: 1,
    jl_Cloneable: 1,
    Ljava_io_Serializable: 1
  };
  this.componentData = componentData;
  this.arrayBase = arrayBase;
  this.arrayDepth = arrayDepth;
  this.arrayEncodedName = name;
  this.name = name;
  this.isArrayClass = true;
  var isAssignableFromFun = ((that) => {
    var thatDepth = that.arrayDepth;
    return ((thatDepth === arrayDepth) ? arrayBase.isAssignableFromFun(that.arrayBase) : ((thatDepth > arrayDepth) && (arrayBase === $d_O)))
  });
  this.isAssignableFromFun = isAssignableFromFun;
  this.wrapArray = ((array) => new ArrayClass(array));
  var self = this;
  this.isInstance = ((obj) => {
    var data = (obj && obj.$classData);
    return ((!(!data)) && ((data === self) || isAssignableFromFun(data)))
  });
  return this
});
$TypeData.prototype.getArrayOf = (function() {
  if ((!this._arrayOf)) {
    this._arrayOf = new $TypeData().initArray(this)
  };
  return this._arrayOf
});
$TypeData.prototype.getClassOf = (function() {
  if ((!this._classOf)) {
    this._classOf = new $c_jl_Class(this)
  };
  return this._classOf
});
$TypeData.prototype.isAssignableFrom = (function(that) {
  return ((this === that) || this.isAssignableFromFun(that))
});
$TypeData.prototype.checkCast = (function(obj) {
  if ((((obj !== null) && (!this.isJSType)) && (!this.isInstance(obj)))) {
    $throwClassCastException(obj, this.name)
  }
});
$TypeData.prototype.getSuperclass = (function() {
  return (this.parentData ? this.parentData.getClassOf() : null)
});
$TypeData.prototype.getComponentType = (function() {
  return (this.componentData ? this.componentData.getClassOf() : null)
});
$TypeData.prototype.newArrayOfThisClass = (function(lengths) {
  var arrayClassData = this;
  for (var i = 0; (i < lengths.length); (i++)) {
    arrayClassData = arrayClassData.getArrayOf()
  };
  return $newArrayObject(arrayClassData, lengths)
});
function $isArrayOf_O(obj, depth) {
  var data = (obj && obj.$classData);
  if ((!data)) {
    return false
  } else {
    var arrayDepth = data.arrayDepth;
    return ((arrayDepth === depth) ? (!data.arrayBase.isPrimitive) : (arrayDepth > depth))
  }
}
function $isArrayOf_Z(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_Z))))
}
function $isArrayOf_C(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_C))))
}
function $isArrayOf_B(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_B))))
}
function $isArrayOf_S(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_S))))
}
function $isArrayOf_I(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_I))))
}
function $isArrayOf_J(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_J))))
}
function $isArrayOf_F(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_F))))
}
function $isArrayOf_D(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_D))))
}
function $asArrayOf_O(obj, depth) {
  if (($isArrayOf_O(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "Ljava.lang.Object;", depth)
  }
}
function $asArrayOf_Z(obj, depth) {
  if (($isArrayOf_Z(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "Z", depth)
  }
}
function $asArrayOf_C(obj, depth) {
  if (($isArrayOf_C(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "C", depth)
  }
}
function $asArrayOf_B(obj, depth) {
  if (($isArrayOf_B(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "B", depth)
  }
}
function $asArrayOf_S(obj, depth) {
  if (($isArrayOf_S(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "S", depth)
  }
}
function $asArrayOf_I(obj, depth) {
  if (($isArrayOf_I(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "I", depth)
  }
}
function $asArrayOf_J(obj, depth) {
  if (($isArrayOf_J(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "J", depth)
  }
}
function $asArrayOf_F(obj, depth) {
  if (($isArrayOf_F(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "F", depth)
  }
}
function $asArrayOf_D(obj, depth) {
  if (($isArrayOf_D(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "D", depth)
  }
}
var $d_O = new $TypeData();
$d_O.ancestors = {
  O: 1
};
$d_O.arrayEncodedName = "Ljava.lang.Object;";
$d_O.isAssignableFromFun = ((that) => (!that.isPrimitive));
$d_O.name = "java.lang.Object";
$d_O.isInstance = ((obj) => (obj !== null));
$d_O._arrayOf = new $TypeData().initSpecializedArray($d_O, $ac_O, (void 0), ((that) => {
  var thatDepth = that.arrayDepth;
  return ((thatDepth === 1) ? (!that.arrayBase.isPrimitive) : (thatDepth > 1))
}));
$c_O.prototype.$classData = $d_O;
var $d_V = new $TypeData().initPrim((void 0), "V", "void", (void 0), (void 0));
var $d_Z = new $TypeData().initPrim(false, "Z", "boolean", $ac_Z, (void 0));
var $d_C = new $TypeData().initPrim(0, "C", "char", $ac_C, Uint16Array);
var $d_B = new $TypeData().initPrim(0, "B", "byte", $ac_B, Int8Array);
var $d_S = new $TypeData().initPrim(0, "S", "short", $ac_S, Int16Array);
var $d_I = new $TypeData().initPrim(0, "I", "int", $ac_I, Int32Array);
var $d_J = new $TypeData().initPrim(null, "J", "long", $ac_J, (void 0));
var $d_F = new $TypeData().initPrim(0.0, "F", "float", $ac_F, Float32Array);
var $d_D = new $TypeData().initPrim(0.0, "D", "double", $ac_D, Float64Array);
/** @constructor */
function $c_Lcfx70_cfpl_core_BGeometry() {
  /*<skip>*/
}
$c_Lcfx70_cfpl_core_BGeometry.prototype = new $h_O();
$c_Lcfx70_cfpl_core_BGeometry.prototype.constructor = $c_Lcfx70_cfpl_core_BGeometry;
/** @constructor */
function $h_Lcfx70_cfpl_core_BGeometry() {
  /*<skip>*/
}
$h_Lcfx70_cfpl_core_BGeometry.prototype = $c_Lcfx70_cfpl_core_BGeometry.prototype;
$c_Lcfx70_cfpl_core_BGeometry.prototype.getGeometry__Lcfx70_threejsfacade_THREE$BufferGeometry = (function() {
  var $$x4 = new $i_three.BufferGeometry();
  var $$x3 = $m_sjs_js_JSConverters$JSRichGenTraversableOnce$();
  var $$x2 = this.pts__sc_Seq();
  var $$x1 = new $c_sjsr_AnonFunction1(((x$6$2) => {
    var x$6 = $as_Lcfx70_vecquat_Vec(x$6$2);
    var this$2 = $m_Lcfx70_cfpl_core_CommonHelpers$();
    return this$2.vec2vec3__Lcfx70_vecquat_Vec__Lcfx70_threejsfacade_THREE$Vector3(x$6)
  }));
  var this$3 = $m_sc_Seq$();
  var col = $as_sc_GenTraversableOnce($$x2.map__F1__scg_CanBuildFrom__O($$x1, this$3.scg_GenTraversableFactory__f_ReusableCBFInstance));
  return $$x4.setFromPoints($$x3.toJSArray$extension__sc_GenTraversableOnce__sjs_js_Array(col))
});
$c_Lcfx70_cfpl_core_BGeometry.prototype.getGeometry1__Lcfx70_threejsfacade_THREE$BufferGeometry = (function() {
  var geometry = new $i_three.BufferGeometry();
  var $$x5 = Float32Array;
  var $$x4 = this.pts__sc_Seq();
  var $$x1 = new $c_sjsr_AnonFunction1(((p$2) => {
    var p = $as_Lcfx70_vecquat_Vec(p$2);
    var $$x3 = Float32Array;
    var $$x2 = $m_sc_Seq$();
    var array = [Math.fround($uD(p.Lcfx70_vecquat_Vec__f_crds.apply__I__O(0))), Math.fround($uD(p.Lcfx70_vecquat_Vec__f_crds.apply__I__O(1))), Math.fround($uD(p.Lcfx70_vecquat_Vec__f_crds.apply__I__O(2)))];
    var self = $as_sc_GenIterable($$x2.apply__sc_Seq__sc_GenTraversable($ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), array)));
    var iterable = $$x3.from(new ($a_sjs_js_JSConverters$IterableAdapter())(self));
    return new $c_sjs_js_IterableOps(iterable)
  }));
  var this$7 = $m_sc_Seq$();
  var self$1 = $as_sc_GenIterable($$x4.flatMap__F1__scg_CanBuildFrom__O($$x1, this$7.scg_GenTraversableFactory__f_ReusableCBFInstance));
  var posarr = $$x5.from(new ($a_sjs_js_JSConverters$IterableAdapter())(self$1));
  var $$x10 = Float32Array;
  var $$x9 = this.normals__sc_Seq();
  var $$x6 = new $c_sjsr_AnonFunction1(((p$3$2) => {
    var p$3 = $as_Lcfx70_vecquat_Vec(p$3$2);
    var $$x8 = Float32Array;
    var $$x7 = $m_sc_Seq$();
    var array$1 = [Math.fround($uD(p$3.Lcfx70_vecquat_Vec__f_crds.apply__I__O(0))), Math.fround($uD(p$3.Lcfx70_vecquat_Vec__f_crds.apply__I__O(1))), Math.fround($uD(p$3.Lcfx70_vecquat_Vec__f_crds.apply__I__O(2)))];
    var self$2 = $as_sc_GenIterable($$x7.apply__sc_Seq__sc_GenTraversable($ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), array$1)));
    var iterable$1 = $$x8.from(new ($a_sjs_js_JSConverters$IterableAdapter())(self$2));
    return new $c_sjs_js_IterableOps(iterable$1)
  }));
  var this$15 = $m_sc_Seq$();
  var self$3 = $as_sc_GenIterable($$x9.flatMap__F1__scg_CanBuildFrom__O($$x6, this$15.scg_GenTraversableFactory__f_ReusableCBFInstance));
  var normarr = $$x10.from(new ($a_sjs_js_JSConverters$IterableAdapter())(self$3));
  var this$19 = new $c_sjs_js_IterableOps(posarr);
  var $$x11 = $f_sc_TraversableOnce__size__I(this$19);
  var this$21 = new $c_sjs_js_IterableOps(normarr);
  if (($$x11 !== $f_sc_TraversableOnce__size__I(this$21))) {
    var this$23 = new $c_sjs_js_IterableOps(posarr);
    var $$x12 = $f_sc_TraversableOnce__size__I(this$23);
    var this$25 = new $c_sjs_js_IterableOps(normarr);
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), (((("position size (" + $$x12) + ") and normals size (") + $f_sc_TraversableOnce__size__I(this$25)) + ") not equal"))
  };
  geometry.setAttribute("position", new $i_three.BufferAttribute(posarr, 3));
  geometry.setAttribute("normal", new $i_three.BufferAttribute(normarr, 3));
  return geometry
});
function $as_Lcfx70_cfpl_core_BGeometry(obj) {
  return (((obj instanceof $c_Lcfx70_cfpl_core_BGeometry) || (obj === null)) ? obj : $throwClassCastException(obj, "cfx70.cfpl.core.BGeometry"))
}
function $isArrayOf_Lcfx70_cfpl_core_BGeometry(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lcfx70_cfpl_core_BGeometry)))
}
function $asArrayOf_Lcfx70_cfpl_core_BGeometry(obj, depth) {
  return (($isArrayOf_Lcfx70_cfpl_core_BGeometry(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lcfx70.cfpl.core.BGeometry;", depth))
}
function $p_Lcfx70_cfpl_core_BGeometry$__NN$1__Lcfx70_vecquat_Vec__Lcfx70_vecquat_Vec__Lcfx70_vecquat_Vec($thiz, v1, v2) {
  return v1.crossProd__Lcfx70_vecquat_Vec__Lcfx70_vecquat_Vec(v2).normalize__Lcfx70_vecquat_Vec()
}
function $p_Lcfx70_cfpl_core_BGeometry$__NN$2__Lcfx70_vecquat_Vec__Lcfx70_vecquat_Vec__Lcfx70_vecquat_Vec($thiz, v1, v2) {
  return v1.crossProd__Lcfx70_vecquat_Vec__Lcfx70_vecquat_Vec(v2).normalize__Lcfx70_vecquat_Vec()
}
/** @constructor */
function $c_Lcfx70_cfpl_core_BGeometry$() {
  this.Lcfx70_cfpl_core_BGeometry$__f_segments = 0;
  this.Lcfx70_cfpl_core_BGeometry$__f_segments = 24
}
$c_Lcfx70_cfpl_core_BGeometry$.prototype = new $h_O();
$c_Lcfx70_cfpl_core_BGeometry$.prototype.constructor = $c_Lcfx70_cfpl_core_BGeometry$;
/** @constructor */
function $h_Lcfx70_cfpl_core_BGeometry$() {
  /*<skip>*/
}
$h_Lcfx70_cfpl_core_BGeometry$.prototype = $c_Lcfx70_cfpl_core_BGeometry$.prototype;
$c_Lcfx70_cfpl_core_BGeometry$.prototype.rectPts__D__D__Lcfx70_vecquat_Vec__sc_Seq = (function(a, b, center) {
  var $$x5 = $m_sc_Seq$();
  var array = [($uD(center.Lcfx70_vecquat_Vec__f_crds.apply__I__O(0)) + (a / 2.0)), ($uD(center.Lcfx70_vecquat_Vec__f_crds.apply__I__O(1)) + (b / 2.0)), $uD(center.Lcfx70_vecquat_Vec__f_crds.apply__I__O(2))];
  var crds = $ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), array);
  var $$x4 = $ct_Lcfx70_vecquat_Vec__sc_Seq__(new $c_Lcfx70_vecquat_Vec(), crds);
  var array$1 = [($uD(center.Lcfx70_vecquat_Vec__f_crds.apply__I__O(0)) - (a / 2.0)), ($uD(center.Lcfx70_vecquat_Vec__f_crds.apply__I__O(1)) + (b / 2.0)), $uD(center.Lcfx70_vecquat_Vec__f_crds.apply__I__O(2))];
  var crds$1 = $ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), array$1);
  var $$x3 = $ct_Lcfx70_vecquat_Vec__sc_Seq__(new $c_Lcfx70_vecquat_Vec(), crds$1);
  var array$2 = [($uD(center.Lcfx70_vecquat_Vec__f_crds.apply__I__O(0)) - (a / 2.0)), ($uD(center.Lcfx70_vecquat_Vec__f_crds.apply__I__O(1)) - (b / 2.0)), $uD(center.Lcfx70_vecquat_Vec__f_crds.apply__I__O(2))];
  var crds$2 = $ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), array$2);
  var $$x2 = $ct_Lcfx70_vecquat_Vec__sc_Seq__(new $c_Lcfx70_vecquat_Vec(), crds$2);
  var array$3 = [($uD(center.Lcfx70_vecquat_Vec__f_crds.apply__I__O(0)) + (a / 2.0)), ($uD(center.Lcfx70_vecquat_Vec__f_crds.apply__I__O(1)) - (b / 2.0)), $uD(center.Lcfx70_vecquat_Vec__f_crds.apply__I__O(2))];
  var crds$3 = $ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), array$3);
  var $$x1 = $ct_Lcfx70_vecquat_Vec__sc_Seq__(new $c_Lcfx70_vecquat_Vec(), crds$3);
  var array$4 = [($uD(center.Lcfx70_vecquat_Vec__f_crds.apply__I__O(0)) + (a / 2.0)), ($uD(center.Lcfx70_vecquat_Vec__f_crds.apply__I__O(1)) + (b / 2.0)), $uD(center.Lcfx70_vecquat_Vec__f_crds.apply__I__O(2))];
  var crds$4 = $ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), array$4);
  var array$5 = [$$x4, $$x3, $$x2, $$x1, $ct_Lcfx70_vecquat_Vec__sc_Seq__(new $c_Lcfx70_vecquat_Vec(), crds$4)];
  return $as_sc_Seq($$x5.apply__sc_Seq__sc_GenTraversable($ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), array$5)))
});
$c_Lcfx70_cfpl_core_BGeometry$.prototype.roundPts__D__Lcfx70_vecquat_Vec__D__D__sc_Seq = (function(r, center, startAng, endAng) {
  var dA = ((endAng - startAng) / this.Lcfx70_cfpl_core_BGeometry$__f_segments);
  var end = this.Lcfx70_cfpl_core_BGeometry$__f_segments;
  var isEmpty = (end < 0);
  if (isEmpty) {
    var scala$collection$immutable$Range$$numRangeElements = 0
  } else {
    var hi = (end >> 31);
    var lo = ((1 + end) | 0);
    var hi$1 = ((lo === 0) ? ((1 + hi) | 0) : hi);
    var scala$collection$immutable$Range$$numRangeElements = (((hi$1 === 0) ? (((-2147483648) ^ lo) > (-1)) : (hi$1 > 0)) ? (-1) : lo)
  };
  $m_sci_IndexedSeq$();
  $m_sci_IndexedSeq$();
  $m_sci_Vector$();
  var b = new $c_sci_VectorBuilder();
  if ((scala$collection$immutable$Range$$numRangeElements < 0)) {
    $m_sci_Range$().scala$collection$immutable$Range$$fail__I__I__I__Z__E(0, end, 1, true)
  };
  if ((!isEmpty)) {
    var i = 0;
    while (true) {
      var arg1 = i;
      var $$x3 = $uD(center.Lcfx70_vecquat_Vec__f_crds.apply__I__O(0));
      var x = (startAng + (dA * arg1));
      var $$x2 = $uD(Math.cos(x));
      var $$x1 = $uD(center.Lcfx70_vecquat_Vec__f_crds.apply__I__O(1));
      var x$1 = (startAng + (dA * arg1));
      var array = [($$x3 + (r * $$x2)), ($$x1 + (r * $uD(Math.sin(x$1)))), $uD(center.Lcfx70_vecquat_Vec__f_crds.apply__I__O(2))];
      var crds = $ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), array);
      var elem = $ct_Lcfx70_vecquat_Vec__sc_Seq__(new $c_Lcfx70_vecquat_Vec(), crds);
      b.$plus$eq__O__sci_VectorBuilder(elem);
      if ((i === end)) {
        break
      };
      i = ((1 + i) | 0)
    }
  };
  return b.result__sci_Vector()
});
$c_Lcfx70_cfpl_core_BGeometry$.prototype.shell__sc_Seq__sc_Seq__sc_Seq = (function(b, t) {
  if ((b.length__I() !== t.length__I())) {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Seqs incompartible")
  };
  var end = (((-1) + b.length__I()) | 0);
  var isEmpty = (end <= 0);
  if (isEmpty) {
    var scala$collection$immutable$Range$$numRangeElements = 0
  } else {
    var hi = (end >> 31);
    var scala$collection$immutable$Range$$numRangeElements = (((hi === 0) ? (((-2147483648) ^ end) > (-1)) : (hi > 0)) ? (-1) : end)
  };
  var scala$collection$immutable$Range$$lastElement = (((-1) + end) | 0);
  $m_sci_IndexedSeq$();
  $m_sci_IndexedSeq$();
  $m_sci_Vector$();
  var b$1 = new $c_sci_VectorBuilder();
  if ((scala$collection$immutable$Range$$numRangeElements < 0)) {
    $m_sci_Range$().scala$collection$immutable$Range$$fail__I__I__I__Z__E(0, end, 1, false)
  };
  if ((!isEmpty)) {
    var i = 0;
    while (true) {
      var arg1 = i;
      var $$x1 = $m_sc_Seq$();
      var array = [$as_Lcfx70_vecquat_Vec(b.apply__I__O(arg1)), $as_Lcfx70_vecquat_Vec(b.apply__I__O(((1 + arg1) | 0))), $as_Lcfx70_vecquat_Vec(t.apply__I__O(arg1)), $as_Lcfx70_vecquat_Vec(b.apply__I__O(((1 + arg1) | 0))), $as_Lcfx70_vecquat_Vec(t.apply__I__O(((1 + arg1) | 0))), $as_Lcfx70_vecquat_Vec(t.apply__I__O(arg1))];
      var elem = $as_sc_Seq($$x1.apply__sc_Seq__sc_GenTraversable($ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), array)));
      b$1.$plus$eq__O__sci_VectorBuilder(elem);
      if ((i === scala$collection$immutable$Range$$lastElement)) {
        break
      };
      i = ((1 + i) | 0)
    }
  };
  var this$11 = b$1.result__sci_Vector();
  $m_sci_Vector$();
  var b$2 = new $c_sci_VectorBuilder();
  var this$13 = this$11.iterator__sci_VectorIterator();
  while (this$13.sci_VectorIterator__f__hasNext) {
    var arg1$1 = this$13.next__O();
    var xs = $as_sc_GenTraversableOnce(arg1$1).seq__sc_TraversableOnce();
    $as_sci_VectorBuilder($f_scg_Growable__$plus$plus$eq__sc_TraversableOnce__scg_Growable(b$2, xs))
  };
  return b$2.result__sci_Vector()
});
$c_Lcfx70_cfpl_core_BGeometry$.prototype.shellNormals__sc_Seq__sc_Seq__sc_Seq = (function(b, t) {
  if ((b.length__I() !== t.length__I())) {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Seqs incompartible")
  };
  var end = (((-1) + b.length__I()) | 0);
  var isEmpty = (end <= 0);
  if (isEmpty) {
    var scala$collection$immutable$Range$$numRangeElements = 0
  } else {
    var hi = (end >> 31);
    var scala$collection$immutable$Range$$numRangeElements = (((hi === 0) ? (((-2147483648) ^ end) > (-1)) : (hi > 0)) ? (-1) : end)
  };
  var scala$collection$immutable$Range$$lastElement = (((-1) + end) | 0);
  $m_sci_IndexedSeq$();
  $m_sci_IndexedSeq$();
  $m_sci_Vector$();
  var b$1 = new $c_sci_VectorBuilder();
  if ((scala$collection$immutable$Range$$numRangeElements < 0)) {
    $m_sci_Range$().scala$collection$immutable$Range$$fail__I__I__I__Z__E(0, end, 1, false)
  };
  if ((!isEmpty)) {
    var i = 0;
    while (true) {
      var arg1 = i;
      var $$x1 = $m_sc_Seq$();
      var array = [$p_Lcfx70_cfpl_core_BGeometry$__NN$1__Lcfx70_vecquat_Vec__Lcfx70_vecquat_Vec__Lcfx70_vecquat_Vec(this, $as_Lcfx70_vecquat_Vec(b.apply__I__O(((1 + arg1) | 0))).$minus__Lcfx70_vecquat_Vec__Lcfx70_vecquat_Vec($as_Lcfx70_vecquat_Vec(b.apply__I__O(arg1))), $as_Lcfx70_vecquat_Vec(t.apply__I__O(arg1)).$minus__Lcfx70_vecquat_Vec__Lcfx70_vecquat_Vec($as_Lcfx70_vecquat_Vec(b.apply__I__O(arg1)))), $p_Lcfx70_cfpl_core_BGeometry$__NN$1__Lcfx70_vecquat_Vec__Lcfx70_vecquat_Vec__Lcfx70_vecquat_Vec(this, $as_Lcfx70_vecquat_Vec(t.apply__I__O(((1 + arg1) | 0))).$minus__Lcfx70_vecquat_Vec__Lcfx70_vecquat_Vec($as_Lcfx70_vecquat_Vec(b.apply__I__O(((1 + arg1) | 0)))), $as_Lcfx70_vecquat_Vec(b.apply__I__O(arg1)).$minus__Lcfx70_vecquat_Vec__Lcfx70_vecquat_Vec($as_Lcfx70_vecquat_Vec(b.apply__I__O(((1 + arg1) | 0))))), $p_Lcfx70_cfpl_core_BGeometry$__NN$1__Lcfx70_vecquat_Vec__Lcfx70_vecquat_Vec__Lcfx70_vecquat_Vec(this, $as_Lcfx70_vecquat_Vec(b.apply__I__O(arg1)).$minus__Lcfx70_vecquat_Vec__Lcfx70_vecquat_Vec($as_Lcfx70_vecquat_Vec(t.apply__I__O(arg1))), $as_Lcfx70_vecquat_Vec(t.apply__I__O(((1 + arg1) | 0))).$minus__Lcfx70_vecquat_Vec__Lcfx70_vecquat_Vec($as_Lcfx70_vecquat_Vec(t.apply__I__O(arg1)))), $p_Lcfx70_cfpl_core_BGeometry$__NN$1__Lcfx70_vecquat_Vec__Lcfx70_vecquat_Vec__Lcfx70_vecquat_Vec(this, $as_Lcfx70_vecquat_Vec(t.apply__I__O(((1 + arg1) | 0))).$minus__Lcfx70_vecquat_Vec__Lcfx70_vecquat_Vec($as_Lcfx70_vecquat_Vec(b.apply__I__O(((1 + arg1) | 0)))), $as_Lcfx70_vecquat_Vec(b.apply__I__O(arg1)).$minus__Lcfx70_vecquat_Vec__Lcfx70_vecquat_Vec($as_Lcfx70_vecquat_Vec(b.apply__I__O(((1 + arg1) | 0))))), $p_Lcfx70_cfpl_core_BGeometry$__NN$1__Lcfx70_vecquat_Vec__Lcfx70_vecquat_Vec__Lcfx70_vecquat_Vec(this, $as_Lcfx70_vecquat_Vec(t.apply__I__O(arg1)).$minus__Lcfx70_vecquat_Vec__Lcfx70_vecquat_Vec($as_Lcfx70_vecquat_Vec(t.apply__I__O(((1 + arg1) | 0)))), $as_Lcfx70_vecquat_Vec(b.apply__I__O(((1 + arg1) | 0))).$minus__Lcfx70_vecquat_Vec__Lcfx70_vecquat_Vec($as_Lcfx70_vecquat_Vec(t.apply__I__O(((1 + arg1) | 0))))), $p_Lcfx70_cfpl_core_BGeometry$__NN$1__Lcfx70_vecquat_Vec__Lcfx70_vecquat_Vec__Lcfx70_vecquat_Vec(this, $as_Lcfx70_vecquat_Vec(b.apply__I__O(arg1)).$minus__Lcfx70_vecquat_Vec__Lcfx70_vecquat_Vec($as_Lcfx70_vecquat_Vec(t.apply__I__O(arg1))), $as_Lcfx70_vecquat_Vec(t.apply__I__O(((1 + arg1) | 0))).$minus__Lcfx70_vecquat_Vec__Lcfx70_vecquat_Vec($as_Lcfx70_vecquat_Vec(t.apply__I__O(arg1))))];
      var elem = $as_sc_Seq($$x1.apply__sc_Seq__sc_GenTraversable($ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), array)));
      b$1.$plus$eq__O__sci_VectorBuilder(elem);
      if ((i === scala$collection$immutable$Range$$lastElement)) {
        break
      };
      i = ((1 + i) | 0)
    }
  };
  var this$11 = b$1.result__sci_Vector();
  $m_sci_Vector$();
  var b$2 = new $c_sci_VectorBuilder();
  var this$13 = this$11.iterator__sci_VectorIterator();
  while (this$13.sci_VectorIterator__f__hasNext) {
    var arg1$1 = this$13.next__O();
    var xs = $as_sc_GenTraversableOnce(arg1$1).seq__sc_TraversableOnce();
    $as_sci_VectorBuilder($f_scg_Growable__$plus$plus$eq__sc_TraversableOnce__scg_Growable(b$2, xs))
  };
  return b$2.result__sci_Vector()
});
$c_Lcfx70_cfpl_core_BGeometry$.prototype.fan__sc_Seq__sc_Seq__sc_Seq = (function(b, t) {
  if (($intMod((((-1) + t.length__I()) | 0), (((-1) + b.length__I()) | 0)) !== 0)) {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Seqs incompartible")
  };
  var tp = $intDiv((((-1) + t.length__I()) | 0), (((-1) + b.length__I()) | 0));
  var end = (((-1) + b.length__I()) | 0);
  var isEmpty = (end <= 0);
  if (isEmpty) {
    var scala$collection$immutable$Range$$numRangeElements = 0
  } else {
    var hi = (end >> 31);
    var scala$collection$immutable$Range$$numRangeElements = (((hi === 0) ? (((-2147483648) ^ end) > (-1)) : (hi > 0)) ? (-1) : end)
  };
  var scala$collection$immutable$Range$$lastElement = (((-1) + end) | 0);
  $m_sci_IndexedSeq$();
  $m_sci_IndexedSeq$();
  $m_sci_Vector$();
  var b$1 = new $c_sci_VectorBuilder();
  if ((scala$collection$immutable$Range$$numRangeElements < 0)) {
    $m_sci_Range$().scala$collection$immutable$Range$$fail__I__I__I__Z__E(0, end, 1, false)
  };
  if ((!isEmpty)) {
    var i = 0;
    while (true) {
      var arg1 = i;
      var x = Math.imul(arg1, tp);
      var end$1 = Math.imul(((1 + arg1) | 0), tp);
      var this$16 = $ct_sci_Range__I__I__I__(new $c_sci_Range(), x, end$1, 1);
      var f = new $c_sjsr_AnonFunction1(((b, arg1, t) => ((j$2) => {
        var j = $uI(j$2);
        var $$x1 = $m_sc_Seq$();
        var array = [$as_Lcfx70_vecquat_Vec(b.apply__I__O(arg1)), $as_Lcfx70_vecquat_Vec(t.apply__I__O(((1 + j) | 0))), $as_Lcfx70_vecquat_Vec(t.apply__I__O(j))];
        return $as_sc_Seq($$x1.apply__sc_Seq__sc_GenTraversable($ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), array)))
      }))(b, arg1, t));
      var this$15 = $m_sci_IndexedSeq$();
      var bf$1 = this$15.scg_GenTraversableFactory__f_ReusableCBFInstance;
      var s = $as_sci_IndexedSeq($f_sc_TraversableLike__map__F1__scg_CanBuildFrom__O(this$16, f, bf$1));
      var b$2 = s.companion__scg_GenericCompanion().newBuilder__scm_Builder();
      s.seq__sc_TraversableOnce().foreach__F1__V(new $c_sjsr_AnonFunction1(((b$2) => ((xs$2) => $as_scm_Builder(b$2.$plus$plus$eq__sc_TraversableOnce__scg_Growable($as_sc_GenTraversableOnce(xs$2).seq__sc_TraversableOnce()))))(b$2)));
      var $$x4 = $as_sc_TraversableLike($as_sc_GenTraversable(b$2.result__O()));
      var $$x3 = $m_sc_Seq$();
      var array$1 = [$as_Lcfx70_vecquat_Vec(b.apply__I__O(arg1)), $as_Lcfx70_vecquat_Vec(b.apply__I__O(((1 + arg1) | 0))), $as_Lcfx70_vecquat_Vec(t.apply__I__O(((Math.imul(arg1, tp) + tp) | 0)))];
      var $$x2 = $$x3.apply__sc_Seq__sc_GenTraversable($ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), array$1));
      var this$20 = $m_sci_IndexedSeq$();
      var elem = $as_sci_IndexedSeq($$x4.$plus$plus__sc_GenTraversableOnce__scg_CanBuildFrom__O($$x2, this$20.scg_GenTraversableFactory__f_ReusableCBFInstance));
      b$1.$plus$eq__O__sci_VectorBuilder(elem);
      if ((i === scala$collection$immutable$Range$$lastElement)) {
        break
      };
      i = ((1 + i) | 0)
    }
  };
  var this$21 = b$1.result__sci_Vector();
  $m_sci_Vector$();
  var b$3 = new $c_sci_VectorBuilder();
  var this$23 = this$21.iterator__sci_VectorIterator();
  while (this$23.sci_VectorIterator__f__hasNext) {
    var arg1$1 = this$23.next__O();
    var xs = $as_sc_GenTraversableOnce(arg1$1).seq__sc_TraversableOnce();
    $as_sci_VectorBuilder($f_scg_Growable__$plus$plus$eq__sc_TraversableOnce__scg_Growable(b$3, xs))
  };
  return b$3.result__sci_Vector()
});
$c_Lcfx70_cfpl_core_BGeometry$.prototype.fanNormals__sc_Seq__sc_Seq__sc_Seq = (function(b, t) {
  if (($intMod((((-1) + t.length__I()) | 0), (((-1) + b.length__I()) | 0)) !== 0)) {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Seqs incompartible")
  };
  var tp = $intDiv((((-1) + t.length__I()) | 0), (((-1) + b.length__I()) | 0));
  var end = (((-1) + b.length__I()) | 0);
  var isEmpty = (end <= 0);
  if (isEmpty) {
    var scala$collection$immutable$Range$$numRangeElements = 0
  } else {
    var hi = (end >> 31);
    var scala$collection$immutable$Range$$numRangeElements = (((hi === 0) ? (((-2147483648) ^ end) > (-1)) : (hi > 0)) ? (-1) : end)
  };
  var scala$collection$immutable$Range$$lastElement = (((-1) + end) | 0);
  $m_sci_IndexedSeq$();
  $m_sci_IndexedSeq$();
  $m_sci_Vector$();
  var b$1 = new $c_sci_VectorBuilder();
  if ((scala$collection$immutable$Range$$numRangeElements < 0)) {
    $m_sci_Range$().scala$collection$immutable$Range$$fail__I__I__I__Z__E(0, end, 1, false)
  };
  if ((!isEmpty)) {
    var i = 0;
    while (true) {
      var arg1 = i;
      var x = Math.imul(arg1, tp);
      var end$1 = Math.imul(((1 + arg1) | 0), tp);
      var this$16 = $ct_sci_Range__I__I__I__(new $c_sci_Range(), x, end$1, 1);
      var f = new $c_sjsr_AnonFunction1(((t, b, arg1) => ((j$2) => {
        var j = $uI(j$2);
        var $$x1 = $m_sc_Seq$();
        var array = [$p_Lcfx70_cfpl_core_BGeometry$__NN$2__Lcfx70_vecquat_Vec__Lcfx70_vecquat_Vec__Lcfx70_vecquat_Vec(this, $as_Lcfx70_vecquat_Vec(t.apply__I__O(((1 + j) | 0))).$minus__Lcfx70_vecquat_Vec__Lcfx70_vecquat_Vec($as_Lcfx70_vecquat_Vec(b.apply__I__O(arg1))), $as_Lcfx70_vecquat_Vec(t.apply__I__O(j)).$minus__Lcfx70_vecquat_Vec__Lcfx70_vecquat_Vec($as_Lcfx70_vecquat_Vec(b.apply__I__O(arg1)))), $p_Lcfx70_cfpl_core_BGeometry$__NN$2__Lcfx70_vecquat_Vec__Lcfx70_vecquat_Vec__Lcfx70_vecquat_Vec(this, $as_Lcfx70_vecquat_Vec(t.apply__I__O(j)).$minus__Lcfx70_vecquat_Vec__Lcfx70_vecquat_Vec($as_Lcfx70_vecquat_Vec(t.apply__I__O(((1 + j) | 0)))), $as_Lcfx70_vecquat_Vec(b.apply__I__O(arg1)).$minus__Lcfx70_vecquat_Vec__Lcfx70_vecquat_Vec($as_Lcfx70_vecquat_Vec(t.apply__I__O(((1 + j) | 0))))), $p_Lcfx70_cfpl_core_BGeometry$__NN$2__Lcfx70_vecquat_Vec__Lcfx70_vecquat_Vec__Lcfx70_vecquat_Vec(this, $as_Lcfx70_vecquat_Vec(b.apply__I__O(arg1)).$minus__Lcfx70_vecquat_Vec__Lcfx70_vecquat_Vec($as_Lcfx70_vecquat_Vec(t.apply__I__O(j))), $as_Lcfx70_vecquat_Vec(t.apply__I__O(((1 + j) | 0))).$minus__Lcfx70_vecquat_Vec__Lcfx70_vecquat_Vec($as_Lcfx70_vecquat_Vec(t.apply__I__O(j))))];
        return $as_sc_Seq($$x1.apply__sc_Seq__sc_GenTraversable($ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), array)))
      }))(t, b, arg1));
      var this$15 = $m_sci_IndexedSeq$();
      var bf$1 = this$15.scg_GenTraversableFactory__f_ReusableCBFInstance;
      var s = $as_sci_IndexedSeq($f_sc_TraversableLike__map__F1__scg_CanBuildFrom__O(this$16, f, bf$1));
      var b$2 = s.companion__scg_GenericCompanion().newBuilder__scm_Builder();
      s.seq__sc_TraversableOnce().foreach__F1__V(new $c_sjsr_AnonFunction1(((b$2) => ((xs$2) => $as_scm_Builder(b$2.$plus$plus$eq__sc_TraversableOnce__scg_Growable($as_sc_GenTraversableOnce(xs$2).seq__sc_TraversableOnce()))))(b$2)));
      var $$x4 = $as_sc_TraversableLike($as_sc_GenTraversable(b$2.result__O()));
      var $$x3 = $m_sc_Seq$();
      var array$1 = [$p_Lcfx70_cfpl_core_BGeometry$__NN$2__Lcfx70_vecquat_Vec__Lcfx70_vecquat_Vec__Lcfx70_vecquat_Vec(this, $as_Lcfx70_vecquat_Vec(b.apply__I__O(((1 + arg1) | 0))).$minus__Lcfx70_vecquat_Vec__Lcfx70_vecquat_Vec($as_Lcfx70_vecquat_Vec(b.apply__I__O(arg1))), $as_Lcfx70_vecquat_Vec(t.apply__I__O(((Math.imul(arg1, tp) + tp) | 0))).$minus__Lcfx70_vecquat_Vec__Lcfx70_vecquat_Vec($as_Lcfx70_vecquat_Vec(b.apply__I__O(arg1)))), $p_Lcfx70_cfpl_core_BGeometry$__NN$2__Lcfx70_vecquat_Vec__Lcfx70_vecquat_Vec__Lcfx70_vecquat_Vec(this, $as_Lcfx70_vecquat_Vec(t.apply__I__O(((Math.imul(arg1, tp) + tp) | 0))).$minus__Lcfx70_vecquat_Vec__Lcfx70_vecquat_Vec($as_Lcfx70_vecquat_Vec(b.apply__I__O(((1 + arg1) | 0)))), $as_Lcfx70_vecquat_Vec(b.apply__I__O(arg1)).$minus__Lcfx70_vecquat_Vec__Lcfx70_vecquat_Vec($as_Lcfx70_vecquat_Vec(b.apply__I__O(((1 + arg1) | 0))))), $p_Lcfx70_cfpl_core_BGeometry$__NN$2__Lcfx70_vecquat_Vec__Lcfx70_vecquat_Vec__Lcfx70_vecquat_Vec(this, $as_Lcfx70_vecquat_Vec(b.apply__I__O(arg1)).$minus__Lcfx70_vecquat_Vec__Lcfx70_vecquat_Vec($as_Lcfx70_vecquat_Vec(t.apply__I__O(((Math.imul(arg1, tp) + tp) | 0)))), $as_Lcfx70_vecquat_Vec(b.apply__I__O(((1 + arg1) | 0))).$minus__Lcfx70_vecquat_Vec__Lcfx70_vecquat_Vec($as_Lcfx70_vecquat_Vec(t.apply__I__O(((Math.imul(arg1, tp) + tp) | 0)))))];
      var $$x2 = $$x3.apply__sc_Seq__sc_GenTraversable($ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), array$1));
      var this$20 = $m_sci_IndexedSeq$();
      var elem = $as_sci_IndexedSeq($$x4.$plus$plus__sc_GenTraversableOnce__scg_CanBuildFrom__O($$x2, this$20.scg_GenTraversableFactory__f_ReusableCBFInstance));
      b$1.$plus$eq__O__sci_VectorBuilder(elem);
      if ((i === scala$collection$immutable$Range$$lastElement)) {
        break
      };
      i = ((1 + i) | 0)
    }
  };
  var this$21 = b$1.result__sci_Vector();
  $m_sci_Vector$();
  var b$3 = new $c_sci_VectorBuilder();
  var this$23 = this$21.iterator__sci_VectorIterator();
  while (this$23.sci_VectorIterator__f__hasNext) {
    var arg1$1 = this$23.next__O();
    var xs = $as_sc_GenTraversableOnce(arg1$1).seq__sc_TraversableOnce();
    $as_sci_VectorBuilder($f_scg_Growable__$plus$plus$eq__sc_TraversableOnce__scg_Growable(b$3, xs))
  };
  return b$3.result__sci_Vector()
});
var $d_Lcfx70_cfpl_core_BGeometry$ = new $TypeData().initClass({
  Lcfx70_cfpl_core_BGeometry$: 0
}, false, "cfx70.cfpl.core.BGeometry$", {
  Lcfx70_cfpl_core_BGeometry$: 1,
  O: 1
});
$c_Lcfx70_cfpl_core_BGeometry$.prototype.$classData = $d_Lcfx70_cfpl_core_BGeometry$;
var $n_Lcfx70_cfpl_core_BGeometry$;
function $m_Lcfx70_cfpl_core_BGeometry$() {
  if ((!$n_Lcfx70_cfpl_core_BGeometry$)) {
    $n_Lcfx70_cfpl_core_BGeometry$ = new $c_Lcfx70_cfpl_core_BGeometry$()
  };
  return $n_Lcfx70_cfpl_core_BGeometry$
}
/** @constructor */
function $c_Lcfx70_cfpl_core_CommonHelpers$() {
  this.Lcfx70_cfpl_core_CommonHelpers$__f_$ = null;
  $n_Lcfx70_cfpl_core_CommonHelpers$ = this;
  this.Lcfx70_cfpl_core_CommonHelpers$__f_$ = $m_sjs_js_Dynamic$literal$()
}
$c_Lcfx70_cfpl_core_CommonHelpers$.prototype = new $h_O();
$c_Lcfx70_cfpl_core_CommonHelpers$.prototype.constructor = $c_Lcfx70_cfpl_core_CommonHelpers$;
/** @constructor */
function $h_Lcfx70_cfpl_core_CommonHelpers$() {
  /*<skip>*/
}
$h_Lcfx70_cfpl_core_CommonHelpers$.prototype = $c_Lcfx70_cfpl_core_CommonHelpers$.prototype;
$c_Lcfx70_cfpl_core_CommonHelpers$.prototype.vec2vec3__Lcfx70_vecquat_Vec__Lcfx70_threejsfacade_THREE$Vector3 = (function(pt) {
  return new $i_three.Vector3($uD(pt.Lcfx70_vecquat_Vec__f_crds.apply__I__O(0)), $uD(pt.Lcfx70_vecquat_Vec__f_crds.apply__I__O(1)), $uD(pt.Lcfx70_vecquat_Vec__f_crds.apply__I__O(2)))
});
var $d_Lcfx70_cfpl_core_CommonHelpers$ = new $TypeData().initClass({
  Lcfx70_cfpl_core_CommonHelpers$: 0
}, false, "cfx70.cfpl.core.CommonHelpers$", {
  Lcfx70_cfpl_core_CommonHelpers$: 1,
  O: 1
});
$c_Lcfx70_cfpl_core_CommonHelpers$.prototype.$classData = $d_Lcfx70_cfpl_core_CommonHelpers$;
var $n_Lcfx70_cfpl_core_CommonHelpers$;
function $m_Lcfx70_cfpl_core_CommonHelpers$() {
  if ((!$n_Lcfx70_cfpl_core_CommonHelpers$)) {
    $n_Lcfx70_cfpl_core_CommonHelpers$ = new $c_Lcfx70_cfpl_core_CommonHelpers$()
  };
  return $n_Lcfx70_cfpl_core_CommonHelpers$
}
/** @constructor */
function $c_Lcfx70_cfpl_core_Helpers2d$RichContext(ctx) {
  this.Lcfx70_cfpl_core_Helpers2d$RichContext__f_ctx = null;
  this.Lcfx70_cfpl_core_Helpers2d$RichContext__f_lscale = 0.0;
  this.Lcfx70_cfpl_core_Helpers2d$RichContext__f_ctx = ctx;
  this.Lcfx70_cfpl_core_Helpers2d$RichContext__f_lscale = 1.0;
  var array = [0.0, 0.0];
  var crds = $ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), array);
  $ct_Lcfx70_vecquat_Vec__sc_Seq__(new $c_Lcfx70_vecquat_Vec(), crds)
}
$c_Lcfx70_cfpl_core_Helpers2d$RichContext.prototype = new $h_O();
$c_Lcfx70_cfpl_core_Helpers2d$RichContext.prototype.constructor = $c_Lcfx70_cfpl_core_Helpers2d$RichContext;
/** @constructor */
function $h_Lcfx70_cfpl_core_Helpers2d$RichContext() {
  /*<skip>*/
}
$h_Lcfx70_cfpl_core_Helpers2d$RichContext.prototype = $c_Lcfx70_cfpl_core_Helpers2d$RichContext.prototype;
$c_Lcfx70_cfpl_core_Helpers2d$RichContext.prototype.polygon__Lcfx70_vecquat_Vec__sc_Seq__Lcfx70_cfpl_core_Helpers2d$RichContext = (function(st, pts) {
  this.M__D__D__Lcfx70_cfpl_core_Helpers2d$RichContext($uD(st.Lcfx70_vecquat_Vec__f_crds.apply__I__O(0)), $uD(st.Lcfx70_vecquat_Vec__f_crds.apply__I__O(1)));
  pts.foreach__F1__V(new $c_sjsr_AnonFunction1(((pt$2) => {
    var pt = $as_Lcfx70_vecquat_Vec(pt$2);
    return this.L__D__D__Lcfx70_cfpl_core_Helpers2d$RichContext($uD(pt.Lcfx70_vecquat_Vec__f_crds.apply__I__O(0)), $uD(pt.Lcfx70_vecquat_Vec__f_crds.apply__I__O(1)))
  })));
  this.Lcfx70_cfpl_core_Helpers2d$RichContext__f_ctx.closePath();
  return this
});
$c_Lcfx70_cfpl_core_Helpers2d$RichContext.prototype.M__D__D__Lcfx70_cfpl_core_Helpers2d$RichContext = (function(x, y) {
  this.Lcfx70_cfpl_core_Helpers2d$RichContext__f_ctx.moveTo((x * this.Lcfx70_cfpl_core_Helpers2d$RichContext__f_lscale), (y * this.Lcfx70_cfpl_core_Helpers2d$RichContext__f_lscale));
  var array = [(x * this.Lcfx70_cfpl_core_Helpers2d$RichContext__f_lscale), (y * this.Lcfx70_cfpl_core_Helpers2d$RichContext__f_lscale)];
  var crds = $ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), array);
  $ct_Lcfx70_vecquat_Vec__sc_Seq__(new $c_Lcfx70_vecquat_Vec(), crds);
  return this
});
$c_Lcfx70_cfpl_core_Helpers2d$RichContext.prototype.L__D__D__Lcfx70_cfpl_core_Helpers2d$RichContext = (function(x, y) {
  this.Lcfx70_cfpl_core_Helpers2d$RichContext__f_ctx.lineTo((x * this.Lcfx70_cfpl_core_Helpers2d$RichContext__f_lscale), (y * this.Lcfx70_cfpl_core_Helpers2d$RichContext__f_lscale));
  var array = [(x * this.Lcfx70_cfpl_core_Helpers2d$RichContext__f_lscale), (y * this.Lcfx70_cfpl_core_Helpers2d$RichContext__f_lscale)];
  var crds = $ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), array);
  $ct_Lcfx70_vecquat_Vec__sc_Seq__(new $c_Lcfx70_vecquat_Vec(), crds);
  return this
});
var $d_Lcfx70_cfpl_core_Helpers2d$RichContext = new $TypeData().initClass({
  Lcfx70_cfpl_core_Helpers2d$RichContext: 0
}, false, "cfx70.cfpl.core.Helpers2d$RichContext", {
  Lcfx70_cfpl_core_Helpers2d$RichContext: 1,
  O: 1
});
$c_Lcfx70_cfpl_core_Helpers2d$RichContext.prototype.$classData = $d_Lcfx70_cfpl_core_Helpers2d$RichContext;
/** @constructor */
function $c_Lcfx70_cfpl_core_Helpers3d$() {
  /*<skip>*/
}
$c_Lcfx70_cfpl_core_Helpers3d$.prototype = new $h_O();
$c_Lcfx70_cfpl_core_Helpers3d$.prototype.constructor = $c_Lcfx70_cfpl_core_Helpers3d$;
/** @constructor */
function $h_Lcfx70_cfpl_core_Helpers3d$() {
  /*<skip>*/
}
$h_Lcfx70_cfpl_core_Helpers3d$.prototype = $c_Lcfx70_cfpl_core_Helpers3d$.prototype;
$c_Lcfx70_cfpl_core_Helpers3d$.prototype.set3dRenderer__T__T5 = (function(canvasId) {
  var cnvDev = document.querySelector(canvasId);
  var renderer = new $i_three.WebGLRenderer(($m_Lcfx70_cfpl_core_CommonHelpers$(), {
    "canvas": cnvDev
  }));
  var scene = new $i_three.Scene();
  scene.background = new $i_three.Color(1.5987706E7);
  var camera3d = new $i_three.PerspectiveCamera(75.0, 1.3333333333333333, 0.1, 2000.0);
  var light = new $i_three.DirectionalLight(16777215, 0.5);
  scene.add(light);
  var controls = new $i_three$002faddons$002fOrbitControls$002ejs.OrbitControls(camera3d, renderer.domElement);
  controls.addEventListener("change", ((arg1$2) => {
    $m_Lcfx70_cfpl_core_Helpers3d$().cfx70$cfpl$core$Helpers3d$$$anonfun$set3dRenderer$1__Lorg_scalajs_dom_Event__Lcfx70_threejsfacade_THREE$DirectionalLight__Lcfx70_threejsfacade_THREE$PerspectiveCamera__Lcfx70_threejsfacade_THREE$WebGLRenderer__Lcfx70_threejsfacade_THREE$Scene__V(arg1$2, light, camera3d, renderer, scene)
  }));
  return new $c_T5(renderer, scene, camera3d, light, controls)
});
$c_Lcfx70_cfpl_core_Helpers3d$.prototype.cfx70$cfpl$core$Helpers3d$$$anonfun$set3dRenderer$1__Lorg_scalajs_dom_Event__Lcfx70_threejsfacade_THREE$DirectionalLight__Lcfx70_threejsfacade_THREE$PerspectiveCamera__Lcfx70_threejsfacade_THREE$WebGLRenderer__Lcfx70_threejsfacade_THREE$Scene__V = (function(e, light$1, camera3d$1, renderer$1, scene$1) {
  light$1.position.set($uD(camera3d$1.position.x), $uD(camera3d$1.position.y), $uD(camera3d$1.position.z));
  renderer$1.render(scene$1, camera3d$1)
});
var $d_Lcfx70_cfpl_core_Helpers3d$ = new $TypeData().initClass({
  Lcfx70_cfpl_core_Helpers3d$: 0
}, false, "cfx70.cfpl.core.Helpers3d$", {
  Lcfx70_cfpl_core_Helpers3d$: 1,
  O: 1
});
$c_Lcfx70_cfpl_core_Helpers3d$.prototype.$classData = $d_Lcfx70_cfpl_core_Helpers3d$;
var $n_Lcfx70_cfpl_core_Helpers3d$;
function $m_Lcfx70_cfpl_core_Helpers3d$() {
  if ((!$n_Lcfx70_cfpl_core_Helpers3d$)) {
    $n_Lcfx70_cfpl_core_Helpers3d$ = new $c_Lcfx70_cfpl_core_Helpers3d$()
  };
  return $n_Lcfx70_cfpl_core_Helpers3d$
}
/** @constructor */
function $c_Lcfx70_cfpl_core_Model() {
  /*<skip>*/
}
$c_Lcfx70_cfpl_core_Model.prototype = new $h_O();
$c_Lcfx70_cfpl_core_Model.prototype.constructor = $c_Lcfx70_cfpl_core_Model;
/** @constructor */
function $h_Lcfx70_cfpl_core_Model() {
  /*<skip>*/
}
$h_Lcfx70_cfpl_core_Model.prototype = $c_Lcfx70_cfpl_core_Model.prototype;
$c_Lcfx70_cfpl_core_Model.prototype.bsphere__Lcfx70_threejsfacade_THREE$Sphere = (function() {
  return new $i_three.Box3().setFromObject(this.meshes__Lcfx70_threejsfacade_THREE$Object3D()).getBoundingSphere(new $i_three.Sphere())
});
$c_Lcfx70_cfpl_core_Model.prototype.dispose__V = (function() {
  var array = this.meshes__Lcfx70_threejsfacade_THREE$Object3D().children;
  var i = 0;
  var len = $uI(array.length);
  while ((i < len)) {
    var index = i;
    var arg1 = array[index];
    if ($uZ((arg1 instanceof $i_three.Mesh))) {
      arg1.geometry.dispose()
    } else {
      throw new $c_s_MatchError(arg1)
    };
    i = ((1 + i) | 0)
  }
});
/** @constructor */
function $c_Lcfx70_cfpl_core_Model$() {
  this.Lcfx70_cfpl_core_Model$__f_phongBlueMaterial = null;
  $n_Lcfx70_cfpl_core_Model$ = this;
  var $$x2 = $i_three.MeshPhongMaterial;
  $m_Lcfx70_cfpl_core_CommonHelpers$();
  var value = $m_Lcfx70_threejsfacade_THREE$().Lcfx70_threejsfacade_THREE$__f_DoubleSide;
  var $$x1 = new $$x2({
    "color": 7979000,
    "side": value
  });
  this.Lcfx70_cfpl_core_Model$__f_phongBlueMaterial = $$x1
}
$c_Lcfx70_cfpl_core_Model$.prototype = new $h_O();
$c_Lcfx70_cfpl_core_Model$.prototype.constructor = $c_Lcfx70_cfpl_core_Model$;
/** @constructor */
function $h_Lcfx70_cfpl_core_Model$() {
  /*<skip>*/
}
$h_Lcfx70_cfpl_core_Model$.prototype = $c_Lcfx70_cfpl_core_Model$.prototype;
var $d_Lcfx70_cfpl_core_Model$ = new $TypeData().initClass({
  Lcfx70_cfpl_core_Model$: 0
}, false, "cfx70.cfpl.core.Model$", {
  Lcfx70_cfpl_core_Model$: 1,
  O: 1
});
$c_Lcfx70_cfpl_core_Model$.prototype.$classData = $d_Lcfx70_cfpl_core_Model$;
var $n_Lcfx70_cfpl_core_Model$;
function $m_Lcfx70_cfpl_core_Model$() {
  if ((!$n_Lcfx70_cfpl_core_Model$)) {
    $n_Lcfx70_cfpl_core_Model$ = new $c_Lcfx70_cfpl_core_Model$()
  };
  return $n_Lcfx70_cfpl_core_Model$
}
function $f_Lcfx70_cfpl_core_MoveTopBottom__rotate__D__Lcfx70_vecquat_Vec__Lcfx70_cfpl_core_MoveTopBottom($thiz, ang, v) {
  var rot = new $c_sjsr_AnonFunction1(((p$2) => {
    var p = $as_Lcfx70_vecquat_Vec(p$2);
    return $m_Lcfx70_vecquat_Quat$().rotate__Lcfx70_vecquat_Vec__D__Lcfx70_vecquat_Vec__Lcfx70_vecquat_Vec(p, ang, v)
  }));
  var $$x2 = $thiz.bpts__sc_Seq();
  var $$x1 = new $c_sjsr_AnonFunction1(((x$2$2) => {
    var x$2 = $as_Lcfx70_vecquat_Vec(x$2$2);
    return $as_Lcfx70_vecquat_Vec(rot.apply__O__O(x$2))
  }));
  var this$3 = $m_sc_Seq$();
  $thiz.bpts_$eq__sc_Seq__V($as_sc_Seq($$x2.map__F1__scg_CanBuildFrom__O($$x1, this$3.scg_GenTraversableFactory__f_ReusableCBFInstance)));
  var $$x4 = $thiz.tpts__sc_Seq();
  var $$x3 = new $c_sjsr_AnonFunction1(((x$3$2) => {
    var x$3 = $as_Lcfx70_vecquat_Vec(x$3$2);
    return $as_Lcfx70_vecquat_Vec(rot.apply__O__O(x$3))
  }));
  var this$4 = $m_sc_Seq$();
  $thiz.tpts_$eq__sc_Seq__V($as_sc_Seq($$x4.map__F1__scg_CanBuildFrom__O($$x3, this$4.scg_GenTraversableFactory__f_ReusableCBFInstance)));
  return $thiz
}
function $f_Lcfx70_cfpl_core_MoveTopBottom__translate__Lcfx70_vecquat_Vec__Lcfx70_cfpl_core_MoveTopBottom($thiz, v) {
  var trans = new $c_sjsr_AnonFunction1(((p$2) => {
    var p = $as_Lcfx70_vecquat_Vec(p$2);
    return p.$plus__Lcfx70_vecquat_Vec__Lcfx70_vecquat_Vec(v)
  }));
  var $$x2 = $thiz.bpts__sc_Seq();
  var $$x1 = new $c_sjsr_AnonFunction1(((x$4$2) => {
    var x$4 = $as_Lcfx70_vecquat_Vec(x$4$2);
    return $as_Lcfx70_vecquat_Vec(trans.apply__O__O(x$4))
  }));
  var this$3 = $m_sc_Seq$();
  $thiz.bpts_$eq__sc_Seq__V($as_sc_Seq($$x2.map__F1__scg_CanBuildFrom__O($$x1, this$3.scg_GenTraversableFactory__f_ReusableCBFInstance)));
  var $$x4 = $thiz.tpts__sc_Seq();
  var $$x3 = new $c_sjsr_AnonFunction1(((x$5$2) => {
    var x$5 = $as_Lcfx70_vecquat_Vec(x$5$2);
    return $as_Lcfx70_vecquat_Vec(trans.apply__O__O(x$5))
  }));
  var this$4 = $m_sc_Seq$();
  $thiz.tpts_$eq__sc_Seq__V($as_sc_Seq($$x4.map__F1__scg_CanBuildFrom__O($$x3, this$4.scg_GenTraversableFactory__f_ReusableCBFInstance)));
  return $thiz
}
/** @constructor */
function $c_Lcfx70_cfpl_core_Plane3$() {
  /*<skip>*/
}
$c_Lcfx70_cfpl_core_Plane3$.prototype = new $h_O();
$c_Lcfx70_cfpl_core_Plane3$.prototype.constructor = $c_Lcfx70_cfpl_core_Plane3$;
/** @constructor */
function $h_Lcfx70_cfpl_core_Plane3$() {
  /*<skip>*/
}
$h_Lcfx70_cfpl_core_Plane3$.prototype = $c_Lcfx70_cfpl_core_Plane3$.prototype;
$c_Lcfx70_cfpl_core_Plane3$.prototype.apply__Lcfx70_vecquat_Vec__Lcfx70_vecquat_Vec__Lcfx70_vecquat_Vec__Lcfx70_cfpl_core_Plane3 = (function(p1, p2, p3) {
  var $$x1 = $m_Lcfx70_vecquat_Mat$();
  var array = [$uD(p1.Lcfx70_vecquat_Vec__f_crds.apply__I__O(1)), $uD(p1.Lcfx70_vecquat_Vec__f_crds.apply__I__O(2)), 1.0, $uD(p2.Lcfx70_vecquat_Vec__f_crds.apply__I__O(1)), $uD(p2.Lcfx70_vecquat_Vec__f_crds.apply__I__O(2)), 1.0, $uD(p3.Lcfx70_vecquat_Vec__f_crds.apply__I__O(1)), $uD(p3.Lcfx70_vecquat_Vec__f_crds.apply__I__O(2)), 1.0];
  var a = $$x1.apply__I__sc_Seq__Lcfx70_vecquat_Mat(3, $ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), array)).det__D();
  var $$x2 = $m_Lcfx70_vecquat_Mat$();
  var array$1 = [$uD(p1.Lcfx70_vecquat_Vec__f_crds.apply__I__O(2)), $uD(p1.Lcfx70_vecquat_Vec__f_crds.apply__I__O(0)), 1.0, $uD(p2.Lcfx70_vecquat_Vec__f_crds.apply__I__O(2)), $uD(p2.Lcfx70_vecquat_Vec__f_crds.apply__I__O(0)), 1.0, $uD(p3.Lcfx70_vecquat_Vec__f_crds.apply__I__O(2)), $uD(p3.Lcfx70_vecquat_Vec__f_crds.apply__I__O(0)), 1.0];
  var b = $$x2.apply__I__sc_Seq__Lcfx70_vecquat_Mat(3, $ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), array$1)).det__D();
  var $$x3 = $m_Lcfx70_vecquat_Mat$();
  var array$2 = [$uD(p1.Lcfx70_vecquat_Vec__f_crds.apply__I__O(0)), $uD(p1.Lcfx70_vecquat_Vec__f_crds.apply__I__O(1)), 1.0, $uD(p2.Lcfx70_vecquat_Vec__f_crds.apply__I__O(0)), $uD(p2.Lcfx70_vecquat_Vec__f_crds.apply__I__O(1)), 1.0, $uD(p3.Lcfx70_vecquat_Vec__f_crds.apply__I__O(0)), $uD(p3.Lcfx70_vecquat_Vec__f_crds.apply__I__O(1)), 1.0];
  var c = $$x3.apply__I__sc_Seq__Lcfx70_vecquat_Mat(3, $ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), array$2)).det__D();
  var $$x4 = $m_Lcfx70_vecquat_Mat$();
  var array$3 = [$uD(p1.Lcfx70_vecquat_Vec__f_crds.apply__I__O(0)), $uD(p1.Lcfx70_vecquat_Vec__f_crds.apply__I__O(1)), $uD(p1.Lcfx70_vecquat_Vec__f_crds.apply__I__O(2)), $uD(p2.Lcfx70_vecquat_Vec__f_crds.apply__I__O(0)), $uD(p2.Lcfx70_vecquat_Vec__f_crds.apply__I__O(1)), $uD(p2.Lcfx70_vecquat_Vec__f_crds.apply__I__O(2)), $uD(p3.Lcfx70_vecquat_Vec__f_crds.apply__I__O(0)), $uD(p3.Lcfx70_vecquat_Vec__f_crds.apply__I__O(1)), $uD(p3.Lcfx70_vecquat_Vec__f_crds.apply__I__O(2))];
  var d = $$x4.apply__I__sc_Seq__Lcfx70_vecquat_Mat(3, $ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), array$3)).det__D();
  return this.apply__D__D__D__D__Lcfx70_cfpl_core_Plane3(a, b, c, d)
});
$c_Lcfx70_cfpl_core_Plane3$.prototype.apply__D__D__D__D__Lcfx70_cfpl_core_Plane3 = (function(a, b, c, d) {
  var array = [a, b, c];
  var crds = $ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), array);
  var v = $ct_Lcfx70_vecquat_Vec__sc_Seq__(new $c_Lcfx70_vecquat_Vec(), crds);
  var nn = v.normalize__Lcfx70_vecquat_Vec();
  var x = v.norm__D();
  var pp = ((-d) / $uD(Math.sqrt(x)));
  return new $c_Lcfx70_cfpl_core_Plane3(nn, pp)
});
var $d_Lcfx70_cfpl_core_Plane3$ = new $TypeData().initClass({
  Lcfx70_cfpl_core_Plane3$: 0
}, false, "cfx70.cfpl.core.Plane3$", {
  Lcfx70_cfpl_core_Plane3$: 1,
  O: 1
});
$c_Lcfx70_cfpl_core_Plane3$.prototype.$classData = $d_Lcfx70_cfpl_core_Plane3$;
var $n_Lcfx70_cfpl_core_Plane3$;
function $m_Lcfx70_cfpl_core_Plane3$() {
  if ((!$n_Lcfx70_cfpl_core_Plane3$)) {
    $n_Lcfx70_cfpl_core_Plane3$ = new $c_Lcfx70_cfpl_core_Plane3$()
  };
  return $n_Lcfx70_cfpl_core_Plane3$
}
function $f_Lcfx70_cfpl_core_WireframeHelper__wireframe__D__Lcfx70_threejsfacade_THREE$Line($thiz, color) {
  var $$x4 = new $i_three.BufferGeometry();
  var $$x3 = $m_sjs_js_JSConverters$JSRichGenTraversableOnce$();
  var $$x2 = $thiz.pts__sc_Seq();
  var $$x1 = new $c_sjsr_AnonFunction1(((x$1$2) => {
    var x$1 = $as_Lcfx70_vecquat_Vec(x$1$2);
    var this$2 = $m_Lcfx70_cfpl_core_CommonHelpers$();
    return this$2.vec2vec3__Lcfx70_vecquat_Vec__Lcfx70_threejsfacade_THREE$Vector3(x$1)
  }));
  var this$3 = $m_sc_Seq$();
  var col = $as_sc_GenTraversableOnce($$x2.map__F1__scg_CanBuildFrom__O($$x1, this$3.scg_GenTraversableFactory__f_ReusableCBFInstance));
  var gs = $$x4.setFromPoints($$x3.toJSArray$extension__sc_GenTraversableOnce__sjs_js_Array(col));
  var lm = new $i_three.LineBasicMaterial();
  lm.color = new $i_three.Color(color);
  return new $i_three.Line(gs, lm)
}
/** @constructor */
function $c_Lcfx70_cfpl_draft_DetApp$() {
  this.Lcfx70_cfpl_draft_DetApp$__f_descr = null;
  this.Lcfx70_cfpl_draft_DetApp$__f_ctxDraft = null;
  this.Lcfx70_cfpl_draft_DetApp$__f_ctxDev = null;
  this.Lcfx70_cfpl_draft_DetApp$__f_x$1 = null;
  this.Lcfx70_cfpl_draft_DetApp$__f_renderer = null;
  this.Lcfx70_cfpl_draft_DetApp$__f_scene = null;
  this.Lcfx70_cfpl_draft_DetApp$__f_camera3d = null;
  this.Lcfx70_cfpl_draft_DetApp$__f_light = null;
  this.Lcfx70_cfpl_draft_DetApp$__f_controls = null;
  this.Lcfx70_cfpl_draft_DetApp$__f_model = null;
  this.Lcfx70_cfpl_draft_DetApp$__f_animation = false;
  $n_Lcfx70_cfpl_draft_DetApp$ = this;
  this.Lcfx70_cfpl_draft_DetApp$__f_descr = document.querySelector("#descr");
  var cnvDraft = document.querySelector("#canvasdraft");
  this.Lcfx70_cfpl_draft_DetApp$__f_ctxDraft = cnvDraft.getContext("2d");
  this.Lcfx70_cfpl_draft_DetApp$__f_ctxDraft.font = "italic 1.8em sans-serif";
  this.Lcfx70_cfpl_draft_DetApp$__f_ctxDraft.textBaseline = "middle";
  this.Lcfx70_cfpl_draft_DetApp$__f_ctxDraft.textAlign = "center";
  var cnvDev = document.querySelector("#canvasdev");
  this.Lcfx70_cfpl_draft_DetApp$__f_ctxDev = cnvDev.getContext("2d");
  this.Lcfx70_cfpl_draft_DetApp$__f_ctxDev.font = "italic 1.8em sans-serif";
  this.Lcfx70_cfpl_draft_DetApp$__f_ctxDev.textBaseline = "middle";
  this.Lcfx70_cfpl_draft_DetApp$__f_ctxDev.textAlign = "center";
  var x1 = $m_Lcfx70_cfpl_core_Helpers3d$().set3dRenderer__T__T5("#canvas3d");
  if ((x1 === null)) {
    throw new $c_s_MatchError(x1)
  };
  var renderer = x1.T5__f__1;
  var scene = x1.T5__f__2;
  var camera3d = x1.T5__f__3;
  var light = x1.T5__f__4;
  var controls = x1.T5__f__5;
  this.Lcfx70_cfpl_draft_DetApp$__f_x$1 = new $c_T5(renderer, scene, camera3d, light, controls);
  this.Lcfx70_cfpl_draft_DetApp$__f_renderer = this.Lcfx70_cfpl_draft_DetApp$__f_x$1.T5__f__1;
  this.Lcfx70_cfpl_draft_DetApp$__f_scene = this.Lcfx70_cfpl_draft_DetApp$__f_x$1.T5__f__2;
  this.Lcfx70_cfpl_draft_DetApp$__f_camera3d = this.Lcfx70_cfpl_draft_DetApp$__f_x$1.T5__f__3;
  this.Lcfx70_cfpl_draft_DetApp$__f_light = this.Lcfx70_cfpl_draft_DetApp$__f_x$1.T5__f__4;
  this.Lcfx70_cfpl_draft_DetApp$__f_controls = this.Lcfx70_cfpl_draft_DetApp$__f_x$1.T5__f__5;
  this.Lcfx70_cfpl_draft_DetApp$__f_model = null;
  this.Lcfx70_cfpl_draft_DetApp$__f_animation = true
}
$c_Lcfx70_cfpl_draft_DetApp$.prototype = new $h_O();
$c_Lcfx70_cfpl_draft_DetApp$.prototype.constructor = $c_Lcfx70_cfpl_draft_DetApp$;
/** @constructor */
function $h_Lcfx70_cfpl_draft_DetApp$() {
  /*<skip>*/
}
$h_Lcfx70_cfpl_draft_DetApp$.prototype = $c_Lcfx70_cfpl_draft_DetApp$.prototype;
$c_Lcfx70_cfpl_draft_DetApp$.prototype.setRedRR__D__D__D__D__D__D__D__V = (function(a1, b1, a2, b2, da, db, h) {
  this.setModel__Lcfx70_cfpl_core_Model__V(new $c_Lcfx70_cfpl_core_RedRR(a1, b1, a2, b2, h, da, db, 30.0, 30.0))
});
$c_Lcfx70_cfpl_draft_DetApp$.prototype.setRedRC__D__D__D__D__D__D__D__V = (function(a1, b1, d, da, db, h, f) {
  this.setModel__Lcfx70_cfpl_core_Model__V(new $c_Lcfx70_cfpl_core_RedRC(a1, b1, d, h, da, db, f, 50.0))
});
$c_Lcfx70_cfpl_draft_DetApp$.prototype.setRedCC__D__D__D__D__D__D__V = (function(d1, d2, dc, h, f1, f2) {
  this.setModel__Lcfx70_cfpl_core_Model__V(new $c_Lcfx70_cfpl_core_RedCC(d1, d2, dc, h, f1, f2))
});
$c_Lcfx70_cfpl_draft_DetApp$.prototype.setBrunchCC__D__D__D__D__D__D__D__D__D__D__D__D__D__V = (function(d1, d2, h1, dd1, d3, d4, h2, dd2, ang, h3, df1, df2, df3) {
  this.setModel__Lcfx70_cfpl_core_Model__V(new $c_Lcfx70_cfpl_core_BrunchCC(d1, d2, h1, dd1, d3, d4, h2, dd2, ang, h3, df1, df2, df3))
});
$c_Lcfx70_cfpl_draft_DetApp$.prototype.testCone__V = (function() {
  var axesHelper = new $i_three.AxesHelper(100.0);
  var bc = new $c_Lcfx70_cfpl_core_BCylinder(70.0, 50.0, 0.0, 6.283185307179586);
  var this$4 = $ct_Lcfx70_cfpl_core_BCone__D__D__D__D__D__(new $c_Lcfx70_cfpl_core_BCone(), 40.0, 20.0, 40.0, 5.0, 6.283185307179586);
  var array = [0.0, 1.0, 0.0];
  var crds = $ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), array);
  var v = $ct_Lcfx70_vecquat_Vec__sc_Seq__(new $c_Lcfx70_vecquat_Vec(), crds);
  var this$8 = $f_Lcfx70_cfpl_core_MoveTopBottom__rotate__D__Lcfx70_vecquat_Vec__Lcfx70_cfpl_core_MoveTopBottom(this$4, 0.7853981633974483, v);
  var array$1 = [18.0, 0.0, 15.0];
  var crds$1 = $ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), array$1);
  var v$1 = $ct_Lcfx70_vecquat_Vec__sc_Seq__(new $c_Lcfx70_vecquat_Vec(), crds$1);
  var bc1 = $as_Lcfx70_cfpl_core_BCone($f_Lcfx70_cfpl_core_MoveTopBottom__translate__Lcfx70_vecquat_Vec__Lcfx70_cfpl_core_MoveTopBottom(this$8, v$1)).cut__Lcfx70_cfpl_core_LineIntersectable__Lcfx70_cfpl_core_BCone(bc);
  var bgeom = bc1.getGeometry__Lcfx70_threejsfacade_THREE$BufferGeometry();
  var mm = new $i_three.MeshBasicMaterial();
  mm.color = new $i_three.Color(1.6746751E7);
  var msh = new $i_three.Mesh(bgeom, mm);
  bgeom.computeBoundingBox();
  var bx = bgeom.boundingBox;
  var bxh = new $i_three.Box3Helper(bx, new $i_three.Color(8947712.0));
  this.Lcfx70_cfpl_draft_DetApp$__f_scene.add(axesHelper);
  this.Lcfx70_cfpl_draft_DetApp$__f_scene.add($f_Lcfx70_cfpl_core_WireframeHelper__wireframe__D__Lcfx70_threejsfacade_THREE$Line(bc, 1.6729088E7));
  this.Lcfx70_cfpl_draft_DetApp$__f_scene.add($f_Lcfx70_cfpl_core_WireframeHelper__wireframe__D__Lcfx70_threejsfacade_THREE$Line(bc1, 34884.0));
  this.Lcfx70_cfpl_draft_DetApp$__f_scene.add(bxh);
  this.Lcfx70_cfpl_draft_DetApp$__f_scene.add(msh);
  this.Lcfx70_cfpl_draft_DetApp$__f_camera3d.position.z = 300.0;
  this.Lcfx70_cfpl_draft_DetApp$__f_controls.update();
  this.Lcfx70_cfpl_draft_DetApp$__f_renderer.render(this.Lcfx70_cfpl_draft_DetApp$__f_scene, this.Lcfx70_cfpl_draft_DetApp$__f_camera3d)
});
$c_Lcfx70_cfpl_draft_DetApp$.prototype.setAnimation__Z__V = (function(a) {
  this.Lcfx70_cfpl_draft_DetApp$__f_animation = a;
  this.animate__D__V(0.0)
});
$c_Lcfx70_cfpl_draft_DetApp$.prototype.show3d__V = (function() {
  var x1 = this.Lcfx70_cfpl_draft_DetApp$__f_model;
  if ((x1 !== null)) {
    var s = x1.bsphere__Lcfx70_threejsfacade_THREE$Sphere();
    var $$x2 = this.Lcfx70_cfpl_draft_DetApp$__f_camera3d.position;
    var $$x1 = $uD(s.radius);
    var x = ($uD(this.Lcfx70_cfpl_draft_DetApp$__f_camera3d.fov) / 2.0);
    var x$1 = (3.141592653589793 * (x / 180.0));
    $$x2.z = ((2.0 * $$x1) / $uD(Math.tan(x$1)));
    this.Lcfx70_cfpl_draft_DetApp$__f_camera3d.position.x = (-$uD(s.radius));
    this.Lcfx70_cfpl_draft_DetApp$__f_camera3d.position.y = $uD(s.radius);
    this.Lcfx70_cfpl_draft_DetApp$__f_camera3d.rotation.x = (-0.5235987755982988);
    this.Lcfx70_cfpl_draft_DetApp$__f_camera3d.updateProjectionMatrix();
    this.Lcfx70_cfpl_draft_DetApp$__f_scene.add(this.Lcfx70_cfpl_draft_DetApp$__f_model.meshes__Lcfx70_threejsfacade_THREE$Object3D());
    this.Lcfx70_cfpl_draft_DetApp$__f_controls.update();
    this.Lcfx70_cfpl_draft_DetApp$__f_light.position.set($uD(this.Lcfx70_cfpl_draft_DetApp$__f_camera3d.position.x), $uD(this.Lcfx70_cfpl_draft_DetApp$__f_camera3d.position.y), $uD(this.Lcfx70_cfpl_draft_DetApp$__f_camera3d.position.z));
    this.animate__D__V(0.0)
  } else if ((x1 !== null)) {
    throw new $c_s_MatchError(x1)
  }
});
$c_Lcfx70_cfpl_draft_DetApp$.prototype.setModel__Lcfx70_cfpl_core_Model__V = (function(m) {
  if ((this.Lcfx70_cfpl_draft_DetApp$__f_model !== null)) {
    this.Lcfx70_cfpl_draft_DetApp$__f_scene.remove(this.Lcfx70_cfpl_draft_DetApp$__f_model.meshes__Lcfx70_threejsfacade_THREE$Object3D());
    this.Lcfx70_cfpl_draft_DetApp$__f_model.dispose__V()
  };
  this.Lcfx70_cfpl_draft_DetApp$__f_model = m;
  this.Lcfx70_cfpl_draft_DetApp$__f_descr.innerHTML = this.Lcfx70_cfpl_draft_DetApp$__f_model.description__T__T("ru");
  this.show3d__V();
  $m_Lcfx70_cfpl_draft_Draft$().apply__Lcfx70_cfpl_core_Model__Lcfx70_cfpl_draft_Draft(this.Lcfx70_cfpl_draft_DetApp$__f_model).draw__Lorg_scalajs_dom_CanvasRenderingContext2D__V(this.Lcfx70_cfpl_draft_DetApp$__f_ctxDraft)
});
$c_Lcfx70_cfpl_draft_DetApp$.prototype.animate__D__V = (function(time) {
  if (this.Lcfx70_cfpl_draft_DetApp$__f_animation) {
    $uI(window.requestAnimationFrame(((arg1$2) => {
      var arg1 = $uD(arg1$2);
      $m_Lcfx70_cfpl_draft_DetApp$();
      $m_Lcfx70_cfpl_draft_DetApp$().animate__D__V(arg1)
    })))
  };
  this.Lcfx70_cfpl_draft_DetApp$__f_controls.update();
  this.Lcfx70_cfpl_draft_DetApp$__f_light.position.set($uD(this.Lcfx70_cfpl_draft_DetApp$__f_camera3d.position.x), $uD(this.Lcfx70_cfpl_draft_DetApp$__f_camera3d.position.y), $uD(this.Lcfx70_cfpl_draft_DetApp$__f_camera3d.position.z));
  this.Lcfx70_cfpl_draft_DetApp$__f_renderer.render(this.Lcfx70_cfpl_draft_DetApp$__f_scene, this.Lcfx70_cfpl_draft_DetApp$__f_camera3d)
});
$c_Lcfx70_cfpl_draft_DetApp$.prototype.$js$exported$meth$setRedRR__D__D__D__D__D__D__D__O = (function(a1, b1, a2, b2, da, db, h) {
  this.setRedRR__D__D__D__D__D__D__D__V(a1, b1, a2, b2, da, db, h)
});
$c_Lcfx70_cfpl_draft_DetApp$.prototype.$js$exported$meth$setRedRC__D__D__D__D__D__D__D__O = (function(a1, b1, d, da, db, h, f) {
  this.setRedRC__D__D__D__D__D__D__D__V(a1, b1, d, da, db, h, f)
});
$c_Lcfx70_cfpl_draft_DetApp$.prototype.$js$exported$meth$setRedRC$default$7__D = (function() {
  return 30.0
});
$c_Lcfx70_cfpl_draft_DetApp$.prototype.$js$exported$meth$setRedCC__D__D__D__D__D__D__O = (function(d1, d2, dc, h, f1, f2) {
  this.setRedCC__D__D__D__D__D__D__V(d1, d2, dc, h, f1, f2)
});
$c_Lcfx70_cfpl_draft_DetApp$.prototype.$js$exported$meth$setRedCC$default$5__D = (function() {
  return 40.0
});
$c_Lcfx70_cfpl_draft_DetApp$.prototype.$js$exported$meth$setRedCC$default$6__D = (function() {
  return 40.0
});
$c_Lcfx70_cfpl_draft_DetApp$.prototype.$js$exported$meth$setBrunchCC__D__D__D__D__D__D__D__D__D__D__D__D__D__O = (function(d1, d2, h1, dd1, d3, d4, h2, dd2, ang, h3, df1, df2, df3) {
  this.setBrunchCC__D__D__D__D__D__D__D__D__D__D__D__D__D__V(d1, d2, h1, dd1, d3, d4, h2, dd2, ang, h3, df1, df2, df3)
});
$c_Lcfx70_cfpl_draft_DetApp$.prototype.$js$exported$meth$testCone__O = (function() {
  this.testCone__V()
});
$c_Lcfx70_cfpl_draft_DetApp$.prototype.$js$exported$meth$setAnimation__Z__O = (function(a) {
  this.setAnimation__Z__V(a)
});
$c_Lcfx70_cfpl_draft_DetApp$.prototype.setAnimation = (function(arg) {
  var prep0 = $uZ(arg);
  return this.$js$exported$meth$setAnimation__Z__O(prep0)
});
$c_Lcfx70_cfpl_draft_DetApp$.prototype.testCone = (function() {
  return this.$js$exported$meth$testCone__O()
});
$c_Lcfx70_cfpl_draft_DetApp$.prototype.setBrunchCC = (function(arg, arg$2, arg$3, arg$4, arg$5, arg$6, arg$7, arg$8, arg$9, arg$10, arg$11, arg$12, arg$13) {
  var prep0 = $uD(arg);
  var prep1 = $uD(arg$2);
  var prep2 = $uD(arg$3);
  var prep3 = $uD(arg$4);
  var prep4 = $uD(arg$5);
  var prep5 = $uD(arg$6);
  var prep6 = $uD(arg$7);
  var prep7 = $uD(arg$8);
  var prep8 = $uD(arg$9);
  var prep9 = $uD(arg$10);
  var prep10 = $uD(arg$11);
  var prep11 = $uD(arg$12);
  var prep12 = $uD(arg$13);
  return this.$js$exported$meth$setBrunchCC__D__D__D__D__D__D__D__D__D__D__D__D__D__O(prep0, prep1, prep2, prep3, prep4, prep5, prep6, prep7, prep8, prep9, prep10, prep11, prep12)
});
$c_Lcfx70_cfpl_draft_DetApp$.prototype.setRedCC = (function(arg, arg$2, arg$3, arg$4, ...rest) {
  var prep0 = $uD(arg);
  var prep1 = $uD(arg$2);
  var prep2 = $uD(arg$3);
  var prep3 = $uD(arg$4);
  var prep4 = ((rest[0] === (void 0)) ? this.$js$exported$meth$setRedCC$default$5__D() : $uD(rest[0]));
  var prep5 = ((rest[1] === (void 0)) ? this.$js$exported$meth$setRedCC$default$6__D() : $uD(rest[1]));
  return this.$js$exported$meth$setRedCC__D__D__D__D__D__D__O(prep0, prep1, prep2, prep3, prep4, prep5)
});
$c_Lcfx70_cfpl_draft_DetApp$.prototype.setRedRC = (function(arg, arg$2, arg$3, arg$4, arg$5, arg$6, ...rest) {
  var prep0 = $uD(arg);
  var prep1 = $uD(arg$2);
  var prep2 = $uD(arg$3);
  var prep3 = $uD(arg$4);
  var prep4 = $uD(arg$5);
  var prep5 = $uD(arg$6);
  var prep6 = ((rest[0] === (void 0)) ? this.$js$exported$meth$setRedRC$default$7__D() : $uD(rest[0]));
  return this.$js$exported$meth$setRedRC__D__D__D__D__D__D__D__O(prep0, prep1, prep2, prep3, prep4, prep5, prep6)
});
$c_Lcfx70_cfpl_draft_DetApp$.prototype.setRedRR = (function(arg, arg$2, arg$3, arg$4, arg$5, arg$6, arg$7) {
  var prep0 = $uD(arg);
  var prep1 = $uD(arg$2);
  var prep2 = $uD(arg$3);
  var prep3 = $uD(arg$4);
  var prep4 = $uD(arg$5);
  var prep5 = $uD(arg$6);
  var prep6 = $uD(arg$7);
  return this.$js$exported$meth$setRedRR__D__D__D__D__D__D__D__O(prep0, prep1, prep2, prep3, prep4, prep5, prep6)
});
var $d_Lcfx70_cfpl_draft_DetApp$ = new $TypeData().initClass({
  Lcfx70_cfpl_draft_DetApp$: 0
}, false, "cfx70.cfpl.draft.DetApp$", {
  Lcfx70_cfpl_draft_DetApp$: 1,
  O: 1
});
$c_Lcfx70_cfpl_draft_DetApp$.prototype.$classData = $d_Lcfx70_cfpl_draft_DetApp$;
var $n_Lcfx70_cfpl_draft_DetApp$;
function $m_Lcfx70_cfpl_draft_DetApp$() {
  if ((!$n_Lcfx70_cfpl_draft_DetApp$)) {
    $n_Lcfx70_cfpl_draft_DetApp$ = new $c_Lcfx70_cfpl_draft_DetApp$()
  };
  return $n_Lcfx70_cfpl_draft_DetApp$
}
function $ct_Lcfx70_cfpl_draft_Dim__Lcfx70_vecquat_Vec__Lcfx70_vecquat_Vec__D__($thiz, p1, p2, scl) {
  $thiz.Lcfx70_cfpl_draft_Dim__f_p1 = p1;
  $thiz.Lcfx70_cfpl_draft_Dim__f_p2 = p2;
  return $thiz
}
/** @constructor */
function $c_Lcfx70_cfpl_draft_Dim() {
  this.Lcfx70_cfpl_draft_Dim__f_p1 = null;
  this.Lcfx70_cfpl_draft_Dim__f_p2 = null
}
$c_Lcfx70_cfpl_draft_Dim.prototype = new $h_O();
$c_Lcfx70_cfpl_draft_Dim.prototype.constructor = $c_Lcfx70_cfpl_draft_Dim;
/** @constructor */
function $h_Lcfx70_cfpl_draft_Dim() {
  /*<skip>*/
}
$h_Lcfx70_cfpl_draft_Dim.prototype = $c_Lcfx70_cfpl_draft_Dim.prototype;
/** @constructor */
function $c_Lcfx70_cfpl_draft_Dim$() {
  this.Lcfx70_cfpl_draft_Dim$__f_lineWidth = 0.0;
  this.Lcfx70_cfpl_draft_Dim$__f_lineWidth = 1.2
}
$c_Lcfx70_cfpl_draft_Dim$.prototype = new $h_O();
$c_Lcfx70_cfpl_draft_Dim$.prototype.constructor = $c_Lcfx70_cfpl_draft_Dim$;
/** @constructor */
function $h_Lcfx70_cfpl_draft_Dim$() {
  /*<skip>*/
}
$h_Lcfx70_cfpl_draft_Dim$.prototype = $c_Lcfx70_cfpl_draft_Dim$.prototype;
$c_Lcfx70_cfpl_draft_Dim$.prototype.hor__Lcfx70_vecquat_Vec__Lcfx70_vecquat_Vec__D__D__Lorg_scalajs_dom_CanvasRenderingContext2D__V = (function(p1, p2, ly, scl, ctx) {
  new $c_Lcfx70_cfpl_draft_HorDim(p1, p2, ly, scl).draw__Lorg_scalajs_dom_CanvasRenderingContext2D__V(ctx)
});
var $d_Lcfx70_cfpl_draft_Dim$ = new $TypeData().initClass({
  Lcfx70_cfpl_draft_Dim$: 0
}, false, "cfx70.cfpl.draft.Dim$", {
  Lcfx70_cfpl_draft_Dim$: 1,
  O: 1
});
$c_Lcfx70_cfpl_draft_Dim$.prototype.$classData = $d_Lcfx70_cfpl_draft_Dim$;
var $n_Lcfx70_cfpl_draft_Dim$;
function $m_Lcfx70_cfpl_draft_Dim$() {
  if ((!$n_Lcfx70_cfpl_draft_Dim$)) {
    $n_Lcfx70_cfpl_draft_Dim$ = new $c_Lcfx70_cfpl_draft_Dim$()
  };
  return $n_Lcfx70_cfpl_draft_Dim$
}
function $ct_Lcfx70_cfpl_draft_Draft__Lcfx70_cfpl_core_Model__($thiz, model) {
  $thiz.Lcfx70_cfpl_draft_Draft__f_model = model;
  $thiz.Lcfx70_cfpl_draft_Draft__f_mscl = ((($m_Lcfx70_cfpl_draft_Draft$().Lcfx70_cfpl_draft_Draft$__f_vsz / 4) | 0) / (2.1 * $uD(model.bsphere__Lcfx70_threejsfacade_THREE$Sphere().radius)));
  return $thiz
}
/** @constructor */
function $c_Lcfx70_cfpl_draft_Draft() {
  this.Lcfx70_cfpl_draft_Draft__f_model = null;
  this.Lcfx70_cfpl_draft_Draft__f_mscl = 0.0
}
$c_Lcfx70_cfpl_draft_Draft.prototype = new $h_O();
$c_Lcfx70_cfpl_draft_Draft.prototype.constructor = $c_Lcfx70_cfpl_draft_Draft;
/** @constructor */
function $h_Lcfx70_cfpl_draft_Draft() {
  /*<skip>*/
}
$h_Lcfx70_cfpl_draft_Draft.prototype = $c_Lcfx70_cfpl_draft_Draft.prototype;
$c_Lcfx70_cfpl_draft_Draft.prototype.drawVisible__Lcfx70_vecquat_Vec__sc_Seq__Lorg_scalajs_dom_CanvasRenderingContext2D__V = (function(v, ps, ctx) {
  ps.foreach__F1__V(new $c_sjsr_AnonFunction1(((p$2) => {
    var p = $as_sc_Seq(p$2);
    if ((p.length__I() < 3)) {
      throw $ct_jl_Exception__T__(new $c_jl_Exception(), "not surface")
    };
    var this$2 = $as_Lcfx70_vecquat_Vec(p.apply__I__O(2)).$minus__Lcfx70_vecquat_Vec__Lcfx70_vecquat_Vec($as_Lcfx70_vecquat_Vec(p.apply__I__O(1)));
    var v2 = $as_Lcfx70_vecquat_Vec(p.apply__I__O(0)).$minus__Lcfx70_vecquat_Vec__Lcfx70_vecquat_Vec($as_Lcfx70_vecquat_Vec(p.apply__I__O(1)));
    var v2$1 = this$2.crossProd__Lcfx70_vecquat_Vec__Lcfx70_vecquat_Vec(v2);
    if ((v.dotProd__Lcfx70_vecquat_Vec__D(v2$1) > 0.0)) {
      var this$4 = new $c_Lcfx70_cfpl_core_Helpers2d$RichContext(ctx);
      return this$4.polygon__Lcfx70_vecquat_Vec__sc_Seq__Lcfx70_cfpl_core_Helpers2d$RichContext($as_Lcfx70_vecquat_Vec(p.head__O()), $as_sc_Seq(p.tail__O()))
    } else {
      return (void 0)
    }
  })))
});
$c_Lcfx70_cfpl_draft_Draft.prototype.trianglesVisible__Lcfx70_vecquat_Vec__sc_Seq__Lorg_scalajs_dom_CanvasRenderingContext2D__V = (function(v, p, ctx) {
  if ((p.length__I() < 3)) {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "not surface")
  };
  var end = p.length__I();
  var isEmpty = (end <= 2);
  var isEmpty$1 = (end <= 2);
  if (isEmpty$1) {
    /*<skip>*/
  } else {
    var hi$6 = (end >> 31);
    var lo$3 = (((-2) + end) | 0);
    var hi$7 = ((((-2147483648) ^ lo$3) < 2147483646) ? hi$6 : (((-1) + hi$6) | 0));
    var this$13 = $m_RTLong$();
    var lo$4 = this$13.divideImpl__I__I__I__I__I(lo$3, hi$7, 3, 0);
    var hi$8 = this$13.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
    var hi$9 = (end >> 31);
    var lo$5 = (((-2) + end) | 0);
    var hi$10 = ((((-2147483648) ^ lo$5) < 2147483646) ? hi$9 : (((-1) + hi$9) | 0));
    var this$16 = $m_RTLong$();
    this$16.remainderImpl__I__I__I__I__I(lo$5, hi$10, 3, 0)
  };
  var hi$14 = (end >> 31);
  var lo$8 = (((-2) + end) | 0);
  var hi$15 = ((((-2147483648) ^ lo$8) < 2147483646) ? hi$14 : (((-1) + hi$14) | 0));
  var this$21 = $m_RTLong$();
  var lo$9 = this$21.remainderImpl__I__I__I__I__I(lo$8, hi$15, 3, 0);
  var scala$collection$immutable$Range$$lastElement$1 = ((lo$9 !== 0) ? ((end - lo$9) | 0) : (((-3) + end) | 0));
  if ((!isEmpty$1)) {
    var i = 2;
    while (true) {
      var arg1 = i;
      var $$x1 = $m_sc_Seq$();
      var array = [$as_Lcfx70_vecquat_Vec(p.apply__I__O((((-2) + arg1) | 0))), $as_Lcfx70_vecquat_Vec(p.apply__I__O((((-1) + arg1) | 0))), $as_Lcfx70_vecquat_Vec(p.apply__I__O(arg1))];
      var t = $as_sc_Seq($$x1.apply__sc_Seq__sc_GenTraversable($ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), array)));
      var this$24 = $as_Lcfx70_vecquat_Vec(t.apply__I__O(2)).$minus__Lcfx70_vecquat_Vec__Lcfx70_vecquat_Vec($as_Lcfx70_vecquat_Vec(t.apply__I__O(1)));
      var v2 = $as_Lcfx70_vecquat_Vec(t.apply__I__O(0)).$minus__Lcfx70_vecquat_Vec__Lcfx70_vecquat_Vec($as_Lcfx70_vecquat_Vec(t.apply__I__O(1)));
      var v2$1 = this$24.crossProd__Lcfx70_vecquat_Vec__Lcfx70_vecquat_Vec(v2);
      if ((v.dotProd__Lcfx70_vecquat_Vec__D(v2$1) > 0.0)) {
        var this$26 = new $c_Lcfx70_cfpl_core_Helpers2d$RichContext(ctx);
        this$26.polygon__Lcfx70_vecquat_Vec__sc_Seq__Lcfx70_cfpl_core_Helpers2d$RichContext($as_Lcfx70_vecquat_Vec(t.head__O()), $as_sc_Seq(t.tail__O()))
      };
      if ((i === scala$collection$immutable$Range$$lastElement$1)) {
        break
      };
      i = ((3 + i) | 0)
    }
  }
});
$c_Lcfx70_cfpl_draft_Draft.prototype.beginDraw__Lorg_scalajs_dom_CanvasRenderingContext2D__V = (function(ctx) {
  ctx.beginPath();
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0.0, 0.0, $m_Lcfx70_cfpl_draft_Draft$().Lcfx70_cfpl_draft_Draft$__f_hsz, $m_Lcfx70_cfpl_draft_Draft$().Lcfx70_cfpl_draft_Draft$__f_vsz);
  ctx.translate((($m_Lcfx70_cfpl_draft_Draft$().Lcfx70_cfpl_draft_Draft$__f_hsz / 2) | 0), (($m_Lcfx70_cfpl_draft_Draft$().Lcfx70_cfpl_draft_Draft$__f_vsz / 2) | 0));
  ctx.scale(1.0, (-1.0));
  ctx.lineJoin = "bevel";
  new $c_Lcfx70_cfpl_core_Helpers2d$RichContext(ctx).Lcfx70_cfpl_core_Helpers2d$RichContext__f_lscale = this.Lcfx70_cfpl_draft_Draft__f_mscl
});
/** @constructor */
function $c_Lcfx70_cfpl_draft_Draft$() {
  this.Lcfx70_cfpl_draft_Draft$__f_lineWidth = 0.0;
  this.Lcfx70_cfpl_draft_Draft$__f_thinlineWidth = 0.0;
  this.Lcfx70_cfpl_draft_Draft$__f_vsz = 0;
  this.Lcfx70_cfpl_draft_Draft$__f_hsz = 0;
  this.Lcfx70_cfpl_draft_Draft$__f_lineWidth = 6.0;
  this.Lcfx70_cfpl_draft_Draft$__f_thinlineWidth = 1.0;
  this.Lcfx70_cfpl_draft_Draft$__f_vsz = 1200;
  this.Lcfx70_cfpl_draft_Draft$__f_hsz = 1600
}
$c_Lcfx70_cfpl_draft_Draft$.prototype = new $h_O();
$c_Lcfx70_cfpl_draft_Draft$.prototype.constructor = $c_Lcfx70_cfpl_draft_Draft$;
/** @constructor */
function $h_Lcfx70_cfpl_draft_Draft$() {
  /*<skip>*/
}
$h_Lcfx70_cfpl_draft_Draft$.prototype = $c_Lcfx70_cfpl_draft_Draft$.prototype;
$c_Lcfx70_cfpl_draft_Draft$.prototype.apply__Lcfx70_cfpl_core_Model__Lcfx70_cfpl_draft_Draft = (function(m) {
  if ((m instanceof $c_Lcfx70_cfpl_core_RedRR)) {
    var x2 = $as_Lcfx70_cfpl_core_RedRR(m);
    return new $c_Lcfx70_cfpl_draft_RedRRDraft(x2)
  } else if ((m instanceof $c_Lcfx70_cfpl_core_RedRC)) {
    var x3 = $as_Lcfx70_cfpl_core_RedRC(m);
    return new $c_Lcfx70_cfpl_draft_RedRCDraft(x3)
  } else if ((m instanceof $c_Lcfx70_cfpl_core_RedCC)) {
    var x4 = $as_Lcfx70_cfpl_core_RedCC(m);
    return new $c_Lcfx70_cfpl_draft_RedCCDraft(x4)
  } else {
    throw new $c_s_MatchError(m)
  }
});
var $d_Lcfx70_cfpl_draft_Draft$ = new $TypeData().initClass({
  Lcfx70_cfpl_draft_Draft$: 0
}, false, "cfx70.cfpl.draft.Draft$", {
  Lcfx70_cfpl_draft_Draft$: 1,
  O: 1
});
$c_Lcfx70_cfpl_draft_Draft$.prototype.$classData = $d_Lcfx70_cfpl_draft_Draft$;
var $n_Lcfx70_cfpl_draft_Draft$;
function $m_Lcfx70_cfpl_draft_Draft$() {
  if ((!$n_Lcfx70_cfpl_draft_Draft$)) {
    $n_Lcfx70_cfpl_draft_Draft$ = new $c_Lcfx70_cfpl_draft_Draft$()
  };
  return $n_Lcfx70_cfpl_draft_Draft$
}
/** @constructor */
function $c_Lcfx70_threejsfacade_THREE$() {
  this.Lcfx70_threejsfacade_THREE$__f_DoubleSide = 0;
  this.Lcfx70_threejsfacade_THREE$__f_DoubleSide = 2
}
$c_Lcfx70_threejsfacade_THREE$.prototype = new $h_O();
$c_Lcfx70_threejsfacade_THREE$.prototype.constructor = $c_Lcfx70_threejsfacade_THREE$;
/** @constructor */
function $h_Lcfx70_threejsfacade_THREE$() {
  /*<skip>*/
}
$h_Lcfx70_threejsfacade_THREE$.prototype = $c_Lcfx70_threejsfacade_THREE$.prototype;
var $d_Lcfx70_threejsfacade_THREE$ = new $TypeData().initClass({
  Lcfx70_threejsfacade_THREE$: 0
}, false, "cfx70.threejsfacade.THREE$", {
  Lcfx70_threejsfacade_THREE$: 1,
  O: 1
});
$c_Lcfx70_threejsfacade_THREE$.prototype.$classData = $d_Lcfx70_threejsfacade_THREE$;
var $n_Lcfx70_threejsfacade_THREE$;
function $m_Lcfx70_threejsfacade_THREE$() {
  if ((!$n_Lcfx70_threejsfacade_THREE$)) {
    $n_Lcfx70_threejsfacade_THREE$ = new $c_Lcfx70_threejsfacade_THREE$()
  };
  return $n_Lcfx70_threejsfacade_THREE$
}
/** @constructor */
function $c_Lcfx70_vecquat_Mat(a) {
  this.Lcfx70_vecquat_Mat__f_a = null;
  this.Lcfx70_vecquat_Mat__f_a = a
}
$c_Lcfx70_vecquat_Mat.prototype = new $h_O();
$c_Lcfx70_vecquat_Mat.prototype.constructor = $c_Lcfx70_vecquat_Mat;
/** @constructor */
function $h_Lcfx70_vecquat_Mat() {
  /*<skip>*/
}
$h_Lcfx70_vecquat_Mat.prototype = $c_Lcfx70_vecquat_Mat.prototype;
$c_Lcfx70_vecquat_Mat.prototype.toString__T = (function() {
  var this$2 = this.Lcfx70_vecquat_Mat__f_a;
  var this$1 = $m_sci_Vector$();
  var bf = this$1.scg_GenTraversableFactory__f_ReusableCBFInstance;
  var b = $p_sc_TraversableLike__builder$1__scg_CanBuildFrom__scm_Builder(this$2, bf);
  var this$3 = this$2.iterator__sci_VectorIterator();
  while (this$3.sci_VectorIterator__f__hasNext) {
    var arg1 = this$3.next__O();
    var x$2 = $as_sci_Vector(arg1);
    b.$plus$eq__O__scm_Builder($f_sc_TraversableOnce__mkString__T__T__T__T(x$2, "", "\t", ""))
  };
  return $as_sc_TraversableOnce(b.result__O()).mkString__T__T__T__T("\nMat(", "\n    ", ")")
});
$c_Lcfx70_vecquat_Mat.prototype.equals__O__Z = (function(that) {
  if ((that instanceof $c_Lcfx70_vecquat_Mat)) {
    var x2 = $as_Lcfx70_vecquat_Mat(that);
    return (this.hashCode__I() === x2.hashCode__I())
  } else {
    return false
  }
});
$c_Lcfx70_vecquat_Mat.prototype.hashCode__I = (function() {
  var this$2 = this.Lcfx70_vecquat_Mat__f_a;
  var this$1 = $m_sci_Vector$();
  var bf = this$1.scg_GenTraversableFactory__f_ReusableCBFInstance;
  var b = $p_sc_TraversableLike__builder$1__scg_CanBuildFrom__scm_Builder(this$2, bf);
  var this$3 = this$2.iterator__sci_VectorIterator();
  while (this$3.sci_VectorIterator__f__hasNext) {
    var arg1 = this$3.next__O();
    var x$3 = $as_sci_Vector(arg1);
    b.$plus$eq__O__scm_Builder($m_s_util_hashing_MurmurHash3$().seqHash__sc_Seq__I(x$3))
  };
  return (($as_sci_Seq(b.result__O()).toSeq__sci_Seq().hashCode__I() + $f_T__hashCode__I("Mat")) | 0)
});
$c_Lcfx70_vecquat_Mat.prototype.det__D = (function() {
  var x1 = this.Lcfx70_vecquat_Mat__f_a.length__I();
  if ((x1 !== $as_sci_Vector(this.Lcfx70_vecquat_Mat__f_a.apply__I__O(0)).length__I())) {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Matrix not sqware")
  } else if ((x1 === 0)) {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Empty matrix")
  } else if ((x1 === 1)) {
    return $uD($as_sci_Vector(this.Lcfx70_vecquat_Mat__f_a.apply__I__O(0)).apply__I__O(0))
  } else if ((x1 === 2)) {
    return (($uD($as_sci_Vector(this.Lcfx70_vecquat_Mat__f_a.apply__I__O(0)).apply__I__O(0)) * $uD($as_sci_Vector(this.Lcfx70_vecquat_Mat__f_a.apply__I__O(1)).apply__I__O(1))) - ($uD($as_sci_Vector(this.Lcfx70_vecquat_Mat__f_a.apply__I__O(0)).apply__I__O(1)) * $uD($as_sci_Vector(this.Lcfx70_vecquat_Mat__f_a.apply__I__O(1)).apply__I__O(0))))
  } else if ((x1 === 3)) {
    return ((((((($uD($as_sci_Vector(this.Lcfx70_vecquat_Mat__f_a.apply__I__O(0)).apply__I__O(0)) * $uD($as_sci_Vector(this.Lcfx70_vecquat_Mat__f_a.apply__I__O(1)).apply__I__O(1))) * $uD($as_sci_Vector(this.Lcfx70_vecquat_Mat__f_a.apply__I__O(2)).apply__I__O(2))) + (($uD($as_sci_Vector(this.Lcfx70_vecquat_Mat__f_a.apply__I__O(0)).apply__I__O(1)) * $uD($as_sci_Vector(this.Lcfx70_vecquat_Mat__f_a.apply__I__O(1)).apply__I__O(2))) * $uD($as_sci_Vector(this.Lcfx70_vecquat_Mat__f_a.apply__I__O(2)).apply__I__O(0)))) + (($uD($as_sci_Vector(this.Lcfx70_vecquat_Mat__f_a.apply__I__O(0)).apply__I__O(2)) * $uD($as_sci_Vector(this.Lcfx70_vecquat_Mat__f_a.apply__I__O(1)).apply__I__O(0))) * $uD($as_sci_Vector(this.Lcfx70_vecquat_Mat__f_a.apply__I__O(2)).apply__I__O(1)))) - (($uD($as_sci_Vector(this.Lcfx70_vecquat_Mat__f_a.apply__I__O(0)).apply__I__O(2)) * $uD($as_sci_Vector(this.Lcfx70_vecquat_Mat__f_a.apply__I__O(1)).apply__I__O(1))) * $uD($as_sci_Vector(this.Lcfx70_vecquat_Mat__f_a.apply__I__O(2)).apply__I__O(0)))) - (($uD($as_sci_Vector(this.Lcfx70_vecquat_Mat__f_a.apply__I__O(0)).apply__I__O(1)) * $uD($as_sci_Vector(this.Lcfx70_vecquat_Mat__f_a.apply__I__O(1)).apply__I__O(0))) * $uD($as_sci_Vector(this.Lcfx70_vecquat_Mat__f_a.apply__I__O(2)).apply__I__O(2)))) - (($uD($as_sci_Vector(this.Lcfx70_vecquat_Mat__f_a.apply__I__O(0)).apply__I__O(0)) * $uD($as_sci_Vector(this.Lcfx70_vecquat_Mat__f_a.apply__I__O(1)).apply__I__O(2))) * $uD($as_sci_Vector(this.Lcfx70_vecquat_Mat__f_a.apply__I__O(2)).apply__I__O(1))))
  } else {
    var elem = 0.0;
    elem = 0.0;
    var elem$1 = 0;
    elem$1 = (-1);
    var isEmpty = (x1 <= 0);
    var scala$collection$immutable$Range$$lastElement = (((-1) + x1) | 0);
    if ((!isEmpty)) {
      var i = 0;
      while (true) {
        var v1 = i;
        var $$x4 = $as_sci_Vector($m_s_package$().s_package$__f_Vector.apply__sc_Seq__sc_GenTraversable($m_sci_Nil$()));
        var isEmpty$1 = (x1 <= 1);
        if (isEmpty$1) {
          var scala$collection$immutable$Range$$numRangeElements$1 = 0
        } else {
          var hi$2 = (x1 >> 31);
          var lo = (((-1) + x1) | 0);
          var hi$3 = ((lo !== (-1)) ? hi$2 : (((-1) + hi$2) | 0));
          var hi$4 = (x1 >> 31);
          var lo$1 = (((-1) + x1) | 0);
          var this$15 = $L0;
          if ((!((this$15.RTLong__f_lo === 0) && (this$15.RTLong__f_hi === 0)))) {
            var value = 1
          } else {
            var value = 0
          };
          var hi$6 = (value >> 31);
          var lo$2 = ((lo + value) | 0);
          var hi$7 = ((((-2147483648) ^ lo$2) < ((-2147483648) ^ lo)) ? ((1 + ((hi$3 + hi$6) | 0)) | 0) : ((hi$3 + hi$6) | 0));
          var scala$collection$immutable$Range$$numRangeElements$1 = (((hi$7 === 0) ? (((-2147483648) ^ lo$2) > (-1)) : (hi$7 > 0)) ? (-1) : lo$2)
        };
        var scala$collection$immutable$Range$$lastElement$1 = (((-1) + x1) | 0);
        $m_sci_IndexedSeq$();
        $m_sci_IndexedSeq$();
        $m_sci_Vector$();
        var b = new $c_sci_VectorBuilder();
        if ((scala$collection$immutable$Range$$numRangeElements$1 < 0)) {
          $m_sci_Range$().scala$collection$immutable$Range$$fail__I__I__I__Z__E(1, x1, 1, false)
        };
        if ((!isEmpty$1)) {
          var i$1 = 1;
          while (true) {
            var arg1 = i$1;
            var this$25 = $ct_sci_Range__I__I__I__(new $c_sci_Range(), 0, x1, 1);
            var p = new $c_sjsr_AnonFunction1(((v1) => ((j$2) => {
              var j = $uI(j$2);
              return (j !== v1)
            }))(v1));
            var $$x2 = new $c_sc_TraversableLike$WithFilter(this$25, p);
            var $$x1 = new $c_sjsr_AnonFunction1(((arg1) => ((j$3$2) => {
              var j$3 = $uI(j$3$2);
              return $uD($as_sci_Vector(this.Lcfx70_vecquat_Mat__f_a.apply__I__O(arg1)).apply__I__O(j$3))
            }))(arg1));
            var this$26 = $m_sci_IndexedSeq$();
            var elem$2 = $as_sci_IndexedSeq($$x2.map__F1__scg_CanBuildFrom__O($$x1, this$26.scg_GenTraversableFactory__f_ReusableCBFInstance));
            b.$plus$eq__O__sci_VectorBuilder(elem$2);
            if ((i$1 === scala$collection$immutable$Range$$lastElement$1)) {
              break
            };
            i$1 = ((1 + i$1) | 0)
          }
        };
        var $$x3 = b.result__sci_Vector();
        var this$27 = $m_sci_Vector$();
        var dm = $as_sci_Vector($as_scg_GenericTraversableTemplate($$x4.$plus$plus__sc_GenTraversableOnce__scg_CanBuildFrom__O($$x3, this$27.scg_GenTraversableFactory__f_ReusableCBFInstance)).flatten__F1__sc_GenTraversable($m_s_Predef$().s_Predef$__f_singleton_$less$colon$less));
        elem$1 = ((-elem$1) | 0);
        elem = (elem + ((elem$1 * $uD($as_sci_Vector(this.Lcfx70_vecquat_Mat__f_a.apply__I__O(0)).apply__I__O(v1))) * $m_Lcfx70_vecquat_Mat$().apply__I__sc_Seq__Lcfx70_vecquat_Mat((((-1) + x1) | 0), dm).det__D()));
        if ((i === scala$collection$immutable$Range$$lastElement)) {
          break
        };
        i = ((1 + i) | 0)
      }
    };
    return elem
  }
});
function $as_Lcfx70_vecquat_Mat(obj) {
  return (((obj instanceof $c_Lcfx70_vecquat_Mat) || (obj === null)) ? obj : $throwClassCastException(obj, "cfx70.vecquat.Mat"))
}
function $isArrayOf_Lcfx70_vecquat_Mat(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lcfx70_vecquat_Mat)))
}
function $asArrayOf_Lcfx70_vecquat_Mat(obj, depth) {
  return (($isArrayOf_Lcfx70_vecquat_Mat(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lcfx70.vecquat.Mat;", depth))
}
var $d_Lcfx70_vecquat_Mat = new $TypeData().initClass({
  Lcfx70_vecquat_Mat: 0
}, false, "cfx70.vecquat.Mat", {
  Lcfx70_vecquat_Mat: 1,
  O: 1
});
$c_Lcfx70_vecquat_Mat.prototype.$classData = $d_Lcfx70_vecquat_Mat;
/** @constructor */
function $c_Lcfx70_vecquat_Mat$() {
  /*<skip>*/
}
$c_Lcfx70_vecquat_Mat$.prototype = new $h_O();
$c_Lcfx70_vecquat_Mat$.prototype.constructor = $c_Lcfx70_vecquat_Mat$;
/** @constructor */
function $h_Lcfx70_vecquat_Mat$() {
  /*<skip>*/
}
$h_Lcfx70_vecquat_Mat$.prototype = $c_Lcfx70_vecquat_Mat$.prototype;
$c_Lcfx70_vecquat_Mat$.prototype.apply__I__sc_Seq__Lcfx70_vecquat_Mat = (function(cols, v) {
  var this$1 = v.toVector__sci_Vector();
  var this$2 = $f_sc_IterableLike__sliding__I__I__sc_Iterator(this$1, cols, cols);
  var this$3 = $m_sci_Vector$();
  var cbf = this$3.scg_GenTraversableFactory__f_ReusableCBFInstance;
  return new $c_Lcfx70_vecquat_Mat($as_sci_Vector($f_sc_TraversableOnce__to__scg_CanBuildFrom__O(this$2, cbf)))
});
var $d_Lcfx70_vecquat_Mat$ = new $TypeData().initClass({
  Lcfx70_vecquat_Mat$: 0
}, false, "cfx70.vecquat.Mat$", {
  Lcfx70_vecquat_Mat$: 1,
  O: 1
});
$c_Lcfx70_vecquat_Mat$.prototype.$classData = $d_Lcfx70_vecquat_Mat$;
var $n_Lcfx70_vecquat_Mat$;
function $m_Lcfx70_vecquat_Mat$() {
  if ((!$n_Lcfx70_vecquat_Mat$)) {
    $n_Lcfx70_vecquat_Mat$ = new $c_Lcfx70_vecquat_Mat$()
  };
  return $n_Lcfx70_vecquat_Mat$
}
/** @constructor */
function $c_Lcfx70_vecquat_Quat(s, v) {
  this.Lcfx70_vecquat_Quat__f_s = 0.0;
  this.Lcfx70_vecquat_Quat__f_v = null;
  this.Lcfx70_vecquat_Quat__f_s = s;
  this.Lcfx70_vecquat_Quat__f_v = v
}
$c_Lcfx70_vecquat_Quat.prototype = new $h_O();
$c_Lcfx70_vecquat_Quat.prototype.constructor = $c_Lcfx70_vecquat_Quat;
/** @constructor */
function $h_Lcfx70_vecquat_Quat() {
  /*<skip>*/
}
$h_Lcfx70_vecquat_Quat.prototype = $c_Lcfx70_vecquat_Quat.prototype;
$c_Lcfx70_vecquat_Quat.prototype.toString__T = (function() {
  return ((("s: " + this.Lcfx70_vecquat_Quat__f_s) + " v: ") + this.Lcfx70_vecquat_Quat__f_v)
});
$c_Lcfx70_vecquat_Quat.prototype.equals__O__Z = (function(that) {
  if ((that instanceof $c_Lcfx70_vecquat_Quat)) {
    var x2 = $as_Lcfx70_vecquat_Quat(that);
    return (this.hashCode__I() === x2.hashCode__I())
  } else {
    return false
  }
});
$c_Lcfx70_vecquat_Quat.prototype.hashCode__I = (function() {
  var this$1 = this.Lcfx70_vecquat_Quat__f_s;
  return (((($m_jl_FloatingPointBits$().numberHashCode__D__I(this$1) + this.Lcfx70_vecquat_Quat__f_v.hashCode__I()) | 0) + $f_T__hashCode__I("Quat")) | 0)
});
$c_Lcfx70_vecquat_Quat.prototype.$times__Lcfx70_vecquat_Quat__Lcfx70_vecquat_Quat = (function(q2) {
  var $$x4 = this.Lcfx70_vecquat_Quat__f_s;
  var $$x3 = q2.Lcfx70_vecquat_Quat__f_s;
  var this$1 = this.Lcfx70_vecquat_Quat__f_v;
  var v2 = q2.Lcfx70_vecquat_Quat__f_v;
  var $$x2 = this$1.dotProd__Lcfx70_vecquat_Vec__D(v2);
  var $$x1 = q2.Lcfx70_vecquat_Quat__f_v.$times__D__Lcfx70_vecquat_Vec(this.Lcfx70_vecquat_Quat__f_s).$plus__Lcfx70_vecquat_Vec__Lcfx70_vecquat_Vec(this.Lcfx70_vecquat_Quat__f_v.$times__D__Lcfx70_vecquat_Vec(q2.Lcfx70_vecquat_Quat__f_s));
  var this$2 = this.Lcfx70_vecquat_Quat__f_v;
  var v2$1 = q2.Lcfx70_vecquat_Quat__f_v;
  return new $c_Lcfx70_vecquat_Quat((($$x4 * $$x3) - $$x2), $$x1.$plus__Lcfx70_vecquat_Vec__Lcfx70_vecquat_Vec(this$2.crossProd__Lcfx70_vecquat_Vec__Lcfx70_vecquat_Vec(v2$1)))
});
$c_Lcfx70_vecquat_Quat.prototype.norm__D = (function() {
  var x = ((this.Lcfx70_vecquat_Quat__f_s * this.Lcfx70_vecquat_Quat__f_s) + this.Lcfx70_vecquat_Quat__f_v.norm__D());
  return Math.fround($uD(Math.sqrt(x)))
});
$c_Lcfx70_vecquat_Quat.prototype.inverse__Lcfx70_vecquat_Quat = (function() {
  var nn = (this.norm__D() * this.norm__D());
  return new $c_Lcfx70_vecquat_Quat((this.Lcfx70_vecquat_Quat__f_s / nn), this.Lcfx70_vecquat_Quat__f_v.$times__D__Lcfx70_vecquat_Vec(((-1.0) / nn)))
});
$c_Lcfx70_vecquat_Quat.prototype.toVec__Lcfx70_vecquat_Vec = (function() {
  var this$1 = this.Lcfx70_vecquat_Quat__f_v;
  var $$x2 = $uD(this$1.Lcfx70_vecquat_Vec__f_crds.apply__I__O(0));
  var this$2 = this.Lcfx70_vecquat_Quat__f_v;
  var $$x1 = $uD(this$2.Lcfx70_vecquat_Vec__f_crds.apply__I__O(1));
  var this$3 = this.Lcfx70_vecquat_Quat__f_v;
  var array = [$$x2, $$x1, $uD(this$3.Lcfx70_vecquat_Vec__f_crds.apply__I__O(2))];
  return $ct_Lcfx70_vecquat_Vec__sc_Seq__(new $c_Lcfx70_vecquat_Vec(), $ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), array))
});
function $as_Lcfx70_vecquat_Quat(obj) {
  return (((obj instanceof $c_Lcfx70_vecquat_Quat) || (obj === null)) ? obj : $throwClassCastException(obj, "cfx70.vecquat.Quat"))
}
function $isArrayOf_Lcfx70_vecquat_Quat(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lcfx70_vecquat_Quat)))
}
function $asArrayOf_Lcfx70_vecquat_Quat(obj, depth) {
  return (($isArrayOf_Lcfx70_vecquat_Quat(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lcfx70.vecquat.Quat;", depth))
}
var $d_Lcfx70_vecquat_Quat = new $TypeData().initClass({
  Lcfx70_vecquat_Quat: 0
}, false, "cfx70.vecquat.Quat", {
  Lcfx70_vecquat_Quat: 1,
  O: 1
});
$c_Lcfx70_vecquat_Quat.prototype.$classData = $d_Lcfx70_vecquat_Quat;
/** @constructor */
function $c_Lcfx70_vecquat_Quat$() {
  /*<skip>*/
}
$c_Lcfx70_vecquat_Quat$.prototype = new $h_O();
$c_Lcfx70_vecquat_Quat$.prototype.constructor = $c_Lcfx70_vecquat_Quat$;
/** @constructor */
function $h_Lcfx70_vecquat_Quat$() {
  /*<skip>*/
}
$h_Lcfx70_vecquat_Quat$.prototype = $c_Lcfx70_vecquat_Quat$.prototype;
$c_Lcfx70_vecquat_Quat$.prototype.rot__D__Lcfx70_vecquat_Vec__Lcfx70_vecquat_Quat = (function(ang, v) {
  var x = (ang / 2.0);
  var $$x2 = $uD(Math.cos(x));
  var $$x1 = v.normalize__Lcfx70_vecquat_Vec();
  var x$1 = (ang / 2.0);
  return new $c_Lcfx70_vecquat_Quat($$x2, $$x1.$times__D__Lcfx70_vecquat_Vec($uD(Math.sin(x$1))))
});
$c_Lcfx70_vecquat_Quat$.prototype.rotate__Lcfx70_vecquat_Vec__D__Lcfx70_vecquat_Vec__Lcfx70_vecquat_Vec = (function(vr, ang, v) {
  var qr = new $c_Lcfx70_vecquat_Quat(0.0, vr);
  var q = this.rot__D__Lcfx70_vecquat_Vec__Lcfx70_vecquat_Quat(ang, v);
  var qr1 = q.$times__Lcfx70_vecquat_Quat__Lcfx70_vecquat_Quat(qr);
  var qr2 = qr1.$times__Lcfx70_vecquat_Quat__Lcfx70_vecquat_Quat(q.inverse__Lcfx70_vecquat_Quat());
  return qr2.toVec__Lcfx70_vecquat_Vec()
});
var $d_Lcfx70_vecquat_Quat$ = new $TypeData().initClass({
  Lcfx70_vecquat_Quat$: 0
}, false, "cfx70.vecquat.Quat$", {
  Lcfx70_vecquat_Quat$: 1,
  O: 1
});
$c_Lcfx70_vecquat_Quat$.prototype.$classData = $d_Lcfx70_vecquat_Quat$;
var $n_Lcfx70_vecquat_Quat$;
function $m_Lcfx70_vecquat_Quat$() {
  if ((!$n_Lcfx70_vecquat_Quat$)) {
    $n_Lcfx70_vecquat_Quat$ = new $c_Lcfx70_vecquat_Quat$()
  };
  return $n_Lcfx70_vecquat_Quat$
}
function $ct_Lcfx70_vecquat_Vec__sci_Vector__($thiz, crds) {
  $thiz.Lcfx70_vecquat_Vec__f_crds = crds;
  return $thiz
}
function $ct_Lcfx70_vecquat_Vec__sc_Seq__($thiz, ncrds) {
  $ct_Lcfx70_vecquat_Vec__sci_Vector__($thiz, ncrds.toVector__sci_Vector());
  return $thiz
}
/** @constructor */
function $c_Lcfx70_vecquat_Vec() {
  this.Lcfx70_vecquat_Vec__f_crds = null
}
$c_Lcfx70_vecquat_Vec.prototype = new $h_O();
$c_Lcfx70_vecquat_Vec.prototype.constructor = $c_Lcfx70_vecquat_Vec;
/** @constructor */
function $h_Lcfx70_vecquat_Vec() {
  /*<skip>*/
}
$h_Lcfx70_vecquat_Vec.prototype = $c_Lcfx70_vecquat_Vec.prototype;
$c_Lcfx70_vecquat_Vec.prototype.toString__T = (function() {
  var this$1 = this.Lcfx70_vecquat_Vec__f_crds;
  return $f_sc_TraversableOnce__mkString__T__T__T__T(this$1, "Vec(", ",", ")")
});
$c_Lcfx70_vecquat_Vec.prototype.equals__O__Z = (function(that) {
  if ((that instanceof $c_Lcfx70_vecquat_Vec)) {
    var x2 = $as_Lcfx70_vecquat_Vec(that);
    return (this.hashCode__I() === x2.hashCode__I())
  } else {
    return false
  }
});
$c_Lcfx70_vecquat_Vec.prototype.hashCode__I = (function() {
  var this$1 = this.Lcfx70_vecquat_Vec__f_crds;
  return (($m_s_util_hashing_MurmurHash3$().seqHash__sc_Seq__I(this$1) + $f_T__hashCode__I("Vec")) | 0)
});
$c_Lcfx70_vecquat_Vec.prototype.norm__D = (function() {
  var elem = 0.0;
  elem = 0.0;
  var this$2 = this.Lcfx70_vecquat_Vec__f_crds;
  var this$3 = this$2.iterator__sci_VectorIterator();
  while (this$3.sci_VectorIterator__f__hasNext) {
    var arg1 = this$3.next__O();
    var x = $uD(arg1);
    elem = (elem + (x * x))
  };
  var x$1 = elem;
  if (($uD(Math.abs(x$1)) < $m_Lcfx70_vecquat_package$().Lcfx70_vecquat_package$__f_epsilon)) {
    return 0.0
  } else {
    return elem
  }
});
$c_Lcfx70_vecquat_Vec.prototype.normalize__Lcfx70_vecquat_Vec = (function() {
  var x = this.norm__D();
  if (($uD(Math.sqrt(x)) !== 0.0)) {
    var x$1 = this.norm__D();
    var m = $uD(Math.sqrt(x$1))
  } else {
    var m = 1.0
  };
  var this$6 = this.Lcfx70_vecquat_Vec__f_crds;
  var this$5 = $m_sci_Vector$();
  var bf = this$5.scg_GenTraversableFactory__f_ReusableCBFInstance;
  var b = $p_sc_TraversableLike__builder$1__scg_CanBuildFrom__scm_Builder(this$6, bf);
  var this$7 = this$6.iterator__sci_VectorIterator();
  while (this$7.sci_VectorIterator__f__hasNext) {
    var arg1 = this$7.next__O();
    var x$2 = $uD(arg1);
    var c = (x$2 / m);
    b.$plus$eq__O__scm_Builder((($uD(Math.abs(c)) < $m_Lcfx70_vecquat_package$().Lcfx70_vecquat_package$__f_epsilon) ? 0.0 : c))
  };
  return $ct_Lcfx70_vecquat_Vec__sci_Vector__(new $c_Lcfx70_vecquat_Vec(), $as_sci_Vector(b.result__O()))
});
$c_Lcfx70_vecquat_Vec.prototype.dotProd__Lcfx70_vecquat_Vec__D = (function(v2) {
  if ((this.Lcfx70_vecquat_Vec__f_crds.length__I() !== v2.Lcfx70_vecquat_Vec__f_crds.length__I())) {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Dot product: vectors are different sizes")
  };
  var end = this.Lcfx70_vecquat_Vec__f_crds.length__I();
  var isEmpty = (end <= 0);
  if (isEmpty) {
    var scala$collection$immutable$Range$$numRangeElements = 0
  } else {
    var hi = (end >> 31);
    var scala$collection$immutable$Range$$numRangeElements = (((hi === 0) ? (((-2147483648) ^ end) > (-1)) : (hi > 0)) ? (-1) : end)
  };
  var scala$collection$immutable$Range$$lastElement = (((-1) + end) | 0);
  $m_sci_IndexedSeq$();
  $m_sci_IndexedSeq$();
  $m_sci_Vector$();
  var b = new $c_sci_VectorBuilder();
  if ((scala$collection$immutable$Range$$numRangeElements < 0)) {
    $m_sci_Range$().scala$collection$immutable$Range$$fail__I__I__I__Z__E(0, end, 1, false)
  };
  if ((!isEmpty)) {
    var i = 0;
    while (true) {
      var arg1 = i;
      var elem = ($uD(this.Lcfx70_vecquat_Vec__f_crds.apply__I__O(arg1)) * $uD(v2.Lcfx70_vecquat_Vec__f_crds.apply__I__O(arg1)));
      b.$plus$eq__O__sci_VectorBuilder(elem);
      if ((i === scala$collection$immutable$Range$$lastElement)) {
        break
      };
      i = ((1 + i) | 0)
    }
  };
  var this$9 = b.result__sci_Vector();
  var num = $m_s_math_Numeric$DoubleIsFractional$();
  return $uD($f_sc_TraversableOnce__sum__s_math_Numeric__O(this$9, num))
});
$c_Lcfx70_vecquat_Vec.prototype.$times__D__Lcfx70_vecquat_Vec = (function(f) {
  var end = this.Lcfx70_vecquat_Vec__f_crds.length__I();
  var isEmpty = (end <= 0);
  if (isEmpty) {
    var scala$collection$immutable$Range$$numRangeElements = 0
  } else {
    var hi = (end >> 31);
    var scala$collection$immutable$Range$$numRangeElements = (((hi === 0) ? (((-2147483648) ^ end) > (-1)) : (hi > 0)) ? (-1) : end)
  };
  var scala$collection$immutable$Range$$lastElement = (((-1) + end) | 0);
  $m_sci_IndexedSeq$();
  $m_sci_IndexedSeq$();
  $m_sci_Vector$();
  var b = new $c_sci_VectorBuilder();
  if ((scala$collection$immutable$Range$$numRangeElements < 0)) {
    $m_sci_Range$().scala$collection$immutable$Range$$fail__I__I__I__Z__E(0, end, 1, false)
  };
  if ((!isEmpty)) {
    var i = 0;
    while (true) {
      var arg1 = i;
      var elem = ($uD(this.Lcfx70_vecquat_Vec__f_crds.apply__I__O(arg1)) * f);
      b.$plus$eq__O__sci_VectorBuilder(elem);
      if ((i === scala$collection$immutable$Range$$lastElement)) {
        break
      };
      i = ((1 + i) | 0)
    }
  };
  return $ct_Lcfx70_vecquat_Vec__sc_Seq__(new $c_Lcfx70_vecquat_Vec(), b.result__sci_Vector())
});
$c_Lcfx70_vecquat_Vec.prototype.xz__Lcfx70_vecquat_Vec = (function() {
  var array = [$uD(this.Lcfx70_vecquat_Vec__f_crds.apply__I__O(0)), $uD(this.Lcfx70_vecquat_Vec__f_crds.apply__I__O(2))];
  var crds = $ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), array);
  return $ct_Lcfx70_vecquat_Vec__sc_Seq__(new $c_Lcfx70_vecquat_Vec(), crds)
});
$c_Lcfx70_vecquat_Vec.prototype.crossProd__Lcfx70_vecquat_Vec__Lcfx70_vecquat_Vec = (function(v2) {
  var array = [(($uD(this.Lcfx70_vecquat_Vec__f_crds.apply__I__O(1)) * $uD(v2.Lcfx70_vecquat_Vec__f_crds.apply__I__O(2))) - ($uD(v2.Lcfx70_vecquat_Vec__f_crds.apply__I__O(1)) * $uD(this.Lcfx70_vecquat_Vec__f_crds.apply__I__O(2)))), (($uD(this.Lcfx70_vecquat_Vec__f_crds.apply__I__O(2)) * $uD(v2.Lcfx70_vecquat_Vec__f_crds.apply__I__O(0))) - ($uD(v2.Lcfx70_vecquat_Vec__f_crds.apply__I__O(2)) * $uD(this.Lcfx70_vecquat_Vec__f_crds.apply__I__O(0)))), (($uD(this.Lcfx70_vecquat_Vec__f_crds.apply__I__O(0)) * $uD(v2.Lcfx70_vecquat_Vec__f_crds.apply__I__O(1))) - ($uD(v2.Lcfx70_vecquat_Vec__f_crds.apply__I__O(0)) * $uD(this.Lcfx70_vecquat_Vec__f_crds.apply__I__O(1))))];
  return $ct_Lcfx70_vecquat_Vec__sc_Seq__(new $c_Lcfx70_vecquat_Vec(), $ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), array))
});
$c_Lcfx70_vecquat_Vec.prototype.$plus__Lcfx70_vecquat_Vec__Lcfx70_vecquat_Vec = (function(v2) {
  var end = this.Lcfx70_vecquat_Vec__f_crds.length__I();
  var isEmpty = (end <= 0);
  if (isEmpty) {
    var scala$collection$immutable$Range$$numRangeElements = 0
  } else {
    var hi = (end >> 31);
    var scala$collection$immutable$Range$$numRangeElements = (((hi === 0) ? (((-2147483648) ^ end) > (-1)) : (hi > 0)) ? (-1) : end)
  };
  var scala$collection$immutable$Range$$lastElement = (((-1) + end) | 0);
  $m_sci_IndexedSeq$();
  $m_sci_IndexedSeq$();
  $m_sci_Vector$();
  var b = new $c_sci_VectorBuilder();
  if ((scala$collection$immutable$Range$$numRangeElements < 0)) {
    $m_sci_Range$().scala$collection$immutable$Range$$fail__I__I__I__Z__E(0, end, 1, false)
  };
  if ((!isEmpty)) {
    var i = 0;
    while (true) {
      var arg1 = i;
      var elem = ($uD(this.Lcfx70_vecquat_Vec__f_crds.apply__I__O(arg1)) + $uD(v2.Lcfx70_vecquat_Vec__f_crds.apply__I__O(arg1)));
      b.$plus$eq__O__sci_VectorBuilder(elem);
      if ((i === scala$collection$immutable$Range$$lastElement)) {
        break
      };
      i = ((1 + i) | 0)
    }
  };
  return $ct_Lcfx70_vecquat_Vec__sc_Seq__(new $c_Lcfx70_vecquat_Vec(), b.result__sci_Vector())
});
$c_Lcfx70_vecquat_Vec.prototype.$minus__Lcfx70_vecquat_Vec__Lcfx70_vecquat_Vec = (function(v2) {
  var end = this.Lcfx70_vecquat_Vec__f_crds.length__I();
  var isEmpty = (end <= 0);
  if (isEmpty) {
    var scala$collection$immutable$Range$$numRangeElements = 0
  } else {
    var hi = (end >> 31);
    var scala$collection$immutable$Range$$numRangeElements = (((hi === 0) ? (((-2147483648) ^ end) > (-1)) : (hi > 0)) ? (-1) : end)
  };
  var scala$collection$immutable$Range$$lastElement = (((-1) + end) | 0);
  $m_sci_IndexedSeq$();
  $m_sci_IndexedSeq$();
  $m_sci_Vector$();
  var b = new $c_sci_VectorBuilder();
  if ((scala$collection$immutable$Range$$numRangeElements < 0)) {
    $m_sci_Range$().scala$collection$immutable$Range$$fail__I__I__I__Z__E(0, end, 1, false)
  };
  if ((!isEmpty)) {
    var i = 0;
    while (true) {
      var arg1 = i;
      var elem = ($uD(this.Lcfx70_vecquat_Vec__f_crds.apply__I__O(arg1)) - $uD(v2.Lcfx70_vecquat_Vec__f_crds.apply__I__O(arg1)));
      b.$plus$eq__O__sci_VectorBuilder(elem);
      if ((i === scala$collection$immutable$Range$$lastElement)) {
        break
      };
      i = ((1 + i) | 0)
    }
  };
  return $ct_Lcfx70_vecquat_Vec__sc_Seq__(new $c_Lcfx70_vecquat_Vec(), b.result__sci_Vector())
});
function $as_Lcfx70_vecquat_Vec(obj) {
  return (((obj instanceof $c_Lcfx70_vecquat_Vec) || (obj === null)) ? obj : $throwClassCastException(obj, "cfx70.vecquat.Vec"))
}
function $isArrayOf_Lcfx70_vecquat_Vec(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lcfx70_vecquat_Vec)))
}
function $asArrayOf_Lcfx70_vecquat_Vec(obj, depth) {
  return (($isArrayOf_Lcfx70_vecquat_Vec(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lcfx70.vecquat.Vec;", depth))
}
var $d_Lcfx70_vecquat_Vec = new $TypeData().initClass({
  Lcfx70_vecquat_Vec: 0
}, false, "cfx70.vecquat.Vec", {
  Lcfx70_vecquat_Vec: 1,
  O: 1
});
$c_Lcfx70_vecquat_Vec.prototype.$classData = $d_Lcfx70_vecquat_Vec;
/** @constructor */
function $c_Lcfx70_vecquat_package$() {
  this.Lcfx70_vecquat_package$__f_epsilon = 0.0;
  this.Lcfx70_vecquat_package$__f_epsilon = 1.0E-7
}
$c_Lcfx70_vecquat_package$.prototype = new $h_O();
$c_Lcfx70_vecquat_package$.prototype.constructor = $c_Lcfx70_vecquat_package$;
/** @constructor */
function $h_Lcfx70_vecquat_package$() {
  /*<skip>*/
}
$h_Lcfx70_vecquat_package$.prototype = $c_Lcfx70_vecquat_package$.prototype;
var $d_Lcfx70_vecquat_package$ = new $TypeData().initClass({
  Lcfx70_vecquat_package$: 0
}, false, "cfx70.vecquat.package$", {
  Lcfx70_vecquat_package$: 1,
  O: 1
});
$c_Lcfx70_vecquat_package$.prototype.$classData = $d_Lcfx70_vecquat_package$;
var $n_Lcfx70_vecquat_package$;
function $m_Lcfx70_vecquat_package$() {
  if ((!$n_Lcfx70_vecquat_package$)) {
    $n_Lcfx70_vecquat_package$ = new $c_Lcfx70_vecquat_package$()
  };
  return $n_Lcfx70_vecquat_package$
}
/** @constructor */
function $c_jl_Class(data0) {
  this.jl_Class__f_data = null;
  this.jl_Class__f_data = data0
}
$c_jl_Class.prototype = new $h_O();
$c_jl_Class.prototype.constructor = $c_jl_Class;
/** @constructor */
function $h_jl_Class() {
  /*<skip>*/
}
$h_jl_Class.prototype = $c_jl_Class.prototype;
$c_jl_Class.prototype.toString__T = (function() {
  return ((this.isInterface__Z() ? "interface " : (this.isPrimitive__Z() ? "" : "class ")) + this.getName__T())
});
$c_jl_Class.prototype.isAssignableFrom__jl_Class__Z = (function(that) {
  return $uZ(this.jl_Class__f_data.isAssignableFrom(that.jl_Class__f_data))
});
$c_jl_Class.prototype.isInterface__Z = (function() {
  return $uZ(this.jl_Class__f_data.isInterface)
});
$c_jl_Class.prototype.isArray__Z = (function() {
  return $uZ(this.jl_Class__f_data.isArrayClass)
});
$c_jl_Class.prototype.isPrimitive__Z = (function() {
  return $uZ(this.jl_Class__f_data.isPrimitive)
});
$c_jl_Class.prototype.getName__T = (function() {
  return $as_T(this.jl_Class__f_data.name)
});
var $d_jl_Class = new $TypeData().initClass({
  jl_Class: 0
}, false, "java.lang.Class", {
  jl_Class: 1,
  O: 1
});
$c_jl_Class.prototype.$classData = $d_jl_Class;
/** @constructor */
function $c_jl_FloatingPointBits$() {
  this.jl_FloatingPointBits$__f_java$lang$FloatingPointBits$$_areTypedArraysSupported = false;
  this.jl_FloatingPointBits$__f_arrayBuffer = null;
  this.jl_FloatingPointBits$__f_int32Array = null;
  this.jl_FloatingPointBits$__f_float64Array = null;
  this.jl_FloatingPointBits$__f_areTypedArraysBigEndian = false;
  this.jl_FloatingPointBits$__f_highOffset = 0;
  this.jl_FloatingPointBits$__f_lowOffset = 0;
  this.jl_FloatingPointBits$__f_java$lang$FloatingPointBits$$doublePowsOf2 = null;
  $n_jl_FloatingPointBits$ = this;
  this.jl_FloatingPointBits$__f_java$lang$FloatingPointBits$$_areTypedArraysSupported = true;
  this.jl_FloatingPointBits$__f_arrayBuffer = new ArrayBuffer(8);
  this.jl_FloatingPointBits$__f_int32Array = new Int32Array(this.jl_FloatingPointBits$__f_arrayBuffer, 0, 2);
  new Float32Array(this.jl_FloatingPointBits$__f_arrayBuffer, 0, 2);
  this.jl_FloatingPointBits$__f_float64Array = new Float64Array(this.jl_FloatingPointBits$__f_arrayBuffer, 0, 1);
  this.jl_FloatingPointBits$__f_int32Array[0] = 16909060;
  this.jl_FloatingPointBits$__f_areTypedArraysBigEndian = ($uB(new Int8Array(this.jl_FloatingPointBits$__f_arrayBuffer, 0, 8)[0]) === 1);
  this.jl_FloatingPointBits$__f_highOffset = (this.jl_FloatingPointBits$__f_areTypedArraysBigEndian ? 0 : 1);
  this.jl_FloatingPointBits$__f_lowOffset = (this.jl_FloatingPointBits$__f_areTypedArraysBigEndian ? 1 : 0);
  this.jl_FloatingPointBits$__f_java$lang$FloatingPointBits$$doublePowsOf2 = null
}
$c_jl_FloatingPointBits$.prototype = new $h_O();
$c_jl_FloatingPointBits$.prototype.constructor = $c_jl_FloatingPointBits$;
/** @constructor */
function $h_jl_FloatingPointBits$() {
  /*<skip>*/
}
$h_jl_FloatingPointBits$.prototype = $c_jl_FloatingPointBits$.prototype;
$c_jl_FloatingPointBits$.prototype.numberHashCode__D__I = (function(value) {
  var iv = $uI((value | 0.0));
  if (((iv === value) && ((1.0 / value) !== (-Infinity)))) {
    return iv
  } else {
    this.jl_FloatingPointBits$__f_float64Array[0] = value;
    return ($uI(this.jl_FloatingPointBits$__f_int32Array[0]) ^ $uI(this.jl_FloatingPointBits$__f_int32Array[1]))
  }
});
$c_jl_FloatingPointBits$.prototype.doubleToLongBits__D__J = (function(value) {
  this.jl_FloatingPointBits$__f_float64Array[0] = value;
  var value$1 = $uI(this.jl_FloatingPointBits$__f_int32Array[this.jl_FloatingPointBits$__f_highOffset]);
  var value$2 = $uI(this.jl_FloatingPointBits$__f_int32Array[this.jl_FloatingPointBits$__f_lowOffset]);
  return new $c_RTLong(value$2, value$1)
});
var $d_jl_FloatingPointBits$ = new $TypeData().initClass({
  jl_FloatingPointBits$: 0
}, false, "java.lang.FloatingPointBits$", {
  jl_FloatingPointBits$: 1,
  O: 1
});
$c_jl_FloatingPointBits$.prototype.$classData = $d_jl_FloatingPointBits$;
var $n_jl_FloatingPointBits$;
function $m_jl_FloatingPointBits$() {
  if ((!$n_jl_FloatingPointBits$)) {
    $n_jl_FloatingPointBits$ = new $c_jl_FloatingPointBits$()
  };
  return $n_jl_FloatingPointBits$
}
function $f_jl_Void__equals__O__Z($thiz, that) {
  return ($thiz === that)
}
function $f_jl_Void__hashCode__I($thiz) {
  return 0
}
function $f_jl_Void__toString__T($thiz) {
  return "undefined"
}
var $d_jl_Void = new $TypeData().initClass({
  jl_Void: 0
}, false, "java.lang.Void", {
  jl_Void: 1,
  O: 1
}, (void 0), (void 0), ((x) => (x === (void 0))));
/** @constructor */
function $c_ju_Arrays$() {
  /*<skip>*/
}
$c_ju_Arrays$.prototype = new $h_O();
$c_ju_Arrays$.prototype.constructor = $c_ju_Arrays$;
/** @constructor */
function $h_ju_Arrays$() {
  /*<skip>*/
}
$h_ju_Arrays$.prototype = $c_ju_Arrays$.prototype;
$c_ju_Arrays$.prototype.equals__AO__AO__Z = (function(a, b) {
  if ((a === b)) {
    return true
  };
  if (((a === null) || (b === null))) {
    return false
  };
  var len = a.u.length;
  if ((b.u.length !== len)) {
    return false
  };
  var i = 0;
  while ((i !== len)) {
    var i$1 = i;
    var a$1 = a.get(i$1);
    var i$2 = i;
    var b$1 = b.get(i$2);
    if ((!((a$1 === null) ? (b$1 === null) : $dp_equals__O__Z(a$1, b$1)))) {
      return false
    };
    i = ((1 + i) | 0)
  };
  return true
});
var $d_ju_Arrays$ = new $TypeData().initClass({
  ju_Arrays$: 0
}, false, "java.util.Arrays$", {
  ju_Arrays$: 1,
  O: 1
});
$c_ju_Arrays$.prototype.$classData = $d_ju_Arrays$;
var $n_ju_Arrays$;
function $m_ju_Arrays$() {
  if ((!$n_ju_Arrays$)) {
    $n_ju_Arrays$ = new $c_ju_Arrays$()
  };
  return $n_ju_Arrays$
}
function $is_ju_Formattable(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.ju_Formattable)))
}
function $as_ju_Formattable(obj) {
  return (($is_ju_Formattable(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "java.util.Formattable"))
}
function $isArrayOf_ju_Formattable(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.ju_Formattable)))
}
function $asArrayOf_ju_Formattable(obj, depth) {
  return (($isArrayOf_ju_Formattable(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.util.Formattable;", depth))
}
/** @constructor */
function $c_ju_Formatter$() {
  this.ju_Formatter$__f_java$util$Formatter$$FormatSpecifier = null;
  this.ju_Formatter$__f_java$util$Formatter$$ConversionsIllegalFlags = null;
  $n_ju_Formatter$ = this;
  this.ju_Formatter$__f_java$util$Formatter$$FormatSpecifier = new RegExp("(?:(\\d+)\\$)?([-#+ 0,\\(<]*)(\\d+)?(?:\\.(\\d+))?[%A-Za-z]", "g");
  this.ju_Formatter$__f_java$util$Formatter$$ConversionsIllegalFlags = new $ac_I(new Int32Array([96, 126, 638, 770, 32, 256, 2, 126, (-1), (-1), (-1), (-1), (-1), (-1), 800, (-1), (-1), (-1), 124, (-1), (-1), (-1), (-1), 544, (-1), (-1)]))
}
$c_ju_Formatter$.prototype = new $h_O();
$c_ju_Formatter$.prototype.constructor = $c_ju_Formatter$;
/** @constructor */
function $h_ju_Formatter$() {
  /*<skip>*/
}
$h_ju_Formatter$.prototype = $c_ju_Formatter$.prototype;
$c_ju_Formatter$.prototype.java$util$Formatter$$strOfZeros__I__T = (function(count) {
  if ((count <= 20)) {
    if ((count > 20)) {
      $charAt("00000000000000000000", count)
    };
    if ((count < 0)) {
      $charAt("00000000000000000000", (-1))
    };
    return $as_T("00000000000000000000".substring(0, count))
  } else {
    var result = "";
    var remaining = count;
    while ((remaining > 20)) {
      result = (result + "00000000000000000000");
      remaining = (((-20) + remaining) | 0)
    };
    var $$x1 = result;
    var endIndex = remaining;
    if ((endIndex > 20)) {
      $charAt("00000000000000000000", endIndex)
    };
    if ((endIndex < 0)) {
      $charAt("00000000000000000000", (-1))
    };
    return (("" + $$x1) + $as_T("00000000000000000000".substring(0, endIndex)))
  }
});
$c_ju_Formatter$.prototype.java$util$Formatter$$numberToDecimal__D__ju_Formatter$Decimal = (function(x) {
  if ((x === 0.0)) {
    var negative = ((1.0 / x) < 0.0);
    return new $c_ju_Formatter$Decimal(negative, "0", 0)
  } else {
    var negative$2 = (x < 0.0);
    var d = (negative$2 ? (-x) : x);
    var s = ("" + d);
    var ePos = $f_T__indexOf__I__I(s, 101);
    if ((ePos < 0)) {
      var e = 0
    } else {
      var $$x2 = parseInt;
      var beginIndex = ((1 + ePos) | 0);
      if (((beginIndex < 0) || (beginIndex > s.length))) {
        $charAt(s, beginIndex)
      };
      var $$x1 = $$x2($as_T(s.substring(beginIndex)));
      var e = $uI($$x1)
    };
    var significandEnd = ((ePos < 0) ? s.length : ePos);
    var dotPos = $f_T__indexOf__I__I(s, 46);
    if ((dotPos < 0)) {
      if ((significandEnd > s.length)) {
        $charAt(s, significandEnd)
      };
      if ((significandEnd < 0)) {
        $charAt(s, (-1))
      };
      var unscaledValue = $as_T(s.substring(0, significandEnd));
      var scale = ((-e) | 0);
      return new $c_ju_Formatter$Decimal(negative$2, unscaledValue, scale)
    } else {
      if ((dotPos > s.length)) {
        $charAt(s, dotPos)
      };
      if ((dotPos < 0)) {
        $charAt(s, (-1))
      };
      var $$x3 = $as_T(s.substring(0, dotPos));
      var beginIndex$1 = ((1 + dotPos) | 0);
      if ((beginIndex$1 < 0)) {
        $charAt(s, beginIndex$1)
      };
      if ((significandEnd > s.length)) {
        $charAt(s, significandEnd)
      };
      if ((significandEnd < beginIndex$1)) {
        $charAt(s, (-1))
      };
      var digits = (("" + $$x3) + $as_T(s.substring(beginIndex$1, significandEnd)));
      var digitsLen = digits.length;
      var i = 0;
      while (true) {
        if ((i < digitsLen)) {
          var index = i;
          var $$x4 = ($charAt(digits, index) === 48)
        } else {
          var $$x4 = false
        };
        if ($$x4) {
          i = ((1 + i) | 0)
        } else {
          break
        }
      };
      var beginIndex$2 = i;
      if (((beginIndex$2 < 0) || (beginIndex$2 > digits.length))) {
        $charAt(digits, beginIndex$2)
      };
      var unscaledValue$2 = $as_T(digits.substring(beginIndex$2));
      var scale$2 = ((((-e) | 0) + ((significandEnd - ((1 + dotPos) | 0)) | 0)) | 0);
      return new $c_ju_Formatter$Decimal(negative$2, unscaledValue$2, scale$2)
    }
  }
});
$c_ju_Formatter$.prototype.java$util$Formatter$$bigDecimalToDecimal__Ljava_math_BigDecimal__ju_Formatter$Decimal = (function(x) {
  var unscaledValueWithSign = x.unscaledValue__Ljava_math_BigInteger().toString__T();
  if ((unscaledValueWithSign === "0")) {
    return new $c_ju_Formatter$Decimal(false, "0", 0)
  } else {
    var negative = ($charAt(unscaledValueWithSign, 0) === 45);
    if (negative) {
      if ((unscaledValueWithSign.length < 1)) {
        $charAt(unscaledValueWithSign, 1)
      };
      var unscaledValue = $as_T(unscaledValueWithSign.substring(1))
    } else {
      var unscaledValue = unscaledValueWithSign
    };
    var scale = x.scale__I();
    return new $c_ju_Formatter$Decimal(negative, unscaledValue, scale)
  }
});
var $d_ju_Formatter$ = new $TypeData().initClass({
  ju_Formatter$: 0
}, false, "java.util.Formatter$", {
  ju_Formatter$: 1,
  O: 1
});
$c_ju_Formatter$.prototype.$classData = $d_ju_Formatter$;
var $n_ju_Formatter$;
function $m_ju_Formatter$() {
  if ((!$n_ju_Formatter$)) {
    $n_ju_Formatter$ = new $c_ju_Formatter$()
  };
  return $n_ju_Formatter$
}
function $p_ju_Formatter$Decimal__roundAtPos__I__ju_Formatter$Decimal($thiz, roundingPos) {
  var digits = $thiz.ju_Formatter$Decimal__f_unscaledValue;
  var digitsLen = digits.length;
  if ((roundingPos < 0)) {
    var negative = $thiz.ju_Formatter$Decimal__f_negative;
    return new $c_ju_Formatter$Decimal(negative, "0", 0)
  } else if ((roundingPos >= digitsLen)) {
    return $thiz
  } else if (($charAt(digits, roundingPos) < 53)) {
    if ((roundingPos === 0)) {
      var negative$1 = $thiz.ju_Formatter$Decimal__f_negative;
      return new $c_ju_Formatter$Decimal(negative$1, "0", 0)
    } else {
      var $$x1 = $thiz.ju_Formatter$Decimal__f_negative;
      if ((roundingPos > digits.length)) {
        $charAt(digits, roundingPos)
      };
      if ((roundingPos < 0)) {
        $charAt(digits, (-1))
      };
      return new $c_ju_Formatter$Decimal($$x1, $as_T(digits.substring(0, roundingPos)), (($thiz.ju_Formatter$Decimal__f_scale - ((digitsLen - roundingPos) | 0)) | 0))
    }
  } else {
    var lastNonNinePos = (((-1) + roundingPos) | 0);
    while (true) {
      if ((lastNonNinePos >= 0)) {
        var index = lastNonNinePos;
        var $$x2 = ($charAt(digits, index) === 57)
      } else {
        var $$x2 = false
      };
      if ($$x2) {
        lastNonNinePos = (((-1) + lastNonNinePos) | 0)
      } else {
        break
      }
    };
    if ((lastNonNinePos < 0)) {
      var newUnscaledValue = "1"
    } else {
      var endIndex = lastNonNinePos;
      if ((endIndex > digits.length)) {
        $charAt(digits, endIndex)
      };
      if ((endIndex < 0)) {
        $charAt(digits, (-1))
      };
      var $$x3 = $as_T(digits.substring(0, endIndex));
      var index$1 = lastNonNinePos;
      var newUnscaledValue = (("" + $$x3) + $bC((65535 & ((1 + $charAt(digits, index$1)) | 0))))
    };
    var pos = ((1 + lastNonNinePos) | 0);
    var newScale = (($thiz.ju_Formatter$Decimal__f_scale - ((digitsLen - pos) | 0)) | 0);
    return new $c_ju_Formatter$Decimal($thiz.ju_Formatter$Decimal__f_negative, newUnscaledValue, newScale)
  }
}
/** @constructor */
function $c_ju_Formatter$Decimal(negative, unscaledValue, scale) {
  this.ju_Formatter$Decimal__f_negative = false;
  this.ju_Formatter$Decimal__f_unscaledValue = null;
  this.ju_Formatter$Decimal__f_scale = 0;
  this.ju_Formatter$Decimal__f_negative = negative;
  this.ju_Formatter$Decimal__f_unscaledValue = unscaledValue;
  this.ju_Formatter$Decimal__f_scale = scale
}
$c_ju_Formatter$Decimal.prototype = new $h_O();
$c_ju_Formatter$Decimal.prototype.constructor = $c_ju_Formatter$Decimal;
/** @constructor */
function $h_ju_Formatter$Decimal() {
  /*<skip>*/
}
$h_ju_Formatter$Decimal.prototype = $c_ju_Formatter$Decimal.prototype;
$c_ju_Formatter$Decimal.prototype.isZero__Z = (function() {
  return (this.ju_Formatter$Decimal__f_unscaledValue === "0")
});
$c_ju_Formatter$Decimal.prototype.round__I__ju_Formatter$Decimal = (function(precision) {
  $m_ju_Formatter$();
  var condition = (precision > 0);
  if ((!condition)) {
    throw new $c_jl_AssertionError("Decimal.round() called with non-positive precision")
  };
  return $p_ju_Formatter$Decimal__roundAtPos__I__ju_Formatter$Decimal(this, precision)
});
$c_ju_Formatter$Decimal.prototype.setScale__I__ju_Formatter$Decimal = (function(newScale) {
  var this$1 = this.ju_Formatter$Decimal__f_unscaledValue;
  var roundingPos = ((((this$1.length + newScale) | 0) - this.ju_Formatter$Decimal__f_scale) | 0);
  var rounded = $p_ju_Formatter$Decimal__roundAtPos__I__ju_Formatter$Decimal(this, roundingPos);
  $m_ju_Formatter$();
  var condition = (rounded.isZero__Z() || (rounded.ju_Formatter$Decimal__f_scale <= newScale));
  if ((!condition)) {
    throw new $c_jl_AssertionError("roundAtPos returned a non-zero value with a scale too large")
  };
  return ((rounded.isZero__Z() || (rounded.ju_Formatter$Decimal__f_scale === newScale)) ? rounded : new $c_ju_Formatter$Decimal(this.ju_Formatter$Decimal__f_negative, (("" + rounded.ju_Formatter$Decimal__f_unscaledValue) + $m_ju_Formatter$().java$util$Formatter$$strOfZeros__I__T(((newScale - rounded.ju_Formatter$Decimal__f_scale) | 0))), newScale))
});
$c_ju_Formatter$Decimal.prototype.toString__T = (function() {
  return (((((("Decimal(" + this.ju_Formatter$Decimal__f_negative) + ", ") + this.ju_Formatter$Decimal__f_unscaledValue) + ", ") + this.ju_Formatter$Decimal__f_scale) + ")")
});
var $d_ju_Formatter$Decimal = new $TypeData().initClass({
  ju_Formatter$Decimal: 0
}, false, "java.util.Formatter$Decimal", {
  ju_Formatter$Decimal: 1,
  O: 1
});
$c_ju_Formatter$Decimal.prototype.$classData = $d_ju_Formatter$Decimal;
/** @constructor */
function $c_ju_Formatter$LocaleInfo() {
  /*<skip>*/
}
$c_ju_Formatter$LocaleInfo.prototype = new $h_O();
$c_ju_Formatter$LocaleInfo.prototype.constructor = $c_ju_Formatter$LocaleInfo;
/** @constructor */
function $h_ju_Formatter$LocaleInfo() {
  /*<skip>*/
}
$h_ju_Formatter$LocaleInfo.prototype = $c_ju_Formatter$LocaleInfo.prototype;
/** @constructor */
function $c_RTLong(lo, hi) {
  this.RTLong__f_lo = 0;
  this.RTLong__f_hi = 0;
  this.RTLong__f_lo = lo;
  this.RTLong__f_hi = hi
}
$c_RTLong.prototype = new $h_O();
$c_RTLong.prototype.constructor = $c_RTLong;
/** @constructor */
function $h_RTLong() {
  /*<skip>*/
}
$h_RTLong.prototype = $c_RTLong.prototype;
$c_RTLong.prototype.equals__O__Z = (function(that) {
  if ((that instanceof $c_RTLong)) {
    var x2 = $as_RTLong(that);
    return ((this.RTLong__f_lo === x2.RTLong__f_lo) && (this.RTLong__f_hi === x2.RTLong__f_hi))
  } else {
    return false
  }
});
$c_RTLong.prototype.hashCode__I = (function() {
  return (this.RTLong__f_lo ^ this.RTLong__f_hi)
});
$c_RTLong.prototype.toString__T = (function() {
  return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toString__I__I__T(this.RTLong__f_lo, this.RTLong__f_hi)
});
$c_RTLong.prototype.toInt__I = (function() {
  return this.RTLong__f_lo
});
$c_RTLong.prototype.toFloat__F = (function() {
  return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toFloat__I__I__F(this.RTLong__f_lo, this.RTLong__f_hi)
});
$c_RTLong.prototype.toDouble__D = (function() {
  return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D(this.RTLong__f_lo, this.RTLong__f_hi)
});
$c_RTLong.prototype.byteValue__B = (function() {
  return ((this.RTLong__f_lo << 24) >> 24)
});
$c_RTLong.prototype.shortValue__S = (function() {
  return ((this.RTLong__f_lo << 16) >> 16)
});
$c_RTLong.prototype.intValue__I = (function() {
  return this.RTLong__f_lo
});
$c_RTLong.prototype.longValue__J = (function() {
  return $uJ(this)
});
$c_RTLong.prototype.floatValue__F = (function() {
  return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toFloat__I__I__F(this.RTLong__f_lo, this.RTLong__f_hi)
});
$c_RTLong.prototype.doubleValue__D = (function() {
  return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D(this.RTLong__f_lo, this.RTLong__f_hi)
});
$c_RTLong.prototype.compareTo__O__I = (function(that) {
  var b = $as_RTLong(that);
  return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$compare__I__I__I__I__I(this.RTLong__f_lo, this.RTLong__f_hi, b.RTLong__f_lo, b.RTLong__f_hi)
});
$c_RTLong.prototype.compareTo__jl_Long__I = (function(that) {
  return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$compare__I__I__I__I__I(this.RTLong__f_lo, this.RTLong__f_hi, that.RTLong__f_lo, that.RTLong__f_hi)
});
$c_RTLong.prototype.equals__RTLong__Z = (function(b) {
  return ((this.RTLong__f_lo === b.RTLong__f_lo) && (this.RTLong__f_hi === b.RTLong__f_hi))
});
$c_RTLong.prototype.notEquals__RTLong__Z = (function(b) {
  return (!((this.RTLong__f_lo === b.RTLong__f_lo) && (this.RTLong__f_hi === b.RTLong__f_hi)))
});
$c_RTLong.prototype.$less__RTLong__Z = (function(b) {
  var ahi = this.RTLong__f_hi;
  var bhi = b.RTLong__f_hi;
  return ((ahi === bhi) ? (((-2147483648) ^ this.RTLong__f_lo) < ((-2147483648) ^ b.RTLong__f_lo)) : (ahi < bhi))
});
$c_RTLong.prototype.$less$eq__RTLong__Z = (function(b) {
  var ahi = this.RTLong__f_hi;
  var bhi = b.RTLong__f_hi;
  return ((ahi === bhi) ? (((-2147483648) ^ this.RTLong__f_lo) <= ((-2147483648) ^ b.RTLong__f_lo)) : (ahi < bhi))
});
$c_RTLong.prototype.$greater__RTLong__Z = (function(b) {
  var ahi = this.RTLong__f_hi;
  var bhi = b.RTLong__f_hi;
  return ((ahi === bhi) ? (((-2147483648) ^ this.RTLong__f_lo) > ((-2147483648) ^ b.RTLong__f_lo)) : (ahi > bhi))
});
$c_RTLong.prototype.$greater$eq__RTLong__Z = (function(b) {
  var ahi = this.RTLong__f_hi;
  var bhi = b.RTLong__f_hi;
  return ((ahi === bhi) ? (((-2147483648) ^ this.RTLong__f_lo) >= ((-2147483648) ^ b.RTLong__f_lo)) : (ahi > bhi))
});
$c_RTLong.prototype.unary_$tilde__RTLong = (function() {
  return new $c_RTLong((~this.RTLong__f_lo), (~this.RTLong__f_hi))
});
$c_RTLong.prototype.$bar__RTLong__RTLong = (function(b) {
  return new $c_RTLong((this.RTLong__f_lo | b.RTLong__f_lo), (this.RTLong__f_hi | b.RTLong__f_hi))
});
$c_RTLong.prototype.$amp__RTLong__RTLong = (function(b) {
  return new $c_RTLong((this.RTLong__f_lo & b.RTLong__f_lo), (this.RTLong__f_hi & b.RTLong__f_hi))
});
$c_RTLong.prototype.$up__RTLong__RTLong = (function(b) {
  return new $c_RTLong((this.RTLong__f_lo ^ b.RTLong__f_lo), (this.RTLong__f_hi ^ b.RTLong__f_hi))
});
$c_RTLong.prototype.$less$less__I__RTLong = (function(n) {
  var lo = this.RTLong__f_lo;
  return new $c_RTLong((((32 & n) === 0) ? (lo << n) : 0), (((32 & n) === 0) ? (((((lo >>> 1) | 0) >>> ((31 - n) | 0)) | 0) | (this.RTLong__f_hi << n)) : (lo << n)))
});
$c_RTLong.prototype.$greater$greater$greater__I__RTLong = (function(n) {
  var hi = this.RTLong__f_hi;
  return new $c_RTLong((((32 & n) === 0) ? (((this.RTLong__f_lo >>> n) | 0) | ((hi << 1) << ((31 - n) | 0))) : ((hi >>> n) | 0)), (((32 & n) === 0) ? ((hi >>> n) | 0) : 0))
});
$c_RTLong.prototype.$greater$greater__I__RTLong = (function(n) {
  var hi = this.RTLong__f_hi;
  return new $c_RTLong((((32 & n) === 0) ? (((this.RTLong__f_lo >>> n) | 0) | ((hi << 1) << ((31 - n) | 0))) : (hi >> n)), (((32 & n) === 0) ? (hi >> n) : (hi >> 31)))
});
$c_RTLong.prototype.unary_$minus__RTLong = (function() {
  var lo = this.RTLong__f_lo;
  var hi = this.RTLong__f_hi;
  return new $c_RTLong(((-lo) | 0), ((lo !== 0) ? (~hi) : ((-hi) | 0)))
});
$c_RTLong.prototype.$plus__RTLong__RTLong = (function(b) {
  var alo = this.RTLong__f_lo;
  var ahi = this.RTLong__f_hi;
  var bhi = b.RTLong__f_hi;
  var lo = ((alo + b.RTLong__f_lo) | 0);
  return new $c_RTLong(lo, ((((-2147483648) ^ lo) < ((-2147483648) ^ alo)) ? ((1 + ((ahi + bhi) | 0)) | 0) : ((ahi + bhi) | 0)))
});
$c_RTLong.prototype.$minus__RTLong__RTLong = (function(b) {
  var alo = this.RTLong__f_lo;
  var ahi = this.RTLong__f_hi;
  var bhi = b.RTLong__f_hi;
  var lo = ((alo - b.RTLong__f_lo) | 0);
  return new $c_RTLong(lo, ((((-2147483648) ^ lo) > ((-2147483648) ^ alo)) ? (((-1) + ((ahi - bhi) | 0)) | 0) : ((ahi - bhi) | 0)))
});
$c_RTLong.prototype.$times__RTLong__RTLong = (function(b) {
  var alo = this.RTLong__f_lo;
  var blo = b.RTLong__f_lo;
  var a0 = (65535 & alo);
  var a1 = ((alo >>> 16) | 0);
  var b0 = (65535 & blo);
  var b1 = ((blo >>> 16) | 0);
  var a0b0 = Math.imul(a0, b0);
  var a1b0 = Math.imul(a1, b0);
  var a0b1 = Math.imul(a0, b1);
  var lo = ((a0b0 + (((a1b0 + a0b1) | 0) << 16)) | 0);
  var c1part = ((((a0b0 >>> 16) | 0) + a0b1) | 0);
  var hi = ((((((((Math.imul(alo, b.RTLong__f_hi) + Math.imul(this.RTLong__f_hi, blo)) | 0) + Math.imul(a1, b1)) | 0) + ((c1part >>> 16) | 0)) | 0) + (((((65535 & c1part) + a1b0) | 0) >>> 16) | 0)) | 0);
  return new $c_RTLong(lo, hi)
});
$c_RTLong.prototype.$div__RTLong__RTLong = (function(b) {
  var this$1 = $m_RTLong$();
  var lo = this$1.divideImpl__I__I__I__I__I(this.RTLong__f_lo, this.RTLong__f_hi, b.RTLong__f_lo, b.RTLong__f_hi);
  return new $c_RTLong(lo, this$1.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn)
});
$c_RTLong.prototype.$percent__RTLong__RTLong = (function(b) {
  var this$1 = $m_RTLong$();
  var lo = this$1.remainderImpl__I__I__I__I__I(this.RTLong__f_lo, this.RTLong__f_hi, b.RTLong__f_lo, b.RTLong__f_hi);
  return new $c_RTLong(lo, this$1.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn)
});
function $as_RTLong(obj) {
  return (((obj instanceof $c_RTLong) || (obj === null)) ? obj : $throwClassCastException(obj, "org.scalajs.linker.runtime.RuntimeLong"))
}
function $isArrayOf_RTLong(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.RTLong)))
}
function $asArrayOf_RTLong(obj, depth) {
  return (($isArrayOf_RTLong(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lorg.scalajs.linker.runtime.RuntimeLong;", depth))
}
var $d_RTLong = new $TypeData().initClass({
  RTLong: 0
}, false, "org.scalajs.linker.runtime.RuntimeLong", {
  RTLong: 1,
  O: 1
});
$c_RTLong.prototype.$classData = $d_RTLong;
function $p_RTLong$__toUnsignedString__I__I__T($thiz, lo, hi) {
  if ((((-2097152) & hi) === 0)) {
    var this$1 = ((4.294967296E9 * hi) + $uD((lo >>> 0.0)));
    return ("" + this$1)
  } else {
    return $as_T($p_RTLong$__unsignedDivModHelper__I__I__I__I__I__O($thiz, lo, hi, 1000000000, 0, 2))
  }
}
function $p_RTLong$__unsigned_$div__I__I__I__I__I($thiz, alo, ahi, blo, bhi) {
  if ((((-2097152) & ahi) === 0)) {
    if ((((-2097152) & bhi) === 0)) {
      var aDouble = ((4.294967296E9 * ahi) + $uD((alo >>> 0.0)));
      var bDouble = ((4.294967296E9 * bhi) + $uD((blo >>> 0.0)));
      var rDouble = (aDouble / bDouble);
      var x = (rDouble / 4.294967296E9);
      $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = $uI((x | 0.0));
      return $uI((rDouble | 0.0))
    } else {
      $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
      return 0
    }
  } else if (((bhi === 0) && ((blo & (((-1) + blo) | 0)) === 0))) {
    var pow = ((31 - $uI(Math.clz32(blo))) | 0);
    $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = ((ahi >>> pow) | 0);
    return (((alo >>> pow) | 0) | ((ahi << 1) << ((31 - pow) | 0)))
  } else if (((blo === 0) && ((bhi & (((-1) + bhi) | 0)) === 0))) {
    var pow$2 = ((31 - $uI(Math.clz32(bhi))) | 0);
    $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
    return ((ahi >>> pow$2) | 0)
  } else {
    return $uI($p_RTLong$__unsignedDivModHelper__I__I__I__I__I__O($thiz, alo, ahi, blo, bhi, 0))
  }
}
function $p_RTLong$__unsigned_$percent__I__I__I__I__I($thiz, alo, ahi, blo, bhi) {
  if ((((-2097152) & ahi) === 0)) {
    if ((((-2097152) & bhi) === 0)) {
      var aDouble = ((4.294967296E9 * ahi) + $uD((alo >>> 0.0)));
      var bDouble = ((4.294967296E9 * bhi) + $uD((blo >>> 0.0)));
      var rDouble = (aDouble % bDouble);
      var x = (rDouble / 4.294967296E9);
      $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = $uI((x | 0.0));
      return $uI((rDouble | 0.0))
    } else {
      $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = ahi;
      return alo
    }
  } else if (((bhi === 0) && ((blo & (((-1) + blo) | 0)) === 0))) {
    $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
    return (alo & (((-1) + blo) | 0))
  } else if (((blo === 0) && ((bhi & (((-1) + bhi) | 0)) === 0))) {
    $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (ahi & (((-1) + bhi) | 0));
    return alo
  } else {
    return $uI($p_RTLong$__unsignedDivModHelper__I__I__I__I__I__O($thiz, alo, ahi, blo, bhi, 1))
  }
}
function $p_RTLong$__unsignedDivModHelper__I__I__I__I__I__O($thiz, alo, ahi, blo, bhi, ask) {
  var shift = ((((bhi !== 0) ? $uI(Math.clz32(bhi)) : ((32 + $uI(Math.clz32(blo))) | 0)) - ((ahi !== 0) ? $uI(Math.clz32(ahi)) : ((32 + $uI(Math.clz32(alo))) | 0))) | 0);
  var n = shift;
  var lo = (((32 & n) === 0) ? (blo << n) : 0);
  var hi = (((32 & n) === 0) ? (((((blo >>> 1) | 0) >>> ((31 - n) | 0)) | 0) | (bhi << n)) : (blo << n));
  var bShiftLo = lo;
  var bShiftHi = hi;
  var remLo = alo;
  var remHi = ahi;
  var quotLo = 0;
  var quotHi = 0;
  while (((shift >= 0) && (((-2097152) & remHi) !== 0))) {
    var alo$1 = remLo;
    var ahi$1 = remHi;
    var blo$1 = bShiftLo;
    var bhi$1 = bShiftHi;
    if (((ahi$1 === bhi$1) ? (((-2147483648) ^ alo$1) >= ((-2147483648) ^ blo$1)) : (((-2147483648) ^ ahi$1) >= ((-2147483648) ^ bhi$1)))) {
      var lo$1 = remLo;
      var hi$1 = remHi;
      var lo$2 = bShiftLo;
      var hi$2 = bShiftHi;
      var lo$3 = ((lo$1 - lo$2) | 0);
      var hi$3 = ((((-2147483648) ^ lo$3) > ((-2147483648) ^ lo$1)) ? (((-1) + ((hi$1 - hi$2) | 0)) | 0) : ((hi$1 - hi$2) | 0));
      remLo = lo$3;
      remHi = hi$3;
      if ((shift < 32)) {
        quotLo = (quotLo | (1 << shift))
      } else {
        quotHi = (quotHi | (1 << shift))
      }
    };
    shift = (((-1) + shift) | 0);
    var lo$4 = bShiftLo;
    var hi$4 = bShiftHi;
    var lo$5 = (((lo$4 >>> 1) | 0) | (hi$4 << 31));
    var hi$5 = ((hi$4 >>> 1) | 0);
    bShiftLo = lo$5;
    bShiftHi = hi$5
  };
  var alo$2 = remLo;
  var ahi$2 = remHi;
  if (((ahi$2 === bhi) ? (((-2147483648) ^ alo$2) >= ((-2147483648) ^ blo)) : (((-2147483648) ^ ahi$2) >= ((-2147483648) ^ bhi)))) {
    var lo$6 = remLo;
    var hi$6 = remHi;
    var remDouble = ((4.294967296E9 * hi$6) + $uD((lo$6 >>> 0.0)));
    var bDouble = ((4.294967296E9 * bhi) + $uD((blo >>> 0.0)));
    if ((ask !== 1)) {
      var x = (remDouble / bDouble);
      var lo$7 = $uI((x | 0.0));
      var x$1 = (x / 4.294967296E9);
      var hi$7 = $uI((x$1 | 0.0));
      var lo$8 = quotLo;
      var hi$8 = quotHi;
      var lo$9 = ((lo$8 + lo$7) | 0);
      var hi$9 = ((((-2147483648) ^ lo$9) < ((-2147483648) ^ lo$8)) ? ((1 + ((hi$8 + hi$7) | 0)) | 0) : ((hi$8 + hi$7) | 0));
      quotLo = lo$9;
      quotHi = hi$9
    };
    if ((ask !== 0)) {
      var rem_mod_bDouble = (remDouble % bDouble);
      remLo = $uI((rem_mod_bDouble | 0.0));
      var x$2 = (rem_mod_bDouble / 4.294967296E9);
      remHi = $uI((x$2 | 0.0))
    }
  };
  if ((ask === 0)) {
    $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = quotHi;
    return quotLo
  } else if ((ask === 1)) {
    $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = remHi;
    return remLo
  } else {
    var lo$10 = quotLo;
    var hi$10 = quotHi;
    var quot = ((4.294967296E9 * hi$10) + $uD((lo$10 >>> 0.0)));
    var this$7 = remLo;
    var remStr = ("" + this$7);
    var start = remStr.length;
    return ((("" + quot) + $as_T("000000000".substring(start))) + remStr)
  }
}
/** @constructor */
function $c_RTLong$() {
  this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0
}
$c_RTLong$.prototype = new $h_O();
$c_RTLong$.prototype.constructor = $c_RTLong$;
/** @constructor */
function $h_RTLong$() {
  /*<skip>*/
}
$h_RTLong$.prototype = $c_RTLong$.prototype;
$c_RTLong$.prototype.org$scalajs$linker$runtime$RuntimeLong$$toString__I__I__T = (function(lo, hi) {
  return ((hi === (lo >> 31)) ? ("" + lo) : ((hi < 0) ? ("-" + $p_RTLong$__toUnsignedString__I__I__T(this, ((-lo) | 0), ((lo !== 0) ? (~hi) : ((-hi) | 0)))) : $p_RTLong$__toUnsignedString__I__I__T(this, lo, hi)))
});
$c_RTLong$.prototype.org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D = (function(lo, hi) {
  if ((hi < 0)) {
    var x = ((lo !== 0) ? (~hi) : ((-hi) | 0));
    var $$x1 = $uD((x >>> 0.0));
    var x$1 = ((-lo) | 0);
    return (-((4.294967296E9 * $$x1) + $uD((x$1 >>> 0.0))))
  } else {
    return ((4.294967296E9 * hi) + $uD((lo >>> 0.0)))
  }
});
$c_RTLong$.prototype.org$scalajs$linker$runtime$RuntimeLong$$toFloat__I__I__F = (function(lo, hi) {
  if ((hi < 0)) {
    var lo$1 = ((-lo) | 0);
    var hi$1 = ((lo !== 0) ? (~hi) : ((-hi) | 0));
    var abs__lo = lo$1;
    var abs__hi = hi$1
  } else {
    var abs__lo = lo;
    var abs__hi = hi
  };
  var hi$2 = abs__hi;
  if (((((-2097152) & hi$2) === 0) || ((65535 & abs__lo) === 0))) {
    var compressedAbsLo = abs__lo
  } else {
    var compressedAbsLo = (32768 | ((-65536) & abs__lo))
  };
  var x = abs__hi;
  var absRes = ((4.294967296E9 * $uD((x >>> 0.0))) + $uD((compressedAbsLo >>> 0.0)));
  return Math.fround(((hi < 0) ? (-absRes) : absRes))
});
$c_RTLong$.prototype.fromInt__I__RTLong = (function(value) {
  return new $c_RTLong(value, (value >> 31))
});
$c_RTLong$.prototype.fromDouble__D__RTLong = (function(value) {
  var lo = this.org$scalajs$linker$runtime$RuntimeLong$$fromDoubleImpl__D__I(value);
  return new $c_RTLong(lo, this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn)
});
$c_RTLong$.prototype.org$scalajs$linker$runtime$RuntimeLong$$fromDoubleImpl__D__I = (function(value) {
  if ((value < (-9.223372036854776E18))) {
    this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (-2147483648);
    return 0
  } else if ((value >= 9.223372036854776E18)) {
    this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 2147483647;
    return (-1)
  } else {
    var rawLo = $uI((value | 0.0));
    var x = (value / 4.294967296E9);
    var rawHi = $uI((x | 0.0));
    this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (((value < 0.0) && (rawLo !== 0)) ? (((-1) + rawHi) | 0) : rawHi);
    return rawLo
  }
});
$c_RTLong$.prototype.org$scalajs$linker$runtime$RuntimeLong$$compare__I__I__I__I__I = (function(alo, ahi, blo, bhi) {
  return ((ahi === bhi) ? ((alo === blo) ? 0 : ((((-2147483648) ^ alo) < ((-2147483648) ^ blo)) ? (-1) : 1)) : ((ahi < bhi) ? (-1) : 1))
});
$c_RTLong$.prototype.divideImpl__I__I__I__I__I = (function(alo, ahi, blo, bhi) {
  if (((blo | bhi) === 0)) {
    throw new $c_jl_ArithmeticException("/ by zero")
  };
  if ((ahi === (alo >> 31))) {
    if ((bhi === (blo >> 31))) {
      if (((alo === (-2147483648)) && (blo === (-1)))) {
        this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
        return (-2147483648)
      } else {
        var lo = $intDiv(alo, blo);
        this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (lo >> 31);
        return lo
      }
    } else if (((alo === (-2147483648)) && ((blo === (-2147483648)) && (bhi === 0)))) {
      this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (-1);
      return (-1)
    } else {
      this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
      return 0
    }
  } else {
    if ((ahi < 0)) {
      var lo$1 = ((-alo) | 0);
      var hi = ((alo !== 0) ? (~ahi) : ((-ahi) | 0));
      var aAbs__lo = lo$1;
      var aAbs__hi = hi
    } else {
      var aAbs__lo = alo;
      var aAbs__hi = ahi
    };
    if ((bhi < 0)) {
      var lo$2 = ((-blo) | 0);
      var hi$1 = ((blo !== 0) ? (~bhi) : ((-bhi) | 0));
      var bAbs__lo = lo$2;
      var bAbs__hi = hi$1
    } else {
      var bAbs__lo = blo;
      var bAbs__hi = bhi
    };
    var absRLo = $p_RTLong$__unsigned_$div__I__I__I__I__I(this, aAbs__lo, aAbs__hi, bAbs__lo, bAbs__hi);
    if (((ahi ^ bhi) >= 0)) {
      return absRLo
    } else {
      var hi$2 = this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
      this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = ((absRLo !== 0) ? (~hi$2) : ((-hi$2) | 0));
      return ((-absRLo) | 0)
    }
  }
});
$c_RTLong$.prototype.remainderImpl__I__I__I__I__I = (function(alo, ahi, blo, bhi) {
  if (((blo | bhi) === 0)) {
    throw new $c_jl_ArithmeticException("/ by zero")
  };
  if ((ahi === (alo >> 31))) {
    if ((bhi === (blo >> 31))) {
      if ((blo !== (-1))) {
        var lo = $intMod(alo, blo);
        this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (lo >> 31);
        return lo
      } else {
        this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
        return 0
      }
    } else if (((alo === (-2147483648)) && ((blo === (-2147483648)) && (bhi === 0)))) {
      this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
      return 0
    } else {
      this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = ahi;
      return alo
    }
  } else {
    if ((ahi < 0)) {
      var lo$1 = ((-alo) | 0);
      var hi = ((alo !== 0) ? (~ahi) : ((-ahi) | 0));
      var aAbs__lo = lo$1;
      var aAbs__hi = hi
    } else {
      var aAbs__lo = alo;
      var aAbs__hi = ahi
    };
    if ((bhi < 0)) {
      var lo$2 = ((-blo) | 0);
      var hi$1 = ((blo !== 0) ? (~bhi) : ((-bhi) | 0));
      var bAbs__lo = lo$2;
      var bAbs__hi = hi$1
    } else {
      var bAbs__lo = blo;
      var bAbs__hi = bhi
    };
    var absRLo = $p_RTLong$__unsigned_$percent__I__I__I__I__I(this, aAbs__lo, aAbs__hi, bAbs__lo, bAbs__hi);
    if ((ahi < 0)) {
      var hi$2 = this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
      this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = ((absRLo !== 0) ? (~hi$2) : ((-hi$2) | 0));
      return ((-absRLo) | 0)
    } else {
      return absRLo
    }
  }
});
var $d_RTLong$ = new $TypeData().initClass({
  RTLong$: 0
}, false, "org.scalajs.linker.runtime.RuntimeLong$", {
  RTLong$: 1,
  O: 1
});
$c_RTLong$.prototype.$classData = $d_RTLong$;
var $n_RTLong$;
function $m_RTLong$() {
  if ((!$n_RTLong$)) {
    $n_RTLong$ = new $c_RTLong$()
  };
  return $n_RTLong$
}
/** @constructor */
function $c_s_FallbackArrayBuilding() {
  /*<skip>*/
}
$c_s_FallbackArrayBuilding.prototype = new $h_O();
$c_s_FallbackArrayBuilding.prototype.constructor = $c_s_FallbackArrayBuilding;
/** @constructor */
function $h_s_FallbackArrayBuilding() {
  /*<skip>*/
}
$h_s_FallbackArrayBuilding.prototype = $c_s_FallbackArrayBuilding.prototype;
function $is_F0(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.F0)))
}
function $as_F0(obj) {
  return (($is_F0(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.Function0"))
}
function $isArrayOf_F0(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.F0)))
}
function $asArrayOf_F0(obj, depth) {
  return (($isArrayOf_F0(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.Function0;", depth))
}
/** @constructor */
function $c_s_LowPriorityImplicits() {
  /*<skip>*/
}
$c_s_LowPriorityImplicits.prototype = new $h_O();
$c_s_LowPriorityImplicits.prototype.constructor = $c_s_LowPriorityImplicits;
/** @constructor */
function $h_s_LowPriorityImplicits() {
  /*<skip>*/
}
$h_s_LowPriorityImplicits.prototype = $c_s_LowPriorityImplicits.prototype;
$c_s_LowPriorityImplicits.prototype.unwrapString__sci_WrappedString__T = (function(ws) {
  return ((ws !== null) ? ws.sci_WrappedString__f_self : null)
});
/** @constructor */
function $c_s_Predef$any2stringadd$() {
  /*<skip>*/
}
$c_s_Predef$any2stringadd$.prototype = new $h_O();
$c_s_Predef$any2stringadd$.prototype.constructor = $c_s_Predef$any2stringadd$;
/** @constructor */
function $h_s_Predef$any2stringadd$() {
  /*<skip>*/
}
$h_s_Predef$any2stringadd$.prototype = $c_s_Predef$any2stringadd$.prototype;
$c_s_Predef$any2stringadd$.prototype.$plus$extension__O__T__T = (function(this$, other) {
  return (("" + this$) + other)
});
var $d_s_Predef$any2stringadd$ = new $TypeData().initClass({
  s_Predef$any2stringadd$: 0
}, false, "scala.Predef$any2stringadd$", {
  s_Predef$any2stringadd$: 1,
  O: 1
});
$c_s_Predef$any2stringadd$.prototype.$classData = $d_s_Predef$any2stringadd$;
var $n_s_Predef$any2stringadd$;
function $m_s_Predef$any2stringadd$() {
  if ((!$n_s_Predef$any2stringadd$)) {
    $n_s_Predef$any2stringadd$ = new $c_s_Predef$any2stringadd$()
  };
  return $n_s_Predef$any2stringadd$
}
function $f_s_Proxy__equals__O__Z($thiz, that) {
  return ((that !== null) && (((that === $thiz) || (that === $thiz.scm_Builder$$anon$1__f_self)) || $dp_equals__O__Z(that, $thiz.scm_Builder$$anon$1__f_self)))
}
function $f_s_Proxy__toString__T($thiz) {
  return ("" + $thiz.scm_Builder$$anon$1__f_self)
}
function $is_sc_GenTraversableOnce(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_GenTraversableOnce)))
}
function $as_sc_GenTraversableOnce(obj) {
  return (($is_sc_GenTraversableOnce(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.GenTraversableOnce"))
}
function $isArrayOf_sc_GenTraversableOnce(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_GenTraversableOnce)))
}
function $asArrayOf_sc_GenTraversableOnce(obj, depth) {
  return (($isArrayOf_sc_GenTraversableOnce(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.GenTraversableOnce;", depth))
}
/** @constructor */
function $c_sc_Iterator$() {
  this.sc_Iterator$__f_empty = null;
  $n_sc_Iterator$ = this;
  this.sc_Iterator$__f_empty = new $c_sc_Iterator$$anon$2()
}
$c_sc_Iterator$.prototype = new $h_O();
$c_sc_Iterator$.prototype.constructor = $c_sc_Iterator$;
/** @constructor */
function $h_sc_Iterator$() {
  /*<skip>*/
}
$h_sc_Iterator$.prototype = $c_sc_Iterator$.prototype;
var $d_sc_Iterator$ = new $TypeData().initClass({
  sc_Iterator$: 0
}, false, "scala.collection.Iterator$", {
  sc_Iterator$: 1,
  O: 1
});
$c_sc_Iterator$.prototype.$classData = $d_sc_Iterator$;
var $n_sc_Iterator$;
function $m_sc_Iterator$() {
  if ((!$n_sc_Iterator$)) {
    $n_sc_Iterator$ = new $c_sc_Iterator$()
  };
  return $n_sc_Iterator$
}
/** @constructor */
function $c_scg_GenMapFactory() {
  /*<skip>*/
}
$c_scg_GenMapFactory.prototype = new $h_O();
$c_scg_GenMapFactory.prototype.constructor = $c_scg_GenMapFactory;
/** @constructor */
function $h_scg_GenMapFactory() {
  /*<skip>*/
}
$h_scg_GenMapFactory.prototype = $c_scg_GenMapFactory.prototype;
$c_scg_GenMapFactory.prototype.newBuilder__scm_Builder = (function() {
  return new $c_scm_MapBuilder(this.empty__sc_GenMap())
});
/** @constructor */
function $c_scg_GenericCompanion() {
  /*<skip>*/
}
$c_scg_GenericCompanion.prototype = new $h_O();
$c_scg_GenericCompanion.prototype.constructor = $c_scg_GenericCompanion;
/** @constructor */
function $h_scg_GenericCompanion() {
  /*<skip>*/
}
$h_scg_GenericCompanion.prototype = $c_scg_GenericCompanion.prototype;
$c_scg_GenericCompanion.prototype.empty__sc_GenTraversable = (function() {
  return (((this === $m_sci_Seq$()) || (this === $m_sc_Seq$())) ? $m_sci_Nil$() : $as_sc_GenTraversable(this.newBuilder__scm_Builder().result__O()))
});
$c_scg_GenericCompanion.prototype.apply__sc_Seq__sc_GenTraversable = (function(elems) {
  if (elems.isEmpty__Z()) {
    return this.empty__sc_GenTraversable()
  } else {
    var b = this.newBuilder__scm_Builder();
    b.$plus$plus$eq__sc_TraversableOnce__scg_Growable(elems);
    return $as_sc_GenTraversable(b.result__O())
  }
});
/** @constructor */
function $c_sci_HashMap$Merger() {
  /*<skip>*/
}
$c_sci_HashMap$Merger.prototype = new $h_O();
$c_sci_HashMap$Merger.prototype.constructor = $c_sci_HashMap$Merger;
/** @constructor */
function $h_sci_HashMap$Merger() {
  /*<skip>*/
}
$h_sci_HashMap$Merger.prototype = $c_sci_HashMap$Merger.prototype;
/** @constructor */
function $c_sci_Stream$ConsWrapper(tl) {
  this.sci_Stream$ConsWrapper__f_tl = null;
  this.sci_Stream$ConsWrapper__f_tl = tl
}
$c_sci_Stream$ConsWrapper.prototype = new $h_O();
$c_sci_Stream$ConsWrapper.prototype.constructor = $c_sci_Stream$ConsWrapper;
/** @constructor */
function $h_sci_Stream$ConsWrapper() {
  /*<skip>*/
}
$h_sci_Stream$ConsWrapper.prototype = $c_sci_Stream$ConsWrapper.prototype;
$c_sci_Stream$ConsWrapper.prototype.$hash$colon$colon__O__sci_Stream = (function(hd) {
  var tl = this.sci_Stream$ConsWrapper__f_tl;
  return new $c_sci_Stream$Cons(hd, tl)
});
$c_sci_Stream$ConsWrapper.prototype.$hash$colon$colon$colon__sci_Stream__sci_Stream = (function(prefix) {
  return prefix.append__F0__sci_Stream(this.sci_Stream$ConsWrapper__f_tl)
});
var $d_sci_Stream$ConsWrapper = new $TypeData().initClass({
  sci_Stream$ConsWrapper: 0
}, false, "scala.collection.immutable.Stream$ConsWrapper", {
  sci_Stream$ConsWrapper: 1,
  O: 1
});
$c_sci_Stream$ConsWrapper.prototype.$classData = $d_sci_Stream$ConsWrapper;
function $p_sci_StreamIterator$LazyCell__v$lzycompute__sci_Stream($thiz) {
  if ((!$thiz.sci_StreamIterator$LazyCell__f_bitmap$0)) {
    $thiz.sci_StreamIterator$LazyCell__f_v = $as_sci_Stream($thiz.sci_StreamIterator$LazyCell__f_st.apply__O());
    $thiz.sci_StreamIterator$LazyCell__f_bitmap$0 = true
  };
  $thiz.sci_StreamIterator$LazyCell__f_st = null;
  return $thiz.sci_StreamIterator$LazyCell__f_v
}
/** @constructor */
function $c_sci_StreamIterator$LazyCell(outer, st) {
  this.sci_StreamIterator$LazyCell__f_v = null;
  this.sci_StreamIterator$LazyCell__f_st = null;
  this.sci_StreamIterator$LazyCell__f_bitmap$0 = false;
  this.sci_StreamIterator$LazyCell__f_st = st;
  if ((outer === null)) {
    throw null
  }
}
$c_sci_StreamIterator$LazyCell.prototype = new $h_O();
$c_sci_StreamIterator$LazyCell.prototype.constructor = $c_sci_StreamIterator$LazyCell;
/** @constructor */
function $h_sci_StreamIterator$LazyCell() {
  /*<skip>*/
}
$h_sci_StreamIterator$LazyCell.prototype = $c_sci_StreamIterator$LazyCell.prototype;
$c_sci_StreamIterator$LazyCell.prototype.v__sci_Stream = (function() {
  return ((!this.sci_StreamIterator$LazyCell__f_bitmap$0) ? $p_sci_StreamIterator$LazyCell__v$lzycompute__sci_Stream(this) : this.sci_StreamIterator$LazyCell__f_v)
});
var $d_sci_StreamIterator$LazyCell = new $TypeData().initClass({
  sci_StreamIterator$LazyCell: 0
}, false, "scala.collection.immutable.StreamIterator$LazyCell", {
  sci_StreamIterator$LazyCell: 1,
  O: 1
});
$c_sci_StreamIterator$LazyCell.prototype.$classData = $d_sci_StreamIterator$LazyCell;
/** @constructor */
function $c_sci_StringOps$() {
  /*<skip>*/
}
$c_sci_StringOps$.prototype = new $h_O();
$c_sci_StringOps$.prototype.constructor = $c_sci_StringOps$;
/** @constructor */
function $h_sci_StringOps$() {
  /*<skip>*/
}
$h_sci_StringOps$.prototype = $c_sci_StringOps$.prototype;
$c_sci_StringOps$.prototype.slice$extension__T__I__I__T = (function(this$, from, until) {
  var start = ((from < 0) ? 0 : from);
  if (((until <= start) || (start >= this$.length))) {
    return ""
  };
  var end = ((until > this$.length) ? this$.length : until);
  if ((start < 0)) {
    $charAt(this$, start)
  };
  if ((end > this$.length)) {
    $charAt(this$, end)
  };
  if ((end < start)) {
    $charAt(this$, (-1))
  };
  return $as_T(this$.substring(start, end))
});
$c_sci_StringOps$.prototype.equals$extension__T__O__Z = (function(this$, x$1) {
  if ((x$1 instanceof $c_sci_StringOps)) {
    var StringOps$1 = ((x$1 === null) ? null : $as_sci_StringOps(x$1).sci_StringOps__f_repr);
    return (this$ === StringOps$1)
  } else {
    return false
  }
});
var $d_sci_StringOps$ = new $TypeData().initClass({
  sci_StringOps$: 0
}, false, "scala.collection.immutable.StringOps$", {
  sci_StringOps$: 1,
  O: 1
});
$c_sci_StringOps$.prototype.$classData = $d_sci_StringOps$;
var $n_sci_StringOps$;
function $m_sci_StringOps$() {
  if ((!$n_sci_StringOps$)) {
    $n_sci_StringOps$ = new $c_sci_StringOps$()
  };
  return $n_sci_StringOps$
}
function $f_sci_VectorPointer__initFrom__sci_VectorPointer__I__V($thiz, that, depth) {
  $thiz.depth_$eq__I__V(depth);
  var x1 = (((-1) + depth) | 0);
  switch (x1) {
    case (-1): {
      break
    }
    case 0: {
      $thiz.display0_$eq__AO__V(that.display0__AO());
      break
    }
    case 1: {
      $thiz.display1_$eq__AO__V(that.display1__AO());
      $thiz.display0_$eq__AO__V(that.display0__AO());
      break
    }
    case 2: {
      $thiz.display2_$eq__AO__V(that.display2__AO());
      $thiz.display1_$eq__AO__V(that.display1__AO());
      $thiz.display0_$eq__AO__V(that.display0__AO());
      break
    }
    case 3: {
      $thiz.display3_$eq__AO__V(that.display3__AO());
      $thiz.display2_$eq__AO__V(that.display2__AO());
      $thiz.display1_$eq__AO__V(that.display1__AO());
      $thiz.display0_$eq__AO__V(that.display0__AO());
      break
    }
    case 4: {
      $thiz.display4_$eq__AO__V(that.display4__AO());
      $thiz.display3_$eq__AO__V(that.display3__AO());
      $thiz.display2_$eq__AO__V(that.display2__AO());
      $thiz.display1_$eq__AO__V(that.display1__AO());
      $thiz.display0_$eq__AO__V(that.display0__AO());
      break
    }
    case 5: {
      $thiz.display5_$eq__AO__V(that.display5__AO());
      $thiz.display4_$eq__AO__V(that.display4__AO());
      $thiz.display3_$eq__AO__V(that.display3__AO());
      $thiz.display2_$eq__AO__V(that.display2__AO());
      $thiz.display1_$eq__AO__V(that.display1__AO());
      $thiz.display0_$eq__AO__V(that.display0__AO());
      break
    }
    default: {
      throw new $c_s_MatchError(x1)
    }
  }
}
function $f_sci_VectorPointer__getElem__I__I__O($thiz, index, xor) {
  if ((xor < 32)) {
    return $thiz.display0__AO().get((31 & index))
  } else if ((xor < 1024)) {
    return $asArrayOf_O($thiz.display1__AO().get((31 & ((index >>> 5) | 0))), 1).get((31 & index))
  } else if ((xor < 32768)) {
    return $asArrayOf_O($asArrayOf_O($thiz.display2__AO().get((31 & ((index >>> 10) | 0))), 1).get((31 & ((index >>> 5) | 0))), 1).get((31 & index))
  } else if ((xor < 1048576)) {
    return $asArrayOf_O($asArrayOf_O($asArrayOf_O($thiz.display3__AO().get((31 & ((index >>> 15) | 0))), 1).get((31 & ((index >>> 10) | 0))), 1).get((31 & ((index >>> 5) | 0))), 1).get((31 & index))
  } else if ((xor < 33554432)) {
    return $asArrayOf_O($asArrayOf_O($asArrayOf_O($asArrayOf_O($thiz.display4__AO().get((31 & ((index >>> 20) | 0))), 1).get((31 & ((index >>> 15) | 0))), 1).get((31 & ((index >>> 10) | 0))), 1).get((31 & ((index >>> 5) | 0))), 1).get((31 & index))
  } else if ((xor < 1073741824)) {
    return $asArrayOf_O($asArrayOf_O($asArrayOf_O($asArrayOf_O($asArrayOf_O($thiz.display5__AO().get((31 & ((index >>> 25) | 0))), 1).get((31 & ((index >>> 20) | 0))), 1).get((31 & ((index >>> 15) | 0))), 1).get((31 & ((index >>> 10) | 0))), 1).get((31 & ((index >>> 5) | 0))), 1).get((31 & index))
  } else {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException())
  }
}
function $f_sci_VectorPointer__gotoPos__I__I__V($thiz, index, xor) {
  if ((xor >= 32)) {
    if ((xor < 1024)) {
      $thiz.display0_$eq__AO__V($asArrayOf_O($thiz.display1__AO().get((31 & ((index >>> 5) | 0))), 1))
    } else if ((xor < 32768)) {
      $thiz.display1_$eq__AO__V($asArrayOf_O($thiz.display2__AO().get((31 & ((index >>> 10) | 0))), 1));
      $thiz.display0_$eq__AO__V($asArrayOf_O($thiz.display1__AO().get((31 & ((index >>> 5) | 0))), 1))
    } else if ((xor < 1048576)) {
      $thiz.display2_$eq__AO__V($asArrayOf_O($thiz.display3__AO().get((31 & ((index >>> 15) | 0))), 1));
      $thiz.display1_$eq__AO__V($asArrayOf_O($thiz.display2__AO().get((31 & ((index >>> 10) | 0))), 1));
      $thiz.display0_$eq__AO__V($asArrayOf_O($thiz.display1__AO().get((31 & ((index >>> 5) | 0))), 1))
    } else if ((xor < 33554432)) {
      $thiz.display3_$eq__AO__V($asArrayOf_O($thiz.display4__AO().get((31 & ((index >>> 20) | 0))), 1));
      $thiz.display2_$eq__AO__V($asArrayOf_O($thiz.display3__AO().get((31 & ((index >>> 15) | 0))), 1));
      $thiz.display1_$eq__AO__V($asArrayOf_O($thiz.display2__AO().get((31 & ((index >>> 10) | 0))), 1));
      $thiz.display0_$eq__AO__V($asArrayOf_O($thiz.display1__AO().get((31 & ((index >>> 5) | 0))), 1))
    } else if ((xor < 1073741824)) {
      $thiz.display4_$eq__AO__V($asArrayOf_O($thiz.display5__AO().get((31 & ((index >>> 25) | 0))), 1));
      $thiz.display3_$eq__AO__V($asArrayOf_O($thiz.display4__AO().get((31 & ((index >>> 20) | 0))), 1));
      $thiz.display2_$eq__AO__V($asArrayOf_O($thiz.display3__AO().get((31 & ((index >>> 15) | 0))), 1));
      $thiz.display1_$eq__AO__V($asArrayOf_O($thiz.display2__AO().get((31 & ((index >>> 10) | 0))), 1));
      $thiz.display0_$eq__AO__V($asArrayOf_O($thiz.display1__AO().get((31 & ((index >>> 5) | 0))), 1))
    } else {
      throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException())
    }
  }
}
function $f_sci_VectorPointer__gotoNextBlockStart__I__I__V($thiz, index, xor) {
  if ((xor < 1024)) {
    $thiz.display0_$eq__AO__V($asArrayOf_O($thiz.display1__AO().get((31 & ((index >>> 5) | 0))), 1))
  } else if ((xor < 32768)) {
    $thiz.display1_$eq__AO__V($asArrayOf_O($thiz.display2__AO().get((31 & ((index >>> 10) | 0))), 1));
    $thiz.display0_$eq__AO__V($asArrayOf_O($thiz.display1__AO().get(0), 1))
  } else if ((xor < 1048576)) {
    $thiz.display2_$eq__AO__V($asArrayOf_O($thiz.display3__AO().get((31 & ((index >>> 15) | 0))), 1));
    $thiz.display1_$eq__AO__V($asArrayOf_O($thiz.display2__AO().get(0), 1));
    $thiz.display0_$eq__AO__V($asArrayOf_O($thiz.display1__AO().get(0), 1))
  } else if ((xor < 33554432)) {
    $thiz.display3_$eq__AO__V($asArrayOf_O($thiz.display4__AO().get((31 & ((index >>> 20) | 0))), 1));
    $thiz.display2_$eq__AO__V($asArrayOf_O($thiz.display3__AO().get(0), 1));
    $thiz.display1_$eq__AO__V($asArrayOf_O($thiz.display2__AO().get(0), 1));
    $thiz.display0_$eq__AO__V($asArrayOf_O($thiz.display1__AO().get(0), 1))
  } else if ((xor < 1073741824)) {
    $thiz.display4_$eq__AO__V($asArrayOf_O($thiz.display5__AO().get((31 & ((index >>> 25) | 0))), 1));
    $thiz.display3_$eq__AO__V($asArrayOf_O($thiz.display4__AO().get(0), 1));
    $thiz.display2_$eq__AO__V($asArrayOf_O($thiz.display3__AO().get(0), 1));
    $thiz.display1_$eq__AO__V($asArrayOf_O($thiz.display2__AO().get(0), 1));
    $thiz.display0_$eq__AO__V($asArrayOf_O($thiz.display1__AO().get(0), 1))
  } else {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException())
  }
}
function $f_sci_VectorPointer__gotoNextBlockStartWritable__I__I__V($thiz, index, xor) {
  if ((xor < 1024)) {
    if (($thiz.depth__I() === 1)) {
      $thiz.display1_$eq__AO__V(new $ac_O(32));
      $thiz.display1__AO().set(0, $thiz.display0__AO());
      $thiz.depth_$eq__I__V(((1 + $thiz.depth__I()) | 0))
    };
    $thiz.display0_$eq__AO__V(new $ac_O(32));
    $thiz.display1__AO().set((31 & ((index >>> 5) | 0)), $thiz.display0__AO())
  } else if ((xor < 32768)) {
    if (($thiz.depth__I() === 2)) {
      $thiz.display2_$eq__AO__V(new $ac_O(32));
      $thiz.display2__AO().set(0, $thiz.display1__AO());
      $thiz.depth_$eq__I__V(((1 + $thiz.depth__I()) | 0))
    };
    $thiz.display0_$eq__AO__V(new $ac_O(32));
    $thiz.display1_$eq__AO__V(new $ac_O(32));
    $thiz.display1__AO().set((31 & ((index >>> 5) | 0)), $thiz.display0__AO());
    $thiz.display2__AO().set((31 & ((index >>> 10) | 0)), $thiz.display1__AO())
  } else if ((xor < 1048576)) {
    if (($thiz.depth__I() === 3)) {
      $thiz.display3_$eq__AO__V(new $ac_O(32));
      $thiz.display3__AO().set(0, $thiz.display2__AO());
      $thiz.depth_$eq__I__V(((1 + $thiz.depth__I()) | 0))
    };
    $thiz.display0_$eq__AO__V(new $ac_O(32));
    $thiz.display1_$eq__AO__V(new $ac_O(32));
    $thiz.display2_$eq__AO__V(new $ac_O(32));
    $thiz.display1__AO().set((31 & ((index >>> 5) | 0)), $thiz.display0__AO());
    $thiz.display2__AO().set((31 & ((index >>> 10) | 0)), $thiz.display1__AO());
    $thiz.display3__AO().set((31 & ((index >>> 15) | 0)), $thiz.display2__AO())
  } else if ((xor < 33554432)) {
    if (($thiz.depth__I() === 4)) {
      $thiz.display4_$eq__AO__V(new $ac_O(32));
      $thiz.display4__AO().set(0, $thiz.display3__AO());
      $thiz.depth_$eq__I__V(((1 + $thiz.depth__I()) | 0))
    };
    $thiz.display0_$eq__AO__V(new $ac_O(32));
    $thiz.display1_$eq__AO__V(new $ac_O(32));
    $thiz.display2_$eq__AO__V(new $ac_O(32));
    $thiz.display3_$eq__AO__V(new $ac_O(32));
    $thiz.display1__AO().set((31 & ((index >>> 5) | 0)), $thiz.display0__AO());
    $thiz.display2__AO().set((31 & ((index >>> 10) | 0)), $thiz.display1__AO());
    $thiz.display3__AO().set((31 & ((index >>> 15) | 0)), $thiz.display2__AO());
    $thiz.display4__AO().set((31 & ((index >>> 20) | 0)), $thiz.display3__AO())
  } else if ((xor < 1073741824)) {
    if (($thiz.depth__I() === 5)) {
      $thiz.display5_$eq__AO__V(new $ac_O(32));
      $thiz.display5__AO().set(0, $thiz.display4__AO());
      $thiz.depth_$eq__I__V(((1 + $thiz.depth__I()) | 0))
    };
    $thiz.display0_$eq__AO__V(new $ac_O(32));
    $thiz.display1_$eq__AO__V(new $ac_O(32));
    $thiz.display2_$eq__AO__V(new $ac_O(32));
    $thiz.display3_$eq__AO__V(new $ac_O(32));
    $thiz.display4_$eq__AO__V(new $ac_O(32));
    $thiz.display1__AO().set((31 & ((index >>> 5) | 0)), $thiz.display0__AO());
    $thiz.display2__AO().set((31 & ((index >>> 10) | 0)), $thiz.display1__AO());
    $thiz.display3__AO().set((31 & ((index >>> 15) | 0)), $thiz.display2__AO());
    $thiz.display4__AO().set((31 & ((index >>> 20) | 0)), $thiz.display3__AO());
    $thiz.display5__AO().set((31 & ((index >>> 25) | 0)), $thiz.display4__AO())
  } else {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException())
  }
}
function $f_sci_VectorPointer__copyOf__AO__AO($thiz, a) {
  var copy = new $ac_O(a.u.length);
  var length = a.u.length;
  $systemArraycopyRefs(a, 0, copy, 0, length);
  return copy
}
function $f_sci_VectorPointer__nullSlotAndCopy__AO__I__AO($thiz, array, index) {
  var x = array.get(index);
  array.set(index, null);
  var a = $asArrayOf_O(x, 1);
  return $f_sci_VectorPointer__copyOf__AO__AO($thiz, a)
}
function $f_sci_VectorPointer__stabilize__I__V($thiz, index) {
  var x1 = (((-1) + $thiz.depth__I()) | 0);
  switch (x1) {
    case 5: {
      var a = $thiz.display5__AO();
      $thiz.display5_$eq__AO__V($f_sci_VectorPointer__copyOf__AO__AO($thiz, a));
      var a$1 = $thiz.display4__AO();
      $thiz.display4_$eq__AO__V($f_sci_VectorPointer__copyOf__AO__AO($thiz, a$1));
      var a$2 = $thiz.display3__AO();
      $thiz.display3_$eq__AO__V($f_sci_VectorPointer__copyOf__AO__AO($thiz, a$2));
      var a$3 = $thiz.display2__AO();
      $thiz.display2_$eq__AO__V($f_sci_VectorPointer__copyOf__AO__AO($thiz, a$3));
      var a$4 = $thiz.display1__AO();
      $thiz.display1_$eq__AO__V($f_sci_VectorPointer__copyOf__AO__AO($thiz, a$4));
      $thiz.display5__AO().set((31 & ((index >>> 25) | 0)), $thiz.display4__AO());
      $thiz.display4__AO().set((31 & ((index >>> 20) | 0)), $thiz.display3__AO());
      $thiz.display3__AO().set((31 & ((index >>> 15) | 0)), $thiz.display2__AO());
      $thiz.display2__AO().set((31 & ((index >>> 10) | 0)), $thiz.display1__AO());
      $thiz.display1__AO().set((31 & ((index >>> 5) | 0)), $thiz.display0__AO());
      break
    }
    case 4: {
      var a$5 = $thiz.display4__AO();
      $thiz.display4_$eq__AO__V($f_sci_VectorPointer__copyOf__AO__AO($thiz, a$5));
      var a$6 = $thiz.display3__AO();
      $thiz.display3_$eq__AO__V($f_sci_VectorPointer__copyOf__AO__AO($thiz, a$6));
      var a$7 = $thiz.display2__AO();
      $thiz.display2_$eq__AO__V($f_sci_VectorPointer__copyOf__AO__AO($thiz, a$7));
      var a$8 = $thiz.display1__AO();
      $thiz.display1_$eq__AO__V($f_sci_VectorPointer__copyOf__AO__AO($thiz, a$8));
      $thiz.display4__AO().set((31 & ((index >>> 20) | 0)), $thiz.display3__AO());
      $thiz.display3__AO().set((31 & ((index >>> 15) | 0)), $thiz.display2__AO());
      $thiz.display2__AO().set((31 & ((index >>> 10) | 0)), $thiz.display1__AO());
      $thiz.display1__AO().set((31 & ((index >>> 5) | 0)), $thiz.display0__AO());
      break
    }
    case 3: {
      var a$9 = $thiz.display3__AO();
      $thiz.display3_$eq__AO__V($f_sci_VectorPointer__copyOf__AO__AO($thiz, a$9));
      var a$10 = $thiz.display2__AO();
      $thiz.display2_$eq__AO__V($f_sci_VectorPointer__copyOf__AO__AO($thiz, a$10));
      var a$11 = $thiz.display1__AO();
      $thiz.display1_$eq__AO__V($f_sci_VectorPointer__copyOf__AO__AO($thiz, a$11));
      $thiz.display3__AO().set((31 & ((index >>> 15) | 0)), $thiz.display2__AO());
      $thiz.display2__AO().set((31 & ((index >>> 10) | 0)), $thiz.display1__AO());
      $thiz.display1__AO().set((31 & ((index >>> 5) | 0)), $thiz.display0__AO());
      break
    }
    case 2: {
      var a$12 = $thiz.display2__AO();
      $thiz.display2_$eq__AO__V($f_sci_VectorPointer__copyOf__AO__AO($thiz, a$12));
      var a$13 = $thiz.display1__AO();
      $thiz.display1_$eq__AO__V($f_sci_VectorPointer__copyOf__AO__AO($thiz, a$13));
      $thiz.display2__AO().set((31 & ((index >>> 10) | 0)), $thiz.display1__AO());
      $thiz.display1__AO().set((31 & ((index >>> 5) | 0)), $thiz.display0__AO());
      break
    }
    case 1: {
      var a$14 = $thiz.display1__AO();
      $thiz.display1_$eq__AO__V($f_sci_VectorPointer__copyOf__AO__AO($thiz, a$14));
      $thiz.display1__AO().set((31 & ((index >>> 5) | 0)), $thiz.display0__AO());
      break
    }
    case 0: {
      break
    }
    default: {
      throw new $c_s_MatchError(x1)
    }
  }
}
function $f_sci_VectorPointer__gotoPosWritable0__I__I__V($thiz, newIndex, xor) {
  var x1 = (((-1) + $thiz.depth__I()) | 0);
  switch (x1) {
    case 5: {
      var a = $thiz.display5__AO();
      $thiz.display5_$eq__AO__V($f_sci_VectorPointer__copyOf__AO__AO($thiz, a));
      var array = $thiz.display5__AO();
      var index = (31 & ((newIndex >>> 25) | 0));
      $thiz.display4_$eq__AO__V($f_sci_VectorPointer__nullSlotAndCopy__AO__I__AO($thiz, array, index));
      var array$1 = $thiz.display4__AO();
      var index$1 = (31 & ((newIndex >>> 20) | 0));
      $thiz.display3_$eq__AO__V($f_sci_VectorPointer__nullSlotAndCopy__AO__I__AO($thiz, array$1, index$1));
      var array$2 = $thiz.display3__AO();
      var index$2 = (31 & ((newIndex >>> 15) | 0));
      $thiz.display2_$eq__AO__V($f_sci_VectorPointer__nullSlotAndCopy__AO__I__AO($thiz, array$2, index$2));
      var array$3 = $thiz.display2__AO();
      var index$3 = (31 & ((newIndex >>> 10) | 0));
      $thiz.display1_$eq__AO__V($f_sci_VectorPointer__nullSlotAndCopy__AO__I__AO($thiz, array$3, index$3));
      var array$4 = $thiz.display1__AO();
      var index$4 = (31 & ((newIndex >>> 5) | 0));
      $thiz.display0_$eq__AO__V($f_sci_VectorPointer__nullSlotAndCopy__AO__I__AO($thiz, array$4, index$4));
      break
    }
    case 4: {
      var a$1 = $thiz.display4__AO();
      $thiz.display4_$eq__AO__V($f_sci_VectorPointer__copyOf__AO__AO($thiz, a$1));
      var array$5 = $thiz.display4__AO();
      var index$5 = (31 & ((newIndex >>> 20) | 0));
      $thiz.display3_$eq__AO__V($f_sci_VectorPointer__nullSlotAndCopy__AO__I__AO($thiz, array$5, index$5));
      var array$6 = $thiz.display3__AO();
      var index$6 = (31 & ((newIndex >>> 15) | 0));
      $thiz.display2_$eq__AO__V($f_sci_VectorPointer__nullSlotAndCopy__AO__I__AO($thiz, array$6, index$6));
      var array$7 = $thiz.display2__AO();
      var index$7 = (31 & ((newIndex >>> 10) | 0));
      $thiz.display1_$eq__AO__V($f_sci_VectorPointer__nullSlotAndCopy__AO__I__AO($thiz, array$7, index$7));
      var array$8 = $thiz.display1__AO();
      var index$8 = (31 & ((newIndex >>> 5) | 0));
      $thiz.display0_$eq__AO__V($f_sci_VectorPointer__nullSlotAndCopy__AO__I__AO($thiz, array$8, index$8));
      break
    }
    case 3: {
      var a$2 = $thiz.display3__AO();
      $thiz.display3_$eq__AO__V($f_sci_VectorPointer__copyOf__AO__AO($thiz, a$2));
      var array$9 = $thiz.display3__AO();
      var index$9 = (31 & ((newIndex >>> 15) | 0));
      $thiz.display2_$eq__AO__V($f_sci_VectorPointer__nullSlotAndCopy__AO__I__AO($thiz, array$9, index$9));
      var array$10 = $thiz.display2__AO();
      var index$10 = (31 & ((newIndex >>> 10) | 0));
      $thiz.display1_$eq__AO__V($f_sci_VectorPointer__nullSlotAndCopy__AO__I__AO($thiz, array$10, index$10));
      var array$11 = $thiz.display1__AO();
      var index$11 = (31 & ((newIndex >>> 5) | 0));
      $thiz.display0_$eq__AO__V($f_sci_VectorPointer__nullSlotAndCopy__AO__I__AO($thiz, array$11, index$11));
      break
    }
    case 2: {
      var a$3 = $thiz.display2__AO();
      $thiz.display2_$eq__AO__V($f_sci_VectorPointer__copyOf__AO__AO($thiz, a$3));
      var array$12 = $thiz.display2__AO();
      var index$12 = (31 & ((newIndex >>> 10) | 0));
      $thiz.display1_$eq__AO__V($f_sci_VectorPointer__nullSlotAndCopy__AO__I__AO($thiz, array$12, index$12));
      var array$13 = $thiz.display1__AO();
      var index$13 = (31 & ((newIndex >>> 5) | 0));
      $thiz.display0_$eq__AO__V($f_sci_VectorPointer__nullSlotAndCopy__AO__I__AO($thiz, array$13, index$13));
      break
    }
    case 1: {
      var a$4 = $thiz.display1__AO();
      $thiz.display1_$eq__AO__V($f_sci_VectorPointer__copyOf__AO__AO($thiz, a$4));
      var array$14 = $thiz.display1__AO();
      var index$14 = (31 & ((newIndex >>> 5) | 0));
      $thiz.display0_$eq__AO__V($f_sci_VectorPointer__nullSlotAndCopy__AO__I__AO($thiz, array$14, index$14));
      break
    }
    case 0: {
      var a$5 = $thiz.display0__AO();
      $thiz.display0_$eq__AO__V($f_sci_VectorPointer__copyOf__AO__AO($thiz, a$5));
      break
    }
    default: {
      throw new $c_s_MatchError(x1)
    }
  }
}
function $f_sci_VectorPointer__gotoPosWritable1__I__I__I__V($thiz, oldIndex, newIndex, xor) {
  if ((xor < 32)) {
    var a = $thiz.display0__AO();
    $thiz.display0_$eq__AO__V($f_sci_VectorPointer__copyOf__AO__AO($thiz, a))
  } else if ((xor < 1024)) {
    var a$1 = $thiz.display1__AO();
    $thiz.display1_$eq__AO__V($f_sci_VectorPointer__copyOf__AO__AO($thiz, a$1));
    $thiz.display1__AO().set((31 & ((oldIndex >>> 5) | 0)), $thiz.display0__AO());
    var array = $thiz.display1__AO();
    var index = (31 & ((newIndex >>> 5) | 0));
    $thiz.display0_$eq__AO__V($f_sci_VectorPointer__nullSlotAndCopy__AO__I__AO($thiz, array, index))
  } else if ((xor < 32768)) {
    var a$2 = $thiz.display1__AO();
    $thiz.display1_$eq__AO__V($f_sci_VectorPointer__copyOf__AO__AO($thiz, a$2));
    var a$3 = $thiz.display2__AO();
    $thiz.display2_$eq__AO__V($f_sci_VectorPointer__copyOf__AO__AO($thiz, a$3));
    $thiz.display1__AO().set((31 & ((oldIndex >>> 5) | 0)), $thiz.display0__AO());
    $thiz.display2__AO().set((31 & ((oldIndex >>> 10) | 0)), $thiz.display1__AO());
    var array$1 = $thiz.display2__AO();
    var index$1 = (31 & ((newIndex >>> 10) | 0));
    $thiz.display1_$eq__AO__V($f_sci_VectorPointer__nullSlotAndCopy__AO__I__AO($thiz, array$1, index$1));
    var array$2 = $thiz.display1__AO();
    var index$2 = (31 & ((newIndex >>> 5) | 0));
    $thiz.display0_$eq__AO__V($f_sci_VectorPointer__nullSlotAndCopy__AO__I__AO($thiz, array$2, index$2))
  } else if ((xor < 1048576)) {
    var a$4 = $thiz.display1__AO();
    $thiz.display1_$eq__AO__V($f_sci_VectorPointer__copyOf__AO__AO($thiz, a$4));
    var a$5 = $thiz.display2__AO();
    $thiz.display2_$eq__AO__V($f_sci_VectorPointer__copyOf__AO__AO($thiz, a$5));
    var a$6 = $thiz.display3__AO();
    $thiz.display3_$eq__AO__V($f_sci_VectorPointer__copyOf__AO__AO($thiz, a$6));
    $thiz.display1__AO().set((31 & ((oldIndex >>> 5) | 0)), $thiz.display0__AO());
    $thiz.display2__AO().set((31 & ((oldIndex >>> 10) | 0)), $thiz.display1__AO());
    $thiz.display3__AO().set((31 & ((oldIndex >>> 15) | 0)), $thiz.display2__AO());
    var array$3 = $thiz.display3__AO();
    var index$3 = (31 & ((newIndex >>> 15) | 0));
    $thiz.display2_$eq__AO__V($f_sci_VectorPointer__nullSlotAndCopy__AO__I__AO($thiz, array$3, index$3));
    var array$4 = $thiz.display2__AO();
    var index$4 = (31 & ((newIndex >>> 10) | 0));
    $thiz.display1_$eq__AO__V($f_sci_VectorPointer__nullSlotAndCopy__AO__I__AO($thiz, array$4, index$4));
    var array$5 = $thiz.display1__AO();
    var index$5 = (31 & ((newIndex >>> 5) | 0));
    $thiz.display0_$eq__AO__V($f_sci_VectorPointer__nullSlotAndCopy__AO__I__AO($thiz, array$5, index$5))
  } else if ((xor < 33554432)) {
    var a$7 = $thiz.display1__AO();
    $thiz.display1_$eq__AO__V($f_sci_VectorPointer__copyOf__AO__AO($thiz, a$7));
    var a$8 = $thiz.display2__AO();
    $thiz.display2_$eq__AO__V($f_sci_VectorPointer__copyOf__AO__AO($thiz, a$8));
    var a$9 = $thiz.display3__AO();
    $thiz.display3_$eq__AO__V($f_sci_VectorPointer__copyOf__AO__AO($thiz, a$9));
    var a$10 = $thiz.display4__AO();
    $thiz.display4_$eq__AO__V($f_sci_VectorPointer__copyOf__AO__AO($thiz, a$10));
    $thiz.display1__AO().set((31 & ((oldIndex >>> 5) | 0)), $thiz.display0__AO());
    $thiz.display2__AO().set((31 & ((oldIndex >>> 10) | 0)), $thiz.display1__AO());
    $thiz.display3__AO().set((31 & ((oldIndex >>> 15) | 0)), $thiz.display2__AO());
    $thiz.display4__AO().set((31 & ((oldIndex >>> 20) | 0)), $thiz.display3__AO());
    var array$6 = $thiz.display4__AO();
    var index$6 = (31 & ((newIndex >>> 20) | 0));
    $thiz.display3_$eq__AO__V($f_sci_VectorPointer__nullSlotAndCopy__AO__I__AO($thiz, array$6, index$6));
    var array$7 = $thiz.display3__AO();
    var index$7 = (31 & ((newIndex >>> 15) | 0));
    $thiz.display2_$eq__AO__V($f_sci_VectorPointer__nullSlotAndCopy__AO__I__AO($thiz, array$7, index$7));
    var array$8 = $thiz.display2__AO();
    var index$8 = (31 & ((newIndex >>> 10) | 0));
    $thiz.display1_$eq__AO__V($f_sci_VectorPointer__nullSlotAndCopy__AO__I__AO($thiz, array$8, index$8));
    var array$9 = $thiz.display1__AO();
    var index$9 = (31 & ((newIndex >>> 5) | 0));
    $thiz.display0_$eq__AO__V($f_sci_VectorPointer__nullSlotAndCopy__AO__I__AO($thiz, array$9, index$9))
  } else if ((xor < 1073741824)) {
    var a$11 = $thiz.display1__AO();
    $thiz.display1_$eq__AO__V($f_sci_VectorPointer__copyOf__AO__AO($thiz, a$11));
    var a$12 = $thiz.display2__AO();
    $thiz.display2_$eq__AO__V($f_sci_VectorPointer__copyOf__AO__AO($thiz, a$12));
    var a$13 = $thiz.display3__AO();
    $thiz.display3_$eq__AO__V($f_sci_VectorPointer__copyOf__AO__AO($thiz, a$13));
    var a$14 = $thiz.display4__AO();
    $thiz.display4_$eq__AO__V($f_sci_VectorPointer__copyOf__AO__AO($thiz, a$14));
    var a$15 = $thiz.display5__AO();
    $thiz.display5_$eq__AO__V($f_sci_VectorPointer__copyOf__AO__AO($thiz, a$15));
    $thiz.display1__AO().set((31 & ((oldIndex >>> 5) | 0)), $thiz.display0__AO());
    $thiz.display2__AO().set((31 & ((oldIndex >>> 10) | 0)), $thiz.display1__AO());
    $thiz.display3__AO().set((31 & ((oldIndex >>> 15) | 0)), $thiz.display2__AO());
    $thiz.display4__AO().set((31 & ((oldIndex >>> 20) | 0)), $thiz.display3__AO());
    $thiz.display5__AO().set((31 & ((oldIndex >>> 25) | 0)), $thiz.display4__AO());
    var array$10 = $thiz.display5__AO();
    var index$10 = (31 & ((newIndex >>> 25) | 0));
    $thiz.display4_$eq__AO__V($f_sci_VectorPointer__nullSlotAndCopy__AO__I__AO($thiz, array$10, index$10));
    var array$11 = $thiz.display4__AO();
    var index$11 = (31 & ((newIndex >>> 20) | 0));
    $thiz.display3_$eq__AO__V($f_sci_VectorPointer__nullSlotAndCopy__AO__I__AO($thiz, array$11, index$11));
    var array$12 = $thiz.display3__AO();
    var index$12 = (31 & ((newIndex >>> 15) | 0));
    $thiz.display2_$eq__AO__V($f_sci_VectorPointer__nullSlotAndCopy__AO__I__AO($thiz, array$12, index$12));
    var array$13 = $thiz.display2__AO();
    var index$13 = (31 & ((newIndex >>> 10) | 0));
    $thiz.display1_$eq__AO__V($f_sci_VectorPointer__nullSlotAndCopy__AO__I__AO($thiz, array$13, index$13));
    var array$14 = $thiz.display1__AO();
    var index$14 = (31 & ((newIndex >>> 5) | 0));
    $thiz.display0_$eq__AO__V($f_sci_VectorPointer__nullSlotAndCopy__AO__I__AO($thiz, array$14, index$14))
  } else {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException())
  }
}
function $f_sci_VectorPointer__copyRange__AO__I__I__AO($thiz, array, oldLeft, newLeft) {
  var elems = new $ac_O(32);
  var length = ((32 - ((newLeft > oldLeft) ? newLeft : oldLeft)) | 0);
  $systemArraycopyRefs(array, oldLeft, elems, newLeft, length);
  return elems
}
function $f_sci_VectorPointer__gotoFreshPosWritable0__I__I__I__V($thiz, oldIndex, newIndex, xor) {
  if ((xor >= 32)) {
    if ((xor < 1024)) {
      if (($thiz.depth__I() === 1)) {
        $thiz.display1_$eq__AO__V(new $ac_O(32));
        $thiz.display1__AO().set((31 & ((oldIndex >>> 5) | 0)), $thiz.display0__AO());
        $thiz.depth_$eq__I__V(((1 + $thiz.depth__I()) | 0))
      };
      $thiz.display0_$eq__AO__V(new $ac_O(32))
    } else if ((xor < 32768)) {
      if (($thiz.depth__I() === 2)) {
        $thiz.display2_$eq__AO__V(new $ac_O(32));
        $thiz.display2__AO().set((31 & ((oldIndex >>> 10) | 0)), $thiz.display1__AO());
        $thiz.depth_$eq__I__V(((1 + $thiz.depth__I()) | 0))
      };
      $thiz.display1_$eq__AO__V($asArrayOf_O($thiz.display2__AO().get((31 & ((newIndex >>> 10) | 0))), 1));
      if (($thiz.display1__AO() === null)) {
        $thiz.display1_$eq__AO__V(new $ac_O(32))
      };
      $thiz.display0_$eq__AO__V(new $ac_O(32))
    } else if ((xor < 1048576)) {
      if (($thiz.depth__I() === 3)) {
        $thiz.display3_$eq__AO__V(new $ac_O(32));
        $thiz.display3__AO().set((31 & ((oldIndex >>> 15) | 0)), $thiz.display2__AO());
        $thiz.depth_$eq__I__V(((1 + $thiz.depth__I()) | 0))
      };
      $thiz.display2_$eq__AO__V($asArrayOf_O($thiz.display3__AO().get((31 & ((newIndex >>> 15) | 0))), 1));
      if (($thiz.display2__AO() === null)) {
        $thiz.display2_$eq__AO__V(new $ac_O(32))
      };
      $thiz.display1_$eq__AO__V($asArrayOf_O($thiz.display2__AO().get((31 & ((newIndex >>> 10) | 0))), 1));
      if (($thiz.display1__AO() === null)) {
        $thiz.display1_$eq__AO__V(new $ac_O(32))
      };
      $thiz.display0_$eq__AO__V(new $ac_O(32))
    } else if ((xor < 33554432)) {
      if (($thiz.depth__I() === 4)) {
        $thiz.display4_$eq__AO__V(new $ac_O(32));
        $thiz.display4__AO().set((31 & ((oldIndex >>> 20) | 0)), $thiz.display3__AO());
        $thiz.depth_$eq__I__V(((1 + $thiz.depth__I()) | 0))
      };
      $thiz.display3_$eq__AO__V($asArrayOf_O($thiz.display4__AO().get((31 & ((newIndex >>> 20) | 0))), 1));
      if (($thiz.display3__AO() === null)) {
        $thiz.display3_$eq__AO__V(new $ac_O(32))
      };
      $thiz.display2_$eq__AO__V($asArrayOf_O($thiz.display3__AO().get((31 & ((newIndex >>> 15) | 0))), 1));
      if (($thiz.display2__AO() === null)) {
        $thiz.display2_$eq__AO__V(new $ac_O(32))
      };
      $thiz.display1_$eq__AO__V($asArrayOf_O($thiz.display2__AO().get((31 & ((newIndex >>> 10) | 0))), 1));
      if (($thiz.display1__AO() === null)) {
        $thiz.display1_$eq__AO__V(new $ac_O(32))
      };
      $thiz.display0_$eq__AO__V(new $ac_O(32))
    } else if ((xor < 1073741824)) {
      if (($thiz.depth__I() === 5)) {
        $thiz.display5_$eq__AO__V(new $ac_O(32));
        $thiz.display5__AO().set((31 & ((oldIndex >>> 25) | 0)), $thiz.display4__AO());
        $thiz.depth_$eq__I__V(((1 + $thiz.depth__I()) | 0))
      };
      $thiz.display4_$eq__AO__V($asArrayOf_O($thiz.display5__AO().get((31 & ((newIndex >>> 25) | 0))), 1));
      if (($thiz.display4__AO() === null)) {
        $thiz.display4_$eq__AO__V(new $ac_O(32))
      };
      $thiz.display3_$eq__AO__V($asArrayOf_O($thiz.display4__AO().get((31 & ((newIndex >>> 20) | 0))), 1));
      if (($thiz.display3__AO() === null)) {
        $thiz.display3_$eq__AO__V(new $ac_O(32))
      };
      $thiz.display2_$eq__AO__V($asArrayOf_O($thiz.display3__AO().get((31 & ((newIndex >>> 15) | 0))), 1));
      if (($thiz.display2__AO() === null)) {
        $thiz.display2_$eq__AO__V(new $ac_O(32))
      };
      $thiz.display1_$eq__AO__V($asArrayOf_O($thiz.display2__AO().get((31 & ((newIndex >>> 10) | 0))), 1));
      if (($thiz.display1__AO() === null)) {
        $thiz.display1_$eq__AO__V(new $ac_O(32))
      };
      $thiz.display0_$eq__AO__V(new $ac_O(32))
    } else {
      throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException())
    }
  }
}
function $f_sci_VectorPointer__gotoFreshPosWritable1__I__I__I__V($thiz, oldIndex, newIndex, xor) {
  $f_sci_VectorPointer__stabilize__I__V($thiz, oldIndex);
  $f_sci_VectorPointer__gotoFreshPosWritable0__I__I__I__V($thiz, oldIndex, newIndex, xor)
}
/** @constructor */
function $c_sci_WrappedString$() {
  $n_sci_WrappedString$ = this;
  new $c_sci_WrappedString$$anon$1()
}
$c_sci_WrappedString$.prototype = new $h_O();
$c_sci_WrappedString$.prototype.constructor = $c_sci_WrappedString$;
/** @constructor */
function $h_sci_WrappedString$() {
  /*<skip>*/
}
$h_sci_WrappedString$.prototype = $c_sci_WrappedString$.prototype;
$c_sci_WrappedString$.prototype.newBuilder__scm_Builder = (function() {
  var this$3 = $ct_scm_StringBuilder__(new $c_scm_StringBuilder());
  var f = new $c_sjsr_AnonFunction1(((x$2) => {
    var x = $as_T(x$2);
    return new $c_sci_WrappedString(x)
  }));
  return new $c_scm_Builder$$anon$1(this$3, f)
});
var $d_sci_WrappedString$ = new $TypeData().initClass({
  sci_WrappedString$: 0
}, false, "scala.collection.immutable.WrappedString$", {
  sci_WrappedString$: 1,
  O: 1
});
$c_sci_WrappedString$.prototype.$classData = $d_sci_WrappedString$;
var $n_sci_WrappedString$;
function $m_sci_WrappedString$() {
  if ((!$n_sci_WrappedString$)) {
    $n_sci_WrappedString$ = new $c_sci_WrappedString$()
  };
  return $n_sci_WrappedString$
}
/** @constructor */
function $c_s_package$() {
  this.s_package$__f_Vector = null;
  $n_s_package$ = this;
  new $c_s_package$$anon$1();
  $m_sc_Traversable$();
  $m_sc_Iterable$();
  $m_sc_Seq$();
  $m_sc_IndexedSeq$();
  $m_sc_Iterator$();
  $m_sci_List$();
  $m_sci_Stream$();
  this.s_package$__f_Vector = $m_sci_Vector$();
  $m_s_math_Ordering$()
}
$c_s_package$.prototype = new $h_O();
$c_s_package$.prototype.constructor = $c_s_package$;
/** @constructor */
function $h_s_package$() {
  /*<skip>*/
}
$h_s_package$.prototype = $c_s_package$.prototype;
var $d_s_package$ = new $TypeData().initClass({
  s_package$: 0
}, false, "scala.package$", {
  s_package$: 1,
  O: 1
});
$c_s_package$.prototype.$classData = $d_s_package$;
var $n_s_package$;
function $m_s_package$() {
  if ((!$n_s_package$)) {
    $n_s_package$ = new $c_s_package$()
  };
  return $n_s_package$
}
/** @constructor */
function $c_s_reflect_ClassManifestFactory$() {
  $n_s_reflect_ClassManifestFactory$ = this;
  $m_s_reflect_ManifestFactory$AnyManifest$();
  $m_s_reflect_ManifestFactory$ObjectManifest$();
  $m_s_reflect_ManifestFactory$AnyValManifest$();
  $m_s_reflect_ManifestFactory$NothingManifest$();
  $m_s_reflect_ManifestFactory$NullManifest$()
}
$c_s_reflect_ClassManifestFactory$.prototype = new $h_O();
$c_s_reflect_ClassManifestFactory$.prototype.constructor = $c_s_reflect_ClassManifestFactory$;
/** @constructor */
function $h_s_reflect_ClassManifestFactory$() {
  /*<skip>*/
}
$h_s_reflect_ClassManifestFactory$.prototype = $c_s_reflect_ClassManifestFactory$.prototype;
var $d_s_reflect_ClassManifestFactory$ = new $TypeData().initClass({
  s_reflect_ClassManifestFactory$: 0
}, false, "scala.reflect.ClassManifestFactory$", {
  s_reflect_ClassManifestFactory$: 1,
  O: 1
});
$c_s_reflect_ClassManifestFactory$.prototype.$classData = $d_s_reflect_ClassManifestFactory$;
var $n_s_reflect_ClassManifestFactory$;
function $m_s_reflect_ClassManifestFactory$() {
  if ((!$n_s_reflect_ClassManifestFactory$)) {
    $n_s_reflect_ClassManifestFactory$ = new $c_s_reflect_ClassManifestFactory$()
  };
  return $n_s_reflect_ClassManifestFactory$
}
/** @constructor */
function $c_s_reflect_ManifestFactory$() {
  /*<skip>*/
}
$c_s_reflect_ManifestFactory$.prototype = new $h_O();
$c_s_reflect_ManifestFactory$.prototype.constructor = $c_s_reflect_ManifestFactory$;
/** @constructor */
function $h_s_reflect_ManifestFactory$() {
  /*<skip>*/
}
$h_s_reflect_ManifestFactory$.prototype = $c_s_reflect_ManifestFactory$.prototype;
var $d_s_reflect_ManifestFactory$ = new $TypeData().initClass({
  s_reflect_ManifestFactory$: 0
}, false, "scala.reflect.ManifestFactory$", {
  s_reflect_ManifestFactory$: 1,
  O: 1
});
$c_s_reflect_ManifestFactory$.prototype.$classData = $d_s_reflect_ManifestFactory$;
var $n_s_reflect_ManifestFactory$;
function $m_s_reflect_ManifestFactory$() {
  if ((!$n_s_reflect_ManifestFactory$)) {
    $n_s_reflect_ManifestFactory$ = new $c_s_reflect_ManifestFactory$()
  };
  return $n_s_reflect_ManifestFactory$
}
/** @constructor */
function $c_s_reflect_package$() {
  this.s_reflect_package$__f_ClassManifest = null;
  this.s_reflect_package$__f_Manifest = null;
  $n_s_reflect_package$ = this;
  this.s_reflect_package$__f_ClassManifest = $m_s_reflect_ClassManifestFactory$();
  this.s_reflect_package$__f_Manifest = $m_s_reflect_ManifestFactory$()
}
$c_s_reflect_package$.prototype = new $h_O();
$c_s_reflect_package$.prototype.constructor = $c_s_reflect_package$;
/** @constructor */
function $h_s_reflect_package$() {
  /*<skip>*/
}
$h_s_reflect_package$.prototype = $c_s_reflect_package$.prototype;
var $d_s_reflect_package$ = new $TypeData().initClass({
  s_reflect_package$: 0
}, false, "scala.reflect.package$", {
  s_reflect_package$: 1,
  O: 1
});
$c_s_reflect_package$.prototype.$classData = $d_s_reflect_package$;
var $n_s_reflect_package$;
function $m_s_reflect_package$() {
  if ((!$n_s_reflect_package$)) {
    $n_s_reflect_package$ = new $c_s_reflect_package$()
  };
  return $n_s_reflect_package$
}
/** @constructor */
function $c_sr_BoxesRunTime$() {
  /*<skip>*/
}
$c_sr_BoxesRunTime$.prototype = new $h_O();
$c_sr_BoxesRunTime$.prototype.constructor = $c_sr_BoxesRunTime$;
/** @constructor */
function $h_sr_BoxesRunTime$() {
  /*<skip>*/
}
$h_sr_BoxesRunTime$.prototype = $c_sr_BoxesRunTime$.prototype;
$c_sr_BoxesRunTime$.prototype.equals__O__O__Z = (function(x, y) {
  if ((x === y)) {
    return true
  } else if ($is_jl_Number(x)) {
    var x2 = $as_jl_Number(x);
    return this.equalsNumObject__jl_Number__O__Z(x2, y)
  } else if ((x instanceof $Char)) {
    var x3 = $as_jl_Character(x);
    return this.equalsCharObject__jl_Character__O__Z(x3, y)
  } else {
    return ((x === null) ? (y === null) : $dp_equals__O__Z(x, y))
  }
});
$c_sr_BoxesRunTime$.prototype.equalsNumObject__jl_Number__O__Z = (function(xn, y) {
  if ($is_jl_Number(y)) {
    var x2 = $as_jl_Number(y);
    return this.equalsNumNum__jl_Number__jl_Number__Z(xn, x2)
  } else if ((y instanceof $Char)) {
    var x3 = $as_jl_Character(y);
    if (((typeof xn) === "number")) {
      var x2$1 = $uD(xn);
      var this$1 = $uC(x3);
      return (x2$1 === this$1)
    } else if ((xn instanceof $c_RTLong)) {
      var t = $uJ(xn);
      var lo = t.RTLong__f_lo;
      var hi = t.RTLong__f_hi;
      var this$2 = $uC(x3);
      var value = this$2;
      var hi$1 = (value >> 31);
      return ((lo === value) && (hi === hi$1))
    } else {
      return ((xn === null) ? (x3 === null) : $dp_equals__O__Z(xn, x3))
    }
  } else {
    return ((xn === null) ? (y === null) : $dp_equals__O__Z(xn, y))
  }
});
$c_sr_BoxesRunTime$.prototype.equalsNumNum__jl_Number__jl_Number__Z = (function(xn, yn) {
  if (((typeof xn) === "number")) {
    var x2 = $uD(xn);
    if (((typeof yn) === "number")) {
      var x2$2 = $uD(yn);
      return (x2 === x2$2)
    } else if ((yn instanceof $c_RTLong)) {
      var t = $uJ(yn);
      var lo = t.RTLong__f_lo;
      var hi = t.RTLong__f_hi;
      return (x2 === $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D(lo, hi))
    } else if (false) {
      var x4 = $as_s_math_ScalaNumber(yn);
      return x4.equals__O__Z(x2)
    } else {
      return false
    }
  } else if ((xn instanceof $c_RTLong)) {
    var t$1 = $uJ(xn);
    var lo$1 = t$1.RTLong__f_lo;
    var hi$1 = t$1.RTLong__f_hi;
    if ((yn instanceof $c_RTLong)) {
      var t$2 = $uJ(yn);
      var lo$2 = t$2.RTLong__f_lo;
      var hi$2 = t$2.RTLong__f_hi;
      return ((lo$1 === lo$2) && (hi$1 === hi$2))
    } else if (((typeof yn) === "number")) {
      var x3$3 = $uD(yn);
      return ($m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D(lo$1, hi$1) === x3$3)
    } else if (false) {
      var x4$2 = $as_s_math_ScalaNumber(yn);
      return x4$2.equals__O__Z(new $c_RTLong(lo$1, hi$1))
    } else {
      return false
    }
  } else {
    return ((xn === null) ? (yn === null) : $dp_equals__O__Z(xn, yn))
  }
});
$c_sr_BoxesRunTime$.prototype.equalsCharObject__jl_Character__O__Z = (function(xc, y) {
  if ((y instanceof $Char)) {
    var x2 = $as_jl_Character(y);
    var this$1 = $uC(xc);
    var this$2 = $uC(x2);
    return (this$1 === this$2)
  } else if ($is_jl_Number(y)) {
    var x3 = $as_jl_Number(y);
    if (((typeof x3) === "number")) {
      var x2$1 = $uD(x3);
      var this$3 = $uC(xc);
      return (x2$1 === this$3)
    } else if ((x3 instanceof $c_RTLong)) {
      var t = $uJ(x3);
      var lo = t.RTLong__f_lo;
      var hi = t.RTLong__f_hi;
      var this$4 = $uC(xc);
      var value = this$4;
      var hi$1 = (value >> 31);
      return ((lo === value) && (hi === hi$1))
    } else {
      return ((x3 === null) ? (xc === null) : $dp_equals__O__Z(x3, xc))
    }
  } else {
    return ((xc === null) && (y === null))
  }
});
var $d_sr_BoxesRunTime$ = new $TypeData().initClass({
  sr_BoxesRunTime$: 0
}, false, "scala.runtime.BoxesRunTime$", {
  sr_BoxesRunTime$: 1,
  O: 1
});
$c_sr_BoxesRunTime$.prototype.$classData = $d_sr_BoxesRunTime$;
var $n_sr_BoxesRunTime$;
function $m_sr_BoxesRunTime$() {
  if ((!$n_sr_BoxesRunTime$)) {
    $n_sr_BoxesRunTime$ = new $c_sr_BoxesRunTime$()
  };
  return $n_sr_BoxesRunTime$
}
/** @constructor */
function $c_sr_ScalaRunTime$() {
  /*<skip>*/
}
$c_sr_ScalaRunTime$.prototype = new $h_O();
$c_sr_ScalaRunTime$.prototype.constructor = $c_sr_ScalaRunTime$;
/** @constructor */
function $h_sr_ScalaRunTime$() {
  /*<skip>*/
}
$h_sr_ScalaRunTime$.prototype = $c_sr_ScalaRunTime$.prototype;
$c_sr_ScalaRunTime$.prototype.array_apply__O__I__O = (function(xs, idx) {
  if ((xs instanceof $ac_O)) {
    var x2 = $asArrayOf_O(xs, 1);
    return x2.get(idx)
  } else if ((xs instanceof $ac_I)) {
    var x3 = $asArrayOf_I(xs, 1);
    return x3.get(idx)
  } else if ((xs instanceof $ac_D)) {
    var x4 = $asArrayOf_D(xs, 1);
    return x4.get(idx)
  } else if ((xs instanceof $ac_J)) {
    var x5 = $asArrayOf_J(xs, 1);
    return x5.get(idx)
  } else if ((xs instanceof $ac_F)) {
    var x6 = $asArrayOf_F(xs, 1);
    return x6.get(idx)
  } else if ((xs instanceof $ac_C)) {
    var x7 = $asArrayOf_C(xs, 1);
    return $bC(x7.get(idx))
  } else if ((xs instanceof $ac_B)) {
    var x8 = $asArrayOf_B(xs, 1);
    return x8.get(idx)
  } else if ((xs instanceof $ac_S)) {
    var x9 = $asArrayOf_S(xs, 1);
    return x9.get(idx)
  } else if ((xs instanceof $ac_Z)) {
    var x10 = $asArrayOf_Z(xs, 1);
    return x10.get(idx)
  } else if ((xs === null)) {
    throw new $c_jl_NullPointerException()
  } else {
    throw new $c_s_MatchError(xs)
  }
});
$c_sr_ScalaRunTime$.prototype.array_update__O__I__O__V = (function(xs, idx, value) {
  if ((xs instanceof $ac_O)) {
    var x2 = $asArrayOf_O(xs, 1);
    x2.set(idx, value)
  } else if ((xs instanceof $ac_I)) {
    var x3 = $asArrayOf_I(xs, 1);
    x3.set(idx, $uI(value))
  } else if ((xs instanceof $ac_D)) {
    var x4 = $asArrayOf_D(xs, 1);
    x4.set(idx, $uD(value))
  } else if ((xs instanceof $ac_J)) {
    var x5 = $asArrayOf_J(xs, 1);
    x5.set(idx, $uJ(value))
  } else if ((xs instanceof $ac_F)) {
    var x6 = $asArrayOf_F(xs, 1);
    x6.set(idx, $uF(value))
  } else if ((xs instanceof $ac_C)) {
    var x7 = $asArrayOf_C(xs, 1);
    x7.set(idx, $uC(value))
  } else if ((xs instanceof $ac_B)) {
    var x8 = $asArrayOf_B(xs, 1);
    x8.set(idx, $uB(value))
  } else if ((xs instanceof $ac_S)) {
    var x9 = $asArrayOf_S(xs, 1);
    x9.set(idx, $uS(value))
  } else if ((xs instanceof $ac_Z)) {
    var x10 = $asArrayOf_Z(xs, 1);
    x10.set(idx, $uZ(value))
  } else if ((xs === null)) {
    throw new $c_jl_NullPointerException()
  } else {
    throw new $c_s_MatchError(xs)
  }
});
$c_sr_ScalaRunTime$.prototype.array_length__O__I = (function(xs) {
  if ((xs instanceof $ac_O)) {
    var x2 = $asArrayOf_O(xs, 1);
    return x2.u.length
  } else if ((xs instanceof $ac_I)) {
    var x3 = $asArrayOf_I(xs, 1);
    return x3.u.length
  } else if ((xs instanceof $ac_D)) {
    var x4 = $asArrayOf_D(xs, 1);
    return x4.u.length
  } else if ((xs instanceof $ac_J)) {
    var x5 = $asArrayOf_J(xs, 1);
    return x5.u.length
  } else if ((xs instanceof $ac_F)) {
    var x6 = $asArrayOf_F(xs, 1);
    return x6.u.length
  } else if ((xs instanceof $ac_C)) {
    var x7 = $asArrayOf_C(xs, 1);
    return x7.u.length
  } else if ((xs instanceof $ac_B)) {
    var x8 = $asArrayOf_B(xs, 1);
    return x8.u.length
  } else if ((xs instanceof $ac_S)) {
    var x9 = $asArrayOf_S(xs, 1);
    return x9.u.length
  } else if ((xs instanceof $ac_Z)) {
    var x10 = $asArrayOf_Z(xs, 1);
    return x10.u.length
  } else if ((xs === null)) {
    throw new $c_jl_NullPointerException()
  } else {
    throw new $c_s_MatchError(xs)
  }
});
$c_sr_ScalaRunTime$.prototype._toString__s_Product__T = (function(x) {
  var this$1 = x.productIterator__sc_Iterator();
  var start = (x.productPrefix__T() + "(");
  return $f_sc_TraversableOnce__mkString__T__T__T__T(this$1, start, ",", ")")
});
var $d_sr_ScalaRunTime$ = new $TypeData().initClass({
  sr_ScalaRunTime$: 0
}, false, "scala.runtime.ScalaRunTime$", {
  sr_ScalaRunTime$: 1,
  O: 1
});
$c_sr_ScalaRunTime$.prototype.$classData = $d_sr_ScalaRunTime$;
var $n_sr_ScalaRunTime$;
function $m_sr_ScalaRunTime$() {
  if ((!$n_sr_ScalaRunTime$)) {
    $n_sr_ScalaRunTime$ = new $c_sr_ScalaRunTime$()
  };
  return $n_sr_ScalaRunTime$
}
/** @constructor */
function $c_sr_Statics$() {
  /*<skip>*/
}
$c_sr_Statics$.prototype = new $h_O();
$c_sr_Statics$.prototype.constructor = $c_sr_Statics$;
/** @constructor */
function $h_sr_Statics$() {
  /*<skip>*/
}
$h_sr_Statics$.prototype = $c_sr_Statics$.prototype;
$c_sr_Statics$.prototype.longHash__J__I = (function(lv) {
  var lo = lv.RTLong__f_lo;
  var hi = lv.RTLong__f_hi;
  return ((hi === (lo >> 31)) ? lo : (lo ^ hi))
});
$c_sr_Statics$.prototype.doubleHash__D__I = (function(dv) {
  var iv = $doubleToInt(dv);
  if ((iv === dv)) {
    return iv
  } else {
    var this$1 = $m_RTLong$();
    var lo = this$1.org$scalajs$linker$runtime$RuntimeLong$$fromDoubleImpl__D__I(dv);
    var hi = this$1.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
    return (($m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D(lo, hi) === dv) ? (lo ^ hi) : $m_jl_FloatingPointBits$().numberHashCode__D__I(dv))
  }
});
$c_sr_Statics$.prototype.anyHash__O__I = (function(x) {
  if ((x === null)) {
    return 0
  } else if (((typeof x) === "number")) {
    var x3 = $uD(x);
    return this.doubleHash__D__I(x3)
  } else if ((x instanceof $c_RTLong)) {
    var t = $uJ(x);
    var lo = t.RTLong__f_lo;
    var hi = t.RTLong__f_hi;
    return this.longHash__J__I(new $c_RTLong(lo, hi))
  } else {
    return $dp_hashCode__I(x)
  }
});
var $d_sr_Statics$ = new $TypeData().initClass({
  sr_Statics$: 0
}, false, "scala.runtime.Statics$", {
  sr_Statics$: 1,
  O: 1
});
$c_sr_Statics$.prototype.$classData = $d_sr_Statics$;
var $n_sr_Statics$;
function $m_sr_Statics$() {
  if ((!$n_sr_Statics$)) {
    $n_sr_Statics$ = new $c_sr_Statics$()
  };
  return $n_sr_Statics$
}
/** @constructor */
function $c_sjs_js_JSConverters$JSRichGenTraversableOnce$() {
  /*<skip>*/
}
$c_sjs_js_JSConverters$JSRichGenTraversableOnce$.prototype = new $h_O();
$c_sjs_js_JSConverters$JSRichGenTraversableOnce$.prototype.constructor = $c_sjs_js_JSConverters$JSRichGenTraversableOnce$;
/** @constructor */
function $h_sjs_js_JSConverters$JSRichGenTraversableOnce$() {
  /*<skip>*/
}
$h_sjs_js_JSConverters$JSRichGenTraversableOnce$.prototype = $c_sjs_js_JSConverters$JSRichGenTraversableOnce$.prototype;
$c_sjs_js_JSConverters$JSRichGenTraversableOnce$.prototype.toJSArray$extension__sc_GenTraversableOnce__sjs_js_Array = (function(this$) {
  if (false) {
    var x2 = $as_sjs_js_ArrayOps(this$);
    return x2.sjs_js_ArrayOps__f_scala$scalajs$js$ArrayOps$$array
  } else if ((this$ instanceof $c_sjs_js_WrappedArray)) {
    var x3 = $as_sjs_js_WrappedArray(this$);
    $m_sjs_js_WrappedArray$();
    return x3.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array
  } else {
    var result = [];
    this$.foreach__F1__V(new $c_sjsr_AnonFunction1(((x$2) => $uI(result.push(x$2)))));
    return result
  }
});
var $d_sjs_js_JSConverters$JSRichGenTraversableOnce$ = new $TypeData().initClass({
  sjs_js_JSConverters$JSRichGenTraversableOnce$: 0
}, false, "scala.scalajs.js.JSConverters$JSRichGenTraversableOnce$", {
  sjs_js_JSConverters$JSRichGenTraversableOnce$: 1,
  O: 1
});
$c_sjs_js_JSConverters$JSRichGenTraversableOnce$.prototype.$classData = $d_sjs_js_JSConverters$JSRichGenTraversableOnce$;
var $n_sjs_js_JSConverters$JSRichGenTraversableOnce$;
function $m_sjs_js_JSConverters$JSRichGenTraversableOnce$() {
  if ((!$n_sjs_js_JSConverters$JSRichGenTraversableOnce$)) {
    $n_sjs_js_JSConverters$JSRichGenTraversableOnce$ = new $c_sjs_js_JSConverters$JSRichGenTraversableOnce$()
  };
  return $n_sjs_js_JSConverters$JSRichGenTraversableOnce$
}
/** @constructor */
function $c_s_sys_package$() {
  /*<skip>*/
}
$c_s_sys_package$.prototype = new $h_O();
$c_s_sys_package$.prototype.constructor = $c_s_sys_package$;
/** @constructor */
function $h_s_sys_package$() {
  /*<skip>*/
}
$h_s_sys_package$.prototype = $c_s_sys_package$.prototype;
$c_s_sys_package$.prototype.error__T__E = (function(message) {
  throw $ct_jl_RuntimeException__T__(new $c_jl_RuntimeException(), message)
});
var $d_s_sys_package$ = new $TypeData().initClass({
  s_sys_package$: 0
}, false, "scala.sys.package$", {
  s_sys_package$: 1,
  O: 1
});
$c_s_sys_package$.prototype.$classData = $d_s_sys_package$;
var $n_s_sys_package$;
function $m_s_sys_package$() {
  if ((!$n_s_sys_package$)) {
    $n_s_sys_package$ = new $c_s_sys_package$()
  };
  return $n_s_sys_package$
}
/** @constructor */
function $c_s_util_control_Breaks() {
  new $c_s_util_control_BreakControl()
}
$c_s_util_control_Breaks.prototype = new $h_O();
$c_s_util_control_Breaks.prototype.constructor = $c_s_util_control_Breaks;
/** @constructor */
function $h_s_util_control_Breaks() {
  /*<skip>*/
}
$h_s_util_control_Breaks.prototype = $c_s_util_control_Breaks.prototype;
var $d_s_util_control_Breaks = new $TypeData().initClass({
  s_util_control_Breaks: 0
}, false, "scala.util.control.Breaks", {
  s_util_control_Breaks: 1,
  O: 1
});
$c_s_util_control_Breaks.prototype.$classData = $d_s_util_control_Breaks;
function $f_s_util_control_NoStackTrace__fillInStackTrace__jl_Throwable($thiz) {
  var this$1 = $m_s_util_control_NoStackTrace$();
  if (this$1.s_util_control_NoStackTrace$__f__noSuppression) {
    return $c_jl_Throwable.prototype.fillInStackTrace__jl_Throwable.call($thiz)
  } else {
    return $as_jl_Throwable($thiz)
  }
}
function $p_s_util_hashing_MurmurHash3__avalanche__I__I($thiz, hash) {
  var h = hash;
  h = (h ^ ((h >>> 16) | 0));
  h = Math.imul((-2048144789), h);
  h = (h ^ ((h >>> 13) | 0));
  h = Math.imul((-1028477387), h);
  h = (h ^ ((h >>> 16) | 0));
  return h
}
/** @constructor */
function $c_s_util_hashing_MurmurHash3() {
  /*<skip>*/
}
$c_s_util_hashing_MurmurHash3.prototype = new $h_O();
$c_s_util_hashing_MurmurHash3.prototype.constructor = $c_s_util_hashing_MurmurHash3;
/** @constructor */
function $h_s_util_hashing_MurmurHash3() {
  /*<skip>*/
}
$h_s_util_hashing_MurmurHash3.prototype = $c_s_util_hashing_MurmurHash3.prototype;
$c_s_util_hashing_MurmurHash3.prototype.mix__I__I__I = (function(hash, data) {
  var h = this.mixLast__I__I__I(hash, data);
  var i = h;
  h = ((i << 13) | ((i >>> 19) | 0));
  return (((-430675100) + Math.imul(5, h)) | 0)
});
$c_s_util_hashing_MurmurHash3.prototype.mixLast__I__I__I = (function(hash, data) {
  var k = data;
  k = Math.imul((-862048943), k);
  var i = k;
  k = ((i << 15) | ((i >>> 17) | 0));
  k = Math.imul(461845907, k);
  return (hash ^ k)
});
$c_s_util_hashing_MurmurHash3.prototype.finalizeHash__I__I__I = (function(hash, length) {
  return $p_s_util_hashing_MurmurHash3__avalanche__I__I(this, (hash ^ length))
});
$c_s_util_hashing_MurmurHash3.prototype.product2Hash__O__O__I__I = (function(x, y, seed) {
  var h = seed;
  h = this.mix__I__I__I(h, $m_sr_Statics$().anyHash__O__I(x));
  h = this.mix__I__I__I(h, $m_sr_Statics$().anyHash__O__I(y));
  return this.finalizeHash__I__I__I(h, 2)
});
$c_s_util_hashing_MurmurHash3.prototype.productHash__s_Product__I__I = (function(x, seed) {
  var arr = x.productArity__I();
  if ((arr === 0)) {
    return $f_T__hashCode__I(x.productPrefix__T())
  } else {
    var h = seed;
    var i = 0;
    while ((i < arr)) {
      var $$x1 = h;
      var x$1 = x.productElement__I__O(i);
      h = this.mix__I__I__I($$x1, $m_sr_Statics$().anyHash__O__I(x$1));
      i = ((1 + i) | 0)
    };
    return this.finalizeHash__I__I__I(h, arr)
  }
});
$c_s_util_hashing_MurmurHash3.prototype.unorderedHash__sc_TraversableOnce__I__I = (function(xs, seed) {
  if (xs.isEmpty__Z()) {
    var h = seed;
    h = this.mix__I__I__I(h, 0);
    h = this.mix__I__I__I(h, 0);
    h = this.mixLast__I__I__I(h, 1);
    return this.finalizeHash__I__I__I(h, 0)
  } else {
    var hasher = new $c_s_util_hashing_MurmurHash3$hasher$1(this);
    xs.foreach__F1__V(hasher);
    var h$2 = seed;
    h$2 = this.mix__I__I__I(h$2, hasher.s_util_hashing_MurmurHash3$hasher$1__f_a);
    h$2 = this.mix__I__I__I(h$2, hasher.s_util_hashing_MurmurHash3$hasher$1__f_b);
    h$2 = this.mixLast__I__I__I(h$2, hasher.s_util_hashing_MurmurHash3$hasher$1__f_c);
    return this.finalizeHash__I__I__I(h$2, hasher.s_util_hashing_MurmurHash3$hasher$1__f_n)
  }
});
$c_s_util_hashing_MurmurHash3.prototype.orderedHash__sc_TraversableOnce__I__I = (function(xs, seed) {
  if (xs.isEmpty__Z()) {
    return this.finalizeHash__I__I__I(seed, 0)
  } else {
    var hasher = new $c_s_util_hashing_MurmurHash3$hasher$2(this, seed);
    xs.foreach__F1__V(hasher);
    return this.finalizeHash__I__I__I(hasher.s_util_hashing_MurmurHash3$hasher$2__f_h, hasher.s_util_hashing_MurmurHash3$hasher$2__f_n)
  }
});
$c_s_util_hashing_MurmurHash3.prototype.listHash__sci_List__I__I = (function(xs, seed) {
  var n = 0;
  var h = seed;
  var elems = xs;
  while ((!elems.isEmpty__Z())) {
    var head = elems.head__O();
    var tail = $as_sci_List(elems.tail__O());
    h = this.mix__I__I__I(h, $m_sr_Statics$().anyHash__O__I(head));
    n = ((1 + n) | 0);
    elems = tail
  };
  return this.finalizeHash__I__I__I(h, n)
});
/** @constructor */
function $c_Lcfx70_cfpl_core_BrunchCC(d1, d2, h1, dd1, d3, d4, h2, dd2, ang, h3, df1, df2, df3) {
  this.Lcfx70_cfpl_core_BrunchCC__f_d1 = 0.0;
  this.Lcfx70_cfpl_core_BrunchCC__f_d2 = 0.0;
  this.Lcfx70_cfpl_core_BrunchCC__f_h1 = 0.0;
  this.Lcfx70_cfpl_core_BrunchCC__f_d4 = 0.0;
  this.Lcfx70_cfpl_core_BrunchCC__f_ang = 0.0;
  this.Lcfx70_cfpl_core_BrunchCC__f_angr = 0.0;
  this.Lcfx70_cfpl_core_BrunchCC__f_fcb = null;
  this.Lcfx70_cfpl_core_BrunchCC__f_fct = null;
  this.Lcfx70_cfpl_core_BrunchCC__f_cns = null;
  this.Lcfx70_cfpl_core_BrunchCC__f_h0 = 0.0;
  this.Lcfx70_cfpl_core_BrunchCC__f_b0 = 0.0;
  this.Lcfx70_cfpl_core_BrunchCC__f_b = 0.0;
  this.Lcfx70_cfpl_core_BrunchCC__f_dv = null;
  this.Lcfx70_cfpl_core_BrunchCC__f_cnv = null;
  this.Lcfx70_cfpl_core_BrunchCC__f_fcv = null;
  this.Lcfx70_cfpl_core_BrunchCC__f_gb = null;
  this.Lcfx70_cfpl_core_BrunchCC__f_gt = null;
  this.Lcfx70_cfpl_core_BrunchCC__f_gv = null;
  this.Lcfx70_cfpl_core_BrunchCC__f_gcns = null;
  this.Lcfx70_cfpl_core_BrunchCC__f_gcnv = null;
  this.Lcfx70_cfpl_core_BrunchCC__f_meshes = null;
  this.Lcfx70_cfpl_core_BrunchCC__f_d1 = d1;
  this.Lcfx70_cfpl_core_BrunchCC__f_d2 = d2;
  this.Lcfx70_cfpl_core_BrunchCC__f_h1 = h1;
  this.Lcfx70_cfpl_core_BrunchCC__f_d4 = d4;
  this.Lcfx70_cfpl_core_BrunchCC__f_ang = ang;
  this.Lcfx70_cfpl_core_BrunchCC__f_angr = (0.017453292519943295 * ang);
  this.Lcfx70_cfpl_core_BrunchCC__f_fcb = new $c_Lcfx70_cfpl_core_BCylinder(d1, df1, 0.0, 6.283185307179586);
  var this$4 = new $c_Lcfx70_cfpl_core_BCylinder(d2, df2, 0.0, 6.283185307179586);
  var array = [(-dd1), 0.0, (h1 - df2)];
  var crds = $ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), array);
  var v = $ct_Lcfx70_vecquat_Vec__sc_Seq__(new $c_Lcfx70_vecquat_Vec(), crds);
  this.Lcfx70_cfpl_core_BrunchCC__f_fct = $as_Lcfx70_cfpl_core_BCylinder($f_Lcfx70_cfpl_core_MoveTopBottom__translate__Lcfx70_vecquat_Vec__Lcfx70_cfpl_core_MoveTopBottom(this$4, v));
  var this$8 = $ct_Lcfx70_cfpl_core_BCone__D__D__D__D__D__(new $c_Lcfx70_cfpl_core_BCone(), d1, d2, ((h1 - df1) - df2), (-dd1), 6.283185307179586);
  var array$1 = [0.0, 0.0, df1];
  var crds$1 = $ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), array$1);
  var v$1 = $ct_Lcfx70_vecquat_Vec__sc_Seq__(new $c_Lcfx70_vecquat_Vec(), crds$1);
  this.Lcfx70_cfpl_core_BrunchCC__f_cns = $as_Lcfx70_cfpl_core_BCone($f_Lcfx70_cfpl_core_MoveTopBottom__translate__Lcfx70_vecquat_Vec__Lcfx70_cfpl_core_MoveTopBottom(this$8, v$1));
  this.Lcfx70_cfpl_core_BrunchCC__f_h0 = ((h1 - df1) - df2);
  this.Lcfx70_cfpl_core_BrunchCC__f_b0 = ((d1 / 2.0) - ((d2 / 2.0) - dd1));
  this.Lcfx70_cfpl_core_BrunchCC__f_b = ((this.Lcfx70_cfpl_core_BrunchCC__f_b0 * h3) / this.Lcfx70_cfpl_core_BrunchCC__f_h0);
  var $$x3 = this.Lcfx70_cfpl_core_BrunchCC__f_b;
  var x = this.Lcfx70_cfpl_core_BrunchCC__f_angr;
  var $$x2 = $uD(Math.sin(x));
  var $$x1 = this.Lcfx70_cfpl_core_BrunchCC__f_h0;
  var x$1 = this.Lcfx70_cfpl_core_BrunchCC__f_angr;
  var array$2 = [((((d2 / 2.0) - dd1) + $$x3) + ((d3 / 2.0) * $$x2)), 0.0, (((df1 + $$x1) - h3) - ((d3 / 2.0) * $uD(Math.cos(x$1))))];
  var crds$2 = $ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), array$2);
  this.Lcfx70_cfpl_core_BrunchCC__f_dv = $ct_Lcfx70_vecquat_Vec__sc_Seq__(new $c_Lcfx70_vecquat_Vec(), crds$2);
  var this$19 = $ct_Lcfx70_cfpl_core_BCone__D__D__D__D__D__(new $c_Lcfx70_cfpl_core_BCone(), d3, d4, (h2 - df3), dd2, 6.283185307179586);
  var ang$1 = this.Lcfx70_cfpl_core_BrunchCC__f_angr;
  var array$3 = [0.0, 1.0, 0.0];
  var crds$3 = $ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), array$3);
  var v$2 = $ct_Lcfx70_vecquat_Vec__sc_Seq__(new $c_Lcfx70_vecquat_Vec(), crds$3);
  var this$20 = $f_Lcfx70_cfpl_core_MoveTopBottom__rotate__D__Lcfx70_vecquat_Vec__Lcfx70_cfpl_core_MoveTopBottom(this$19, ang$1, v$2);
  var v$3 = this.Lcfx70_cfpl_core_BrunchCC__f_dv;
  this.Lcfx70_cfpl_core_BrunchCC__f_cnv = $as_Lcfx70_cfpl_core_BCone($f_Lcfx70_cfpl_core_MoveTopBottom__translate__Lcfx70_vecquat_Vec__Lcfx70_cfpl_core_MoveTopBottom(this$20, v$3)).cut__Lcfx70_cfpl_core_LineIntersectable__Lcfx70_cfpl_core_BCone(this.Lcfx70_cfpl_core_BrunchCC__f_cns);
  var this$24 = new $c_Lcfx70_cfpl_core_BCylinder(d4, df3, 0.0, 6.283185307179586);
  var array$4 = [dd2, 0.0, 0.0];
  var crds$4 = $ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), array$4);
  var v$4 = $ct_Lcfx70_vecquat_Vec__sc_Seq__(new $c_Lcfx70_vecquat_Vec(), crds$4);
  var this$28 = $f_Lcfx70_cfpl_core_MoveTopBottom__translate__Lcfx70_vecquat_Vec__Lcfx70_cfpl_core_MoveTopBottom(this$24, v$4);
  var ang$2 = this.Lcfx70_cfpl_core_BrunchCC__f_angr;
  var array$5 = [0.0, 1.0, 0.0];
  var crds$5 = $ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), array$5);
  var v$5 = $ct_Lcfx70_vecquat_Vec__sc_Seq__(new $c_Lcfx70_vecquat_Vec(), crds$5);
  var this$36 = $f_Lcfx70_cfpl_core_MoveTopBottom__rotate__D__Lcfx70_vecquat_Vec__Lcfx70_cfpl_core_MoveTopBottom(this$28, ang$2, v$5);
  var $$x5 = this.Lcfx70_cfpl_core_BrunchCC__f_dv;
  var x$2 = this.Lcfx70_cfpl_core_BrunchCC__f_angr;
  var $$x4 = $uD(Math.cos(x$2));
  var x$3 = this.Lcfx70_cfpl_core_BrunchCC__f_angr;
  var array$6 = [((h2 - df3) * $$x4), 0.0, ((h2 - df3) * $uD(Math.sin(x$3)))];
  var crds$6 = $ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), array$6);
  var v$6 = $$x5.$plus__Lcfx70_vecquat_Vec__Lcfx70_vecquat_Vec($ct_Lcfx70_vecquat_Vec__sc_Seq__(new $c_Lcfx70_vecquat_Vec(), crds$6));
  this.Lcfx70_cfpl_core_BrunchCC__f_fcv = $as_Lcfx70_cfpl_core_BCylinder($f_Lcfx70_cfpl_core_MoveTopBottom__translate__Lcfx70_vecquat_Vec__Lcfx70_cfpl_core_MoveTopBottom(this$36, v$6));
  this.Lcfx70_cfpl_core_BrunchCC__f_gb = this.Lcfx70_cfpl_core_BrunchCC__f_fcb.getGeometry1__Lcfx70_threejsfacade_THREE$BufferGeometry();
  this.Lcfx70_cfpl_core_BrunchCC__f_gt = this.Lcfx70_cfpl_core_BrunchCC__f_fct.getGeometry1__Lcfx70_threejsfacade_THREE$BufferGeometry();
  this.Lcfx70_cfpl_core_BrunchCC__f_gv = this.Lcfx70_cfpl_core_BrunchCC__f_fcv.getGeometry1__Lcfx70_threejsfacade_THREE$BufferGeometry();
  this.Lcfx70_cfpl_core_BrunchCC__f_gcns = this.Lcfx70_cfpl_core_BrunchCC__f_cns.getGeometry1__Lcfx70_threejsfacade_THREE$BufferGeometry();
  this.Lcfx70_cfpl_core_BrunchCC__f_gcnv = this.Lcfx70_cfpl_core_BrunchCC__f_cnv.getGeometry1__Lcfx70_threejsfacade_THREE$BufferGeometry();
  var mb = new $i_three.Mesh(this.Lcfx70_cfpl_core_BrunchCC__f_gb, $m_Lcfx70_cfpl_core_Model$().Lcfx70_cfpl_core_Model$__f_phongBlueMaterial);
  var mt = new $i_three.Mesh(this.Lcfx70_cfpl_core_BrunchCC__f_gt, $m_Lcfx70_cfpl_core_Model$().Lcfx70_cfpl_core_Model$__f_phongBlueMaterial);
  var mv = new $i_three.Mesh(this.Lcfx70_cfpl_core_BrunchCC__f_gv, $m_Lcfx70_cfpl_core_Model$().Lcfx70_cfpl_core_Model$__f_phongBlueMaterial);
  var mcns = new $i_three.Mesh(this.Lcfx70_cfpl_core_BrunchCC__f_gcns, $m_Lcfx70_cfpl_core_Model$().Lcfx70_cfpl_core_Model$__f_phongBlueMaterial);
  var mcnv = new $i_three.Mesh(this.Lcfx70_cfpl_core_BrunchCC__f_gcnv, $m_Lcfx70_cfpl_core_Model$().Lcfx70_cfpl_core_Model$__f_phongBlueMaterial);
  var m = new $i_three.Object3D();
  m.add(mb);
  m.add(mt);
  m.add(mv);
  m.add(mcns);
  m.add(mcnv);
  this.Lcfx70_cfpl_core_BrunchCC__f_meshes = m
}
$c_Lcfx70_cfpl_core_BrunchCC.prototype = new $h_Lcfx70_cfpl_core_Model();
$c_Lcfx70_cfpl_core_BrunchCC.prototype.constructor = $c_Lcfx70_cfpl_core_BrunchCC;
/** @constructor */
function $h_Lcfx70_cfpl_core_BrunchCC() {
  /*<skip>*/
}
$h_Lcfx70_cfpl_core_BrunchCC.prototype = $c_Lcfx70_cfpl_core_BrunchCC.prototype;
$c_Lcfx70_cfpl_core_BrunchCC.prototype.description__T__T = (function(lang) {
  return ((((((((("\u0422\u0440\u043e\u0439\u043d\u0438\u043a &Oslash;" + this.Lcfx70_cfpl_core_BrunchCC__f_d1) + " &minus; &Oslash;") + this.Lcfx70_cfpl_core_BrunchCC__f_d2) + " &minus; &Oslash;") + this.Lcfx70_cfpl_core_BrunchCC__f_d4) + " &lt;") + this.Lcfx70_cfpl_core_BrunchCC__f_ang) + "&deg; l=") + this.Lcfx70_cfpl_core_BrunchCC__f_h1)
});
$c_Lcfx70_cfpl_core_BrunchCC.prototype.meshes__Lcfx70_threejsfacade_THREE$Object3D = (function() {
  return this.Lcfx70_cfpl_core_BrunchCC__f_meshes
});
var $d_Lcfx70_cfpl_core_BrunchCC = new $TypeData().initClass({
  Lcfx70_cfpl_core_BrunchCC: 0
}, false, "cfx70.cfpl.core.BrunchCC", {
  Lcfx70_cfpl_core_BrunchCC: 1,
  Lcfx70_cfpl_core_Model: 1,
  O: 1
});
$c_Lcfx70_cfpl_core_BrunchCC.prototype.$classData = $d_Lcfx70_cfpl_core_BrunchCC;
/** @constructor */
function $c_Lcfx70_cfpl_core_Plane3(n, p) {
  this.Lcfx70_cfpl_core_Plane3__f_n = null;
  this.Lcfx70_cfpl_core_Plane3__f_p = 0.0;
  this.Lcfx70_cfpl_core_Plane3__f_n = n;
  this.Lcfx70_cfpl_core_Plane3__f_p = p
}
$c_Lcfx70_cfpl_core_Plane3.prototype = new $h_O();
$c_Lcfx70_cfpl_core_Plane3.prototype.constructor = $c_Lcfx70_cfpl_core_Plane3;
/** @constructor */
function $h_Lcfx70_cfpl_core_Plane3() {
  /*<skip>*/
}
$h_Lcfx70_cfpl_core_Plane3.prototype = $c_Lcfx70_cfpl_core_Plane3.prototype;
$c_Lcfx70_cfpl_core_Plane3.prototype.parallel__Lcfx70_cfpl_core_Line3__Z = (function(l) {
  var this$1 = this.Lcfx70_cfpl_core_Plane3__f_n;
  var v2 = l.Lcfx70_cfpl_core_Line3__f_v;
  return (this$1.dotProd__Lcfx70_vecquat_Vec__D(v2) < $m_Lcfx70_vecquat_package$().Lcfx70_vecquat_package$__f_epsilon)
});
$c_Lcfx70_cfpl_core_Plane3.prototype.intersect__Lcfx70_cfpl_core_Line3__s_Option = (function(l) {
  if (this.parallel__Lcfx70_cfpl_core_Line3__Z(l)) {
    return $m_s_None$()
  } else {
    var $$x2 = this.Lcfx70_cfpl_core_Plane3__f_p;
    var this$1 = this.Lcfx70_cfpl_core_Plane3__f_n;
    var v2 = l.Lcfx70_cfpl_core_Line3__f_p1;
    var $$x1 = this$1.dotProd__Lcfx70_vecquat_Vec__D(v2);
    var this$2 = this.Lcfx70_cfpl_core_Plane3__f_n;
    var v2$1 = l.Lcfx70_cfpl_core_Line3__f_p2.$minus__Lcfx70_vecquat_Vec__Lcfx70_vecquat_Vec(l.Lcfx70_cfpl_core_Line3__f_p1);
    var t = ((-($$x2 + $$x1)) / this$2.dotProd__Lcfx70_vecquat_Vec__D(v2$1));
    return new $c_s_Some(l.point__D__Lcfx70_vecquat_Vec(t))
  }
});
$c_Lcfx70_cfpl_core_Plane3.prototype.intersectXY__s_Option = (function() {
  var this$4 = this.Lcfx70_cfpl_core_Plane3__f_n;
  var array = [0.0, 0.0, 1.0];
  var crds = $ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), array);
  var v2 = $ct_Lcfx70_vecquat_Vec__sc_Seq__(new $c_Lcfx70_vecquat_Vec(), crds);
  var x1 = this$4.crossProd__Lcfx70_vecquat_Vec__Lcfx70_vecquat_Vec(v2);
  if ((x1.norm__D() < $m_Lcfx70_vecquat_package$().Lcfx70_vecquat_package$__f_epsilon)) {
    return $m_s_None$()
  } else {
    var this$5 = this.Lcfx70_cfpl_core_Plane3__f_n;
    if (($uD(this$5.Lcfx70_vecquat_Vec__f_crds.apply__I__O(0)) > $m_Lcfx70_vecquat_package$().Lcfx70_vecquat_package$__f_epsilon)) {
      var $$x2 = this.Lcfx70_cfpl_core_Plane3__f_p;
      var this$6 = this.Lcfx70_cfpl_core_Plane3__f_n;
      var array$1 = [((-$$x2) / $uD(this$6.Lcfx70_vecquat_Vec__f_crds.apply__I__O(0))), 0.0, 0.0];
      var crds$1 = $ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), array$1);
      var $$x3 = $ct_Lcfx70_vecquat_Vec__sc_Seq__(new $c_Lcfx70_vecquat_Vec(), crds$1);
      var $$x1 = this.Lcfx70_cfpl_core_Plane3__f_p;
      var this$10 = this.Lcfx70_cfpl_core_Plane3__f_n;
      var array$2 = [(((-$$x1) / $uD(this$10.Lcfx70_vecquat_Vec__f_crds.apply__I__O(0))) + $uD(x1.Lcfx70_vecquat_Vec__f_crds.apply__I__O(0))), $uD(x1.Lcfx70_vecquat_Vec__f_crds.apply__I__O(1)), $uD(x1.Lcfx70_vecquat_Vec__f_crds.apply__I__O(2))];
      var crds$2 = $ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), array$2);
      return new $c_s_Some(new $c_Lcfx70_cfpl_core_Line3($$x3, $ct_Lcfx70_vecquat_Vec__sc_Seq__(new $c_Lcfx70_vecquat_Vec(), crds$2)))
    } else {
      var this$14 = this.Lcfx70_cfpl_core_Plane3__f_n;
      if (($uD(this$14.Lcfx70_vecquat_Vec__f_crds.apply__I__O(1)) > $m_Lcfx70_vecquat_package$().Lcfx70_vecquat_package$__f_epsilon)) {
        var $$x7 = this.Lcfx70_cfpl_core_Plane3__f_p;
        var this$15 = this.Lcfx70_cfpl_core_Plane3__f_n;
        var array$3 = [0.0, ((-$$x7) / $uD(this$15.Lcfx70_vecquat_Vec__f_crds.apply__I__O(1))), 0.0];
        var crds$3 = $ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), array$3);
        var $$x8 = $ct_Lcfx70_vecquat_Vec__sc_Seq__(new $c_Lcfx70_vecquat_Vec(), crds$3);
        var $$x6 = $uD(x1.Lcfx70_vecquat_Vec__f_crds.apply__I__O(0));
        var $$x5 = $uD(x1.Lcfx70_vecquat_Vec__f_crds.apply__I__O(1));
        var $$x4 = this.Lcfx70_cfpl_core_Plane3__f_p;
        var this$19 = this.Lcfx70_cfpl_core_Plane3__f_n;
        var array$4 = [$$x6, ($$x5 - ($$x4 / $uD(this$19.Lcfx70_vecquat_Vec__f_crds.apply__I__O(1)))), $uD(x1.Lcfx70_vecquat_Vec__f_crds.apply__I__O(2))];
        var crds$4 = $ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), array$4);
        return new $c_s_Some(new $c_Lcfx70_cfpl_core_Line3($$x8, $ct_Lcfx70_vecquat_Vec__sc_Seq__(new $c_Lcfx70_vecquat_Vec(), crds$4)))
      } else {
        return $m_s_None$()
      }
    }
  }
});
$c_Lcfx70_cfpl_core_Plane3.prototype.toString__T = (function() {
  return (((("Plane3 (" + this.Lcfx70_cfpl_core_Plane3__f_n) + " ") + this.Lcfx70_cfpl_core_Plane3__f_p) + ")")
});
var $d_Lcfx70_cfpl_core_Plane3 = new $TypeData().initClass({
  Lcfx70_cfpl_core_Plane3: 0
}, false, "cfx70.cfpl.core.Plane3", {
  Lcfx70_cfpl_core_Plane3: 1,
  O: 1,
  Lcfx70_cfpl_core_LineIntersectable: 1
});
$c_Lcfx70_cfpl_core_Plane3.prototype.$classData = $d_Lcfx70_cfpl_core_Plane3;
/** @constructor */
function $c_Lcfx70_cfpl_core_RedCC(d1, d2, dc, h, f1, f2) {
  this.Lcfx70_cfpl_core_RedCC__f_d1 = 0.0;
  this.Lcfx70_cfpl_core_RedCC__f_d2 = 0.0;
  this.Lcfx70_cfpl_core_RedCC__f_h = 0.0;
  this.Lcfx70_cfpl_core_RedCC__f_fcb = null;
  this.Lcfx70_cfpl_core_RedCC__f_fct = null;
  this.Lcfx70_cfpl_core_RedCC__f_cn = null;
  this.Lcfx70_cfpl_core_RedCC__f_meshes = null;
  this.Lcfx70_cfpl_core_RedCC__f_d1 = d1;
  this.Lcfx70_cfpl_core_RedCC__f_d2 = d2;
  this.Lcfx70_cfpl_core_RedCC__f_h = h;
  this.Lcfx70_cfpl_core_RedCC__f_fcb = new $c_Lcfx70_cfpl_core_BCylinder(d1, f1, 0.0, 6.283185307179586);
  var this$4 = new $c_Lcfx70_cfpl_core_BCylinder(d2, f2, 0.0, 6.283185307179586);
  var array = [dc, 0.0, (h - f2)];
  var crds = $ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), array);
  var v = $ct_Lcfx70_vecquat_Vec__sc_Seq__(new $c_Lcfx70_vecquat_Vec(), crds);
  this.Lcfx70_cfpl_core_RedCC__f_fct = $as_Lcfx70_cfpl_core_BCylinder($f_Lcfx70_cfpl_core_MoveTopBottom__translate__Lcfx70_vecquat_Vec__Lcfx70_cfpl_core_MoveTopBottom(this$4, v));
  var this$8 = $ct_Lcfx70_cfpl_core_BCone__D__D__D__D__D__(new $c_Lcfx70_cfpl_core_BCone(), d1, d2, ((h - f1) - f2), dc, 6.283185307179586);
  var array$1 = [0.0, 0.0, f1];
  var crds$1 = $ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), array$1);
  var v$1 = $ct_Lcfx70_vecquat_Vec__sc_Seq__(new $c_Lcfx70_vecquat_Vec(), crds$1);
  this.Lcfx70_cfpl_core_RedCC__f_cn = $as_Lcfx70_cfpl_core_BCone($f_Lcfx70_cfpl_core_MoveTopBottom__translate__Lcfx70_vecquat_Vec__Lcfx70_cfpl_core_MoveTopBottom(this$8, v$1));
  $m_Lcfx70_cfpl_core_Model$();
  var mat = $m_Lcfx70_cfpl_core_Model$().Lcfx70_cfpl_core_Model$__f_phongBlueMaterial;
  var array$2 = [this.Lcfx70_cfpl_core_RedCC__f_fcb, this.Lcfx70_cfpl_core_RedCC__f_fct, this.Lcfx70_cfpl_core_RedCC__f_cn];
  var m = new $i_three.Object3D();
  var i = 0;
  var len = $uI(array$2.length);
  while ((i < len)) {
    var index = i;
    var arg1 = array$2[index];
    var bg = $as_Lcfx70_cfpl_core_BGeometry(arg1);
    m.add(new $i_three.Mesh(bg.getGeometry1__Lcfx70_threejsfacade_THREE$BufferGeometry(), mat));
    i = ((1 + i) | 0)
  };
  this.Lcfx70_cfpl_core_RedCC__f_meshes = m
}
$c_Lcfx70_cfpl_core_RedCC.prototype = new $h_Lcfx70_cfpl_core_Model();
$c_Lcfx70_cfpl_core_RedCC.prototype.constructor = $c_Lcfx70_cfpl_core_RedCC;
/** @constructor */
function $h_Lcfx70_cfpl_core_RedCC() {
  /*<skip>*/
}
$h_Lcfx70_cfpl_core_RedCC.prototype = $c_Lcfx70_cfpl_core_RedCC.prototype;
$c_Lcfx70_cfpl_core_RedCC.prototype.description__T__T = (function(lang) {
  return ((((("\u041f\u0435\u0440\u0435\u0445\u043e\u0434 &Oslash;" + this.Lcfx70_cfpl_core_RedCC__f_d1) + " &minus; &Oslash;") + this.Lcfx70_cfpl_core_RedCC__f_d2) + " l=") + this.Lcfx70_cfpl_core_RedCC__f_h)
});
$c_Lcfx70_cfpl_core_RedCC.prototype.meshes__Lcfx70_threejsfacade_THREE$Object3D = (function() {
  return this.Lcfx70_cfpl_core_RedCC__f_meshes
});
function $as_Lcfx70_cfpl_core_RedCC(obj) {
  return (((obj instanceof $c_Lcfx70_cfpl_core_RedCC) || (obj === null)) ? obj : $throwClassCastException(obj, "cfx70.cfpl.core.RedCC"))
}
function $isArrayOf_Lcfx70_cfpl_core_RedCC(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lcfx70_cfpl_core_RedCC)))
}
function $asArrayOf_Lcfx70_cfpl_core_RedCC(obj, depth) {
  return (($isArrayOf_Lcfx70_cfpl_core_RedCC(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lcfx70.cfpl.core.RedCC;", depth))
}
var $d_Lcfx70_cfpl_core_RedCC = new $TypeData().initClass({
  Lcfx70_cfpl_core_RedCC: 0
}, false, "cfx70.cfpl.core.RedCC", {
  Lcfx70_cfpl_core_RedCC: 1,
  Lcfx70_cfpl_core_Model: 1,
  O: 1
});
$c_Lcfx70_cfpl_core_RedCC.prototype.$classData = $d_Lcfx70_cfpl_core_RedCC;
/** @constructor */
function $c_Lcfx70_cfpl_core_RedRC(a1, b1, d, h, da, db, df1, df2) {
  this.Lcfx70_cfpl_core_RedRC__f_a1 = 0.0;
  this.Lcfx70_cfpl_core_RedRC__f_b1 = 0.0;
  this.Lcfx70_cfpl_core_RedRC__f_d = 0.0;
  this.Lcfx70_cfpl_core_RedRC__f_h = 0.0;
  this.Lcfx70_cfpl_core_RedRC__f_fcb = null;
  this.Lcfx70_cfpl_core_RedRC__f_fct = null;
  this.Lcfx70_cfpl_core_RedRC__f_cn = null;
  this.Lcfx70_cfpl_core_RedRC__f_meshes = null;
  this.Lcfx70_cfpl_core_RedRC__f_a1 = a1;
  this.Lcfx70_cfpl_core_RedRC__f_b1 = b1;
  this.Lcfx70_cfpl_core_RedRC__f_d = d;
  this.Lcfx70_cfpl_core_RedRC__f_h = h;
  this.Lcfx70_cfpl_core_RedRC__f_fcb = new $c_Lcfx70_cfpl_core_BBox(a1, b1, df1);
  var this$4 = new $c_Lcfx70_cfpl_core_BCylinder(d, df2, 0.0, 6.283185307179586);
  var array = [da, db, (h - df2)];
  var crds = $ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), array);
  var v = $ct_Lcfx70_vecquat_Vec__sc_Seq__(new $c_Lcfx70_vecquat_Vec(), crds);
  this.Lcfx70_cfpl_core_RedRC__f_fct = $as_Lcfx70_cfpl_core_BCylinder($f_Lcfx70_cfpl_core_MoveTopBottom__translate__Lcfx70_vecquat_Vec__Lcfx70_cfpl_core_MoveTopBottom(this$4, v));
  var this$8 = new $c_Lcfx70_cfpl_core_BRCRed(a1, b1, d, ((h - df1) - df2), da, db);
  var array$1 = [0.0, 0.0, df1];
  var crds$1 = $ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), array$1);
  var v$1 = $ct_Lcfx70_vecquat_Vec__sc_Seq__(new $c_Lcfx70_vecquat_Vec(), crds$1);
  this.Lcfx70_cfpl_core_RedRC__f_cn = $as_Lcfx70_cfpl_core_BRCRed($f_Lcfx70_cfpl_core_MoveTopBottom__translate__Lcfx70_vecquat_Vec__Lcfx70_cfpl_core_MoveTopBottom(this$8, v$1));
  $m_Lcfx70_cfpl_core_Model$();
  var mat = $m_Lcfx70_cfpl_core_Model$().Lcfx70_cfpl_core_Model$__f_phongBlueMaterial;
  var array$2 = [this.Lcfx70_cfpl_core_RedRC__f_fcb, this.Lcfx70_cfpl_core_RedRC__f_fct, this.Lcfx70_cfpl_core_RedRC__f_cn];
  var m = new $i_three.Object3D();
  var i = 0;
  var len = $uI(array$2.length);
  while ((i < len)) {
    var index = i;
    var arg1 = array$2[index];
    var bg = $as_Lcfx70_cfpl_core_BGeometry(arg1);
    m.add(new $i_three.Mesh(bg.getGeometry1__Lcfx70_threejsfacade_THREE$BufferGeometry(), mat));
    i = ((1 + i) | 0)
  };
  this.Lcfx70_cfpl_core_RedRC__f_meshes = m
}
$c_Lcfx70_cfpl_core_RedRC.prototype = new $h_Lcfx70_cfpl_core_Model();
$c_Lcfx70_cfpl_core_RedRC.prototype.constructor = $c_Lcfx70_cfpl_core_RedRC;
/** @constructor */
function $h_Lcfx70_cfpl_core_RedRC() {
  /*<skip>*/
}
$h_Lcfx70_cfpl_core_RedRC.prototype = $c_Lcfx70_cfpl_core_RedRC.prototype;
$c_Lcfx70_cfpl_core_RedRC.prototype.description__T__T = (function(lang) {
  return ((((((("\u041f\u0435\u0440\u0435\u0445\u043e\u0434 " + this.Lcfx70_cfpl_core_RedRC__f_a1) + " &times; ") + this.Lcfx70_cfpl_core_RedRC__f_b1) + " &minus; &Oslash;") + this.Lcfx70_cfpl_core_RedRC__f_d) + " l=") + this.Lcfx70_cfpl_core_RedRC__f_h)
});
$c_Lcfx70_cfpl_core_RedRC.prototype.meshes__Lcfx70_threejsfacade_THREE$Object3D = (function() {
  return this.Lcfx70_cfpl_core_RedRC__f_meshes
});
function $as_Lcfx70_cfpl_core_RedRC(obj) {
  return (((obj instanceof $c_Lcfx70_cfpl_core_RedRC) || (obj === null)) ? obj : $throwClassCastException(obj, "cfx70.cfpl.core.RedRC"))
}
function $isArrayOf_Lcfx70_cfpl_core_RedRC(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lcfx70_cfpl_core_RedRC)))
}
function $asArrayOf_Lcfx70_cfpl_core_RedRC(obj, depth) {
  return (($isArrayOf_Lcfx70_cfpl_core_RedRC(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lcfx70.cfpl.core.RedRC;", depth))
}
var $d_Lcfx70_cfpl_core_RedRC = new $TypeData().initClass({
  Lcfx70_cfpl_core_RedRC: 0
}, false, "cfx70.cfpl.core.RedRC", {
  Lcfx70_cfpl_core_RedRC: 1,
  Lcfx70_cfpl_core_Model: 1,
  O: 1
});
$c_Lcfx70_cfpl_core_RedRC.prototype.$classData = $d_Lcfx70_cfpl_core_RedRC;
/** @constructor */
function $c_Lcfx70_cfpl_core_RedRR(a1, b1, a2, b2, h, da, db, hfb, hft) {
  this.Lcfx70_cfpl_core_RedRR__f_a1 = 0.0;
  this.Lcfx70_cfpl_core_RedRR__f_b1 = 0.0;
  this.Lcfx70_cfpl_core_RedRR__f_a2 = 0.0;
  this.Lcfx70_cfpl_core_RedRR__f_b2 = 0.0;
  this.Lcfx70_cfpl_core_RedRR__f_h = 0.0;
  this.Lcfx70_cfpl_core_RedRR__f_fcb = null;
  this.Lcfx70_cfpl_core_RedRR__f_fct = null;
  this.Lcfx70_cfpl_core_RedRR__f_cn = null;
  this.Lcfx70_cfpl_core_RedRR__f_meshes = null;
  this.Lcfx70_cfpl_core_RedRR__f_a1 = a1;
  this.Lcfx70_cfpl_core_RedRR__f_b1 = b1;
  this.Lcfx70_cfpl_core_RedRR__f_a2 = a2;
  this.Lcfx70_cfpl_core_RedRR__f_b2 = b2;
  this.Lcfx70_cfpl_core_RedRR__f_h = h;
  this.Lcfx70_cfpl_core_RedRR__f_fcb = new $c_Lcfx70_cfpl_core_BBox(a1, b1, hfb);
  var this$4 = new $c_Lcfx70_cfpl_core_BBox(a2, b2, hft);
  var array = [da, db, (h - hft)];
  var crds = $ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), array);
  var v = $ct_Lcfx70_vecquat_Vec__sc_Seq__(new $c_Lcfx70_vecquat_Vec(), crds);
  this.Lcfx70_cfpl_core_RedRR__f_fct = $as_Lcfx70_cfpl_core_BBox($f_Lcfx70_cfpl_core_MoveTopBottom__translate__Lcfx70_vecquat_Vec__Lcfx70_cfpl_core_MoveTopBottom(this$4, v));
  var this$8 = $ct_Lcfx70_cfpl_core_BPyramid__D__D__D__D__D__D__D__(new $c_Lcfx70_cfpl_core_BPyramid(), a1, b1, a2, b2, ((h - hfb) - hft), da, db);
  var array$1 = [0.0, 0.0, hfb];
  var crds$1 = $ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), array$1);
  var v$1 = $ct_Lcfx70_vecquat_Vec__sc_Seq__(new $c_Lcfx70_vecquat_Vec(), crds$1);
  this.Lcfx70_cfpl_core_RedRR__f_cn = $as_Lcfx70_cfpl_core_BPyramid($f_Lcfx70_cfpl_core_MoveTopBottom__translate__Lcfx70_vecquat_Vec__Lcfx70_cfpl_core_MoveTopBottom(this$8, v$1));
  $m_Lcfx70_cfpl_core_Model$();
  var mat = $m_Lcfx70_cfpl_core_Model$().Lcfx70_cfpl_core_Model$__f_phongBlueMaterial;
  var array$2 = [this.Lcfx70_cfpl_core_RedRR__f_fcb, this.Lcfx70_cfpl_core_RedRR__f_fct, this.Lcfx70_cfpl_core_RedRR__f_cn];
  var m = new $i_three.Object3D();
  var i = 0;
  var len = $uI(array$2.length);
  while ((i < len)) {
    var index = i;
    var arg1 = array$2[index];
    var bg = $as_Lcfx70_cfpl_core_BGeometry(arg1);
    m.add(new $i_three.Mesh(bg.getGeometry1__Lcfx70_threejsfacade_THREE$BufferGeometry(), mat));
    i = ((1 + i) | 0)
  };
  this.Lcfx70_cfpl_core_RedRR__f_meshes = m
}
$c_Lcfx70_cfpl_core_RedRR.prototype = new $h_Lcfx70_cfpl_core_Model();
$c_Lcfx70_cfpl_core_RedRR.prototype.constructor = $c_Lcfx70_cfpl_core_RedRR;
/** @constructor */
function $h_Lcfx70_cfpl_core_RedRR() {
  /*<skip>*/
}
$h_Lcfx70_cfpl_core_RedRR.prototype = $c_Lcfx70_cfpl_core_RedRR.prototype;
$c_Lcfx70_cfpl_core_RedRR.prototype.description__T__T = (function(lang) {
  return ((((((((("\u041f\u0435\u0440\u0435\u0445\u043e\u0434 " + this.Lcfx70_cfpl_core_RedRR__f_a1) + " &times; ") + this.Lcfx70_cfpl_core_RedRR__f_b1) + " &minus; ") + this.Lcfx70_cfpl_core_RedRR__f_a2) + " &times; ") + this.Lcfx70_cfpl_core_RedRR__f_b2) + " l=") + this.Lcfx70_cfpl_core_RedRR__f_h)
});
$c_Lcfx70_cfpl_core_RedRR.prototype.meshes__Lcfx70_threejsfacade_THREE$Object3D = (function() {
  return this.Lcfx70_cfpl_core_RedRR__f_meshes
});
function $as_Lcfx70_cfpl_core_RedRR(obj) {
  return (((obj instanceof $c_Lcfx70_cfpl_core_RedRR) || (obj === null)) ? obj : $throwClassCastException(obj, "cfx70.cfpl.core.RedRR"))
}
function $isArrayOf_Lcfx70_cfpl_core_RedRR(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lcfx70_cfpl_core_RedRR)))
}
function $asArrayOf_Lcfx70_cfpl_core_RedRR(obj, depth) {
  return (($isArrayOf_Lcfx70_cfpl_core_RedRR(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lcfx70.cfpl.core.RedRR;", depth))
}
var $d_Lcfx70_cfpl_core_RedRR = new $TypeData().initClass({
  Lcfx70_cfpl_core_RedRR: 0
}, false, "cfx70.cfpl.core.RedRR", {
  Lcfx70_cfpl_core_RedRR: 1,
  Lcfx70_cfpl_core_Model: 1,
  O: 1
});
$c_Lcfx70_cfpl_core_RedRR.prototype.$classData = $d_Lcfx70_cfpl_core_RedRR;
/** @constructor */
function $c_Lcfx70_cfpl_draft_HorDim(p1, p2, ly, scl) {
  this.Lcfx70_cfpl_draft_Dim__f_p1 = null;
  this.Lcfx70_cfpl_draft_Dim__f_p2 = null;
  this.Lcfx70_cfpl_draft_HorDim__f_dist = 0.0;
  $ct_Lcfx70_cfpl_draft_Dim__Lcfx70_vecquat_Vec__Lcfx70_vecquat_Vec__D__(this, p1, p2, scl);
  var this$1 = this.Lcfx70_cfpl_draft_Dim__f_p2;
  var $$x1 = $uD(this$1.Lcfx70_vecquat_Vec__f_crds.apply__I__O(0));
  var this$2 = this.Lcfx70_cfpl_draft_Dim__f_p1;
  this.Lcfx70_cfpl_draft_HorDim__f_dist = ($$x1 - $uD(this$2.Lcfx70_vecquat_Vec__f_crds.apply__I__O(0)))
}
$c_Lcfx70_cfpl_draft_HorDim.prototype = new $h_Lcfx70_cfpl_draft_Dim();
$c_Lcfx70_cfpl_draft_HorDim.prototype.constructor = $c_Lcfx70_cfpl_draft_HorDim;
/** @constructor */
function $h_Lcfx70_cfpl_draft_HorDim() {
  /*<skip>*/
}
$h_Lcfx70_cfpl_draft_HorDim.prototype = $c_Lcfx70_cfpl_draft_HorDim.prototype;
$c_Lcfx70_cfpl_draft_HorDim.prototype.draw__Lorg_scalajs_dom_CanvasRenderingContext2D__V = (function(ctx) {
  var x1 = this.Lcfx70_cfpl_draft_HorDim__f_dist;
  if ((x1 > $m_Lcfx70_vecquat_package$().Lcfx70_vecquat_package$__f_epsilon)) {
    ctx.save();
    ctx.beginPath();
    ctx.lineWidth = $m_Lcfx70_cfpl_draft_Dim$().Lcfx70_cfpl_draft_Dim$__f_lineWidth;
    new $c_Lcfx70_cfpl_core_Helpers2d$RichContext(ctx).M__D__D__Lcfx70_cfpl_core_Helpers2d$RichContext(0.0, 0.0).L__D__D__Lcfx70_cfpl_core_Helpers2d$RichContext(500.0, 500.0);
    ctx.stroke();
    ctx.restore()
  }
});
var $d_Lcfx70_cfpl_draft_HorDim = new $TypeData().initClass({
  Lcfx70_cfpl_draft_HorDim: 0
}, false, "cfx70.cfpl.draft.HorDim", {
  Lcfx70_cfpl_draft_HorDim: 1,
  Lcfx70_cfpl_draft_Dim: 1,
  O: 1
});
$c_Lcfx70_cfpl_draft_HorDim.prototype.$classData = $d_Lcfx70_cfpl_draft_HorDim;
/** @constructor */
function $c_Lcfx70_cfpl_draft_RedCCDraft(m) {
  this.Lcfx70_cfpl_draft_Draft__f_model = null;
  this.Lcfx70_cfpl_draft_Draft__f_mscl = 0.0;
  $ct_Lcfx70_cfpl_draft_Draft__Lcfx70_cfpl_core_Model__(this, m)
}
$c_Lcfx70_cfpl_draft_RedCCDraft.prototype = new $h_Lcfx70_cfpl_draft_Draft();
$c_Lcfx70_cfpl_draft_RedCCDraft.prototype.constructor = $c_Lcfx70_cfpl_draft_RedCCDraft;
/** @constructor */
function $h_Lcfx70_cfpl_draft_RedCCDraft() {
  /*<skip>*/
}
$h_Lcfx70_cfpl_draft_RedCCDraft.prototype = $c_Lcfx70_cfpl_draft_RedCCDraft.prototype;
$c_Lcfx70_cfpl_draft_RedCCDraft.prototype.draw__Lorg_scalajs_dom_CanvasRenderingContext2D__V = (function(ctx) {
  ctx.save();
  this.beginDraw__Lorg_scalajs_dom_CanvasRenderingContext2D__V(ctx);
  ctx.lineWidth = $m_Lcfx70_cfpl_draft_Draft$().Lcfx70_cfpl_draft_Draft$__f_thinlineWidth;
  ctx.beginPath();
  ctx.scale(1.0, (-1.0));
  ctx.translate(0.0, (($m_Lcfx70_cfpl_draft_Draft$().Lcfx70_cfpl_draft_Draft$__f_vsz / 4) | 0));
  var array = [0.0, 0.0, 1.0];
  var crds = $ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), array);
  var $$x1 = $ct_Lcfx70_vecquat_Vec__sc_Seq__(new $c_Lcfx70_vecquat_Vec(), crds);
  var this$4 = $as_Lcfx70_cfpl_core_RedCC(this.Lcfx70_cfpl_draft_Draft__f_model).Lcfx70_cfpl_core_RedCC__f_cn;
  this.trianglesVisible__Lcfx70_vecquat_Vec__sc_Seq__Lorg_scalajs_dom_CanvasRenderingContext2D__V($$x1, $m_Lcfx70_cfpl_core_BGeometry$().shell__sc_Seq__sc_Seq__sc_Seq(this$4.Lcfx70_cfpl_core_BCone__f_bpts, this$4.Lcfx70_cfpl_core_BCone__f_tpts), ctx);
  ctx.stroke();
  ctx.restore()
});
var $d_Lcfx70_cfpl_draft_RedCCDraft = new $TypeData().initClass({
  Lcfx70_cfpl_draft_RedCCDraft: 0
}, false, "cfx70.cfpl.draft.RedCCDraft", {
  Lcfx70_cfpl_draft_RedCCDraft: 1,
  Lcfx70_cfpl_draft_Draft: 1,
  O: 1
});
$c_Lcfx70_cfpl_draft_RedCCDraft.prototype.$classData = $d_Lcfx70_cfpl_draft_RedCCDraft;
/** @constructor */
function $c_Lcfx70_cfpl_draft_RedRCDraft(m) {
  this.Lcfx70_cfpl_draft_Draft__f_model = null;
  this.Lcfx70_cfpl_draft_Draft__f_mscl = 0.0;
  $ct_Lcfx70_cfpl_draft_Draft__Lcfx70_cfpl_core_Model__(this, m)
}
$c_Lcfx70_cfpl_draft_RedRCDraft.prototype = new $h_Lcfx70_cfpl_draft_Draft();
$c_Lcfx70_cfpl_draft_RedRCDraft.prototype.constructor = $c_Lcfx70_cfpl_draft_RedRCDraft;
/** @constructor */
function $h_Lcfx70_cfpl_draft_RedRCDraft() {
  /*<skip>*/
}
$h_Lcfx70_cfpl_draft_RedRCDraft.prototype = $c_Lcfx70_cfpl_draft_RedRCDraft.prototype;
$c_Lcfx70_cfpl_draft_RedRCDraft.prototype.draw__Lorg_scalajs_dom_CanvasRenderingContext2D__V = (function(ctx) {
  ctx.save();
  this.beginDraw__Lorg_scalajs_dom_CanvasRenderingContext2D__V(ctx);
  ctx.beginPath();
  ctx.translate(0.0, (($m_Lcfx70_cfpl_draft_Draft$().Lcfx70_cfpl_draft_Draft$__f_vsz / 4) | 0));
  ctx.lineWidth = $m_Lcfx70_cfpl_draft_Draft$().Lcfx70_cfpl_draft_Draft$__f_lineWidth;
  var this$3 = new $c_Lcfx70_cfpl_core_Helpers2d$RichContext(ctx);
  var this$2 = $as_Lcfx70_cfpl_core_RedRC(this.Lcfx70_cfpl_draft_Draft__f_model).Lcfx70_cfpl_core_RedRC__f_cn;
  var pts = $m_Lcfx70_cfpl_core_BGeometry$().fan__sc_Seq__sc_Seq__sc_Seq(this$2.Lcfx70_cfpl_core_BRCRed__f_bpts, this$2.Lcfx70_cfpl_core_BRCRed__f_tpts);
  this$3.polygon__Lcfx70_vecquat_Vec__sc_Seq__Lcfx70_cfpl_core_Helpers2d$RichContext($as_Lcfx70_vecquat_Vec(pts.head__O()), $as_sc_Seq(pts.tail__O()));
  ctx.stroke();
  ctx.beginPath();
  new $c_Lcfx70_cfpl_core_Helpers2d$RichContext(ctx).Lcfx70_cfpl_core_Helpers2d$RichContext__f_ctx.fillStyle = "#ffffff";
  var array = [0.0, 0.0, 1.0];
  var crds = $ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), array);
  var $$x1 = $ct_Lcfx70_vecquat_Vec__sc_Seq__(new $c_Lcfx70_vecquat_Vec(), crds);
  var this$9 = $as_Lcfx70_cfpl_core_RedRC(this.Lcfx70_cfpl_draft_Draft__f_model).Lcfx70_cfpl_core_RedRC__f_cn;
  this.trianglesVisible__Lcfx70_vecquat_Vec__sc_Seq__Lorg_scalajs_dom_CanvasRenderingContext2D__V($$x1, $m_Lcfx70_cfpl_core_BGeometry$().fan__sc_Seq__sc_Seq__sc_Seq(this$9.Lcfx70_cfpl_core_BRCRed__f_bpts, this$9.Lcfx70_cfpl_core_BRCRed__f_tpts), ctx);
  ctx.fill();
  ctx.beginPath();
  ctx.lineWidth = $m_Lcfx70_cfpl_draft_Draft$().Lcfx70_cfpl_draft_Draft$__f_thinlineWidth;
  var array$1 = [0.0, 0.0, 1.0];
  var crds$1 = $ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), array$1);
  var $$x2 = $ct_Lcfx70_vecquat_Vec__sc_Seq__(new $c_Lcfx70_vecquat_Vec(), crds$1);
  var this$13 = $as_Lcfx70_cfpl_core_RedRC(this.Lcfx70_cfpl_draft_Draft__f_model).Lcfx70_cfpl_core_RedRC__f_cn;
  this.trianglesVisible__Lcfx70_vecquat_Vec__sc_Seq__Lorg_scalajs_dom_CanvasRenderingContext2D__V($$x2, $m_Lcfx70_cfpl_core_BGeometry$().fan__sc_Seq__sc_Seq__sc_Seq(this$13.Lcfx70_cfpl_core_BRCRed__f_bpts, this$13.Lcfx70_cfpl_core_BRCRed__f_tpts), ctx);
  ctx.stroke();
  ctx.beginPath();
  var this$15 = new $c_Lcfx70_cfpl_core_Helpers2d$RichContext(ctx);
  var pts$1 = $as_Lcfx70_cfpl_core_RedRC(this.Lcfx70_cfpl_draft_Draft__f_model).Lcfx70_cfpl_core_RedRC__f_cn.Lcfx70_cfpl_core_BRCRed__f_tpts;
  this$15.polygon__Lcfx70_vecquat_Vec__sc_Seq__Lcfx70_cfpl_core_Helpers2d$RichContext($as_Lcfx70_vecquat_Vec(pts$1.head__O()), $as_sc_Seq(pts$1.tail__O()));
  ctx.fill();
  ctx.beginPath();
  ctx.lineWidth = $m_Lcfx70_cfpl_draft_Draft$().Lcfx70_cfpl_draft_Draft$__f_lineWidth;
  var this$17 = new $c_Lcfx70_cfpl_core_Helpers2d$RichContext(ctx);
  var pts$2 = $as_Lcfx70_cfpl_core_RedRC(this.Lcfx70_cfpl_draft_Draft__f_model).Lcfx70_cfpl_core_RedRC__f_cn.Lcfx70_cfpl_core_BRCRed__f_tpts;
  this$17.polygon__Lcfx70_vecquat_Vec__sc_Seq__Lcfx70_cfpl_core_Helpers2d$RichContext($as_Lcfx70_vecquat_Vec(pts$2.head__O()), $as_sc_Seq(pts$2.tail__O()));
  ctx.stroke();
  var $$x4 = $m_Lcfx70_cfpl_core_BGeometry$();
  var $$x3 = $as_Lcfx70_cfpl_core_RedRC(this.Lcfx70_cfpl_draft_Draft__f_model).Lcfx70_cfpl_core_RedRC__f_cn.Lcfx70_cfpl_core_BRCRed__f_d;
  var array$2 = [$as_Lcfx70_cfpl_core_RedRC(this.Lcfx70_cfpl_draft_Draft__f_model).Lcfx70_cfpl_core_RedRC__f_cn.Lcfx70_cfpl_core_BRCRed__f_da, $as_Lcfx70_cfpl_core_RedRC(this.Lcfx70_cfpl_draft_Draft__f_model).Lcfx70_cfpl_core_RedRC__f_cn.Lcfx70_cfpl_core_BRCRed__f_db, 0.0];
  var crds$2 = $ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), array$2);
  var sp1 = $$x4.roundPts__D__Lcfx70_vecquat_Vec__D__D__sc_Seq(($$x3 / 2.0), $ct_Lcfx70_vecquat_Vec__sc_Seq__(new $c_Lcfx70_vecquat_Vec(), crds$2), 1.5707963267948966, 4.71238898038469);
  var $$x6 = $m_Lcfx70_cfpl_core_BGeometry$();
  var $$x5 = $as_Lcfx70_cfpl_core_RedRC(this.Lcfx70_cfpl_draft_Draft__f_model).Lcfx70_cfpl_core_RedRC__f_cn.Lcfx70_cfpl_core_BRCRed__f_d;
  var array$3 = [($as_Lcfx70_cfpl_core_RedRC(this.Lcfx70_cfpl_draft_Draft__f_model).Lcfx70_cfpl_core_RedRC__f_cn.Lcfx70_cfpl_core_BRCRed__f_da + ($as_Lcfx70_cfpl_core_RedRC(this.Lcfx70_cfpl_draft_Draft__f_model).Lcfx70_cfpl_core_RedRC__f_cn.Lcfx70_cfpl_core_BRCRed__f_d / 7.0)), $as_Lcfx70_cfpl_core_RedRC(this.Lcfx70_cfpl_draft_Draft__f_model).Lcfx70_cfpl_core_RedRC__f_cn.Lcfx70_cfpl_core_BRCRed__f_db, 0.0];
  var crds$3 = $ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), array$3);
  var sp2 = $$x6.roundPts__D__Lcfx70_vecquat_Vec__D__D__sc_Seq(($$x5 / 2.0), $ct_Lcfx70_vecquat_Vec__sc_Seq__(new $c_Lcfx70_vecquat_Vec(), crds$3), 2.0943951023931953, 4.1887902047863905);
  var $$x7 = $as_sc_GenTraversableOnce(sp2.reverse__O());
  var this$24 = $m_sc_Seq$();
  var sp = $as_sc_Seq(sp1.$plus$plus__sc_GenTraversableOnce__scg_CanBuildFrom__O($$x7, this$24.scg_GenTraversableFactory__f_ReusableCBFInstance));
  ctx.beginPath();
  new $c_Lcfx70_cfpl_core_Helpers2d$RichContext(ctx).Lcfx70_cfpl_core_Helpers2d$RichContext__f_ctx.fillStyle = "#000000";
  var this$28 = new $c_Lcfx70_cfpl_core_Helpers2d$RichContext(ctx);
  this$28.polygon__Lcfx70_vecquat_Vec__sc_Seq__Lcfx70_cfpl_core_Helpers2d$RichContext($as_Lcfx70_vecquat_Vec(sp.head__O()), $as_sc_Seq(sp.tail__O()));
  ctx.fill();
  ctx.lineWidth = $m_Lcfx70_cfpl_draft_Draft$().Lcfx70_cfpl_draft_Draft$__f_lineWidth;
  ctx.translate(0.0, ((((-$m_Lcfx70_cfpl_draft_Draft$().Lcfx70_cfpl_draft_Draft$__f_vsz) | 0) / 2) | 0));
  ctx.scale(1.0, (-1.0));
  ctx.beginPath();
  var this$32 = new $c_Lcfx70_cfpl_core_Helpers2d$RichContext(ctx);
  var $$x9 = $as_Lcfx70_cfpl_core_RedRC(this.Lcfx70_cfpl_draft_Draft__f_model).Lcfx70_cfpl_core_RedRC__f_cn.tophalf__sc_Seq();
  var $$x8 = new $c_sjsr_AnonFunction1(((x$4$2) => {
    var x$4 = $as_Lcfx70_vecquat_Vec(x$4$2);
    return x$4.xz__Lcfx70_vecquat_Vec()
  }));
  var this$31 = $m_sc_Seq$();
  var pts$3 = $as_sc_Seq($$x9.map__F1__scg_CanBuildFrom__O($$x8, this$31.scg_GenTraversableFactory__f_ReusableCBFInstance));
  this$32.polygon__Lcfx70_vecquat_Vec__sc_Seq__Lcfx70_cfpl_core_Helpers2d$RichContext($as_Lcfx70_vecquat_Vec(pts$3.head__O()), $as_sc_Seq(pts$3.tail__O()));
  var this$35 = new $c_Lcfx70_cfpl_core_Helpers2d$RichContext(ctx);
  var $$x11 = $as_Lcfx70_cfpl_core_RedRC(this.Lcfx70_cfpl_draft_Draft__f_model).Lcfx70_cfpl_core_RedRC__f_fcb.top__sc_Seq();
  var $$x10 = new $c_sjsr_AnonFunction1(((x$5$2) => {
    var x$5 = $as_Lcfx70_vecquat_Vec(x$5$2);
    return x$5.xz__Lcfx70_vecquat_Vec()
  }));
  var this$34 = $m_sc_Seq$();
  var pts$4 = $as_sc_Seq($$x11.map__F1__scg_CanBuildFrom__O($$x10, this$34.scg_GenTraversableFactory__f_ReusableCBFInstance));
  this$35.polygon__Lcfx70_vecquat_Vec__sc_Seq__Lcfx70_cfpl_core_Helpers2d$RichContext($as_Lcfx70_vecquat_Vec(pts$4.head__O()), $as_sc_Seq(pts$4.tail__O()));
  var this$38 = new $c_Lcfx70_cfpl_core_Helpers2d$RichContext(ctx);
  var $$x13 = $as_Lcfx70_cfpl_core_RedRC(this.Lcfx70_cfpl_draft_Draft__f_model).Lcfx70_cfpl_core_RedRC__f_fct.tophalf__sc_Seq();
  var $$x12 = new $c_sjsr_AnonFunction1(((x$6$2) => {
    var x$6 = $as_Lcfx70_vecquat_Vec(x$6$2);
    return x$6.xz__Lcfx70_vecquat_Vec()
  }));
  var this$37 = $m_sc_Seq$();
  var pts$5 = $as_sc_Seq($$x13.map__F1__scg_CanBuildFrom__O($$x12, this$37.scg_GenTraversableFactory__f_ReusableCBFInstance));
  this$38.polygon__Lcfx70_vecquat_Vec__sc_Seq__Lcfx70_cfpl_core_Helpers2d$RichContext($as_Lcfx70_vecquat_Vec(pts$5.head__O()), $as_sc_Seq(pts$5.tail__O()));
  ctx.stroke();
  ctx.restore()
});
var $d_Lcfx70_cfpl_draft_RedRCDraft = new $TypeData().initClass({
  Lcfx70_cfpl_draft_RedRCDraft: 0
}, false, "cfx70.cfpl.draft.RedRCDraft", {
  Lcfx70_cfpl_draft_RedRCDraft: 1,
  Lcfx70_cfpl_draft_Draft: 1,
  O: 1
});
$c_Lcfx70_cfpl_draft_RedRCDraft.prototype.$classData = $d_Lcfx70_cfpl_draft_RedRCDraft;
/** @constructor */
function $c_Lcfx70_cfpl_draft_RedRRDraft(m) {
  this.Lcfx70_cfpl_draft_Draft__f_model = null;
  this.Lcfx70_cfpl_draft_Draft__f_mscl = 0.0;
  $ct_Lcfx70_cfpl_draft_Draft__Lcfx70_cfpl_core_Model__(this, m)
}
$c_Lcfx70_cfpl_draft_RedRRDraft.prototype = new $h_Lcfx70_cfpl_draft_Draft();
$c_Lcfx70_cfpl_draft_RedRRDraft.prototype.constructor = $c_Lcfx70_cfpl_draft_RedRRDraft;
/** @constructor */
function $h_Lcfx70_cfpl_draft_RedRRDraft() {
  /*<skip>*/
}
$h_Lcfx70_cfpl_draft_RedRRDraft.prototype = $c_Lcfx70_cfpl_draft_RedRRDraft.prototype;
$c_Lcfx70_cfpl_draft_RedRRDraft.prototype.draw__Lorg_scalajs_dom_CanvasRenderingContext2D__V = (function(ctx) {
  ctx.save();
  this.beginDraw__Lorg_scalajs_dom_CanvasRenderingContext2D__V(ctx);
  ctx.lineWidth = $m_Lcfx70_cfpl_draft_Draft$().Lcfx70_cfpl_draft_Draft$__f_lineWidth;
  ctx.beginPath();
  ctx.translate(0.0, (($m_Lcfx70_cfpl_draft_Draft$().Lcfx70_cfpl_draft_Draft$__f_vsz / 4) | 0));
  var array = [0.0, 0.0, 1.0];
  var crds = $ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), array);
  var $$x2 = $ct_Lcfx70_vecquat_Vec__sc_Seq__(new $c_Lcfx70_vecquat_Vec(), crds);
  var $$x1 = $m_sc_Seq$();
  var array$1 = [$as_Lcfx70_cfpl_core_RedRR(this.Lcfx70_cfpl_draft_Draft__f_model).Lcfx70_cfpl_core_RedRR__f_cn.top__sc_Seq(), $as_Lcfx70_cfpl_core_RedRR(this.Lcfx70_cfpl_draft_Draft__f_model).Lcfx70_cfpl_core_RedRR__f_cn.bottom__sc_Seq(), $as_Lcfx70_cfpl_core_RedRR(this.Lcfx70_cfpl_draft_Draft__f_model).Lcfx70_cfpl_core_RedRR__f_cn.left__sc_Seq(), $as_Lcfx70_cfpl_core_RedRR(this.Lcfx70_cfpl_draft_Draft__f_model).Lcfx70_cfpl_core_RedRR__f_cn.right__sc_Seq()];
  this.drawVisible__Lcfx70_vecquat_Vec__sc_Seq__Lorg_scalajs_dom_CanvasRenderingContext2D__V($$x2, $as_sc_Seq($$x1.apply__sc_Seq__sc_GenTraversable($ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), array$1))), ctx);
  var this$6 = $as_Lcfx70_cfpl_core_RedRR(this.Lcfx70_cfpl_draft_Draft__f_model).Lcfx70_cfpl_core_RedRR__f_cn;
  var f = $as_sc_Seq(this$6.Lcfx70_cfpl_core_BPyramid__f_tpts.init__O());
  var this$8 = new $c_Lcfx70_cfpl_core_Helpers2d$RichContext(ctx);
  this$8.polygon__Lcfx70_vecquat_Vec__sc_Seq__Lcfx70_cfpl_core_Helpers2d$RichContext($as_Lcfx70_vecquat_Vec(f.head__O()), $as_sc_Seq(f.tail__O()));
  ctx.stroke();
  ctx.beginPath();
  ctx.fillStyle = "#000";
  var this$22 = new $c_Lcfx70_cfpl_core_Helpers2d$RichContext(ctx);
  var st = $as_Lcfx70_vecquat_Vec(f.apply__I__O(0));
  var $$x9 = $as_Lcfx70_vecquat_Vec(f.apply__I__O(1));
  var $$x8 = $as_Lcfx70_vecquat_Vec(f.apply__I__O(2));
  var this$11 = $as_Lcfx70_vecquat_Vec(f.apply__I__O(1));
  var $$x7 = $uD(this$11.Lcfx70_vecquat_Vec__f_crds.apply__I__O(0));
  var this$12 = $as_Lcfx70_vecquat_Vec(f.apply__I__O(0));
  var $$x6 = $uD(this$12.Lcfx70_vecquat_Vec__f_crds.apply__I__O(0));
  var this$13 = $as_Lcfx70_vecquat_Vec(f.apply__I__O(1));
  var $$x5 = $uD(this$13.Lcfx70_vecquat_Vec__f_crds.apply__I__O(0));
  var this$14 = $as_Lcfx70_vecquat_Vec(f.apply__I__O(1));
  var $$x4 = $uD(this$14.Lcfx70_vecquat_Vec__f_crds.apply__I__O(1));
  var this$15 = $as_Lcfx70_vecquat_Vec(f.apply__I__O(1));
  var $$x3 = $uD(this$15.Lcfx70_vecquat_Vec__f_crds.apply__I__O(1));
  var this$16 = $as_Lcfx70_vecquat_Vec(f.apply__I__O(2));
  var array$2 = [($$x7 + (($$x6 - $$x5) / 4.0)), ($$x4 - (($$x3 - $uD(this$16.Lcfx70_vecquat_Vec__f_crds.apply__I__O(1))) / 4.0))];
  var crds$1 = $ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), array$2);
  var array$3 = [$$x9, $$x8, $ct_Lcfx70_vecquat_Vec__sc_Seq__(new $c_Lcfx70_vecquat_Vec(), crds$1)];
  this$22.M__D__D__Lcfx70_cfpl_core_Helpers2d$RichContext($uD(st.Lcfx70_vecquat_Vec__f_crds.apply__I__O(0)), $uD(st.Lcfx70_vecquat_Vec__f_crds.apply__I__O(1)));
  var i = 0;
  var len = $uI(array$3.length);
  while ((i < len)) {
    var index = i;
    var arg1 = array$3[index];
    var pt = $as_Lcfx70_vecquat_Vec(arg1);
    this$22.L__D__D__Lcfx70_cfpl_core_Helpers2d$RichContext($uD(pt.Lcfx70_vecquat_Vec__f_crds.apply__I__O(0)), $uD(pt.Lcfx70_vecquat_Vec__f_crds.apply__I__O(1)));
    i = ((1 + i) | 0)
  };
  this$22.Lcfx70_cfpl_core_Helpers2d$RichContext__f_ctx.closePath();
  ctx.fill();
  var $$x11 = $m_Lcfx70_cfpl_draft_Dim$();
  var array$4 = [0.0, 0.0];
  var crds$2 = $ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), array$4);
  var $$x10 = $ct_Lcfx70_vecquat_Vec__sc_Seq__(new $c_Lcfx70_vecquat_Vec(), crds$2);
  var array$5 = [10.0, 10.0];
  var crds$3 = $ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), array$5);
  $$x11.hor__Lcfx70_vecquat_Vec__Lcfx70_vecquat_Vec__D__D__Lorg_scalajs_dom_CanvasRenderingContext2D__V($$x10, $ct_Lcfx70_vecquat_Vec__sc_Seq__(new $c_Lcfx70_vecquat_Vec(), crds$3), 10.0, 10.0, ctx);
  ctx.lineWidth = $m_Lcfx70_cfpl_draft_Draft$().Lcfx70_cfpl_draft_Draft$__f_lineWidth;
  ctx.translate(0.0, ((-((Math.imul(3, $m_Lcfx70_cfpl_draft_Draft$().Lcfx70_cfpl_draft_Draft$__f_vsz) / 8) | 0)) | 0));
  ctx.scale(1.0, (-1.0));
  ctx.beginPath();
  var this$32 = new $c_Lcfx70_cfpl_core_Helpers2d$RichContext(ctx);
  var $$x13 = $as_Lcfx70_cfpl_core_RedRR(this.Lcfx70_cfpl_draft_Draft__f_model).Lcfx70_cfpl_core_RedRR__f_cn.top__sc_Seq();
  var $$x12 = new $c_sjsr_AnonFunction1(((x$1$2) => {
    var x$1 = $as_Lcfx70_vecquat_Vec(x$1$2);
    return x$1.xz__Lcfx70_vecquat_Vec()
  }));
  var this$31 = $m_sc_Seq$();
  var pts = $as_sc_Seq($$x13.map__F1__scg_CanBuildFrom__O($$x12, this$31.scg_GenTraversableFactory__f_ReusableCBFInstance));
  this$32.polygon__Lcfx70_vecquat_Vec__sc_Seq__Lcfx70_cfpl_core_Helpers2d$RichContext($as_Lcfx70_vecquat_Vec(pts.head__O()), $as_sc_Seq(pts.tail__O()));
  var this$35 = new $c_Lcfx70_cfpl_core_Helpers2d$RichContext(ctx);
  var $$x15 = $as_Lcfx70_cfpl_core_RedRR(this.Lcfx70_cfpl_draft_Draft__f_model).Lcfx70_cfpl_core_RedRR__f_fcb.top__sc_Seq();
  var $$x14 = new $c_sjsr_AnonFunction1(((x$2$2) => {
    var x$2 = $as_Lcfx70_vecquat_Vec(x$2$2);
    return x$2.xz__Lcfx70_vecquat_Vec()
  }));
  var this$34 = $m_sc_Seq$();
  var pts$1 = $as_sc_Seq($$x15.map__F1__scg_CanBuildFrom__O($$x14, this$34.scg_GenTraversableFactory__f_ReusableCBFInstance));
  this$35.polygon__Lcfx70_vecquat_Vec__sc_Seq__Lcfx70_cfpl_core_Helpers2d$RichContext($as_Lcfx70_vecquat_Vec(pts$1.head__O()), $as_sc_Seq(pts$1.tail__O()));
  var this$38 = new $c_Lcfx70_cfpl_core_Helpers2d$RichContext(ctx);
  var $$x17 = $as_Lcfx70_cfpl_core_RedRR(this.Lcfx70_cfpl_draft_Draft__f_model).Lcfx70_cfpl_core_RedRR__f_fct.top__sc_Seq();
  var $$x16 = new $c_sjsr_AnonFunction1(((x$3$2) => {
    var x$3 = $as_Lcfx70_vecquat_Vec(x$3$2);
    return x$3.xz__Lcfx70_vecquat_Vec()
  }));
  var this$37 = $m_sc_Seq$();
  var pts$2 = $as_sc_Seq($$x17.map__F1__scg_CanBuildFrom__O($$x16, this$37.scg_GenTraversableFactory__f_ReusableCBFInstance));
  this$38.polygon__Lcfx70_vecquat_Vec__sc_Seq__Lcfx70_cfpl_core_Helpers2d$RichContext($as_Lcfx70_vecquat_Vec(pts$2.head__O()), $as_sc_Seq(pts$2.tail__O()));
  ctx.stroke();
  ctx.restore()
});
var $d_Lcfx70_cfpl_draft_RedRRDraft = new $TypeData().initClass({
  Lcfx70_cfpl_draft_RedRRDraft: 0
}, false, "cfx70.cfpl.draft.RedRRDraft", {
  Lcfx70_cfpl_draft_RedRRDraft: 1,
  Lcfx70_cfpl_draft_Draft: 1,
  O: 1
});
$c_Lcfx70_cfpl_draft_RedRRDraft.prototype.$classData = $d_Lcfx70_cfpl_draft_RedRRDraft;
/** @constructor */
function $c_jl_Character$() {
  /*<skip>*/
}
$c_jl_Character$.prototype = new $h_O();
$c_jl_Character$.prototype.constructor = $c_jl_Character$;
/** @constructor */
function $h_jl_Character$() {
  /*<skip>*/
}
$h_jl_Character$.prototype = $c_jl_Character$.prototype;
$c_jl_Character$.prototype.toString__I__T = (function(codePoint) {
  if (((codePoint >= 0) && (codePoint < 65536))) {
    return $as_T(String.fromCharCode(codePoint))
  } else if (((codePoint >= 0) && (codePoint <= 1114111))) {
    return $as_T(String.fromCharCode((65535 & (55296 | (((-64) + (codePoint >> 10)) | 0))), (65535 & (56320 | (1023 & codePoint)))))
  } else {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException())
  }
});
var $d_jl_Character$ = new $TypeData().initClass({
  jl_Character$: 0
}, false, "java.lang.Character$", {
  jl_Character$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_Character$.prototype.$classData = $d_jl_Character$;
var $n_jl_Character$;
function $m_jl_Character$() {
  if ((!$n_jl_Character$)) {
    $n_jl_Character$ = new $c_jl_Character$()
  };
  return $n_jl_Character$
}
/** @constructor */
function $c_jl_Integer$() {
  /*<skip>*/
}
$c_jl_Integer$.prototype = new $h_O();
$c_jl_Integer$.prototype.constructor = $c_jl_Integer$;
/** @constructor */
function $h_jl_Integer$() {
  /*<skip>*/
}
$h_jl_Integer$.prototype = $c_jl_Integer$.prototype;
$c_jl_Integer$.prototype.bitCount__I__I = (function(i) {
  var t1 = ((i - (1431655765 & (i >> 1))) | 0);
  var t2 = (((858993459 & t1) + (858993459 & (t1 >> 2))) | 0);
  return (Math.imul(16843009, (252645135 & ((t2 + (t2 >> 4)) | 0))) >> 24)
});
var $d_jl_Integer$ = new $TypeData().initClass({
  jl_Integer$: 0
}, false, "java.lang.Integer$", {
  jl_Integer$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_Integer$.prototype.$classData = $d_jl_Integer$;
var $n_jl_Integer$;
function $m_jl_Integer$() {
  if ((!$n_jl_Integer$)) {
    $n_jl_Integer$ = new $c_jl_Integer$()
  };
  return $n_jl_Integer$
}
/** @constructor */
function $c_jl_Long$() {
  /*<skip>*/
}
$c_jl_Long$.prototype = new $h_O();
$c_jl_Long$.prototype.constructor = $c_jl_Long$;
/** @constructor */
function $h_jl_Long$() {
  /*<skip>*/
}
$h_jl_Long$.prototype = $c_jl_Long$.prototype;
$c_jl_Long$.prototype.java$lang$Long$$toHexString__I__I__T = (function(lo, hi) {
  if ((hi !== 0)) {
    var $$x1 = $as_T($uD((hi >>> 0.0)).toString(16));
    var s = $as_T($uD((lo >>> 0.0)).toString(16));
    var beginIndex = s.length;
    if (((beginIndex < 0) || (beginIndex > 8))) {
      $charAt("00000000", beginIndex)
    };
    return ($$x1 + (("" + $as_T("00000000".substring(beginIndex))) + s))
  } else {
    return $as_T($uD((lo >>> 0.0)).toString(16))
  }
});
$c_jl_Long$.prototype.java$lang$Long$$toOctalString__I__I__T = (function(lo, hi) {
  var lp = (1073741823 & lo);
  var mp = (1073741823 & ((((lo >>> 30) | 0) + (hi << 2)) | 0));
  var hp = ((hi >>> 28) | 0);
  if ((hp !== 0)) {
    var $$x2 = $as_T($uD((hp >>> 0.0)).toString(8));
    var s = $as_T($uD((mp >>> 0.0)).toString(8));
    var beginIndex = s.length;
    if (((beginIndex < 0) || (beginIndex > 10))) {
      $charAt("0000000000", beginIndex)
    };
    var $$x1 = $as_T("0000000000".substring(beginIndex));
    var s$1 = $as_T($uD((lp >>> 0.0)).toString(8));
    var beginIndex$1 = s$1.length;
    if (((beginIndex$1 < 0) || (beginIndex$1 > 10))) {
      $charAt("0000000000", beginIndex$1)
    };
    return (($$x2 + (("" + $$x1) + s)) + (("" + $as_T("0000000000".substring(beginIndex$1))) + s$1))
  } else if ((mp !== 0)) {
    var $$x3 = $as_T($uD((mp >>> 0.0)).toString(8));
    var s$2 = $as_T($uD((lp >>> 0.0)).toString(8));
    var beginIndex$2 = s$2.length;
    if (((beginIndex$2 < 0) || (beginIndex$2 > 10))) {
      $charAt("0000000000", beginIndex$2)
    };
    return ($$x3 + (("" + $as_T("0000000000".substring(beginIndex$2))) + s$2))
  } else {
    return $as_T($uD((lp >>> 0.0)).toString(8))
  }
});
var $d_jl_Long$ = new $TypeData().initClass({
  jl_Long$: 0
}, false, "java.lang.Long$", {
  jl_Long$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_Long$.prototype.$classData = $d_jl_Long$;
var $n_jl_Long$;
function $m_jl_Long$() {
  if ((!$n_jl_Long$)) {
    $n_jl_Long$ = new $c_jl_Long$()
  };
  return $n_jl_Long$
}
/** @constructor */
function $c_jl_Number() {
  /*<skip>*/
}
$c_jl_Number.prototype = new $h_O();
$c_jl_Number.prototype.constructor = $c_jl_Number;
/** @constructor */
function $h_jl_Number() {
  /*<skip>*/
}
$h_jl_Number.prototype = $c_jl_Number.prototype;
function $is_jl_Number(obj) {
  return (((obj instanceof $c_jl_Number) || ((typeof obj) === "number")) || (obj instanceof $c_RTLong))
}
function $as_jl_Number(obj) {
  return (($is_jl_Number(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.Number"))
}
function $isArrayOf_jl_Number(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Number)))
}
function $asArrayOf_jl_Number(obj, depth) {
  return (($isArrayOf_jl_Number(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Number;", depth))
}
/** @constructor */
function $c_jl_String$() {
  /*<skip>*/
}
$c_jl_String$.prototype = new $h_O();
$c_jl_String$.prototype.constructor = $c_jl_String$;
/** @constructor */
function $h_jl_String$() {
  /*<skip>*/
}
$h_jl_String$.prototype = $c_jl_String$.prototype;
$c_jl_String$.prototype.format__T__AO__T = (function(format, args) {
  return $ct_ju_Formatter__(new $c_ju_Formatter()).format__T__AO__ju_Formatter(format, args).toString__T()
});
var $d_jl_String$ = new $TypeData().initClass({
  jl_String$: 0
}, false, "java.lang.String$", {
  jl_String$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_String$.prototype.$classData = $d_jl_String$;
var $n_jl_String$;
function $m_jl_String$() {
  if ((!$n_jl_String$)) {
    $n_jl_String$ = new $c_jl_String$()
  };
  return $n_jl_String$
}
function $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, e, enableSuppression, writableStackTrace) {
  $thiz.jl_Throwable__f_s = s;
  if (writableStackTrace) {
    $thiz.fillInStackTrace__jl_Throwable()
  };
  return $thiz
}
class $c_jl_Throwable extends Error {
  constructor() {
    super();
    this.jl_Throwable__f_s = null
  };
  getMessage__T() {
    return this.jl_Throwable__f_s
  };
  fillInStackTrace__jl_Throwable() {
    var $$x1 = this;
    var reference = (false ? $$x1.sjs_js_JavaScriptException__f_exception : $$x1);
    var identifyingString = Object.prototype.toString.call(reference);
    if ((identifyingString !== "[object Error]")) {
      if ((Error.captureStackTrace === (void 0))) {
        new Error()
      } else {
        Error.captureStackTrace(this)
      }
    };
    return this
  };
  toString__T() {
    var className = $objectClassName(this);
    var message = this.getMessage__T();
    return ((message === null) ? className : ((className + ": ") + message))
  };
  $js$exported$meth$toString__O() {
    return this.toString__T()
  };
  $js$exported$prop$name__O() {
    return $objectClassName(this)
  };
  $js$exported$prop$message__O() {
    var m = this.getMessage__T();
    return ((m === null) ? "" : m)
  };
  hashCode__I() {
    return $c_O.prototype.hashCode__I.call(this)
  };
  equals__O__Z(that) {
    return $c_O.prototype.equals__O__Z.call(this, that)
  };
  get "message"() {
    return this.$js$exported$prop$message__O()
  };
  get "name"() {
    return this.$js$exported$prop$name__O()
  };
  "toString"() {
    return this.$js$exported$meth$toString__O()
  };
}
function $as_jl_Throwable(obj) {
  return (((obj instanceof $c_jl_Throwable) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.Throwable"))
}
function $isArrayOf_jl_Throwable(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Throwable)))
}
function $asArrayOf_jl_Throwable(obj, depth) {
  return (($isArrayOf_jl_Throwable(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Throwable;", depth))
}
/** @constructor */
function $c_ju_Formatter$RootLocaleInfo$() {
  /*<skip>*/
}
$c_ju_Formatter$RootLocaleInfo$.prototype = new $h_ju_Formatter$LocaleInfo();
$c_ju_Formatter$RootLocaleInfo$.prototype.constructor = $c_ju_Formatter$RootLocaleInfo$;
/** @constructor */
function $h_ju_Formatter$RootLocaleInfo$() {
  /*<skip>*/
}
$h_ju_Formatter$RootLocaleInfo$.prototype = $c_ju_Formatter$RootLocaleInfo$.prototype;
var $d_ju_Formatter$RootLocaleInfo$ = new $TypeData().initClass({
  ju_Formatter$RootLocaleInfo$: 0
}, false, "java.util.Formatter$RootLocaleInfo$", {
  ju_Formatter$RootLocaleInfo$: 1,
  ju_Formatter$LocaleInfo: 1,
  O: 1
});
$c_ju_Formatter$RootLocaleInfo$.prototype.$classData = $d_ju_Formatter$RootLocaleInfo$;
var $n_ju_Formatter$RootLocaleInfo$;
function $m_ju_Formatter$RootLocaleInfo$() {
  if ((!$n_ju_Formatter$RootLocaleInfo$)) {
    $n_ju_Formatter$RootLocaleInfo$ = new $c_ju_Formatter$RootLocaleInfo$()
  };
  return $n_ju_Formatter$RootLocaleInfo$
}
/** @constructor */
function $c_s_Predef$$anon$1() {
  /*<skip>*/
}
$c_s_Predef$$anon$1.prototype = new $h_O();
$c_s_Predef$$anon$1.prototype.constructor = $c_s_Predef$$anon$1;
/** @constructor */
function $h_s_Predef$$anon$1() {
  /*<skip>*/
}
$h_s_Predef$$anon$1.prototype = $c_s_Predef$$anon$1.prototype;
$c_s_Predef$$anon$1.prototype.apply__scm_Builder = (function() {
  return $ct_scm_StringBuilder__(new $c_scm_StringBuilder())
});
$c_s_Predef$$anon$1.prototype.apply__O__scm_Builder = (function(from) {
  $as_T(from);
  return $ct_scm_StringBuilder__(new $c_scm_StringBuilder())
});
var $d_s_Predef$$anon$1 = new $TypeData().initClass({
  s_Predef$$anon$1: 0
}, false, "scala.Predef$$anon$1", {
  s_Predef$$anon$1: 1,
  O: 1,
  scg_CanBuildFrom: 1
});
$c_s_Predef$$anon$1.prototype.$classData = $d_s_Predef$$anon$1;
function $p_sc_GenMap$__liftedTree1$1__sc_GenMap__sc_GenMapLike__Z($thiz, thatMap$1, thisMap$1) {
  try {
    var checker = new $c_sc_GenMap$$anon$1(thatMap$1);
    return thisMap$1.forall__F1__Z(checker)
  } catch (e) {
    if ((e instanceof $c_jl_ClassCastException)) {
      $as_jl_ClassCastException(e);
      return false
    } else {
      throw e
    }
  }
}
/** @constructor */
function $c_sc_GenMap$() {
  $n_sc_GenMap$ = this;
  new $c_scg_GenMapFactory$MapCanBuildFrom(this)
}
$c_sc_GenMap$.prototype = new $h_scg_GenMapFactory();
$c_sc_GenMap$.prototype.constructor = $c_sc_GenMap$;
/** @constructor */
function $h_sc_GenMap$() {
  /*<skip>*/
}
$h_sc_GenMap$.prototype = $c_sc_GenMap$.prototype;
$c_sc_GenMap$.prototype.mapEquals__sc_GenMapLike__sc_GenMap__Z = (function(thisMap, thatMap) {
  return ((thisMap === thatMap) || ((thisMap.size__I() === thatMap.size__I()) && $p_sc_GenMap$__liftedTree1$1__sc_GenMap__sc_GenMapLike__Z(this, thatMap, thisMap)))
});
$c_sc_GenMap$.prototype.empty__sc_GenMap = (function() {
  $m_sci_Map$();
  return $m_sci_Map$EmptyMap$()
});
var $d_sc_GenMap$ = new $TypeData().initClass({
  sc_GenMap$: 0
}, false, "scala.collection.GenMap$", {
  sc_GenMap$: 1,
  scg_GenMapFactory: 1,
  O: 1
});
$c_sc_GenMap$.prototype.$classData = $d_sc_GenMap$;
var $n_sc_GenMap$;
function $m_sc_GenMap$() {
  if ((!$n_sc_GenMap$)) {
    $n_sc_GenMap$ = new $c_sc_GenMap$()
  };
  return $n_sc_GenMap$
}
/** @constructor */
function $c_sc_TraversableLike$WithFilter(outer, p) {
  this.sc_TraversableLike$WithFilter__f_p = null;
  this.sc_TraversableLike$WithFilter__f_$outer = null;
  this.sc_TraversableLike$WithFilter__f_p = p;
  if ((outer === null)) {
    throw null
  } else {
    this.sc_TraversableLike$WithFilter__f_$outer = outer
  }
}
$c_sc_TraversableLike$WithFilter.prototype = new $h_O();
$c_sc_TraversableLike$WithFilter.prototype.constructor = $c_sc_TraversableLike$WithFilter;
/** @constructor */
function $h_sc_TraversableLike$WithFilter() {
  /*<skip>*/
}
$h_sc_TraversableLike$WithFilter.prototype = $c_sc_TraversableLike$WithFilter.prototype;
$c_sc_TraversableLike$WithFilter.prototype.map__F1__scg_CanBuildFrom__O = (function(f, bf) {
  var b = bf.apply__O__scm_Builder(this.sc_TraversableLike$WithFilter__f_$outer.repr__O());
  this.sc_TraversableLike$WithFilter__f_$outer.foreach__F1__V(new $c_sjsr_AnonFunction1(((x$2) => ($uZ(this.sc_TraversableLike$WithFilter__f_p.apply__O__O(x$2)) ? b.$plus$eq__O__scm_Builder(f.apply__O__O(x$2)) : (void 0)))));
  return b.result__O()
});
var $d_sc_TraversableLike$WithFilter = new $TypeData().initClass({
  sc_TraversableLike$WithFilter: 0
}, false, "scala.collection.TraversableLike$WithFilter", {
  sc_TraversableLike$WithFilter: 1,
  O: 1,
  scg_FilterMonadic: 1
});
$c_sc_TraversableLike$WithFilter.prototype.$classData = $d_sc_TraversableLike$WithFilter;
function $f_sc_TraversableOnce__size__I($thiz) {
  var counter = new $c_sc_TraversableOnce$counter$1($thiz);
  $thiz.foreach__F1__V(counter);
  return counter.sc_TraversableOnce$counter$1__f_result
}
function $f_sc_TraversableOnce__foldLeft__O__F2__O($thiz, z, op) {
  var folder = new $c_sc_TraversableOnce$folder$1($thiz, z, op);
  $thiz.foreach__F1__V(folder);
  return folder.sc_TraversableOnce$folder$1__f_result
}
function $f_sc_TraversableOnce__sum__s_math_Numeric__O($thiz, num) {
  return $thiz.foldLeft__O__F2__O(num.fromInt__I__O(0), new $c_sjsr_AnonFunction2(((x$2, y$2) => num.plus__O__O__O(x$2, y$2))))
}
function $f_sc_TraversableOnce__to__scg_CanBuildFrom__O($thiz, cbf) {
  var b = cbf.apply__scm_Builder();
  b.$plus$plus$eq__sc_TraversableOnce__scg_Growable($thiz.seq__sc_TraversableOnce());
  return b.result__O()
}
function $f_sc_TraversableOnce__mkString__T__T__T__T($thiz, start, sep, end) {
  var this$1 = $thiz.addString__scm_StringBuilder__T__T__T__scm_StringBuilder($ct_scm_StringBuilder__(new $c_scm_StringBuilder()), start, sep, end);
  return this$1.scm_StringBuilder__f_underlying.jl_StringBuilder__f_java$lang$StringBuilder$$content
}
function $f_sc_TraversableOnce__addString__scm_StringBuilder__T__T__T__scm_StringBuilder($thiz, b, start, sep, end) {
  b.append__T__scm_StringBuilder(start);
  var appender = new $c_sc_TraversableOnce$appender$1($thiz, b, sep);
  $thiz.foreach__F1__V(appender);
  b.append__T__scm_StringBuilder(end);
  return b
}
function $is_sc_TraversableOnce(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_TraversableOnce)))
}
function $as_sc_TraversableOnce(obj) {
  return (($is_sc_TraversableOnce(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.TraversableOnce"))
}
function $isArrayOf_sc_TraversableOnce(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_TraversableOnce)))
}
function $asArrayOf_sc_TraversableOnce(obj, depth) {
  return (($isArrayOf_sc_TraversableOnce(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.TraversableOnce;", depth))
}
/** @constructor */
function $c_scg_GenMapFactory$MapCanBuildFrom(outer) {
  this.scg_GenMapFactory$MapCanBuildFrom__f_$outer = null;
  if ((outer === null)) {
    throw null
  } else {
    this.scg_GenMapFactory$MapCanBuildFrom__f_$outer = outer
  }
}
$c_scg_GenMapFactory$MapCanBuildFrom.prototype = new $h_O();
$c_scg_GenMapFactory$MapCanBuildFrom.prototype.constructor = $c_scg_GenMapFactory$MapCanBuildFrom;
/** @constructor */
function $h_scg_GenMapFactory$MapCanBuildFrom() {
  /*<skip>*/
}
$h_scg_GenMapFactory$MapCanBuildFrom.prototype = $c_scg_GenMapFactory$MapCanBuildFrom.prototype;
$c_scg_GenMapFactory$MapCanBuildFrom.prototype.apply__scm_Builder = (function() {
  return this.scg_GenMapFactory$MapCanBuildFrom__f_$outer.newBuilder__scm_Builder()
});
$c_scg_GenMapFactory$MapCanBuildFrom.prototype.apply__O__scm_Builder = (function(from) {
  $as_sc_GenMap(from);
  return this.scg_GenMapFactory$MapCanBuildFrom__f_$outer.newBuilder__scm_Builder()
});
var $d_scg_GenMapFactory$MapCanBuildFrom = new $TypeData().initClass({
  scg_GenMapFactory$MapCanBuildFrom: 0
}, false, "scala.collection.generic.GenMapFactory$MapCanBuildFrom", {
  scg_GenMapFactory$MapCanBuildFrom: 1,
  O: 1,
  scg_CanBuildFrom: 1
});
$c_scg_GenMapFactory$MapCanBuildFrom.prototype.$classData = $d_scg_GenMapFactory$MapCanBuildFrom;
/** @constructor */
function $c_scg_GenSetFactory() {
  /*<skip>*/
}
$c_scg_GenSetFactory.prototype = new $h_scg_GenericCompanion();
$c_scg_GenSetFactory.prototype.constructor = $c_scg_GenSetFactory;
/** @constructor */
function $h_scg_GenSetFactory() {
  /*<skip>*/
}
$h_scg_GenSetFactory.prototype = $c_scg_GenSetFactory.prototype;
/** @constructor */
function $c_scg_GenSetFactory$$anon$1(outer) {
  this.scg_GenSetFactory$$anon$1__f_$outer = null;
  if ((outer === null)) {
    throw null
  } else {
    this.scg_GenSetFactory$$anon$1__f_$outer = outer
  }
}
$c_scg_GenSetFactory$$anon$1.prototype = new $h_O();
$c_scg_GenSetFactory$$anon$1.prototype.constructor = $c_scg_GenSetFactory$$anon$1;
/** @constructor */
function $h_scg_GenSetFactory$$anon$1() {
  /*<skip>*/
}
$h_scg_GenSetFactory$$anon$1.prototype = $c_scg_GenSetFactory$$anon$1.prototype;
$c_scg_GenSetFactory$$anon$1.prototype.apply__sc_GenSet__scm_Builder = (function(from) {
  return ($is_sc_Set(from) ? from.companion__scg_GenericCompanion().newBuilder__scm_Builder() : this.scg_GenSetFactory$$anon$1__f_$outer.newBuilder__scm_Builder())
});
$c_scg_GenSetFactory$$anon$1.prototype.apply__scm_Builder = (function() {
  return this.scg_GenSetFactory$$anon$1__f_$outer.newBuilder__scm_Builder()
});
$c_scg_GenSetFactory$$anon$1.prototype.apply__O__scm_Builder = (function(from) {
  return this.apply__sc_GenSet__scm_Builder($as_sc_GenSet(from))
});
var $d_scg_GenSetFactory$$anon$1 = new $TypeData().initClass({
  scg_GenSetFactory$$anon$1: 0
}, false, "scala.collection.generic.GenSetFactory$$anon$1", {
  scg_GenSetFactory$$anon$1: 1,
  O: 1,
  scg_CanBuildFrom: 1
});
$c_scg_GenSetFactory$$anon$1.prototype.$classData = $d_scg_GenSetFactory$$anon$1;
function $ct_scg_GenTraversableFactory__($thiz) {
  $thiz.scg_GenTraversableFactory__f_ReusableCBFInstance = new $c_scg_GenTraversableFactory$$anon$1($thiz);
  return $thiz
}
/** @constructor */
function $c_scg_GenTraversableFactory() {
  this.scg_GenTraversableFactory__f_ReusableCBFInstance = null
}
$c_scg_GenTraversableFactory.prototype = new $h_scg_GenericCompanion();
$c_scg_GenTraversableFactory.prototype.constructor = $c_scg_GenTraversableFactory;
/** @constructor */
function $h_scg_GenTraversableFactory() {
  /*<skip>*/
}
$h_scg_GenTraversableFactory.prototype = $c_scg_GenTraversableFactory.prototype;
function $ct_scg_GenTraversableFactory$GenericCanBuildFrom__scg_GenTraversableFactory__($thiz, outer) {
  if ((outer === null)) {
    throw null
  } else {
    $thiz.scg_GenTraversableFactory$GenericCanBuildFrom__f_$outer = outer
  };
  return $thiz
}
/** @constructor */
function $c_scg_GenTraversableFactory$GenericCanBuildFrom() {
  this.scg_GenTraversableFactory$GenericCanBuildFrom__f_$outer = null
}
$c_scg_GenTraversableFactory$GenericCanBuildFrom.prototype = new $h_O();
$c_scg_GenTraversableFactory$GenericCanBuildFrom.prototype.constructor = $c_scg_GenTraversableFactory$GenericCanBuildFrom;
/** @constructor */
function $h_scg_GenTraversableFactory$GenericCanBuildFrom() {
  /*<skip>*/
}
$h_scg_GenTraversableFactory$GenericCanBuildFrom.prototype = $c_scg_GenTraversableFactory$GenericCanBuildFrom.prototype;
$c_scg_GenTraversableFactory$GenericCanBuildFrom.prototype.apply__scm_Builder = (function() {
  return this.scg_GenTraversableFactory$GenericCanBuildFrom__f_$outer.newBuilder__scm_Builder()
});
$c_scg_GenTraversableFactory$GenericCanBuildFrom.prototype.apply__O__scm_Builder = (function(from) {
  var from$1 = $as_sc_GenTraversable(from);
  return from$1.companion__scg_GenericCompanion().newBuilder__scm_Builder()
});
function $f_scg_GenericTraversableTemplate__flatten__F1__sc_GenTraversable($thiz, asTraversable) {
  var b = $thiz.companion__scg_GenericCompanion().newBuilder__scm_Builder();
  $as_sc_GenTraversableOnce($thiz).seq__sc_TraversableOnce().foreach__F1__V(new $c_sjsr_AnonFunction1(((xs$2) => $as_scm_Builder(b.$plus$plus$eq__sc_TraversableOnce__scg_Growable($as_sc_GenTraversableOnce(asTraversable.apply__O__O(xs$2)).seq__sc_TraversableOnce())))));
  return $as_sc_GenTraversable(b.result__O())
}
function $is_scg_GenericTraversableTemplate(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scg_GenericTraversableTemplate)))
}
function $as_scg_GenericTraversableTemplate(obj) {
  return (($is_scg_GenericTraversableTemplate(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.generic.GenericTraversableTemplate"))
}
function $isArrayOf_scg_GenericTraversableTemplate(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scg_GenericTraversableTemplate)))
}
function $asArrayOf_scg_GenericTraversableTemplate(obj, depth) {
  return (($isArrayOf_scg_GenericTraversableTemplate(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.generic.GenericTraversableTemplate;", depth))
}
function $f_scg_Growable__$plus$plus$eq__sc_TraversableOnce__scg_Growable($thiz, xs) {
  if ($is_sc_LinearSeq(xs)) {
    var x2 = $as_sc_LinearSeq(xs);
    $p_scg_Growable__loop$1__sc_LinearSeq__V($thiz, x2)
  } else {
    xs.foreach__F1__V(new $c_sjsr_AnonFunction1(((elem$2) => $thiz.$plus$eq__O__scg_Growable(elem$2))))
  };
  return $thiz
}
function $p_scg_Growable__loop$1__sc_LinearSeq__V($thiz, xs) {
  while (true) {
    var this$1 = xs;
    if ((!this$1.isEmpty__Z())) {
      $thiz.$plus$eq__O__scg_Growable(xs.head__O());
      xs = $as_sc_LinearSeq(xs.tail__O())
    } else {
      break
    }
  }
}
/** @constructor */
function $c_scg_MapFactory() {
  /*<skip>*/
}
$c_scg_MapFactory.prototype = new $h_scg_GenMapFactory();
$c_scg_MapFactory.prototype.constructor = $c_scg_MapFactory;
/** @constructor */
function $h_scg_MapFactory() {
  /*<skip>*/
}
$h_scg_MapFactory.prototype = $c_scg_MapFactory.prototype;
/** @constructor */
function $c_sci_HashMap$$anon$1() {
  this.sci_HashMap$$anon$1__f_invert = null;
  this.sci_HashMap$$anon$1__f_invert = new $c_sci_HashMap$$anon$1$$anon$2(this)
}
$c_sci_HashMap$$anon$1.prototype = new $h_sci_HashMap$Merger();
$c_sci_HashMap$$anon$1.prototype.constructor = $c_sci_HashMap$$anon$1;
/** @constructor */
function $h_sci_HashMap$$anon$1() {
  /*<skip>*/
}
$h_sci_HashMap$$anon$1.prototype = $c_sci_HashMap$$anon$1.prototype;
$c_sci_HashMap$$anon$1.prototype.apply__T2__T2__T2 = (function(a, b) {
  return a
});
$c_sci_HashMap$$anon$1.prototype.retainIdentical__Z = (function() {
  return true
});
$c_sci_HashMap$$anon$1.prototype.invert__sci_HashMap$Merger = (function() {
  return this.sci_HashMap$$anon$1__f_invert
});
var $d_sci_HashMap$$anon$1 = new $TypeData().initClass({
  sci_HashMap$$anon$1: 0
}, false, "scala.collection.immutable.HashMap$$anon$1", {
  sci_HashMap$$anon$1: 1,
  sci_HashMap$Merger: 1,
  O: 1
});
$c_sci_HashMap$$anon$1.prototype.$classData = $d_sci_HashMap$$anon$1;
/** @constructor */
function $c_sci_HashMap$$anon$1$$anon$2(outer) {
  /*<skip>*/
}
$c_sci_HashMap$$anon$1$$anon$2.prototype = new $h_sci_HashMap$Merger();
$c_sci_HashMap$$anon$1$$anon$2.prototype.constructor = $c_sci_HashMap$$anon$1$$anon$2;
/** @constructor */
function $h_sci_HashMap$$anon$1$$anon$2() {
  /*<skip>*/
}
$h_sci_HashMap$$anon$1$$anon$2.prototype = $c_sci_HashMap$$anon$1$$anon$2.prototype;
$c_sci_HashMap$$anon$1$$anon$2.prototype.apply__T2__T2__T2 = (function(a, b) {
  return b
});
$c_sci_HashMap$$anon$1$$anon$2.prototype.retainIdentical__Z = (function() {
  return true
});
$c_sci_HashMap$$anon$1$$anon$2.prototype.invert__sci_HashMap$Merger = (function() {
  return $m_sci_HashMap$().sci_HashMap$__f__defaultMerger
});
var $d_sci_HashMap$$anon$1$$anon$2 = new $TypeData().initClass({
  sci_HashMap$$anon$1$$anon$2: 0
}, false, "scala.collection.immutable.HashMap$$anon$1$$anon$2", {
  sci_HashMap$$anon$1$$anon$2: 1,
  sci_HashMap$Merger: 1,
  O: 1
});
$c_sci_HashMap$$anon$1$$anon$2.prototype.$classData = $d_sci_HashMap$$anon$1$$anon$2;
/** @constructor */
function $c_sci_HashMap$$anon$3() {
  this.sci_HashMap$$anon$3__f_invert = null;
  this.sci_HashMap$$anon$3__f_invert = new $c_sci_HashMap$$anon$3$$anon$4(this)
}
$c_sci_HashMap$$anon$3.prototype = new $h_sci_HashMap$Merger();
$c_sci_HashMap$$anon$3.prototype.constructor = $c_sci_HashMap$$anon$3;
/** @constructor */
function $h_sci_HashMap$$anon$3() {
  /*<skip>*/
}
$h_sci_HashMap$$anon$3.prototype = $c_sci_HashMap$$anon$3.prototype;
$c_sci_HashMap$$anon$3.prototype.apply__T2__T2__T2 = (function(a, b) {
  return (Object.is(a.T2__f__1, b.T2__f__1) ? b : new $c_T2(a.T2__f__1, b.T2__f__2))
});
$c_sci_HashMap$$anon$3.prototype.retainIdentical__Z = (function() {
  return true
});
$c_sci_HashMap$$anon$3.prototype.invert__sci_HashMap$Merger = (function() {
  return this.sci_HashMap$$anon$3__f_invert
});
var $d_sci_HashMap$$anon$3 = new $TypeData().initClass({
  sci_HashMap$$anon$3: 0
}, false, "scala.collection.immutable.HashMap$$anon$3", {
  sci_HashMap$$anon$3: 1,
  sci_HashMap$Merger: 1,
  O: 1
});
$c_sci_HashMap$$anon$3.prototype.$classData = $d_sci_HashMap$$anon$3;
/** @constructor */
function $c_sci_HashMap$$anon$3$$anon$4(outer) {
  /*<skip>*/
}
$c_sci_HashMap$$anon$3$$anon$4.prototype = new $h_sci_HashMap$Merger();
$c_sci_HashMap$$anon$3$$anon$4.prototype.constructor = $c_sci_HashMap$$anon$3$$anon$4;
/** @constructor */
function $h_sci_HashMap$$anon$3$$anon$4() {
  /*<skip>*/
}
$h_sci_HashMap$$anon$3$$anon$4.prototype = $c_sci_HashMap$$anon$3$$anon$4.prototype;
$c_sci_HashMap$$anon$3$$anon$4.prototype.apply__T2__T2__T2 = (function(a, b) {
  return (Object.is(b.T2__f__1, a.T2__f__1) ? a : new $c_T2(b.T2__f__1, a.T2__f__2))
});
$c_sci_HashMap$$anon$3$$anon$4.prototype.retainIdentical__Z = (function() {
  return true
});
$c_sci_HashMap$$anon$3$$anon$4.prototype.invert__sci_HashMap$Merger = (function() {
  return $m_sci_HashMap$().sci_HashMap$__f__concatMerger
});
var $d_sci_HashMap$$anon$3$$anon$4 = new $TypeData().initClass({
  sci_HashMap$$anon$3$$anon$4: 0
}, false, "scala.collection.immutable.HashMap$$anon$3$$anon$4", {
  sci_HashMap$$anon$3$$anon$4: 1,
  sci_HashMap$Merger: 1,
  O: 1
});
$c_sci_HashMap$$anon$3$$anon$4.prototype.$classData = $d_sci_HashMap$$anon$3$$anon$4;
/** @constructor */
function $c_sci_List$$anon$1() {
  /*<skip>*/
}
$c_sci_List$$anon$1.prototype = new $h_O();
$c_sci_List$$anon$1.prototype.constructor = $c_sci_List$$anon$1;
/** @constructor */
function $h_sci_List$$anon$1() {
  /*<skip>*/
}
$h_sci_List$$anon$1.prototype = $c_sci_List$$anon$1.prototype;
$c_sci_List$$anon$1.prototype.toString__T = (function() {
  return "<function1>"
});
$c_sci_List$$anon$1.prototype.apply__O__O = (function(x) {
  return this
});
var $d_sci_List$$anon$1 = new $TypeData().initClass({
  sci_List$$anon$1: 0
}, false, "scala.collection.immutable.List$$anon$1", {
  sci_List$$anon$1: 1,
  O: 1,
  F1: 1
});
$c_sci_List$$anon$1.prototype.$classData = $d_sci_List$$anon$1;
/** @constructor */
function $c_sci_WrappedString$$anon$1() {
  /*<skip>*/
}
$c_sci_WrappedString$$anon$1.prototype = new $h_O();
$c_sci_WrappedString$$anon$1.prototype.constructor = $c_sci_WrappedString$$anon$1;
/** @constructor */
function $h_sci_WrappedString$$anon$1() {
  /*<skip>*/
}
$h_sci_WrappedString$$anon$1.prototype = $c_sci_WrappedString$$anon$1.prototype;
$c_sci_WrappedString$$anon$1.prototype.apply__scm_Builder = (function() {
  return $m_sci_WrappedString$().newBuilder__scm_Builder()
});
$c_sci_WrappedString$$anon$1.prototype.apply__O__scm_Builder = (function(from) {
  $as_sci_WrappedString(from);
  return $m_sci_WrappedString$().newBuilder__scm_Builder()
});
var $d_sci_WrappedString$$anon$1 = new $TypeData().initClass({
  sci_WrappedString$$anon$1: 0
}, false, "scala.collection.immutable.WrappedString$$anon$1", {
  sci_WrappedString$$anon$1: 1,
  O: 1,
  scg_CanBuildFrom: 1
});
$c_sci_WrappedString$$anon$1.prototype.$classData = $d_sci_WrappedString$$anon$1;
function $as_sc_package$WrappedCanBuildFrom(obj) {
  return ((false || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.package$WrappedCanBuildFrom"))
}
function $isArrayOf_sc_package$WrappedCanBuildFrom(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_package$WrappedCanBuildFrom)))
}
function $asArrayOf_sc_package$WrappedCanBuildFrom(obj, depth) {
  return (($isArrayOf_sc_package$WrappedCanBuildFrom(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.package$WrappedCanBuildFrom;", depth))
}
/** @constructor */
function $c_s_package$$anon$1() {
  /*<skip>*/
}
$c_s_package$$anon$1.prototype = new $h_O();
$c_s_package$$anon$1.prototype.constructor = $c_s_package$$anon$1;
/** @constructor */
function $h_s_package$$anon$1() {
  /*<skip>*/
}
$h_s_package$$anon$1.prototype = $c_s_package$$anon$1.prototype;
$c_s_package$$anon$1.prototype.toString__T = (function() {
  return "object AnyRef"
});
var $d_s_package$$anon$1 = new $TypeData().initClass({
  s_package$$anon$1: 0
}, false, "scala.package$$anon$1", {
  s_package$$anon$1: 1,
  O: 1,
  s_Specializable: 1
});
$c_s_package$$anon$1.prototype.$classData = $d_s_package$$anon$1;
/** @constructor */
function $c_sr_AbstractFunction0() {
  /*<skip>*/
}
$c_sr_AbstractFunction0.prototype = new $h_O();
$c_sr_AbstractFunction0.prototype.constructor = $c_sr_AbstractFunction0;
/** @constructor */
function $h_sr_AbstractFunction0() {
  /*<skip>*/
}
$h_sr_AbstractFunction0.prototype = $c_sr_AbstractFunction0.prototype;
$c_sr_AbstractFunction0.prototype.toString__T = (function() {
  return "<function0>"
});
/** @constructor */
function $c_sr_AbstractFunction1() {
  /*<skip>*/
}
$c_sr_AbstractFunction1.prototype = new $h_O();
$c_sr_AbstractFunction1.prototype.constructor = $c_sr_AbstractFunction1;
/** @constructor */
function $h_sr_AbstractFunction1() {
  /*<skip>*/
}
$h_sr_AbstractFunction1.prototype = $c_sr_AbstractFunction1.prototype;
$c_sr_AbstractFunction1.prototype.toString__T = (function() {
  return "<function1>"
});
/** @constructor */
function $c_sr_AbstractFunction2() {
  /*<skip>*/
}
$c_sr_AbstractFunction2.prototype = new $h_O();
$c_sr_AbstractFunction2.prototype.constructor = $c_sr_AbstractFunction2;
/** @constructor */
function $h_sr_AbstractFunction2() {
  /*<skip>*/
}
$h_sr_AbstractFunction2.prototype = $c_sr_AbstractFunction2.prototype;
$c_sr_AbstractFunction2.prototype.toString__T = (function() {
  return "<function2>"
});
/** @constructor */
function $c_sr_BooleanRef(elem) {
  this.sr_BooleanRef__f_elem = false;
  this.sr_BooleanRef__f_elem = elem
}
$c_sr_BooleanRef.prototype = new $h_O();
$c_sr_BooleanRef.prototype.constructor = $c_sr_BooleanRef;
/** @constructor */
function $h_sr_BooleanRef() {
  /*<skip>*/
}
$h_sr_BooleanRef.prototype = $c_sr_BooleanRef.prototype;
$c_sr_BooleanRef.prototype.toString__T = (function() {
  var b = this.sr_BooleanRef__f_elem;
  return ("" + b)
});
var $d_sr_BooleanRef = new $TypeData().initClass({
  sr_BooleanRef: 0
}, false, "scala.runtime.BooleanRef", {
  sr_BooleanRef: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_sr_BooleanRef.prototype.$classData = $d_sr_BooleanRef;
/** @constructor */
function $c_sr_ObjectRef(elem) {
  this.sr_ObjectRef__f_elem = null;
  this.sr_ObjectRef__f_elem = elem
}
$c_sr_ObjectRef.prototype = new $h_O();
$c_sr_ObjectRef.prototype.constructor = $c_sr_ObjectRef;
/** @constructor */
function $h_sr_ObjectRef() {
  /*<skip>*/
}
$h_sr_ObjectRef.prototype = $c_sr_ObjectRef.prototype;
$c_sr_ObjectRef.prototype.toString__T = (function() {
  var obj = this.sr_ObjectRef__f_elem;
  return ("" + obj)
});
var $d_sr_ObjectRef = new $TypeData().initClass({
  sr_ObjectRef: 0
}, false, "scala.runtime.ObjectRef", {
  sr_ObjectRef: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_sr_ObjectRef.prototype.$classData = $d_sr_ObjectRef;
/** @constructor */
function $c_sjs_js_Dynamic$literal$() {
  /*<skip>*/
}
$c_sjs_js_Dynamic$literal$.prototype = new $h_O();
$c_sjs_js_Dynamic$literal$.prototype.constructor = $c_sjs_js_Dynamic$literal$;
/** @constructor */
function $h_sjs_js_Dynamic$literal$() {
  /*<skip>*/
}
$h_sjs_js_Dynamic$literal$.prototype = $c_sjs_js_Dynamic$literal$.prototype;
var $d_sjs_js_Dynamic$literal$ = new $TypeData().initClass({
  sjs_js_Dynamic$literal$: 0
}, false, "scala.scalajs.js.Dynamic$literal$", {
  sjs_js_Dynamic$literal$: 1,
  O: 1,
  s_Dynamic: 1
});
$c_sjs_js_Dynamic$literal$.prototype.$classData = $d_sjs_js_Dynamic$literal$;
var $n_sjs_js_Dynamic$literal$;
function $m_sjs_js_Dynamic$literal$() {
  if ((!$n_sjs_js_Dynamic$literal$)) {
    $n_sjs_js_Dynamic$literal$ = new $c_sjs_js_Dynamic$literal$()
  };
  return $n_sjs_js_Dynamic$literal$
}
/** @constructor */
function $c_s_util_hashing_MurmurHash3$() {
  this.s_util_hashing_MurmurHash3$__f_seqSeed = 0;
  this.s_util_hashing_MurmurHash3$__f_mapSeed = 0;
  this.s_util_hashing_MurmurHash3$__f_setSeed = 0;
  this.s_util_hashing_MurmurHash3$__f_emptyMapHash = 0;
  $n_s_util_hashing_MurmurHash3$ = this;
  this.s_util_hashing_MurmurHash3$__f_seqSeed = $f_T__hashCode__I("Seq");
  this.s_util_hashing_MurmurHash3$__f_mapSeed = $f_T__hashCode__I("Map");
  this.s_util_hashing_MurmurHash3$__f_setSeed = $f_T__hashCode__I("Set");
  this.s_util_hashing_MurmurHash3$__f_emptyMapHash = this.unorderedHash__sc_TraversableOnce__I__I($m_sci_Nil$(), this.s_util_hashing_MurmurHash3$__f_mapSeed)
}
$c_s_util_hashing_MurmurHash3$.prototype = new $h_s_util_hashing_MurmurHash3();
$c_s_util_hashing_MurmurHash3$.prototype.constructor = $c_s_util_hashing_MurmurHash3$;
/** @constructor */
function $h_s_util_hashing_MurmurHash3$() {
  /*<skip>*/
}
$h_s_util_hashing_MurmurHash3$.prototype = $c_s_util_hashing_MurmurHash3$.prototype;
$c_s_util_hashing_MurmurHash3$.prototype.seqHash__sc_Seq__I = (function(xs) {
  if ((xs instanceof $c_sci_List)) {
    var x2 = $as_sci_List(xs);
    return this.listHash__sci_List__I__I(x2, this.s_util_hashing_MurmurHash3$__f_seqSeed)
  } else {
    return this.orderedHash__sc_TraversableOnce__I__I(xs, this.s_util_hashing_MurmurHash3$__f_seqSeed)
  }
});
var $d_s_util_hashing_MurmurHash3$ = new $TypeData().initClass({
  s_util_hashing_MurmurHash3$: 0
}, false, "scala.util.hashing.MurmurHash3$", {
  s_util_hashing_MurmurHash3$: 1,
  s_util_hashing_MurmurHash3: 1,
  O: 1
});
$c_s_util_hashing_MurmurHash3$.prototype.$classData = $d_s_util_hashing_MurmurHash3$;
var $n_s_util_hashing_MurmurHash3$;
function $m_s_util_hashing_MurmurHash3$() {
  if ((!$n_s_util_hashing_MurmurHash3$)) {
    $n_s_util_hashing_MurmurHash3$ = new $c_s_util_hashing_MurmurHash3$()
  };
  return $n_s_util_hashing_MurmurHash3$
}
/** @constructor */
function $c_Lcfx70_cfpl_core_Line3(p1, p2) {
  this.Lcfx70_cfpl_core_Line3__f_p1 = null;
  this.Lcfx70_cfpl_core_Line3__f_p2 = null;
  this.Lcfx70_cfpl_core_Line3__f_pts = null;
  this.Lcfx70_cfpl_core_Line3__f_v = null;
  this.Lcfx70_cfpl_core_Line3__f_p1 = p1;
  this.Lcfx70_cfpl_core_Line3__f_p2 = p2;
  $m_Lcfx70_cfpl_core_CommonHelpers$();
  var array = [p1, p2];
  var array$1 = [...($m_sjs_js_WrappedArray$(), array)];
  this.Lcfx70_cfpl_core_Line3__f_pts = $ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), array$1);
  this.Lcfx70_cfpl_core_Line3__f_v = p2.$minus__Lcfx70_vecquat_Vec__Lcfx70_vecquat_Vec(p1)
}
$c_Lcfx70_cfpl_core_Line3.prototype = new $h_O();
$c_Lcfx70_cfpl_core_Line3.prototype.constructor = $c_Lcfx70_cfpl_core_Line3;
/** @constructor */
function $h_Lcfx70_cfpl_core_Line3() {
  /*<skip>*/
}
$h_Lcfx70_cfpl_core_Line3.prototype = $c_Lcfx70_cfpl_core_Line3.prototype;
$c_Lcfx70_cfpl_core_Line3.prototype.point__D__Lcfx70_vecquat_Vec = (function(t) {
  return this.Lcfx70_cfpl_core_Line3__f_p1.$plus__Lcfx70_vecquat_Vec__Lcfx70_vecquat_Vec(this.Lcfx70_cfpl_core_Line3__f_v.$times__D__Lcfx70_vecquat_Vec(t))
});
$c_Lcfx70_cfpl_core_Line3.prototype.intersect__Lcfx70_cfpl_core_Line3__s_Option = (function(l2) {
  var a = this.Lcfx70_cfpl_core_Line3__f_p2.$minus__Lcfx70_vecquat_Vec__Lcfx70_vecquat_Vec(this.Lcfx70_cfpl_core_Line3__f_p1);
  var b = l2.Lcfx70_cfpl_core_Line3__f_p2.$minus__Lcfx70_vecquat_Vec__Lcfx70_vecquat_Vec(l2.Lcfx70_cfpl_core_Line3__f_p1);
  var c = l2.Lcfx70_cfpl_core_Line3__f_p1.$minus__Lcfx70_vecquat_Vec__Lcfx70_vecquat_Vec(this.Lcfx70_cfpl_core_Line3__f_p1);
  var crab = a.crossProd__Lcfx70_vecquat_Vec__Lcfx70_vecquat_Vec(b);
  if ((((crab !== null) && crab.equals__O__Z(0)) || (c.dotProd__Lcfx70_vecquat_Vec__D(crab) > $m_Lcfx70_vecquat_package$().Lcfx70_vecquat_package$__f_epsilon))) {
    return $m_s_None$()
  } else {
    var this$1 = c.crossProd__Lcfx70_vecquat_Vec__Lcfx70_vecquat_Vec(b);
    var t = (this$1.dotProd__Lcfx70_vecquat_Vec__D(crab) / crab.norm__D());
    return new $c_s_Some(this.point__D__Lcfx70_vecquat_Vec(t))
  }
});
$c_Lcfx70_cfpl_core_Line3.prototype.intersectXYCircle__D__s_Option = (function(r) {
  var this$1 = this.Lcfx70_cfpl_core_Line3__f_v;
  var a = (-$uD(this$1.Lcfx70_vecquat_Vec__f_crds.apply__I__O(1)));
  var this$2 = this.Lcfx70_cfpl_core_Line3__f_v;
  var b = $uD(this$2.Lcfx70_vecquat_Vec__f_crds.apply__I__O(0));
  var this$3 = this.Lcfx70_cfpl_core_Line3__f_p1;
  var $$x1 = $uD(this$3.Lcfx70_vecquat_Vec__f_crds.apply__I__O(0));
  var this$4 = this.Lcfx70_cfpl_core_Line3__f_p1;
  var c = (-(($$x1 * a) + ($uD(this$4.Lcfx70_vecquat_Vec__f_crds.apply__I__O(1)) * b)));
  var norm = ((a * a) + (b * b));
  var array = [(((-a) * c) / norm), (((-b) * c) / norm), 0.0];
  var crds = $ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), array);
  var m = $ct_Lcfx70_vecquat_Vec__sc_Seq__(new $c_Lcfx70_vecquat_Vec(), crds);
  if (((c * c) > ((r * r) * norm))) {
    return $m_s_None$()
  } else {
    var x = ((c * c) - ((r * r) * norm));
    if (($uD(Math.abs(x)) < $m_Lcfx70_vecquat_package$().Lcfx70_vecquat_package$__f_epsilon)) {
      return new $c_s_Some(new $c_T2(m, m))
    } else {
      var d = ((r * r) - ((c * c) / norm));
      var x$1 = (d / norm);
      var mult = $uD(Math.sqrt(x$1));
      var array$1 = [($uD(m.Lcfx70_vecquat_Vec__f_crds.apply__I__O(0)) + (b * mult)), ($uD(m.Lcfx70_vecquat_Vec__f_crds.apply__I__O(1)) - (a * mult)), 0.0];
      var crds$1 = $ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), array$1);
      var $$x2 = $ct_Lcfx70_vecquat_Vec__sc_Seq__(new $c_Lcfx70_vecquat_Vec(), crds$1);
      var array$2 = [($uD(m.Lcfx70_vecquat_Vec__f_crds.apply__I__O(0)) - (b * mult)), ($uD(m.Lcfx70_vecquat_Vec__f_crds.apply__I__O(1)) + (a * mult)), 0.0];
      var crds$2 = $ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), array$2);
      return new $c_s_Some(new $c_T2($$x2, $ct_Lcfx70_vecquat_Vec__sc_Seq__(new $c_Lcfx70_vecquat_Vec(), crds$2)))
    }
  }
});
$c_Lcfx70_cfpl_core_Line3.prototype.toString__T = (function() {
  return (((("Line3 (" + this.Lcfx70_cfpl_core_Line3__f_p1) + " ") + this.Lcfx70_cfpl_core_Line3__f_p2) + ")")
});
$c_Lcfx70_cfpl_core_Line3.prototype.pts__sc_Seq = (function() {
  return this.Lcfx70_cfpl_core_Line3__f_pts
});
function $as_Lcfx70_cfpl_core_Line3(obj) {
  return (((obj instanceof $c_Lcfx70_cfpl_core_Line3) || (obj === null)) ? obj : $throwClassCastException(obj, "cfx70.cfpl.core.Line3"))
}
function $isArrayOf_Lcfx70_cfpl_core_Line3(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lcfx70_cfpl_core_Line3)))
}
function $asArrayOf_Lcfx70_cfpl_core_Line3(obj, depth) {
  return (($isArrayOf_Lcfx70_cfpl_core_Line3(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lcfx70.cfpl.core.Line3;", depth))
}
var $d_Lcfx70_cfpl_core_Line3 = new $TypeData().initClass({
  Lcfx70_cfpl_core_Line3: 0
}, false, "cfx70.cfpl.core.Line3", {
  Lcfx70_cfpl_core_Line3: 1,
  O: 1,
  Lcfx70_cfpl_core_LineIntersectable: 1,
  Lcfx70_cfpl_core_WireframeHelper: 1
});
$c_Lcfx70_cfpl_core_Line3.prototype.$classData = $d_Lcfx70_cfpl_core_Line3;
class $c_jl_Error extends $c_jl_Throwable {
}
function $ct_jl_Exception__T__($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz
}
class $c_jl_Exception extends $c_jl_Throwable {
}
var $d_jl_Exception = new $TypeData().initClass({
  jl_Exception: 0
}, false, "java.lang.Exception", {
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_Exception.prototype.$classData = $d_jl_Exception;
/** @constructor */
function $c_s_Predef$() {
  this.s_Predef$__f_singleton_$less$colon$less = null;
  $n_s_Predef$ = this;
  $m_s_package$();
  $m_sci_List$();
  $m_sci_Map$();
  $m_sci_Set$();
  $m_s_reflect_package$();
  $m_s_reflect_package$();
  new $c_s_Predef$$anon$1();
  this.s_Predef$__f_singleton_$less$colon$less = new $c_s_Predef$$anon$2();
  new $c_s_Predef$$anon$3()
}
$c_s_Predef$.prototype = new $h_s_LowPriorityImplicits();
$c_s_Predef$.prototype.constructor = $c_s_Predef$;
/** @constructor */
function $h_s_Predef$() {
  /*<skip>*/
}
$h_s_Predef$.prototype = $c_s_Predef$.prototype;
$c_s_Predef$.prototype.assert__Z__V = (function(assertion) {
  if ((!assertion)) {
    throw new $c_jl_AssertionError("assertion failed")
  }
});
$c_s_Predef$.prototype.require__Z__V = (function(requirement) {
  if ((!requirement)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "requirement failed")
  }
});
var $d_s_Predef$ = new $TypeData().initClass({
  s_Predef$: 0
}, false, "scala.Predef$", {
  s_Predef$: 1,
  s_LowPriorityImplicits: 1,
  O: 1,
  s_DeprecatedPredef: 1
});
$c_s_Predef$.prototype.$classData = $d_s_Predef$;
var $n_s_Predef$;
function $m_s_Predef$() {
  if ((!$n_s_Predef$)) {
    $n_s_Predef$ = new $c_s_Predef$()
  };
  return $n_s_Predef$
}
function $f_s_Product2__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.T2__f__1;
      break
    }
    case 1: {
      return $thiz.T2__f__2;
      break
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n))
    }
  }
}
function $f_s_Product5__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.T5__f__1;
      break
    }
    case 1: {
      return $thiz.T5__f__2;
      break
    }
    case 2: {
      return $thiz.T5__f__3;
      break
    }
    case 3: {
      return $thiz.T5__f__4;
      break
    }
    case 4: {
      return $thiz.T5__f__5;
      break
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n))
    }
  }
}
function $p_sc_GenSet$__liftedTree1$1__sc_GenSetLike__sc_GenSet__Z($thiz, thisSet$1, thatSet$1) {
  try {
    return thisSet$1.subsetOf__sc_GenSet__Z(thatSet$1)
  } catch (e) {
    if ((e instanceof $c_jl_ClassCastException)) {
      $as_jl_ClassCastException(e);
      return false
    } else {
      throw e
    }
  }
}
/** @constructor */
function $c_sc_GenSet$() {
  this.scg_GenTraversableFactory__f_ReusableCBFInstance = null;
  $ct_scg_GenTraversableFactory__(this)
}
$c_sc_GenSet$.prototype = new $h_scg_GenTraversableFactory();
$c_sc_GenSet$.prototype.constructor = $c_sc_GenSet$;
/** @constructor */
function $h_sc_GenSet$() {
  /*<skip>*/
}
$h_sc_GenSet$.prototype = $c_sc_GenSet$.prototype;
$c_sc_GenSet$.prototype.newBuilder__scm_Builder = (function() {
  $m_sc_Set$();
  $m_sci_Set$();
  return new $c_sci_Set$SetBuilderImpl()
});
$c_sc_GenSet$.prototype.setEquals__sc_GenSetLike__sc_GenSet__Z = (function(thisSet, thatSet) {
  return ((thisSet === thatSet) || ((thisSet.size__I() === thatSet.size__I()) && $p_sc_GenSet$__liftedTree1$1__sc_GenSetLike__sc_GenSet__Z(this, thisSet, thatSet)))
});
var $d_sc_GenSet$ = new $TypeData().initClass({
  sc_GenSet$: 0
}, false, "scala.collection.GenSet$", {
  sc_GenSet$: 1,
  scg_GenTraversableFactory: 1,
  scg_GenericCompanion: 1,
  O: 1
});
$c_sc_GenSet$.prototype.$classData = $d_sc_GenSet$;
var $n_sc_GenSet$;
function $m_sc_GenSet$() {
  if ((!$n_sc_GenSet$)) {
    $n_sc_GenSet$ = new $c_sc_GenSet$()
  };
  return $n_sc_GenSet$
}
function $f_sc_Iterator__drop__I__sc_Iterator($thiz, n) {
  var j = 0;
  while (((j < n) && $thiz.hasNext__Z())) {
    $thiz.next__O();
    j = ((1 + j) | 0)
  };
  return $thiz
}
function $f_sc_Iterator__foreach__F1__V($thiz, f) {
  while ($thiz.hasNext__Z()) {
    f.apply__O__O($thiz.next__O())
  }
}
function $f_sc_Iterator__forall__F1__Z($thiz, p) {
  var res = true;
  while ((res && $thiz.hasNext__Z())) {
    res = $uZ(p.apply__O__O($thiz.next__O()))
  };
  return res
}
function $f_sc_Iterator__toStream__sci_Stream($thiz) {
  if ($thiz.hasNext__Z()) {
    var hd = $thiz.next__O();
    var tl = new $c_sjsr_AnonFunction0((() => $thiz.toStream__sci_Stream()));
    return new $c_sci_Stream$Cons(hd, tl)
  } else {
    $m_sci_Stream$();
    return $m_sci_Stream$Empty$()
  }
}
function $is_sc_Iterator(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_Iterator)))
}
function $as_sc_Iterator(obj) {
  return (($is_sc_Iterator(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.Iterator"))
}
function $isArrayOf_sc_Iterator(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_Iterator)))
}
function $asArrayOf_sc_Iterator(obj, depth) {
  return (($isArrayOf_sc_Iterator(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.Iterator;", depth))
}
/** @constructor */
function $c_sc_TraversableOnce$appender$1(outer, b$1, sep$1) {
  this.sc_TraversableOnce$appender$1__f_first = false;
  this.sc_TraversableOnce$appender$1__f_b$1 = null;
  this.sc_TraversableOnce$appender$1__f_sep$1 = null;
  this.sc_TraversableOnce$appender$1__f_b$1 = b$1;
  this.sc_TraversableOnce$appender$1__f_sep$1 = sep$1;
  this.sc_TraversableOnce$appender$1__f_first = true
}
$c_sc_TraversableOnce$appender$1.prototype = new $h_sr_AbstractFunction1();
$c_sc_TraversableOnce$appender$1.prototype.constructor = $c_sc_TraversableOnce$appender$1;
/** @constructor */
function $h_sc_TraversableOnce$appender$1() {
  /*<skip>*/
}
$h_sc_TraversableOnce$appender$1.prototype = $c_sc_TraversableOnce$appender$1.prototype;
$c_sc_TraversableOnce$appender$1.prototype.apply__O__V = (function(x) {
  if (this.sc_TraversableOnce$appender$1__f_first) {
    this.sc_TraversableOnce$appender$1__f_b$1.append__O__scm_StringBuilder(x);
    this.sc_TraversableOnce$appender$1__f_first = false
  } else {
    this.sc_TraversableOnce$appender$1__f_b$1.append__T__scm_StringBuilder(this.sc_TraversableOnce$appender$1__f_sep$1);
    this.sc_TraversableOnce$appender$1__f_b$1.append__O__scm_StringBuilder(x)
  }
});
$c_sc_TraversableOnce$appender$1.prototype.apply__O__O = (function(v1) {
  this.apply__O__V(v1)
});
var $d_sc_TraversableOnce$appender$1 = new $TypeData().initClass({
  sc_TraversableOnce$appender$1: 0
}, false, "scala.collection.TraversableOnce$appender$1", {
  sc_TraversableOnce$appender$1: 1,
  sr_AbstractFunction1: 1,
  O: 1,
  F1: 1
});
$c_sc_TraversableOnce$appender$1.prototype.$classData = $d_sc_TraversableOnce$appender$1;
/** @constructor */
function $c_sc_TraversableOnce$counter$1(outer) {
  this.sc_TraversableOnce$counter$1__f_result = 0;
  this.sc_TraversableOnce$counter$1__f_result = 0
}
$c_sc_TraversableOnce$counter$1.prototype = new $h_sr_AbstractFunction1();
$c_sc_TraversableOnce$counter$1.prototype.constructor = $c_sc_TraversableOnce$counter$1;
/** @constructor */
function $h_sc_TraversableOnce$counter$1() {
  /*<skip>*/
}
$h_sc_TraversableOnce$counter$1.prototype = $c_sc_TraversableOnce$counter$1.prototype;
$c_sc_TraversableOnce$counter$1.prototype.apply__O__V = (function(v1) {
  this.sc_TraversableOnce$counter$1__f_result = ((1 + this.sc_TraversableOnce$counter$1__f_result) | 0)
});
$c_sc_TraversableOnce$counter$1.prototype.apply__O__O = (function(v1) {
  this.apply__O__V(v1)
});
var $d_sc_TraversableOnce$counter$1 = new $TypeData().initClass({
  sc_TraversableOnce$counter$1: 0
}, false, "scala.collection.TraversableOnce$counter$1", {
  sc_TraversableOnce$counter$1: 1,
  sr_AbstractFunction1: 1,
  O: 1,
  F1: 1
});
$c_sc_TraversableOnce$counter$1.prototype.$classData = $d_sc_TraversableOnce$counter$1;
/** @constructor */
function $c_sc_TraversableOnce$folder$1(outer, z$1, op$1) {
  this.sc_TraversableOnce$folder$1__f_result = null;
  this.sc_TraversableOnce$folder$1__f_op$1 = null;
  this.sc_TraversableOnce$folder$1__f_op$1 = op$1;
  this.sc_TraversableOnce$folder$1__f_result = z$1
}
$c_sc_TraversableOnce$folder$1.prototype = new $h_sr_AbstractFunction1();
$c_sc_TraversableOnce$folder$1.prototype.constructor = $c_sc_TraversableOnce$folder$1;
/** @constructor */
function $h_sc_TraversableOnce$folder$1() {
  /*<skip>*/
}
$h_sc_TraversableOnce$folder$1.prototype = $c_sc_TraversableOnce$folder$1.prototype;
$c_sc_TraversableOnce$folder$1.prototype.apply__O__V = (function(v1) {
  this.sc_TraversableOnce$folder$1__f_result = this.sc_TraversableOnce$folder$1__f_op$1.apply__O__O__O(this.sc_TraversableOnce$folder$1__f_result, v1)
});
$c_sc_TraversableOnce$folder$1.prototype.apply__O__O = (function(v1) {
  this.apply__O__V(v1)
});
var $d_sc_TraversableOnce$folder$1 = new $TypeData().initClass({
  sc_TraversableOnce$folder$1: 0
}, false, "scala.collection.TraversableOnce$folder$1", {
  sc_TraversableOnce$folder$1: 1,
  sr_AbstractFunction1: 1,
  O: 1,
  F1: 1
});
$c_sc_TraversableOnce$folder$1.prototype.$classData = $d_sc_TraversableOnce$folder$1;
/** @constructor */
function $c_scg_GenSeqFactory() {
  this.scg_GenTraversableFactory__f_ReusableCBFInstance = null
}
$c_scg_GenSeqFactory.prototype = new $h_scg_GenTraversableFactory();
$c_scg_GenSeqFactory.prototype.constructor = $c_scg_GenSeqFactory;
/** @constructor */
function $h_scg_GenSeqFactory() {
  /*<skip>*/
}
$h_scg_GenSeqFactory.prototype = $c_scg_GenSeqFactory.prototype;
/** @constructor */
function $c_scg_GenTraversableFactory$$anon$1(outer) {
  this.scg_GenTraversableFactory$GenericCanBuildFrom__f_$outer = null;
  this.scg_GenTraversableFactory$$anon$1__f_$outer = null;
  if ((outer === null)) {
    throw null
  } else {
    this.scg_GenTraversableFactory$$anon$1__f_$outer = outer
  };
  $ct_scg_GenTraversableFactory$GenericCanBuildFrom__scg_GenTraversableFactory__(this, outer)
}
$c_scg_GenTraversableFactory$$anon$1.prototype = new $h_scg_GenTraversableFactory$GenericCanBuildFrom();
$c_scg_GenTraversableFactory$$anon$1.prototype.constructor = $c_scg_GenTraversableFactory$$anon$1;
/** @constructor */
function $h_scg_GenTraversableFactory$$anon$1() {
  /*<skip>*/
}
$h_scg_GenTraversableFactory$$anon$1.prototype = $c_scg_GenTraversableFactory$$anon$1.prototype;
$c_scg_GenTraversableFactory$$anon$1.prototype.apply__scm_Builder = (function() {
  return this.scg_GenTraversableFactory$$anon$1__f_$outer.newBuilder__scm_Builder()
});
var $d_scg_GenTraversableFactory$$anon$1 = new $TypeData().initClass({
  scg_GenTraversableFactory$$anon$1: 0
}, false, "scala.collection.generic.GenTraversableFactory$$anon$1", {
  scg_GenTraversableFactory$$anon$1: 1,
  scg_GenTraversableFactory$GenericCanBuildFrom: 1,
  O: 1,
  scg_CanBuildFrom: 1
});
$c_scg_GenTraversableFactory$$anon$1.prototype.$classData = $d_scg_GenTraversableFactory$$anon$1;
/** @constructor */
function $c_scg_ImmutableMapFactory() {
  /*<skip>*/
}
$c_scg_ImmutableMapFactory.prototype = new $h_scg_MapFactory();
$c_scg_ImmutableMapFactory.prototype.constructor = $c_scg_ImmutableMapFactory;
/** @constructor */
function $h_scg_ImmutableMapFactory() {
  /*<skip>*/
}
$h_scg_ImmutableMapFactory.prototype = $c_scg_ImmutableMapFactory.prototype;
/** @constructor */
function $c_sci_HashSet$acc$1(outer) {
  this.sci_HashSet$acc$1__f_res = null;
  this.sci_HashSet$acc$1__f_res = outer
}
$c_sci_HashSet$acc$1.prototype = new $h_sr_AbstractFunction1();
$c_sci_HashSet$acc$1.prototype.constructor = $c_sci_HashSet$acc$1;
/** @constructor */
function $h_sci_HashSet$acc$1() {
  /*<skip>*/
}
$h_sci_HashSet$acc$1.prototype = $c_sci_HashSet$acc$1.prototype;
$c_sci_HashSet$acc$1.prototype.apply__O__V = (function(v1) {
  this.sci_HashSet$acc$1__f_res = this.sci_HashSet$acc$1__f_res.$plus__O__sci_HashSet(v1)
});
$c_sci_HashSet$acc$1.prototype.apply__O__O = (function(v1) {
  this.apply__O__V(v1)
});
var $d_sci_HashSet$acc$1 = new $TypeData().initClass({
  sci_HashSet$acc$1: 0
}, false, "scala.collection.immutable.HashSet$acc$1", {
  sci_HashSet$acc$1: 1,
  sr_AbstractFunction1: 1,
  O: 1,
  F1: 1
});
$c_sci_HashSet$acc$1.prototype.$classData = $d_sci_HashSet$acc$1;
/** @constructor */
function $c_sci_List$Appender$1(outer) {
  this.sci_List$Appender$1__f_h = null;
  this.sci_List$Appender$1__f_t = null;
  this.sci_List$Appender$1__f_h = null;
  this.sci_List$Appender$1__f_t = null
}
$c_sci_List$Appender$1.prototype = new $h_sr_AbstractFunction1();
$c_sci_List$Appender$1.prototype.constructor = $c_sci_List$Appender$1;
/** @constructor */
function $h_sci_List$Appender$1() {
  /*<skip>*/
}
$h_sci_List$Appender$1.prototype = $c_sci_List$Appender$1.prototype;
$c_sci_List$Appender$1.prototype.apply__O__V = (function(b) {
  if ((this.sci_List$Appender$1__f_h === null)) {
    this.sci_List$Appender$1__f_h = new $c_sci_$colon$colon(b, $m_sci_Nil$());
    this.sci_List$Appender$1__f_t = this.sci_List$Appender$1__f_h
  } else {
    var nx = new $c_sci_$colon$colon(b, $m_sci_Nil$());
    this.sci_List$Appender$1__f_t.sci_$colon$colon__f_tl = nx;
    this.sci_List$Appender$1__f_t = nx
  }
});
$c_sci_List$Appender$1.prototype.appendLast__sci_$colon$colon__V = (function(last) {
  if ((this.sci_List$Appender$1__f_h === null)) {
    this.sci_List$Appender$1__f_h = last
  } else {
    this.sci_List$Appender$1__f_t.sci_$colon$colon__f_tl = last
  }
});
$c_sci_List$Appender$1.prototype.apply__O__O = (function(v1) {
  this.apply__O__V(v1)
});
var $d_sci_List$Appender$1 = new $TypeData().initClass({
  sci_List$Appender$1: 0
}, false, "scala.collection.immutable.List$Appender$1", {
  sci_List$Appender$1: 1,
  sr_AbstractFunction1: 1,
  O: 1,
  F1: 1
});
$c_sci_List$Appender$1.prototype.$classData = $d_sci_List$Appender$1;
/** @constructor */
function $c_sci_Map$HashCodeAccumulator() {
  this.sci_Map$HashCodeAccumulator__f_a = 0;
  this.sci_Map$HashCodeAccumulator__f_b = 0;
  this.sci_Map$HashCodeAccumulator__f_n = 0;
  this.sci_Map$HashCodeAccumulator__f_c = 0;
  this.sci_Map$HashCodeAccumulator__f_a = 0;
  this.sci_Map$HashCodeAccumulator__f_b = 0;
  this.sci_Map$HashCodeAccumulator__f_n = 0;
  this.sci_Map$HashCodeAccumulator__f_c = 1
}
$c_sci_Map$HashCodeAccumulator.prototype = new $h_sr_AbstractFunction2();
$c_sci_Map$HashCodeAccumulator.prototype.constructor = $c_sci_Map$HashCodeAccumulator;
/** @constructor */
function $h_sci_Map$HashCodeAccumulator() {
  /*<skip>*/
}
$h_sci_Map$HashCodeAccumulator.prototype = $c_sci_Map$HashCodeAccumulator.prototype;
$c_sci_Map$HashCodeAccumulator.prototype.apply__O__O__V = (function(key, value) {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  var h = this$1.product2Hash__O__O__I__I(key, value, (-889275714));
  this.sci_Map$HashCodeAccumulator__f_a = ((this.sci_Map$HashCodeAccumulator__f_a + h) | 0);
  this.sci_Map$HashCodeAccumulator__f_b = (this.sci_Map$HashCodeAccumulator__f_b ^ h);
  if ((h !== 0)) {
    this.sci_Map$HashCodeAccumulator__f_c = Math.imul(this.sci_Map$HashCodeAccumulator__f_c, h)
  };
  this.sci_Map$HashCodeAccumulator__f_n = ((1 + this.sci_Map$HashCodeAccumulator__f_n) | 0)
});
$c_sci_Map$HashCodeAccumulator.prototype.finalizeHash__I = (function() {
  var h = $m_s_util_hashing_MurmurHash3$().s_util_hashing_MurmurHash3$__f_mapSeed;
  h = $m_s_util_hashing_MurmurHash3$().mix__I__I__I(h, this.sci_Map$HashCodeAccumulator__f_a);
  h = $m_s_util_hashing_MurmurHash3$().mix__I__I__I(h, this.sci_Map$HashCodeAccumulator__f_b);
  h = $m_s_util_hashing_MurmurHash3$().mixLast__I__I__I(h, this.sci_Map$HashCodeAccumulator__f_c);
  return $m_s_util_hashing_MurmurHash3$().finalizeHash__I__I__I(h, this.sci_Map$HashCodeAccumulator__f_n)
});
$c_sci_Map$HashCodeAccumulator.prototype.apply__O__O__O = (function(v1, v2) {
  this.apply__O__O__V(v1, v2)
});
var $d_sci_Map$HashCodeAccumulator = new $TypeData().initClass({
  sci_Map$HashCodeAccumulator: 0
}, false, "scala.collection.immutable.Map$HashCodeAccumulator", {
  sci_Map$HashCodeAccumulator: 1,
  sr_AbstractFunction2: 1,
  O: 1,
  F2: 1
});
$c_sci_Map$HashCodeAccumulator.prototype.$classData = $d_sci_Map$HashCodeAccumulator;
function $p_sci_Range$__description__I__I__I__Z__T($thiz, start, end, step, isInclusive) {
  return ((((start + (isInclusive ? " to " : " until ")) + end) + " by ") + step)
}
/** @constructor */
function $c_sci_Range$() {
  /*<skip>*/
}
$c_sci_Range$.prototype = new $h_O();
$c_sci_Range$.prototype.constructor = $c_sci_Range$;
/** @constructor */
function $h_sci_Range$() {
  /*<skip>*/
}
$h_sci_Range$.prototype = $c_sci_Range$.prototype;
$c_sci_Range$.prototype.scala$collection$immutable$Range$$fail__I__I__I__Z__E = (function(start, end, step, isInclusive) {
  throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), ($p_sci_Range$__description__I__I__I__Z__T(this, start, end, step, isInclusive) + ": seqs cannot contain more than Int.MaxValue elements."))
});
var $d_sci_Range$ = new $TypeData().initClass({
  sci_Range$: 0
}, false, "scala.collection.immutable.Range$", {
  sci_Range$: 1,
  O: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Range$.prototype.$classData = $d_sci_Range$;
var $n_sci_Range$;
function $m_sci_Range$() {
  if ((!$n_sci_Range$)) {
    $n_sci_Range$ = new $c_sci_Range$()
  };
  return $n_sci_Range$
}
/** @constructor */
function $c_sci_Stream$StreamCanBuildFrom() {
  this.scg_GenTraversableFactory$GenericCanBuildFrom__f_$outer = null;
  $ct_scg_GenTraversableFactory$GenericCanBuildFrom__scg_GenTraversableFactory__(this, $m_sci_Stream$())
}
$c_sci_Stream$StreamCanBuildFrom.prototype = new $h_scg_GenTraversableFactory$GenericCanBuildFrom();
$c_sci_Stream$StreamCanBuildFrom.prototype.constructor = $c_sci_Stream$StreamCanBuildFrom;
/** @constructor */
function $h_sci_Stream$StreamCanBuildFrom() {
  /*<skip>*/
}
$h_sci_Stream$StreamCanBuildFrom.prototype = $c_sci_Stream$StreamCanBuildFrom.prototype;
var $d_sci_Stream$StreamCanBuildFrom = new $TypeData().initClass({
  sci_Stream$StreamCanBuildFrom: 0
}, false, "scala.collection.immutable.Stream$StreamCanBuildFrom", {
  sci_Stream$StreamCanBuildFrom: 1,
  scg_GenTraversableFactory$GenericCanBuildFrom: 1,
  O: 1,
  scg_CanBuildFrom: 1
});
$c_sci_Stream$StreamCanBuildFrom.prototype.$classData = $d_sci_Stream$StreamCanBuildFrom;
function $f_scm_Builder__sizeHint__sc_TraversableLike__V($thiz, coll) {
  var x1 = coll.sizeHintIfCheap__I();
  if ((x1 !== (-1))) {
    $thiz.sizeHint__I__V(x1)
  }
}
function $f_scm_Builder__sizeHint__sc_TraversableLike__I__V($thiz, coll, delta) {
  var x1 = coll.sizeHintIfCheap__I();
  if ((x1 !== (-1))) {
    $thiz.sizeHint__I__V(((x1 + delta) | 0))
  }
}
function $f_scm_Builder__sizeHintBounded__I__sc_TraversableLike__V($thiz, size, boundingColl) {
  var x1 = boundingColl.sizeHintIfCheap__I();
  if ((x1 !== (-1))) {
    $thiz.sizeHint__I__V(((size < x1) ? size : x1))
  }
}
function $is_scm_Builder(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scm_Builder)))
}
function $as_scm_Builder(obj) {
  return (($is_scm_Builder(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.Builder"))
}
function $isArrayOf_scm_Builder(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_Builder)))
}
function $asArrayOf_scm_Builder(obj, depth) {
  return (($isArrayOf_scm_Builder(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.Builder;", depth))
}
function $as_s_math_ScalaNumber(obj) {
  return ((false || (obj === null)) ? obj : $throwClassCastException(obj, "scala.math.ScalaNumber"))
}
function $isArrayOf_s_math_ScalaNumber(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_math_ScalaNumber)))
}
function $asArrayOf_s_math_ScalaNumber(obj, depth) {
  return (($isArrayOf_s_math_ScalaNumber(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.math.ScalaNumber;", depth))
}
/** @constructor */
function $c_sr_LazyBoolean() {
  this.sr_LazyBoolean__f__initialized = false;
  this.sr_LazyBoolean__f__value = false
}
$c_sr_LazyBoolean.prototype = new $h_O();
$c_sr_LazyBoolean.prototype.constructor = $c_sr_LazyBoolean;
/** @constructor */
function $h_sr_LazyBoolean() {
  /*<skip>*/
}
$h_sr_LazyBoolean.prototype = $c_sr_LazyBoolean.prototype;
$c_sr_LazyBoolean.prototype.initialize__Z__Z = (function(value) {
  this.sr_LazyBoolean__f__value = value;
  this.sr_LazyBoolean__f__initialized = true;
  return value
});
$c_sr_LazyBoolean.prototype.toString__T = (function() {
  return ("LazyBoolean " + (this.sr_LazyBoolean__f__initialized ? ("of: " + this.sr_LazyBoolean__f__value) : "thunk"))
});
var $d_sr_LazyBoolean = new $TypeData().initClass({
  sr_LazyBoolean: 0
}, false, "scala.runtime.LazyBoolean", {
  sr_LazyBoolean: 1,
  O: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_sr_LazyBoolean.prototype.$classData = $d_sr_LazyBoolean;
/** @constructor */
function $c_sr_LazyInt() {
  this.sr_LazyInt__f__initialized = false;
  this.sr_LazyInt__f__value = 0
}
$c_sr_LazyInt.prototype = new $h_O();
$c_sr_LazyInt.prototype.constructor = $c_sr_LazyInt;
/** @constructor */
function $h_sr_LazyInt() {
  /*<skip>*/
}
$h_sr_LazyInt.prototype = $c_sr_LazyInt.prototype;
$c_sr_LazyInt.prototype.initialize__I__I = (function(value) {
  this.sr_LazyInt__f__value = value;
  this.sr_LazyInt__f__initialized = true;
  return value
});
$c_sr_LazyInt.prototype.toString__T = (function() {
  return ("LazyInt " + (this.sr_LazyInt__f__initialized ? ("of: " + this.sr_LazyInt__f__value) : "thunk"))
});
var $d_sr_LazyInt = new $TypeData().initClass({
  sr_LazyInt: 0
}, false, "scala.runtime.LazyInt", {
  sr_LazyInt: 1,
  O: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_sr_LazyInt.prototype.$classData = $d_sr_LazyInt;
/** @constructor */
function $c_sjsr_AnonFunction0(f) {
  this.sjsr_AnonFunction0__f_f = null;
  this.sjsr_AnonFunction0__f_f = f
}
$c_sjsr_AnonFunction0.prototype = new $h_sr_AbstractFunction0();
$c_sjsr_AnonFunction0.prototype.constructor = $c_sjsr_AnonFunction0;
/** @constructor */
function $h_sjsr_AnonFunction0() {
  /*<skip>*/
}
$h_sjsr_AnonFunction0.prototype = $c_sjsr_AnonFunction0.prototype;
$c_sjsr_AnonFunction0.prototype.apply__O = (function() {
  return (0, this.sjsr_AnonFunction0__f_f)()
});
var $d_sjsr_AnonFunction0 = new $TypeData().initClass({
  sjsr_AnonFunction0: 0
}, false, "scala.scalajs.runtime.AnonFunction0", {
  sjsr_AnonFunction0: 1,
  sr_AbstractFunction0: 1,
  O: 1,
  F0: 1
});
$c_sjsr_AnonFunction0.prototype.$classData = $d_sjsr_AnonFunction0;
/** @constructor */
function $c_sjsr_AnonFunction1(f) {
  this.sjsr_AnonFunction1__f_f = null;
  this.sjsr_AnonFunction1__f_f = f
}
$c_sjsr_AnonFunction1.prototype = new $h_sr_AbstractFunction1();
$c_sjsr_AnonFunction1.prototype.constructor = $c_sjsr_AnonFunction1;
/** @constructor */
function $h_sjsr_AnonFunction1() {
  /*<skip>*/
}
$h_sjsr_AnonFunction1.prototype = $c_sjsr_AnonFunction1.prototype;
$c_sjsr_AnonFunction1.prototype.apply__O__O = (function(arg1) {
  return (0, this.sjsr_AnonFunction1__f_f)(arg1)
});
var $d_sjsr_AnonFunction1 = new $TypeData().initClass({
  sjsr_AnonFunction1: 0
}, false, "scala.scalajs.runtime.AnonFunction1", {
  sjsr_AnonFunction1: 1,
  sr_AbstractFunction1: 1,
  O: 1,
  F1: 1
});
$c_sjsr_AnonFunction1.prototype.$classData = $d_sjsr_AnonFunction1;
/** @constructor */
function $c_sjsr_AnonFunction2(f) {
  this.sjsr_AnonFunction2__f_f = null;
  this.sjsr_AnonFunction2__f_f = f
}
$c_sjsr_AnonFunction2.prototype = new $h_sr_AbstractFunction2();
$c_sjsr_AnonFunction2.prototype.constructor = $c_sjsr_AnonFunction2;
/** @constructor */
function $h_sjsr_AnonFunction2() {
  /*<skip>*/
}
$h_sjsr_AnonFunction2.prototype = $c_sjsr_AnonFunction2.prototype;
$c_sjsr_AnonFunction2.prototype.apply__O__O__O = (function(arg1, arg2) {
  return (0, this.sjsr_AnonFunction2__f_f)(arg1, arg2)
});
var $d_sjsr_AnonFunction2 = new $TypeData().initClass({
  sjsr_AnonFunction2: 0
}, false, "scala.scalajs.runtime.AnonFunction2", {
  sjsr_AnonFunction2: 1,
  sr_AbstractFunction2: 1,
  O: 1,
  F2: 1
});
$c_sjsr_AnonFunction2.prototype.$classData = $d_sjsr_AnonFunction2;
/** @constructor */
function $c_s_util_control_NoStackTrace$() {
  this.s_util_control_NoStackTrace$__f__noSuppression = false;
  this.s_util_control_NoStackTrace$__f__noSuppression = false
}
$c_s_util_control_NoStackTrace$.prototype = new $h_O();
$c_s_util_control_NoStackTrace$.prototype.constructor = $c_s_util_control_NoStackTrace$;
/** @constructor */
function $h_s_util_control_NoStackTrace$() {
  /*<skip>*/
}
$h_s_util_control_NoStackTrace$.prototype = $c_s_util_control_NoStackTrace$.prototype;
var $d_s_util_control_NoStackTrace$ = new $TypeData().initClass({
  s_util_control_NoStackTrace$: 0
}, false, "scala.util.control.NoStackTrace$", {
  s_util_control_NoStackTrace$: 1,
  O: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_s_util_control_NoStackTrace$.prototype.$classData = $d_s_util_control_NoStackTrace$;
var $n_s_util_control_NoStackTrace$;
function $m_s_util_control_NoStackTrace$() {
  if ((!$n_s_util_control_NoStackTrace$)) {
    $n_s_util_control_NoStackTrace$ = new $c_s_util_control_NoStackTrace$()
  };
  return $n_s_util_control_NoStackTrace$
}
/** @constructor */
function $c_s_util_hashing_MurmurHash3$hasher$1(outer) {
  this.s_util_hashing_MurmurHash3$hasher$1__f_a = 0;
  this.s_util_hashing_MurmurHash3$hasher$1__f_b = 0;
  this.s_util_hashing_MurmurHash3$hasher$1__f_n = 0;
  this.s_util_hashing_MurmurHash3$hasher$1__f_c = 0;
  this.s_util_hashing_MurmurHash3$hasher$1__f_a = 0;
  this.s_util_hashing_MurmurHash3$hasher$1__f_b = 0;
  this.s_util_hashing_MurmurHash3$hasher$1__f_n = 0;
  this.s_util_hashing_MurmurHash3$hasher$1__f_c = 1
}
$c_s_util_hashing_MurmurHash3$hasher$1.prototype = new $h_sr_AbstractFunction1();
$c_s_util_hashing_MurmurHash3$hasher$1.prototype.constructor = $c_s_util_hashing_MurmurHash3$hasher$1;
/** @constructor */
function $h_s_util_hashing_MurmurHash3$hasher$1() {
  /*<skip>*/
}
$h_s_util_hashing_MurmurHash3$hasher$1.prototype = $c_s_util_hashing_MurmurHash3$hasher$1.prototype;
$c_s_util_hashing_MurmurHash3$hasher$1.prototype.apply__O__V = (function(x) {
  var h = $m_sr_Statics$().anyHash__O__I(x);
  this.s_util_hashing_MurmurHash3$hasher$1__f_a = ((this.s_util_hashing_MurmurHash3$hasher$1__f_a + h) | 0);
  this.s_util_hashing_MurmurHash3$hasher$1__f_b = (this.s_util_hashing_MurmurHash3$hasher$1__f_b ^ h);
  if ((h !== 0)) {
    this.s_util_hashing_MurmurHash3$hasher$1__f_c = Math.imul(this.s_util_hashing_MurmurHash3$hasher$1__f_c, h)
  };
  this.s_util_hashing_MurmurHash3$hasher$1__f_n = ((1 + this.s_util_hashing_MurmurHash3$hasher$1__f_n) | 0)
});
$c_s_util_hashing_MurmurHash3$hasher$1.prototype.apply__O__O = (function(v1) {
  this.apply__O__V(v1)
});
var $d_s_util_hashing_MurmurHash3$hasher$1 = new $TypeData().initClass({
  s_util_hashing_MurmurHash3$hasher$1: 0
}, false, "scala.util.hashing.MurmurHash3$hasher$1", {
  s_util_hashing_MurmurHash3$hasher$1: 1,
  sr_AbstractFunction1: 1,
  O: 1,
  F1: 1
});
$c_s_util_hashing_MurmurHash3$hasher$1.prototype.$classData = $d_s_util_hashing_MurmurHash3$hasher$1;
/** @constructor */
function $c_s_util_hashing_MurmurHash3$hasher$2(outer, seed$1) {
  this.s_util_hashing_MurmurHash3$hasher$2__f_n = 0;
  this.s_util_hashing_MurmurHash3$hasher$2__f_h = 0;
  this.s_util_hashing_MurmurHash3$hasher$2__f_$outer = null;
  if ((outer === null)) {
    throw null
  } else {
    this.s_util_hashing_MurmurHash3$hasher$2__f_$outer = outer
  };
  this.s_util_hashing_MurmurHash3$hasher$2__f_n = 0;
  this.s_util_hashing_MurmurHash3$hasher$2__f_h = seed$1
}
$c_s_util_hashing_MurmurHash3$hasher$2.prototype = new $h_sr_AbstractFunction1();
$c_s_util_hashing_MurmurHash3$hasher$2.prototype.constructor = $c_s_util_hashing_MurmurHash3$hasher$2;
/** @constructor */
function $h_s_util_hashing_MurmurHash3$hasher$2() {
  /*<skip>*/
}
$h_s_util_hashing_MurmurHash3$hasher$2.prototype = $c_s_util_hashing_MurmurHash3$hasher$2.prototype;
$c_s_util_hashing_MurmurHash3$hasher$2.prototype.apply__O__V = (function(x) {
  this.s_util_hashing_MurmurHash3$hasher$2__f_h = this.s_util_hashing_MurmurHash3$hasher$2__f_$outer.mix__I__I__I(this.s_util_hashing_MurmurHash3$hasher$2__f_h, $m_sr_Statics$().anyHash__O__I(x));
  this.s_util_hashing_MurmurHash3$hasher$2__f_n = ((1 + this.s_util_hashing_MurmurHash3$hasher$2__f_n) | 0)
});
$c_s_util_hashing_MurmurHash3$hasher$2.prototype.apply__O__O = (function(v1) {
  this.apply__O__V(v1)
});
var $d_s_util_hashing_MurmurHash3$hasher$2 = new $TypeData().initClass({
  s_util_hashing_MurmurHash3$hasher$2: 0
}, false, "scala.util.hashing.MurmurHash3$hasher$2", {
  s_util_hashing_MurmurHash3$hasher$2: 1,
  sr_AbstractFunction1: 1,
  O: 1,
  F1: 1
});
$c_s_util_hashing_MurmurHash3$hasher$2.prototype.$classData = $d_s_util_hashing_MurmurHash3$hasher$2;
function $as_Ljava_io_IOException(obj) {
  return ((false || (obj === null)) ? obj : $throwClassCastException(obj, "java.io.IOException"))
}
function $isArrayOf_Ljava_io_IOException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Ljava_io_IOException)))
}
function $asArrayOf_Ljava_io_IOException(obj, depth) {
  return (($isArrayOf_Ljava_io_IOException(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.io.IOException;", depth))
}
class $c_jl_AssertionError extends $c_jl_Error {
  constructor(detailMessage) {
    super();
    var message = ("" + detailMessage);
    if ((detailMessage instanceof $c_jl_Throwable)) {
      var x2 = $as_jl_Throwable(detailMessage);
      var cause = x2
    } else {
      var cause = null
    };
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, message, cause, true, true)
  };
}
var $d_jl_AssertionError = new $TypeData().initClass({
  jl_AssertionError: 0
}, false, "java.lang.AssertionError", {
  jl_AssertionError: 1,
  jl_Error: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_AssertionError.prototype.$classData = $d_jl_AssertionError;
function $f_jl_Boolean__equals__O__Z($thiz, that) {
  return ($thiz === that)
}
function $f_jl_Boolean__hashCode__I($thiz) {
  return ($thiz ? 1231 : 1237)
}
function $f_jl_Boolean__toString__T($thiz) {
  return ("" + $thiz)
}
var $d_jl_Boolean = new $TypeData().initClass({
  jl_Boolean: 0
}, false, "java.lang.Boolean", {
  jl_Boolean: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1,
  jl_constant_Constable: 1
}, (void 0), (void 0), ((x) => ((typeof x) === "boolean")));
function $f_jl_Character__hashCode__I($thiz) {
  return $thiz
}
function $f_jl_Character__equals__O__Z($thiz, that) {
  if ((that instanceof $Char)) {
    var this$1 = $uC($as_jl_Character(that));
    return ($thiz === this$1)
  } else {
    return false
  }
}
function $f_jl_Character__toString__T($thiz) {
  return $as_T(String.fromCharCode($thiz))
}
function $as_jl_Character(obj) {
  return (((obj instanceof $Char) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.Character"))
}
function $isArrayOf_jl_Character(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Character)))
}
function $asArrayOf_jl_Character(obj, depth) {
  return (($isArrayOf_jl_Character(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Character;", depth))
}
var $d_jl_Character = new $TypeData().initClass({
  jl_Character: 0
}, false, "java.lang.Character", {
  jl_Character: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1,
  jl_constant_Constable: 1
}, (void 0), (void 0), ((x) => (x instanceof $Char)));
function $ct_jl_RuntimeException__T__($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz
}
class $c_jl_RuntimeException extends $c_jl_Exception {
}
var $d_jl_RuntimeException = new $TypeData().initClass({
  jl_RuntimeException: 0
}, false, "java.lang.RuntimeException", {
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_RuntimeException.prototype.$classData = $d_jl_RuntimeException;
function $ct_jl_StringBuilder__($thiz) {
  $thiz.jl_StringBuilder__f_java$lang$StringBuilder$$content = "";
  return $thiz
}
function $ct_jl_StringBuilder__T__($thiz, str) {
  $ct_jl_StringBuilder__($thiz);
  if ((str === null)) {
    throw new $c_jl_NullPointerException()
  };
  $thiz.jl_StringBuilder__f_java$lang$StringBuilder$$content = str;
  return $thiz
}
function $ct_jl_StringBuilder__I__($thiz, initialCapacity) {
  $ct_jl_StringBuilder__($thiz);
  if ((initialCapacity < 0)) {
    throw new $c_jl_NegativeArraySizeException()
  };
  return $thiz
}
function $ct_jl_StringBuilder__jl_CharSequence__($thiz, seq) {
  $ct_jl_StringBuilder__T__($thiz, $dp_toString__T(seq));
  return $thiz
}
/** @constructor */
function $c_jl_StringBuilder() {
  this.jl_StringBuilder__f_java$lang$StringBuilder$$content = null
}
$c_jl_StringBuilder.prototype = new $h_O();
$c_jl_StringBuilder.prototype.constructor = $c_jl_StringBuilder;
/** @constructor */
function $h_jl_StringBuilder() {
  /*<skip>*/
}
$h_jl_StringBuilder.prototype = $c_jl_StringBuilder.prototype;
$c_jl_StringBuilder.prototype.reverse__jl_StringBuilder = (function() {
  var original = this.jl_StringBuilder__f_java$lang$StringBuilder$$content;
  var result = "";
  var i = (((-1) + original.length) | 0);
  while ((i > 0)) {
    var index = i;
    var c = $charAt(original, index);
    if (((64512 & c) === 56320)) {
      var index$1 = (((-1) + i) | 0);
      var c2 = $charAt(original, index$1);
      if (((64512 & c2) === 55296)) {
        result = ((("" + result) + $as_T(String.fromCharCode(c2))) + $as_T(String.fromCharCode(c)));
        i = (((-2) + i) | 0)
      } else {
        result = (("" + result) + $as_T(String.fromCharCode(c)));
        i = (((-1) + i) | 0)
      }
    } else {
      result = (("" + result) + $as_T(String.fromCharCode(c)));
      i = (((-1) + i) | 0)
    }
  };
  if ((i === 0)) {
    var $$x1 = result;
    var this$7 = $charAt(original, 0);
    result = (("" + $$x1) + $as_T(String.fromCharCode(this$7)))
  };
  this.jl_StringBuilder__f_java$lang$StringBuilder$$content = result;
  return this
});
$c_jl_StringBuilder.prototype.toString__T = (function() {
  return this.jl_StringBuilder__f_java$lang$StringBuilder$$content
});
$c_jl_StringBuilder.prototype.length__I = (function() {
  var this$1 = this.jl_StringBuilder__f_java$lang$StringBuilder$$content;
  return this$1.length
});
$c_jl_StringBuilder.prototype.charAt__I__C = (function(index) {
  var this$1 = this.jl_StringBuilder__f_java$lang$StringBuilder$$content;
  return $charAt(this$1, index)
});
var $d_jl_StringBuilder = new $TypeData().initClass({
  jl_StringBuilder: 0
}, false, "java.lang.StringBuilder", {
  jl_StringBuilder: 1,
  O: 1,
  jl_CharSequence: 1,
  jl_Appendable: 1,
  Ljava_io_Serializable: 1
});
$c_jl_StringBuilder.prototype.$classData = $d_jl_StringBuilder;
class $c_jl_VirtualMachineError extends $c_jl_Error {
}
function $as_Ljava_math_BigDecimal(obj) {
  return ((false || (obj === null)) ? obj : $throwClassCastException(obj, "java.math.BigDecimal"))
}
function $isArrayOf_Ljava_math_BigDecimal(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Ljava_math_BigDecimal)))
}
function $asArrayOf_Ljava_math_BigDecimal(obj, depth) {
  return (($isArrayOf_Ljava_math_BigDecimal(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.math.BigDecimal;", depth))
}
function $as_Ljava_math_BigInteger(obj) {
  return ((false || (obj === null)) ? obj : $throwClassCastException(obj, "java.math.BigInteger"))
}
function $isArrayOf_Ljava_math_BigInteger(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Ljava_math_BigInteger)))
}
function $asArrayOf_Ljava_math_BigInteger(obj, depth) {
  return (($isArrayOf_Ljava_math_BigInteger(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.math.BigInteger;", depth))
}
function $p_ju_Formatter__sendToDest__T__V($thiz, s) {
  if (($thiz.ju_Formatter__f_java$util$Formatter$$dest === null)) {
    $thiz.ju_Formatter__f_stringOutput = (("" + $thiz.ju_Formatter__f_stringOutput) + s)
  } else {
    $p_ju_Formatter__sendToDestSlowPath__O__V($thiz, [s])
  }
}
function $p_ju_Formatter__sendToDest__T__T__V($thiz, s1, s2) {
  if (($thiz.ju_Formatter__f_java$util$Formatter$$dest === null)) {
    $thiz.ju_Formatter__f_stringOutput = ((("" + $thiz.ju_Formatter__f_stringOutput) + s1) + s2)
  } else {
    $p_ju_Formatter__sendToDestSlowPath__O__V($thiz, [s1, s2])
  }
}
function $p_ju_Formatter__sendToDest__T__T__T__V($thiz, s1, s2, s3) {
  if (($thiz.ju_Formatter__f_java$util$Formatter$$dest === null)) {
    $thiz.ju_Formatter__f_stringOutput = (($thiz.ju_Formatter__f_stringOutput + (("" + s1) + s2)) + s3)
  } else {
    $p_ju_Formatter__sendToDestSlowPath__O__V($thiz, [s1, s2, s3])
  }
}
function $p_ju_Formatter__sendToDestSlowPath__O__V($thiz, ss) {
  try {
    var len = $uI(ss.length);
    var i = 0;
    while ((i !== len)) {
      var x$1$2 = ss[i];
      var x$1 = $as_T(x$1$2);
      var this$2 = $thiz.ju_Formatter__f_java$util$Formatter$$dest;
      this$2.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$2.jl_StringBuilder__f_java$lang$StringBuilder$$content) + x$1);
      i = ((1 + i) | 0)
    }
  } catch (e) {
    if (false) {
      $as_Ljava_io_IOException(e)
    } else {
      throw e
    }
  }
}
function $p_ju_Formatter__format__ju_Formatter$LocaleInfo__T__AO__ju_Formatter($thiz, localeInfo, format, args) {
  if ($thiz.ju_Formatter__f_java$util$Formatter$$closed) {
    throw new $c_ju_FormatterClosedException()
  };
  var lastImplicitArgIndex = 0;
  var lastArgIndex = 0;
  var fmtLength = format.length;
  var fmtIndex = 0;
  while ((fmtIndex !== fmtLength)) {
    var fromIndex = fmtIndex;
    var nextPercentIndex = $uI(format.indexOf("%", fromIndex));
    if ((nextPercentIndex < 0)) {
      var beginIndex = fmtIndex;
      if (((beginIndex < 0) || (beginIndex > format.length))) {
        $charAt(format, beginIndex)
      };
      $p_ju_Formatter__sendToDest__T__V($thiz, $as_T(format.substring(beginIndex)));
      return $thiz
    };
    var beginIndex$1 = fmtIndex;
    if ((beginIndex$1 < 0)) {
      $charAt(format, beginIndex$1)
    };
    if ((nextPercentIndex > format.length)) {
      $charAt(format, nextPercentIndex)
    };
    if ((nextPercentIndex < beginIndex$1)) {
      $charAt(format, (-1))
    };
    $p_ju_Formatter__sendToDest__T__V($thiz, $as_T(format.substring(beginIndex$1, nextPercentIndex)));
    var formatSpecifierIndex = ((1 + nextPercentIndex) | 0);
    var re = $m_ju_Formatter$().ju_Formatter$__f_java$util$Formatter$$FormatSpecifier;
    re.lastIndex = formatSpecifierIndex;
    var execResult = re.exec(format);
    if (((execResult === null) || ($uI(execResult.index) !== formatSpecifierIndex))) {
      var conversion = ((formatSpecifierIndex === fmtLength) ? 37 : $charAt(format, formatSpecifierIndex));
      $p_ju_Formatter__throwUnknownFormatConversionException__C__E($thiz, conversion)
    };
    fmtIndex = $uI(re.lastIndex);
    var index = (((-1) + fmtIndex) | 0);
    var conversion$2 = $charAt(format, index);
    var flags = $p_ju_Formatter__parseFlags__T__C__I($thiz, $as_T(execResult[2]), conversion$2);
    var width = $p_ju_Formatter__parsePositiveInt__O__I($thiz, execResult[3]);
    var precision = $p_ju_Formatter__parsePositiveInt__O__I($thiz, execResult[4]);
    if ((width === (-2))) {
      $p_ju_Formatter__throwIllegalFormatWidthException__I__E($thiz, (-2147483648))
    };
    if ((precision === (-2))) {
      $p_ju_Formatter__throwIllegalFormatPrecisionException__I__E($thiz, (-2147483648))
    };
    if ((conversion$2 === 110)) {
      if ((precision !== (-1))) {
        $p_ju_Formatter__throwIllegalFormatPrecisionException__I__E($thiz, precision)
      };
      if ((width !== (-1))) {
        $p_ju_Formatter__throwIllegalFormatWidthException__I__E($thiz, width)
      };
      if ((flags !== 0)) {
        $thiz.java$util$Formatter$$throwIllegalFormatFlagsException__I__E(flags)
      };
      $p_ju_Formatter__sendToDest__T__V($thiz, "\n")
    } else if ((conversion$2 === 37)) {
      if ((precision !== (-1))) {
        $p_ju_Formatter__throwIllegalFormatPrecisionException__I__E($thiz, precision)
      };
      if ((((17 & flags) === 17) || ((12 & flags) === 12))) {
        $thiz.java$util$Formatter$$throwIllegalFormatFlagsException__I__E(flags)
      };
      if ((((1 & flags) !== 0) && (width === (-1)))) {
        $p_ju_Formatter__throwMissingFormatWidthException__T__E($thiz, $p_ju_Formatter__fullFormatSpecifier$1__O__T($thiz, execResult))
      };
      if ((((-2) & flags) !== 0)) {
        $thiz.java$util$Formatter$$throwFormatFlagsConversionMismatchException__C__I__I__E(37, flags, (-2))
      };
      $p_ju_Formatter__padAndSendToDestNoZeroPad__I__I__T__V($thiz, flags, width, "%")
    } else {
      var conversionLower = (((256 & flags) !== 0) ? (65535 & ((32 + conversion$2) | 0)) : conversion$2);
      var illegalFlags = $m_ju_Formatter$().ju_Formatter$__f_java$util$Formatter$$ConversionsIllegalFlags.get((((-97) + conversionLower) | 0));
      if (((illegalFlags === (-1)) || (((256 & flags) & illegalFlags) !== 0))) {
        $p_ju_Formatter__throwUnknownFormatConversionException__C__E($thiz, conversion$2)
      };
      if ((((17 & flags) !== 0) && (width === (-1)))) {
        $p_ju_Formatter__throwMissingFormatWidthException__T__E($thiz, $p_ju_Formatter__fullFormatSpecifier$1__O__T($thiz, execResult))
      };
      if ((((17 & flags) === 17) || ((12 & flags) === 12))) {
        $thiz.java$util$Formatter$$throwIllegalFormatFlagsException__I__E(flags)
      };
      if (((precision !== (-1)) && ((512 & illegalFlags) !== 0))) {
        $p_ju_Formatter__throwIllegalFormatPrecisionException__I__E($thiz, precision)
      };
      if (((flags & illegalFlags) !== 0)) {
        $thiz.java$util$Formatter$$throwFormatFlagsConversionMismatchException__C__I__I__E(conversionLower, flags, illegalFlags)
      };
      if (((128 & flags) !== 0)) {
        var argIndex = lastArgIndex
      } else {
        var i = $p_ju_Formatter__parsePositiveInt__O__I($thiz, execResult[1]);
        if ((i === (-1))) {
          lastImplicitArgIndex = ((1 + lastImplicitArgIndex) | 0);
          var argIndex = lastImplicitArgIndex
        } else {
          if ((i <= 0)) {
            $p_ju_Formatter__throwIllegalFormatArgumentIndexException__I__E($thiz, i)
          };
          var argIndex = i
        }
      };
      if (((argIndex <= 0) || (argIndex > args.u.length))) {
        $p_ju_Formatter__throwMissingFormatArgumentException__T__E($thiz, $p_ju_Formatter__fullFormatSpecifier$1__O__T($thiz, execResult))
      };
      lastArgIndex = argIndex;
      var arg = args.get((((-1) + argIndex) | 0));
      if ((((arg === null) && (conversionLower !== 98)) && (conversionLower !== 115))) {
        $p_ju_Formatter__formatNonNumericString__ju_Formatter$LocaleInfo__I__I__I__T__V($thiz, $m_ju_Formatter$RootLocaleInfo$(), flags, width, precision, "null")
      } else {
        $p_ju_Formatter__formatArg__ju_Formatter$LocaleInfo__O__C__I__I__I__V($thiz, localeInfo, arg, conversionLower, flags, width, precision)
      }
    }
  };
  return $thiz
}
function $p_ju_Formatter__parseFlags__T__C__I($thiz, flags, conversion) {
  var bits = (((conversion >= 65) && (conversion <= 90)) ? 256 : 0);
  var len = flags.length;
  var i = 0;
  while ((i !== len)) {
    var index = i;
    var f = $charAt(flags, index);
    switch (f) {
      case 45: {
        var bit = 1;
        break
      }
      case 35: {
        var bit = 2;
        break
      }
      case 43: {
        var bit = 4;
        break
      }
      case 32: {
        var bit = 8;
        break
      }
      case 48: {
        var bit = 16;
        break
      }
      case 44: {
        var bit = 32;
        break
      }
      case 40: {
        var bit = 64;
        break
      }
      case 60: {
        var bit = 128;
        break
      }
      default: {
        var bit;
        throw new $c_jl_AssertionError($bC(f))
      }
    };
    if (((bits & bit) !== 0)) {
      $p_ju_Formatter__throwDuplicateFormatFlagsException__C__E($thiz, f)
    };
    bits = (bits | bit);
    i = ((1 + i) | 0)
  };
  return bits
}
function $p_ju_Formatter__parsePositiveInt__O__I($thiz, capture) {
  if ((capture !== (void 0))) {
    var s = $as_T(capture);
    var x = $uD(parseInt(s, 10));
    return ((x <= 2.147483647E9) ? $doubleToInt(x) : (-2))
  } else {
    return (-1)
  }
}
function $p_ju_Formatter__formatArg__ju_Formatter$LocaleInfo__O__C__I__I__I__V($thiz, localeInfo, arg, conversionLower, flags, width, precision) {
  switch (conversionLower) {
    case 98: {
      var str = (((arg === false) || (arg === null)) ? "false" : "true");
      $p_ju_Formatter__formatNonNumericString__ju_Formatter$LocaleInfo__I__I__I__T__V($thiz, $m_ju_Formatter$RootLocaleInfo$(), flags, width, precision, str);
      break
    }
    case 104: {
      var i = $dp_hashCode__I(arg);
      var str$2 = $as_T($uD((i >>> 0.0)).toString(16));
      $p_ju_Formatter__formatNonNumericString__ju_Formatter$LocaleInfo__I__I__I__T__V($thiz, $m_ju_Formatter$RootLocaleInfo$(), flags, width, precision, str$2);
      break
    }
    case 115: {
      if ($is_ju_Formattable(arg)) {
        var x2 = $as_ju_Formattable(arg);
        var formattableFlags = (((((1 & flags) !== 0) ? 1 : 0) | (((2 & flags) !== 0) ? 4 : 0)) | (((256 & flags) !== 0) ? 2 : 0));
        x2.formatTo__ju_Formatter__I__I__I__V($thiz, formattableFlags, width, precision)
      } else {
        if (((2 & flags) !== 0)) {
          $thiz.java$util$Formatter$$throwFormatFlagsConversionMismatchException__C__I__I__E(conversionLower, flags, 2)
        };
        var str$3 = ("" + arg);
        $p_ju_Formatter__formatNonNumericString__ju_Formatter$LocaleInfo__I__I__I__T__V($thiz, localeInfo, flags, width, precision, str$3)
      };
      break
    }
    case 99: {
      if ((arg instanceof $Char)) {
        var x2$2 = $uC(arg);
        var str$4 = $as_T(String.fromCharCode(x2$2))
      } else {
        if ((!$isInt(arg))) {
          $thiz.java$util$Formatter$$throwIllegalFormatConversionException__C__O__E(conversionLower, arg)
        };
        var x3 = $uI(arg);
        if ((!((x3 >= 0) && (x3 <= 1114111)))) {
          $p_ju_Formatter__throwIllegalFormatCodePointException__I__E($thiz, x3)
        };
        var str$4 = ((x3 < 65536) ? $as_T(String.fromCharCode(x3)) : $as_T(String.fromCharCode((55296 | (((-64) + (x3 >> 10)) | 0)), (56320 | (1023 & x3)))))
      };
      $p_ju_Formatter__formatNonNumericString__ju_Formatter$LocaleInfo__I__I__I__T__V($thiz, localeInfo, flags, width, (-1), str$4);
      break
    }
    case 100: {
      if ($isInt(arg)) {
        var x2$3 = $uI(arg);
        var str$5 = ("" + x2$3)
      } else if ((arg instanceof $c_RTLong)) {
        var t = $uJ(arg);
        var lo = t.RTLong__f_lo;
        var hi = t.RTLong__f_hi;
        var str$5 = $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toString__I__I__T(lo, hi)
      } else {
        if ((!false)) {
          $thiz.java$util$Formatter$$throwIllegalFormatConversionException__C__O__E(conversionLower, arg)
        };
        var x4 = $as_Ljava_math_BigInteger(arg);
        var str$5 = x4.toString__T()
      };
      $p_ju_Formatter__formatNumericString__ju_Formatter$LocaleInfo__I__I__T__T__V($thiz, localeInfo, flags, width, str$5, "");
      break
    }
    case 111:
    case 120: {
      var isOctal = (conversionLower === 111);
      var prefix = (((2 & flags) === 0) ? "" : (isOctal ? "0" : (((256 & flags) !== 0) ? "0X" : "0x")));
      if (false) {
        var x2$4 = $as_Ljava_math_BigInteger(arg);
        var radix = (isOctal ? 8 : 16);
        $p_ju_Formatter__formatNumericString__ju_Formatter$LocaleInfo__I__I__T__T__V($thiz, $m_ju_Formatter$RootLocaleInfo$(), flags, width, x2$4.toString__I__T(radix), prefix)
      } else {
        if ($isInt(arg)) {
          var x2$5 = $uI(arg);
          var str$6 = (isOctal ? $as_T($uD((x2$5 >>> 0.0)).toString(8)) : $as_T($uD((x2$5 >>> 0.0)).toString(16)))
        } else {
          if ((!(arg instanceof $c_RTLong))) {
            $thiz.java$util$Formatter$$throwIllegalFormatConversionException__C__O__E(conversionLower, arg)
          };
          var t$1 = $uJ(arg);
          var lo$1 = t$1.RTLong__f_lo;
          var hi$1 = t$1.RTLong__f_hi;
          if (isOctal) {
            var this$14 = $m_jl_Long$();
            var str$6 = this$14.java$lang$Long$$toOctalString__I__I__T(lo$1, hi$1)
          } else {
            var this$15 = $m_jl_Long$();
            var str$6 = this$15.java$lang$Long$$toHexString__I__I__T(lo$1, hi$1)
          }
        };
        if (((76 & flags) !== 0)) {
          $thiz.java$util$Formatter$$throwFormatFlagsConversionMismatchException__C__I__I__E(conversionLower, flags, 76)
        };
        $p_ju_Formatter__padAndSendToDest__ju_Formatter$LocaleInfo__I__I__T__T__V($thiz, $m_ju_Formatter$RootLocaleInfo$(), flags, width, prefix, $p_ju_Formatter__applyNumberUpperCase__I__T__T($thiz, flags, str$6))
      };
      break
    }
    case 101:
    case 102:
    case 103: {
      if (((typeof arg) === "number")) {
        var x2$6 = $uD(arg);
        if (((x2$6 !== x2$6) || ((x2$6 === Infinity) || (x2$6 === (-Infinity))))) {
          $p_ju_Formatter__formatNaNOrInfinite__I__I__D__V($thiz, flags, width, x2$6)
        } else {
          $p_ju_Formatter__formatDecimal$1__ju_Formatter$Decimal__I__I__C__ju_Formatter$LocaleInfo__I__V($thiz, $m_ju_Formatter$().java$util$Formatter$$numberToDecimal__D__ju_Formatter$Decimal(x2$6), flags, precision, conversionLower, localeInfo, width)
        }
      } else if (false) {
        var x3$4 = $as_Ljava_math_BigDecimal(arg);
        $p_ju_Formatter__formatDecimal$1__ju_Formatter$Decimal__I__I__C__ju_Formatter$LocaleInfo__I__V($thiz, $m_ju_Formatter$().java$util$Formatter$$bigDecimalToDecimal__Ljava_math_BigDecimal__ju_Formatter$Decimal(x3$4), flags, precision, conversionLower, localeInfo, width)
      } else {
        $thiz.java$util$Formatter$$throwIllegalFormatConversionException__C__O__E(conversionLower, arg)
      };
      break
    }
    case 97: {
      if (((typeof arg) === "number")) {
        var x2$7 = $uD(arg);
        $p_ju_Formatter__formatHexFloatingPoint__I__I__I__D__V($thiz, flags, width, precision, x2$7)
      } else {
        $thiz.java$util$Formatter$$throwIllegalFormatConversionException__C__O__E(conversionLower, arg)
      };
      break
    }
    default: {
      throw new $c_jl_AssertionError((("Unknown conversion '" + $bC(conversionLower)) + "' was not rejected earlier"))
    }
  }
}
function $p_ju_Formatter__flagsToString__I__T($thiz, flags) {
  return ((((((((((1 & flags) !== 0) ? "-" : "") + (((2 & flags) !== 0) ? "#" : "")) + (((4 & flags) !== 0) ? "+" : "")) + (((8 & flags) !== 0) ? " " : "")) + (((16 & flags) !== 0) ? "0" : "")) + (((32 & flags) !== 0) ? "," : "")) + (((64 & flags) !== 0) ? "(" : "")) + (((128 & flags) !== 0) ? "<" : ""))
}
function $p_ju_Formatter__computerizedScientificNotation__ju_Formatter$Decimal__I__Z__T($thiz, x, digitsAfterDot, forceDecimalSep) {
  var rounded = x.round__I__ju_Formatter$Decimal(((1 + digitsAfterDot) | 0));
  var signStr = (rounded.ju_Formatter$Decimal__f_negative ? "-" : "");
  var intStr = rounded.ju_Formatter$Decimal__f_unscaledValue;
  var fractionalDigitCount = (((-1) + intStr.length) | 0);
  var missingZeros = ((digitsAfterDot - fractionalDigitCount) | 0);
  if ((intStr.length < 1)) {
    $charAt(intStr, 1)
  };
  var integerPart = $as_T(intStr.substring(0, 1));
  if ((intStr.length < 1)) {
    $charAt(intStr, 1)
  };
  var fractionalPart = (("" + $as_T(intStr.substring(1))) + $m_ju_Formatter$().java$util$Formatter$$strOfZeros__I__T(missingZeros));
  var significandStr = (((fractionalPart === "") && (!forceDecimalSep)) ? integerPart : ((integerPart + ".") + fractionalPart));
  var exponent = ((fractionalDigitCount - rounded.ju_Formatter$Decimal__f_scale) | 0);
  var exponentSign = ((exponent < 0) ? "-" : "+");
  var this$2 = ((exponent < 0) ? ((-exponent) | 0) : exponent);
  var exponentAbsStr0 = ("" + this$2);
  var exponentAbsStr = ((exponentAbsStr0.length === 1) ? ("0" + exponentAbsStr0) : exponentAbsStr0);
  return ((((signStr + significandStr) + "e") + exponentSign) + exponentAbsStr)
}
function $p_ju_Formatter__decimalNotation__ju_Formatter$Decimal__I__Z__T($thiz, x, scale, forceDecimalSep) {
  var rounded = x.setScale__I__ju_Formatter$Decimal(scale);
  var signStr = (rounded.ju_Formatter$Decimal__f_negative ? "-" : "");
  var intStr = rounded.ju_Formatter$Decimal__f_unscaledValue;
  var intStrLen = intStr.length;
  var minDigits = ((1 + scale) | 0);
  var expandedIntStr = ((intStrLen >= minDigits) ? intStr : (("" + $m_ju_Formatter$().java$util$Formatter$$strOfZeros__I__T(((minDigits - intStrLen) | 0))) + intStr));
  var dotPos = ((expandedIntStr.length - scale) | 0);
  if ((dotPos > expandedIntStr.length)) {
    $charAt(expandedIntStr, dotPos)
  };
  if ((dotPos < 0)) {
    $charAt(expandedIntStr, (-1))
  };
  var integerPart = (signStr + $as_T(expandedIntStr.substring(0, dotPos)));
  if (((scale === 0) && (!forceDecimalSep))) {
    return integerPart
  } else {
    if (((dotPos < 0) || (dotPos > expandedIntStr.length))) {
      $charAt(expandedIntStr, dotPos)
    };
    return ((integerPart + ".") + $as_T(expandedIntStr.substring(dotPos)))
  }
}
function $p_ju_Formatter__generalScientificNotation__ju_Formatter$Decimal__I__Z__T($thiz, x, precision, forceDecimalSep) {
  var p = ((precision === 0) ? 1 : precision);
  var rounded = x.round__I__ju_Formatter$Decimal(p);
  var this$1 = rounded.ju_Formatter$Decimal__f_unscaledValue;
  var orderOfMagnitude = (((((-1) + this$1.length) | 0) - rounded.ju_Formatter$Decimal__f_scale) | 0);
  if (((orderOfMagnitude >= (-4)) && (orderOfMagnitude < p))) {
    var b = (((-1) + ((p - orderOfMagnitude) | 0)) | 0);
    return $p_ju_Formatter__decimalNotation__ju_Formatter$Decimal__I__Z__T($thiz, rounded, ((b < 0) ? 0 : b), forceDecimalSep)
  } else {
    return $p_ju_Formatter__computerizedScientificNotation__ju_Formatter$Decimal__I__Z__T($thiz, rounded, (((-1) + p) | 0), forceDecimalSep)
  }
}
function $p_ju_Formatter__formatHexFloatingPoint__I__I__I__D__V($thiz, flags, width, precision, arg) {
  if (((arg !== arg) || ((arg === Infinity) || (arg === (-Infinity))))) {
    $p_ju_Formatter__formatNaNOrInfinite__I__I__D__V($thiz, flags, width, arg)
  } else {
    var t = $m_jl_FloatingPointBits$().doubleToLongBits__D__J(arg);
    var lo = t.RTLong__f_lo;
    var hi = t.RTLong__f_hi;
    var negative = (hi < 0);
    var hi$1 = (1048575 & hi);
    var lo$1 = ((hi >>> 20) | 0);
    var biasedExponent = (2047 & lo$1);
    var actualPrecision = ((precision === 0) ? 1 : ((precision > 12) ? (-1) : precision));
    var signStr = (negative ? "-" : (((4 & flags) !== 0) ? "+" : (((8 & flags) !== 0) ? " " : "")));
    if ((biasedExponent === 0)) {
      if (((lo === 0) && (hi$1 === 0))) {
        var x1___1 = "0";
        var x1___2 = $L0;
        var x1___3 = 0
      } else if ((actualPrecision === (-1))) {
        var x1___1 = "0";
        var x1___2 = new $c_RTLong(lo, hi$1);
        var x1___3 = (-1022)
      } else {
        var leadingZeros = ((hi$1 !== 0) ? $uI(Math.clz32(hi$1)) : ((32 + $uI(Math.clz32(lo))) | 0));
        var shift = (((-11) + leadingZeros) | 0);
        var lo$2 = (((32 & shift) === 0) ? (lo << shift) : 0);
        var hi$2 = (((32 & shift) === 0) ? (((((lo >>> 1) | 0) >>> ((31 - shift) | 0)) | 0) | (hi$1 << shift)) : (lo << shift));
        var hi$3 = (1048575 & hi$2);
        var normalizedExponent = (((-1022) - shift) | 0);
        var x1___1 = "1";
        var x1___2 = new $c_RTLong(lo$2, hi$3);
        var x1___3 = normalizedExponent
      }
    } else {
      var _3 = (((-1023) + biasedExponent) | 0);
      var x1___1 = "1";
      var x1___2 = new $c_RTLong(lo, hi$1);
      var x1___3 = _3
    };
    var implicitBitStr = $as_T(x1___1);
    var t$1 = $uJ(x1___2);
    var lo$3 = t$1.RTLong__f_lo;
    var hi$4 = t$1.RTLong__f_hi;
    var exponent = $uI(x1___3);
    var t$2 = $uJ(new $c_RTLong(lo$3, hi$4));
    var lo$4 = t$2.RTLong__f_lo;
    var hi$5 = t$2.RTLong__f_hi;
    if ((actualPrecision === (-1))) {
      var roundedMantissa__lo = lo$4;
      var roundedMantissa__hi = hi$5
    } else {
      var n = ((52 - (actualPrecision << 2)) | 0);
      var lo$5 = (((32 & n) === 0) ? (1 << n) : 0);
      var hi$6 = (((32 & n) === 0) ? 0 : (1 << n));
      var lo$6 = (((-1) + lo$5) | 0);
      var hi$7 = ((lo$6 !== (-1)) ? hi$6 : (((-1) + hi$6) | 0));
      var lo$7 = (((lo$5 >>> 1) | 0) | (hi$6 << 31));
      var hi$8 = (hi$6 >> 1);
      var lo$8 = (~lo$6);
      var hi$9 = (~hi$7);
      var lo$9 = (lo$4 & lo$8);
      var hi$10 = (hi$5 & hi$9);
      var lo$10 = (lo$4 & lo$6);
      var hi$11 = (hi$5 & hi$7);
      if (((hi$11 === hi$8) ? (((-2147483648) ^ lo$10) < ((-2147483648) ^ lo$7)) : (hi$11 < hi$8))) {
        var roundedMantissa__lo = lo$9;
        var roundedMantissa__hi = hi$10
      } else if (((hi$11 === hi$8) ? (((-2147483648) ^ lo$10) > ((-2147483648) ^ lo$7)) : (hi$11 > hi$8))) {
        var lo$11 = ((lo$9 + lo$5) | 0);
        var hi$12 = ((((-2147483648) ^ lo$11) < ((-2147483648) ^ lo$9)) ? ((1 + ((hi$10 + hi$6) | 0)) | 0) : ((hi$10 + hi$6) | 0));
        var roundedMantissa__lo = lo$11;
        var roundedMantissa__hi = hi$12
      } else {
        var lo$12 = (lo$9 & lo$5);
        var hi$13 = (hi$10 & hi$6);
        if (((lo$12 === 0) && (hi$13 === 0))) {
          var roundedMantissa__lo = lo$9;
          var roundedMantissa__hi = hi$10
        } else {
          var lo$13 = ((lo$9 + lo$5) | 0);
          var hi$14 = ((((-2147483648) ^ lo$13) < ((-2147483648) ^ lo$9)) ? ((1 + ((hi$10 + hi$6) | 0)) | 0) : ((hi$10 + hi$6) | 0));
          var roundedMantissa__lo = lo$13;
          var roundedMantissa__hi = hi$14
        }
      }
    };
    var this$12 = $m_jl_Long$();
    var hi$15 = roundedMantissa__hi;
    var baseStr = this$12.java$lang$Long$$toHexString__I__I__T(roundedMantissa__lo, hi$15);
    var beginIndex = baseStr.length;
    if (((beginIndex < 0) || (beginIndex > 13))) {
      $charAt("0000000000000", beginIndex)
    };
    var padded = (("" + $as_T("0000000000000".substring(beginIndex))) + baseStr);
    $m_ju_Formatter$();
    var condition = (padded.length === 13);
    if ((!condition)) {
      throw new $c_jl_AssertionError("padded mantissa does not have the right number of bits")
    };
    var minLength = ((actualPrecision < 1) ? 1 : actualPrecision);
    var len = padded.length;
    while (true) {
      if ((len > minLength)) {
        var index = (((-1) + len) | 0);
        var $$x1 = ($charAt(padded, index) === 48)
      } else {
        var $$x1 = false
      };
      if ($$x1) {
        len = (((-1) + len) | 0)
      } else {
        break
      }
    };
    var endIndex = len;
    if ((endIndex > padded.length)) {
      $charAt(padded, endIndex)
    };
    if ((endIndex < 0)) {
      $charAt(padded, (-1))
    };
    var mantissaStr = $as_T(padded.substring(0, endIndex));
    var exponentStr = ("" + exponent);
    var prefix = (signStr + (((256 & flags) !== 0) ? "0X" : "0x"));
    var rest = ((((implicitBitStr + ".") + mantissaStr) + "p") + exponentStr);
    $p_ju_Formatter__padAndSendToDest__ju_Formatter$LocaleInfo__I__I__T__T__V($thiz, $m_ju_Formatter$RootLocaleInfo$(), flags, width, prefix, $p_ju_Formatter__applyNumberUpperCase__I__T__T($thiz, flags, rest))
  }
}
function $p_ju_Formatter__formatNonNumericString__ju_Formatter$LocaleInfo__I__I__I__T__V($thiz, localeInfo, flags, width, precision, str) {
  if (((precision < 0) || (precision >= str.length))) {
    var truncatedStr = str
  } else {
    if ((precision > str.length)) {
      $charAt(str, precision)
    };
    if ((precision < 0)) {
      $charAt(str, (-1))
    };
    var truncatedStr = $as_T(str.substring(0, precision))
  };
  $p_ju_Formatter__padAndSendToDestNoZeroPad__I__I__T__V($thiz, flags, width, $p_ju_Formatter__applyUpperCase__ju_Formatter$LocaleInfo__I__T__T($thiz, localeInfo, flags, truncatedStr))
}
function $p_ju_Formatter__formatNaNOrInfinite__I__I__D__V($thiz, flags, width, x) {
  var str = ((x !== x) ? "NaN" : ((x > 0.0) ? (((4 & flags) !== 0) ? "+Infinity" : (((8 & flags) !== 0) ? " Infinity" : "Infinity")) : (((64 & flags) !== 0) ? "(Infinity)" : "-Infinity")));
  $p_ju_Formatter__padAndSendToDestNoZeroPad__I__I__T__V($thiz, flags, width, $p_ju_Formatter__applyNumberUpperCase__I__T__T($thiz, flags, str))
}
function $p_ju_Formatter__formatNumericString__ju_Formatter$LocaleInfo__I__I__T__T__V($thiz, localeInfo, flags, width, str, basePrefix) {
  if (((str.length >= width) && ((110 & flags) === 0))) {
    var str$1 = $p_ju_Formatter__applyNumberUpperCase__I__T__T($thiz, flags, str);
    $p_ju_Formatter__sendToDest__T__V($thiz, str$1)
  } else if (((126 & flags) === 0)) {
    $p_ju_Formatter__padAndSendToDestNoZeroPad__I__I__T__V($thiz, flags, width, $p_ju_Formatter__applyNumberUpperCase__I__T__T($thiz, flags, str))
  } else {
    if (($charAt(str, 0) !== 45)) {
      if (((4 & flags) !== 0)) {
        var x1___1 = "+";
        var x1___2 = str
      } else if (((8 & flags) !== 0)) {
        var x1___1 = " ";
        var x1___2 = str
      } else {
        var x1___1 = "";
        var x1___2 = str
      }
    } else if (((64 & flags) !== 0)) {
      if ((str.length < 1)) {
        $charAt(str, 1)
      };
      var _2 = ($as_T(str.substring(1)) + ")");
      var x1___1 = "(";
      var x1___2 = _2
    } else {
      if ((str.length < 1)) {
        $charAt(str, 1)
      };
      var _2$1 = $as_T(str.substring(1));
      var x1___1 = "-";
      var x1___2 = _2$1
    };
    var numberPrefix = $as_T(x1___1);
    var rest0 = $as_T(x1___2);
    var prefix = (("" + numberPrefix) + basePrefix);
    var rest = (((32 & flags) !== 0) ? $p_ju_Formatter__insertGroupingCommas__ju_Formatter$LocaleInfo__T__T($thiz, localeInfo, rest0) : rest0);
    var str$2 = $p_ju_Formatter__applyNumberUpperCase__I__T__T($thiz, flags, rest);
    $p_ju_Formatter__padAndSendToDest__ju_Formatter$LocaleInfo__I__I__T__T__V($thiz, localeInfo, flags, width, prefix, str$2)
  }
}
function $p_ju_Formatter__insertGroupingCommas__ju_Formatter$LocaleInfo__T__T($thiz, localeInfo, s) {
  var len = s.length;
  var index = 0;
  while (true) {
    if ((index !== len)) {
      var index$1 = index;
      var c = $charAt(s, index$1);
      var $$x1 = ((c >= 48) && (c <= 57))
    } else {
      var $$x1 = false
    };
    if ($$x1) {
      index = ((1 + index) | 0)
    } else {
      break
    }
  };
  index = (((-3) + index) | 0);
  if ((index <= 0)) {
    return s
  } else {
    var beginIndex = index;
    if (((beginIndex < 0) || (beginIndex > s.length))) {
      $charAt(s, beginIndex)
    };
    var result = $as_T(s.substring(beginIndex));
    while ((index > 3)) {
      var next = (((-3) + index) | 0);
      var endIndex = index;
      if ((next < 0)) {
        $charAt(s, next)
      };
      if ((endIndex > s.length)) {
        $charAt(s, endIndex)
      };
      if ((endIndex < next)) {
        $charAt(s, (-1))
      };
      result = (($as_T(s.substring(next, endIndex)) + ",") + result);
      index = next
    };
    var endIndex$1 = index;
    if ((endIndex$1 > s.length)) {
      $charAt(s, endIndex$1)
    };
    if ((endIndex$1 < 0)) {
      $charAt(s, (-1))
    };
    return (($as_T(s.substring(0, endIndex$1)) + ",") + result)
  }
}
function $p_ju_Formatter__applyNumberUpperCase__I__T__T($thiz, flags, str) {
  return (((256 & flags) !== 0) ? $as_T(str.toUpperCase()) : str)
}
function $p_ju_Formatter__applyUpperCase__ju_Formatter$LocaleInfo__I__T__T($thiz, localeInfo, flags, str) {
  return (((256 & flags) !== 0) ? $as_T(str.toUpperCase()) : str)
}
function $p_ju_Formatter__padAndSendToDestNoZeroPad__I__I__T__V($thiz, flags, width, str) {
  var len = str.length;
  if ((len >= width)) {
    $p_ju_Formatter__sendToDest__T__V($thiz, str)
  } else if (((1 & flags) !== 0)) {
    $p_ju_Formatter__sendToDest__T__T__V($thiz, str, $p_ju_Formatter__strRepeat__T__I__T($thiz, " ", ((width - len) | 0)))
  } else {
    $p_ju_Formatter__sendToDest__T__T__V($thiz, $p_ju_Formatter__strRepeat__T__I__T($thiz, " ", ((width - len) | 0)), str)
  }
}
function $p_ju_Formatter__padAndSendToDest__ju_Formatter$LocaleInfo__I__I__T__T__V($thiz, localeInfo, flags, width, prefix, str) {
  var len = ((prefix.length + str.length) | 0);
  if ((len >= width)) {
    $p_ju_Formatter__sendToDest__T__T__V($thiz, prefix, str)
  } else if (((16 & flags) !== 0)) {
    $p_ju_Formatter__sendToDest__T__T__T__V($thiz, prefix, $p_ju_Formatter__strRepeat__T__I__T($thiz, "0", ((width - len) | 0)), str)
  } else if (((1 & flags) !== 0)) {
    $p_ju_Formatter__sendToDest__T__T__T__V($thiz, prefix, str, $p_ju_Formatter__strRepeat__T__I__T($thiz, " ", ((width - len) | 0)))
  } else {
    $p_ju_Formatter__sendToDest__T__T__T__V($thiz, $p_ju_Formatter__strRepeat__T__I__T($thiz, " ", ((width - len) | 0)), prefix, str)
  }
}
function $p_ju_Formatter__strRepeat__T__I__T($thiz, s, times) {
  var result = "";
  var i = 0;
  while ((i !== times)) {
    result = (("" + result) + s);
    i = ((1 + i) | 0)
  };
  return result
}
function $p_ju_Formatter__throwDuplicateFormatFlagsException__C__E($thiz, flag) {
  throw new $c_ju_DuplicateFormatFlagsException($as_T(String.fromCharCode(flag)))
}
function $p_ju_Formatter__throwUnknownFormatConversionException__C__E($thiz, conversion) {
  throw new $c_ju_UnknownFormatConversionException($as_T(String.fromCharCode(conversion)))
}
function $p_ju_Formatter__throwIllegalFormatPrecisionException__I__E($thiz, precision) {
  throw new $c_ju_IllegalFormatPrecisionException(precision)
}
function $p_ju_Formatter__throwIllegalFormatWidthException__I__E($thiz, width) {
  throw new $c_ju_IllegalFormatWidthException(width)
}
function $p_ju_Formatter__throwIllegalFormatArgumentIndexException__I__E($thiz, index) {
  var msg = ((index === 0) ? "Illegal format argument index = 0" : "Format argument index: (not representable as int)");
  throw new $c_ju_IllegalFormatArgumentIndexException(msg)
}
function $p_ju_Formatter__throwMissingFormatWidthException__T__E($thiz, fullFormatSpecifier) {
  throw new $c_ju_MissingFormatWidthException(fullFormatSpecifier)
}
function $p_ju_Formatter__throwMissingFormatArgumentException__T__E($thiz, fullFormatSpecifier) {
  throw new $c_ju_MissingFormatArgumentException(fullFormatSpecifier)
}
function $p_ju_Formatter__throwIllegalFormatCodePointException__I__E($thiz, arg) {
  throw new $c_ju_IllegalFormatCodePointException(arg)
}
function $p_ju_Formatter__fullFormatSpecifier$1__O__T($thiz, execResult$1) {
  return ("%" + execResult$1[0])
}
function $p_ju_Formatter__formatDecimal$1__ju_Formatter$Decimal__I__I__C__ju_Formatter$LocaleInfo__I__V($thiz, x, flags$1, precision$1, conversionLower$1, localeInfo$1, width$1) {
  var forceDecimalSep = ((2 & flags$1) !== 0);
  var actualPrecision = ((precision$1 >= 0) ? precision$1 : 6);
  switch (conversionLower$1) {
    case 101: {
      var notation = $p_ju_Formatter__computerizedScientificNotation__ju_Formatter$Decimal__I__Z__T($thiz, x, actualPrecision, forceDecimalSep);
      break
    }
    case 102: {
      var notation = $p_ju_Formatter__decimalNotation__ju_Formatter$Decimal__I__Z__T($thiz, x, actualPrecision, forceDecimalSep);
      break
    }
    default: {
      var notation = $p_ju_Formatter__generalScientificNotation__ju_Formatter$Decimal__I__Z__T($thiz, x, actualPrecision, forceDecimalSep)
    }
  };
  $p_ju_Formatter__formatNumericString__ju_Formatter$LocaleInfo__I__I__T__T__V($thiz, localeInfo$1, flags$1, width$1, notation, "")
}
function $ct_ju_Formatter__jl_Appendable__ju_Formatter$LocaleInfo__($thiz, dest, formatterLocaleInfo) {
  $thiz.ju_Formatter__f_java$util$Formatter$$dest = dest;
  $thiz.ju_Formatter__f_formatterLocaleInfo = formatterLocaleInfo;
  $thiz.ju_Formatter__f_stringOutput = "";
  $thiz.ju_Formatter__f_java$util$Formatter$$closed = false;
  return $thiz
}
function $ct_ju_Formatter__($thiz) {
  $ct_ju_Formatter__jl_Appendable__ju_Formatter$LocaleInfo__($thiz, null, $m_ju_Formatter$RootLocaleInfo$());
  return $thiz
}
/** @constructor */
function $c_ju_Formatter() {
  this.ju_Formatter__f_java$util$Formatter$$dest = null;
  this.ju_Formatter__f_formatterLocaleInfo = null;
  this.ju_Formatter__f_stringOutput = null;
  this.ju_Formatter__f_java$util$Formatter$$closed = false
}
$c_ju_Formatter.prototype = new $h_O();
$c_ju_Formatter.prototype.constructor = $c_ju_Formatter;
/** @constructor */
function $h_ju_Formatter() {
  /*<skip>*/
}
$h_ju_Formatter.prototype = $c_ju_Formatter.prototype;
$c_ju_Formatter.prototype.format__T__AO__ju_Formatter = (function(format, args) {
  return $p_ju_Formatter__format__ju_Formatter$LocaleInfo__T__AO__ju_Formatter(this, this.ju_Formatter__f_formatterLocaleInfo, format, args)
});
$c_ju_Formatter.prototype.toString__T = (function() {
  if (this.ju_Formatter__f_java$util$Formatter$$closed) {
    throw new $c_ju_FormatterClosedException()
  };
  return ((this.ju_Formatter__f_java$util$Formatter$$dest === null) ? this.ju_Formatter__f_stringOutput : this.ju_Formatter__f_java$util$Formatter$$dest.jl_StringBuilder__f_java$lang$StringBuilder$$content)
});
$c_ju_Formatter.prototype.java$util$Formatter$$throwIllegalFormatFlagsException__I__E = (function(flags) {
  throw new $c_ju_IllegalFormatFlagsException($p_ju_Formatter__flagsToString__I__T(this, flags))
});
$c_ju_Formatter.prototype.java$util$Formatter$$throwFormatFlagsConversionMismatchException__C__I__I__E = (function(conversionLower, flags, illegalFlags) {
  throw new $c_ju_FormatFlagsConversionMismatchException($p_ju_Formatter__flagsToString__I__T(this, (flags & illegalFlags)), conversionLower)
});
$c_ju_Formatter.prototype.java$util$Formatter$$throwIllegalFormatConversionException__C__O__E = (function(conversionLower, arg) {
  throw new $c_ju_IllegalFormatConversionException(conversionLower, $objectGetClass(arg))
});
var $d_ju_Formatter = new $TypeData().initClass({
  ju_Formatter: 0
}, false, "java.util.Formatter", {
  ju_Formatter: 1,
  O: 1,
  Ljava_io_Closeable: 1,
  jl_AutoCloseable: 1,
  Ljava_io_Flushable: 1
});
$c_ju_Formatter.prototype.$classData = $d_ju_Formatter;
function $p_s_Array$__slowcopy__O__I__O__I__I__V($thiz, src, srcPos, dest, destPos, length) {
  var i = srcPos;
  var j = destPos;
  var srcUntil = ((srcPos + length) | 0);
  while ((i < srcUntil)) {
    $m_sr_ScalaRunTime$().array_update__O__I__O__V(dest, j, $m_sr_ScalaRunTime$().array_apply__O__I__O(src, i));
    i = ((1 + i) | 0);
    j = ((1 + j) | 0)
  }
}
/** @constructor */
function $c_s_Array$() {
  /*<skip>*/
}
$c_s_Array$.prototype = new $h_s_FallbackArrayBuilding();
$c_s_Array$.prototype.constructor = $c_s_Array$;
/** @constructor */
function $h_s_Array$() {
  /*<skip>*/
}
$h_s_Array$.prototype = $c_s_Array$.prototype;
$c_s_Array$.prototype.copy__O__I__O__I__I__V = (function(src, srcPos, dest, destPos, length) {
  var srcClass = $objectGetClass(src);
  if ((srcClass.isArray__Z() && $objectGetClass(dest).isAssignableFrom__jl_Class__Z(srcClass))) {
    $systemArraycopyFull(src, srcPos, dest, destPos, length)
  } else {
    $p_s_Array$__slowcopy__O__I__O__I__I__V(this, src, srcPos, dest, destPos, length)
  }
});
var $d_s_Array$ = new $TypeData().initClass({
  s_Array$: 0
}, false, "scala.Array$", {
  s_Array$: 1,
  s_FallbackArrayBuilding: 1,
  O: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_s_Array$.prototype.$classData = $d_s_Array$;
var $n_s_Array$;
function $m_s_Array$() {
  if ((!$n_s_Array$)) {
    $n_s_Array$ = new $c_s_Array$()
  };
  return $n_s_Array$
}
/** @constructor */
function $c_s_Predef$$eq$colon$eq() {
  /*<skip>*/
}
$c_s_Predef$$eq$colon$eq.prototype = new $h_O();
$c_s_Predef$$eq$colon$eq.prototype.constructor = $c_s_Predef$$eq$colon$eq;
/** @constructor */
function $h_s_Predef$$eq$colon$eq() {
  /*<skip>*/
}
$h_s_Predef$$eq$colon$eq.prototype = $c_s_Predef$$eq$colon$eq.prototype;
$c_s_Predef$$eq$colon$eq.prototype.toString__T = (function() {
  return "<function1>"
});
/** @constructor */
function $c_s_Predef$$less$colon$less() {
  /*<skip>*/
}
$c_s_Predef$$less$colon$less.prototype = new $h_O();
$c_s_Predef$$less$colon$less.prototype.constructor = $c_s_Predef$$less$colon$less;
/** @constructor */
function $h_s_Predef$$less$colon$less() {
  /*<skip>*/
}
$h_s_Predef$$less$colon$less.prototype = $c_s_Predef$$less$colon$less.prototype;
$c_s_Predef$$less$colon$less.prototype.toString__T = (function() {
  return "<function1>"
});
/** @constructor */
function $c_sc_AbstractIterator() {
  /*<skip>*/
}
$c_sc_AbstractIterator.prototype = new $h_O();
$c_sc_AbstractIterator.prototype.constructor = $c_sc_AbstractIterator;
/** @constructor */
function $h_sc_AbstractIterator() {
  /*<skip>*/
}
$h_sc_AbstractIterator.prototype = $c_sc_AbstractIterator.prototype;
$c_sc_AbstractIterator.prototype.isEmpty__Z = (function() {
  return (!this.hasNext__Z())
});
$c_sc_AbstractIterator.prototype.isTraversableAgain__Z = (function() {
  return false
});
$c_sc_AbstractIterator.prototype.drop__I__sc_Iterator = (function(n) {
  return $f_sc_Iterator__drop__I__sc_Iterator(this, n)
});
$c_sc_AbstractIterator.prototype.foreach__F1__V = (function(f) {
  $f_sc_Iterator__foreach__F1__V(this, f)
});
$c_sc_AbstractIterator.prototype.toStream__sci_Stream = (function() {
  return $f_sc_Iterator__toStream__sci_Stream(this)
});
$c_sc_AbstractIterator.prototype.toString__T = (function() {
  return "<iterator>"
});
$c_sc_AbstractIterator.prototype.size__I = (function() {
  return $f_sc_TraversableOnce__size__I(this)
});
$c_sc_AbstractIterator.prototype.$div$colon__O__F2__O = (function(z, op) {
  return $f_sc_TraversableOnce__foldLeft__O__F2__O(this, z, op)
});
$c_sc_AbstractIterator.prototype.foldLeft__O__F2__O = (function(z, op) {
  return $f_sc_TraversableOnce__foldLeft__O__F2__O(this, z, op)
});
$c_sc_AbstractIterator.prototype.toList__sci_List = (function() {
  var this$1 = $m_sci_List$();
  var cbf = this$1.scg_GenTraversableFactory__f_ReusableCBFInstance;
  return $as_sci_List($f_sc_TraversableOnce__to__scg_CanBuildFrom__O(this, cbf))
});
$c_sc_AbstractIterator.prototype.toVector__sci_Vector = (function() {
  var this$1 = $m_sci_Vector$();
  var cbf = this$1.scg_GenTraversableFactory__f_ReusableCBFInstance;
  return $as_sci_Vector($f_sc_TraversableOnce__to__scg_CanBuildFrom__O(this, cbf))
});
$c_sc_AbstractIterator.prototype.mkString__T__T__T__T = (function(start, sep, end) {
  return $f_sc_TraversableOnce__mkString__T__T__T__T(this, start, sep, end)
});
$c_sc_AbstractIterator.prototype.addString__scm_StringBuilder__T__T__T__scm_StringBuilder = (function(b, start, sep, end) {
  return $f_sc_TraversableOnce__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end)
});
$c_sc_AbstractIterator.prototype.seq__sc_TraversableOnce = (function() {
  return this
});
/** @constructor */
function $c_sc_GenMap$$anon$1(thatMap$1) {
  this.sc_GenMap$$anon$1__f_thatMap$1 = null;
  this.sc_GenMap$$anon$1__f_thatMap$1 = thatMap$1
}
$c_sc_GenMap$$anon$1.prototype = new $h_sr_AbstractFunction1();
$c_sc_GenMap$$anon$1.prototype.constructor = $c_sc_GenMap$$anon$1;
/** @constructor */
function $h_sc_GenMap$$anon$1() {
  /*<skip>*/
}
$h_sc_GenMap$$anon$1.prototype = $c_sc_GenMap$$anon$1.prototype;
$c_sc_GenMap$$anon$1.prototype.toString__T = (function() {
  return "<function0>"
});
$c_sc_GenMap$$anon$1.prototype.apply__T2__Z = (function(kv) {
  var v2 = this.sc_GenMap$$anon$1__f_thatMap$1.getOrElse__O__F0__O(kv.T2__f__1, this);
  return ((v2 !== this) && $m_sr_BoxesRunTime$().equals__O__O__Z(v2, kv.T2__f__2))
});
$c_sc_GenMap$$anon$1.prototype.apply__O = (function() {
  return this
});
$c_sc_GenMap$$anon$1.prototype.apply__O__O = (function(v1) {
  return this.apply__T2__Z($as_T2(v1))
});
var $d_sc_GenMap$$anon$1 = new $TypeData().initClass({
  sc_GenMap$$anon$1: 0
}, false, "scala.collection.GenMap$$anon$1", {
  sc_GenMap$$anon$1: 1,
  sr_AbstractFunction1: 1,
  O: 1,
  F1: 1,
  F0: 1
});
$c_sc_GenMap$$anon$1.prototype.$classData = $d_sc_GenMap$$anon$1;
/** @constructor */
function $c_scg_SetFactory() {
  /*<skip>*/
}
$c_scg_SetFactory.prototype = new $h_scg_GenSetFactory();
$c_scg_SetFactory.prototype.constructor = $c_scg_SetFactory;
/** @constructor */
function $h_scg_SetFactory() {
  /*<skip>*/
}
$h_scg_SetFactory.prototype = $c_scg_SetFactory.prototype;
/** @constructor */
function $c_sci_Map$() {
  this.sci_Map$__f_ReusableCBF = null;
  this.sci_Map$__f_scala$collection$immutable$Map$$Sentinel = null;
  $n_sci_Map$ = this;
  this.sci_Map$__f_ReusableCBF = new $c_scg_GenMapFactory$MapCanBuildFrom(this);
  this.sci_Map$__f_scala$collection$immutable$Map$$Sentinel = $ct_O__(new $c_O())
}
$c_sci_Map$.prototype = new $h_scg_ImmutableMapFactory();
$c_sci_Map$.prototype.constructor = $c_sci_Map$;
/** @constructor */
function $h_sci_Map$() {
  /*<skip>*/
}
$h_sci_Map$.prototype = $c_sci_Map$.prototype;
$c_sci_Map$.prototype.newBuilder__scm_Builder = (function() {
  return new $c_sci_Map$MapBuilderImpl()
});
$c_sci_Map$.prototype.scala$collection$immutable$Map$$isHashMapCBF__scg_CanBuildFrom__Z = (function(cbf) {
  if (false) {
    var x2 = $as_sc_package$WrappedCanBuildFrom(cbf);
    var unwrapped = x2.wrapped__scg_CanBuildFrom();
    var this$1 = $m_sci_HashMap$();
    return (unwrapped === this$1.sci_HashMap$__f_ReusableCBF)
  } else {
    var this$2 = $m_sci_HashMap$();
    return (cbf === this$2.sci_HashMap$__f_ReusableCBF)
  }
});
$c_sci_Map$.prototype.scala$collection$immutable$Map$$isMapCBF__scg_CanBuildFrom__Z = (function(cbf) {
  if (false) {
    var x2 = $as_sc_package$WrappedCanBuildFrom(cbf);
    var unwrapped = x2.wrapped__scg_CanBuildFrom();
    return (unwrapped === $m_sci_Map$().sci_Map$__f_ReusableCBF)
  } else {
    return (cbf === $m_sci_Map$().sci_Map$__f_ReusableCBF)
  }
});
$c_sci_Map$.prototype.empty__sc_GenMap = (function() {
  return $m_sci_Map$EmptyMap$()
});
var $d_sci_Map$ = new $TypeData().initClass({
  sci_Map$: 0
}, false, "scala.collection.immutable.Map$", {
  sci_Map$: 1,
  scg_ImmutableMapFactory: 1,
  scg_MapFactory: 1,
  scg_GenMapFactory: 1,
  O: 1
});
$c_sci_Map$.prototype.$classData = $d_sci_Map$;
var $n_sci_Map$;
function $m_sci_Map$() {
  if ((!$n_sci_Map$)) {
    $n_sci_Map$ = new $c_sci_Map$()
  };
  return $n_sci_Map$
}
/** @constructor */
function $c_scm_GrowingBuilder(empty) {
  this.scm_GrowingBuilder__f_elems = null;
  this.scm_GrowingBuilder__f_elems = empty
}
$c_scm_GrowingBuilder.prototype = new $h_O();
$c_scm_GrowingBuilder.prototype.constructor = $c_scm_GrowingBuilder;
/** @constructor */
function $h_scm_GrowingBuilder() {
  /*<skip>*/
}
$h_scm_GrowingBuilder.prototype = $c_scm_GrowingBuilder.prototype;
$c_scm_GrowingBuilder.prototype.sizeHint__I__V = (function(size) {
  /*<skip>*/
});
$c_scm_GrowingBuilder.prototype.sizeHintBounded__I__sc_TraversableLike__V = (function(size, boundingColl) {
  $f_scm_Builder__sizeHintBounded__I__sc_TraversableLike__V(this, size, boundingColl)
});
$c_scm_GrowingBuilder.prototype.$plus$plus$eq__sc_TraversableOnce__scg_Growable = (function(xs) {
  return $f_scg_Growable__$plus$plus$eq__sc_TraversableOnce__scg_Growable(this, xs)
});
$c_scm_GrowingBuilder.prototype.$plus$eq__O__scm_GrowingBuilder = (function(x) {
  this.scm_GrowingBuilder__f_elems.$plus$eq__O__scg_Growable(x);
  return this
});
$c_scm_GrowingBuilder.prototype.result__O = (function() {
  return this.scm_GrowingBuilder__f_elems
});
$c_scm_GrowingBuilder.prototype.$plus$eq__O__scg_Growable = (function(elem) {
  return this.$plus$eq__O__scm_GrowingBuilder(elem)
});
$c_scm_GrowingBuilder.prototype.$plus$eq__O__scm_Builder = (function(elem) {
  return this.$plus$eq__O__scm_GrowingBuilder(elem)
});
var $d_scm_GrowingBuilder = new $TypeData().initClass({
  scm_GrowingBuilder: 0
}, false, "scala.collection.mutable.GrowingBuilder", {
  scm_GrowingBuilder: 1,
  O: 1,
  scm_Builder: 1,
  scg_Growable: 1,
  scg_Clearable: 1
});
$c_scm_GrowingBuilder.prototype.$classData = $d_scm_GrowingBuilder;
function $is_scm_ReusableBuilder(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scm_ReusableBuilder)))
}
function $as_scm_ReusableBuilder(obj) {
  return (($is_scm_ReusableBuilder(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.ReusableBuilder"))
}
function $isArrayOf_scm_ReusableBuilder(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_ReusableBuilder)))
}
function $asArrayOf_scm_ReusableBuilder(obj, depth) {
  return (($isArrayOf_scm_ReusableBuilder(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.ReusableBuilder;", depth))
}
/** @constructor */
function $c_s_math_Ordering$() {
  $n_s_math_Ordering$ = this;
  new $c_s_math_Ordering$Reverse($m_s_math_Ordering$Int$())
}
$c_s_math_Ordering$.prototype = new $h_O();
$c_s_math_Ordering$.prototype.constructor = $c_s_math_Ordering$;
/** @constructor */
function $h_s_math_Ordering$() {
  /*<skip>*/
}
$h_s_math_Ordering$.prototype = $c_s_math_Ordering$.prototype;
var $d_s_math_Ordering$ = new $TypeData().initClass({
  s_math_Ordering$: 0
}, false, "scala.math.Ordering$", {
  s_math_Ordering$: 1,
  O: 1,
  s_math_LowPriorityOrderingImplicits: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_s_math_Ordering$.prototype.$classData = $d_s_math_Ordering$;
var $n_s_math_Ordering$;
function $m_s_math_Ordering$() {
  if ((!$n_s_math_Ordering$)) {
    $n_s_math_Ordering$ = new $c_s_math_Ordering$()
  };
  return $n_s_math_Ordering$
}
/** @constructor */
function $c_sjs_js_Iterator$WrappedIterator(self) {
  this.sjs_js_Iterator$WrappedIterator__f_scala$scalajs$js$Iterator$WrappedIterator$$self = null;
  this.sjs_js_Iterator$WrappedIterator__f_scala$scalajs$js$Iterator$WrappedIterator$$lastEntry = null;
  this.sjs_js_Iterator$WrappedIterator__f_scala$scalajs$js$Iterator$WrappedIterator$$self = self;
  this.sjs_js_Iterator$WrappedIterator__f_scala$scalajs$js$Iterator$WrappedIterator$$lastEntry = self.next()
}
$c_sjs_js_Iterator$WrappedIterator.prototype = new $h_O();
$c_sjs_js_Iterator$WrappedIterator.prototype.constructor = $c_sjs_js_Iterator$WrappedIterator;
/** @constructor */
function $h_sjs_js_Iterator$WrappedIterator() {
  /*<skip>*/
}
$h_sjs_js_Iterator$WrappedIterator.prototype = $c_sjs_js_Iterator$WrappedIterator.prototype;
$c_sjs_js_Iterator$WrappedIterator.prototype.isEmpty__Z = (function() {
  return $uZ(this.sjs_js_Iterator$WrappedIterator__f_scala$scalajs$js$Iterator$WrappedIterator$$lastEntry.done)
});
$c_sjs_js_Iterator$WrappedIterator.prototype.isTraversableAgain__Z = (function() {
  return false
});
$c_sjs_js_Iterator$WrappedIterator.prototype.drop__I__sc_Iterator = (function(n) {
  return $f_sc_Iterator__drop__I__sc_Iterator(this, n)
});
$c_sjs_js_Iterator$WrappedIterator.prototype.foreach__F1__V = (function(f) {
  $f_sc_Iterator__foreach__F1__V(this, f)
});
$c_sjs_js_Iterator$WrappedIterator.prototype.toStream__sci_Stream = (function() {
  return $f_sc_Iterator__toStream__sci_Stream(this)
});
$c_sjs_js_Iterator$WrappedIterator.prototype.toString__T = (function() {
  return "<iterator>"
});
$c_sjs_js_Iterator$WrappedIterator.prototype.size__I = (function() {
  return $f_sc_TraversableOnce__size__I(this)
});
$c_sjs_js_Iterator$WrappedIterator.prototype.$div$colon__O__F2__O = (function(z, op) {
  return $f_sc_TraversableOnce__foldLeft__O__F2__O(this, z, op)
});
$c_sjs_js_Iterator$WrappedIterator.prototype.foldLeft__O__F2__O = (function(z, op) {
  return $f_sc_TraversableOnce__foldLeft__O__F2__O(this, z, op)
});
$c_sjs_js_Iterator$WrappedIterator.prototype.toList__sci_List = (function() {
  var this$1 = $m_sci_List$();
  var cbf = this$1.scg_GenTraversableFactory__f_ReusableCBFInstance;
  return $as_sci_List($f_sc_TraversableOnce__to__scg_CanBuildFrom__O(this, cbf))
});
$c_sjs_js_Iterator$WrappedIterator.prototype.toVector__sci_Vector = (function() {
  var this$1 = $m_sci_Vector$();
  var cbf = this$1.scg_GenTraversableFactory__f_ReusableCBFInstance;
  return $as_sci_Vector($f_sc_TraversableOnce__to__scg_CanBuildFrom__O(this, cbf))
});
$c_sjs_js_Iterator$WrappedIterator.prototype.mkString__T__T__T__T = (function(start, sep, end) {
  return $f_sc_TraversableOnce__mkString__T__T__T__T(this, start, sep, end)
});
$c_sjs_js_Iterator$WrappedIterator.prototype.addString__scm_StringBuilder__T__T__T__scm_StringBuilder = (function(b, start, sep, end) {
  return $f_sc_TraversableOnce__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end)
});
$c_sjs_js_Iterator$WrappedIterator.prototype.hasNext__Z = (function() {
  return (!$uZ(this.sjs_js_Iterator$WrappedIterator__f_scala$scalajs$js$Iterator$WrappedIterator$$lastEntry.done))
});
$c_sjs_js_Iterator$WrappedIterator.prototype.next__O = (function() {
  var value = this.sjs_js_Iterator$WrappedIterator__f_scala$scalajs$js$Iterator$WrappedIterator$$lastEntry.value;
  this.sjs_js_Iterator$WrappedIterator__f_scala$scalajs$js$Iterator$WrappedIterator$$lastEntry = this.sjs_js_Iterator$WrappedIterator__f_scala$scalajs$js$Iterator$WrappedIterator$$self.next();
  return value
});
$c_sjs_js_Iterator$WrappedIterator.prototype.seq__sc_TraversableOnce = (function() {
  return this
});
var $d_sjs_js_Iterator$WrappedIterator = new $TypeData().initClass({
  sjs_js_Iterator$WrappedIterator: 0
}, false, "scala.scalajs.js.Iterator$WrappedIterator", {
  sjs_js_Iterator$WrappedIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1
});
$c_sjs_js_Iterator$WrappedIterator.prototype.$classData = $d_sjs_js_Iterator$WrappedIterator;
var $r_sjs_js_JSConverters$IterableAdapter__col = Symbol("col");
function $s_sjs_js_JSConverters$IterableAdapter__jsIterator__sjs_js_JSConverters$IterableAdapter__sjs_js_Iterator(this$1) {
  var self = $as_sc_GenIterable(this$1[$r_sjs_js_JSConverters$IterableAdapter__col]).iterator__sc_Iterator();
  return new ($a_sjs_js_JSConverters$IteratorAdapter())(self)
}
var $b_sjs_js_JSConverters$IterableAdapter;
function $a_sjs_js_JSConverters$IterableAdapter() {
  if ((!$b_sjs_js_JSConverters$IterableAdapter)) {
    $b_sjs_js_JSConverters$IterableAdapter = class $b_sjs_js_JSConverters$IterableAdapter extends Object {
      constructor(arg) {
        var col = null;
        col = $as_sc_GenIterable(arg);
        var overload = 0;
        super();
        this[$r_sjs_js_JSConverters$IterableAdapter__col] = null;
        this[$r_sjs_js_JSConverters$IterableAdapter__col] = col
      };
      [Symbol.iterator]() {
        return $s_sjs_js_JSConverters$IterableAdapter__jsIterator__sjs_js_JSConverters$IterableAdapter__sjs_js_Iterator(this)
      };
    }
  };
  return $b_sjs_js_JSConverters$IterableAdapter
}
var $r_sjs_js_JSConverters$IteratorAdapter__scala$scalajs$js$JSConverters$IteratorAdapter$$it = Symbol("it");
function $s_sjs_js_JSConverters$IteratorAdapter__next__sjs_js_JSConverters$IteratorAdapter__sjs_js_Iterator$Entry(this$1) {
  return ($as_sc_Iterator(this$1[$r_sjs_js_JSConverters$IteratorAdapter__scala$scalajs$js$JSConverters$IteratorAdapter$$it]).hasNext__Z() ? (() => {
    var outer = null;
    outer = this$1;
    var this$2 = {};
    this$2.done = false;
    this$2.value = null;
    this$2.done = false;
    this$2.value = $as_sc_Iterator(outer[$r_sjs_js_JSConverters$IteratorAdapter__scala$scalajs$js$JSConverters$IteratorAdapter$$it]).next__O();
    return this$2
  })() : (() => {
    var outer$1 = null;
    outer$1 = this$1;
    var this$3 = {};
    this$3.done = false;
    this$3.value = null;
    this$3.done = true;
    this$3.value = (void 0);
    return this$3
  })())
}
var $b_sjs_js_JSConverters$IteratorAdapter;
function $a_sjs_js_JSConverters$IteratorAdapter() {
  if ((!$b_sjs_js_JSConverters$IteratorAdapter)) {
    $b_sjs_js_JSConverters$IteratorAdapter = class $b_sjs_js_JSConverters$IteratorAdapter extends Object {
      constructor(arg) {
        var it = null;
        it = $as_sc_Iterator(arg);
        var overload = 0;
        super();
        this[$r_sjs_js_JSConverters$IteratorAdapter__scala$scalajs$js$JSConverters$IteratorAdapter$$it] = null;
        this[$r_sjs_js_JSConverters$IteratorAdapter__scala$scalajs$js$JSConverters$IteratorAdapter$$it] = it
      };
      "next"() {
        return $s_sjs_js_JSConverters$IteratorAdapter__next__sjs_js_JSConverters$IteratorAdapter__sjs_js_Iterator$Entry(this)
      };
    }
  };
  return $b_sjs_js_JSConverters$IteratorAdapter
}
function $ct_Lcfx70_cfpl_core_BCone__D__D__D__D__D__($thiz, d1, d2, h, dd, ang) {
  $thiz.Lcfx70_cfpl_core_BCone__f_d1 = d1;
  $thiz.Lcfx70_cfpl_core_BCone__f_d2 = d2;
  $thiz.Lcfx70_cfpl_core_BCone__f_h = h;
  $thiz.Lcfx70_cfpl_core_BCone__f_dd = dd;
  var $$x1 = $m_Lcfx70_cfpl_core_BGeometry$();
  var array = [0.0, 0.0, 0.0];
  var crds = $ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), array);
  $thiz.Lcfx70_cfpl_core_BCone__f_bpts = $$x1.roundPts__D__Lcfx70_vecquat_Vec__D__D__sc_Seq((d1 / 2.0), $ct_Lcfx70_vecquat_Vec__sc_Seq__(new $c_Lcfx70_vecquat_Vec(), crds), ((-ang) / 2.0), (ang / 2.0));
  var $$x2 = $m_Lcfx70_cfpl_core_BGeometry$();
  var array$1 = [dd, 0.0, h];
  var crds$1 = $ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), array$1);
  $thiz.Lcfx70_cfpl_core_BCone__f_tpts = $$x2.roundPts__D__Lcfx70_vecquat_Vec__D__D__sc_Seq((d2 / 2.0), $ct_Lcfx70_vecquat_Vec__sc_Seq__(new $c_Lcfx70_vecquat_Vec(), crds$1), ((-ang) / 2.0), (ang / 2.0));
  return $thiz
}
/** @constructor */
function $c_Lcfx70_cfpl_core_BCone() {
  this.Lcfx70_cfpl_core_BCone__f_d1 = 0.0;
  this.Lcfx70_cfpl_core_BCone__f_d2 = 0.0;
  this.Lcfx70_cfpl_core_BCone__f_h = 0.0;
  this.Lcfx70_cfpl_core_BCone__f_dd = 0.0;
  this.Lcfx70_cfpl_core_BCone__f_bpts = null;
  this.Lcfx70_cfpl_core_BCone__f_tpts = null
}
$c_Lcfx70_cfpl_core_BCone.prototype = new $h_Lcfx70_cfpl_core_BGeometry();
$c_Lcfx70_cfpl_core_BCone.prototype.constructor = $c_Lcfx70_cfpl_core_BCone;
/** @constructor */
function $h_Lcfx70_cfpl_core_BCone() {
  /*<skip>*/
}
$h_Lcfx70_cfpl_core_BCone.prototype = $c_Lcfx70_cfpl_core_BCone.prototype;
$c_Lcfx70_cfpl_core_BCone.prototype.bpts__sc_Seq = (function() {
  return this.Lcfx70_cfpl_core_BCone__f_bpts
});
$c_Lcfx70_cfpl_core_BCone.prototype.bpts_$eq__sc_Seq__V = (function(x$1) {
  this.Lcfx70_cfpl_core_BCone__f_bpts = x$1
});
$c_Lcfx70_cfpl_core_BCone.prototype.tpts__sc_Seq = (function() {
  return this.Lcfx70_cfpl_core_BCone__f_tpts
});
$c_Lcfx70_cfpl_core_BCone.prototype.tpts_$eq__sc_Seq__V = (function(x$1) {
  this.Lcfx70_cfpl_core_BCone__f_tpts = x$1
});
$c_Lcfx70_cfpl_core_BCone.prototype.pts__sc_Seq = (function() {
  return $m_Lcfx70_cfpl_core_BGeometry$().shell__sc_Seq__sc_Seq__sc_Seq(this.Lcfx70_cfpl_core_BCone__f_bpts, this.Lcfx70_cfpl_core_BCone__f_tpts)
});
$c_Lcfx70_cfpl_core_BCone.prototype.normals__sc_Seq = (function() {
  return $m_Lcfx70_cfpl_core_BGeometry$().shellNormals__sc_Seq__sc_Seq__sc_Seq(this.Lcfx70_cfpl_core_BCone__f_bpts, this.Lcfx70_cfpl_core_BCone__f_tpts)
});
$c_Lcfx70_cfpl_core_BCone.prototype.cut__Lcfx70_cfpl_core_LineIntersectable__Lcfx70_cfpl_core_BCone = (function(c) {
  var end = this.Lcfx70_cfpl_core_BCone__f_tpts.length__I();
  var isEmpty = (end <= 0);
  if (isEmpty) {
    var scala$collection$immutable$Range$$numRangeElements = 0
  } else {
    var hi = (end >> 31);
    var scala$collection$immutable$Range$$numRangeElements = (((hi === 0) ? (((-2147483648) ^ end) > (-1)) : (hi > 0)) ? (-1) : end)
  };
  var scala$collection$immutable$Range$$lastElement = (((-1) + end) | 0);
  $m_sci_IndexedSeq$();
  $m_sci_IndexedSeq$();
  $m_sci_Vector$();
  var b = new $c_sci_VectorBuilder();
  if ((scala$collection$immutable$Range$$numRangeElements < 0)) {
    $m_sci_Range$().scala$collection$immutable$Range$$fail__I__I__I__Z__E(0, end, 1, false)
  };
  if ((!isEmpty)) {
    var i = 0;
    while (true) {
      var arg1 = i;
      var x1 = c.intersect__Lcfx70_cfpl_core_Line3__s_Option(new $c_Lcfx70_cfpl_core_Line3($as_Lcfx70_vecquat_Vec(this.Lcfx70_cfpl_core_BCone__f_tpts.apply__I__O(arg1)), $as_Lcfx70_vecquat_Vec(this.Lcfx70_cfpl_core_BCone__f_bpts.apply__I__O(arg1))));
      if ((x1 instanceof $c_s_Some)) {
        var x2 = $as_s_Some(x1);
        var p = $as_Lcfx70_vecquat_Vec(x2.s_Some__f_value);
        var elem = p
      } else {
        var x = $m_s_None$();
        if ((!(x === x1))) {
          throw new $c_s_MatchError(x1)
        };
        var elem = $as_Lcfx70_vecquat_Vec(this.Lcfx70_cfpl_core_BCone__f_bpts.apply__I__O(arg1))
      };
      b.$plus$eq__O__sci_VectorBuilder(elem);
      if ((i === scala$collection$immutable$Range$$lastElement)) {
        break
      };
      i = ((1 + i) | 0)
    }
  };
  var npts = b.result__sci_Vector();
  this.Lcfx70_cfpl_core_BCone__f_bpts = npts;
  return this
});
$c_Lcfx70_cfpl_core_BCone.prototype.apex__Lcfx70_vecquat_Vec = (function() {
  var array = [((-this.Lcfx70_cfpl_core_BCone__f_d1) / 2.0), 0.0, 0.0];
  var crds = $ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), array);
  var $$x1 = $ct_Lcfx70_vecquat_Vec__sc_Seq__(new $c_Lcfx70_vecquat_Vec(), crds);
  var array$1 = [(this.Lcfx70_cfpl_core_BCone__f_dd - (this.Lcfx70_cfpl_core_BCone__f_d2 / 2.0)), 0.0, this.Lcfx70_cfpl_core_BCone__f_h];
  var crds$1 = $ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), array$1);
  var l1 = new $c_Lcfx70_cfpl_core_Line3($$x1, $ct_Lcfx70_vecquat_Vec__sc_Seq__(new $c_Lcfx70_vecquat_Vec(), crds$1));
  var array$2 = [(this.Lcfx70_cfpl_core_BCone__f_d1 / 2.0), 0.0, 0.0];
  var crds$2 = $ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), array$2);
  var $$x2 = $ct_Lcfx70_vecquat_Vec__sc_Seq__(new $c_Lcfx70_vecquat_Vec(), crds$2);
  var array$3 = [(this.Lcfx70_cfpl_core_BCone__f_dd + (this.Lcfx70_cfpl_core_BCone__f_d2 / 2.0)), 0.0, this.Lcfx70_cfpl_core_BCone__f_h];
  var crds$3 = $ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), array$3);
  var l2 = new $c_Lcfx70_cfpl_core_Line3($$x2, $ct_Lcfx70_vecquat_Vec__sc_Seq__(new $c_Lcfx70_vecquat_Vec(), crds$3));
  return $as_Lcfx70_vecquat_Vec(l1.intersect__Lcfx70_cfpl_core_Line3__s_Option(l2).get__O())
});
$c_Lcfx70_cfpl_core_BCone.prototype.intersect__Lcfx70_cfpl_core_Line3__s_Option = (function(l) {
  var p = $m_Lcfx70_cfpl_core_Plane3$().apply__Lcfx70_vecquat_Vec__Lcfx70_vecquat_Vec__Lcfx70_vecquat_Vec__Lcfx70_cfpl_core_Plane3(l.Lcfx70_cfpl_core_Line3__f_p1, l.Lcfx70_cfpl_core_Line3__f_p2, this.apex__Lcfx70_vecquat_Vec());
  var lxy = $as_Lcfx70_cfpl_core_Line3(p.intersectXY__s_Option().get__O());
  var x1 = lxy.intersectXYCircle__D__s_Option((this.Lcfx70_cfpl_core_BCone__f_d1 / 2.0));
  if ((x1 instanceof $c_s_Some)) {
    var x2 = $as_s_Some(x1);
    var p3 = $as_T2(x2.s_Some__f_value);
    if ((p3 !== null)) {
      var pp1 = $as_Lcfx70_vecquat_Vec(p3.T2__f__1);
      var pp2 = $as_Lcfx70_vecquat_Vec(p3.T2__f__2);
      var pb = ((l.Lcfx70_cfpl_core_Line3__f_p1.$minus__Lcfx70_vecquat_Vec__Lcfx70_vecquat_Vec(pp1).norm__D() < l.Lcfx70_cfpl_core_Line3__f_p1.$minus__Lcfx70_vecquat_Vec__Lcfx70_vecquat_Vec(pp2).norm__D()) ? pp1 : pp2);
      var cs = ($uD(pb.Lcfx70_vecquat_Vec__f_crds.apply__I__O(0)) / (this.Lcfx70_cfpl_core_BCone__f_d1 / 2.0));
      var sn = ($uD(pb.Lcfx70_vecquat_Vec__f_crds.apply__I__O(1)) / (this.Lcfx70_cfpl_core_BCone__f_d1 / 2.0));
      var array = [(this.Lcfx70_cfpl_core_BCone__f_dd + ((this.Lcfx70_cfpl_core_BCone__f_d2 / 2.0) * cs)), ((this.Lcfx70_cfpl_core_BCone__f_d2 / 2.0) * sn), this.Lcfx70_cfpl_core_BCone__f_h];
      var crds = $ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), array);
      var pt = $ct_Lcfx70_vecquat_Vec__sc_Seq__(new $c_Lcfx70_vecquat_Vec(), crds);
      var ll = new $c_Lcfx70_cfpl_core_Line3(pb, pt);
      var x1$2 = l.intersect__Lcfx70_cfpl_core_Line3__s_Option(ll);
      if ((x1$2 instanceof $c_s_Some)) {
        var x2$2 = $as_s_Some(x1$2);
        var lp = $as_Lcfx70_vecquat_Vec(x2$2.s_Some__f_value);
        return new $c_s_Some(lp)
      } else {
        var x = $m_s_None$();
        if ((x === x1$2)) {
          return $m_s_None$()
        } else {
          throw new $c_s_MatchError(x1$2)
        }
      }
    }
  };
  var x$3 = $m_s_None$();
  if ((x$3 === x1)) {
    return $m_s_None$()
  };
  throw new $c_s_MatchError(x1)
});
$c_Lcfx70_cfpl_core_BCone.prototype.tophalf__sc_Seq = (function() {
  var $$x1 = $m_sc_Seq$();
  var array = [$as_Lcfx70_vecquat_Vec(this.Lcfx70_cfpl_core_BCone__f_bpts.apply__I__O(0)), $as_Lcfx70_vecquat_Vec(this.Lcfx70_cfpl_core_BCone__f_bpts.apply__I__O((((-1) + (($m_Lcfx70_cfpl_core_BGeometry$().Lcfx70_cfpl_core_BGeometry$__f_segments / 2) | 0)) | 0))), $as_Lcfx70_vecquat_Vec(this.Lcfx70_cfpl_core_BCone__f_tpts.apply__I__O((((-1) + (($m_Lcfx70_cfpl_core_BGeometry$().Lcfx70_cfpl_core_BGeometry$__f_segments / 2) | 0)) | 0))), $as_Lcfx70_vecquat_Vec(this.Lcfx70_cfpl_core_BCone__f_tpts.apply__I__O(0))];
  return $as_sc_Seq($$x1.apply__sc_Seq__sc_GenTraversable($ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), array)))
});
function $as_Lcfx70_cfpl_core_BCone(obj) {
  return (((obj instanceof $c_Lcfx70_cfpl_core_BCone) || (obj === null)) ? obj : $throwClassCastException(obj, "cfx70.cfpl.core.BCone"))
}
function $isArrayOf_Lcfx70_cfpl_core_BCone(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lcfx70_cfpl_core_BCone)))
}
function $asArrayOf_Lcfx70_cfpl_core_BCone(obj, depth) {
  return (($isArrayOf_Lcfx70_cfpl_core_BCone(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lcfx70.cfpl.core.BCone;", depth))
}
var $d_Lcfx70_cfpl_core_BCone = new $TypeData().initClass({
  Lcfx70_cfpl_core_BCone: 0
}, false, "cfx70.cfpl.core.BCone", {
  Lcfx70_cfpl_core_BCone: 1,
  Lcfx70_cfpl_core_BGeometry: 1,
  O: 1,
  Lcfx70_cfpl_core_LineIntersectable: 1,
  Lcfx70_cfpl_core_WireframeHelper: 1,
  Lcfx70_cfpl_core_MoveTopBottom: 1
});
$c_Lcfx70_cfpl_core_BCone.prototype.$classData = $d_Lcfx70_cfpl_core_BCone;
function $ct_Lcfx70_cfpl_core_BPyramid__D__D__D__D__D__D__D__($thiz, a1, b1, a2, b2, h, da, db) {
  var $$x1 = $m_Lcfx70_cfpl_core_BGeometry$();
  var array = [0.0, 0.0, 0.0];
  var crds = $ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), array);
  $thiz.Lcfx70_cfpl_core_BPyramid__f_bpts = $$x1.rectPts__D__D__Lcfx70_vecquat_Vec__sc_Seq(a1, b1, $ct_Lcfx70_vecquat_Vec__sc_Seq__(new $c_Lcfx70_vecquat_Vec(), crds));
  var $$x2 = $m_Lcfx70_cfpl_core_BGeometry$();
  var array$1 = [da, db, h];
  var crds$1 = $ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), array$1);
  $thiz.Lcfx70_cfpl_core_BPyramid__f_tpts = $$x2.rectPts__D__D__Lcfx70_vecquat_Vec__sc_Seq(a2, b2, $ct_Lcfx70_vecquat_Vec__sc_Seq__(new $c_Lcfx70_vecquat_Vec(), crds$1));
  return $thiz
}
/** @constructor */
function $c_Lcfx70_cfpl_core_BPyramid() {
  this.Lcfx70_cfpl_core_BPyramid__f_bpts = null;
  this.Lcfx70_cfpl_core_BPyramid__f_tpts = null
}
$c_Lcfx70_cfpl_core_BPyramid.prototype = new $h_Lcfx70_cfpl_core_BGeometry();
$c_Lcfx70_cfpl_core_BPyramid.prototype.constructor = $c_Lcfx70_cfpl_core_BPyramid;
/** @constructor */
function $h_Lcfx70_cfpl_core_BPyramid() {
  /*<skip>*/
}
$h_Lcfx70_cfpl_core_BPyramid.prototype = $c_Lcfx70_cfpl_core_BPyramid.prototype;
$c_Lcfx70_cfpl_core_BPyramid.prototype.bpts__sc_Seq = (function() {
  return this.Lcfx70_cfpl_core_BPyramid__f_bpts
});
$c_Lcfx70_cfpl_core_BPyramid.prototype.bpts_$eq__sc_Seq__V = (function(x$1) {
  this.Lcfx70_cfpl_core_BPyramid__f_bpts = x$1
});
$c_Lcfx70_cfpl_core_BPyramid.prototype.tpts__sc_Seq = (function() {
  return this.Lcfx70_cfpl_core_BPyramid__f_tpts
});
$c_Lcfx70_cfpl_core_BPyramid.prototype.tpts_$eq__sc_Seq__V = (function(x$1) {
  this.Lcfx70_cfpl_core_BPyramid__f_tpts = x$1
});
$c_Lcfx70_cfpl_core_BPyramid.prototype.pts__sc_Seq = (function() {
  return $m_Lcfx70_cfpl_core_BGeometry$().shell__sc_Seq__sc_Seq__sc_Seq(this.Lcfx70_cfpl_core_BPyramid__f_bpts, this.Lcfx70_cfpl_core_BPyramid__f_tpts)
});
$c_Lcfx70_cfpl_core_BPyramid.prototype.normals__sc_Seq = (function() {
  return $m_Lcfx70_cfpl_core_BGeometry$().shellNormals__sc_Seq__sc_Seq__sc_Seq(this.Lcfx70_cfpl_core_BPyramid__f_bpts, this.Lcfx70_cfpl_core_BPyramid__f_tpts)
});
$c_Lcfx70_cfpl_core_BPyramid.prototype.intersect__Lcfx70_cfpl_core_Line3__s_Option = (function(l) {
  return $m_s_None$()
});
$c_Lcfx70_cfpl_core_BPyramid.prototype.top__sc_Seq = (function() {
  var $$x1 = $m_sc_Seq$();
  var array = [$as_Lcfx70_vecquat_Vec(this.Lcfx70_cfpl_core_BPyramid__f_bpts.apply__I__O(3)), $as_Lcfx70_vecquat_Vec(this.Lcfx70_cfpl_core_BPyramid__f_tpts.apply__I__O(3)), $as_Lcfx70_vecquat_Vec(this.Lcfx70_cfpl_core_BPyramid__f_tpts.apply__I__O(2)), $as_Lcfx70_vecquat_Vec(this.Lcfx70_cfpl_core_BPyramid__f_bpts.apply__I__O(2))];
  return $as_sc_Seq($$x1.apply__sc_Seq__sc_GenTraversable($ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), array)))
});
$c_Lcfx70_cfpl_core_BPyramid.prototype.bottom__sc_Seq = (function() {
  var $$x1 = $m_sc_Seq$();
  var array = [$as_Lcfx70_vecquat_Vec(this.Lcfx70_cfpl_core_BPyramid__f_bpts.apply__I__O(1)), $as_Lcfx70_vecquat_Vec(this.Lcfx70_cfpl_core_BPyramid__f_tpts.apply__I__O(1)), $as_Lcfx70_vecquat_Vec(this.Lcfx70_cfpl_core_BPyramid__f_tpts.apply__I__O(0)), $as_Lcfx70_vecquat_Vec(this.Lcfx70_cfpl_core_BPyramid__f_bpts.apply__I__O(0))];
  return $as_sc_Seq($$x1.apply__sc_Seq__sc_GenTraversable($ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), array)))
});
$c_Lcfx70_cfpl_core_BPyramid.prototype.left__sc_Seq = (function() {
  var $$x1 = $m_sc_Seq$();
  var array = [$as_Lcfx70_vecquat_Vec(this.Lcfx70_cfpl_core_BPyramid__f_bpts.apply__I__O(0)), $as_Lcfx70_vecquat_Vec(this.Lcfx70_cfpl_core_BPyramid__f_tpts.apply__I__O(0)), $as_Lcfx70_vecquat_Vec(this.Lcfx70_cfpl_core_BPyramid__f_tpts.apply__I__O(3)), $as_Lcfx70_vecquat_Vec(this.Lcfx70_cfpl_core_BPyramid__f_bpts.apply__I__O(3))];
  return $as_sc_Seq($$x1.apply__sc_Seq__sc_GenTraversable($ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), array)))
});
$c_Lcfx70_cfpl_core_BPyramid.prototype.right__sc_Seq = (function() {
  var $$x1 = $m_sc_Seq$();
  var array = [$as_Lcfx70_vecquat_Vec(this.Lcfx70_cfpl_core_BPyramid__f_bpts.apply__I__O(2)), $as_Lcfx70_vecquat_Vec(this.Lcfx70_cfpl_core_BPyramid__f_tpts.apply__I__O(2)), $as_Lcfx70_vecquat_Vec(this.Lcfx70_cfpl_core_BPyramid__f_tpts.apply__I__O(1)), $as_Lcfx70_vecquat_Vec(this.Lcfx70_cfpl_core_BPyramid__f_bpts.apply__I__O(1))];
  return $as_sc_Seq($$x1.apply__sc_Seq__sc_GenTraversable($ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), array)))
});
function $as_Lcfx70_cfpl_core_BPyramid(obj) {
  return (((obj instanceof $c_Lcfx70_cfpl_core_BPyramid) || (obj === null)) ? obj : $throwClassCastException(obj, "cfx70.cfpl.core.BPyramid"))
}
function $isArrayOf_Lcfx70_cfpl_core_BPyramid(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lcfx70_cfpl_core_BPyramid)))
}
function $asArrayOf_Lcfx70_cfpl_core_BPyramid(obj, depth) {
  return (($isArrayOf_Lcfx70_cfpl_core_BPyramid(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lcfx70.cfpl.core.BPyramid;", depth))
}
var $d_Lcfx70_cfpl_core_BPyramid = new $TypeData().initClass({
  Lcfx70_cfpl_core_BPyramid: 0
}, false, "cfx70.cfpl.core.BPyramid", {
  Lcfx70_cfpl_core_BPyramid: 1,
  Lcfx70_cfpl_core_BGeometry: 1,
  O: 1,
  Lcfx70_cfpl_core_LineIntersectable: 1,
  Lcfx70_cfpl_core_WireframeHelper: 1,
  Lcfx70_cfpl_core_MoveTopBottom: 1
});
$c_Lcfx70_cfpl_core_BPyramid.prototype.$classData = $d_Lcfx70_cfpl_core_BPyramid;
/** @constructor */
function $c_Lcfx70_cfpl_core_BRCRed(a1, b1, d, h, da, db) {
  this.Lcfx70_cfpl_core_BRCRed__f_d = 0.0;
  this.Lcfx70_cfpl_core_BRCRed__f_da = 0.0;
  this.Lcfx70_cfpl_core_BRCRed__f_db = 0.0;
  this.Lcfx70_cfpl_core_BRCRed__f_bpts = null;
  this.Lcfx70_cfpl_core_BRCRed__f_tpts = null;
  this.Lcfx70_cfpl_core_BRCRed__f_d = d;
  this.Lcfx70_cfpl_core_BRCRed__f_da = da;
  this.Lcfx70_cfpl_core_BRCRed__f_db = db;
  var $$x1 = $m_Lcfx70_cfpl_core_BGeometry$();
  var array = [0.0, 0.0, 0.0];
  var crds = $ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), array);
  this.Lcfx70_cfpl_core_BRCRed__f_bpts = $$x1.rectPts__D__D__Lcfx70_vecquat_Vec__sc_Seq(a1, b1, $ct_Lcfx70_vecquat_Vec__sc_Seq__(new $c_Lcfx70_vecquat_Vec(), crds));
  var $$x2 = $m_Lcfx70_cfpl_core_BGeometry$();
  var array$1 = [da, db, h];
  var crds$1 = $ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), array$1);
  this.Lcfx70_cfpl_core_BRCRed__f_tpts = $$x2.roundPts__D__Lcfx70_vecquat_Vec__D__D__sc_Seq((d / 2.0), $ct_Lcfx70_vecquat_Vec__sc_Seq__(new $c_Lcfx70_vecquat_Vec(), crds$1), ($m_Lcfx70_cfpl_core_BGeometry$(), 0.0), ($m_Lcfx70_cfpl_core_BGeometry$(), 6.283185307179586))
}
$c_Lcfx70_cfpl_core_BRCRed.prototype = new $h_Lcfx70_cfpl_core_BGeometry();
$c_Lcfx70_cfpl_core_BRCRed.prototype.constructor = $c_Lcfx70_cfpl_core_BRCRed;
/** @constructor */
function $h_Lcfx70_cfpl_core_BRCRed() {
  /*<skip>*/
}
$h_Lcfx70_cfpl_core_BRCRed.prototype = $c_Lcfx70_cfpl_core_BRCRed.prototype;
$c_Lcfx70_cfpl_core_BRCRed.prototype.bpts__sc_Seq = (function() {
  return this.Lcfx70_cfpl_core_BRCRed__f_bpts
});
$c_Lcfx70_cfpl_core_BRCRed.prototype.bpts_$eq__sc_Seq__V = (function(x$1) {
  this.Lcfx70_cfpl_core_BRCRed__f_bpts = x$1
});
$c_Lcfx70_cfpl_core_BRCRed.prototype.tpts__sc_Seq = (function() {
  return this.Lcfx70_cfpl_core_BRCRed__f_tpts
});
$c_Lcfx70_cfpl_core_BRCRed.prototype.tpts_$eq__sc_Seq__V = (function(x$1) {
  this.Lcfx70_cfpl_core_BRCRed__f_tpts = x$1
});
$c_Lcfx70_cfpl_core_BRCRed.prototype.pts__sc_Seq = (function() {
  return $m_Lcfx70_cfpl_core_BGeometry$().fan__sc_Seq__sc_Seq__sc_Seq(this.Lcfx70_cfpl_core_BRCRed__f_bpts, this.Lcfx70_cfpl_core_BRCRed__f_tpts)
});
$c_Lcfx70_cfpl_core_BRCRed.prototype.normals__sc_Seq = (function() {
  return $m_Lcfx70_cfpl_core_BGeometry$().fanNormals__sc_Seq__sc_Seq__sc_Seq(this.Lcfx70_cfpl_core_BRCRed__f_bpts, this.Lcfx70_cfpl_core_BRCRed__f_tpts)
});
$c_Lcfx70_cfpl_core_BRCRed.prototype.intersect__Lcfx70_cfpl_core_Line3__s_Option = (function(l) {
  return $m_s_None$()
});
$c_Lcfx70_cfpl_core_BRCRed.prototype.tophalf__sc_Seq = (function() {
  var $$x1 = $m_sc_Seq$();
  var array = [$as_Lcfx70_vecquat_Vec(this.Lcfx70_cfpl_core_BRCRed__f_bpts.apply__I__O(3)), $as_Lcfx70_vecquat_Vec(this.Lcfx70_cfpl_core_BRCRed__f_tpts.apply__I__O(0)), $as_Lcfx70_vecquat_Vec(this.Lcfx70_cfpl_core_BRCRed__f_tpts.apply__I__O((((-1) + (($m_Lcfx70_cfpl_core_BGeometry$().Lcfx70_cfpl_core_BGeometry$__f_segments / 2) | 0)) | 0))), $as_Lcfx70_vecquat_Vec(this.Lcfx70_cfpl_core_BRCRed__f_bpts.apply__I__O(2))];
  return $as_sc_Seq($$x1.apply__sc_Seq__sc_GenTraversable($ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), array)))
});
function $as_Lcfx70_cfpl_core_BRCRed(obj) {
  return (((obj instanceof $c_Lcfx70_cfpl_core_BRCRed) || (obj === null)) ? obj : $throwClassCastException(obj, "cfx70.cfpl.core.BRCRed"))
}
function $isArrayOf_Lcfx70_cfpl_core_BRCRed(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lcfx70_cfpl_core_BRCRed)))
}
function $asArrayOf_Lcfx70_cfpl_core_BRCRed(obj, depth) {
  return (($isArrayOf_Lcfx70_cfpl_core_BRCRed(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lcfx70.cfpl.core.BRCRed;", depth))
}
var $d_Lcfx70_cfpl_core_BRCRed = new $TypeData().initClass({
  Lcfx70_cfpl_core_BRCRed: 0
}, false, "cfx70.cfpl.core.BRCRed", {
  Lcfx70_cfpl_core_BRCRed: 1,
  Lcfx70_cfpl_core_BGeometry: 1,
  O: 1,
  Lcfx70_cfpl_core_LineIntersectable: 1,
  Lcfx70_cfpl_core_WireframeHelper: 1,
  Lcfx70_cfpl_core_MoveTopBottom: 1
});
$c_Lcfx70_cfpl_core_BRCRed.prototype.$classData = $d_Lcfx70_cfpl_core_BRCRed;
class $c_jl_ArithmeticException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true)
  };
}
var $d_jl_ArithmeticException = new $TypeData().initClass({
  jl_ArithmeticException: 0
}, false, "java.lang.ArithmeticException", {
  jl_ArithmeticException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_ArithmeticException.prototype.$classData = $d_jl_ArithmeticException;
class $c_jl_ArrayStoreException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true)
  };
}
var $d_jl_ArrayStoreException = new $TypeData().initClass({
  jl_ArrayStoreException: 0
}, false, "java.lang.ArrayStoreException", {
  jl_ArrayStoreException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_ArrayStoreException.prototype.$classData = $d_jl_ArrayStoreException;
function $f_jl_Byte__equals__O__Z($thiz, that) {
  return Object.is($thiz, that)
}
function $f_jl_Byte__hashCode__I($thiz) {
  return $thiz
}
function $f_jl_Byte__toString__T($thiz) {
  return ("" + $thiz)
}
var $d_jl_Byte = new $TypeData().initClass({
  jl_Byte: 0
}, false, "java.lang.Byte", {
  jl_Byte: 1,
  jl_Number: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1,
  jl_constant_Constable: 1
}, (void 0), (void 0), ((x) => $isByte(x)));
class $c_jl_ClassCastException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true)
  };
}
function $as_jl_ClassCastException(obj) {
  return (((obj instanceof $c_jl_ClassCastException) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.ClassCastException"))
}
function $isArrayOf_jl_ClassCastException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_ClassCastException)))
}
function $asArrayOf_jl_ClassCastException(obj, depth) {
  return (($isArrayOf_jl_ClassCastException(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.ClassCastException;", depth))
}
var $d_jl_ClassCastException = new $TypeData().initClass({
  jl_ClassCastException: 0
}, false, "java.lang.ClassCastException", {
  jl_ClassCastException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_ClassCastException.prototype.$classData = $d_jl_ClassCastException;
function $ct_jl_IllegalArgumentException__T__($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz
}
function $ct_jl_IllegalArgumentException__($thiz) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, null, null, true, true);
  return $thiz
}
class $c_jl_IllegalArgumentException extends $c_jl_RuntimeException {
}
var $d_jl_IllegalArgumentException = new $TypeData().initClass({
  jl_IllegalArgumentException: 0
}, false, "java.lang.IllegalArgumentException", {
  jl_IllegalArgumentException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_IllegalArgumentException.prototype.$classData = $d_jl_IllegalArgumentException;
class $c_jl_IllegalStateException extends $c_jl_RuntimeException {
}
function $ct_jl_IndexOutOfBoundsException__T__($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz
}
class $c_jl_IndexOutOfBoundsException extends $c_jl_RuntimeException {
}
var $d_jl_IndexOutOfBoundsException = new $TypeData().initClass({
  jl_IndexOutOfBoundsException: 0
}, false, "java.lang.IndexOutOfBoundsException", {
  jl_IndexOutOfBoundsException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_IndexOutOfBoundsException.prototype.$classData = $d_jl_IndexOutOfBoundsException;
class $c_jl_NegativeArraySizeException extends $c_jl_RuntimeException {
  constructor() {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true)
  };
}
var $d_jl_NegativeArraySizeException = new $TypeData().initClass({
  jl_NegativeArraySizeException: 0
}, false, "java.lang.NegativeArraySizeException", {
  jl_NegativeArraySizeException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_NegativeArraySizeException.prototype.$classData = $d_jl_NegativeArraySizeException;
class $c_jl_NullPointerException extends $c_jl_RuntimeException {
  constructor() {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true)
  };
}
var $d_jl_NullPointerException = new $TypeData().initClass({
  jl_NullPointerException: 0
}, false, "java.lang.NullPointerException", {
  jl_NullPointerException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_NullPointerException.prototype.$classData = $d_jl_NullPointerException;
function $f_jl_Short__equals__O__Z($thiz, that) {
  return Object.is($thiz, that)
}
function $f_jl_Short__hashCode__I($thiz) {
  return $thiz
}
function $f_jl_Short__toString__T($thiz) {
  return ("" + $thiz)
}
var $d_jl_Short = new $TypeData().initClass({
  jl_Short: 0
}, false, "java.lang.Short", {
  jl_Short: 1,
  jl_Number: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1,
  jl_constant_Constable: 1
}, (void 0), (void 0), ((x) => $isShort(x)));
class $c_jl_UnsupportedOperationException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true)
  };
}
var $d_jl_UnsupportedOperationException = new $TypeData().initClass({
  jl_UnsupportedOperationException: 0
}, false, "java.lang.UnsupportedOperationException", {
  jl_UnsupportedOperationException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_UnsupportedOperationException.prototype.$classData = $d_jl_UnsupportedOperationException;
function $ct_ju_NoSuchElementException__T__($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz
}
function $ct_ju_NoSuchElementException__($thiz) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, null, null, true, true);
  return $thiz
}
class $c_ju_NoSuchElementException extends $c_jl_RuntimeException {
}
var $d_ju_NoSuchElementException = new $TypeData().initClass({
  ju_NoSuchElementException: 0
}, false, "java.util.NoSuchElementException", {
  ju_NoSuchElementException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_ju_NoSuchElementException.prototype.$classData = $d_ju_NoSuchElementException;
class $c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError extends $c_jl_VirtualMachineError {
  constructor(cause) {
    super();
    var message = ((cause === null) ? null : cause.toString__T());
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, message, cause, true, true)
  };
}
var $d_Lorg_scalajs_linker_runtime_UndefinedBehaviorError = new $TypeData().initClass({
  Lorg_scalajs_linker_runtime_UndefinedBehaviorError: 0
}, false, "org.scalajs.linker.runtime.UndefinedBehaviorError", {
  Lorg_scalajs_linker_runtime_UndefinedBehaviorError: 1,
  jl_VirtualMachineError: 1,
  jl_Error: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError.prototype.$classData = $d_Lorg_scalajs_linker_runtime_UndefinedBehaviorError;
function $p_s_MatchError__objString$lzycompute__T($thiz) {
  if ((!$thiz.s_MatchError__f_bitmap$0)) {
    $thiz.s_MatchError__f_objString = (($thiz.s_MatchError__f_obj === null) ? "null" : $p_s_MatchError__liftedTree1$1__T($thiz));
    $thiz.s_MatchError__f_bitmap$0 = true
  };
  return $thiz.s_MatchError__f_objString
}
function $p_s_MatchError__objString__T($thiz) {
  return ((!$thiz.s_MatchError__f_bitmap$0) ? $p_s_MatchError__objString$lzycompute__T($thiz) : $thiz.s_MatchError__f_objString)
}
function $p_s_MatchError__ofClass$1__T($thiz) {
  var this$1 = $thiz.s_MatchError__f_obj;
  return ("of class " + $objectGetClass(this$1).getName__T())
}
function $p_s_MatchError__liftedTree1$1__T($thiz) {
  try {
    return ((($dp_toString__T($thiz.s_MatchError__f_obj) + " (") + $p_s_MatchError__ofClass$1__T($thiz)) + ")")
  } catch (e) {
    return ("an instance " + $p_s_MatchError__ofClass$1__T($thiz))
  }
}
class $c_s_MatchError extends $c_jl_RuntimeException {
  constructor(obj) {
    super();
    this.s_MatchError__f_objString = null;
    this.s_MatchError__f_obj = null;
    this.s_MatchError__f_bitmap$0 = false;
    this.s_MatchError__f_obj = obj;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true)
  };
  getMessage__T() {
    return $p_s_MatchError__objString__T(this)
  };
}
var $d_s_MatchError = new $TypeData().initClass({
  s_MatchError: 0
}, false, "scala.MatchError", {
  s_MatchError: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_s_MatchError.prototype.$classData = $d_s_MatchError;
/** @constructor */
function $c_s_Option() {
  /*<skip>*/
}
$c_s_Option.prototype = new $h_O();
$c_s_Option.prototype.constructor = $c_s_Option;
/** @constructor */
function $h_s_Option() {
  /*<skip>*/
}
$h_s_Option.prototype = $c_s_Option.prototype;
/** @constructor */
function $c_s_Predef$$anon$2() {
  /*<skip>*/
}
$c_s_Predef$$anon$2.prototype = new $h_s_Predef$$less$colon$less();
$c_s_Predef$$anon$2.prototype.constructor = $c_s_Predef$$anon$2;
/** @constructor */
function $h_s_Predef$$anon$2() {
  /*<skip>*/
}
$h_s_Predef$$anon$2.prototype = $c_s_Predef$$anon$2.prototype;
$c_s_Predef$$anon$2.prototype.apply__O__O = (function(x) {
  return x
});
var $d_s_Predef$$anon$2 = new $TypeData().initClass({
  s_Predef$$anon$2: 0
}, false, "scala.Predef$$anon$2", {
  s_Predef$$anon$2: 1,
  s_Predef$$less$colon$less: 1,
  O: 1,
  F1: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_s_Predef$$anon$2.prototype.$classData = $d_s_Predef$$anon$2;
/** @constructor */
function $c_s_Predef$$anon$3() {
  /*<skip>*/
}
$c_s_Predef$$anon$3.prototype = new $h_s_Predef$$eq$colon$eq();
$c_s_Predef$$anon$3.prototype.constructor = $c_s_Predef$$anon$3;
/** @constructor */
function $h_s_Predef$$anon$3() {
  /*<skip>*/
}
$h_s_Predef$$anon$3.prototype = $c_s_Predef$$anon$3.prototype;
$c_s_Predef$$anon$3.prototype.apply__O__O = (function(x) {
  return x
});
var $d_s_Predef$$anon$3 = new $TypeData().initClass({
  s_Predef$$anon$3: 0
}, false, "scala.Predef$$anon$3", {
  s_Predef$$anon$3: 1,
  s_Predef$$eq$colon$eq: 1,
  O: 1,
  F1: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_s_Predef$$anon$3.prototype.$classData = $d_s_Predef$$anon$3;
/** @constructor */
function $c_sc_Iterable$() {
  this.scg_GenTraversableFactory__f_ReusableCBFInstance = null;
  $ct_scg_GenTraversableFactory__(this)
}
$c_sc_Iterable$.prototype = new $h_scg_GenTraversableFactory();
$c_sc_Iterable$.prototype.constructor = $c_sc_Iterable$;
/** @constructor */
function $h_sc_Iterable$() {
  /*<skip>*/
}
$h_sc_Iterable$.prototype = $c_sc_Iterable$.prototype;
$c_sc_Iterable$.prototype.newBuilder__scm_Builder = (function() {
  $m_sci_Iterable$();
  return new $c_scm_ListBuffer()
});
var $d_sc_Iterable$ = new $TypeData().initClass({
  sc_Iterable$: 0
}, false, "scala.collection.Iterable$", {
  sc_Iterable$: 1,
  scg_GenTraversableFactory: 1,
  scg_GenericCompanion: 1,
  O: 1,
  scg_TraversableFactory: 1,
  scg_GenericSeqCompanion: 1
});
$c_sc_Iterable$.prototype.$classData = $d_sc_Iterable$;
var $n_sc_Iterable$;
function $m_sc_Iterable$() {
  if ((!$n_sc_Iterable$)) {
    $n_sc_Iterable$ = new $c_sc_Iterable$()
  };
  return $n_sc_Iterable$
}
/** @constructor */
function $c_sc_Iterator$$anon$10(outer, f$3) {
  this.sc_Iterator$$anon$10__f_$outer = null;
  this.sc_Iterator$$anon$10__f_f$3 = null;
  if ((outer === null)) {
    throw null
  } else {
    this.sc_Iterator$$anon$10__f_$outer = outer
  };
  this.sc_Iterator$$anon$10__f_f$3 = f$3
}
$c_sc_Iterator$$anon$10.prototype = new $h_sc_AbstractIterator();
$c_sc_Iterator$$anon$10.prototype.constructor = $c_sc_Iterator$$anon$10;
/** @constructor */
function $h_sc_Iterator$$anon$10() {
  /*<skip>*/
}
$h_sc_Iterator$$anon$10.prototype = $c_sc_Iterator$$anon$10.prototype;
$c_sc_Iterator$$anon$10.prototype.hasNext__Z = (function() {
  return this.sc_Iterator$$anon$10__f_$outer.hasNext__Z()
});
$c_sc_Iterator$$anon$10.prototype.next__O = (function() {
  return this.sc_Iterator$$anon$10__f_f$3.apply__O__O(this.sc_Iterator$$anon$10__f_$outer.next__O())
});
var $d_sc_Iterator$$anon$10 = new $TypeData().initClass({
  sc_Iterator$$anon$10: 0
}, false, "scala.collection.Iterator$$anon$10", {
  sc_Iterator$$anon$10: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1
});
$c_sc_Iterator$$anon$10.prototype.$classData = $d_sc_Iterator$$anon$10;
/** @constructor */
function $c_sc_Iterator$$anon$2() {
  /*<skip>*/
}
$c_sc_Iterator$$anon$2.prototype = new $h_sc_AbstractIterator();
$c_sc_Iterator$$anon$2.prototype.constructor = $c_sc_Iterator$$anon$2;
/** @constructor */
function $h_sc_Iterator$$anon$2() {
  /*<skip>*/
}
$h_sc_Iterator$$anon$2.prototype = $c_sc_Iterator$$anon$2.prototype;
$c_sc_Iterator$$anon$2.prototype.hasNext__Z = (function() {
  return false
});
$c_sc_Iterator$$anon$2.prototype.next__E = (function() {
  throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), "next on empty iterator")
});
$c_sc_Iterator$$anon$2.prototype.next__O = (function() {
  this.next__E()
});
var $d_sc_Iterator$$anon$2 = new $TypeData().initClass({
  sc_Iterator$$anon$2: 0
}, false, "scala.collection.Iterator$$anon$2", {
  sc_Iterator$$anon$2: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1
});
$c_sc_Iterator$$anon$2.prototype.$classData = $d_sc_Iterator$$anon$2;
/** @constructor */
function $c_sc_Iterator$$anon$3(elem$1) {
  this.sc_Iterator$$anon$3__f_hasnext = false;
  this.sc_Iterator$$anon$3__f_elem$1 = null;
  this.sc_Iterator$$anon$3__f_elem$1 = elem$1;
  this.sc_Iterator$$anon$3__f_hasnext = true
}
$c_sc_Iterator$$anon$3.prototype = new $h_sc_AbstractIterator();
$c_sc_Iterator$$anon$3.prototype.constructor = $c_sc_Iterator$$anon$3;
/** @constructor */
function $h_sc_Iterator$$anon$3() {
  /*<skip>*/
}
$h_sc_Iterator$$anon$3.prototype = $c_sc_Iterator$$anon$3.prototype;
$c_sc_Iterator$$anon$3.prototype.hasNext__Z = (function() {
  return this.sc_Iterator$$anon$3__f_hasnext
});
$c_sc_Iterator$$anon$3.prototype.next__O = (function() {
  if (this.sc_Iterator$$anon$3__f_hasnext) {
    this.sc_Iterator$$anon$3__f_hasnext = false;
    return this.sc_Iterator$$anon$3__f_elem$1
  } else {
    return $m_sc_Iterator$().sc_Iterator$__f_empty.next__O()
  }
});
var $d_sc_Iterator$$anon$3 = new $TypeData().initClass({
  sc_Iterator$$anon$3: 0
}, false, "scala.collection.Iterator$$anon$3", {
  sc_Iterator$$anon$3: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1
});
$c_sc_Iterator$$anon$3.prototype.$classData = $d_sc_Iterator$$anon$3;
function $p_sc_Iterator$GroupedIterator__takeDestructively__I__sc_Seq($thiz, size) {
  var buf = $ct_scm_ArrayBuffer__(new $c_scm_ArrayBuffer());
  var i = 0;
  while (((i < size) && $thiz.sc_Iterator$GroupedIterator__f_self.hasNext__Z())) {
    buf.$plus$eq__O__scm_ArrayBuffer($thiz.sc_Iterator$GroupedIterator__f_self.next__O());
    i = ((1 + i) | 0)
  };
  return buf
}
function $p_sc_Iterator$GroupedIterator__padding__I__sci_List($thiz, x) {
  $m_sci_List$();
  var b = new $c_scm_ListBuffer();
  var i = 0;
  while ((i < x)) {
    var elem = $as_F0($thiz.sc_Iterator$GroupedIterator__f_pad.get__O()).apply__O();
    b.$plus$eq__O__scm_ListBuffer(elem);
    i = ((1 + i) | 0)
  };
  return b.toList__sci_List()
}
function $p_sc_Iterator$GroupedIterator__gap__I($thiz) {
  var x = (($thiz.sc_Iterator$GroupedIterator__f_step - $thiz.sc_Iterator$GroupedIterator__f_size) | 0);
  return ((x > 0) ? x : 0)
}
function $p_sc_Iterator$GroupedIterator__go__I__Z($thiz, count) {
  var len$lzy = new $c_sr_LazyInt();
  var incomplete$lzy = new $c_sr_LazyBoolean();
  var this$1 = $thiz.sc_Iterator$GroupedIterator__f_buffer;
  var prevSize = this$1.scm_ArrayBuffer__f_size0;
  var res = $p_sc_Iterator$GroupedIterator__takeDestructively__I__sc_Seq($thiz, count);
  var shortBy = ((count - res.length__I()) | 0);
  if ((shortBy > 0)) {
    var this$2 = $thiz.sc_Iterator$GroupedIterator__f_pad;
    var $$x1 = (!this$2.isEmpty__Z())
  } else {
    var $$x1 = false
  };
  if ($$x1) {
    var $$x2 = $p_sc_Iterator$GroupedIterator__padding__I__sci_List($thiz, shortBy);
    var this$3 = $m_sc_Seq$();
    var xs = $as_sc_Seq(res.$plus$plus__sc_GenTraversableOnce__scg_CanBuildFrom__O($$x2, this$3.scg_GenTraversableFactory__f_ReusableCBFInstance))
  } else {
    var xs = res
  };
  if ((!xs.isEmpty__Z())) {
    if ($thiz.sc_Iterator$GroupedIterator__f__partial) {
      var x = $p_sc_Iterator$GroupedIterator__len$3__sr_LazyInt__sc_Seq__I($thiz, len$lzy, xs);
      var that = $thiz.sc_Iterator$GroupedIterator__f_size;
      return $p_sc_Iterator$GroupedIterator__deliver$1__I__I__sc_Seq__sr_LazyInt__Z($thiz, ((x < that) ? x : that), prevSize, xs, len$lzy)
    } else if ((!$p_sc_Iterator$GroupedIterator__incomplete$1__sr_LazyBoolean__I__sr_LazyInt__sc_Seq__Z($thiz, incomplete$lzy, count, len$lzy, xs))) {
      if ($p_sc_Iterator$GroupedIterator__isFirst$1__I__Z($thiz, prevSize)) {
        return $p_sc_Iterator$GroupedIterator__deliver$1__I__I__sc_Seq__sr_LazyInt__Z($thiz, $p_sc_Iterator$GroupedIterator__len$3__sr_LazyInt__sc_Seq__I($thiz, len$lzy, xs), prevSize, xs, len$lzy)
      } else {
        var x$1 = $thiz.sc_Iterator$GroupedIterator__f_step;
        var that$1 = $thiz.sc_Iterator$GroupedIterator__f_size;
        return $p_sc_Iterator$GroupedIterator__deliver$1__I__I__sc_Seq__sr_LazyInt__Z($thiz, ((x$1 < that$1) ? x$1 : that$1), prevSize, xs, len$lzy)
      }
    } else {
      return false
    }
  } else {
    return false
  }
}
function $p_sc_Iterator$GroupedIterator__fill__Z($thiz) {
  if ($thiz.sc_Iterator$GroupedIterator__f_self.hasNext__Z()) {
    var this$1 = $thiz.sc_Iterator$GroupedIterator__f_buffer;
    if ($f_sc_IndexedSeqOptimized__isEmpty__Z(this$1)) {
      return $p_sc_Iterator$GroupedIterator__go__I__Z($thiz, $thiz.sc_Iterator$GroupedIterator__f_size)
    } else {
      return $p_sc_Iterator$GroupedIterator__go__I__Z($thiz, $thiz.sc_Iterator$GroupedIterator__f_step)
    }
  } else {
    return false
  }
}
function $p_sc_Iterator$GroupedIterator__isFirst$1__I__Z($thiz, prevSize$1) {
  return (prevSize$1 === 0)
}
function $p_sc_Iterator$GroupedIterator__len$lzycompute$1__sr_LazyInt__sc_Seq__I($thiz, len$lzy$1, xs$1) {
  if ((len$lzy$1 === null)) {
    throw new $c_jl_NullPointerException()
  };
  return (len$lzy$1.sr_LazyInt__f__initialized ? len$lzy$1.sr_LazyInt__f__value : len$lzy$1.initialize__I__I(xs$1.length__I()))
}
function $p_sc_Iterator$GroupedIterator__len$3__sr_LazyInt__sc_Seq__I($thiz, len$lzy$1, xs$1) {
  return (len$lzy$1.sr_LazyInt__f__initialized ? len$lzy$1.sr_LazyInt__f__value : $p_sc_Iterator$GroupedIterator__len$lzycompute$1__sr_LazyInt__sc_Seq__I($thiz, len$lzy$1, xs$1))
}
function $p_sc_Iterator$GroupedIterator__incomplete$lzycompute$1__sr_LazyBoolean__I__sr_LazyInt__sc_Seq__Z($thiz, incomplete$lzy$1, count$1, len$lzy$1, xs$1) {
  if ((incomplete$lzy$1 === null)) {
    throw new $c_jl_NullPointerException()
  };
  return (incomplete$lzy$1.sr_LazyBoolean__f__initialized ? incomplete$lzy$1.sr_LazyBoolean__f__value : incomplete$lzy$1.initialize__Z__Z(($p_sc_Iterator$GroupedIterator__len$3__sr_LazyInt__sc_Seq__I($thiz, len$lzy$1, xs$1) < count$1)))
}
function $p_sc_Iterator$GroupedIterator__incomplete$1__sr_LazyBoolean__I__sr_LazyInt__sc_Seq__Z($thiz, incomplete$lzy$1, count$1, len$lzy$1, xs$1) {
  return (incomplete$lzy$1.sr_LazyBoolean__f__initialized ? incomplete$lzy$1.sr_LazyBoolean__f__value : $p_sc_Iterator$GroupedIterator__incomplete$lzycompute$1__sr_LazyBoolean__I__sr_LazyInt__sc_Seq__Z($thiz, incomplete$lzy$1, count$1, len$lzy$1, xs$1))
}
function $p_sc_Iterator$GroupedIterator__deliver$1__I__I__sc_Seq__sr_LazyInt__Z($thiz, howMany, prevSize$1, xs$1, len$lzy$1) {
  if (((howMany > 0) && ($p_sc_Iterator$GroupedIterator__isFirst$1__I__Z($thiz, prevSize$1) || ($p_sc_Iterator$GroupedIterator__len$3__sr_LazyInt__sc_Seq__I($thiz, len$lzy$1, xs$1) > $p_sc_Iterator$GroupedIterator__gap__I($thiz))))) {
    if ((!$p_sc_Iterator$GroupedIterator__isFirst$1__I__Z($thiz, prevSize$1))) {
      var this$5 = $thiz.sc_Iterator$GroupedIterator__f_buffer;
      var x = $thiz.sc_Iterator$GroupedIterator__f_step;
      var n = ((x < prevSize$1) ? x : prevSize$1);
      this$5.remove__I__I__V(0, n)
    };
    if ($p_sc_Iterator$GroupedIterator__isFirst$1__I__Z($thiz, prevSize$1)) {
      var available = $p_sc_Iterator$GroupedIterator__len$3__sr_LazyInt__sc_Seq__I($thiz, len$lzy$1, xs$1)
    } else {
      var that = (($p_sc_Iterator$GroupedIterator__len$3__sr_LazyInt__sc_Seq__I($thiz, len$lzy$1, xs$1) - $p_sc_Iterator$GroupedIterator__gap__I($thiz)) | 0);
      var available = ((howMany < that) ? howMany : that)
    };
    $thiz.sc_Iterator$GroupedIterator__f_buffer.$plus$plus$eq__sc_TraversableOnce__scm_ArrayBuffer($as_sc_TraversableOnce(xs$1.takeRight__I__O(available)));
    $thiz.sc_Iterator$GroupedIterator__f_filled = true;
    return true
  } else {
    return false
  }
}
/** @constructor */
function $c_sc_Iterator$GroupedIterator(outer, self, size, step) {
  this.sc_Iterator$GroupedIterator__f_self = null;
  this.sc_Iterator$GroupedIterator__f_size = 0;
  this.sc_Iterator$GroupedIterator__f_step = 0;
  this.sc_Iterator$GroupedIterator__f_buffer = null;
  this.sc_Iterator$GroupedIterator__f_filled = false;
  this.sc_Iterator$GroupedIterator__f__partial = false;
  this.sc_Iterator$GroupedIterator__f_pad = null;
  this.sc_Iterator$GroupedIterator__f_self = self;
  this.sc_Iterator$GroupedIterator__f_size = size;
  this.sc_Iterator$GroupedIterator__f_step = step;
  if ((outer === null)) {
    throw null
  };
  var requirement = ((size >= 1) && (step >= 1));
  if ((!requirement)) {
    var arg$macro$1 = this.sc_Iterator$GroupedIterator__f_size;
    var arg$macro$2 = this.sc_Iterator$GroupedIterator__f_step;
    var this$4 = new $c_sci_StringOps("size=%d and step=%d, but both must be positive");
    var array = [arg$macro$1, arg$macro$2];
    var this$ = this$4.sci_StringOps__f_repr;
    $m_sc_Seq$();
    $m_sjs_js_WrappedArray$();
    var array$1 = [];
    $uI(array.length);
    var i = 0;
    var len = $uI(array.length);
    while ((i < len)) {
      var index = i;
      var arg1 = array[index];
      var elem = $p_sci_StringLike__unwrapArg__O__O(this$4, arg1);
      array$1.push(elem);
      i = ((1 + i) | 0)
    };
    $m_s_reflect_ManifestFactory$ObjectManifest$();
    var len$1 = $uI(array$1.length);
    var result = new $ac_O(len$1);
    var len$2 = result.u.length;
    var i$1 = 0;
    var j = 0;
    var x = $uI(array$1.length);
    var x$1 = ((x < len$2) ? x : len$2);
    var that = result.u.length;
    var end = ((x$1 < that) ? x$1 : that);
    while ((i$1 < end)) {
      var $$x1 = j;
      var index$1 = i$1;
      result.set($$x1, array$1[index$1]);
      i$1 = ((1 + i$1) | 0);
      j = ((1 + j) | 0)
    };
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), ("requirement failed: " + $m_jl_String$().format__T__AO__T(this$, result)))
  };
  this.sc_Iterator$GroupedIterator__f_buffer = $as_scm_ArrayBuffer($m_scm_ArrayBuffer$().apply__sc_Seq__sc_GenTraversable($m_sci_Nil$()));
  this.sc_Iterator$GroupedIterator__f_filled = false;
  this.sc_Iterator$GroupedIterator__f__partial = true;
  this.sc_Iterator$GroupedIterator__f_pad = $m_s_None$()
}
$c_sc_Iterator$GroupedIterator.prototype = new $h_sc_AbstractIterator();
$c_sc_Iterator$GroupedIterator.prototype.constructor = $c_sc_Iterator$GroupedIterator;
/** @constructor */
function $h_sc_Iterator$GroupedIterator() {
  /*<skip>*/
}
$h_sc_Iterator$GroupedIterator.prototype = $c_sc_Iterator$GroupedIterator.prototype;
$c_sc_Iterator$GroupedIterator.prototype.hasNext__Z = (function() {
  return (this.sc_Iterator$GroupedIterator__f_filled || $p_sc_Iterator$GroupedIterator__fill__Z(this))
});
$c_sc_Iterator$GroupedIterator.prototype.next__sci_List = (function() {
  if ((!this.sc_Iterator$GroupedIterator__f_filled)) {
    $p_sc_Iterator$GroupedIterator__fill__Z(this)
  };
  if ((!this.sc_Iterator$GroupedIterator__f_filled)) {
    throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), "next on empty iterator")
  };
  this.sc_Iterator$GroupedIterator__f_filled = false;
  var this$1 = this.sc_Iterator$GroupedIterator__f_buffer;
  return $f_sc_IndexedSeqOptimized__toList__sci_List(this$1)
});
$c_sc_Iterator$GroupedIterator.prototype.next__O = (function() {
  return this.next__sci_List()
});
var $d_sc_Iterator$GroupedIterator = new $TypeData().initClass({
  sc_Iterator$GroupedIterator: 0
}, false, "scala.collection.Iterator$GroupedIterator", {
  sc_Iterator$GroupedIterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1
});
$c_sc_Iterator$GroupedIterator.prototype.$classData = $d_sc_Iterator$GroupedIterator;
/** @constructor */
function $c_sc_LinearSeqLike$$anon$1(outer) {
  this.sc_LinearSeqLike$$anon$1__f_these = null;
  this.sc_LinearSeqLike$$anon$1__f_these = outer
}
$c_sc_LinearSeqLike$$anon$1.prototype = new $h_sc_AbstractIterator();
$c_sc_LinearSeqLike$$anon$1.prototype.constructor = $c_sc_LinearSeqLike$$anon$1;
/** @constructor */
function $h_sc_LinearSeqLike$$anon$1() {
  /*<skip>*/
}
$h_sc_LinearSeqLike$$anon$1.prototype = $c_sc_LinearSeqLike$$anon$1.prototype;
$c_sc_LinearSeqLike$$anon$1.prototype.hasNext__Z = (function() {
  return (!this.sc_LinearSeqLike$$anon$1__f_these.isEmpty__Z())
});
$c_sc_LinearSeqLike$$anon$1.prototype.next__O = (function() {
  if (this.hasNext__Z()) {
    var result = this.sc_LinearSeqLike$$anon$1__f_these.head__O();
    this.sc_LinearSeqLike$$anon$1__f_these = $as_sc_LinearSeqLike(this.sc_LinearSeqLike$$anon$1__f_these.tail__O());
    return result
  } else {
    return $m_sc_Iterator$().sc_Iterator$__f_empty.next__O()
  }
});
$c_sc_LinearSeqLike$$anon$1.prototype.toList__sci_List = (function() {
  var xs = this.sc_LinearSeqLike$$anon$1__f_these.toList__sci_List();
  this.sc_LinearSeqLike$$anon$1__f_these = $as_sc_LinearSeqLike(this.sc_LinearSeqLike$$anon$1__f_these.take__I__O(0));
  return xs
});
var $d_sc_LinearSeqLike$$anon$1 = new $TypeData().initClass({
  sc_LinearSeqLike$$anon$1: 0
}, false, "scala.collection.LinearSeqLike$$anon$1", {
  sc_LinearSeqLike$$anon$1: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1
});
$c_sc_LinearSeqLike$$anon$1.prototype.$classData = $d_sc_LinearSeqLike$$anon$1;
/** @constructor */
function $c_sc_Set$() {
  $n_sc_Set$ = this;
  new $c_scg_GenSetFactory$$anon$1(this)
}
$c_sc_Set$.prototype = new $h_scg_SetFactory();
$c_sc_Set$.prototype.constructor = $c_sc_Set$;
/** @constructor */
function $h_sc_Set$() {
  /*<skip>*/
}
$h_sc_Set$.prototype = $c_sc_Set$.prototype;
$c_sc_Set$.prototype.newBuilder__scm_Builder = (function() {
  $m_sci_Set$();
  return new $c_sci_Set$SetBuilderImpl()
});
$c_sc_Set$.prototype.empty__sc_GenTraversable = (function() {
  $m_sci_Set$();
  return $m_sci_Set$EmptySet$()
});
var $d_sc_Set$ = new $TypeData().initClass({
  sc_Set$: 0
}, false, "scala.collection.Set$", {
  sc_Set$: 1,
  scg_SetFactory: 1,
  scg_GenSetFactory: 1,
  scg_GenericCompanion: 1,
  O: 1,
  scg_GenericSeqCompanion: 1
});
$c_sc_Set$.prototype.$classData = $d_sc_Set$;
var $n_sc_Set$;
function $m_sc_Set$() {
  if ((!$n_sc_Set$)) {
    $n_sc_Set$ = new $c_sc_Set$()
  };
  return $n_sc_Set$
}
/** @constructor */
function $c_sc_Traversable$() {
  this.scg_GenTraversableFactory__f_ReusableCBFInstance = null;
  $ct_scg_GenTraversableFactory__(this);
  $n_sc_Traversable$ = this;
  new $c_s_util_control_Breaks()
}
$c_sc_Traversable$.prototype = new $h_scg_GenTraversableFactory();
$c_sc_Traversable$.prototype.constructor = $c_sc_Traversable$;
/** @constructor */
function $h_sc_Traversable$() {
  /*<skip>*/
}
$h_sc_Traversable$.prototype = $c_sc_Traversable$.prototype;
$c_sc_Traversable$.prototype.newBuilder__scm_Builder = (function() {
  $m_sci_Traversable$();
  return new $c_scm_ListBuffer()
});
var $d_sc_Traversable$ = new $TypeData().initClass({
  sc_Traversable$: 0
}, false, "scala.collection.Traversable$", {
  sc_Traversable$: 1,
  scg_GenTraversableFactory: 1,
  scg_GenericCompanion: 1,
  O: 1,
  scg_TraversableFactory: 1,
  scg_GenericSeqCompanion: 1
});
$c_sc_Traversable$.prototype.$classData = $d_sc_Traversable$;
var $n_sc_Traversable$;
function $m_sc_Traversable$() {
  if ((!$n_sc_Traversable$)) {
    $n_sc_Traversable$ = new $c_sc_Traversable$()
  };
  return $n_sc_Traversable$
}
/** @constructor */
function $c_scg_ImmutableSetFactory() {
  /*<skip>*/
}
$c_scg_ImmutableSetFactory.prototype = new $h_scg_SetFactory();
$c_scg_ImmutableSetFactory.prototype.constructor = $c_scg_ImmutableSetFactory;
/** @constructor */
function $h_scg_ImmutableSetFactory() {
  /*<skip>*/
}
$h_scg_ImmutableSetFactory.prototype = $c_scg_ImmutableSetFactory.prototype;
$c_scg_ImmutableSetFactory.prototype.newBuilder__scm_Builder = (function() {
  return new $c_scm_SetBuilder(this.emptyInstance__sci_Set())
});
$c_scg_ImmutableSetFactory.prototype.empty__sc_GenTraversable = (function() {
  return this.emptyInstance__sci_Set()
});
function $p_sci_HashMap$HashMapBuilder__isMutable__sci_HashMap__Z($thiz, hs) {
  return ((hs instanceof $c_sci_HashMap$HashTrieMap) && (hs.size__I() === (-1)))
}
function $p_sci_HashMap$HashMapBuilder__makeMutable__sci_HashMap$HashTrieMap__sci_HashMap$HashTrieMap($thiz, hs) {
  if ($p_sci_HashMap$HashMapBuilder__isMutable__sci_HashMap__Z($thiz, hs)) {
    return hs
  } else {
    var elems = new ($d_sci_HashMap.getArrayOf().constr)(32);
    var bit = 0;
    var iBit = 0;
    while ((bit < 32)) {
      if (((hs.sci_HashMap$HashTrieMap__f_bitmap0 & (1 << bit)) !== 0)) {
        elems.set(bit, hs.sci_HashMap$HashTrieMap__f_elems0.get(iBit));
        iBit = ((1 + iBit) | 0)
      };
      bit = ((1 + bit) | 0)
    };
    return new $c_sci_HashMap$HashTrieMap((-1), elems, (-1))
  }
}
function $p_sci_HashMap$HashMapBuilder__isLeaf__sci_HashMap__Z($thiz, hm) {
  return ((hm instanceof $c_sci_HashMap$HashMap1) || (hm instanceof $c_sci_HashMap$HashMapCollision1))
}
function $p_sci_HashMap$HashMapBuilder__makeImmutable__sci_HashMap__sci_HashMap($thiz, hs) {
  if ((hs instanceof $c_sci_HashMap$HashTrieMap)) {
    var x2 = $as_sci_HashMap$HashTrieMap(hs);
    if ($p_sci_HashMap$HashMapBuilder__isMutable__sci_HashMap__Z($thiz, x2)) {
      var bit = 0;
      var bitmap = 0;
      var size = 0;
      while ((bit < 32)) {
        if ((x2.sci_HashMap$HashTrieMap__f_elems0.get(bit) !== null)) {
          x2.sci_HashMap$HashTrieMap__f_elems0.set(bit, $p_sci_HashMap$HashMapBuilder__makeImmutable__sci_HashMap__sci_HashMap($thiz, x2.sci_HashMap$HashTrieMap__f_elems0.get(bit)))
        };
        if ((x2.sci_HashMap$HashTrieMap__f_elems0.get(bit) !== null)) {
          bitmap = (bitmap | (1 << bit));
          size = ((size + x2.sci_HashMap$HashTrieMap__f_elems0.get(bit).size__I()) | 0)
        };
        bit = ((1 + bit) | 0)
      };
      var i = bitmap;
      var x1$2 = $m_jl_Integer$().bitCount__I__I(i);
      switch (x1$2) {
        case 0: {
          return null;
          break
        }
        case 1: {
          var $$x2 = x2.sci_HashMap$HashTrieMap__f_elems0;
          var i$1 = bitmap;
          if ((i$1 === 0)) {
            var $$x1 = 32
          } else {
            var i$2 = (i$1 & ((-i$1) | 0));
            var $$x1 = ((31 - $uI(Math.clz32(i$2))) | 0)
          };
          if ($p_sci_HashMap$HashMapBuilder__isLeaf__sci_HashMap__Z($thiz, $$x2.get($$x1))) {
            var $$x4 = x2.sci_HashMap$HashTrieMap__f_elems0;
            var i$3 = bitmap;
            if ((i$3 === 0)) {
              var $$x3 = 32
            } else {
              var i$4 = (i$3 & ((-i$3) | 0));
              var $$x3 = ((31 - $uI(Math.clz32(i$4))) | 0)
            };
            return $$x4.get($$x3)
          };
          break
        }
      };
      if ((x1$2 === 32)) {
        var elems$2 = x2.sci_HashMap$HashTrieMap__f_elems0
      } else {
        var elems = new ($d_sci_HashMap.getArrayOf().constr)(x1$2);
        var oBit = 0;
        bit = 0;
        while ((bit < 32)) {
          if ((x2.sci_HashMap$HashTrieMap__f_elems0.get(bit) !== null)) {
            elems.set(oBit, x2.sci_HashMap$HashTrieMap__f_elems0.get(bit));
            oBit = ((1 + oBit) | 0)
          };
          bit = ((1 + bit) | 0)
        };
        $m_s_Predef$().assert__Z__V((oBit === x1$2));
        var elems$2 = elems
      };
      x2.sci_HashMap$HashTrieMap__f_size0 = size;
      x2.sci_HashMap$HashTrieMap__f_elems0 = elems$2;
      x2.sci_HashMap$HashTrieMap__f_bitmap0 = bitmap;
      return x2
    }
  };
  return hs
}
function $p_sci_HashMap$HashMapBuilder__compressedIndex__sci_HashMap$HashTrieMap__I__I($thiz, trie, rawIndex) {
  if ((trie.sci_HashMap$HashTrieMap__f_bitmap0 === (-1))) {
    return rawIndex
  } else if (((trie.sci_HashMap$HashTrieMap__f_bitmap0 & (1 << rawIndex)) === 0)) {
    return (-1)
  } else {
    var i = ((((-1) + (1 << rawIndex)) | 0) & trie.sci_HashMap$HashTrieMap__f_bitmap0);
    return $m_jl_Integer$().bitCount__I__I(i)
  }
}
function $p_sci_HashMap$HashMapBuilder__trieIndex__sci_HashMap$HashTrieMap__I__I($thiz, trie, rawIndex) {
  return (($p_sci_HashMap$HashMapBuilder__isMutable__sci_HashMap__Z($thiz, trie) || (trie.sci_HashMap$HashTrieMap__f_bitmap0 === (-1))) ? rawIndex : $p_sci_HashMap$HashMapBuilder__compressedIndex__sci_HashMap$HashTrieMap__I__I($thiz, trie, rawIndex))
}
function $p_sci_HashMap$HashMapBuilder__addOne__sci_HashMap__T2__I__I__sci_HashMap($thiz, toNode, kv, improvedHash, level) {
  while (true) {
    var rc7 = false;
    var x4 = null;
    var x1 = toNode;
    if ((x1 instanceof $c_sci_HashMap$HashMap1)) {
      var x2 = $as_sci_HashMap$HashMap1(x1);
      return ((x2.sci_HashMap$HashMap1__f_hash === improvedHash) ? x2.updated0__O__I__I__O__T2__sci_HashMap$Merger__sci_HashMap(kv.T2__f__1, improvedHash, level, kv.T2__f__2, kv, null) : $thiz.makeMutableTrie__sci_HashMap__sci_HashMap__I__sci_HashMap$HashTrieMap(x2, new $c_sci_HashMap$HashMap1(kv.T2__f__1, improvedHash, kv.T2__f__2, kv), level))
    };
    if ((x1 instanceof $c_sci_HashMap$HashMapCollision1)) {
      var x3 = $as_sci_HashMap$HashMapCollision1(x1);
      return ((x3.sci_HashMap$HashMapCollision1__f_hash === improvedHash) ? x3.updated0__O__I__I__O__T2__sci_HashMap$Merger__sci_HashMap(kv.T2__f__1, improvedHash, level, kv.T2__f__2, kv, null) : $thiz.makeMutableTrie__sci_HashMap__sci_HashMap__I__sci_HashMap$HashTrieMap(x3, new $c_sci_HashMap$HashMap1(kv.T2__f__1, improvedHash, kv.T2__f__2, kv), level))
    };
    if ((x1 instanceof $c_sci_HashMap$HashTrieMap)) {
      rc7 = true;
      x4 = $as_sci_HashMap$HashTrieMap(x1);
      if ($p_sci_HashMap$HashMapBuilder__isMutable__sci_HashMap__Z($thiz, x4)) {
        var arrayIndex = (31 & ((improvedHash >>> level) | 0));
        var this$1 = x4;
        var old = this$1.sci_HashMap$HashTrieMap__f_elems0.get(arrayIndex);
        var this$2 = x4;
        this$2.sci_HashMap$HashTrieMap__f_elems0.set(arrayIndex, ((old === null) ? new $c_sci_HashMap$HashMap1(kv.T2__f__1, improvedHash, kv.T2__f__2, kv) : $p_sci_HashMap$HashMapBuilder__addOne__sci_HashMap__T2__I__I__sci_HashMap($thiz, old, kv, improvedHash, ((5 + level) | 0))));
        return x4
      }
    };
    if (rc7) {
      var rawIndex = (31 & ((improvedHash >>> level) | 0));
      var arrayIndex$2 = $p_sci_HashMap$HashMapBuilder__compressedIndex__sci_HashMap$HashTrieMap__I__I($thiz, x4, rawIndex);
      if ((arrayIndex$2 === (-1))) {
        toNode = $p_sci_HashMap$HashMapBuilder__makeMutable__sci_HashMap$HashTrieMap__sci_HashMap$HashTrieMap($thiz, x4);
        continue
      } else {
        var this$3 = x4;
        var old$2 = this$3.sci_HashMap$HashTrieMap__f_elems0.get(arrayIndex$2);
        var merged = ((old$2 === null) ? new $c_sci_HashMap$HashMap1(kv.T2__f__1, improvedHash, kv.T2__f__2, kv) : $p_sci_HashMap$HashMapBuilder__addOne__sci_HashMap__T2__I__I__sci_HashMap($thiz, old$2, kv, improvedHash, ((5 + level) | 0)));
        if ((merged === old$2)) {
          return x4
        } else {
          var newMutableTrie = $p_sci_HashMap$HashMapBuilder__makeMutable__sci_HashMap$HashTrieMap__sci_HashMap$HashTrieMap($thiz, x4);
          newMutableTrie.sci_HashMap$HashTrieMap__f_elems0.set(rawIndex, merged);
          return newMutableTrie
        }
      }
    };
    if ((x1 === $m_sci_HashMap$EmptyHashMap$())) {
      return toNode.updated0__O__I__I__O__T2__sci_HashMap$Merger__sci_HashMap(kv.T2__f__1, improvedHash, level, kv.T2__f__2, kv, null)
    };
    throw new $c_s_MatchError(x1)
  }
}
function $p_sci_HashMap$HashMapBuilder__addHashMap__sci_HashMap__sci_HashMap__I__sci_HashMap($thiz, toNode, toBeAdded, level) {
  if ((toNode instanceof $c_sci_HashMap$HashMap1)) {
    var x2 = $as_sci_HashMap$HashMap1(toNode);
    return $p_sci_HashMap$HashMapBuilder__addToLeafHashMap__sci_HashMap__I__sci_HashMap__I__sci_HashMap($thiz, x2, x2.sci_HashMap$HashMap1__f_hash, toBeAdded, level)
  } else if ((toNode instanceof $c_sci_HashMap$HashMapCollision1)) {
    var x3 = $as_sci_HashMap$HashMapCollision1(toNode);
    return $p_sci_HashMap$HashMapBuilder__addToLeafHashMap__sci_HashMap__I__sci_HashMap__I__sci_HashMap($thiz, x3, x3.sci_HashMap$HashMapCollision1__f_hash, toBeAdded, level)
  } else if ((toNode instanceof $c_sci_HashMap$HashTrieMap)) {
    var x4 = $as_sci_HashMap$HashTrieMap(toNode);
    return $p_sci_HashMap$HashMapBuilder__addToTrieHashMap__sci_HashMap$HashTrieMap__sci_HashMap__I__sci_HashMap($thiz, x4, toBeAdded, level)
  } else if ((toNode === $m_sci_HashMap$EmptyHashMap$())) {
    return toNode
  } else {
    throw new $c_s_MatchError(toNode)
  }
}
function $p_sci_HashMap$HashMapBuilder__addToLeafHashMap__sci_HashMap__I__sci_HashMap__I__sci_HashMap($thiz, toNode, toNodeHash, toBeAdded, level) {
  $m_s_Predef$().assert__Z__V($p_sci_HashMap$HashMapBuilder__isLeaf__sci_HashMap__Z($thiz, toNode));
  if ((toNode === toBeAdded)) {
    return toNode
  } else if ((toBeAdded instanceof $c_sci_HashMap$HashMap1)) {
    var x2 = $as_sci_HashMap$HashMap1(toBeAdded);
    return ((toNodeHash === x2.sci_HashMap$HashMap1__f_hash) ? toNode.merge0__sci_HashMap__I__sci_HashMap$Merger__sci_HashMap(x2, level, $m_sci_HashMap$().sci_HashMap$__f__concatMerger) : $thiz.makeMutableTrie__sci_HashMap__sci_HashMap__I__sci_HashMap$HashTrieMap(toNode, x2, level))
  } else if ((toBeAdded instanceof $c_sci_HashMap$HashMapCollision1)) {
    var x3 = $as_sci_HashMap$HashMapCollision1(toBeAdded);
    return ((toNodeHash === x3.sci_HashMap$HashMapCollision1__f_hash) ? toNode.merge0__sci_HashMap__I__sci_HashMap$Merger__sci_HashMap(x3, level, $m_sci_HashMap$().sci_HashMap$__f__concatMerger) : $thiz.makeMutableTrie__sci_HashMap__sci_HashMap__I__sci_HashMap$HashTrieMap(toNode, x3, level))
  } else if ((toBeAdded instanceof $c_sci_HashMap$HashTrieMap)) {
    var x4 = $as_sci_HashMap$HashTrieMap(toBeAdded);
    var rawIndex = (31 & ((toNodeHash >>> level) | 0));
    var arrayIndex = $p_sci_HashMap$HashMapBuilder__compressedIndex__sci_HashMap$HashTrieMap__I__I($thiz, x4, rawIndex);
    if ((arrayIndex === (-1))) {
      var result = $p_sci_HashMap$HashMapBuilder__makeMutable__sci_HashMap$HashTrieMap__sci_HashMap$HashTrieMap($thiz, x4);
      result.sci_HashMap$HashTrieMap__f_elems0.set(rawIndex, toNode);
      return result
    } else {
      var newEle = $p_sci_HashMap$HashMapBuilder__addToLeafHashMap__sci_HashMap__I__sci_HashMap__I__sci_HashMap($thiz, toNode, toNodeHash, x4.sci_HashMap$HashTrieMap__f_elems0.get(arrayIndex), ((5 + level) | 0));
      if ((newEle === toBeAdded)) {
        return toBeAdded
      } else {
        var result$2 = $p_sci_HashMap$HashMapBuilder__makeMutable__sci_HashMap$HashTrieMap__sci_HashMap$HashTrieMap($thiz, x4);
        result$2.sci_HashMap$HashTrieMap__f_elems0.set(rawIndex, newEle);
        return result$2
      }
    }
  } else if ($f_sc_MapLike__isEmpty__Z(toBeAdded)) {
    return toNode
  } else {
    throw new $c_s_MatchError(toBeAdded)
  }
}
function $p_sci_HashMap$HashMapBuilder__addToTrieHashMap__sci_HashMap$HashTrieMap__sci_HashMap__I__sci_HashMap($thiz, toNode, toBeAdded, level) {
  if ((toNode === toBeAdded)) {
    return toNode
  } else if ((toBeAdded instanceof $c_sci_HashMap$HashMap1)) {
    var x2 = $as_sci_HashMap$HashMap1(toBeAdded);
    return $p_sci_HashMap$HashMapBuilder__addFromLeaf$1__I__sci_HashMap__I__sci_HashMap$HashTrieMap__sci_HashMap($thiz, x2.sci_HashMap$HashMap1__f_hash, toBeAdded, level, toNode)
  } else if ((toBeAdded instanceof $c_sci_HashMap$HashMapCollision1)) {
    var x3 = $as_sci_HashMap$HashMapCollision1(toBeAdded);
    return $p_sci_HashMap$HashMapBuilder__addFromLeaf$1__I__sci_HashMap__I__sci_HashMap$HashTrieMap__sci_HashMap($thiz, x3.sci_HashMap$HashMapCollision1__f_hash, toBeAdded, level, toNode)
  } else if ((toBeAdded instanceof $c_sci_HashMap$HashTrieMap)) {
    var x4 = $as_sci_HashMap$HashTrieMap(toBeAdded);
    var result = toNode;
    var bBitSet = x4.sci_HashMap$HashTrieMap__f_bitmap0;
    var bArrayIndex = 0;
    while ((bBitSet !== 0)) {
      var i = bBitSet;
      if ((i === 0)) {
        var rawIndex = 32
      } else {
        var i$1 = (i & ((-i) | 0));
        var rawIndex = ((31 - $uI(Math.clz32(i$1))) | 0)
      };
      var arrayIndex = $p_sci_HashMap$HashMapBuilder__trieIndex__sci_HashMap$HashTrieMap__I__I($thiz, result, rawIndex);
      var bValue = x4.sci_HashMap$HashTrieMap__f_elems0.get(bArrayIndex);
      if ((arrayIndex === (-1))) {
        result = $p_sci_HashMap$HashMapBuilder__makeMutable__sci_HashMap$HashTrieMap__sci_HashMap$HashTrieMap($thiz, result);
        var this$2 = result;
        this$2.sci_HashMap$HashTrieMap__f_elems0.set(rawIndex, bValue)
      } else {
        var this$3 = result;
        var aValue = this$3.sci_HashMap$HashTrieMap__f_elems0.get(arrayIndex);
        if ((aValue !== bValue)) {
          if ((aValue === null)) {
            $m_s_Predef$().assert__Z__V($p_sci_HashMap$HashMapBuilder__isMutable__sci_HashMap__Z($thiz, result));
            var this$4 = result;
            this$4.sci_HashMap$HashTrieMap__f_elems0.set(rawIndex, bValue)
          } else {
            var resultAtIndex = $p_sci_HashMap$HashMapBuilder__addHashMap__sci_HashMap__sci_HashMap__I__sci_HashMap($thiz, aValue, bValue, ((5 + level) | 0));
            if ((resultAtIndex !== aValue)) {
              result = $p_sci_HashMap$HashMapBuilder__makeMutable__sci_HashMap$HashTrieMap__sci_HashMap$HashTrieMap($thiz, result);
              var this$5 = result;
              this$5.sci_HashMap$HashTrieMap__f_elems0.set(rawIndex, resultAtIndex)
            }
          }
        }
      };
      bBitSet = (bBitSet ^ (1 << rawIndex));
      bArrayIndex = ((1 + bArrayIndex) | 0)
    };
    return result
  } else if ($f_sc_MapLike__isEmpty__Z(toBeAdded)) {
    return toNode
  } else {
    throw new $c_s_MatchError(toBeAdded)
  }
}
function $p_sci_HashMap$HashMapBuilder__addFromLeaf$1__I__sci_HashMap__I__sci_HashMap$HashTrieMap__sci_HashMap($thiz, hash, toBeAdded$1, level$3, toNode$1) {
  $m_s_Predef$().assert__Z__V($p_sci_HashMap$HashMapBuilder__isLeaf__sci_HashMap__Z($thiz, toBeAdded$1));
  var rawIndex = (31 & ((hash >>> level$3) | 0));
  var arrayIndex = $p_sci_HashMap$HashMapBuilder__trieIndex__sci_HashMap$HashTrieMap__I__I($thiz, toNode$1, rawIndex);
  if ((arrayIndex === (-1))) {
    var newToNode = $p_sci_HashMap$HashMapBuilder__makeMutable__sci_HashMap$HashTrieMap__sci_HashMap$HashTrieMap($thiz, toNode$1);
    newToNode.sci_HashMap$HashTrieMap__f_elems0.set(rawIndex, toBeAdded$1);
    return newToNode
  } else {
    var old = toNode$1.sci_HashMap$HashTrieMap__f_elems0.get(arrayIndex);
    if ((old === toBeAdded$1)) {
      return toNode$1
    } else if ((old === null)) {
      $m_s_Predef$().assert__Z__V($p_sci_HashMap$HashMapBuilder__isMutable__sci_HashMap__Z($thiz, toNode$1));
      toNode$1.sci_HashMap$HashTrieMap__f_elems0.set(arrayIndex, toBeAdded$1);
      return toNode$1
    } else {
      var result = $p_sci_HashMap$HashMapBuilder__addHashMap__sci_HashMap__sci_HashMap__I__sci_HashMap($thiz, old, toBeAdded$1, ((5 + level$3) | 0));
      if ((result === old)) {
        return toNode$1
      } else {
        var newToNode$2 = $p_sci_HashMap$HashMapBuilder__makeMutable__sci_HashMap$HashTrieMap__sci_HashMap$HashTrieMap($thiz, toNode$1);
        newToNode$2.sci_HashMap$HashTrieMap__f_elems0.set(rawIndex, result);
        return newToNode$2
      }
    }
  }
}
/** @constructor */
function $c_sci_HashMap$HashMapBuilder() {
  this.sci_HashMap$HashMapBuilder__f_rootNode = null;
  this.sci_HashMap$HashMapBuilder__f_rootNode = ($m_sci_HashMap$(), $m_sci_HashMap$EmptyHashMap$())
}
$c_sci_HashMap$HashMapBuilder.prototype = new $h_O();
$c_sci_HashMap$HashMapBuilder.prototype.constructor = $c_sci_HashMap$HashMapBuilder;
/** @constructor */
function $h_sci_HashMap$HashMapBuilder() {
  /*<skip>*/
}
$h_sci_HashMap$HashMapBuilder.prototype = $c_sci_HashMap$HashMapBuilder.prototype;
$c_sci_HashMap$HashMapBuilder.prototype.sizeHint__I__V = (function(size) {
  /*<skip>*/
});
$c_sci_HashMap$HashMapBuilder.prototype.sizeHintBounded__I__sc_TraversableLike__V = (function(size, boundingColl) {
  $f_scm_Builder__sizeHintBounded__I__sc_TraversableLike__V(this, size, boundingColl)
});
$c_sci_HashMap$HashMapBuilder.prototype.result__sci_HashMap = (function() {
  $m_sci_HashMap$();
  var m = $p_sci_HashMap$HashMapBuilder__makeImmutable__sci_HashMap__sci_HashMap(this, this.sci_HashMap$HashMapBuilder__f_rootNode);
  this.sci_HashMap$HashMapBuilder__f_rootNode = ((m === null) ? $m_sci_HashMap$EmptyHashMap$() : m);
  return this.sci_HashMap$HashMapBuilder__f_rootNode
});
$c_sci_HashMap$HashMapBuilder.prototype.$plus$eq__T2__sci_HashMap$HashMapBuilder = (function(elem) {
  var key = elem.T2__f__1;
  var hash = $m_sci_HashMap$().scala$collection$immutable$HashMap$$computeHashImpl__O__I(key);
  this.sci_HashMap$HashMapBuilder__f_rootNode = $p_sci_HashMap$HashMapBuilder__addOne__sci_HashMap__T2__I__I__sci_HashMap(this, this.sci_HashMap$HashMapBuilder__f_rootNode, elem, hash, 0);
  return this
});
$c_sci_HashMap$HashMapBuilder.prototype.$plus$plus$eq__sc_TraversableOnce__sci_HashMap$HashMapBuilder = (function(xs) {
  if ((xs instanceof $c_sci_HashMap)) {
    var x2 = $as_sci_HashMap(xs);
    if ((this.sci_HashMap$HashMapBuilder__f_rootNode === $m_sci_HashMap$EmptyHashMap$())) {
      if ((!$f_sc_MapLike__isEmpty__Z(x2))) {
        this.sci_HashMap$HashMapBuilder__f_rootNode = x2
      }
    } else {
      this.sci_HashMap$HashMapBuilder__f_rootNode = $p_sci_HashMap$HashMapBuilder__addHashMap__sci_HashMap__sci_HashMap__I__sci_HashMap(this, this.sci_HashMap$HashMapBuilder__f_rootNode, x2, 0)
    };
    return this
  } else {
    return (false ? $as_sci_HashMap$HashMapBuilder($f_scg_Growable__$plus$plus$eq__sc_TraversableOnce__scg_Growable(this, xs)) : $as_sci_HashMap$HashMapBuilder($f_scg_Growable__$plus$plus$eq__sc_TraversableOnce__scg_Growable(this, xs)))
  }
});
$c_sci_HashMap$HashMapBuilder.prototype.leafHash__sci_HashMap__I = (function(leaf) {
  if ((leaf instanceof $c_sci_HashMap$HashMap1)) {
    var x2 = $as_sci_HashMap$HashMap1(leaf);
    return x2.sci_HashMap$HashMap1__f_hash
  } else if ((leaf instanceof $c_sci_HashMap$HashMapCollision1)) {
    var x3 = $as_sci_HashMap$HashMapCollision1(leaf);
    return x3.sci_HashMap$HashMapCollision1__f_hash
  } else {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), $objectGetClass(leaf).toString__T())
  }
});
$c_sci_HashMap$HashMapBuilder.prototype.makeMutableTrie__sci_HashMap__sci_HashMap__I__sci_HashMap$HashTrieMap = (function(aLeaf, bLeaf, level) {
  var elems = new ($d_sci_HashMap.getArrayOf().constr)(32);
  var aRawIndex = (31 & ((this.leafHash__sci_HashMap__I(aLeaf) >>> level) | 0));
  var bRawIndex = (31 & ((this.leafHash__sci_HashMap__I(bLeaf) >>> level) | 0));
  if ((aRawIndex === bRawIndex)) {
    elems.set(aRawIndex, this.makeMutableTrie__sci_HashMap__sci_HashMap__I__sci_HashMap$HashTrieMap(aLeaf, bLeaf, ((5 + level) | 0)))
  } else {
    elems.set(aRawIndex, aLeaf);
    elems.set(bRawIndex, bLeaf)
  };
  return new $c_sci_HashMap$HashTrieMap((-1), elems, (-1))
});
$c_sci_HashMap$HashMapBuilder.prototype.$plus$plus$eq__sc_TraversableOnce__scg_Growable = (function(xs) {
  return this.$plus$plus$eq__sc_TraversableOnce__sci_HashMap$HashMapBuilder(xs)
});
$c_sci_HashMap$HashMapBuilder.prototype.$plus$eq__O__scg_Growable = (function(elem) {
  return this.$plus$eq__T2__sci_HashMap$HashMapBuilder($as_T2(elem))
});
$c_sci_HashMap$HashMapBuilder.prototype.$plus$eq__O__scm_Builder = (function(elem) {
  return this.$plus$eq__T2__sci_HashMap$HashMapBuilder($as_T2(elem))
});
$c_sci_HashMap$HashMapBuilder.prototype.result__O = (function() {
  return this.result__sci_HashMap()
});
function $as_sci_HashMap$HashMapBuilder(obj) {
  return (((obj instanceof $c_sci_HashMap$HashMapBuilder) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.HashMap$HashMapBuilder"))
}
function $isArrayOf_sci_HashMap$HashMapBuilder(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_HashMap$HashMapBuilder)))
}
function $asArrayOf_sci_HashMap$HashMapBuilder(obj, depth) {
  return (($isArrayOf_sci_HashMap$HashMapBuilder(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.HashMap$HashMapBuilder;", depth))
}
var $d_sci_HashMap$HashMapBuilder = new $TypeData().initClass({
  sci_HashMap$HashMapBuilder: 0
}, false, "scala.collection.immutable.HashMap$HashMapBuilder", {
  sci_HashMap$HashMapBuilder: 1,
  O: 1,
  scm_ReusableBuilder: 1,
  scm_Builder: 1,
  scg_Growable: 1,
  scg_Clearable: 1
});
$c_sci_HashMap$HashMapBuilder.prototype.$classData = $d_sci_HashMap$HashMapBuilder;
function $p_sci_HashSet$HashSetBuilder__isMutable__sci_HashSet__Z($thiz, hs) {
  return ((hs instanceof $c_sci_HashSet$HashTrieSet) && (hs.size__I() === (-1)))
}
function $p_sci_HashSet$HashSetBuilder__makeMutable__sci_HashSet$HashTrieSet__sci_HashSet$HashTrieSet($thiz, hs) {
  if ($p_sci_HashSet$HashSetBuilder__isMutable__sci_HashSet__Z($thiz, hs)) {
    return hs
  } else {
    var elems = new ($d_sci_HashSet.getArrayOf().constr)(32);
    var bit = 0;
    var iBit = 0;
    while ((bit < 32)) {
      if (((hs.sci_HashSet$HashTrieSet__f_bitmap & (1 << bit)) !== 0)) {
        elems.set(bit, hs.sci_HashSet$HashTrieSet__f_elems.get(iBit));
        iBit = ((1 + iBit) | 0)
      };
      bit = ((1 + bit) | 0)
    };
    return new $c_sci_HashSet$HashTrieSet((-1), elems, (-1))
  }
}
function $p_sci_HashSet$HashSetBuilder__makeImmutable__sci_HashSet__sci_HashSet($thiz, hs) {
  if ((hs instanceof $c_sci_HashSet$HashTrieSet)) {
    var x2 = $as_sci_HashSet$HashTrieSet(hs);
    if ($p_sci_HashSet$HashSetBuilder__isMutable__sci_HashSet__Z($thiz, x2)) {
      var bit = 0;
      var bitmap = 0;
      var size = 0;
      while ((bit < 32)) {
        if ((x2.sci_HashSet$HashTrieSet__f_elems.get(bit) !== null)) {
          x2.sci_HashSet$HashTrieSet__f_elems.set(bit, $p_sci_HashSet$HashSetBuilder__makeImmutable__sci_HashSet__sci_HashSet($thiz, x2.sci_HashSet$HashTrieSet__f_elems.get(bit)))
        };
        if ((x2.sci_HashSet$HashTrieSet__f_elems.get(bit) !== null)) {
          bitmap = (bitmap | (1 << bit));
          size = ((size + x2.sci_HashSet$HashTrieSet__f_elems.get(bit).size__I()) | 0)
        };
        bit = ((1 + bit) | 0)
      };
      var i = bitmap;
      var x1$2 = $m_jl_Integer$().bitCount__I__I(i);
      switch (x1$2) {
        case 0: {
          return null;
          break
        }
        case 1: {
          var $$x2 = x2.sci_HashSet$HashTrieSet__f_elems;
          var i$1 = bitmap;
          if ((i$1 === 0)) {
            var $$x1 = 32
          } else {
            var i$2 = (i$1 & ((-i$1) | 0));
            var $$x1 = ((31 - $uI(Math.clz32(i$2))) | 0)
          };
          if (($$x2.get($$x1) instanceof $c_sci_HashSet$LeafHashSet)) {
            var $$x4 = x2.sci_HashSet$HashTrieSet__f_elems;
            var i$3 = bitmap;
            if ((i$3 === 0)) {
              var $$x3 = 32
            } else {
              var i$4 = (i$3 & ((-i$3) | 0));
              var $$x3 = ((31 - $uI(Math.clz32(i$4))) | 0)
            };
            return $$x4.get($$x3)
          };
          break
        }
      };
      if ((x1$2 === 32)) {
        var elems$2 = x2.sci_HashSet$HashTrieSet__f_elems
      } else {
        var elems = new ($d_sci_HashSet.getArrayOf().constr)(x1$2);
        var oBit = 0;
        bit = 0;
        while ((bit < 32)) {
          if ((x2.sci_HashSet$HashTrieSet__f_elems.get(bit) !== null)) {
            elems.set(oBit, x2.sci_HashSet$HashTrieSet__f_elems.get(bit));
            oBit = ((1 + oBit) | 0)
          };
          bit = ((1 + bit) | 0)
        };
        $m_s_Predef$().assert__Z__V((oBit === x1$2));
        var elems$2 = elems
      };
      x2.sci_HashSet$HashTrieSet__f_size0 = size;
      x2.sci_HashSet$HashTrieSet__f_elems = elems$2;
      x2.sci_HashSet$HashTrieSet__f_bitmap = bitmap;
      return x2
    }
  };
  return hs
}
function $p_sci_HashSet$HashSetBuilder__addOne__sci_HashSet__O__I__I__sci_HashSet($thiz, toNode, elem, improvedHash, level) {
  while (true) {
    var rc6 = false;
    var x3 = null;
    var x1 = toNode;
    if ((x1 instanceof $c_sci_HashSet$LeafHashSet)) {
      var x2 = $as_sci_HashSet$LeafHashSet(x1);
      return ((x2.sci_HashSet$LeafHashSet__f_hash === improvedHash) ? x2.updated0__O__I__I__sci_HashSet(elem, improvedHash, level) : $thiz.makeMutableTrie__sci_HashSet$LeafHashSet__O__I__I__sci_HashSet$HashTrieSet(x2, elem, improvedHash, level))
    };
    if ((x1 instanceof $c_sci_HashSet$HashTrieSet)) {
      rc6 = true;
      x3 = $as_sci_HashSet$HashTrieSet(x1);
      if ($p_sci_HashSet$HashSetBuilder__isMutable__sci_HashSet__Z($thiz, x3)) {
        var arrayIndex = (31 & ((improvedHash >>> level) | 0));
        var old = x3.sci_HashSet$HashTrieSet__f_elems.get(arrayIndex);
        x3.sci_HashSet$HashTrieSet__f_elems.set(arrayIndex, ((old === null) ? new $c_sci_HashSet$HashSet1(elem, improvedHash) : $p_sci_HashSet$HashSetBuilder__addOne__sci_HashSet__O__I__I__sci_HashSet($thiz, old, elem, improvedHash, ((5 + level) | 0))));
        return x3
      }
    };
    if (rc6) {
      var rawIndex = (31 & ((improvedHash >>> level) | 0));
      var arrayIndex$2 = $p_sci_HashSet$HashSetBuilder__compressedIndex__sci_HashSet$HashTrieSet__I__I($thiz, x3, rawIndex);
      if ((arrayIndex$2 === (-1))) {
        toNode = $p_sci_HashSet$HashSetBuilder__makeMutable__sci_HashSet$HashTrieSet__sci_HashSet$HashTrieSet($thiz, x3);
        continue
      } else {
        var old$2 = x3.sci_HashSet$HashTrieSet__f_elems.get(arrayIndex$2);
        var merged = ((old$2 === null) ? new $c_sci_HashSet$HashSet1(elem, improvedHash) : $p_sci_HashSet$HashSetBuilder__addOne__sci_HashSet__O__I__I__sci_HashSet($thiz, old$2, elem, improvedHash, ((5 + level) | 0)));
        if ((merged === old$2)) {
          return x3
        } else {
          var newMutableTrie = $p_sci_HashSet$HashSetBuilder__makeMutable__sci_HashSet$HashTrieSet__sci_HashSet$HashTrieSet($thiz, x3);
          newMutableTrie.sci_HashSet$HashTrieSet__f_elems.set(rawIndex, merged);
          return newMutableTrie
        }
      }
    };
    if ($f_sc_SetLike__isEmpty__Z(x1)) {
      return toNode.updated0__O__I__I__sci_HashSet(elem, improvedHash, level)
    };
    throw new $c_s_MatchError(x1)
  }
}
function $p_sci_HashSet$HashSetBuilder__compressedIndex__sci_HashSet$HashTrieSet__I__I($thiz, trie, rawIndex) {
  if ((trie.sci_HashSet$HashTrieSet__f_bitmap === (-1))) {
    return rawIndex
  } else if (((trie.sci_HashSet$HashTrieSet__f_bitmap & (1 << rawIndex)) === 0)) {
    return (-1)
  } else {
    var i = ((((-1) + (1 << rawIndex)) | 0) & trie.sci_HashSet$HashTrieSet__f_bitmap);
    return $m_jl_Integer$().bitCount__I__I(i)
  }
}
function $p_sci_HashSet$HashSetBuilder__trieIndex__sci_HashSet$HashTrieSet__I__I($thiz, trie, rawIndex) {
  return (($p_sci_HashSet$HashSetBuilder__isMutable__sci_HashSet__Z($thiz, trie) || (trie.sci_HashSet$HashTrieSet__f_bitmap === (-1))) ? rawIndex : $p_sci_HashSet$HashSetBuilder__compressedIndex__sci_HashSet$HashTrieSet__I__I($thiz, trie, rawIndex))
}
function $p_sci_HashSet$HashSetBuilder__addHashSet__sci_HashSet__sci_HashSet__I__sci_HashSet($thiz, toNode, toBeAdded, level) {
  if ((toNode instanceof $c_sci_HashSet$LeafHashSet)) {
    var x2 = $as_sci_HashSet$LeafHashSet(toNode);
    return $p_sci_HashSet$HashSetBuilder__addToLeafHashSet__sci_HashSet$LeafHashSet__sci_HashSet__I__sci_HashSet($thiz, x2, toBeAdded, level)
  } else if ((toNode instanceof $c_sci_HashSet$HashTrieSet)) {
    var x3 = $as_sci_HashSet$HashTrieSet(toNode);
    return $p_sci_HashSet$HashSetBuilder__addToTrieHashSet__sci_HashSet$HashTrieSet__sci_HashSet__I__sci_HashSet($thiz, x3, toBeAdded, level)
  } else if ($f_sc_SetLike__isEmpty__Z(toNode)) {
    return toNode
  } else {
    throw new $c_s_MatchError(toNode)
  }
}
function $p_sci_HashSet$HashSetBuilder__addToTrieHashSet__sci_HashSet$HashTrieSet__sci_HashSet__I__sci_HashSet($thiz, toNode, toBeAdded, level) {
  if ((toNode === toBeAdded)) {
    return toNode
  } else if ((toBeAdded instanceof $c_sci_HashSet$LeafHashSet)) {
    var x2 = $as_sci_HashSet$LeafHashSet(toBeAdded);
    var rawIndex = (31 & ((x2.sci_HashSet$LeafHashSet__f_hash >>> level) | 0));
    var arrayIndex = $p_sci_HashSet$HashSetBuilder__trieIndex__sci_HashSet$HashTrieSet__I__I($thiz, toNode, rawIndex);
    if ((arrayIndex === (-1))) {
      var newToNode = $p_sci_HashSet$HashSetBuilder__makeMutable__sci_HashSet$HashTrieSet__sci_HashSet$HashTrieSet($thiz, toNode);
      newToNode.sci_HashSet$HashTrieSet__f_elems.set(rawIndex, toBeAdded);
      return newToNode
    } else {
      var old = toNode.sci_HashSet$HashTrieSet__f_elems.get(arrayIndex);
      if ((old === toBeAdded)) {
        return toNode
      } else if ((old === null)) {
        $m_s_Predef$().assert__Z__V($p_sci_HashSet$HashSetBuilder__isMutable__sci_HashSet__Z($thiz, toNode));
        toNode.sci_HashSet$HashTrieSet__f_elems.set(arrayIndex, toBeAdded);
        return toNode
      } else {
        var result = $p_sci_HashSet$HashSetBuilder__addHashSet__sci_HashSet__sci_HashSet__I__sci_HashSet($thiz, old, toBeAdded, ((5 + level) | 0));
        if ((result === old)) {
          return toNode
        } else {
          var newToNode$2 = $p_sci_HashSet$HashSetBuilder__makeMutable__sci_HashSet$HashTrieSet__sci_HashSet$HashTrieSet($thiz, toNode);
          newToNode$2.sci_HashSet$HashTrieSet__f_elems.set(rawIndex, result);
          return newToNode$2
        }
      }
    }
  } else if ((toBeAdded instanceof $c_sci_HashSet$HashTrieSet)) {
    var x3 = $as_sci_HashSet$HashTrieSet(toBeAdded);
    var result$2 = toNode;
    var bBitSet = x3.sci_HashSet$HashTrieSet__f_bitmap;
    var bArrayIndex = 0;
    while ((bBitSet !== 0)) {
      var bValue = x3.sci_HashSet$HashTrieSet__f_elems.get(bArrayIndex);
      var i = bBitSet;
      if ((i === 0)) {
        var rawIndex$2 = 32
      } else {
        var i$1 = (i & ((-i) | 0));
        var rawIndex$2 = ((31 - $uI(Math.clz32(i$1))) | 0)
      };
      var aArrayIndex = $p_sci_HashSet$HashSetBuilder__trieIndex__sci_HashSet$HashTrieSet__I__I($thiz, result$2, rawIndex$2);
      if ((aArrayIndex === (-1))) {
        result$2 = $p_sci_HashSet$HashSetBuilder__makeMutable__sci_HashSet$HashTrieSet__sci_HashSet$HashTrieSet($thiz, result$2);
        result$2.sci_HashSet$HashTrieSet__f_elems.set(rawIndex$2, bValue)
      } else {
        var aValue = result$2.sci_HashSet$HashTrieSet__f_elems.get(aArrayIndex);
        if ((aValue !== bValue)) {
          if ((aValue === null)) {
            $m_s_Predef$().assert__Z__V($p_sci_HashSet$HashSetBuilder__isMutable__sci_HashSet__Z($thiz, result$2));
            result$2.sci_HashSet$HashTrieSet__f_elems.set(rawIndex$2, bValue)
          } else {
            var resultAtIndex = $p_sci_HashSet$HashSetBuilder__addHashSet__sci_HashSet__sci_HashSet__I__sci_HashSet($thiz, aValue, bValue, ((5 + level) | 0));
            if ((resultAtIndex !== aValue)) {
              result$2 = $p_sci_HashSet$HashSetBuilder__makeMutable__sci_HashSet$HashTrieSet__sci_HashSet$HashTrieSet($thiz, result$2);
              result$2.sci_HashSet$HashTrieSet__f_elems.set(rawIndex$2, resultAtIndex)
            }
          }
        }
      };
      bBitSet = (bBitSet ^ (1 << rawIndex$2));
      bArrayIndex = ((1 + bArrayIndex) | 0)
    };
    return result$2
  } else if ($f_sc_SetLike__isEmpty__Z(toBeAdded)) {
    return toNode
  } else {
    throw new $c_s_MatchError(toBeAdded)
  }
}
function $p_sci_HashSet$HashSetBuilder__addToLeafHashSet__sci_HashSet$LeafHashSet__sci_HashSet__I__sci_HashSet($thiz, toNode, toBeAdded, level) {
  if ((toNode === toBeAdded)) {
    return toNode
  } else if ((toBeAdded instanceof $c_sci_HashSet$LeafHashSet)) {
    var x2 = $as_sci_HashSet$LeafHashSet(toBeAdded);
    return ((toNode.sci_HashSet$LeafHashSet__f_hash === x2.sci_HashSet$LeafHashSet__f_hash) ? toNode.union0__sci_HashSet__I__sci_HashSet(x2, level) : $thiz.makeMutableTrie__sci_HashSet$LeafHashSet__sci_HashSet$LeafHashSet__I__sci_HashSet$HashTrieSet(toNode, x2, level))
  } else if ((toBeAdded instanceof $c_sci_HashSet$HashTrieSet)) {
    var x3 = $as_sci_HashSet$HashTrieSet(toBeAdded);
    var rawIndex = (31 & ((toNode.sci_HashSet$LeafHashSet__f_hash >>> level) | 0));
    var arrayIndex = $p_sci_HashSet$HashSetBuilder__compressedIndex__sci_HashSet$HashTrieSet__I__I($thiz, x3, rawIndex);
    if ((arrayIndex === (-1))) {
      var result = $p_sci_HashSet$HashSetBuilder__makeMutable__sci_HashSet$HashTrieSet__sci_HashSet$HashTrieSet($thiz, x3);
      result.sci_HashSet$HashTrieSet__f_elems.set(rawIndex, toNode);
      return result
    } else {
      var newEle = $p_sci_HashSet$HashSetBuilder__addToLeafHashSet__sci_HashSet$LeafHashSet__sci_HashSet__I__sci_HashSet($thiz, toNode, x3.sci_HashSet$HashTrieSet__f_elems.get(arrayIndex), ((5 + level) | 0));
      if ((newEle === toBeAdded)) {
        return toBeAdded
      } else {
        var result$2 = $p_sci_HashSet$HashSetBuilder__makeMutable__sci_HashSet$HashTrieSet__sci_HashSet$HashTrieSet($thiz, x3);
        result$2.sci_HashSet$HashTrieSet__f_elems.set(rawIndex, newEle);
        return result$2
      }
    }
  } else if ($f_sc_SetLike__isEmpty__Z(toBeAdded)) {
    return toNode
  } else {
    throw new $c_s_MatchError(toBeAdded)
  }
}
/** @constructor */
function $c_sci_HashSet$HashSetBuilder() {
  this.sci_HashSet$HashSetBuilder__f_rootNode = null;
  this.sci_HashSet$HashSetBuilder__f_rootNode = ($m_sci_HashSet$(), $m_sci_HashSet$EmptyHashSet$())
}
$c_sci_HashSet$HashSetBuilder.prototype = new $h_O();
$c_sci_HashSet$HashSetBuilder.prototype.constructor = $c_sci_HashSet$HashSetBuilder;
/** @constructor */
function $h_sci_HashSet$HashSetBuilder() {
  /*<skip>*/
}
$h_sci_HashSet$HashSetBuilder.prototype = $c_sci_HashSet$HashSetBuilder.prototype;
$c_sci_HashSet$HashSetBuilder.prototype.sizeHint__I__V = (function(size) {
  /*<skip>*/
});
$c_sci_HashSet$HashSetBuilder.prototype.sizeHintBounded__I__sc_TraversableLike__V = (function(size, boundingColl) {
  $f_scm_Builder__sizeHintBounded__I__sc_TraversableLike__V(this, size, boundingColl)
});
$c_sci_HashSet$HashSetBuilder.prototype.result__sci_HashSet = (function() {
  $m_sci_HashSet$();
  var s = $p_sci_HashSet$HashSetBuilder__makeImmutable__sci_HashSet__sci_HashSet(this, this.sci_HashSet$HashSetBuilder__f_rootNode);
  this.sci_HashSet$HashSetBuilder__f_rootNode = ((s === null) ? $m_sci_HashSet$EmptyHashSet$() : s);
  return this.sci_HashSet$HashSetBuilder__f_rootNode
});
$c_sci_HashSet$HashSetBuilder.prototype.$plus$eq__O__sci_HashSet$HashSetBuilder = (function(elem) {
  var hash = $m_sci_HashSet$().computeHash__O__I(elem);
  this.sci_HashSet$HashSetBuilder__f_rootNode = $p_sci_HashSet$HashSetBuilder__addOne__sci_HashSet__O__I__I__sci_HashSet(this, this.sci_HashSet$HashSetBuilder__f_rootNode, elem, hash, 0);
  return this
});
$c_sci_HashSet$HashSetBuilder.prototype.$plus$plus$eq__sc_TraversableOnce__sci_HashSet$HashSetBuilder = (function(xs) {
  if ((xs instanceof $c_sci_HashSet)) {
    var x2 = $as_sci_HashSet(xs);
    var this$1 = this.sci_HashSet$HashSetBuilder__f_rootNode;
    if ($f_sc_SetLike__isEmpty__Z(this$1)) {
      if ((!$f_sc_SetLike__isEmpty__Z(x2))) {
        this.sci_HashSet$HashSetBuilder__f_rootNode = x2
      }
    } else {
      this.sci_HashSet$HashSetBuilder__f_rootNode = $p_sci_HashSet$HashSetBuilder__addHashSet__sci_HashSet__sci_HashSet__I__sci_HashSet(this, this.sci_HashSet$HashSetBuilder__f_rootNode, x2, 0)
    };
    return this
  } else {
    return (false ? $as_sci_HashSet$HashSetBuilder($f_scg_Growable__$plus$plus$eq__sc_TraversableOnce__scg_Growable(this, xs)) : $as_sci_HashSet$HashSetBuilder($f_scg_Growable__$plus$plus$eq__sc_TraversableOnce__scg_Growable(this, xs)))
  }
});
$c_sci_HashSet$HashSetBuilder.prototype.makeMutableTrie__sci_HashSet$LeafHashSet__sci_HashSet$LeafHashSet__I__sci_HashSet$HashTrieSet = (function(aLeaf, bLeaf, level) {
  var elems = new ($d_sci_HashSet.getArrayOf().constr)(32);
  var aRawIndex = (31 & ((aLeaf.sci_HashSet$LeafHashSet__f_hash >>> level) | 0));
  var bRawIndex = (31 & ((bLeaf.sci_HashSet$LeafHashSet__f_hash >>> level) | 0));
  if ((aRawIndex === bRawIndex)) {
    elems.set(aRawIndex, this.makeMutableTrie__sci_HashSet$LeafHashSet__sci_HashSet$LeafHashSet__I__sci_HashSet$HashTrieSet(aLeaf, bLeaf, ((5 + level) | 0)))
  } else {
    elems.set(aRawIndex, aLeaf);
    elems.set(bRawIndex, bLeaf)
  };
  return new $c_sci_HashSet$HashTrieSet((-1), elems, (-1))
});
$c_sci_HashSet$HashSetBuilder.prototype.makeMutableTrie__sci_HashSet$LeafHashSet__O__I__I__sci_HashSet$HashTrieSet = (function(leaf, elem, elemImprovedHash, level) {
  return this.makeMutableTrie__sci_HashSet$LeafHashSet__sci_HashSet$LeafHashSet__I__sci_HashSet$HashTrieSet(leaf, new $c_sci_HashSet$HashSet1(elem, elemImprovedHash), level)
});
$c_sci_HashSet$HashSetBuilder.prototype.$plus$plus$eq__sc_TraversableOnce__scg_Growable = (function(xs) {
  return this.$plus$plus$eq__sc_TraversableOnce__sci_HashSet$HashSetBuilder(xs)
});
$c_sci_HashSet$HashSetBuilder.prototype.$plus$eq__O__scg_Growable = (function(elem) {
  return this.$plus$eq__O__sci_HashSet$HashSetBuilder(elem)
});
$c_sci_HashSet$HashSetBuilder.prototype.$plus$eq__O__scm_Builder = (function(elem) {
  return this.$plus$eq__O__sci_HashSet$HashSetBuilder(elem)
});
$c_sci_HashSet$HashSetBuilder.prototype.result__O = (function() {
  return this.result__sci_HashSet()
});
function $as_sci_HashSet$HashSetBuilder(obj) {
  return (((obj instanceof $c_sci_HashSet$HashSetBuilder) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.HashSet$HashSetBuilder"))
}
function $isArrayOf_sci_HashSet$HashSetBuilder(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_HashSet$HashSetBuilder)))
}
function $asArrayOf_sci_HashSet$HashSetBuilder(obj, depth) {
  return (($isArrayOf_sci_HashSet$HashSetBuilder(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.HashSet$HashSetBuilder;", depth))
}
var $d_sci_HashSet$HashSetBuilder = new $TypeData().initClass({
  sci_HashSet$HashSetBuilder: 0
}, false, "scala.collection.immutable.HashSet$HashSetBuilder", {
  sci_HashSet$HashSetBuilder: 1,
  O: 1,
  scm_ReusableBuilder: 1,
  scm_Builder: 1,
  scg_Growable: 1,
  scg_Clearable: 1
});
$c_sci_HashSet$HashSetBuilder.prototype.$classData = $d_sci_HashSet$HashSetBuilder;
/** @constructor */
function $c_sci_Iterable$() {
  this.scg_GenTraversableFactory__f_ReusableCBFInstance = null;
  $ct_scg_GenTraversableFactory__(this)
}
$c_sci_Iterable$.prototype = new $h_scg_GenTraversableFactory();
$c_sci_Iterable$.prototype.constructor = $c_sci_Iterable$;
/** @constructor */
function $h_sci_Iterable$() {
  /*<skip>*/
}
$h_sci_Iterable$.prototype = $c_sci_Iterable$.prototype;
$c_sci_Iterable$.prototype.newBuilder__scm_Builder = (function() {
  return new $c_scm_ListBuffer()
});
var $d_sci_Iterable$ = new $TypeData().initClass({
  sci_Iterable$: 0
}, false, "scala.collection.immutable.Iterable$", {
  sci_Iterable$: 1,
  scg_GenTraversableFactory: 1,
  scg_GenericCompanion: 1,
  O: 1,
  scg_TraversableFactory: 1,
  scg_GenericSeqCompanion: 1
});
$c_sci_Iterable$.prototype.$classData = $d_sci_Iterable$;
var $n_sci_Iterable$;
function $m_sci_Iterable$() {
  if ((!$n_sci_Iterable$)) {
    $n_sci_Iterable$ = new $c_sci_Iterable$()
  };
  return $n_sci_Iterable$
}
function $p_sci_Map$MapBuilderImpl__convertToHashMapBuilder__V($thiz) {
  $thiz.sci_Map$MapBuilderImpl__f_switchedToHashMapBuilder = true;
  if (($thiz.sci_Map$MapBuilderImpl__f_hashMapBuilder === null)) {
    $thiz.sci_Map$MapBuilderImpl__f_hashMapBuilder = new $c_sci_HashMap$HashMapBuilder()
  };
  $thiz.sci_Map$MapBuilderImpl__f_hashMapBuilder.$plus$plus$eq__sc_TraversableOnce__sci_HashMap$HashMapBuilder($thiz.sci_Map$MapBuilderImpl__f_elems)
}
/** @constructor */
function $c_sci_Map$MapBuilderImpl() {
  this.sci_Map$MapBuilderImpl__f_elems = null;
  this.sci_Map$MapBuilderImpl__f_switchedToHashMapBuilder = false;
  this.sci_Map$MapBuilderImpl__f_hashMapBuilder = null;
  this.sci_Map$MapBuilderImpl__f_elems = ($m_sci_Map$(), $m_sci_Map$EmptyMap$());
  this.sci_Map$MapBuilderImpl__f_switchedToHashMapBuilder = false
}
$c_sci_Map$MapBuilderImpl.prototype = new $h_O();
$c_sci_Map$MapBuilderImpl.prototype.constructor = $c_sci_Map$MapBuilderImpl;
/** @constructor */
function $h_sci_Map$MapBuilderImpl() {
  /*<skip>*/
}
$h_sci_Map$MapBuilderImpl.prototype = $c_sci_Map$MapBuilderImpl.prototype;
$c_sci_Map$MapBuilderImpl.prototype.sizeHint__I__V = (function(size) {
  /*<skip>*/
});
$c_sci_Map$MapBuilderImpl.prototype.sizeHintBounded__I__sc_TraversableLike__V = (function(size, boundingColl) {
  $f_scm_Builder__sizeHintBounded__I__sc_TraversableLike__V(this, size, boundingColl)
});
$c_sci_Map$MapBuilderImpl.prototype.result__sci_Map = (function() {
  return (this.sci_Map$MapBuilderImpl__f_switchedToHashMapBuilder ? this.sci_Map$MapBuilderImpl__f_hashMapBuilder.result__sci_HashMap() : this.sci_Map$MapBuilderImpl__f_elems)
});
$c_sci_Map$MapBuilderImpl.prototype.$plus$eq__T2__sci_Map$MapBuilderImpl = (function(elem) {
  if (this.sci_Map$MapBuilderImpl__f_switchedToHashMapBuilder) {
    this.sci_Map$MapBuilderImpl__f_hashMapBuilder.$plus$eq__T2__sci_HashMap$HashMapBuilder(elem)
  } else if ((this.sci_Map$MapBuilderImpl__f_elems.size__I() < 4)) {
    this.sci_Map$MapBuilderImpl__f_elems = this.sci_Map$MapBuilderImpl__f_elems.$plus__T2__sci_Map(elem)
  } else {
    var key = elem.T2__f__1;
    var newValue = elem.T2__f__2;
    var x1 = this.sci_Map$MapBuilderImpl__f_elems.getOrElse__O__F0__O(key, new $c_sjsr_AnonFunction0((() => $m_sci_Map$().sci_Map$__f_scala$collection$immutable$Map$$Sentinel)));
    if ($m_sr_BoxesRunTime$().equals__O__O__Z($m_sci_Map$().sci_Map$__f_scala$collection$immutable$Map$$Sentinel, x1)) {
      $p_sci_Map$MapBuilderImpl__convertToHashMapBuilder__V(this);
      this.sci_Map$MapBuilderImpl__f_hashMapBuilder.$plus$eq__T2__sci_HashMap$HashMapBuilder(elem)
    } else if ((!Object.is(x1, newValue))) {
      this.sci_Map$MapBuilderImpl__f_elems = this.sci_Map$MapBuilderImpl__f_elems.$plus__T2__sci_Map(elem)
    }
  };
  return this
});
$c_sci_Map$MapBuilderImpl.prototype.$plus$plus$eq__sc_TraversableOnce__sci_Map$MapBuilderImpl = (function(xs) {
  matchEnd4: {
    if (this.sci_Map$MapBuilderImpl__f_switchedToHashMapBuilder) {
      this.sci_Map$MapBuilderImpl__f_hashMapBuilder.$plus$plus$eq__sc_TraversableOnce__sci_HashMap$HashMapBuilder(xs);
      break matchEnd4
    };
    if ($is_sc_Map(xs)) {
      var x2 = $as_sc_Map(xs);
      if ((x2.size__I() > 4)) {
        $p_sci_Map$MapBuilderImpl__convertToHashMapBuilder__V(this);
        this.sci_Map$MapBuilderImpl__f_hashMapBuilder.$plus$plus$eq__sc_TraversableOnce__sci_HashMap$HashMapBuilder(x2);
        break matchEnd4
      }
    };
    $as_scm_ReusableBuilder($f_scg_Growable__$plus$plus$eq__sc_TraversableOnce__scg_Growable(this, xs))
  };
  return this
});
$c_sci_Map$MapBuilderImpl.prototype.$plus$plus$eq__sc_TraversableOnce__scg_Growable = (function(xs) {
  return this.$plus$plus$eq__sc_TraversableOnce__sci_Map$MapBuilderImpl(xs)
});
$c_sci_Map$MapBuilderImpl.prototype.$plus$eq__O__scg_Growable = (function(elem) {
  return this.$plus$eq__T2__sci_Map$MapBuilderImpl($as_T2(elem))
});
$c_sci_Map$MapBuilderImpl.prototype.$plus$eq__O__scm_Builder = (function(elem) {
  return this.$plus$eq__T2__sci_Map$MapBuilderImpl($as_T2(elem))
});
$c_sci_Map$MapBuilderImpl.prototype.result__O = (function() {
  return this.result__sci_Map()
});
var $d_sci_Map$MapBuilderImpl = new $TypeData().initClass({
  sci_Map$MapBuilderImpl: 0
}, false, "scala.collection.immutable.Map$MapBuilderImpl", {
  sci_Map$MapBuilderImpl: 1,
  O: 1,
  scm_ReusableBuilder: 1,
  scm_Builder: 1,
  scg_Growable: 1,
  scg_Clearable: 1
});
$c_sci_Map$MapBuilderImpl.prototype.$classData = $d_sci_Map$MapBuilderImpl;
function $p_sci_Set$SetBuilderImpl__convertToHashSetBuilder__V($thiz) {
  $thiz.sci_Set$SetBuilderImpl__f_switchedToHashSetBuilder = true;
  if (($thiz.sci_Set$SetBuilderImpl__f_hashSetBuilder === null)) {
    $thiz.sci_Set$SetBuilderImpl__f_hashSetBuilder = new $c_sci_HashSet$HashSetBuilder()
  };
  $thiz.sci_Set$SetBuilderImpl__f_hashSetBuilder.$plus$plus$eq__sc_TraversableOnce__sci_HashSet$HashSetBuilder($thiz.sci_Set$SetBuilderImpl__f_elems)
}
/** @constructor */
function $c_sci_Set$SetBuilderImpl() {
  this.sci_Set$SetBuilderImpl__f_elems = null;
  this.sci_Set$SetBuilderImpl__f_switchedToHashSetBuilder = false;
  this.sci_Set$SetBuilderImpl__f_hashSetBuilder = null;
  this.sci_Set$SetBuilderImpl__f_elems = ($m_sci_Set$(), $m_sci_Set$EmptySet$());
  this.sci_Set$SetBuilderImpl__f_switchedToHashSetBuilder = false
}
$c_sci_Set$SetBuilderImpl.prototype = new $h_O();
$c_sci_Set$SetBuilderImpl.prototype.constructor = $c_sci_Set$SetBuilderImpl;
/** @constructor */
function $h_sci_Set$SetBuilderImpl() {
  /*<skip>*/
}
$h_sci_Set$SetBuilderImpl.prototype = $c_sci_Set$SetBuilderImpl.prototype;
$c_sci_Set$SetBuilderImpl.prototype.sizeHint__I__V = (function(size) {
  /*<skip>*/
});
$c_sci_Set$SetBuilderImpl.prototype.sizeHintBounded__I__sc_TraversableLike__V = (function(size, boundingColl) {
  $f_scm_Builder__sizeHintBounded__I__sc_TraversableLike__V(this, size, boundingColl)
});
$c_sci_Set$SetBuilderImpl.prototype.result__sci_Set = (function() {
  return (this.sci_Set$SetBuilderImpl__f_switchedToHashSetBuilder ? this.sci_Set$SetBuilderImpl__f_hashSetBuilder.result__sci_HashSet() : this.sci_Set$SetBuilderImpl__f_elems)
});
$c_sci_Set$SetBuilderImpl.prototype.$plus$eq__O__sci_Set$SetBuilderImpl = (function(elem) {
  if (this.sci_Set$SetBuilderImpl__f_switchedToHashSetBuilder) {
    this.sci_Set$SetBuilderImpl__f_hashSetBuilder.$plus$eq__O__sci_HashSet$HashSetBuilder(elem)
  } else if ((this.sci_Set$SetBuilderImpl__f_elems.size__I() < 4)) {
    this.sci_Set$SetBuilderImpl__f_elems = $as_sci_Set(this.sci_Set$SetBuilderImpl__f_elems.$plus__O__sc_Set(elem))
  } else if ((!this.sci_Set$SetBuilderImpl__f_elems.contains__O__Z(elem))) {
    $p_sci_Set$SetBuilderImpl__convertToHashSetBuilder__V(this);
    this.sci_Set$SetBuilderImpl__f_hashSetBuilder.$plus$eq__O__sci_HashSet$HashSetBuilder(elem)
  };
  return this
});
$c_sci_Set$SetBuilderImpl.prototype.$plus$plus$eq__sc_TraversableOnce__sci_Set$SetBuilderImpl = (function(xs) {
  matchEnd4: {
    if (this.sci_Set$SetBuilderImpl__f_switchedToHashSetBuilder) {
      this.sci_Set$SetBuilderImpl__f_hashSetBuilder.$plus$plus$eq__sc_TraversableOnce__sci_HashSet$HashSetBuilder(xs);
      break matchEnd4
    };
    if ($is_sc_Set(xs)) {
      var x2 = $as_sc_Set(xs);
      if ((x2.size__I() > 4)) {
        $p_sci_Set$SetBuilderImpl__convertToHashSetBuilder__V(this);
        this.sci_Set$SetBuilderImpl__f_hashSetBuilder.$plus$plus$eq__sc_TraversableOnce__sci_HashSet$HashSetBuilder(x2);
        break matchEnd4
      }
    };
    $as_scm_ReusableBuilder($f_scg_Growable__$plus$plus$eq__sc_TraversableOnce__scg_Growable(this, xs))
  };
  return this
});
$c_sci_Set$SetBuilderImpl.prototype.$plus$plus$eq__sc_TraversableOnce__scg_Growable = (function(xs) {
  return this.$plus$plus$eq__sc_TraversableOnce__sci_Set$SetBuilderImpl(xs)
});
$c_sci_Set$SetBuilderImpl.prototype.$plus$eq__O__scg_Growable = (function(elem) {
  return this.$plus$eq__O__sci_Set$SetBuilderImpl(elem)
});
$c_sci_Set$SetBuilderImpl.prototype.$plus$eq__O__scm_Builder = (function(elem) {
  return this.$plus$eq__O__sci_Set$SetBuilderImpl(elem)
});
$c_sci_Set$SetBuilderImpl.prototype.result__O = (function() {
  return this.result__sci_Set()
});
var $d_sci_Set$SetBuilderImpl = new $TypeData().initClass({
  sci_Set$SetBuilderImpl: 0
}, false, "scala.collection.immutable.Set$SetBuilderImpl", {
  sci_Set$SetBuilderImpl: 1,
  O: 1,
  scm_ReusableBuilder: 1,
  scm_Builder: 1,
  scg_Growable: 1,
  scg_Clearable: 1
});
$c_sci_Set$SetBuilderImpl.prototype.$classData = $d_sci_Set$SetBuilderImpl;
/** @constructor */
function $c_sci_StreamIterator(self) {
  this.sci_StreamIterator__f_these = null;
  this.sci_StreamIterator__f_these = new $c_sci_StreamIterator$LazyCell(this, new $c_sjsr_AnonFunction0((() => self)))
}
$c_sci_StreamIterator.prototype = new $h_sc_AbstractIterator();
$c_sci_StreamIterator.prototype.constructor = $c_sci_StreamIterator;
/** @constructor */
function $h_sci_StreamIterator() {
  /*<skip>*/
}
$h_sci_StreamIterator.prototype = $c_sci_StreamIterator.prototype;
$c_sci_StreamIterator.prototype.hasNext__Z = (function() {
  var this$1 = this.sci_StreamIterator__f_these.v__sci_Stream();
  return (!this$1.isEmpty__Z())
});
$c_sci_StreamIterator.prototype.next__O = (function() {
  if ((!this.hasNext__Z())) {
    return $m_sc_Iterator$().sc_Iterator$__f_empty.next__O()
  } else {
    var cur = this.sci_StreamIterator__f_these.v__sci_Stream();
    var result = cur.head__O();
    this.sci_StreamIterator__f_these = new $c_sci_StreamIterator$LazyCell(this, new $c_sjsr_AnonFunction0((() => $as_sci_Stream(cur.tail__O()))));
    return result
  }
});
$c_sci_StreamIterator.prototype.toStream__sci_Stream = (function() {
  var result = this.sci_StreamIterator__f_these.v__sci_Stream();
  this.sci_StreamIterator__f_these = new $c_sci_StreamIterator$LazyCell(this, new $c_sjsr_AnonFunction0((() => {
    $m_sci_Stream$();
    return $m_sci_Stream$Empty$()
  })));
  return result
});
$c_sci_StreamIterator.prototype.toList__sci_List = (function() {
  var this$1 = this.toStream__sci_Stream();
  var this$2 = $m_sci_List$();
  var cbf = this$2.scg_GenTraversableFactory__f_ReusableCBFInstance;
  return $as_sci_List($f_sc_TraversableLike__to__scg_CanBuildFrom__O(this$1, cbf))
});
var $d_sci_StreamIterator = new $TypeData().initClass({
  sci_StreamIterator: 0
}, false, "scala.collection.immutable.StreamIterator", {
  sci_StreamIterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1
});
$c_sci_StreamIterator.prototype.$classData = $d_sci_StreamIterator;
/** @constructor */
function $c_sci_Traversable$() {
  this.scg_GenTraversableFactory__f_ReusableCBFInstance = null;
  $ct_scg_GenTraversableFactory__(this)
}
$c_sci_Traversable$.prototype = new $h_scg_GenTraversableFactory();
$c_sci_Traversable$.prototype.constructor = $c_sci_Traversable$;
/** @constructor */
function $h_sci_Traversable$() {
  /*<skip>*/
}
$h_sci_Traversable$.prototype = $c_sci_Traversable$.prototype;
$c_sci_Traversable$.prototype.newBuilder__scm_Builder = (function() {
  return new $c_scm_ListBuffer()
});
var $d_sci_Traversable$ = new $TypeData().initClass({
  sci_Traversable$: 0
}, false, "scala.collection.immutable.Traversable$", {
  sci_Traversable$: 1,
  scg_GenTraversableFactory: 1,
  scg_GenericCompanion: 1,
  O: 1,
  scg_TraversableFactory: 1,
  scg_GenericSeqCompanion: 1
});
$c_sci_Traversable$.prototype.$classData = $d_sci_Traversable$;
var $n_sci_Traversable$;
function $m_sci_Traversable$() {
  if ((!$n_sci_Traversable$)) {
    $n_sci_Traversable$ = new $c_sci_Traversable$()
  };
  return $n_sci_Traversable$
}
function $p_sci_TrieIterator__getElems__sci_Iterable__Asci_Iterable($thiz, x) {
  if ((x instanceof $c_sci_HashMap$HashTrieMap)) {
    var x2 = $as_sci_HashMap$HashTrieMap(x);
    var $$x1 = x2.sci_HashMap$HashTrieMap__f_elems0
  } else {
    if ((!(x instanceof $c_sci_HashSet$HashTrieSet))) {
      throw new $c_s_MatchError(x)
    };
    var x3 = $as_sci_HashSet$HashTrieSet(x);
    var $$x1 = x3.sci_HashSet$HashTrieSet__f_elems
  };
  return $asArrayOf_sci_Iterable($$x1, 1)
}
function $p_sci_TrieIterator__isTrie__O__Z($thiz, x) {
  return ((x instanceof $c_sci_HashMap$HashTrieMap) || (x instanceof $c_sci_HashSet$HashTrieSet))
}
function $p_sci_TrieIterator__isContainer__O__Z($thiz, x) {
  return ((x instanceof $c_sci_HashMap$HashMap1) || (x instanceof $c_sci_HashSet$HashSet1))
}
function $p_sci_TrieIterator__next0__Asci_Iterable__I__O($thiz, elems, i) {
  while (true) {
    if ((i === (((-1) + elems.u.length) | 0))) {
      $thiz.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$depth = (((-1) + $thiz.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$depth) | 0);
      if (($thiz.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$depth >= 0)) {
        $thiz.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$arrayD = $thiz.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$arrayStack.get($thiz.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$depth);
        $thiz.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$posD = $thiz.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$posStack.get($thiz.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$depth);
        $thiz.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$arrayStack.set($thiz.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$depth, null)
      } else {
        $thiz.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$arrayD = null;
        $thiz.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$posD = 0
      }
    } else {
      $thiz.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$posD = ((1 + $thiz.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$posD) | 0)
    };
    var m = elems.get(i);
    if ($p_sci_TrieIterator__isContainer__O__Z($thiz, m)) {
      return $thiz.getElem__O__O(m)
    } else if ($p_sci_TrieIterator__isTrie__O__Z($thiz, m)) {
      if (($thiz.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$depth >= 0)) {
        $thiz.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$arrayStack.set($thiz.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$depth, $thiz.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$arrayD);
        $thiz.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$posStack.set($thiz.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$depth, $thiz.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$posD)
      };
      $thiz.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$depth = ((1 + $thiz.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$depth) | 0);
      $thiz.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$arrayD = $p_sci_TrieIterator__getElems__sci_Iterable__Asci_Iterable($thiz, m);
      $thiz.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$posD = 0;
      var temp$elems = $p_sci_TrieIterator__getElems__sci_Iterable__Asci_Iterable($thiz, m);
      elems = temp$elems;
      i = 0
    } else {
      $thiz.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$subIter = m.iterator__sc_Iterator();
      return $thiz.next__O()
    }
  }
}
function $ct_sci_TrieIterator__Asci_Iterable__($thiz, elems) {
  $thiz.sci_TrieIterator__f_elems = elems;
  $thiz.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$depth = 0;
  $thiz.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$arrayStack = $thiz.initArrayStack__AAsci_Iterable();
  $thiz.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$posStack = $thiz.initPosStack__AI();
  $thiz.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$arrayD = $thiz.sci_TrieIterator__f_elems;
  $thiz.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$posD = 0;
  $thiz.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$subIter = null;
  return $thiz
}
/** @constructor */
function $c_sci_TrieIterator() {
  this.sci_TrieIterator__f_elems = null;
  this.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$depth = 0;
  this.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$arrayStack = null;
  this.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$posStack = null;
  this.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$arrayD = null;
  this.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$posD = 0;
  this.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$subIter = null
}
$c_sci_TrieIterator.prototype = new $h_sc_AbstractIterator();
$c_sci_TrieIterator.prototype.constructor = $c_sci_TrieIterator;
/** @constructor */
function $h_sci_TrieIterator() {
  /*<skip>*/
}
$h_sci_TrieIterator.prototype = $c_sci_TrieIterator.prototype;
$c_sci_TrieIterator.prototype.initArrayStack__AAsci_Iterable = (function() {
  return new ($d_sci_Iterable.getArrayOf().getArrayOf().constr)(6)
});
$c_sci_TrieIterator.prototype.initPosStack__AI = (function() {
  return new $ac_I(6)
});
$c_sci_TrieIterator.prototype.hasNext__Z = (function() {
  return ((this.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$subIter !== null) || (this.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$depth >= 0))
});
$c_sci_TrieIterator.prototype.next__O = (function() {
  if ((this.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$subIter !== null)) {
    var el = this.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$subIter.next__O();
    if ((!this.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$subIter.hasNext__Z())) {
      this.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$subIter = null
    };
    return el
  } else {
    return $p_sci_TrieIterator__next0__Asci_Iterable__I__O(this, this.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$arrayD, this.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$posD)
  }
});
/** @constructor */
function $c_sci_Vector$$anon$1(outer) {
  this.sci_Vector$$anon$1__f_i = 0;
  this.sci_Vector$$anon$1__f_$outer = null;
  if ((outer === null)) {
    throw null
  } else {
    this.sci_Vector$$anon$1__f_$outer = outer
  };
  this.sci_Vector$$anon$1__f_i = outer.length__I()
}
$c_sci_Vector$$anon$1.prototype = new $h_sc_AbstractIterator();
$c_sci_Vector$$anon$1.prototype.constructor = $c_sci_Vector$$anon$1;
/** @constructor */
function $h_sci_Vector$$anon$1() {
  /*<skip>*/
}
$h_sci_Vector$$anon$1.prototype = $c_sci_Vector$$anon$1.prototype;
$c_sci_Vector$$anon$1.prototype.hasNext__Z = (function() {
  return (this.sci_Vector$$anon$1__f_i > 0)
});
$c_sci_Vector$$anon$1.prototype.next__O = (function() {
  if ((this.sci_Vector$$anon$1__f_i > 0)) {
    this.sci_Vector$$anon$1__f_i = (((-1) + this.sci_Vector$$anon$1__f_i) | 0);
    return this.sci_Vector$$anon$1__f_$outer.apply__I__O(this.sci_Vector$$anon$1__f_i)
  } else {
    return $m_sc_Iterator$().sc_Iterator$__f_empty.next__O()
  }
});
var $d_sci_Vector$$anon$1 = new $TypeData().initClass({
  sci_Vector$$anon$1: 0
}, false, "scala.collection.immutable.Vector$$anon$1", {
  sci_Vector$$anon$1: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1
});
$c_sci_Vector$$anon$1.prototype.$classData = $d_sci_Vector$$anon$1;
/** @constructor */
function $c_scm_Builder$$anon$1(outer, f$1) {
  this.scm_Builder$$anon$1__f_self = null;
  this.scm_Builder$$anon$1__f_f$1 = null;
  this.scm_Builder$$anon$1__f_f$1 = f$1;
  this.scm_Builder$$anon$1__f_self = outer
}
$c_scm_Builder$$anon$1.prototype = new $h_O();
$c_scm_Builder$$anon$1.prototype.constructor = $c_scm_Builder$$anon$1;
/** @constructor */
function $h_scm_Builder$$anon$1() {
  /*<skip>*/
}
$h_scm_Builder$$anon$1.prototype = $c_scm_Builder$$anon$1.prototype;
$c_scm_Builder$$anon$1.prototype.hashCode__I = (function() {
  return this.scm_Builder$$anon$1__f_self.hashCode__I()
});
$c_scm_Builder$$anon$1.prototype.equals__O__Z = (function(that) {
  return $f_s_Proxy__equals__O__Z(this, that)
});
$c_scm_Builder$$anon$1.prototype.toString__T = (function() {
  return $f_s_Proxy__toString__T(this)
});
$c_scm_Builder$$anon$1.prototype.$plus$eq__O__scm_Builder$$anon$1 = (function(x) {
  this.scm_Builder$$anon$1__f_self.$plus$eq__O__scm_Builder(x);
  return this
});
$c_scm_Builder$$anon$1.prototype.$plus$plus$eq__sc_TraversableOnce__scm_Builder$$anon$1 = (function(xs) {
  this.scm_Builder$$anon$1__f_self.$plus$plus$eq__sc_TraversableOnce__scg_Growable(xs);
  return this
});
$c_scm_Builder$$anon$1.prototype.sizeHint__I__V = (function(size) {
  this.scm_Builder$$anon$1__f_self.sizeHint__I__V(size)
});
$c_scm_Builder$$anon$1.prototype.sizeHintBounded__I__sc_TraversableLike__V = (function(size, boundColl) {
  this.scm_Builder$$anon$1__f_self.sizeHintBounded__I__sc_TraversableLike__V(size, boundColl)
});
$c_scm_Builder$$anon$1.prototype.result__O = (function() {
  return this.scm_Builder$$anon$1__f_f$1.apply__O__O(this.scm_Builder$$anon$1__f_self.result__O())
});
$c_scm_Builder$$anon$1.prototype.$plus$plus$eq__sc_TraversableOnce__scg_Growable = (function(xs) {
  return this.$plus$plus$eq__sc_TraversableOnce__scm_Builder$$anon$1(xs)
});
$c_scm_Builder$$anon$1.prototype.$plus$eq__O__scg_Growable = (function(elem) {
  return this.$plus$eq__O__scm_Builder$$anon$1(elem)
});
$c_scm_Builder$$anon$1.prototype.$plus$eq__O__scm_Builder = (function(elem) {
  return this.$plus$eq__O__scm_Builder$$anon$1(elem)
});
var $d_scm_Builder$$anon$1 = new $TypeData().initClass({
  scm_Builder$$anon$1: 0
}, false, "scala.collection.mutable.Builder$$anon$1", {
  scm_Builder$$anon$1: 1,
  O: 1,
  scm_Builder: 1,
  scg_Growable: 1,
  scg_Clearable: 1,
  s_Proxy: 1
});
$c_scm_Builder$$anon$1.prototype.$classData = $d_scm_Builder$$anon$1;
function $ct_scm_LazyBuilder__($thiz) {
  $thiz.scm_LazyBuilder__f_parts = new $c_scm_ListBuffer();
  return $thiz
}
/** @constructor */
function $c_scm_LazyBuilder() {
  this.scm_LazyBuilder__f_parts = null
}
$c_scm_LazyBuilder.prototype = new $h_O();
$c_scm_LazyBuilder.prototype.constructor = $c_scm_LazyBuilder;
/** @constructor */
function $h_scm_LazyBuilder() {
  /*<skip>*/
}
$h_scm_LazyBuilder.prototype = $c_scm_LazyBuilder.prototype;
$c_scm_LazyBuilder.prototype.sizeHint__I__V = (function(size) {
  /*<skip>*/
});
$c_scm_LazyBuilder.prototype.sizeHintBounded__I__sc_TraversableLike__V = (function(size, boundingColl) {
  $f_scm_Builder__sizeHintBounded__I__sc_TraversableLike__V(this, size, boundingColl)
});
$c_scm_LazyBuilder.prototype.$plus$eq__O__scm_LazyBuilder = (function(x) {
  var $$x1 = this.scm_LazyBuilder__f_parts;
  $m_sci_List$();
  var array = [x];
  var i = (((-1) + $uI(array.length)) | 0);
  var result = $m_sci_Nil$();
  while ((i >= 0)) {
    var this$4 = result;
    var index = i;
    var x$1 = array[index];
    result = new $c_sci_$colon$colon(x$1, this$4);
    i = (((-1) + i) | 0)
  };
  $$x1.$plus$eq__O__scm_ListBuffer(result);
  return this
});
$c_scm_LazyBuilder.prototype.$plus$plus$eq__sc_TraversableOnce__scm_LazyBuilder = (function(xs) {
  this.scm_LazyBuilder__f_parts.$plus$eq__O__scm_ListBuffer(xs);
  return this
});
$c_scm_LazyBuilder.prototype.$plus$plus$eq__sc_TraversableOnce__scg_Growable = (function(xs) {
  return this.$plus$plus$eq__sc_TraversableOnce__scm_LazyBuilder(xs)
});
$c_scm_LazyBuilder.prototype.$plus$eq__O__scg_Growable = (function(elem) {
  return this.$plus$eq__O__scm_LazyBuilder(elem)
});
$c_scm_LazyBuilder.prototype.$plus$eq__O__scm_Builder = (function(elem) {
  return this.$plus$eq__O__scm_LazyBuilder(elem)
});
/** @constructor */
function $c_scm_ListBuffer$$anon$1(outer) {
  this.scm_ListBuffer$$anon$1__f_cursor = null;
  this.scm_ListBuffer$$anon$1__f_cursor = (outer.isEmpty__Z() ? $m_sci_Nil$() : outer.scm_ListBuffer__f_scala$collection$mutable$ListBuffer$$start)
}
$c_scm_ListBuffer$$anon$1.prototype = new $h_sc_AbstractIterator();
$c_scm_ListBuffer$$anon$1.prototype.constructor = $c_scm_ListBuffer$$anon$1;
/** @constructor */
function $h_scm_ListBuffer$$anon$1() {
  /*<skip>*/
}
$h_scm_ListBuffer$$anon$1.prototype = $c_scm_ListBuffer$$anon$1.prototype;
$c_scm_ListBuffer$$anon$1.prototype.hasNext__Z = (function() {
  return (this.scm_ListBuffer$$anon$1__f_cursor !== $m_sci_Nil$())
});
$c_scm_ListBuffer$$anon$1.prototype.next__O = (function() {
  if ((!this.hasNext__Z())) {
    throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), "next on empty Iterator")
  } else {
    var ans = this.scm_ListBuffer$$anon$1__f_cursor.head__O();
    this.scm_ListBuffer$$anon$1__f_cursor = $as_sci_List(this.scm_ListBuffer$$anon$1__f_cursor.tail__O());
    return ans
  }
});
var $d_scm_ListBuffer$$anon$1 = new $TypeData().initClass({
  scm_ListBuffer$$anon$1: 0
}, false, "scala.collection.mutable.ListBuffer$$anon$1", {
  scm_ListBuffer$$anon$1: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1
});
$c_scm_ListBuffer$$anon$1.prototype.$classData = $d_scm_ListBuffer$$anon$1;
/** @constructor */
function $c_scm_MapBuilder(empty) {
  this.scm_MapBuilder__f_elems = null;
  this.scm_MapBuilder__f_elems = empty
}
$c_scm_MapBuilder.prototype = new $h_O();
$c_scm_MapBuilder.prototype.constructor = $c_scm_MapBuilder;
/** @constructor */
function $h_scm_MapBuilder() {
  /*<skip>*/
}
$h_scm_MapBuilder.prototype = $c_scm_MapBuilder.prototype;
$c_scm_MapBuilder.prototype.sizeHint__I__V = (function(size) {
  /*<skip>*/
});
$c_scm_MapBuilder.prototype.sizeHintBounded__I__sc_TraversableLike__V = (function(size, boundingColl) {
  $f_scm_Builder__sizeHintBounded__I__sc_TraversableLike__V(this, size, boundingColl)
});
$c_scm_MapBuilder.prototype.$plus$plus$eq__sc_TraversableOnce__scg_Growable = (function(xs) {
  return $f_scg_Growable__$plus$plus$eq__sc_TraversableOnce__scg_Growable(this, xs)
});
$c_scm_MapBuilder.prototype.$plus$eq__T2__scm_MapBuilder = (function(x) {
  this.scm_MapBuilder__f_elems = this.scm_MapBuilder__f_elems.$plus__T2__sc_GenMap(x);
  return this
});
$c_scm_MapBuilder.prototype.result__O = (function() {
  return this.scm_MapBuilder__f_elems
});
$c_scm_MapBuilder.prototype.$plus$eq__O__scg_Growable = (function(elem) {
  return this.$plus$eq__T2__scm_MapBuilder($as_T2(elem))
});
$c_scm_MapBuilder.prototype.$plus$eq__O__scm_Builder = (function(elem) {
  return this.$plus$eq__T2__scm_MapBuilder($as_T2(elem))
});
var $d_scm_MapBuilder = new $TypeData().initClass({
  scm_MapBuilder: 0
}, false, "scala.collection.mutable.MapBuilder", {
  scm_MapBuilder: 1,
  O: 1,
  scm_ReusableBuilder: 1,
  scm_Builder: 1,
  scg_Growable: 1,
  scg_Clearable: 1
});
$c_scm_MapBuilder.prototype.$classData = $d_scm_MapBuilder;
/** @constructor */
function $c_scm_SetBuilder(empty) {
  this.scm_SetBuilder__f_elems = null;
  this.scm_SetBuilder__f_elems = empty
}
$c_scm_SetBuilder.prototype = new $h_O();
$c_scm_SetBuilder.prototype.constructor = $c_scm_SetBuilder;
/** @constructor */
function $h_scm_SetBuilder() {
  /*<skip>*/
}
$h_scm_SetBuilder.prototype = $c_scm_SetBuilder.prototype;
$c_scm_SetBuilder.prototype.sizeHint__I__V = (function(size) {
  /*<skip>*/
});
$c_scm_SetBuilder.prototype.sizeHintBounded__I__sc_TraversableLike__V = (function(size, boundingColl) {
  $f_scm_Builder__sizeHintBounded__I__sc_TraversableLike__V(this, size, boundingColl)
});
$c_scm_SetBuilder.prototype.$plus$plus$eq__sc_TraversableOnce__scg_Growable = (function(xs) {
  return $f_scg_Growable__$plus$plus$eq__sc_TraversableOnce__scg_Growable(this, xs)
});
$c_scm_SetBuilder.prototype.$plus$eq__O__scm_SetBuilder = (function(x) {
  this.scm_SetBuilder__f_elems = this.scm_SetBuilder__f_elems.$plus__O__sc_Set(x);
  return this
});
$c_scm_SetBuilder.prototype.result__O = (function() {
  return this.scm_SetBuilder__f_elems
});
$c_scm_SetBuilder.prototype.$plus$eq__O__scg_Growable = (function(elem) {
  return this.$plus$eq__O__scm_SetBuilder(elem)
});
$c_scm_SetBuilder.prototype.$plus$eq__O__scm_Builder = (function(elem) {
  return this.$plus$eq__O__scm_SetBuilder(elem)
});
var $d_scm_SetBuilder = new $TypeData().initClass({
  scm_SetBuilder: 0
}, false, "scala.collection.mutable.SetBuilder", {
  scm_SetBuilder: 1,
  O: 1,
  scm_ReusableBuilder: 1,
  scm_Builder: 1,
  scg_Growable: 1,
  scg_Clearable: 1
});
$c_scm_SetBuilder.prototype.$classData = $d_scm_SetBuilder;
/** @constructor */
function $c_sr_ScalaRunTime$$anon$1(x$2) {
  this.sr_ScalaRunTime$$anon$1__f_c = 0;
  this.sr_ScalaRunTime$$anon$1__f_cmax = 0;
  this.sr_ScalaRunTime$$anon$1__f_x$2 = null;
  this.sr_ScalaRunTime$$anon$1__f_x$2 = x$2;
  this.sr_ScalaRunTime$$anon$1__f_c = 0;
  this.sr_ScalaRunTime$$anon$1__f_cmax = x$2.productArity__I()
}
$c_sr_ScalaRunTime$$anon$1.prototype = new $h_sc_AbstractIterator();
$c_sr_ScalaRunTime$$anon$1.prototype.constructor = $c_sr_ScalaRunTime$$anon$1;
/** @constructor */
function $h_sr_ScalaRunTime$$anon$1() {
  /*<skip>*/
}
$h_sr_ScalaRunTime$$anon$1.prototype = $c_sr_ScalaRunTime$$anon$1.prototype;
$c_sr_ScalaRunTime$$anon$1.prototype.hasNext__Z = (function() {
  return (this.sr_ScalaRunTime$$anon$1__f_c < this.sr_ScalaRunTime$$anon$1__f_cmax)
});
$c_sr_ScalaRunTime$$anon$1.prototype.next__O = (function() {
  var result = this.sr_ScalaRunTime$$anon$1__f_x$2.productElement__I__O(this.sr_ScalaRunTime$$anon$1__f_c);
  this.sr_ScalaRunTime$$anon$1__f_c = ((1 + this.sr_ScalaRunTime$$anon$1__f_c) | 0);
  return result
});
var $d_sr_ScalaRunTime$$anon$1 = new $TypeData().initClass({
  sr_ScalaRunTime$$anon$1: 0
}, false, "scala.runtime.ScalaRunTime$$anon$1", {
  sr_ScalaRunTime$$anon$1: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1
});
$c_sr_ScalaRunTime$$anon$1.prototype.$classData = $d_sr_ScalaRunTime$$anon$1;
class $c_s_util_control_BreakControl extends $c_jl_Throwable {
  constructor() {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true)
  };
  fillInStackTrace__jl_Throwable() {
    return $f_s_util_control_NoStackTrace__fillInStackTrace__jl_Throwable(this)
  };
}
var $d_s_util_control_BreakControl = new $TypeData().initClass({
  s_util_control_BreakControl: 0
}, false, "scala.util.control.BreakControl", {
  s_util_control_BreakControl: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  s_util_control_ControlThrowable: 1,
  s_util_control_NoStackTrace: 1
});
$c_s_util_control_BreakControl.prototype.$classData = $d_s_util_control_BreakControl;
/** @constructor */
function $c_Lcfx70_cfpl_core_BBox(a, b, h) {
  this.Lcfx70_cfpl_core_BPyramid__f_bpts = null;
  this.Lcfx70_cfpl_core_BPyramid__f_tpts = null;
  $ct_Lcfx70_cfpl_core_BPyramid__D__D__D__D__D__D__D__(this, a, b, a, b, h, 0.0, 0.0)
}
$c_Lcfx70_cfpl_core_BBox.prototype = new $h_Lcfx70_cfpl_core_BPyramid();
$c_Lcfx70_cfpl_core_BBox.prototype.constructor = $c_Lcfx70_cfpl_core_BBox;
/** @constructor */
function $h_Lcfx70_cfpl_core_BBox() {
  /*<skip>*/
}
$h_Lcfx70_cfpl_core_BBox.prototype = $c_Lcfx70_cfpl_core_BBox.prototype;
function $as_Lcfx70_cfpl_core_BBox(obj) {
  return (((obj instanceof $c_Lcfx70_cfpl_core_BBox) || (obj === null)) ? obj : $throwClassCastException(obj, "cfx70.cfpl.core.BBox"))
}
function $isArrayOf_Lcfx70_cfpl_core_BBox(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lcfx70_cfpl_core_BBox)))
}
function $asArrayOf_Lcfx70_cfpl_core_BBox(obj, depth) {
  return (($isArrayOf_Lcfx70_cfpl_core_BBox(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lcfx70.cfpl.core.BBox;", depth))
}
var $d_Lcfx70_cfpl_core_BBox = new $TypeData().initClass({
  Lcfx70_cfpl_core_BBox: 0
}, false, "cfx70.cfpl.core.BBox", {
  Lcfx70_cfpl_core_BBox: 1,
  Lcfx70_cfpl_core_BPyramid: 1,
  Lcfx70_cfpl_core_BGeometry: 1,
  O: 1,
  Lcfx70_cfpl_core_LineIntersectable: 1,
  Lcfx70_cfpl_core_WireframeHelper: 1,
  Lcfx70_cfpl_core_MoveTopBottom: 1
});
$c_Lcfx70_cfpl_core_BBox.prototype.$classData = $d_Lcfx70_cfpl_core_BBox;
/** @constructor */
function $c_Lcfx70_cfpl_core_BCylinder(d, h, dd, ang) {
  this.Lcfx70_cfpl_core_BCone__f_d1 = 0.0;
  this.Lcfx70_cfpl_core_BCone__f_d2 = 0.0;
  this.Lcfx70_cfpl_core_BCone__f_h = 0.0;
  this.Lcfx70_cfpl_core_BCone__f_dd = 0.0;
  this.Lcfx70_cfpl_core_BCone__f_bpts = null;
  this.Lcfx70_cfpl_core_BCone__f_tpts = null;
  $ct_Lcfx70_cfpl_core_BCone__D__D__D__D__D__(this, d, d, h, dd, ang)
}
$c_Lcfx70_cfpl_core_BCylinder.prototype = new $h_Lcfx70_cfpl_core_BCone();
$c_Lcfx70_cfpl_core_BCylinder.prototype.constructor = $c_Lcfx70_cfpl_core_BCylinder;
/** @constructor */
function $h_Lcfx70_cfpl_core_BCylinder() {
  /*<skip>*/
}
$h_Lcfx70_cfpl_core_BCylinder.prototype = $c_Lcfx70_cfpl_core_BCylinder.prototype;
$c_Lcfx70_cfpl_core_BCylinder.prototype.apex__Lcfx70_vecquat_Vec = (function() {
  throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Cylinder hasn't apex")
});
$c_Lcfx70_cfpl_core_BCylinder.prototype.intersect__Lcfx70_cfpl_core_Line3__s_Option = (function(l) {
  var x1 = l.intersectXYCircle__D__s_Option((this.Lcfx70_cfpl_core_BCone__f_d1 / 2.0));
  if ((x1 instanceof $c_s_Some)) {
    var x2 = $as_s_Some(x1);
    var p3 = $as_T2(x2.s_Some__f_value);
    if ((p3 !== null)) {
      var pp1 = $as_Lcfx70_vecquat_Vec(p3.T2__f__1);
      var pp2 = $as_Lcfx70_vecquat_Vec(p3.T2__f__2);
      var pb = ((l.Lcfx70_cfpl_core_Line3__f_p1.$minus__Lcfx70_vecquat_Vec__Lcfx70_vecquat_Vec(pp1).norm__D() < l.Lcfx70_cfpl_core_Line3__f_p1.$minus__Lcfx70_vecquat_Vec__Lcfx70_vecquat_Vec(pp2).norm__D()) ? pp1 : pp2);
      var cs = ($uD(pb.Lcfx70_vecquat_Vec__f_crds.apply__I__O(0)) / (this.Lcfx70_cfpl_core_BCone__f_d1 / 2.0));
      var sn = ($uD(pb.Lcfx70_vecquat_Vec__f_crds.apply__I__O(1)) / (this.Lcfx70_cfpl_core_BCone__f_d1 / 2.0));
      var array = [(this.Lcfx70_cfpl_core_BCone__f_dd + ((this.Lcfx70_cfpl_core_BCone__f_d2 / 2.0) * cs)), ((this.Lcfx70_cfpl_core_BCone__f_d2 / 2.0) * sn), this.Lcfx70_cfpl_core_BCone__f_h];
      var crds = $ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), array);
      var pt = $ct_Lcfx70_vecquat_Vec__sc_Seq__(new $c_Lcfx70_vecquat_Vec(), crds);
      var ll = new $c_Lcfx70_cfpl_core_Line3(pb, pt);
      var x1$2 = l.intersect__Lcfx70_cfpl_core_Line3__s_Option(ll);
      if ((x1$2 instanceof $c_s_Some)) {
        var x2$2 = $as_s_Some(x1$2);
        var lp = $as_Lcfx70_vecquat_Vec(x2$2.s_Some__f_value);
        return new $c_s_Some(lp)
      } else {
        var x = $m_s_None$();
        if ((x === x1$2)) {
          return $m_s_None$()
        } else {
          throw new $c_s_MatchError(x1$2)
        }
      }
    }
  };
  var x$3 = $m_s_None$();
  if ((x$3 === x1)) {
    return $m_s_None$()
  };
  throw new $c_s_MatchError(x1)
});
function $as_Lcfx70_cfpl_core_BCylinder(obj) {
  return (((obj instanceof $c_Lcfx70_cfpl_core_BCylinder) || (obj === null)) ? obj : $throwClassCastException(obj, "cfx70.cfpl.core.BCylinder"))
}
function $isArrayOf_Lcfx70_cfpl_core_BCylinder(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lcfx70_cfpl_core_BCylinder)))
}
function $asArrayOf_Lcfx70_cfpl_core_BCylinder(obj, depth) {
  return (($isArrayOf_Lcfx70_cfpl_core_BCylinder(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lcfx70.cfpl.core.BCylinder;", depth))
}
var $d_Lcfx70_cfpl_core_BCylinder = new $TypeData().initClass({
  Lcfx70_cfpl_core_BCylinder: 0
}, false, "cfx70.cfpl.core.BCylinder", {
  Lcfx70_cfpl_core_BCylinder: 1,
  Lcfx70_cfpl_core_BCone: 1,
  Lcfx70_cfpl_core_BGeometry: 1,
  O: 1,
  Lcfx70_cfpl_core_LineIntersectable: 1,
  Lcfx70_cfpl_core_WireframeHelper: 1,
  Lcfx70_cfpl_core_MoveTopBottom: 1
});
$c_Lcfx70_cfpl_core_BCylinder.prototype.$classData = $d_Lcfx70_cfpl_core_BCylinder;
class $c_jl_ArrayIndexOutOfBoundsException extends $c_jl_IndexOutOfBoundsException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true)
  };
}
var $d_jl_ArrayIndexOutOfBoundsException = new $TypeData().initClass({
  jl_ArrayIndexOutOfBoundsException: 0
}, false, "java.lang.ArrayIndexOutOfBoundsException", {
  jl_ArrayIndexOutOfBoundsException: 1,
  jl_IndexOutOfBoundsException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_ArrayIndexOutOfBoundsException.prototype.$classData = $d_jl_ArrayIndexOutOfBoundsException;
function $f_jl_Double__equals__O__Z($thiz, that) {
  return Object.is($thiz, that)
}
function $f_jl_Double__hashCode__I($thiz) {
  return $m_jl_FloatingPointBits$().numberHashCode__D__I($thiz)
}
function $f_jl_Double__toString__T($thiz) {
  return ("" + $thiz)
}
function $as_jl_Double(obj) {
  return ((((typeof obj) === "number") || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.Double"))
}
function $isArrayOf_jl_Double(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Double)))
}
function $asArrayOf_jl_Double(obj, depth) {
  return (($isArrayOf_jl_Double(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Double;", depth))
}
var $d_jl_Double = new $TypeData().initClass({
  jl_Double: 0
}, false, "java.lang.Double", {
  jl_Double: 1,
  jl_Number: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1,
  jl_constant_Constable: 1,
  jl_constant_ConstantDesc: 1
}, (void 0), (void 0), ((x) => ((typeof x) === "number")));
function $f_jl_Float__equals__O__Z($thiz, that) {
  return Object.is($thiz, that)
}
function $f_jl_Float__hashCode__I($thiz) {
  return $m_jl_FloatingPointBits$().numberHashCode__D__I($thiz)
}
function $f_jl_Float__toString__T($thiz) {
  return ("" + $thiz)
}
var $d_jl_Float = new $TypeData().initClass({
  jl_Float: 0
}, false, "java.lang.Float", {
  jl_Float: 1,
  jl_Number: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1,
  jl_constant_Constable: 1,
  jl_constant_ConstantDesc: 1
}, (void 0), (void 0), ((x) => $isFloat(x)));
function $f_jl_Integer__equals__O__Z($thiz, that) {
  return Object.is($thiz, that)
}
function $f_jl_Integer__hashCode__I($thiz) {
  return $thiz
}
function $f_jl_Integer__toString__T($thiz) {
  return ("" + $thiz)
}
function $as_jl_Integer(obj) {
  return (($isInt(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.Integer"))
}
function $isArrayOf_jl_Integer(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Integer)))
}
function $asArrayOf_jl_Integer(obj, depth) {
  return (($isArrayOf_jl_Integer(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Integer;", depth))
}
var $d_jl_Integer = new $TypeData().initClass({
  jl_Integer: 0
}, false, "java.lang.Integer", {
  jl_Integer: 1,
  jl_Number: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1,
  jl_constant_Constable: 1,
  jl_constant_ConstantDesc: 1
}, (void 0), (void 0), ((x) => $isInt(x)));
function $f_jl_Long__equals__O__Z($thiz, that) {
  if ((that instanceof $c_RTLong)) {
    var x2 = $as_jl_Long(that);
    var b = $uJ(x2);
    return (($thiz.RTLong__f_lo === b.RTLong__f_lo) && ($thiz.RTLong__f_hi === b.RTLong__f_hi))
  } else {
    return false
  }
}
function $f_jl_Long__hashCode__I($thiz) {
  var $$x1 = $thiz.RTLong__f_lo;
  var hi = $thiz.RTLong__f_hi;
  return ($$x1 ^ hi)
}
function $f_jl_Long__toString__T($thiz) {
  return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toString__I__I__T($thiz.RTLong__f_lo, $thiz.RTLong__f_hi)
}
function $as_jl_Long(obj) {
  return (((obj instanceof $c_RTLong) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.Long"))
}
function $isArrayOf_jl_Long(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Long)))
}
function $asArrayOf_jl_Long(obj, depth) {
  return (($isArrayOf_jl_Long(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Long;", depth))
}
var $d_jl_Long = new $TypeData().initClass({
  jl_Long: 0
}, false, "java.lang.Long", {
  jl_Long: 1,
  jl_Number: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1,
  jl_constant_Constable: 1,
  jl_constant_ConstantDesc: 1
}, (void 0), (void 0), ((x) => (x instanceof $c_RTLong)));
function $f_T__hashCode__I($thiz) {
  var res = 0;
  var mul = 1;
  var i = (((-1) + $thiz.length) | 0);
  while ((i >= 0)) {
    var $$x1 = res;
    var index = i;
    res = (($$x1 + Math.imul($charAt($thiz, index), mul)) | 0);
    mul = Math.imul(31, mul);
    i = (((-1) + i) | 0)
  };
  return res
}
function $f_T__equals__O__Z($thiz, that) {
  return ($thiz === that)
}
function $f_T__indexOf__I__I($thiz, ch) {
  var str = $m_jl_Character$().toString__I__T(ch);
  return $uI($thiz.indexOf(str))
}
function $f_T__toString__T($thiz) {
  return $thiz
}
function $as_T(obj) {
  return ((((typeof obj) === "string") || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.String"))
}
function $isArrayOf_T(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.T)))
}
function $asArrayOf_T(obj, depth) {
  return (($isArrayOf_T(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.String;", depth))
}
var $d_T = new $TypeData().initClass({
  T: 0
}, false, "java.lang.String", {
  T: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1,
  jl_CharSequence: 1,
  jl_constant_Constable: 1,
  jl_constant_ConstantDesc: 1
}, (void 0), (void 0), ((x) => ((typeof x) === "string")));
class $c_jl_StringIndexOutOfBoundsException extends $c_jl_IndexOutOfBoundsException {
  constructor(index) {
    super();
    var s = ("String index out of range: " + index);
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true)
  };
}
var $d_jl_StringIndexOutOfBoundsException = new $TypeData().initClass({
  jl_StringIndexOutOfBoundsException: 0
}, false, "java.lang.StringIndexOutOfBoundsException", {
  jl_StringIndexOutOfBoundsException: 1,
  jl_IndexOutOfBoundsException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_StringIndexOutOfBoundsException.prototype.$classData = $d_jl_StringIndexOutOfBoundsException;
class $c_ju_FormatterClosedException extends $c_jl_IllegalStateException {
  constructor() {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true)
  };
}
var $d_ju_FormatterClosedException = new $TypeData().initClass({
  ju_FormatterClosedException: 0
}, false, "java.util.FormatterClosedException", {
  ju_FormatterClosedException: 1,
  jl_IllegalStateException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_ju_FormatterClosedException.prototype.$classData = $d_ju_FormatterClosedException;
class $c_ju_IllegalFormatException extends $c_jl_IllegalArgumentException {
}
/** @constructor */
function $c_s_None$() {
  /*<skip>*/
}
$c_s_None$.prototype = new $h_s_Option();
$c_s_None$.prototype.constructor = $c_s_None$;
/** @constructor */
function $h_s_None$() {
  /*<skip>*/
}
$h_s_None$.prototype = $c_s_None$.prototype;
$c_s_None$.prototype.isEmpty__Z = (function() {
  return true
});
$c_s_None$.prototype.get__E = (function() {
  throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), "None.get")
});
$c_s_None$.prototype.productPrefix__T = (function() {
  return "None"
});
$c_s_None$.prototype.productArity__I = (function() {
  return 0
});
$c_s_None$.prototype.productElement__I__O = (function(x$1) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + x$1))
});
$c_s_None$.prototype.productIterator__sc_Iterator = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this)
});
$c_s_None$.prototype.hashCode__I = (function() {
  return 2433880
});
$c_s_None$.prototype.toString__T = (function() {
  return "None"
});
$c_s_None$.prototype.get__O = (function() {
  this.get__E()
});
var $d_s_None$ = new $TypeData().initClass({
  s_None$: 0
}, false, "scala.None$", {
  s_None$: 1,
  s_Option: 1,
  O: 1,
  s_Product: 1,
  s_Equals: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_s_None$.prototype.$classData = $d_s_None$;
var $n_s_None$;
function $m_s_None$() {
  if ((!$n_s_None$)) {
    $n_s_None$ = new $c_s_None$()
  };
  return $n_s_None$
}
/** @constructor */
function $c_s_Some(value) {
  this.s_Some__f_value = null;
  this.s_Some__f_value = value
}
$c_s_Some.prototype = new $h_s_Option();
$c_s_Some.prototype.constructor = $c_s_Some;
/** @constructor */
function $h_s_Some() {
  /*<skip>*/
}
$h_s_Some.prototype = $c_s_Some.prototype;
$c_s_Some.prototype.isEmpty__Z = (function() {
  return false
});
$c_s_Some.prototype.get__O = (function() {
  return this.s_Some__f_value
});
$c_s_Some.prototype.productPrefix__T = (function() {
  return "Some"
});
$c_s_Some.prototype.productArity__I = (function() {
  return 1
});
$c_s_Some.prototype.productElement__I__O = (function(x$1) {
  if ((x$1 === 0)) {
    return this.s_Some__f_value
  } else {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + x$1))
  }
});
$c_s_Some.prototype.productIterator__sc_Iterator = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this)
});
$c_s_Some.prototype.hashCode__I = (function() {
  var this$2 = $m_s_util_hashing_MurmurHash3$();
  return this$2.productHash__s_Product__I__I(this, (-889275714))
});
$c_s_Some.prototype.toString__T = (function() {
  return $m_sr_ScalaRunTime$()._toString__s_Product__T(this)
});
$c_s_Some.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else if ((x$1 instanceof $c_s_Some)) {
    var Some$1 = $as_s_Some(x$1);
    return $m_sr_BoxesRunTime$().equals__O__O__Z(this.s_Some__f_value, Some$1.s_Some__f_value)
  } else {
    return false
  }
});
function $as_s_Some(obj) {
  return (((obj instanceof $c_s_Some) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.Some"))
}
function $isArrayOf_s_Some(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_Some)))
}
function $asArrayOf_s_Some(obj, depth) {
  return (($isArrayOf_s_Some(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.Some;", depth))
}
var $d_s_Some = new $TypeData().initClass({
  s_Some: 0
}, false, "scala.Some", {
  s_Some: 1,
  s_Option: 1,
  O: 1,
  s_Product: 1,
  s_Equals: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_s_Some.prototype.$classData = $d_s_Some;
/** @constructor */
function $c_T2(_1, _2) {
  this.T2__f__1 = null;
  this.T2__f__2 = null;
  this.T2__f__1 = _1;
  this.T2__f__2 = _2
}
$c_T2.prototype = new $h_O();
$c_T2.prototype.constructor = $c_T2;
/** @constructor */
function $h_T2() {
  /*<skip>*/
}
$h_T2.prototype = $c_T2.prototype;
$c_T2.prototype.productArity__I = (function() {
  return 2
});
$c_T2.prototype.productElement__I__O = (function(n) {
  return $f_s_Product2__productElement__I__O(this, n)
});
$c_T2.prototype.toString__T = (function() {
  return (((("(" + this.T2__f__1) + ",") + this.T2__f__2) + ")")
});
$c_T2.prototype.productPrefix__T = (function() {
  return "Tuple2"
});
$c_T2.prototype.productIterator__sc_Iterator = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this)
});
$c_T2.prototype.hashCode__I = (function() {
  var this$2 = $m_s_util_hashing_MurmurHash3$();
  return this$2.productHash__s_Product__I__I(this, (-889275714))
});
$c_T2.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else if ((x$1 instanceof $c_T2)) {
    var Tuple2$1 = $as_T2(x$1);
    return ($m_sr_BoxesRunTime$().equals__O__O__Z(this.T2__f__1, Tuple2$1.T2__f__1) && $m_sr_BoxesRunTime$().equals__O__O__Z(this.T2__f__2, Tuple2$1.T2__f__2))
  } else {
    return false
  }
});
function $as_T2(obj) {
  return (((obj instanceof $c_T2) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.Tuple2"))
}
function $isArrayOf_T2(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.T2)))
}
function $asArrayOf_T2(obj, depth) {
  return (($isArrayOf_T2(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.Tuple2;", depth))
}
var $d_T2 = new $TypeData().initClass({
  T2: 0
}, false, "scala.Tuple2", {
  T2: 1,
  O: 1,
  s_Product2: 1,
  s_Product: 1,
  s_Equals: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_T2.prototype.$classData = $d_T2;
/** @constructor */
function $c_T5(_1, _2, _3, _4, _5) {
  this.T5__f__1 = null;
  this.T5__f__2 = null;
  this.T5__f__3 = null;
  this.T5__f__4 = null;
  this.T5__f__5 = null;
  this.T5__f__1 = _1;
  this.T5__f__2 = _2;
  this.T5__f__3 = _3;
  this.T5__f__4 = _4;
  this.T5__f__5 = _5
}
$c_T5.prototype = new $h_O();
$c_T5.prototype.constructor = $c_T5;
/** @constructor */
function $h_T5() {
  /*<skip>*/
}
$h_T5.prototype = $c_T5.prototype;
$c_T5.prototype.productArity__I = (function() {
  return 5
});
$c_T5.prototype.productElement__I__O = (function(n) {
  return $f_s_Product5__productElement__I__O(this, n)
});
$c_T5.prototype.toString__T = (function() {
  return (((((((((("(" + this.T5__f__1) + ",") + this.T5__f__2) + ",") + this.T5__f__3) + ",") + this.T5__f__4) + ",") + this.T5__f__5) + ")")
});
$c_T5.prototype.productPrefix__T = (function() {
  return "Tuple5"
});
$c_T5.prototype.productIterator__sc_Iterator = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this)
});
$c_T5.prototype.hashCode__I = (function() {
  var this$2 = $m_s_util_hashing_MurmurHash3$();
  return this$2.productHash__s_Product__I__I(this, (-889275714))
});
$c_T5.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else if ((x$1 instanceof $c_T5)) {
    var Tuple5$1 = $as_T5(x$1);
    return (((($m_sr_BoxesRunTime$().equals__O__O__Z(this.T5__f__1, Tuple5$1.T5__f__1) && $m_sr_BoxesRunTime$().equals__O__O__Z(this.T5__f__2, Tuple5$1.T5__f__2)) && $m_sr_BoxesRunTime$().equals__O__O__Z(this.T5__f__3, Tuple5$1.T5__f__3)) && $m_sr_BoxesRunTime$().equals__O__O__Z(this.T5__f__4, Tuple5$1.T5__f__4)) && $m_sr_BoxesRunTime$().equals__O__O__Z(this.T5__f__5, Tuple5$1.T5__f__5))
  } else {
    return false
  }
});
function $as_T5(obj) {
  return (((obj instanceof $c_T5) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.Tuple5"))
}
function $isArrayOf_T5(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.T5)))
}
function $asArrayOf_T5(obj, depth) {
  return (($isArrayOf_T5(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.Tuple5;", depth))
}
var $d_T5 = new $TypeData().initClass({
  T5: 0
}, false, "scala.Tuple5", {
  T5: 1,
  O: 1,
  s_Product5: 1,
  s_Product: 1,
  s_Equals: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_T5.prototype.$classData = $d_T5;
function $f_sc_GenMapLike__equals__O__Z($thiz, that) {
  if ($is_sc_GenMap(that)) {
    var x2 = $as_sc_GenMap(that);
    return $m_sc_GenMap$().mapEquals__sc_GenMapLike__sc_GenMap__Z($thiz, x2)
  } else {
    return false
  }
}
function $f_sc_GenSeqLike__equals__O__Z($thiz, that) {
  if ($is_sc_GenSeq(that)) {
    var x2 = $as_sc_GenSeq(that);
    return ((x2 === $thiz) || $thiz.sameElements__sc_GenIterable__Z(x2))
  } else {
    return false
  }
}
function $is_sc_GenTraversable(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_GenTraversable)))
}
function $as_sc_GenTraversable(obj) {
  return (($is_sc_GenTraversable(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.GenTraversable"))
}
function $isArrayOf_sc_GenTraversable(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_GenTraversable)))
}
function $asArrayOf_sc_GenTraversable(obj, depth) {
  return (($isArrayOf_sc_GenTraversable(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.GenTraversable;", depth))
}
/** @constructor */
function $c_scg_SeqFactory() {
  this.scg_GenTraversableFactory__f_ReusableCBFInstance = null
}
$c_scg_SeqFactory.prototype = new $h_scg_GenSeqFactory();
$c_scg_SeqFactory.prototype.constructor = $c_scg_SeqFactory;
/** @constructor */
function $h_scg_SeqFactory() {
  /*<skip>*/
}
$h_scg_SeqFactory.prototype = $c_scg_SeqFactory.prototype;
/** @constructor */
function $c_sci_HashMap$HashTrieMap$$anon$7(outer) {
  this.sci_TrieIterator__f_elems = null;
  this.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$depth = 0;
  this.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$arrayStack = null;
  this.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$posStack = null;
  this.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$arrayD = null;
  this.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$posD = 0;
  this.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$subIter = null;
  $ct_sci_TrieIterator__Asci_Iterable__(this, outer.sci_HashMap$HashTrieMap__f_elems0)
}
$c_sci_HashMap$HashTrieMap$$anon$7.prototype = new $h_sci_TrieIterator();
$c_sci_HashMap$HashTrieMap$$anon$7.prototype.constructor = $c_sci_HashMap$HashTrieMap$$anon$7;
/** @constructor */
function $h_sci_HashMap$HashTrieMap$$anon$7() {
  /*<skip>*/
}
$h_sci_HashMap$HashTrieMap$$anon$7.prototype = $c_sci_HashMap$HashTrieMap$$anon$7.prototype;
$c_sci_HashMap$HashTrieMap$$anon$7.prototype.getElem__O__O = (function(x) {
  return $as_sci_HashMap$HashMap1(x).ensurePair__T2()
});
var $d_sci_HashMap$HashTrieMap$$anon$7 = new $TypeData().initClass({
  sci_HashMap$HashTrieMap$$anon$7: 0
}, false, "scala.collection.immutable.HashMap$HashTrieMap$$anon$7", {
  sci_HashMap$HashTrieMap$$anon$7: 1,
  sci_TrieIterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1
});
$c_sci_HashMap$HashTrieMap$$anon$7.prototype.$classData = $d_sci_HashMap$HashTrieMap$$anon$7;
/** @constructor */
function $c_sci_HashSet$HashTrieSet$$anon$1(outer) {
  this.sci_TrieIterator__f_elems = null;
  this.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$depth = 0;
  this.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$arrayStack = null;
  this.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$posStack = null;
  this.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$arrayD = null;
  this.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$posD = 0;
  this.sci_TrieIterator__f_scala$collection$immutable$TrieIterator$$subIter = null;
  $ct_sci_TrieIterator__Asci_Iterable__(this, outer.sci_HashSet$HashTrieSet__f_elems)
}
$c_sci_HashSet$HashTrieSet$$anon$1.prototype = new $h_sci_TrieIterator();
$c_sci_HashSet$HashTrieSet$$anon$1.prototype.constructor = $c_sci_HashSet$HashTrieSet$$anon$1;
/** @constructor */
function $h_sci_HashSet$HashTrieSet$$anon$1() {
  /*<skip>*/
}
$h_sci_HashSet$HashTrieSet$$anon$1.prototype = $c_sci_HashSet$HashTrieSet$$anon$1.prototype;
$c_sci_HashSet$HashTrieSet$$anon$1.prototype.getElem__O__O = (function(cc) {
  return $as_sci_HashSet$HashSet1(cc).sci_HashSet$HashSet1__f_key
});
var $d_sci_HashSet$HashTrieSet$$anon$1 = new $TypeData().initClass({
  sci_HashSet$HashTrieSet$$anon$1: 0
}, false, "scala.collection.immutable.HashSet$HashTrieSet$$anon$1", {
  sci_HashSet$HashTrieSet$$anon$1: 1,
  sci_TrieIterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1
});
$c_sci_HashSet$HashTrieSet$$anon$1.prototype.$classData = $d_sci_HashSet$HashTrieSet$$anon$1;
/** @constructor */
function $c_sci_ListMap$() {
  $n_sci_ListMap$ = this;
  new $c_scg_GenMapFactory$MapCanBuildFrom(this)
}
$c_sci_ListMap$.prototype = new $h_scg_ImmutableMapFactory();
$c_sci_ListMap$.prototype.constructor = $c_sci_ListMap$;
/** @constructor */
function $h_sci_ListMap$() {
  /*<skip>*/
}
$h_sci_ListMap$.prototype = $c_sci_ListMap$.prototype;
$c_sci_ListMap$.prototype.empty__sc_GenMap = (function() {
  return $m_sci_ListMap$EmptyListMap$()
});
var $d_sci_ListMap$ = new $TypeData().initClass({
  sci_ListMap$: 0
}, false, "scala.collection.immutable.ListMap$", {
  sci_ListMap$: 1,
  scg_ImmutableMapFactory: 1,
  scg_MapFactory: 1,
  scg_GenMapFactory: 1,
  O: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_ListMap$.prototype.$classData = $d_sci_ListMap$;
var $n_sci_ListMap$;
function $m_sci_ListMap$() {
  if ((!$n_sci_ListMap$)) {
    $n_sci_ListMap$ = new $c_sci_ListMap$()
  };
  return $n_sci_ListMap$
}
/** @constructor */
function $c_sci_Set$() {
  this.sci_Set$__f_ReusableCBF = null;
  $n_sci_Set$ = this;
  this.sci_Set$__f_ReusableCBF = new $c_scg_GenSetFactory$$anon$1(this)
}
$c_sci_Set$.prototype = new $h_scg_ImmutableSetFactory();
$c_sci_Set$.prototype.constructor = $c_sci_Set$;
/** @constructor */
function $h_sci_Set$() {
  /*<skip>*/
}
$h_sci_Set$.prototype = $c_sci_Set$.prototype;
$c_sci_Set$.prototype.newBuilder__scm_Builder = (function() {
  return new $c_sci_Set$SetBuilderImpl()
});
$c_sci_Set$.prototype.emptyInstance__sci_Set = (function() {
  return $m_sci_Set$EmptySet$()
});
var $d_sci_Set$ = new $TypeData().initClass({
  sci_Set$: 0
}, false, "scala.collection.immutable.Set$", {
  sci_Set$: 1,
  scg_ImmutableSetFactory: 1,
  scg_SetFactory: 1,
  scg_GenSetFactory: 1,
  scg_GenericCompanion: 1,
  O: 1,
  scg_GenericSeqCompanion: 1
});
$c_sci_Set$.prototype.$classData = $d_sci_Set$;
var $n_sci_Set$;
function $m_sci_Set$() {
  if ((!$n_sci_Set$)) {
    $n_sci_Set$ = new $c_sci_Set$()
  };
  return $n_sci_Set$
}
/** @constructor */
function $c_sci_Stream$StreamBuilder() {
  this.scm_LazyBuilder__f_parts = null;
  $ct_scm_LazyBuilder__(this)
}
$c_sci_Stream$StreamBuilder.prototype = new $h_scm_LazyBuilder();
$c_sci_Stream$StreamBuilder.prototype.constructor = $c_sci_Stream$StreamBuilder;
/** @constructor */
function $h_sci_Stream$StreamBuilder() {
  /*<skip>*/
}
$h_sci_Stream$StreamBuilder.prototype = $c_sci_Stream$StreamBuilder.prototype;
$c_sci_Stream$StreamBuilder.prototype.result__sci_Stream = (function() {
  var this$1 = this.scm_LazyBuilder__f_parts;
  return $as_sci_Stream(this$1.toList__sci_List().toStream__sci_Stream().flatMap__F1__scg_CanBuildFrom__O(new $c_sjsr_AnonFunction1(((x$5$2) => {
    var x$5 = $as_sc_TraversableOnce(x$5$2);
    return x$5.toStream__sci_Stream()
  })), $m_sci_Stream$().sci_Stream$__f_ReusableCBF))
});
$c_sci_Stream$StreamBuilder.prototype.result__O = (function() {
  return this.result__sci_Stream()
});
function $as_sci_Stream$StreamBuilder(obj) {
  return (((obj instanceof $c_sci_Stream$StreamBuilder) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Stream$StreamBuilder"))
}
function $isArrayOf_sci_Stream$StreamBuilder(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Stream$StreamBuilder)))
}
function $asArrayOf_sci_Stream$StreamBuilder(obj, depth) {
  return (($isArrayOf_sci_Stream$StreamBuilder(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.Stream$StreamBuilder;", depth))
}
var $d_sci_Stream$StreamBuilder = new $TypeData().initClass({
  sci_Stream$StreamBuilder: 0
}, false, "scala.collection.immutable.Stream$StreamBuilder", {
  sci_Stream$StreamBuilder: 1,
  scm_LazyBuilder: 1,
  O: 1,
  scm_ReusableBuilder: 1,
  scm_Builder: 1,
  scg_Growable: 1,
  scg_Clearable: 1
});
$c_sci_Stream$StreamBuilder.prototype.$classData = $d_sci_Stream$StreamBuilder;
/** @constructor */
function $c_sci_VectorBuilder() {
  this.sci_VectorBuilder__f_blockIndex = 0;
  this.sci_VectorBuilder__f_lo = 0;
  this.sci_VectorBuilder__f_depth = 0;
  this.sci_VectorBuilder__f_display0 = null;
  this.sci_VectorBuilder__f_display1 = null;
  this.sci_VectorBuilder__f_display2 = null;
  this.sci_VectorBuilder__f_display3 = null;
  this.sci_VectorBuilder__f_display4 = null;
  this.sci_VectorBuilder__f_display5 = null;
  this.sci_VectorBuilder__f_display0 = new $ac_O(32);
  this.sci_VectorBuilder__f_depth = 1;
  this.sci_VectorBuilder__f_blockIndex = 0;
  this.sci_VectorBuilder__f_lo = 0
}
$c_sci_VectorBuilder.prototype = new $h_O();
$c_sci_VectorBuilder.prototype.constructor = $c_sci_VectorBuilder;
/** @constructor */
function $h_sci_VectorBuilder() {
  /*<skip>*/
}
$h_sci_VectorBuilder.prototype = $c_sci_VectorBuilder.prototype;
$c_sci_VectorBuilder.prototype.sizeHint__I__V = (function(size) {
  /*<skip>*/
});
$c_sci_VectorBuilder.prototype.sizeHintBounded__I__sc_TraversableLike__V = (function(size, boundingColl) {
  $f_scm_Builder__sizeHintBounded__I__sc_TraversableLike__V(this, size, boundingColl)
});
$c_sci_VectorBuilder.prototype.depth__I = (function() {
  return this.sci_VectorBuilder__f_depth
});
$c_sci_VectorBuilder.prototype.depth_$eq__I__V = (function(x$1) {
  this.sci_VectorBuilder__f_depth = x$1
});
$c_sci_VectorBuilder.prototype.display0__AO = (function() {
  return this.sci_VectorBuilder__f_display0
});
$c_sci_VectorBuilder.prototype.display0_$eq__AO__V = (function(x$1) {
  this.sci_VectorBuilder__f_display0 = x$1
});
$c_sci_VectorBuilder.prototype.display1__AO = (function() {
  return this.sci_VectorBuilder__f_display1
});
$c_sci_VectorBuilder.prototype.display1_$eq__AO__V = (function(x$1) {
  this.sci_VectorBuilder__f_display1 = x$1
});
$c_sci_VectorBuilder.prototype.display2__AO = (function() {
  return this.sci_VectorBuilder__f_display2
});
$c_sci_VectorBuilder.prototype.display2_$eq__AO__V = (function(x$1) {
  this.sci_VectorBuilder__f_display2 = x$1
});
$c_sci_VectorBuilder.prototype.display3__AO = (function() {
  return this.sci_VectorBuilder__f_display3
});
$c_sci_VectorBuilder.prototype.display3_$eq__AO__V = (function(x$1) {
  this.sci_VectorBuilder__f_display3 = x$1
});
$c_sci_VectorBuilder.prototype.display4__AO = (function() {
  return this.sci_VectorBuilder__f_display4
});
$c_sci_VectorBuilder.prototype.display4_$eq__AO__V = (function(x$1) {
  this.sci_VectorBuilder__f_display4 = x$1
});
$c_sci_VectorBuilder.prototype.display5__AO = (function() {
  return this.sci_VectorBuilder__f_display5
});
$c_sci_VectorBuilder.prototype.display5_$eq__AO__V = (function(x$1) {
  this.sci_VectorBuilder__f_display5 = x$1
});
$c_sci_VectorBuilder.prototype.$plus$eq__O__sci_VectorBuilder = (function(elem) {
  if ((this.sci_VectorBuilder__f_lo >= this.sci_VectorBuilder__f_display0.u.length)) {
    var newBlockIndex = ((32 + this.sci_VectorBuilder__f_blockIndex) | 0);
    var xor = (this.sci_VectorBuilder__f_blockIndex ^ newBlockIndex);
    $f_sci_VectorPointer__gotoNextBlockStartWritable__I__I__V(this, newBlockIndex, xor);
    this.sci_VectorBuilder__f_blockIndex = newBlockIndex;
    this.sci_VectorBuilder__f_lo = 0
  };
  this.sci_VectorBuilder__f_display0.set(this.sci_VectorBuilder__f_lo, elem);
  this.sci_VectorBuilder__f_lo = ((1 + this.sci_VectorBuilder__f_lo) | 0);
  return this
});
$c_sci_VectorBuilder.prototype.result__sci_Vector = (function() {
  var size = ((this.sci_VectorBuilder__f_blockIndex + this.sci_VectorBuilder__f_lo) | 0);
  if ((size === 0)) {
    var this$1 = $m_sci_Vector$();
    return this$1.sci_Vector$__f_NIL
  };
  var s = new $c_sci_Vector(0, size, 0);
  var depth = this.sci_VectorBuilder__f_depth;
  $f_sci_VectorPointer__initFrom__sci_VectorPointer__I__V(s, this, depth);
  if ((this.sci_VectorBuilder__f_depth > 1)) {
    var xor = (((-1) + size) | 0);
    $f_sci_VectorPointer__gotoPos__I__I__V(s, 0, xor)
  };
  return s
});
$c_sci_VectorBuilder.prototype.result__O = (function() {
  return this.result__sci_Vector()
});
$c_sci_VectorBuilder.prototype.$plus$plus$eq__sc_TraversableOnce__scg_Growable = (function(xs) {
  return $as_sci_VectorBuilder($f_scg_Growable__$plus$plus$eq__sc_TraversableOnce__scg_Growable(this, xs))
});
$c_sci_VectorBuilder.prototype.$plus$eq__O__scg_Growable = (function(elem) {
  return this.$plus$eq__O__sci_VectorBuilder(elem)
});
$c_sci_VectorBuilder.prototype.$plus$eq__O__scm_Builder = (function(elem) {
  return this.$plus$eq__O__sci_VectorBuilder(elem)
});
function $as_sci_VectorBuilder(obj) {
  return (((obj instanceof $c_sci_VectorBuilder) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.VectorBuilder"))
}
function $isArrayOf_sci_VectorBuilder(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_VectorBuilder)))
}
function $asArrayOf_sci_VectorBuilder(obj, depth) {
  return (($isArrayOf_sci_VectorBuilder(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.VectorBuilder;", depth))
}
var $d_sci_VectorBuilder = new $TypeData().initClass({
  sci_VectorBuilder: 0
}, false, "scala.collection.immutable.VectorBuilder", {
  sci_VectorBuilder: 1,
  O: 1,
  scm_ReusableBuilder: 1,
  scm_Builder: 1,
  scg_Growable: 1,
  scg_Clearable: 1,
  sci_VectorPointer: 1
});
$c_sci_VectorBuilder.prototype.$classData = $d_sci_VectorBuilder;
/** @constructor */
function $c_sci_VectorIterator(_startIndex, endIndex) {
  this.sci_VectorIterator__f_endIndex = 0;
  this.sci_VectorIterator__f_blockIndex = 0;
  this.sci_VectorIterator__f_lo = 0;
  this.sci_VectorIterator__f_endLo = 0;
  this.sci_VectorIterator__f__hasNext = false;
  this.sci_VectorIterator__f_depth = 0;
  this.sci_VectorIterator__f_display0 = null;
  this.sci_VectorIterator__f_display1 = null;
  this.sci_VectorIterator__f_display2 = null;
  this.sci_VectorIterator__f_display3 = null;
  this.sci_VectorIterator__f_display4 = null;
  this.sci_VectorIterator__f_display5 = null;
  this.sci_VectorIterator__f_endIndex = endIndex;
  this.sci_VectorIterator__f_blockIndex = ((-32) & _startIndex);
  this.sci_VectorIterator__f_lo = (31 & _startIndex);
  var x = ((endIndex - this.sci_VectorIterator__f_blockIndex) | 0);
  this.sci_VectorIterator__f_endLo = ((x < 32) ? x : 32);
  this.sci_VectorIterator__f__hasNext = (((this.sci_VectorIterator__f_blockIndex + this.sci_VectorIterator__f_lo) | 0) < endIndex)
}
$c_sci_VectorIterator.prototype = new $h_sc_AbstractIterator();
$c_sci_VectorIterator.prototype.constructor = $c_sci_VectorIterator;
/** @constructor */
function $h_sci_VectorIterator() {
  /*<skip>*/
}
$h_sci_VectorIterator.prototype = $c_sci_VectorIterator.prototype;
$c_sci_VectorIterator.prototype.depth__I = (function() {
  return this.sci_VectorIterator__f_depth
});
$c_sci_VectorIterator.prototype.depth_$eq__I__V = (function(x$1) {
  this.sci_VectorIterator__f_depth = x$1
});
$c_sci_VectorIterator.prototype.display0__AO = (function() {
  return this.sci_VectorIterator__f_display0
});
$c_sci_VectorIterator.prototype.display0_$eq__AO__V = (function(x$1) {
  this.sci_VectorIterator__f_display0 = x$1
});
$c_sci_VectorIterator.prototype.display1__AO = (function() {
  return this.sci_VectorIterator__f_display1
});
$c_sci_VectorIterator.prototype.display1_$eq__AO__V = (function(x$1) {
  this.sci_VectorIterator__f_display1 = x$1
});
$c_sci_VectorIterator.prototype.display2__AO = (function() {
  return this.sci_VectorIterator__f_display2
});
$c_sci_VectorIterator.prototype.display2_$eq__AO__V = (function(x$1) {
  this.sci_VectorIterator__f_display2 = x$1
});
$c_sci_VectorIterator.prototype.display3__AO = (function() {
  return this.sci_VectorIterator__f_display3
});
$c_sci_VectorIterator.prototype.display3_$eq__AO__V = (function(x$1) {
  this.sci_VectorIterator__f_display3 = x$1
});
$c_sci_VectorIterator.prototype.display4__AO = (function() {
  return this.sci_VectorIterator__f_display4
});
$c_sci_VectorIterator.prototype.display4_$eq__AO__V = (function(x$1) {
  this.sci_VectorIterator__f_display4 = x$1
});
$c_sci_VectorIterator.prototype.display5__AO = (function() {
  return this.sci_VectorIterator__f_display5
});
$c_sci_VectorIterator.prototype.display5_$eq__AO__V = (function(x$1) {
  this.sci_VectorIterator__f_display5 = x$1
});
$c_sci_VectorIterator.prototype.hasNext__Z = (function() {
  return this.sci_VectorIterator__f__hasNext
});
$c_sci_VectorIterator.prototype.next__O = (function() {
  if ((!this.sci_VectorIterator__f__hasNext)) {
    throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), "reached iterator end")
  };
  var res = this.sci_VectorIterator__f_display0.get(this.sci_VectorIterator__f_lo);
  this.sci_VectorIterator__f_lo = ((1 + this.sci_VectorIterator__f_lo) | 0);
  if ((this.sci_VectorIterator__f_lo === this.sci_VectorIterator__f_endLo)) {
    if ((((this.sci_VectorIterator__f_blockIndex + this.sci_VectorIterator__f_lo) | 0) < this.sci_VectorIterator__f_endIndex)) {
      var newBlockIndex = ((32 + this.sci_VectorIterator__f_blockIndex) | 0);
      var xor = (this.sci_VectorIterator__f_blockIndex ^ newBlockIndex);
      $f_sci_VectorPointer__gotoNextBlockStart__I__I__V(this, newBlockIndex, xor);
      this.sci_VectorIterator__f_blockIndex = newBlockIndex;
      var x = ((this.sci_VectorIterator__f_endIndex - this.sci_VectorIterator__f_blockIndex) | 0);
      this.sci_VectorIterator__f_endLo = ((x < 32) ? x : 32);
      this.sci_VectorIterator__f_lo = 0
    } else {
      this.sci_VectorIterator__f__hasNext = false
    }
  };
  return res
});
var $d_sci_VectorIterator = new $TypeData().initClass({
  sci_VectorIterator: 0
}, false, "scala.collection.immutable.VectorIterator", {
  sci_VectorIterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sci_VectorPointer: 1
});
$c_sci_VectorIterator.prototype.$classData = $d_sci_VectorIterator;
class $c_ju_DuplicateFormatFlagsException extends $c_ju_IllegalFormatException {
  constructor(f) {
    super();
    this.ju_DuplicateFormatFlagsException__f_f = null;
    this.ju_DuplicateFormatFlagsException__f_f = f;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
    if ((f === null)) {
      throw new $c_jl_NullPointerException()
    }
  };
  getMessage__T() {
    return (("Flags = '" + this.ju_DuplicateFormatFlagsException__f_f) + "'")
  };
}
var $d_ju_DuplicateFormatFlagsException = new $TypeData().initClass({
  ju_DuplicateFormatFlagsException: 0
}, false, "java.util.DuplicateFormatFlagsException", {
  ju_DuplicateFormatFlagsException: 1,
  ju_IllegalFormatException: 1,
  jl_IllegalArgumentException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_ju_DuplicateFormatFlagsException.prototype.$classData = $d_ju_DuplicateFormatFlagsException;
class $c_ju_FormatFlagsConversionMismatchException extends $c_ju_IllegalFormatException {
  constructor(f, c) {
    super();
    this.ju_FormatFlagsConversionMismatchException__f_f = null;
    this.ju_FormatFlagsConversionMismatchException__f_c = 0;
    this.ju_FormatFlagsConversionMismatchException__f_f = f;
    this.ju_FormatFlagsConversionMismatchException__f_c = c;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
    if ((f === null)) {
      throw new $c_jl_NullPointerException()
    }
  };
  getMessage__T() {
    return ((("Conversion = " + $bC(this.ju_FormatFlagsConversionMismatchException__f_c)) + ", Flags = ") + this.ju_FormatFlagsConversionMismatchException__f_f)
  };
}
var $d_ju_FormatFlagsConversionMismatchException = new $TypeData().initClass({
  ju_FormatFlagsConversionMismatchException: 0
}, false, "java.util.FormatFlagsConversionMismatchException", {
  ju_FormatFlagsConversionMismatchException: 1,
  ju_IllegalFormatException: 1,
  jl_IllegalArgumentException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_ju_FormatFlagsConversionMismatchException.prototype.$classData = $d_ju_FormatFlagsConversionMismatchException;
class $c_ju_IllegalFormatArgumentIndexException extends $c_ju_IllegalFormatException {
  constructor(msg) {
    super();
    this.ju_IllegalFormatArgumentIndexException__f_msg = null;
    this.ju_IllegalFormatArgumentIndexException__f_msg = msg;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true)
  };
  getMessage__T() {
    return this.ju_IllegalFormatArgumentIndexException__f_msg
  };
}
var $d_ju_IllegalFormatArgumentIndexException = new $TypeData().initClass({
  ju_IllegalFormatArgumentIndexException: 0
}, false, "java.util.IllegalFormatArgumentIndexException", {
  ju_IllegalFormatArgumentIndexException: 1,
  ju_IllegalFormatException: 1,
  jl_IllegalArgumentException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_ju_IllegalFormatArgumentIndexException.prototype.$classData = $d_ju_IllegalFormatArgumentIndexException;
class $c_ju_IllegalFormatCodePointException extends $c_ju_IllegalFormatException {
  constructor(c) {
    super();
    this.ju_IllegalFormatCodePointException__f_c = 0;
    this.ju_IllegalFormatCodePointException__f_c = c;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true)
  };
  getMessage__T() {
    var i = this.ju_IllegalFormatCodePointException__f_c;
    return ("Code point = 0x" + $as_T($uD((i >>> 0.0)).toString(16)))
  };
}
var $d_ju_IllegalFormatCodePointException = new $TypeData().initClass({
  ju_IllegalFormatCodePointException: 0
}, false, "java.util.IllegalFormatCodePointException", {
  ju_IllegalFormatCodePointException: 1,
  ju_IllegalFormatException: 1,
  jl_IllegalArgumentException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_ju_IllegalFormatCodePointException.prototype.$classData = $d_ju_IllegalFormatCodePointException;
class $c_ju_IllegalFormatConversionException extends $c_ju_IllegalFormatException {
  constructor(c, arg) {
    super();
    this.ju_IllegalFormatConversionException__f_c = 0;
    this.ju_IllegalFormatConversionException__f_arg = null;
    this.ju_IllegalFormatConversionException__f_c = c;
    this.ju_IllegalFormatConversionException__f_arg = arg;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
    if ((arg === null)) {
      throw new $c_jl_NullPointerException()
    }
  };
  getMessage__T() {
    var this$1 = this.ju_IllegalFormatConversionException__f_c;
    return (($as_T(String.fromCharCode(this$1)) + " != ") + this.ju_IllegalFormatConversionException__f_arg.getName__T())
  };
}
var $d_ju_IllegalFormatConversionException = new $TypeData().initClass({
  ju_IllegalFormatConversionException: 0
}, false, "java.util.IllegalFormatConversionException", {
  ju_IllegalFormatConversionException: 1,
  ju_IllegalFormatException: 1,
  jl_IllegalArgumentException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_ju_IllegalFormatConversionException.prototype.$classData = $d_ju_IllegalFormatConversionException;
class $c_ju_IllegalFormatFlagsException extends $c_ju_IllegalFormatException {
  constructor(f) {
    super();
    this.ju_IllegalFormatFlagsException__f_f = null;
    this.ju_IllegalFormatFlagsException__f_f = f;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
    if ((f === null)) {
      throw new $c_jl_NullPointerException()
    }
  };
  getMessage__T() {
    return (("Flags = '" + this.ju_IllegalFormatFlagsException__f_f) + "'")
  };
}
var $d_ju_IllegalFormatFlagsException = new $TypeData().initClass({
  ju_IllegalFormatFlagsException: 0
}, false, "java.util.IllegalFormatFlagsException", {
  ju_IllegalFormatFlagsException: 1,
  ju_IllegalFormatException: 1,
  jl_IllegalArgumentException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_ju_IllegalFormatFlagsException.prototype.$classData = $d_ju_IllegalFormatFlagsException;
class $c_ju_IllegalFormatPrecisionException extends $c_ju_IllegalFormatException {
  constructor(p) {
    super();
    this.ju_IllegalFormatPrecisionException__f_p = 0;
    this.ju_IllegalFormatPrecisionException__f_p = p;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true)
  };
  getMessage__T() {
    var i = this.ju_IllegalFormatPrecisionException__f_p;
    return ("" + i)
  };
}
var $d_ju_IllegalFormatPrecisionException = new $TypeData().initClass({
  ju_IllegalFormatPrecisionException: 0
}, false, "java.util.IllegalFormatPrecisionException", {
  ju_IllegalFormatPrecisionException: 1,
  ju_IllegalFormatException: 1,
  jl_IllegalArgumentException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_ju_IllegalFormatPrecisionException.prototype.$classData = $d_ju_IllegalFormatPrecisionException;
class $c_ju_IllegalFormatWidthException extends $c_ju_IllegalFormatException {
  constructor(w) {
    super();
    this.ju_IllegalFormatWidthException__f_w = 0;
    this.ju_IllegalFormatWidthException__f_w = w;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true)
  };
  getMessage__T() {
    var i = this.ju_IllegalFormatWidthException__f_w;
    return ("" + i)
  };
}
var $d_ju_IllegalFormatWidthException = new $TypeData().initClass({
  ju_IllegalFormatWidthException: 0
}, false, "java.util.IllegalFormatWidthException", {
  ju_IllegalFormatWidthException: 1,
  ju_IllegalFormatException: 1,
  jl_IllegalArgumentException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_ju_IllegalFormatWidthException.prototype.$classData = $d_ju_IllegalFormatWidthException;
class $c_ju_MissingFormatArgumentException extends $c_ju_IllegalFormatException {
  constructor(s) {
    super();
    this.ju_MissingFormatArgumentException__f_s = null;
    this.ju_MissingFormatArgumentException__f_s = s;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
    if ((s === null)) {
      throw new $c_jl_NullPointerException()
    }
  };
  getMessage__T() {
    return (("Format specifier '" + this.ju_MissingFormatArgumentException__f_s) + "'")
  };
}
var $d_ju_MissingFormatArgumentException = new $TypeData().initClass({
  ju_MissingFormatArgumentException: 0
}, false, "java.util.MissingFormatArgumentException", {
  ju_MissingFormatArgumentException: 1,
  ju_IllegalFormatException: 1,
  jl_IllegalArgumentException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_ju_MissingFormatArgumentException.prototype.$classData = $d_ju_MissingFormatArgumentException;
class $c_ju_MissingFormatWidthException extends $c_ju_IllegalFormatException {
  constructor(s) {
    super();
    this.ju_MissingFormatWidthException__f_s = null;
    this.ju_MissingFormatWidthException__f_s = s;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
    if ((s === null)) {
      throw new $c_jl_NullPointerException()
    }
  };
  getMessage__T() {
    return this.ju_MissingFormatWidthException__f_s
  };
}
var $d_ju_MissingFormatWidthException = new $TypeData().initClass({
  ju_MissingFormatWidthException: 0
}, false, "java.util.MissingFormatWidthException", {
  ju_MissingFormatWidthException: 1,
  ju_IllegalFormatException: 1,
  jl_IllegalArgumentException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_ju_MissingFormatWidthException.prototype.$classData = $d_ju_MissingFormatWidthException;
class $c_ju_UnknownFormatConversionException extends $c_ju_IllegalFormatException {
  constructor(s) {
    super();
    this.ju_UnknownFormatConversionException__f_s = null;
    this.ju_UnknownFormatConversionException__f_s = s;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
    if ((s === null)) {
      throw new $c_jl_NullPointerException()
    }
  };
  getMessage__T() {
    return (("Conversion = '" + this.ju_UnknownFormatConversionException__f_s) + "'")
  };
}
var $d_ju_UnknownFormatConversionException = new $TypeData().initClass({
  ju_UnknownFormatConversionException: 0
}, false, "java.util.UnknownFormatConversionException", {
  ju_UnknownFormatConversionException: 1,
  ju_IllegalFormatException: 1,
  jl_IllegalArgumentException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_ju_UnknownFormatConversionException.prototype.$classData = $d_ju_UnknownFormatConversionException;
function $f_sc_GenSetLike__equals__O__Z($thiz, that) {
  if ($is_sc_GenSet(that)) {
    var x2 = $as_sc_GenSet(that);
    return $m_sc_GenSet$().setEquals__sc_GenSetLike__sc_GenSet__Z($thiz, x2)
  } else {
    return false
  }
}
function $is_sc_GenSetLike(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_GenSetLike)))
}
function $as_sc_GenSetLike(obj) {
  return (($is_sc_GenSetLike(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.GenSetLike"))
}
function $isArrayOf_sc_GenSetLike(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_GenSetLike)))
}
function $asArrayOf_sc_GenSetLike(obj, depth) {
  return (($isArrayOf_sc_GenSetLike(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.GenSetLike;", depth))
}
/** @constructor */
function $c_sc_LinearSeq$() {
  this.scg_GenTraversableFactory__f_ReusableCBFInstance = null;
  $ct_scg_GenTraversableFactory__(this)
}
$c_sc_LinearSeq$.prototype = new $h_scg_SeqFactory();
$c_sc_LinearSeq$.prototype.constructor = $c_sc_LinearSeq$;
/** @constructor */
function $h_sc_LinearSeq$() {
  /*<skip>*/
}
$h_sc_LinearSeq$.prototype = $c_sc_LinearSeq$.prototype;
$c_sc_LinearSeq$.prototype.newBuilder__scm_Builder = (function() {
  $m_sci_LinearSeq$();
  return new $c_scm_ListBuffer()
});
var $d_sc_LinearSeq$ = new $TypeData().initClass({
  sc_LinearSeq$: 0
}, false, "scala.collection.LinearSeq$", {
  sc_LinearSeq$: 1,
  scg_SeqFactory: 1,
  scg_GenSeqFactory: 1,
  scg_GenTraversableFactory: 1,
  scg_GenericCompanion: 1,
  O: 1,
  scg_TraversableFactory: 1,
  scg_GenericSeqCompanion: 1
});
$c_sc_LinearSeq$.prototype.$classData = $d_sc_LinearSeq$;
var $n_sc_LinearSeq$;
function $m_sc_LinearSeq$() {
  if ((!$n_sc_LinearSeq$)) {
    $n_sc_LinearSeq$ = new $c_sc_LinearSeq$()
  };
  return $n_sc_LinearSeq$
}
/** @constructor */
function $c_sc_Seq$() {
  this.scg_GenTraversableFactory__f_ReusableCBFInstance = null;
  $ct_scg_GenTraversableFactory__(this)
}
$c_sc_Seq$.prototype = new $h_scg_SeqFactory();
$c_sc_Seq$.prototype.constructor = $c_sc_Seq$;
/** @constructor */
function $h_sc_Seq$() {
  /*<skip>*/
}
$h_sc_Seq$.prototype = $c_sc_Seq$.prototype;
$c_sc_Seq$.prototype.newBuilder__scm_Builder = (function() {
  $m_sci_Seq$();
  return new $c_scm_ListBuffer()
});
var $d_sc_Seq$ = new $TypeData().initClass({
  sc_Seq$: 0
}, false, "scala.collection.Seq$", {
  sc_Seq$: 1,
  scg_SeqFactory: 1,
  scg_GenSeqFactory: 1,
  scg_GenTraversableFactory: 1,
  scg_GenericCompanion: 1,
  O: 1,
  scg_TraversableFactory: 1,
  scg_GenericSeqCompanion: 1
});
$c_sc_Seq$.prototype.$classData = $d_sc_Seq$;
var $n_sc_Seq$;
function $m_sc_Seq$() {
  if ((!$n_sc_Seq$)) {
    $n_sc_Seq$ = new $c_sc_Seq$()
  };
  return $n_sc_Seq$
}
function $f_sc_TraversableLike__$plus$plus__sc_GenTraversableOnce__scg_CanBuildFrom__O($thiz, that, bf) {
  if ((bf === $m_sci_Set$().sci_Set$__f_ReusableCBF)) {
    if ($is_sci_Set($thiz)) {
      var x2 = $as_sci_Set($thiz);
      if ($is_sc_GenSet(that)) {
        return x2.union__sc_GenSet__sc_Set($as_sc_GenSet(that))
      }
    };
    return $p_sc_TraversableLike__defaultPlusPlus$1__scg_CanBuildFrom__sc_GenTraversableOnce__O($thiz, bf, that)
  } else if ((bf === $m_sci_HashSet$().sci_HashSet$__f_ReusableCBF)) {
    if (($thiz instanceof $c_sci_HashSet)) {
      var x2$2 = $as_sci_HashSet($thiz);
      if ($is_sc_GenSet(that)) {
        return x2$2.union__sc_GenSet__sci_HashSet($as_sc_GenSet(that))
      }
    };
    return $p_sc_TraversableLike__defaultPlusPlus$1__scg_CanBuildFrom__sc_GenTraversableOnce__O($thiz, bf, that)
  } else if (false) {
    var x2$3 = $as_sci_TreeSet($thiz);
    return x2$3.addAllImpl__sc_GenTraversableOnce__scg_CanBuildFrom__O(that, bf)
  } else {
    return $p_sc_TraversableLike__defaultPlusPlus$1__scg_CanBuildFrom__sc_GenTraversableOnce__O($thiz, bf, that)
  }
}
function $f_sc_TraversableLike__map__F1__scg_CanBuildFrom__O($thiz, f, bf) {
  var b = $p_sc_TraversableLike__builder$1__scg_CanBuildFrom__scm_Builder($thiz, bf);
  $thiz.foreach__F1__V(new $c_sjsr_AnonFunction1(((x$2) => b.$plus$eq__O__scm_Builder(f.apply__O__O(x$2)))));
  return b.result__O()
}
function $f_sc_TraversableLike__flatMap__F1__scg_CanBuildFrom__O($thiz, f, bf) {
  var b = bf.apply__O__scm_Builder($thiz.repr__O());
  $thiz.foreach__F1__V(new $c_sjsr_AnonFunction1(((x$2) => $as_scm_Builder(b.$plus$plus$eq__sc_TraversableOnce__scg_Growable($as_sc_GenTraversableOnce(f.apply__O__O(x$2)).seq__sc_TraversableOnce())))));
  return b.result__O()
}
function $f_sc_TraversableLike__tail__O($thiz) {
  if ($thiz.isEmpty__Z()) {
    throw new $c_jl_UnsupportedOperationException("empty.tail")
  };
  return $thiz.drop__I__O(1)
}
function $f_sc_TraversableLike__init__O($thiz) {
  if ($thiz.isEmpty__Z()) {
    throw new $c_jl_UnsupportedOperationException("empty.init")
  };
  var elem = $thiz.head__O();
  var lst = new $c_sr_ObjectRef(elem);
  var follow = new $c_sr_BooleanRef(false);
  var b = $thiz.newBuilder__scm_Builder();
  $f_scm_Builder__sizeHint__sc_TraversableLike__I__V(b, $thiz, (-1));
  $thiz.foreach__F1__V(new $c_sjsr_AnonFunction1(((x$2) => {
    if (follow.sr_BooleanRef__f_elem) {
      b.$plus$eq__O__scm_Builder(lst.sr_ObjectRef__f_elem)
    } else {
      follow.sr_BooleanRef__f_elem = true
    };
    lst.sr_ObjectRef__f_elem = x$2
  })));
  return b.result__O()
}
function $f_sc_TraversableLike__to__scg_CanBuildFrom__O($thiz, cbf) {
  var b = cbf.apply__scm_Builder();
  $f_scm_Builder__sizeHint__sc_TraversableLike__V(b, $thiz);
  b.$plus$plus$eq__sc_TraversableOnce__scg_Growable($thiz.thisCollection__sc_Traversable());
  return b.result__O()
}
function $f_sc_TraversableLike__toString__T($thiz) {
  return $thiz.mkString__T__T__T__T(($thiz.stringPrefix__T() + "("), ", ", ")")
}
function $f_sc_TraversableLike__stringPrefix__T($thiz) {
  var this$1 = $thiz.repr__O();
  var fqn = $objectGetClass(this$1).getName__T();
  var pos = (((-1) + fqn.length) | 0);
  while (true) {
    if ((pos !== (-1))) {
      var index = pos;
      var $$x1 = ($charAt(fqn, index) === 36)
    } else {
      var $$x1 = false
    };
    if ($$x1) {
      pos = (((-1) + pos) | 0)
    } else {
      break
    }
  };
  if ((pos === (-1))) {
    var $$x2 = true
  } else {
    var index$1 = pos;
    var $$x2 = ($charAt(fqn, index$1) === 46)
  };
  if ($$x2) {
    return ""
  };
  var result = "";
  while (true) {
    var partEnd = ((1 + pos) | 0);
    while (true) {
      if ((pos !== (-1))) {
        var index$2 = pos;
        var $$x4 = ($charAt(fqn, index$2) <= 57)
      } else {
        var $$x4 = false
      };
      if ($$x4) {
        var index$3 = pos;
        var $$x3 = ($charAt(fqn, index$3) >= 48)
      } else {
        var $$x3 = false
      };
      if ($$x3) {
        pos = (((-1) + pos) | 0)
      } else {
        break
      }
    };
    var lastNonDigit = pos;
    while (true) {
      if ((pos !== (-1))) {
        var index$4 = pos;
        var $$x6 = ($charAt(fqn, index$4) !== 36)
      } else {
        var $$x6 = false
      };
      if ($$x6) {
        var index$5 = pos;
        var $$x5 = ($charAt(fqn, index$5) !== 46)
      } else {
        var $$x5 = false
      };
      if ($$x5) {
        pos = (((-1) + pos) | 0)
      } else {
        break
      }
    };
    var partStart = ((1 + pos) | 0);
    if (((pos === lastNonDigit) && (partEnd !== fqn.length))) {
      return result
    };
    while (true) {
      if ((pos !== (-1))) {
        var index$6 = pos;
        var $$x7 = ($charAt(fqn, index$6) === 36)
      } else {
        var $$x7 = false
      };
      if ($$x7) {
        pos = (((-1) + pos) | 0)
      } else {
        break
      }
    };
    if ((pos === (-1))) {
      var atEnd = true
    } else {
      var index$7 = pos;
      var atEnd = ($charAt(fqn, index$7) === 46)
    };
    if ((atEnd || (!$p_sc_TraversableLike__isPartLikelySynthetic$1__T__I__Z($thiz, fqn, partStart)))) {
      if ((partStart < 0)) {
        $charAt(fqn, partStart)
      };
      if ((partEnd > fqn.length)) {
        $charAt(fqn, partEnd)
      };
      if ((partEnd < partStart)) {
        $charAt(fqn, (-1))
      };
      var part = $as_T(fqn.substring(partStart, partEnd));
      var this$2 = result;
      if ((this$2 === "")) {
        result = part
      } else {
        result = ((part + ".") + result)
      };
      if (atEnd) {
        return result
      }
    }
  }
}
function $p_sc_TraversableLike__defaultPlusPlus$1__scg_CanBuildFrom__sc_GenTraversableOnce__O($thiz, bf$1, that$1) {
  var b = bf$1.apply__O__scm_Builder($thiz.repr__O());
  if ($is_sc_IndexedSeqLike(that$1)) {
    var delta = that$1.seq__sc_TraversableOnce().size__I();
    $f_scm_Builder__sizeHint__sc_TraversableLike__I__V(b, $thiz, delta)
  };
  b.$plus$plus$eq__sc_TraversableOnce__scg_Growable($thiz.thisCollection__sc_Traversable());
  b.$plus$plus$eq__sc_TraversableOnce__scg_Growable(that$1.seq__sc_TraversableOnce());
  return b.result__O()
}
function $p_sc_TraversableLike__builder$1__scg_CanBuildFrom__scm_Builder($thiz, bf$3) {
  var b = bf$3.apply__O__scm_Builder($thiz.repr__O());
  $f_scm_Builder__sizeHint__sc_TraversableLike__V(b, $thiz);
  return b
}
function $p_sc_TraversableLike__isPartLikelySynthetic$1__T__I__Z($thiz, fqn$1, partStart$1) {
  var firstChar = $charAt(fqn$1, partStart$1);
  return (((firstChar > 90) && (firstChar < 127)) || (firstChar < 65))
}
function $is_sc_TraversableLike(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_TraversableLike)))
}
function $as_sc_TraversableLike(obj) {
  return (($is_sc_TraversableLike(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.TraversableLike"))
}
function $isArrayOf_sc_TraversableLike(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_TraversableLike)))
}
function $asArrayOf_sc_TraversableLike(obj, depth) {
  return (($isArrayOf_sc_TraversableLike(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.TraversableLike;", depth))
}
/** @constructor */
function $c_scg_IndexedSeqFactory() {
  this.scg_GenTraversableFactory__f_ReusableCBFInstance = null
}
$c_scg_IndexedSeqFactory.prototype = new $h_scg_SeqFactory();
$c_scg_IndexedSeqFactory.prototype.constructor = $c_scg_IndexedSeqFactory;
/** @constructor */
function $h_scg_IndexedSeqFactory() {
  /*<skip>*/
}
$h_scg_IndexedSeqFactory.prototype = $c_scg_IndexedSeqFactory.prototype;
function $p_sci_HashMap$__improve__I__I($thiz, hcode) {
  var h = ((hcode + (~(hcode << 9))) | 0);
  h = (h ^ ((h >>> 14) | 0));
  h = ((h + (h << 4)) | 0);
  return (h ^ ((h >>> 10) | 0))
}
/** @constructor */
function $c_sci_HashMap$() {
  this.sci_HashMap$__f__defaultMerger = null;
  this.sci_HashMap$__f__concatMerger = null;
  this.sci_HashMap$__f_ReusableCBF = null;
  $n_sci_HashMap$ = this;
  this.sci_HashMap$__f__defaultMerger = new $c_sci_HashMap$$anon$1();
  this.sci_HashMap$__f__concatMerger = new $c_sci_HashMap$$anon$3();
  this.sci_HashMap$__f_ReusableCBF = new $c_scg_GenMapFactory$MapCanBuildFrom(this)
}
$c_sci_HashMap$.prototype = new $h_scg_ImmutableMapFactory();
$c_sci_HashMap$.prototype.constructor = $c_sci_HashMap$;
/** @constructor */
function $h_sci_HashMap$() {
  /*<skip>*/
}
$h_sci_HashMap$.prototype = $c_sci_HashMap$.prototype;
$c_sci_HashMap$.prototype.newBuilder__scm_Builder = (function() {
  return new $c_sci_HashMap$HashMapBuilder()
});
$c_sci_HashMap$.prototype.scala$collection$immutable$HashMap$$makeHashTrieMap__I__sci_HashMap__I__sci_HashMap__I__I__sci_HashMap$HashTrieMap = (function(hash0, elem0, hash1, elem1, level, size) {
  var index0 = (31 & ((hash0 >>> level) | 0));
  var index1 = (31 & ((hash1 >>> level) | 0));
  if ((index0 !== index1)) {
    var bitmap = ((1 << index0) | (1 << index1));
    var elems = new ($d_sci_HashMap.getArrayOf().constr)(2);
    if ((index0 < index1)) {
      elems.set(0, elem0);
      elems.set(1, elem1)
    } else {
      elems.set(0, elem1);
      elems.set(1, elem0)
    };
    return new $c_sci_HashMap$HashTrieMap(bitmap, elems, size)
  } else {
    var elems$2 = new ($d_sci_HashMap.getArrayOf().constr)(1);
    var bitmap$2 = (1 << index0);
    elems$2.set(0, this.scala$collection$immutable$HashMap$$makeHashTrieMap__I__sci_HashMap__I__sci_HashMap__I__I__sci_HashMap$HashTrieMap(hash0, elem0, hash1, elem1, ((5 + level) | 0), size));
    return new $c_sci_HashMap$HashTrieMap(bitmap$2, elems$2, size)
  }
});
$c_sci_HashMap$.prototype.scala$collection$immutable$HashMap$$computeHashImpl__O__I = (function(key) {
  return $p_sci_HashMap$__improve__I__I(this, $m_sr_Statics$().anyHash__O__I(key))
});
$c_sci_HashMap$.prototype.empty__sc_GenMap = (function() {
  return $m_sci_HashMap$EmptyHashMap$()
});
var $d_sci_HashMap$ = new $TypeData().initClass({
  sci_HashMap$: 0
}, false, "scala.collection.immutable.HashMap$", {
  sci_HashMap$: 1,
  scg_ImmutableMapFactory: 1,
  scg_MapFactory: 1,
  scg_GenMapFactory: 1,
  O: 1,
  scg_BitOperations$Int: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_HashMap$.prototype.$classData = $d_sci_HashMap$;
var $n_sci_HashMap$;
function $m_sci_HashMap$() {
  if ((!$n_sci_HashMap$)) {
    $n_sci_HashMap$ = new $c_sci_HashMap$()
  };
  return $n_sci_HashMap$
}
/** @constructor */
function $c_sci_LinearSeq$() {
  this.scg_GenTraversableFactory__f_ReusableCBFInstance = null;
  $ct_scg_GenTraversableFactory__(this)
}
$c_sci_LinearSeq$.prototype = new $h_scg_SeqFactory();
$c_sci_LinearSeq$.prototype.constructor = $c_sci_LinearSeq$;
/** @constructor */
function $h_sci_LinearSeq$() {
  /*<skip>*/
}
$h_sci_LinearSeq$.prototype = $c_sci_LinearSeq$.prototype;
$c_sci_LinearSeq$.prototype.newBuilder__scm_Builder = (function() {
  return new $c_scm_ListBuffer()
});
var $d_sci_LinearSeq$ = new $TypeData().initClass({
  sci_LinearSeq$: 0
}, false, "scala.collection.immutable.LinearSeq$", {
  sci_LinearSeq$: 1,
  scg_SeqFactory: 1,
  scg_GenSeqFactory: 1,
  scg_GenTraversableFactory: 1,
  scg_GenericCompanion: 1,
  O: 1,
  scg_TraversableFactory: 1,
  scg_GenericSeqCompanion: 1
});
$c_sci_LinearSeq$.prototype.$classData = $d_sci_LinearSeq$;
var $n_sci_LinearSeq$;
function $m_sci_LinearSeq$() {
  if ((!$n_sci_LinearSeq$)) {
    $n_sci_LinearSeq$ = new $c_sci_LinearSeq$()
  };
  return $n_sci_LinearSeq$
}
function $ct_sci_Map$MapNIterator__($thiz) {
  $thiz.sci_Map$MapNIterator__f_current = 0;
  return $thiz
}
/** @constructor */
function $c_sci_Map$MapNIterator() {
  this.sci_Map$MapNIterator__f_current = 0
}
$c_sci_Map$MapNIterator.prototype = new $h_sc_AbstractIterator();
$c_sci_Map$MapNIterator.prototype.constructor = $c_sci_Map$MapNIterator;
/** @constructor */
function $h_sci_Map$MapNIterator() {
  /*<skip>*/
}
$h_sci_Map$MapNIterator.prototype = $c_sci_Map$MapNIterator.prototype;
$c_sci_Map$MapNIterator.prototype.hasNext__Z = (function() {
  return (this.sci_Map$MapNIterator__f_current < this.size__I())
});
$c_sci_Map$MapNIterator.prototype.next__O = (function() {
  if (this.hasNext__Z()) {
    var i = this.sci_Map$MapNIterator__f_current;
    var r = this.apply__I__T2(i);
    this.sci_Map$MapNIterator__f_current = ((1 + this.sci_Map$MapNIterator__f_current) | 0);
    return r
  } else {
    return $m_sc_Iterator$().sc_Iterator$__f_empty.next__O()
  }
});
$c_sci_Map$MapNIterator.prototype.drop__I__sc_Iterator = (function(n) {
  if ((n > 0)) {
    var a = ((this.sci_Map$MapNIterator__f_current + n) | 0);
    var b = this.size__I();
    this.sci_Map$MapNIterator__f_current = ((a < b) ? a : b)
  };
  return this
});
/** @constructor */
function $c_sci_Seq$() {
  this.scg_GenTraversableFactory__f_ReusableCBFInstance = null;
  $ct_scg_GenTraversableFactory__(this)
}
$c_sci_Seq$.prototype = new $h_scg_SeqFactory();
$c_sci_Seq$.prototype.constructor = $c_sci_Seq$;
/** @constructor */
function $h_sci_Seq$() {
  /*<skip>*/
}
$h_sci_Seq$.prototype = $c_sci_Seq$.prototype;
$c_sci_Seq$.prototype.newBuilder__scm_Builder = (function() {
  return new $c_scm_ListBuffer()
});
var $d_sci_Seq$ = new $TypeData().initClass({
  sci_Seq$: 0
}, false, "scala.collection.immutable.Seq$", {
  sci_Seq$: 1,
  scg_SeqFactory: 1,
  scg_GenSeqFactory: 1,
  scg_GenTraversableFactory: 1,
  scg_GenericCompanion: 1,
  O: 1,
  scg_TraversableFactory: 1,
  scg_GenericSeqCompanion: 1
});
$c_sci_Seq$.prototype.$classData = $d_sci_Seq$;
var $n_sci_Seq$;
function $m_sci_Seq$() {
  if ((!$n_sci_Seq$)) {
    $n_sci_Seq$ = new $c_sci_Seq$()
  };
  return $n_sci_Seq$
}
function $ct_sci_Set$SetNIterator__I__($thiz, n) {
  $thiz.sci_Set$SetNIterator__f_current = 0;
  $thiz.sci_Set$SetNIterator__f_remainder = n;
  return $thiz
}
/** @constructor */
function $c_sci_Set$SetNIterator() {
  this.sci_Set$SetNIterator__f_current = 0;
  this.sci_Set$SetNIterator__f_remainder = 0
}
$c_sci_Set$SetNIterator.prototype = new $h_sc_AbstractIterator();
$c_sci_Set$SetNIterator.prototype.constructor = $c_sci_Set$SetNIterator;
/** @constructor */
function $h_sci_Set$SetNIterator() {
  /*<skip>*/
}
$h_sci_Set$SetNIterator.prototype = $c_sci_Set$SetNIterator.prototype;
$c_sci_Set$SetNIterator.prototype.hasNext__Z = (function() {
  return (this.sci_Set$SetNIterator__f_remainder > 0)
});
$c_sci_Set$SetNIterator.prototype.next__O = (function() {
  if (this.hasNext__Z()) {
    var r = this.apply__I__O(this.sci_Set$SetNIterator__f_current);
    this.sci_Set$SetNIterator__f_current = ((1 + this.sci_Set$SetNIterator__f_current) | 0);
    this.sci_Set$SetNIterator__f_remainder = (((-1) + this.sci_Set$SetNIterator__f_remainder) | 0);
    return r
  } else {
    return $m_sc_Iterator$().sc_Iterator$__f_empty.next__O()
  }
});
$c_sci_Set$SetNIterator.prototype.drop__I__sc_Iterator = (function(n) {
  if ((n > 0)) {
    this.sci_Set$SetNIterator__f_current = ((this.sci_Set$SetNIterator__f_current + n) | 0);
    var b = ((this.sci_Set$SetNIterator__f_remainder - n) | 0);
    this.sci_Set$SetNIterator__f_remainder = ((b < 0) ? 0 : b)
  };
  return this
});
/** @constructor */
function $c_scm_IndexedSeq$() {
  this.scg_GenTraversableFactory__f_ReusableCBFInstance = null;
  $ct_scg_GenTraversableFactory__(this)
}
$c_scm_IndexedSeq$.prototype = new $h_scg_SeqFactory();
$c_scm_IndexedSeq$.prototype.constructor = $c_scm_IndexedSeq$;
/** @constructor */
function $h_scm_IndexedSeq$() {
  /*<skip>*/
}
$h_scm_IndexedSeq$.prototype = $c_scm_IndexedSeq$.prototype;
$c_scm_IndexedSeq$.prototype.newBuilder__scm_Builder = (function() {
  return $ct_scm_ArrayBuffer__(new $c_scm_ArrayBuffer())
});
var $d_scm_IndexedSeq$ = new $TypeData().initClass({
  scm_IndexedSeq$: 0
}, false, "scala.collection.mutable.IndexedSeq$", {
  scm_IndexedSeq$: 1,
  scg_SeqFactory: 1,
  scg_GenSeqFactory: 1,
  scg_GenTraversableFactory: 1,
  scg_GenericCompanion: 1,
  O: 1,
  scg_TraversableFactory: 1,
  scg_GenericSeqCompanion: 1
});
$c_scm_IndexedSeq$.prototype.$classData = $d_scm_IndexedSeq$;
var $n_scm_IndexedSeq$;
function $m_scm_IndexedSeq$() {
  if ((!$n_scm_IndexedSeq$)) {
    $n_scm_IndexedSeq$ = new $c_scm_IndexedSeq$()
  };
  return $n_scm_IndexedSeq$
}
/** @constructor */
function $c_s_math_Ordering$Reverse(outer) {
  this.s_math_Ordering$Reverse__f_outer = null;
  this.s_math_Ordering$Reverse__f_outer = outer
}
$c_s_math_Ordering$Reverse.prototype = new $h_O();
$c_s_math_Ordering$Reverse.prototype.constructor = $c_s_math_Ordering$Reverse;
/** @constructor */
function $h_s_math_Ordering$Reverse() {
  /*<skip>*/
}
$h_s_math_Ordering$Reverse.prototype = $c_s_math_Ordering$Reverse.prototype;
$c_s_math_Ordering$Reverse.prototype.equals__O__Z = (function(obj) {
  if ((obj !== null)) {
    if ((this === obj)) {
      return true
    }
  };
  if ((obj instanceof $c_s_math_Ordering$Reverse)) {
    var x3 = $as_s_math_Ordering$Reverse(obj);
    var x = this.s_math_Ordering$Reverse__f_outer;
    var x$2 = x3.s_math_Ordering$Reverse__f_outer;
    return ((x === null) ? (x$2 === null) : x.equals__O__Z(x$2))
  };
  return false
});
$c_s_math_Ordering$Reverse.prototype.hashCode__I = (function() {
  return Math.imul(41, this.s_math_Ordering$Reverse__f_outer.hashCode__I())
});
function $as_s_math_Ordering$Reverse(obj) {
  return (((obj instanceof $c_s_math_Ordering$Reverse) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.math.Ordering$Reverse"))
}
function $isArrayOf_s_math_Ordering$Reverse(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_math_Ordering$Reverse)))
}
function $asArrayOf_s_math_Ordering$Reverse(obj, depth) {
  return (($isArrayOf_s_math_Ordering$Reverse(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.math.Ordering$Reverse;", depth))
}
var $d_s_math_Ordering$Reverse = new $TypeData().initClass({
  s_math_Ordering$Reverse: 0
}, false, "scala.math.Ordering$Reverse", {
  s_math_Ordering$Reverse: 1,
  O: 1,
  s_math_Ordering: 1,
  ju_Comparator: 1,
  s_math_PartialOrdering: 1,
  s_math_Equiv: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_s_math_Ordering$Reverse.prototype.$classData = $d_s_math_Ordering$Reverse;
/** @constructor */
function $c_sjs_js_WrappedArray$() {
  this.scg_GenTraversableFactory__f_ReusableCBFInstance = null;
  $ct_scg_GenTraversableFactory__(this)
}
$c_sjs_js_WrappedArray$.prototype = new $h_scg_SeqFactory();
$c_sjs_js_WrappedArray$.prototype.constructor = $c_sjs_js_WrappedArray$;
/** @constructor */
function $h_sjs_js_WrappedArray$() {
  /*<skip>*/
}
$h_sjs_js_WrappedArray$.prototype = $c_sjs_js_WrappedArray$.prototype;
$c_sjs_js_WrappedArray$.prototype.newBuilder__scm_Builder = (function() {
  return $ct_sjs_js_WrappedArray__(new $c_sjs_js_WrappedArray())
});
var $d_sjs_js_WrappedArray$ = new $TypeData().initClass({
  sjs_js_WrappedArray$: 0
}, false, "scala.scalajs.js.WrappedArray$", {
  sjs_js_WrappedArray$: 1,
  scg_SeqFactory: 1,
  scg_GenSeqFactory: 1,
  scg_GenTraversableFactory: 1,
  scg_GenericCompanion: 1,
  O: 1,
  scg_TraversableFactory: 1,
  scg_GenericSeqCompanion: 1
});
$c_sjs_js_WrappedArray$.prototype.$classData = $d_sjs_js_WrappedArray$;
var $n_sjs_js_WrappedArray$;
function $m_sjs_js_WrappedArray$() {
  if ((!$n_sjs_js_WrappedArray$)) {
    $n_sjs_js_WrappedArray$ = new $c_sjs_js_WrappedArray$()
  };
  return $n_sjs_js_WrappedArray$
}
function $is_sc_GenIterable(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_GenIterable)))
}
function $as_sc_GenIterable(obj) {
  return (($is_sc_GenIterable(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.GenIterable"))
}
function $isArrayOf_sc_GenIterable(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_GenIterable)))
}
function $asArrayOf_sc_GenIterable(obj, depth) {
  return (($isArrayOf_sc_GenIterable(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.GenIterable;", depth))
}
/** @constructor */
function $c_sc_IndexedSeq$() {
  this.scg_GenTraversableFactory__f_ReusableCBFInstance = null;
  $ct_scg_GenTraversableFactory__(this)
}
$c_sc_IndexedSeq$.prototype = new $h_scg_IndexedSeqFactory();
$c_sc_IndexedSeq$.prototype.constructor = $c_sc_IndexedSeq$;
/** @constructor */
function $h_sc_IndexedSeq$() {
  /*<skip>*/
}
$h_sc_IndexedSeq$.prototype = $c_sc_IndexedSeq$.prototype;
$c_sc_IndexedSeq$.prototype.newBuilder__scm_Builder = (function() {
  $m_sci_IndexedSeq$();
  $m_sci_Vector$();
  return new $c_sci_VectorBuilder()
});
var $d_sc_IndexedSeq$ = new $TypeData().initClass({
  sc_IndexedSeq$: 0
}, false, "scala.collection.IndexedSeq$", {
  sc_IndexedSeq$: 1,
  scg_IndexedSeqFactory: 1,
  scg_SeqFactory: 1,
  scg_GenSeqFactory: 1,
  scg_GenTraversableFactory: 1,
  scg_GenericCompanion: 1,
  O: 1,
  scg_TraversableFactory: 1,
  scg_GenericSeqCompanion: 1
});
$c_sc_IndexedSeq$.prototype.$classData = $d_sc_IndexedSeq$;
var $n_sc_IndexedSeq$;
function $m_sc_IndexedSeq$() {
  if ((!$n_sc_IndexedSeq$)) {
    $n_sc_IndexedSeq$ = new $c_sc_IndexedSeq$()
  };
  return $n_sc_IndexedSeq$
}
/** @constructor */
function $c_sc_IndexedSeqLike$Elements(outer, start, end) {
  this.sc_IndexedSeqLike$Elements__f_end = 0;
  this.sc_IndexedSeqLike$Elements__f_index = 0;
  this.sc_IndexedSeqLike$Elements__f_$outer = null;
  this.sc_IndexedSeqLike$Elements__f_end = end;
  if ((outer === null)) {
    throw null
  } else {
    this.sc_IndexedSeqLike$Elements__f_$outer = outer
  };
  this.sc_IndexedSeqLike$Elements__f_index = start
}
$c_sc_IndexedSeqLike$Elements.prototype = new $h_sc_AbstractIterator();
$c_sc_IndexedSeqLike$Elements.prototype.constructor = $c_sc_IndexedSeqLike$Elements;
/** @constructor */
function $h_sc_IndexedSeqLike$Elements() {
  /*<skip>*/
}
$h_sc_IndexedSeqLike$Elements.prototype = $c_sc_IndexedSeqLike$Elements.prototype;
$c_sc_IndexedSeqLike$Elements.prototype.hasNext__Z = (function() {
  return (this.sc_IndexedSeqLike$Elements__f_index < this.sc_IndexedSeqLike$Elements__f_end)
});
$c_sc_IndexedSeqLike$Elements.prototype.next__O = (function() {
  if ((this.sc_IndexedSeqLike$Elements__f_index >= this.sc_IndexedSeqLike$Elements__f_end)) {
    $m_sc_Iterator$().sc_Iterator$__f_empty.next__O()
  };
  var x = this.sc_IndexedSeqLike$Elements__f_$outer.apply__I__O(this.sc_IndexedSeqLike$Elements__f_index);
  this.sc_IndexedSeqLike$Elements__f_index = ((1 + this.sc_IndexedSeqLike$Elements__f_index) | 0);
  return x
});
$c_sc_IndexedSeqLike$Elements.prototype.drop__I__sc_Iterator = (function(n) {
  return ((n <= 0) ? new $c_sc_IndexedSeqLike$Elements(this.sc_IndexedSeqLike$Elements__f_$outer, this.sc_IndexedSeqLike$Elements__f_index, this.sc_IndexedSeqLike$Elements__f_end) : ((((this.sc_IndexedSeqLike$Elements__f_index + n) | 0) >= this.sc_IndexedSeqLike$Elements__f_end) ? new $c_sc_IndexedSeqLike$Elements(this.sc_IndexedSeqLike$Elements__f_$outer, this.sc_IndexedSeqLike$Elements__f_end, this.sc_IndexedSeqLike$Elements__f_end) : new $c_sc_IndexedSeqLike$Elements(this.sc_IndexedSeqLike$Elements__f_$outer, ((this.sc_IndexedSeqLike$Elements__f_index + n) | 0), this.sc_IndexedSeqLike$Elements__f_end)))
});
var $d_sc_IndexedSeqLike$Elements = new $TypeData().initClass({
  sc_IndexedSeqLike$Elements: 0
}, false, "scala.collection.IndexedSeqLike$Elements", {
  sc_IndexedSeqLike$Elements: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_BufferedIterator: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_sc_IndexedSeqLike$Elements.prototype.$classData = $d_sc_IndexedSeqLike$Elements;
/** @constructor */
function $c_sci_HashSet$() {
  this.sci_HashSet$__f_ReusableCBF = null;
  $n_sci_HashSet$ = this;
  this.sci_HashSet$__f_ReusableCBF = new $c_scg_GenSetFactory$$anon$1(this)
}
$c_sci_HashSet$.prototype = new $h_scg_ImmutableSetFactory();
$c_sci_HashSet$.prototype.constructor = $c_sci_HashSet$;
/** @constructor */
function $h_sci_HashSet$() {
  /*<skip>*/
}
$h_sci_HashSet$.prototype = $c_sci_HashSet$.prototype;
$c_sci_HashSet$.prototype.newBuilder__scm_Builder = (function() {
  return new $c_sci_HashSet$HashSetBuilder()
});
$c_sci_HashSet$.prototype.scala$collection$immutable$HashSet$$makeHashTrieSet__I__sci_HashSet__I__sci_HashSet__I__I__sci_HashSet$HashTrieSet = (function(hash0, elem0, hash1, elem1, level, newSize) {
  var index0 = (31 & ((hash0 >>> level) | 0));
  var index1 = (31 & ((hash1 >>> level) | 0));
  if ((index0 !== index1)) {
    var bitmap = ((1 << index0) | (1 << index1));
    var elems = new ($d_sci_HashSet.getArrayOf().constr)(2);
    if ((index0 < index1)) {
      elems.set(0, elem0);
      elems.set(1, elem1)
    } else {
      elems.set(0, elem1);
      elems.set(1, elem0)
    };
    return new $c_sci_HashSet$HashTrieSet(bitmap, elems, newSize)
  } else {
    var bitmap$2 = (1 << index0);
    var child = this.scala$collection$immutable$HashSet$$makeHashTrieSet__I__sci_HashSet__I__sci_HashSet__I__I__sci_HashSet$HashTrieSet(hash0, elem0, hash1, elem1, ((5 + level) | 0), newSize);
    var elems$2 = new ($d_sci_HashSet.getArrayOf().constr)(1);
    elems$2.set(0, child);
    return new $c_sci_HashSet$HashTrieSet(bitmap$2, elems$2, newSize)
  }
});
$c_sci_HashSet$.prototype.improve__I__I = (function(hcode) {
  var h = ((hcode + (~(hcode << 9))) | 0);
  h = (h ^ ((h >>> 14) | 0));
  h = ((h + (h << 4)) | 0);
  return (h ^ ((h >>> 10) | 0))
});
$c_sci_HashSet$.prototype.computeHash__O__I = (function(key) {
  return this.improve__I__I($m_sr_Statics$().anyHash__O__I(key))
});
$c_sci_HashSet$.prototype.emptyInstance__sci_Set = (function() {
  return $m_sci_HashSet$EmptyHashSet$()
});
var $d_sci_HashSet$ = new $TypeData().initClass({
  sci_HashSet$: 0
}, false, "scala.collection.immutable.HashSet$", {
  sci_HashSet$: 1,
  scg_ImmutableSetFactory: 1,
  scg_SetFactory: 1,
  scg_GenSetFactory: 1,
  scg_GenericCompanion: 1,
  O: 1,
  scg_GenericSeqCompanion: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_HashSet$.prototype.$classData = $d_sci_HashSet$;
var $n_sci_HashSet$;
function $m_sci_HashSet$() {
  if ((!$n_sci_HashSet$)) {
    $n_sci_HashSet$ = new $c_sci_HashSet$()
  };
  return $n_sci_HashSet$
}
/** @constructor */
function $c_sci_IndexedSeq$() {
  this.scg_GenTraversableFactory__f_ReusableCBFInstance = null;
  $ct_scg_GenTraversableFactory__(this)
}
$c_sci_IndexedSeq$.prototype = new $h_scg_IndexedSeqFactory();
$c_sci_IndexedSeq$.prototype.constructor = $c_sci_IndexedSeq$;
/** @constructor */
function $h_sci_IndexedSeq$() {
  /*<skip>*/
}
$h_sci_IndexedSeq$.prototype = $c_sci_IndexedSeq$.prototype;
$c_sci_IndexedSeq$.prototype.newBuilder__scm_Builder = (function() {
  $m_sci_Vector$();
  return new $c_sci_VectorBuilder()
});
var $d_sci_IndexedSeq$ = new $TypeData().initClass({
  sci_IndexedSeq$: 0
}, false, "scala.collection.immutable.IndexedSeq$", {
  sci_IndexedSeq$: 1,
  scg_IndexedSeqFactory: 1,
  scg_SeqFactory: 1,
  scg_GenSeqFactory: 1,
  scg_GenTraversableFactory: 1,
  scg_GenericCompanion: 1,
  O: 1,
  scg_TraversableFactory: 1,
  scg_GenericSeqCompanion: 1
});
$c_sci_IndexedSeq$.prototype.$classData = $d_sci_IndexedSeq$;
var $n_sci_IndexedSeq$;
function $m_sci_IndexedSeq$() {
  if ((!$n_sci_IndexedSeq$)) {
    $n_sci_IndexedSeq$ = new $c_sci_IndexedSeq$()
  };
  return $n_sci_IndexedSeq$
}
/** @constructor */
function $c_sci_ListSet$() {
  $n_sci_ListSet$ = this;
  new $c_scg_GenSetFactory$$anon$1(this)
}
$c_sci_ListSet$.prototype = new $h_scg_ImmutableSetFactory();
$c_sci_ListSet$.prototype.constructor = $c_sci_ListSet$;
/** @constructor */
function $h_sci_ListSet$() {
  /*<skip>*/
}
$h_sci_ListSet$.prototype = $c_sci_ListSet$.prototype;
$c_sci_ListSet$.prototype.emptyInstance__sci_Set = (function() {
  return $m_sci_ListSet$EmptyListSet$()
});
var $d_sci_ListSet$ = new $TypeData().initClass({
  sci_ListSet$: 0
}, false, "scala.collection.immutable.ListSet$", {
  sci_ListSet$: 1,
  scg_ImmutableSetFactory: 1,
  scg_SetFactory: 1,
  scg_GenSetFactory: 1,
  scg_GenericCompanion: 1,
  O: 1,
  scg_GenericSeqCompanion: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_ListSet$.prototype.$classData = $d_sci_ListSet$;
var $n_sci_ListSet$;
function $m_sci_ListSet$() {
  if ((!$n_sci_ListSet$)) {
    $n_sci_ListSet$ = new $c_sci_ListSet$()
  };
  return $n_sci_ListSet$
}
function $ct_sci_Map$Map2$Map2Iterator__sci_Map$Map2__($thiz, outer) {
  if ((outer === null)) {
    throw null
  } else {
    $thiz.sci_Map$Map2$Map2Iterator__f_$outer = outer
  };
  $ct_sci_Map$MapNIterator__($thiz);
  return $thiz
}
/** @constructor */
function $c_sci_Map$Map2$Map2Iterator() {
  this.sci_Map$MapNIterator__f_current = 0;
  this.sci_Map$Map2$Map2Iterator__f_$outer = null
}
$c_sci_Map$Map2$Map2Iterator.prototype = new $h_sci_Map$MapNIterator();
$c_sci_Map$Map2$Map2Iterator.prototype.constructor = $c_sci_Map$Map2$Map2Iterator;
/** @constructor */
function $h_sci_Map$Map2$Map2Iterator() {
  /*<skip>*/
}
$h_sci_Map$Map2$Map2Iterator.prototype = $c_sci_Map$Map2$Map2Iterator.prototype;
$c_sci_Map$Map2$Map2Iterator.prototype.size__I = (function() {
  return 2
});
function $ct_sci_Map$Map3$Map3Iterator__sci_Map$Map3__($thiz, outer) {
  if ((outer === null)) {
    throw null
  } else {
    $thiz.sci_Map$Map3$Map3Iterator__f_$outer = outer
  };
  $ct_sci_Map$MapNIterator__($thiz);
  return $thiz
}
/** @constructor */
function $c_sci_Map$Map3$Map3Iterator() {
  this.sci_Map$MapNIterator__f_current = 0;
  this.sci_Map$Map3$Map3Iterator__f_$outer = null
}
$c_sci_Map$Map3$Map3Iterator.prototype = new $h_sci_Map$MapNIterator();
$c_sci_Map$Map3$Map3Iterator.prototype.constructor = $c_sci_Map$Map3$Map3Iterator;
/** @constructor */
function $h_sci_Map$Map3$Map3Iterator() {
  /*<skip>*/
}
$h_sci_Map$Map3$Map3Iterator.prototype = $c_sci_Map$Map3$Map3Iterator.prototype;
$c_sci_Map$Map3$Map3Iterator.prototype.size__I = (function() {
  return 3
});
function $ct_sci_Map$Map4$Map4Iterator__sci_Map$Map4__($thiz, outer) {
  if ((outer === null)) {
    throw null
  } else {
    $thiz.sci_Map$Map4$Map4Iterator__f_$outer = outer
  };
  $ct_sci_Map$MapNIterator__($thiz);
  return $thiz
}
/** @constructor */
function $c_sci_Map$Map4$Map4Iterator() {
  this.sci_Map$MapNIterator__f_current = 0;
  this.sci_Map$Map4$Map4Iterator__f_$outer = null
}
$c_sci_Map$Map4$Map4Iterator.prototype = new $h_sci_Map$MapNIterator();
$c_sci_Map$Map4$Map4Iterator.prototype.constructor = $c_sci_Map$Map4$Map4Iterator;
/** @constructor */
function $h_sci_Map$Map4$Map4Iterator() {
  /*<skip>*/
}
$h_sci_Map$Map4$Map4Iterator.prototype = $c_sci_Map$Map4$Map4Iterator.prototype;
$c_sci_Map$Map4$Map4Iterator.prototype.size__I = (function() {
  return 4
});
/** @constructor */
function $c_sci_Set$Set2$$anon$1(outer) {
  this.sci_Set$SetNIterator__f_current = 0;
  this.sci_Set$SetNIterator__f_remainder = 0;
  this.sci_Set$Set2$$anon$1__f_$outer = null;
  if ((outer === null)) {
    throw null
  } else {
    this.sci_Set$Set2$$anon$1__f_$outer = outer
  };
  $ct_sci_Set$SetNIterator__I__(this, 2)
}
$c_sci_Set$Set2$$anon$1.prototype = new $h_sci_Set$SetNIterator();
$c_sci_Set$Set2$$anon$1.prototype.constructor = $c_sci_Set$Set2$$anon$1;
/** @constructor */
function $h_sci_Set$Set2$$anon$1() {
  /*<skip>*/
}
$h_sci_Set$Set2$$anon$1.prototype = $c_sci_Set$Set2$$anon$1.prototype;
$c_sci_Set$Set2$$anon$1.prototype.apply__I__O = (function(i) {
  return this.sci_Set$Set2$$anon$1__f_$outer.scala$collection$immutable$Set$Set2$$getElem__I__O(i)
});
var $d_sci_Set$Set2$$anon$1 = new $TypeData().initClass({
  sci_Set$Set2$$anon$1: 0
}, false, "scala.collection.immutable.Set$Set2$$anon$1", {
  sci_Set$Set2$$anon$1: 1,
  sci_Set$SetNIterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Set$Set2$$anon$1.prototype.$classData = $d_sci_Set$Set2$$anon$1;
/** @constructor */
function $c_sci_Set$Set3$$anon$2(outer) {
  this.sci_Set$SetNIterator__f_current = 0;
  this.sci_Set$SetNIterator__f_remainder = 0;
  this.sci_Set$Set3$$anon$2__f_$outer = null;
  if ((outer === null)) {
    throw null
  } else {
    this.sci_Set$Set3$$anon$2__f_$outer = outer
  };
  $ct_sci_Set$SetNIterator__I__(this, 3)
}
$c_sci_Set$Set3$$anon$2.prototype = new $h_sci_Set$SetNIterator();
$c_sci_Set$Set3$$anon$2.prototype.constructor = $c_sci_Set$Set3$$anon$2;
/** @constructor */
function $h_sci_Set$Set3$$anon$2() {
  /*<skip>*/
}
$h_sci_Set$Set3$$anon$2.prototype = $c_sci_Set$Set3$$anon$2.prototype;
$c_sci_Set$Set3$$anon$2.prototype.apply__I__O = (function(i) {
  return this.sci_Set$Set3$$anon$2__f_$outer.scala$collection$immutable$Set$Set3$$getElem__I__O(i)
});
var $d_sci_Set$Set3$$anon$2 = new $TypeData().initClass({
  sci_Set$Set3$$anon$2: 0
}, false, "scala.collection.immutable.Set$Set3$$anon$2", {
  sci_Set$Set3$$anon$2: 1,
  sci_Set$SetNIterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Set$Set3$$anon$2.prototype.$classData = $d_sci_Set$Set3$$anon$2;
/** @constructor */
function $c_sci_Set$Set4$$anon$3(outer) {
  this.sci_Set$SetNIterator__f_current = 0;
  this.sci_Set$SetNIterator__f_remainder = 0;
  this.sci_Set$Set4$$anon$3__f_$outer = null;
  if ((outer === null)) {
    throw null
  } else {
    this.sci_Set$Set4$$anon$3__f_$outer = outer
  };
  $ct_sci_Set$SetNIterator__I__(this, 4)
}
$c_sci_Set$Set4$$anon$3.prototype = new $h_sci_Set$SetNIterator();
$c_sci_Set$Set4$$anon$3.prototype.constructor = $c_sci_Set$Set4$$anon$3;
/** @constructor */
function $h_sci_Set$Set4$$anon$3() {
  /*<skip>*/
}
$h_sci_Set$Set4$$anon$3.prototype = $c_sci_Set$Set4$$anon$3.prototype;
$c_sci_Set$Set4$$anon$3.prototype.apply__I__O = (function(i) {
  return this.sci_Set$Set4$$anon$3__f_$outer.scala$collection$immutable$Set$Set4$$getElem__I__O(i)
});
var $d_sci_Set$Set4$$anon$3 = new $TypeData().initClass({
  sci_Set$Set4$$anon$3: 0
}, false, "scala.collection.immutable.Set$Set4$$anon$3", {
  sci_Set$Set4$$anon$3: 1,
  sci_Set$SetNIterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Set$Set4$$anon$3.prototype.$classData = $d_sci_Set$Set4$$anon$3;
function $f_s_math_Numeric$DoubleIsConflicted__plus__D__D__D($thiz, x, y) {
  return (x + y)
}
/** @constructor */
function $c_s_math_Ordering$Int$() {
  /*<skip>*/
}
$c_s_math_Ordering$Int$.prototype = new $h_O();
$c_s_math_Ordering$Int$.prototype.constructor = $c_s_math_Ordering$Int$;
/** @constructor */
function $h_s_math_Ordering$Int$() {
  /*<skip>*/
}
$h_s_math_Ordering$Int$.prototype = $c_s_math_Ordering$Int$.prototype;
var $d_s_math_Ordering$Int$ = new $TypeData().initClass({
  s_math_Ordering$Int$: 0
}, false, "scala.math.Ordering$Int$", {
  s_math_Ordering$Int$: 1,
  O: 1,
  s_math_Ordering$IntOrdering: 1,
  s_math_Ordering: 1,
  ju_Comparator: 1,
  s_math_PartialOrdering: 1,
  s_math_Equiv: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_s_math_Ordering$Int$.prototype.$classData = $d_s_math_Ordering$Int$;
var $n_s_math_Ordering$Int$;
function $m_s_math_Ordering$Int$() {
  if ((!$n_s_math_Ordering$Int$)) {
    $n_s_math_Ordering$Int$ = new $c_s_math_Ordering$Int$()
  };
  return $n_s_math_Ordering$Int$
}
/** @constructor */
function $c_s_reflect_ManifestFactory$ClassTypeManifest() {
  /*<skip>*/
}
$c_s_reflect_ManifestFactory$ClassTypeManifest.prototype = new $h_O();
$c_s_reflect_ManifestFactory$ClassTypeManifest.prototype.constructor = $c_s_reflect_ManifestFactory$ClassTypeManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$ClassTypeManifest() {
  /*<skip>*/
}
$h_s_reflect_ManifestFactory$ClassTypeManifest.prototype = $c_s_reflect_ManifestFactory$ClassTypeManifest.prototype;
function $as_sjs_js_JavaScriptException(obj) {
  return ((false || (obj === null)) ? obj : $throwClassCastException(obj, "scala.scalajs.js.JavaScriptException"))
}
function $isArrayOf_sjs_js_JavaScriptException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sjs_js_JavaScriptException)))
}
function $asArrayOf_sjs_js_JavaScriptException(obj, depth) {
  return (($isArrayOf_sjs_js_JavaScriptException(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.scalajs.js.JavaScriptException;", depth))
}
/** @constructor */
function $c_sci_List$() {
  this.scg_GenTraversableFactory__f_ReusableCBFInstance = null;
  $ct_scg_GenTraversableFactory__(this);
  $n_sci_List$ = this;
  new $c_sci_List$$anon$1()
}
$c_sci_List$.prototype = new $h_scg_SeqFactory();
$c_sci_List$.prototype.constructor = $c_sci_List$;
/** @constructor */
function $h_sci_List$() {
  /*<skip>*/
}
$h_sci_List$.prototype = $c_sci_List$.prototype;
$c_sci_List$.prototype.newBuilder__scm_Builder = (function() {
  return new $c_scm_ListBuffer()
});
$c_sci_List$.prototype.empty__sc_GenTraversable = (function() {
  return $m_sci_Nil$()
});
var $d_sci_List$ = new $TypeData().initClass({
  sci_List$: 0
}, false, "scala.collection.immutable.List$", {
  sci_List$: 1,
  scg_SeqFactory: 1,
  scg_GenSeqFactory: 1,
  scg_GenTraversableFactory: 1,
  scg_GenericCompanion: 1,
  O: 1,
  scg_TraversableFactory: 1,
  scg_GenericSeqCompanion: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_List$.prototype.$classData = $d_sci_List$;
var $n_sci_List$;
function $m_sci_List$() {
  if ((!$n_sci_List$)) {
    $n_sci_List$ = new $c_sci_List$()
  };
  return $n_sci_List$
}
/** @constructor */
function $c_sci_Map$Map2$$anon$1(outer) {
  this.sci_Map$MapNIterator__f_current = 0;
  this.sci_Map$Map2$Map2Iterator__f_$outer = null;
  $ct_sci_Map$Map2$Map2Iterator__sci_Map$Map2__(this, outer)
}
$c_sci_Map$Map2$$anon$1.prototype = new $h_sci_Map$Map2$Map2Iterator();
$c_sci_Map$Map2$$anon$1.prototype.constructor = $c_sci_Map$Map2$$anon$1;
/** @constructor */
function $h_sci_Map$Map2$$anon$1() {
  /*<skip>*/
}
$h_sci_Map$Map2$$anon$1.prototype = $c_sci_Map$Map2$$anon$1.prototype;
$c_sci_Map$Map2$$anon$1.prototype.apply__I__T2 = (function(i) {
  return new $c_T2(this.sci_Map$Map2$Map2Iterator__f_$outer.scala$collection$immutable$Map$Map2$$_getKey__I__O(i), this.sci_Map$Map2$Map2Iterator__f_$outer.scala$collection$immutable$Map$Map2$$_getValue__I__O(i))
});
var $d_sci_Map$Map2$$anon$1 = new $TypeData().initClass({
  sci_Map$Map2$$anon$1: 0
}, false, "scala.collection.immutable.Map$Map2$$anon$1", {
  sci_Map$Map2$$anon$1: 1,
  sci_Map$Map2$Map2Iterator: 1,
  sci_Map$MapNIterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Map$Map2$$anon$1.prototype.$classData = $d_sci_Map$Map2$$anon$1;
/** @constructor */
function $c_sci_Map$Map3$$anon$4(outer) {
  this.sci_Map$MapNIterator__f_current = 0;
  this.sci_Map$Map3$Map3Iterator__f_$outer = null;
  $ct_sci_Map$Map3$Map3Iterator__sci_Map$Map3__(this, outer)
}
$c_sci_Map$Map3$$anon$4.prototype = new $h_sci_Map$Map3$Map3Iterator();
$c_sci_Map$Map3$$anon$4.prototype.constructor = $c_sci_Map$Map3$$anon$4;
/** @constructor */
function $h_sci_Map$Map3$$anon$4() {
  /*<skip>*/
}
$h_sci_Map$Map3$$anon$4.prototype = $c_sci_Map$Map3$$anon$4.prototype;
$c_sci_Map$Map3$$anon$4.prototype.apply__I__T2 = (function(i) {
  return new $c_T2(this.sci_Map$Map3$Map3Iterator__f_$outer.scala$collection$immutable$Map$Map3$$_getKey__I__O(i), this.sci_Map$Map3$Map3Iterator__f_$outer.scala$collection$immutable$Map$Map3$$_getValue__I__O(i))
});
var $d_sci_Map$Map3$$anon$4 = new $TypeData().initClass({
  sci_Map$Map3$$anon$4: 0
}, false, "scala.collection.immutable.Map$Map3$$anon$4", {
  sci_Map$Map3$$anon$4: 1,
  sci_Map$Map3$Map3Iterator: 1,
  sci_Map$MapNIterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Map$Map3$$anon$4.prototype.$classData = $d_sci_Map$Map3$$anon$4;
/** @constructor */
function $c_sci_Map$Map4$$anon$7(outer) {
  this.sci_Map$MapNIterator__f_current = 0;
  this.sci_Map$Map4$Map4Iterator__f_$outer = null;
  $ct_sci_Map$Map4$Map4Iterator__sci_Map$Map4__(this, outer)
}
$c_sci_Map$Map4$$anon$7.prototype = new $h_sci_Map$Map4$Map4Iterator();
$c_sci_Map$Map4$$anon$7.prototype.constructor = $c_sci_Map$Map4$$anon$7;
/** @constructor */
function $h_sci_Map$Map4$$anon$7() {
  /*<skip>*/
}
$h_sci_Map$Map4$$anon$7.prototype = $c_sci_Map$Map4$$anon$7.prototype;
$c_sci_Map$Map4$$anon$7.prototype.apply__I__T2 = (function(i) {
  return new $c_T2(this.sci_Map$Map4$Map4Iterator__f_$outer.scala$collection$immutable$Map$Map4$$_getKey__I__O(i), this.sci_Map$Map4$Map4Iterator__f_$outer.scala$collection$immutable$Map$Map4$$_getValue__I__O(i))
});
var $d_sci_Map$Map4$$anon$7 = new $TypeData().initClass({
  sci_Map$Map4$$anon$7: 0
}, false, "scala.collection.immutable.Map$Map4$$anon$7", {
  sci_Map$Map4$$anon$7: 1,
  sci_Map$Map4$Map4Iterator: 1,
  sci_Map$MapNIterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Map$Map4$$anon$7.prototype.$classData = $d_sci_Map$Map4$$anon$7;
/** @constructor */
function $c_sci_Stream$() {
  this.scg_GenTraversableFactory__f_ReusableCBFInstance = null;
  this.sci_Stream$__f_ReusableCBF = null;
  $ct_scg_GenTraversableFactory__(this);
  $n_sci_Stream$ = this;
  this.sci_Stream$__f_ReusableCBF = new $c_sci_Stream$StreamCanBuildFrom()
}
$c_sci_Stream$.prototype = new $h_scg_SeqFactory();
$c_sci_Stream$.prototype.constructor = $c_sci_Stream$;
/** @constructor */
function $h_sci_Stream$() {
  /*<skip>*/
}
$h_sci_Stream$.prototype = $c_sci_Stream$.prototype;
$c_sci_Stream$.prototype.newBuilder__scm_Builder = (function() {
  return new $c_sci_Stream$StreamBuilder()
});
$c_sci_Stream$.prototype.empty__sc_GenTraversable = (function() {
  return $m_sci_Stream$Empty$()
});
var $d_sci_Stream$ = new $TypeData().initClass({
  sci_Stream$: 0
}, false, "scala.collection.immutable.Stream$", {
  sci_Stream$: 1,
  scg_SeqFactory: 1,
  scg_GenSeqFactory: 1,
  scg_GenTraversableFactory: 1,
  scg_GenericCompanion: 1,
  O: 1,
  scg_TraversableFactory: 1,
  scg_GenericSeqCompanion: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Stream$.prototype.$classData = $d_sci_Stream$;
var $n_sci_Stream$;
function $m_sci_Stream$() {
  if ((!$n_sci_Stream$)) {
    $n_sci_Stream$ = new $c_sci_Stream$()
  };
  return $n_sci_Stream$
}
/** @constructor */
function $c_scm_ArrayBuffer$() {
  this.scg_GenTraversableFactory__f_ReusableCBFInstance = null;
  $ct_scg_GenTraversableFactory__(this)
}
$c_scm_ArrayBuffer$.prototype = new $h_scg_SeqFactory();
$c_scm_ArrayBuffer$.prototype.constructor = $c_scm_ArrayBuffer$;
/** @constructor */
function $h_scm_ArrayBuffer$() {
  /*<skip>*/
}
$h_scm_ArrayBuffer$.prototype = $c_scm_ArrayBuffer$.prototype;
$c_scm_ArrayBuffer$.prototype.newBuilder__scm_Builder = (function() {
  return $ct_scm_ArrayBuffer__(new $c_scm_ArrayBuffer())
});
var $d_scm_ArrayBuffer$ = new $TypeData().initClass({
  scm_ArrayBuffer$: 0
}, false, "scala.collection.mutable.ArrayBuffer$", {
  scm_ArrayBuffer$: 1,
  scg_SeqFactory: 1,
  scg_GenSeqFactory: 1,
  scg_GenTraversableFactory: 1,
  scg_GenericCompanion: 1,
  O: 1,
  scg_TraversableFactory: 1,
  scg_GenericSeqCompanion: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_scm_ArrayBuffer$.prototype.$classData = $d_scm_ArrayBuffer$;
var $n_scm_ArrayBuffer$;
function $m_scm_ArrayBuffer$() {
  if ((!$n_scm_ArrayBuffer$)) {
    $n_scm_ArrayBuffer$ = new $c_scm_ArrayBuffer$()
  };
  return $n_scm_ArrayBuffer$
}
/** @constructor */
function $c_scm_ListBuffer$() {
  this.scg_GenTraversableFactory__f_ReusableCBFInstance = null;
  $ct_scg_GenTraversableFactory__(this)
}
$c_scm_ListBuffer$.prototype = new $h_scg_SeqFactory();
$c_scm_ListBuffer$.prototype.constructor = $c_scm_ListBuffer$;
/** @constructor */
function $h_scm_ListBuffer$() {
  /*<skip>*/
}
$h_scm_ListBuffer$.prototype = $c_scm_ListBuffer$.prototype;
$c_scm_ListBuffer$.prototype.newBuilder__scm_Builder = (function() {
  return new $c_scm_GrowingBuilder(new $c_scm_ListBuffer())
});
var $d_scm_ListBuffer$ = new $TypeData().initClass({
  scm_ListBuffer$: 0
}, false, "scala.collection.mutable.ListBuffer$", {
  scm_ListBuffer$: 1,
  scg_SeqFactory: 1,
  scg_GenSeqFactory: 1,
  scg_GenTraversableFactory: 1,
  scg_GenericCompanion: 1,
  O: 1,
  scg_TraversableFactory: 1,
  scg_GenericSeqCompanion: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_scm_ListBuffer$.prototype.$classData = $d_scm_ListBuffer$;
var $n_scm_ListBuffer$;
function $m_scm_ListBuffer$() {
  if ((!$n_scm_ListBuffer$)) {
    $n_scm_ListBuffer$ = new $c_scm_ListBuffer$()
  };
  return $n_scm_ListBuffer$
}
/** @constructor */
function $c_s_reflect_ManifestFactory$PhantomManifest() {
  this.s_reflect_ManifestFactory$PhantomManifest__f_toString = null
}
$c_s_reflect_ManifestFactory$PhantomManifest.prototype = new $h_s_reflect_ManifestFactory$ClassTypeManifest();
$c_s_reflect_ManifestFactory$PhantomManifest.prototype.constructor = $c_s_reflect_ManifestFactory$PhantomManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$PhantomManifest() {
  /*<skip>*/
}
$h_s_reflect_ManifestFactory$PhantomManifest.prototype = $c_s_reflect_ManifestFactory$PhantomManifest.prototype;
$c_s_reflect_ManifestFactory$PhantomManifest.prototype.toString__T = (function() {
  return this.s_reflect_ManifestFactory$PhantomManifest__f_toString
});
$c_s_reflect_ManifestFactory$PhantomManifest.prototype.equals__O__Z = (function(that) {
  return (this === that)
});
$c_s_reflect_ManifestFactory$PhantomManifest.prototype.hashCode__I = (function() {
  return $systemIdentityHashCode(this)
});
function $f_sc_IterableLike__isEmpty__Z($thiz) {
  return (!$thiz.iterator__sc_Iterator().hasNext__Z())
}
function $f_sc_IterableLike__take__I__O($thiz, n) {
  var b = $thiz.newBuilder__scm_Builder();
  if ((n <= 0)) {
    return b.result__O()
  } else {
    b.sizeHintBounded__I__sc_TraversableLike__V(n, $thiz);
    var i = 0;
    var it = $thiz.iterator__sc_Iterator();
    while (((i < n) && it.hasNext__Z())) {
      b.$plus$eq__O__scm_Builder(it.next__O());
      i = ((1 + i) | 0)
    };
    return b.result__O()
  }
}
function $f_sc_IterableLike__drop__I__O($thiz, n) {
  var b = $thiz.newBuilder__scm_Builder();
  var lo = ((n < 0) ? 0 : n);
  var delta = ((-lo) | 0);
  $f_scm_Builder__sizeHint__sc_TraversableLike__I__V(b, $thiz, delta);
  var i = 0;
  var it = $thiz.iterator__sc_Iterator();
  while (((i < n) && it.hasNext__Z())) {
    it.next__O();
    i = ((1 + i) | 0)
  };
  return $as_scm_Builder(b.$plus$plus$eq__sc_TraversableOnce__scg_Growable(it)).result__O()
}
function $f_sc_IterableLike__sliding__I__I__sc_Iterator($thiz, size, step) {
  var this$1 = $thiz.iterator__sc_Iterator();
  var this$3 = new $c_sc_Iterator$GroupedIterator(this$1, this$1, size, step);
  var f = new $c_sjsr_AnonFunction1(((xs$2) => {
    var xs = $as_sc_Seq(xs$2);
    var b = $thiz.newBuilder__scm_Builder();
    b.$plus$plus$eq__sc_TraversableOnce__scg_Growable(xs);
    return b.result__O()
  }));
  return new $c_sc_Iterator$$anon$10(this$3, f)
}
function $f_sc_IterableLike__takeRight__I__O($thiz, n) {
  var b = $thiz.newBuilder__scm_Builder();
  b.sizeHintBounded__I__sc_TraversableLike__V(n, $thiz);
  var lead = $thiz.iterator__sc_Iterator().drop__I__sc_Iterator(n);
  var it = $thiz.iterator__sc_Iterator();
  while (lead.hasNext__Z()) {
    lead.next__O();
    it.next__O()
  };
  while (it.hasNext__Z()) {
    b.$plus$eq__O__scm_Builder(it.next__O())
  };
  return b.result__O()
}
function $f_sc_IterableLike__copyToArray__O__I__I__V($thiz, xs, start, len) {
  var i = start;
  var x = ((start + len) | 0);
  var that = $m_sr_ScalaRunTime$().array_length__O__I(xs);
  var end = ((x < that) ? x : that);
  var it = $thiz.iterator__sc_Iterator();
  while (((i < end) && it.hasNext__Z())) {
    $m_sr_ScalaRunTime$().array_update__O__I__O__V(xs, i, it.next__O());
    i = ((1 + i) | 0)
  }
}
function $f_sc_IterableLike__sameElements__sc_GenIterable__Z($thiz, that) {
  if (($thiz === that)) {
    return true
  } else {
    if ((that instanceof $c_sci_Vector)) {
      var x2 = $as_sci_Vector(that);
      if (($thiz instanceof $c_sci_Vector)) {
        var thisVector = $as_sci_Vector($thiz);
        if ((thisVector === x2)) {
          return true
        } else {
          var equal = (thisVector.length__I() === x2.length__I());
          if (equal) {
            var length = x2.length__I();
            var index = 0;
            while (((index < length) && equal)) {
              equal = $m_sr_BoxesRunTime$().equals__O__O__Z(thisVector.apply__I__O(index), x2.apply__I__O(index));
              index = ((1 + index) | 0)
            }
          };
          return equal
        }
      }
    };
    if ($is_sc_GenSet(that)) {
      var x3 = $as_sc_GenSet(that);
      if ($is_sc_GenSetLike($thiz)) {
        var thisSet = $as_sc_GenSetLike($thiz);
        return ((thisSet.size__I() === x3.size__I()) && thisSet.subsetOf__sc_GenSet__Z(x3))
      }
    };
    var these = $thiz.iterator__sc_Iterator();
    var those = that.iterator__sc_Iterator();
    while ((these.hasNext__Z() && those.hasNext__Z())) {
      if ((!$m_sr_BoxesRunTime$().equals__O__O__Z(these.next__O(), those.next__O()))) {
        return false
      }
    };
    return ((!these.hasNext__Z()) && (!those.hasNext__Z()))
  }
}
/** @constructor */
function $c_sci_Vector$() {
  this.scg_GenTraversableFactory__f_ReusableCBFInstance = null;
  this.sci_Vector$__f_NIL = null;
  this.sci_Vector$__f_scala$collection$immutable$Vector$$emptyIterator = null;
  $ct_scg_GenTraversableFactory__(this);
  $n_sci_Vector$ = this;
  this.sci_Vector$__f_NIL = new $c_sci_Vector(0, 0, 0);
  this.sci_Vector$__f_scala$collection$immutable$Vector$$emptyIterator = new $c_sci_VectorIterator(0, 0)
}
$c_sci_Vector$.prototype = new $h_scg_IndexedSeqFactory();
$c_sci_Vector$.prototype.constructor = $c_sci_Vector$;
/** @constructor */
function $h_sci_Vector$() {
  /*<skip>*/
}
$h_sci_Vector$.prototype = $c_sci_Vector$.prototype;
$c_sci_Vector$.prototype.newBuilder__scm_Builder = (function() {
  return new $c_sci_VectorBuilder()
});
$c_sci_Vector$.prototype.empty__sc_GenTraversable = (function() {
  return this.sci_Vector$__f_NIL
});
var $d_sci_Vector$ = new $TypeData().initClass({
  sci_Vector$: 0
}, false, "scala.collection.immutable.Vector$", {
  sci_Vector$: 1,
  scg_IndexedSeqFactory: 1,
  scg_SeqFactory: 1,
  scg_GenSeqFactory: 1,
  scg_GenTraversableFactory: 1,
  scg_GenericCompanion: 1,
  O: 1,
  scg_TraversableFactory: 1,
  scg_GenericSeqCompanion: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Vector$.prototype.$classData = $d_sci_Vector$;
var $n_sci_Vector$;
function $m_sci_Vector$() {
  if ((!$n_sci_Vector$)) {
    $n_sci_Vector$ = new $c_sci_Vector$()
  };
  return $n_sci_Vector$
}
/** @constructor */
function $c_s_reflect_ManifestFactory$AnyManifest$() {
  this.s_reflect_ManifestFactory$PhantomManifest__f_toString = null;
  this.s_reflect_ManifestFactory$PhantomManifest__f_toString = "Any"
}
$c_s_reflect_ManifestFactory$AnyManifest$.prototype = new $h_s_reflect_ManifestFactory$PhantomManifest();
$c_s_reflect_ManifestFactory$AnyManifest$.prototype.constructor = $c_s_reflect_ManifestFactory$AnyManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$AnyManifest$() {
  /*<skip>*/
}
$h_s_reflect_ManifestFactory$AnyManifest$.prototype = $c_s_reflect_ManifestFactory$AnyManifest$.prototype;
var $d_s_reflect_ManifestFactory$AnyManifest$ = new $TypeData().initClass({
  s_reflect_ManifestFactory$AnyManifest$: 0
}, false, "scala.reflect.ManifestFactory$AnyManifest$", {
  s_reflect_ManifestFactory$AnyManifest$: 1,
  s_reflect_ManifestFactory$PhantomManifest: 1,
  s_reflect_ManifestFactory$ClassTypeManifest: 1,
  O: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
});
$c_s_reflect_ManifestFactory$AnyManifest$.prototype.$classData = $d_s_reflect_ManifestFactory$AnyManifest$;
var $n_s_reflect_ManifestFactory$AnyManifest$;
function $m_s_reflect_ManifestFactory$AnyManifest$() {
  if ((!$n_s_reflect_ManifestFactory$AnyManifest$)) {
    $n_s_reflect_ManifestFactory$AnyManifest$ = new $c_s_reflect_ManifestFactory$AnyManifest$()
  };
  return $n_s_reflect_ManifestFactory$AnyManifest$
}
/** @constructor */
function $c_s_reflect_ManifestFactory$AnyValManifest$() {
  this.s_reflect_ManifestFactory$PhantomManifest__f_toString = null;
  this.s_reflect_ManifestFactory$PhantomManifest__f_toString = "AnyVal"
}
$c_s_reflect_ManifestFactory$AnyValManifest$.prototype = new $h_s_reflect_ManifestFactory$PhantomManifest();
$c_s_reflect_ManifestFactory$AnyValManifest$.prototype.constructor = $c_s_reflect_ManifestFactory$AnyValManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$AnyValManifest$() {
  /*<skip>*/
}
$h_s_reflect_ManifestFactory$AnyValManifest$.prototype = $c_s_reflect_ManifestFactory$AnyValManifest$.prototype;
var $d_s_reflect_ManifestFactory$AnyValManifest$ = new $TypeData().initClass({
  s_reflect_ManifestFactory$AnyValManifest$: 0
}, false, "scala.reflect.ManifestFactory$AnyValManifest$", {
  s_reflect_ManifestFactory$AnyValManifest$: 1,
  s_reflect_ManifestFactory$PhantomManifest: 1,
  s_reflect_ManifestFactory$ClassTypeManifest: 1,
  O: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
});
$c_s_reflect_ManifestFactory$AnyValManifest$.prototype.$classData = $d_s_reflect_ManifestFactory$AnyValManifest$;
var $n_s_reflect_ManifestFactory$AnyValManifest$;
function $m_s_reflect_ManifestFactory$AnyValManifest$() {
  if ((!$n_s_reflect_ManifestFactory$AnyValManifest$)) {
    $n_s_reflect_ManifestFactory$AnyValManifest$ = new $c_s_reflect_ManifestFactory$AnyValManifest$()
  };
  return $n_s_reflect_ManifestFactory$AnyValManifest$
}
/** @constructor */
function $c_s_reflect_ManifestFactory$NothingManifest$() {
  this.s_reflect_ManifestFactory$PhantomManifest__f_toString = null;
  this.s_reflect_ManifestFactory$PhantomManifest__f_toString = "Nothing"
}
$c_s_reflect_ManifestFactory$NothingManifest$.prototype = new $h_s_reflect_ManifestFactory$PhantomManifest();
$c_s_reflect_ManifestFactory$NothingManifest$.prototype.constructor = $c_s_reflect_ManifestFactory$NothingManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$NothingManifest$() {
  /*<skip>*/
}
$h_s_reflect_ManifestFactory$NothingManifest$.prototype = $c_s_reflect_ManifestFactory$NothingManifest$.prototype;
var $d_s_reflect_ManifestFactory$NothingManifest$ = new $TypeData().initClass({
  s_reflect_ManifestFactory$NothingManifest$: 0
}, false, "scala.reflect.ManifestFactory$NothingManifest$", {
  s_reflect_ManifestFactory$NothingManifest$: 1,
  s_reflect_ManifestFactory$PhantomManifest: 1,
  s_reflect_ManifestFactory$ClassTypeManifest: 1,
  O: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
});
$c_s_reflect_ManifestFactory$NothingManifest$.prototype.$classData = $d_s_reflect_ManifestFactory$NothingManifest$;
var $n_s_reflect_ManifestFactory$NothingManifest$;
function $m_s_reflect_ManifestFactory$NothingManifest$() {
  if ((!$n_s_reflect_ManifestFactory$NothingManifest$)) {
    $n_s_reflect_ManifestFactory$NothingManifest$ = new $c_s_reflect_ManifestFactory$NothingManifest$()
  };
  return $n_s_reflect_ManifestFactory$NothingManifest$
}
/** @constructor */
function $c_s_reflect_ManifestFactory$NullManifest$() {
  this.s_reflect_ManifestFactory$PhantomManifest__f_toString = null;
  this.s_reflect_ManifestFactory$PhantomManifest__f_toString = "Null"
}
$c_s_reflect_ManifestFactory$NullManifest$.prototype = new $h_s_reflect_ManifestFactory$PhantomManifest();
$c_s_reflect_ManifestFactory$NullManifest$.prototype.constructor = $c_s_reflect_ManifestFactory$NullManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$NullManifest$() {
  /*<skip>*/
}
$h_s_reflect_ManifestFactory$NullManifest$.prototype = $c_s_reflect_ManifestFactory$NullManifest$.prototype;
var $d_s_reflect_ManifestFactory$NullManifest$ = new $TypeData().initClass({
  s_reflect_ManifestFactory$NullManifest$: 0
}, false, "scala.reflect.ManifestFactory$NullManifest$", {
  s_reflect_ManifestFactory$NullManifest$: 1,
  s_reflect_ManifestFactory$PhantomManifest: 1,
  s_reflect_ManifestFactory$ClassTypeManifest: 1,
  O: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
});
$c_s_reflect_ManifestFactory$NullManifest$.prototype.$classData = $d_s_reflect_ManifestFactory$NullManifest$;
var $n_s_reflect_ManifestFactory$NullManifest$;
function $m_s_reflect_ManifestFactory$NullManifest$() {
  if ((!$n_s_reflect_ManifestFactory$NullManifest$)) {
    $n_s_reflect_ManifestFactory$NullManifest$ = new $c_s_reflect_ManifestFactory$NullManifest$()
  };
  return $n_s_reflect_ManifestFactory$NullManifest$
}
/** @constructor */
function $c_s_reflect_ManifestFactory$ObjectManifest$() {
  this.s_reflect_ManifestFactory$PhantomManifest__f_toString = null;
  this.s_reflect_ManifestFactory$PhantomManifest__f_toString = "Object"
}
$c_s_reflect_ManifestFactory$ObjectManifest$.prototype = new $h_s_reflect_ManifestFactory$PhantomManifest();
$c_s_reflect_ManifestFactory$ObjectManifest$.prototype.constructor = $c_s_reflect_ManifestFactory$ObjectManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$ObjectManifest$() {
  /*<skip>*/
}
$h_s_reflect_ManifestFactory$ObjectManifest$.prototype = $c_s_reflect_ManifestFactory$ObjectManifest$.prototype;
var $d_s_reflect_ManifestFactory$ObjectManifest$ = new $TypeData().initClass({
  s_reflect_ManifestFactory$ObjectManifest$: 0
}, false, "scala.reflect.ManifestFactory$ObjectManifest$", {
  s_reflect_ManifestFactory$ObjectManifest$: 1,
  s_reflect_ManifestFactory$PhantomManifest: 1,
  s_reflect_ManifestFactory$ClassTypeManifest: 1,
  O: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
});
$c_s_reflect_ManifestFactory$ObjectManifest$.prototype.$classData = $d_s_reflect_ManifestFactory$ObjectManifest$;
var $n_s_reflect_ManifestFactory$ObjectManifest$;
function $m_s_reflect_ManifestFactory$ObjectManifest$() {
  if ((!$n_s_reflect_ManifestFactory$ObjectManifest$)) {
    $n_s_reflect_ManifestFactory$ObjectManifest$ = new $c_s_reflect_ManifestFactory$ObjectManifest$()
  };
  return $n_s_reflect_ManifestFactory$ObjectManifest$
}
/** @constructor */
function $c_sc_AbstractTraversable() {
  /*<skip>*/
}
$c_sc_AbstractTraversable.prototype = new $h_O();
$c_sc_AbstractTraversable.prototype.constructor = $c_sc_AbstractTraversable;
/** @constructor */
function $h_sc_AbstractTraversable() {
  /*<skip>*/
}
$h_sc_AbstractTraversable.prototype = $c_sc_AbstractTraversable.prototype;
$c_sc_AbstractTraversable.prototype.newBuilder__scm_Builder = (function() {
  return this.companion__scg_GenericCompanion().newBuilder__scm_Builder()
});
$c_sc_AbstractTraversable.prototype.flatten__F1__sc_GenTraversable = (function(asTraversable) {
  return $f_scg_GenericTraversableTemplate__flatten__F1__sc_GenTraversable(this, asTraversable)
});
$c_sc_AbstractTraversable.prototype.repr__O = (function() {
  return this
});
$c_sc_AbstractTraversable.prototype.isTraversableAgain__Z = (function() {
  return true
});
$c_sc_AbstractTraversable.prototype.$plus$plus__sc_GenTraversableOnce__scg_CanBuildFrom__O = (function(that, bf) {
  return $f_sc_TraversableLike__$plus$plus__sc_GenTraversableOnce__scg_CanBuildFrom__O(this, that, bf)
});
$c_sc_AbstractTraversable.prototype.map__F1__scg_CanBuildFrom__O = (function(f, bf) {
  return $f_sc_TraversableLike__map__F1__scg_CanBuildFrom__O(this, f, bf)
});
$c_sc_AbstractTraversable.prototype.flatMap__F1__scg_CanBuildFrom__O = (function(f, bf) {
  return $f_sc_TraversableLike__flatMap__F1__scg_CanBuildFrom__O(this, f, bf)
});
$c_sc_AbstractTraversable.prototype.tail__O = (function() {
  return $f_sc_TraversableLike__tail__O(this)
});
$c_sc_AbstractTraversable.prototype.init__O = (function() {
  return $f_sc_TraversableLike__init__O(this)
});
$c_sc_AbstractTraversable.prototype.stringPrefix__T = (function() {
  return $f_sc_TraversableLike__stringPrefix__T(this)
});
$c_sc_AbstractTraversable.prototype.$div$colon__O__F2__O = (function(z, op) {
  return this.foldLeft__O__F2__O(z, op)
});
$c_sc_AbstractTraversable.prototype.foldLeft__O__F2__O = (function(z, op) {
  return $f_sc_TraversableOnce__foldLeft__O__F2__O(this, z, op)
});
$c_sc_AbstractTraversable.prototype.toList__sci_List = (function() {
  var this$1 = $m_sci_List$();
  var cbf = this$1.scg_GenTraversableFactory__f_ReusableCBFInstance;
  return $as_sci_List($f_sc_TraversableLike__to__scg_CanBuildFrom__O(this, cbf))
});
$c_sc_AbstractTraversable.prototype.toVector__sci_Vector = (function() {
  var this$1 = $m_sci_Vector$();
  var cbf = this$1.scg_GenTraversableFactory__f_ReusableCBFInstance;
  return $as_sci_Vector($f_sc_TraversableLike__to__scg_CanBuildFrom__O(this, cbf))
});
$c_sc_AbstractTraversable.prototype.mkString__T__T__T__T = (function(start, sep, end) {
  return $f_sc_TraversableOnce__mkString__T__T__T__T(this, start, sep, end)
});
$c_sc_AbstractTraversable.prototype.addString__scm_StringBuilder__T__T__T__scm_StringBuilder = (function(b, start, sep, end) {
  return $f_sc_TraversableOnce__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end)
});
$c_sc_AbstractTraversable.prototype.sizeHintIfCheap__I = (function() {
  return (-1)
});
function $is_sc_GenMap(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_GenMap)))
}
function $as_sc_GenMap(obj) {
  return (($is_sc_GenMap(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.GenMap"))
}
function $isArrayOf_sc_GenMap(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_GenMap)))
}
function $asArrayOf_sc_GenMap(obj, depth) {
  return (($isArrayOf_sc_GenMap(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.GenMap;", depth))
}
function $is_sc_GenSeq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_GenSeq)))
}
function $as_sc_GenSeq(obj) {
  return (($is_sc_GenSeq(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.GenSeq"))
}
function $isArrayOf_sc_GenSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_GenSeq)))
}
function $asArrayOf_sc_GenSeq(obj, depth) {
  return (($isArrayOf_sc_GenSeq(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.GenSeq;", depth))
}
function $f_sc_SeqLike__lengthCompare__I__I($thiz, len) {
  if ((len < 0)) {
    return 1
  } else {
    var i = 0;
    var it = $thiz.iterator__sc_Iterator();
    while (it.hasNext__Z()) {
      if ((i === len)) {
        return (it.hasNext__Z() ? 1 : 0)
      };
      it.next__O();
      i = ((1 + i) | 0)
    };
    return ((i - len) | 0)
  }
}
function $f_sc_SeqLike__isEmpty__Z($thiz) {
  return ($thiz.lengthCompare__I__I(0) === 0)
}
function $f_sc_SeqLike__reverse__O($thiz) {
  var elem = $m_sci_Nil$();
  var xs = new $c_sr_ObjectRef(elem);
  $thiz.foreach__F1__V(new $c_sjsr_AnonFunction1(((x$2) => {
    var this$3 = $as_sci_List(xs.sr_ObjectRef__f_elem);
    xs.sr_ObjectRef__f_elem = new $c_sci_$colon$colon(x$2, this$3)
  })));
  var b = $thiz.newBuilder__scm_Builder();
  $f_scm_Builder__sizeHint__sc_TraversableLike__V(b, $thiz);
  var this$4 = $as_sci_List(xs.sr_ObjectRef__f_elem);
  var these = this$4;
  while ((!these.isEmpty__Z())) {
    var arg1 = these.head__O();
    b.$plus$eq__O__scm_Builder(arg1);
    these = $as_sci_List(these.tail__O())
  };
  return b.result__O()
}
function $f_sc_SeqLike__$plus$colon__O__scg_CanBuildFrom__O($thiz, elem, bf) {
  var b = bf.apply__O__scm_Builder($thiz.repr__O());
  b.$plus$eq__O__scm_Builder(elem);
  b.$plus$plus$eq__sc_TraversableOnce__scg_Growable($thiz.thisCollection__sc_Seq());
  return b.result__O()
}
function $f_sc_SeqLike__$colon$plus__O__scg_CanBuildFrom__O($thiz, elem, bf) {
  var b = bf.apply__O__scm_Builder($thiz.repr__O());
  b.$plus$plus$eq__sc_TraversableOnce__scg_Growable($thiz.thisCollection__sc_Seq());
  b.$plus$eq__O__scm_Builder(elem);
  return b.result__O()
}
function $is_sc_SeqLike(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_SeqLike)))
}
function $as_sc_SeqLike(obj) {
  return (($is_sc_SeqLike(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.SeqLike"))
}
function $isArrayOf_sc_SeqLike(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_SeqLike)))
}
function $asArrayOf_sc_SeqLike(obj, depth) {
  return (($isArrayOf_sc_SeqLike(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.SeqLike;", depth))
}
/** @constructor */
function $c_s_math_Numeric$DoubleIsFractional$() {
  /*<skip>*/
}
$c_s_math_Numeric$DoubleIsFractional$.prototype = new $h_O();
$c_s_math_Numeric$DoubleIsFractional$.prototype.constructor = $c_s_math_Numeric$DoubleIsFractional$;
/** @constructor */
function $h_s_math_Numeric$DoubleIsFractional$() {
  /*<skip>*/
}
$h_s_math_Numeric$DoubleIsFractional$.prototype = $c_s_math_Numeric$DoubleIsFractional$.prototype;
$c_s_math_Numeric$DoubleIsFractional$.prototype.fromInt__I__O = (function(x) {
  return x
});
$c_s_math_Numeric$DoubleIsFractional$.prototype.plus__O__O__O = (function(x, y) {
  var x$1 = $uD(x);
  var y$1 = $uD(y);
  return $f_s_math_Numeric$DoubleIsConflicted__plus__D__D__D(this, x$1, y$1)
});
var $d_s_math_Numeric$DoubleIsFractional$ = new $TypeData().initClass({
  s_math_Numeric$DoubleIsFractional$: 0
}, false, "scala.math.Numeric$DoubleIsFractional$", {
  s_math_Numeric$DoubleIsFractional$: 1,
  O: 1,
  s_math_Numeric$DoubleIsFractional: 1,
  s_math_Numeric$DoubleIsConflicted: 1,
  s_math_Numeric: 1,
  s_math_Ordering: 1,
  ju_Comparator: 1,
  s_math_PartialOrdering: 1,
  s_math_Equiv: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1,
  s_math_Fractional: 1,
  s_math_Ordering$DoubleOrdering: 1
});
$c_s_math_Numeric$DoubleIsFractional$.prototype.$classData = $d_s_math_Numeric$DoubleIsFractional$;
var $n_s_math_Numeric$DoubleIsFractional$;
function $m_s_math_Numeric$DoubleIsFractional$() {
  if ((!$n_s_math_Numeric$DoubleIsFractional$)) {
    $n_s_math_Numeric$DoubleIsFractional$ = new $c_s_math_Numeric$DoubleIsFractional$()
  };
  return $n_s_math_Numeric$DoubleIsFractional$
}
function $is_sc_GenSet(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_GenSet)))
}
function $as_sc_GenSet(obj) {
  return (($is_sc_GenSet(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.GenSet"))
}
function $isArrayOf_sc_GenSet(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_GenSet)))
}
function $asArrayOf_sc_GenSet(obj, depth) {
  return (($isArrayOf_sc_GenSet(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.GenSet;", depth))
}
function $f_sc_IndexedSeqLike__iterator__sc_Iterator($thiz) {
  var len = $thiz.length__I();
  return ((len === 0) ? $m_sc_Iterator$().sc_Iterator$__f_empty : new $c_sc_IndexedSeqLike$Elements($thiz, 0, $thiz.length__I()))
}
function $is_sc_IndexedSeqLike(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_IndexedSeqLike)))
}
function $as_sc_IndexedSeqLike(obj) {
  return (($is_sc_IndexedSeqLike(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.IndexedSeqLike"))
}
function $isArrayOf_sc_IndexedSeqLike(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_IndexedSeqLike)))
}
function $asArrayOf_sc_IndexedSeqLike(obj, depth) {
  return (($isArrayOf_sc_IndexedSeqLike(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.IndexedSeqLike;", depth))
}
function $f_sc_LinearSeqLike__iterator__sc_Iterator($thiz) {
  return ($thiz.isEmpty__Z() ? $m_sc_Iterator$().sc_Iterator$__f_empty : new $c_sc_LinearSeqLike$$anon$1($thiz))
}
function $is_sc_LinearSeqLike(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_LinearSeqLike)))
}
function $as_sc_LinearSeqLike(obj) {
  return (($is_sc_LinearSeqLike(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.LinearSeqLike"))
}
function $isArrayOf_sc_LinearSeqLike(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_LinearSeqLike)))
}
function $asArrayOf_sc_LinearSeqLike(obj, depth) {
  return (($isArrayOf_sc_LinearSeqLike(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.LinearSeqLike;", depth))
}
function $f_sc_IndexedSeqOptimized__isEmpty__Z($thiz) {
  return ($thiz.length__I() === 0)
}
function $f_sc_IndexedSeqOptimized__foreach__F1__V($thiz, f) {
  var i = 0;
  var len = $thiz.length__I();
  while ((i < len)) {
    f.apply__O__O($thiz.apply__I__O(i));
    i = ((1 + i) | 0)
  }
}
function $p_sc_IndexedSeqOptimized__foldl__I__I__O__F2__O($thiz, start, end, z, op) {
  while (true) {
    if ((start === end)) {
      return z
    } else {
      var temp$start = ((1 + start) | 0);
      var temp$z = op.apply__O__O__O(z, $thiz.apply__I__O(start));
      start = temp$start;
      z = temp$z
    }
  }
}
function $f_sc_IndexedSeqOptimized__slice__I__I__O($thiz, from, until) {
  var lo = ((from > 0) ? from : 0);
  var x = ((until > 0) ? until : 0);
  var y = $thiz.length__I();
  var hi = ((x < y) ? x : y);
  var x$1 = ((hi - lo) | 0);
  var elems = ((x$1 > 0) ? x$1 : 0);
  var b = $thiz.newBuilder__scm_Builder();
  b.sizeHint__I__V(elems);
  var i = lo;
  while ((i < hi)) {
    b.$plus$eq__O__scm_Builder($thiz.apply__I__O(i));
    i = ((1 + i) | 0)
  };
  return b.result__O()
}
function $f_sc_IndexedSeqOptimized__head__O($thiz) {
  return ($thiz.isEmpty__Z() ? $f_sc_IndexedSeqLike__iterator__sc_Iterator($thiz).next__O() : $thiz.apply__I__O(0))
}
function $f_sc_IndexedSeqOptimized__tail__O($thiz) {
  return ($thiz.isEmpty__Z() ? $f_sc_TraversableLike__tail__O($thiz) : $thiz.slice__I__I__O(1, $thiz.length__I()))
}
function $f_sc_IndexedSeqOptimized__init__O($thiz) {
  return (($thiz.length__I() > 0) ? $thiz.slice__I__I__O(0, (((-1) + $thiz.length__I()) | 0)) : $f_sc_TraversableLike__init__O($thiz))
}
function $f_sc_IndexedSeqOptimized__takeRight__I__O($thiz, n) {
  return $thiz.slice__I__I__O((($thiz.length__I() - ((n > 0) ? n : 0)) | 0), $thiz.length__I())
}
function $f_sc_IndexedSeqOptimized__sameElements__sc_GenIterable__Z($thiz, that) {
  if ($is_sc_IndexedSeq(that)) {
    var x2 = $as_sc_IndexedSeq(that);
    var len = $thiz.length__I();
    if ((len === x2.length__I())) {
      var i = 0;
      while (((i < len) && $m_sr_BoxesRunTime$().equals__O__O__Z($thiz.apply__I__O(i), x2.apply__I__O(i)))) {
        i = ((1 + i) | 0)
      };
      return (i === len)
    } else {
      return false
    }
  } else {
    return $f_sc_IterableLike__sameElements__sc_GenIterable__Z($thiz, that)
  }
}
function $f_sc_IndexedSeqOptimized__copyToArray__O__I__I__V($thiz, xs, start, len) {
  var i = 0;
  var j = start;
  var x = $thiz.length__I();
  var x$1 = ((x < len) ? x : len);
  var that = (($m_sr_ScalaRunTime$().array_length__O__I(xs) - start) | 0);
  var end = ((x$1 < that) ? x$1 : that);
  while ((i < end)) {
    $m_sr_ScalaRunTime$().array_update__O__I__O__V(xs, j, $thiz.apply__I__O(i));
    i = ((1 + i) | 0);
    j = ((1 + j) | 0)
  }
}
function $f_sc_IndexedSeqOptimized__lengthCompare__I__I($thiz, len) {
  return (($thiz.length__I() - len) | 0)
}
function $f_sc_IndexedSeqOptimized__reverse__O($thiz) {
  var b = $thiz.newBuilder__scm_Builder();
  b.sizeHint__I__V($thiz.length__I());
  var i = $thiz.length__I();
  while ((i > 0)) {
    i = (((-1) + i) | 0);
    b.$plus$eq__O__scm_Builder($thiz.apply__I__O(i))
  };
  return b.result__O()
}
function $f_sc_IndexedSeqOptimized__toList__sci_List($thiz) {
  var i = (((-1) + $thiz.length__I()) | 0);
  var result = $m_sci_Nil$();
  while ((i >= 0)) {
    var this$1 = result;
    var x = $thiz.apply__I__O(i);
    result = new $c_sci_$colon$colon(x, this$1);
    i = (((-1) + i) | 0)
  };
  return result
}
function $f_sc_LinearSeqOptimized__length__I($thiz) {
  var these = $thiz;
  var len = 0;
  while ((!these.isEmpty__Z())) {
    len = ((1 + len) | 0);
    these = $as_sc_LinearSeqOptimized(these.tail__O())
  };
  return len
}
function $f_sc_LinearSeqOptimized__apply__I__O($thiz, n) {
  var rest = $thiz.drop__I__sc_LinearSeqOptimized(n);
  if (((n < 0) || rest.isEmpty__Z())) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n))
  };
  return rest.head__O()
}
function $f_sc_LinearSeqOptimized__foldLeft__O__F2__O($thiz, z, op) {
  var acc = z;
  var these = $thiz;
  while ((!these.isEmpty__Z())) {
    acc = op.apply__O__O__O(acc, these.head__O());
    these = $as_sc_LinearSeqOptimized(these.tail__O())
  };
  return acc
}
function $f_sc_LinearSeqOptimized__last__O($thiz) {
  if ($thiz.isEmpty__Z()) {
    throw $ct_ju_NoSuchElementException__(new $c_ju_NoSuchElementException())
  };
  var these = $thiz;
  var nx = $as_sc_LinearSeqOptimized(these.tail__O());
  while ((!nx.isEmpty__Z())) {
    these = nx;
    nx = $as_sc_LinearSeqOptimized(nx.tail__O())
  };
  return these.head__O()
}
function $f_sc_LinearSeqOptimized__sameElements__sc_GenIterable__Z($thiz, that) {
  if ($is_sc_LinearSeq(that)) {
    var x2 = $as_sc_LinearSeq(that);
    if (($thiz === x2)) {
      return true
    } else {
      var these = $thiz;
      var those = x2;
      while ((((!these.isEmpty__Z()) && (!those.isEmpty__Z())) && $m_sr_BoxesRunTime$().equals__O__O__Z(these.head__O(), those.head__O()))) {
        these = $as_sc_LinearSeqOptimized(these.tail__O());
        those = $as_sc_LinearSeq(those.tail__O())
      };
      return (these.isEmpty__Z() && those.isEmpty__Z())
    }
  } else {
    return $f_sc_IterableLike__sameElements__sc_GenIterable__Z($thiz, that)
  }
}
function $f_sc_LinearSeqOptimized__lengthCompare__I__I($thiz, len) {
  return ((len < 0) ? 1 : $p_sc_LinearSeqOptimized__loop$1__I__sc_LinearSeqOptimized__I__I($thiz, 0, $thiz, len))
}
function $p_sc_LinearSeqOptimized__loop$1__I__sc_LinearSeqOptimized__I__I($thiz, i, xs, len$1) {
  while (true) {
    if ((i === len$1)) {
      return (xs.isEmpty__Z() ? 0 : 1)
    } else if (xs.isEmpty__Z()) {
      return (-1)
    } else {
      var temp$i = ((1 + i) | 0);
      var temp$xs = $as_sc_LinearSeqOptimized(xs.tail__O());
      i = temp$i;
      xs = temp$xs
    }
  }
}
function $is_sc_LinearSeqOptimized(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_LinearSeqOptimized)))
}
function $as_sc_LinearSeqOptimized(obj) {
  return (($is_sc_LinearSeqOptimized(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.LinearSeqOptimized"))
}
function $isArrayOf_sc_LinearSeqOptimized(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_LinearSeqOptimized)))
}
function $asArrayOf_sc_LinearSeqOptimized(obj, depth) {
  return (($isArrayOf_sc_LinearSeqOptimized(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.LinearSeqOptimized;", depth))
}
function $f_sc_SetLike__$plus$plus__sc_GenTraversableOnce__sc_Set($thiz, elems) {
  if (($thiz === ($m_sci_Set$(), $m_sci_Set$EmptySet$()))) {
    if ((elems instanceof $c_sci_HashSet)) {
      var x2 = $as_sci_HashSet(elems);
      if ((x2.size__I() > 4)) {
        return x2
      }
    };
    if ((elems instanceof $c_sci_Set$Set1)) {
      var x3 = $as_sci_Set$Set1(elems);
      return x3
    };
    if ((elems instanceof $c_sci_Set$Set2)) {
      var x4 = $as_sci_Set$Set2(elems);
      return x4
    };
    if ((elems instanceof $c_sci_Set$Set3)) {
      var x5 = $as_sci_Set$Set3(elems);
      return x5
    };
    if ((elems instanceof $c_sci_Set$Set4)) {
      var x6 = $as_sci_Set$Set4(elems);
      return x6
    };
    if (elems.isEmpty__Z()) {
      return $as_sc_Set($thiz)
    } else {
      var x$3 = $as_sc_Set($thiz);
      return $as_sc_Set(elems.seq__sc_TraversableOnce().$div$colon__O__F2__O(x$3, new $c_sjsr_AnonFunction2(((x$4$2, x$5$2) => {
        var x$4 = $as_sc_Set(x$4$2);
        return x$4.$plus__O__sc_Set(x$5$2)
      }))))
    }
  } else if (($thiz instanceof $c_sci_HashSet)) {
    var x2$2 = $as_sci_HashSet($thiz);
    if ($is_sc_GenSet(elems)) {
      var x2$3 = $as_sc_GenSet(elems);
      return x2$2.union__sc_GenSet__sci_HashSet(x2$3)
    } else {
      var x$6 = $as_sc_Set($thiz);
      return $as_sc_Set(elems.seq__sc_TraversableOnce().$div$colon__O__F2__O(x$6, new $c_sjsr_AnonFunction2(((x$7$2, x$8$2) => {
        var x$7 = $as_sc_Set(x$7$2);
        return x$7.$plus__O__sc_Set(x$8$2)
      }))))
    }
  } else if (false) {
    var x3$2 = $as_sci_TreeSet($thiz);
    if (false) {
      var x2$4 = $as_sci_TreeSet(elems);
      var x = x3$2.ordering__s_math_Ordering();
      var x$2 = x2$4.ordering__s_math_Ordering();
      if (((x === null) ? (x$2 === null) : x.equals__O__Z(x$2))) {
        return x3$2.addAllTreeSetImpl__sci_TreeSet__sci_TreeSet(x2$4)
      }
    };
    var x$9 = $as_sc_Set($thiz);
    return $as_sc_Set(elems.seq__sc_TraversableOnce().$div$colon__O__F2__O(x$9, new $c_sjsr_AnonFunction2(((x$10$2, x$11$2) => {
      var x$10 = $as_sc_Set(x$10$2);
      return x$10.$plus__O__sc_Set(x$11$2)
    }))))
  } else {
    var x$12 = $as_sc_Set($thiz);
    return $as_sc_Set(elems.seq__sc_TraversableOnce().$div$colon__O__F2__O(x$12, new $c_sjsr_AnonFunction2(((x$13$2, x$14$2) => {
      var x$13 = $as_sc_Set(x$13$2);
      return x$13.$plus__O__sc_Set(x$14$2)
    }))))
  }
}
function $f_sc_SetLike__isEmpty__Z($thiz) {
  return ($thiz.size__I() === 0)
}
function $f_sc_MapLike__isEmpty__Z($thiz) {
  return ($thiz.size__I() === 0)
}
function $f_sc_MapLike__getOrElse__O__F0__O($thiz, key, default$1) {
  var x1 = $thiz.get__O__s_Option(key);
  if ((x1 instanceof $c_s_Some)) {
    var x2 = $as_s_Some(x1);
    var v = x2.s_Some__f_value;
    return v
  } else {
    var x = $m_s_None$();
    if ((x === x1)) {
      return default$1.apply__O()
    } else {
      throw new $c_s_MatchError(x1)
    }
  }
}
function $f_sc_MapLike__apply__O__O($thiz, key) {
  var x1 = $thiz.get__O__s_Option(key);
  var x = $m_s_None$();
  if ((x === x1)) {
    return $f_sc_MapLike__default__O__O($thiz, key)
  } else if ((x1 instanceof $c_s_Some)) {
    var x2 = $as_s_Some(x1);
    var value = x2.s_Some__f_value;
    return value
  } else {
    throw new $c_s_MatchError(x1)
  }
}
function $f_sc_MapLike__contains__O__Z($thiz, key) {
  var this$1 = $thiz.get__O__s_Option(key);
  return (!this$1.isEmpty__Z())
}
function $f_sc_MapLike__default__O__O($thiz, key) {
  throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), ("key not found: " + key))
}
function $f_sc_MapLike__addString__scm_StringBuilder__T__T__T__scm_StringBuilder($thiz, b, start, sep, end) {
  var this$3 = $thiz.iterator__sc_Iterator();
  var f = new $c_sjsr_AnonFunction1(((x0$1$2) => {
    var x0$1 = $as_T2(x0$1$2);
    if ((x0$1 !== null)) {
      var k = x0$1.T2__f__1;
      var v = x0$1.T2__f__2;
      return (("" + $m_s_Predef$any2stringadd$().$plus$extension__O__T__T(k, " -> ")) + v)
    } else {
      throw new $c_s_MatchError(x0$1)
    }
  }));
  var this$4 = new $c_sc_Iterator$$anon$10(this$3, f);
  return $f_sc_TraversableOnce__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this$4, b, start, sep, end)
}
/** @constructor */
function $c_sjs_js_IterableOps(self) {
  this.sjs_js_IterableOps__f_scala$scalajs$js$IterableOps$$self = null;
  this.sjs_js_IterableOps__f_scala$scalajs$js$IterableOps$$self = self
}
$c_sjs_js_IterableOps.prototype = new $h_O();
$c_sjs_js_IterableOps.prototype.constructor = $c_sjs_js_IterableOps;
/** @constructor */
function $h_sjs_js_IterableOps() {
  /*<skip>*/
}
$h_sjs_js_IterableOps.prototype = $c_sjs_js_IterableOps.prototype;
$c_sjs_js_IterableOps.prototype.companion__scg_GenericCompanion = (function() {
  return $m_sc_Iterable$()
});
$c_sjs_js_IterableOps.prototype.foreach__F1__V = (function(f) {
  var self = this.sjs_js_IterableOps__f_scala$scalajs$js$IterableOps$$self[Symbol.iterator]();
  var scala$scalajs$js$Iterator$WrappedIterator$$lastEntry = null;
  scala$scalajs$js$Iterator$WrappedIterator$$lastEntry = self.next();
  while ((!$uZ(scala$scalajs$js$Iterator$WrappedIterator$$lastEntry.done))) {
    var value = scala$scalajs$js$Iterator$WrappedIterator$$lastEntry.value;
    scala$scalajs$js$Iterator$WrappedIterator$$lastEntry = self.next();
    f.apply__O__O(value)
  }
});
$c_sjs_js_IterableOps.prototype.isEmpty__Z = (function() {
  return $f_sc_IterableLike__isEmpty__Z(this)
});
$c_sjs_js_IterableOps.prototype.head__O = (function() {
  var self = this.sjs_js_IterableOps__f_scala$scalajs$js$IterableOps$$self[Symbol.iterator]();
  var scala$scalajs$js$Iterator$WrappedIterator$$lastEntry = null;
  scala$scalajs$js$Iterator$WrappedIterator$$lastEntry = self.next();
  var value = scala$scalajs$js$Iterator$WrappedIterator$$lastEntry.value;
  scala$scalajs$js$Iterator$WrappedIterator$$lastEntry = self.next();
  return value
});
$c_sjs_js_IterableOps.prototype.drop__I__O = (function(n) {
  return $f_sc_IterableLike__drop__I__O(this, n)
});
$c_sjs_js_IterableOps.prototype.toStream__sci_Stream = (function() {
  var self = this.sjs_js_IterableOps__f_scala$scalajs$js$IterableOps$$self[Symbol.iterator]();
  var this$3 = new $c_sjs_js_Iterator$WrappedIterator(self);
  return $f_sc_Iterator__toStream__sci_Stream(this$3)
});
$c_sjs_js_IterableOps.prototype.newBuilder__scm_Builder = (function() {
  $m_sc_Iterable$();
  $m_sci_Iterable$();
  return new $c_scm_ListBuffer()
});
$c_sjs_js_IterableOps.prototype.flatten__F1__sc_GenTraversable = (function(asTraversable) {
  return $f_scg_GenericTraversableTemplate__flatten__F1__sc_GenTraversable(this, asTraversable)
});
$c_sjs_js_IterableOps.prototype.repr__O = (function() {
  return this
});
$c_sjs_js_IterableOps.prototype.isTraversableAgain__Z = (function() {
  return true
});
$c_sjs_js_IterableOps.prototype.$plus$plus__sc_GenTraversableOnce__scg_CanBuildFrom__O = (function(that, bf) {
  return $f_sc_TraversableLike__$plus$plus__sc_GenTraversableOnce__scg_CanBuildFrom__O(this, that, bf)
});
$c_sjs_js_IterableOps.prototype.toString__T = (function() {
  return $f_sc_TraversableLike__toString__T(this)
});
$c_sjs_js_IterableOps.prototype.stringPrefix__T = (function() {
  return $f_sc_TraversableLike__stringPrefix__T(this)
});
$c_sjs_js_IterableOps.prototype.size__I = (function() {
  return $f_sc_TraversableOnce__size__I(this)
});
$c_sjs_js_IterableOps.prototype.$div$colon__O__F2__O = (function(z, op) {
  return $f_sc_TraversableOnce__foldLeft__O__F2__O(this, z, op)
});
$c_sjs_js_IterableOps.prototype.foldLeft__O__F2__O = (function(z, op) {
  return $f_sc_TraversableOnce__foldLeft__O__F2__O(this, z, op)
});
$c_sjs_js_IterableOps.prototype.toList__sci_List = (function() {
  var this$1 = $m_sci_List$();
  var cbf = this$1.scg_GenTraversableFactory__f_ReusableCBFInstance;
  return $as_sci_List($f_sc_TraversableLike__to__scg_CanBuildFrom__O(this, cbf))
});
$c_sjs_js_IterableOps.prototype.toVector__sci_Vector = (function() {
  var this$1 = $m_sci_Vector$();
  var cbf = this$1.scg_GenTraversableFactory__f_ReusableCBFInstance;
  return $as_sci_Vector($f_sc_TraversableLike__to__scg_CanBuildFrom__O(this, cbf))
});
$c_sjs_js_IterableOps.prototype.mkString__T__T__T__T = (function(start, sep, end) {
  return $f_sc_TraversableOnce__mkString__T__T__T__T(this, start, sep, end)
});
$c_sjs_js_IterableOps.prototype.addString__scm_StringBuilder__T__T__T__scm_StringBuilder = (function(b, start, sep, end) {
  return $f_sc_TraversableOnce__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end)
});
$c_sjs_js_IterableOps.prototype.sizeHintIfCheap__I = (function() {
  return (-1)
});
$c_sjs_js_IterableOps.prototype.iterator__sc_Iterator = (function() {
  var self = this.sjs_js_IterableOps__f_scala$scalajs$js$IterableOps$$self[Symbol.iterator]();
  return new $c_sjs_js_Iterator$WrappedIterator(self)
});
$c_sjs_js_IterableOps.prototype.thisCollection__sc_Traversable = (function() {
  return this
});
$c_sjs_js_IterableOps.prototype.seq__sc_TraversableOnce = (function() {
  return this
});
var $d_sjs_js_IterableOps = new $TypeData().initClass({
  sjs_js_IterableOps: 0
}, false, "scala.scalajs.js.IterableOps", {
  sjs_js_IterableOps: 1,
  O: 1,
  sc_Iterable: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1
});
$c_sjs_js_IterableOps.prototype.$classData = $d_sjs_js_IterableOps;
/** @constructor */
function $c_sc_AbstractIterable() {
  /*<skip>*/
}
$c_sc_AbstractIterable.prototype = new $h_sc_AbstractTraversable();
$c_sc_AbstractIterable.prototype.constructor = $c_sc_AbstractIterable;
/** @constructor */
function $h_sc_AbstractIterable() {
  /*<skip>*/
}
$h_sc_AbstractIterable.prototype = $c_sc_AbstractIterable.prototype;
$c_sc_AbstractIterable.prototype.foreach__F1__V = (function(f) {
  var this$1 = this.iterator__sc_Iterator();
  $f_sc_Iterator__foreach__F1__V(this$1, f)
});
$c_sc_AbstractIterable.prototype.forall__F1__Z = (function(p) {
  var this$1 = this.iterator__sc_Iterator();
  return $f_sc_Iterator__forall__F1__Z(this$1, p)
});
$c_sc_AbstractIterable.prototype.head__O = (function() {
  return this.iterator__sc_Iterator().next__O()
});
$c_sc_AbstractIterable.prototype.drop__I__O = (function(n) {
  return $f_sc_IterableLike__drop__I__O(this, n)
});
$c_sc_AbstractIterable.prototype.takeRight__I__O = (function(n) {
  return $f_sc_IterableLike__takeRight__I__O(this, n)
});
$c_sc_AbstractIterable.prototype.copyToArray__O__I__I__V = (function(xs, start, len) {
  $f_sc_IterableLike__copyToArray__O__I__I__V(this, xs, start, len)
});
$c_sc_AbstractIterable.prototype.sameElements__sc_GenIterable__Z = (function(that) {
  return $f_sc_IterableLike__sameElements__sc_GenIterable__Z(this, that)
});
$c_sc_AbstractIterable.prototype.toStream__sci_Stream = (function() {
  return this.iterator__sc_Iterator().toStream__sci_Stream()
});
function $f_sci_StringLike__slice__I__I__O($thiz, from, until) {
  var start = ((from > 0) ? from : 0);
  var that = $thiz.length__I();
  var end = ((until < that) ? until : that);
  if ((start >= end)) {
    return $thiz.newBuilder__scm_Builder().result__O()
  } else {
    var $$x1 = $thiz.newBuilder__scm_Builder();
    var this$9 = $thiz.toString__T();
    if ((start < 0)) {
      $charAt(this$9, start)
    };
    if ((end > this$9.length)) {
      $charAt(this$9, end)
    };
    if ((end < start)) {
      $charAt(this$9, (-1))
    };
    var x = $as_T(this$9.substring(start, end));
    return $as_scm_Builder($$x1.$plus$plus$eq__sc_TraversableOnce__scg_Growable(new $c_sci_StringOps(x))).result__O()
  }
}
function $p_sci_StringLike__unwrapArg__O__O($thiz, arg) {
  if (false) {
    var x2 = $as_s_math_ScalaNumber(arg);
    return x2.underlying__O()
  } else {
    return arg
  }
}
function $is_sci_Iterable(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sci_Iterable)))
}
function $as_sci_Iterable(obj) {
  return (($is_sci_Iterable(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Iterable"))
}
function $isArrayOf_sci_Iterable(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Iterable)))
}
function $asArrayOf_sci_Iterable(obj, depth) {
  return (($isArrayOf_sci_Iterable(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.Iterable;", depth))
}
var $d_sci_Iterable = new $TypeData().initClass({
  sci_Iterable: 0
}, true, "scala.collection.immutable.Iterable", {
  sci_Iterable: 1,
  O: 1,
  sci_Traversable: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  s_Immutable: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1
});
/** @constructor */
function $c_sci_StringOps(repr) {
  this.sci_StringOps__f_repr = null;
  this.sci_StringOps__f_repr = repr
}
$c_sci_StringOps.prototype = new $h_O();
$c_sci_StringOps.prototype.constructor = $c_sci_StringOps;
/** @constructor */
function $h_sci_StringOps() {
  /*<skip>*/
}
$h_sci_StringOps.prototype = $c_sci_StringOps.prototype;
$c_sci_StringOps.prototype.isEmpty__Z = (function() {
  return $f_sc_IndexedSeqOptimized__isEmpty__Z(this)
});
$c_sci_StringOps.prototype.foreach__F1__V = (function(f) {
  $f_sc_IndexedSeqOptimized__foreach__F1__V(this, f)
});
$c_sci_StringOps.prototype.foldLeft__O__F2__O = (function(z, op) {
  var this$ = this.sci_StringOps__f_repr;
  return $p_sc_IndexedSeqOptimized__foldl__I__I__O__F2__O(this, 0, this$.length, z, op)
});
$c_sci_StringOps.prototype.head__O = (function() {
  return $f_sc_IndexedSeqOptimized__head__O(this)
});
$c_sci_StringOps.prototype.drop__I__O = (function(n) {
  var this$ = this.sci_StringOps__f_repr;
  var until = this$.length;
  return $m_sci_StringOps$().slice$extension__T__I__I__T(this.sci_StringOps__f_repr, n, until)
});
$c_sci_StringOps.prototype.sameElements__sc_GenIterable__Z = (function(that) {
  return $f_sc_IndexedSeqOptimized__sameElements__sc_GenIterable__Z(this, that)
});
$c_sci_StringOps.prototype.copyToArray__O__I__I__V = (function(xs, start, len) {
  $f_sc_IndexedSeqOptimized__copyToArray__O__I__I__V(this, xs, start, len)
});
$c_sci_StringOps.prototype.lengthCompare__I__I = (function(len) {
  return $f_sc_IndexedSeqOptimized__lengthCompare__I__I(this, len)
});
$c_sci_StringOps.prototype.toList__sci_List = (function() {
  return $f_sc_IndexedSeqOptimized__toList__sci_List(this)
});
$c_sci_StringOps.prototype.iterator__sc_Iterator = (function() {
  return $f_sc_IndexedSeqLike__iterator__sc_Iterator(this)
});
$c_sci_StringOps.prototype.sizeHintIfCheap__I = (function() {
  var this$ = this.sci_StringOps__f_repr;
  return this$.length
});
$c_sci_StringOps.prototype.size__I = (function() {
  var this$ = this.sci_StringOps__f_repr;
  return this$.length
});
$c_sci_StringOps.prototype.toStream__sci_Stream = (function() {
  return $f_sc_IndexedSeqLike__iterator__sc_Iterator(this).toStream__sci_Stream()
});
$c_sci_StringOps.prototype.isTraversableAgain__Z = (function() {
  return true
});
$c_sci_StringOps.prototype.$plus$plus__sc_GenTraversableOnce__scg_CanBuildFrom__O = (function(that, bf) {
  return $f_sc_TraversableLike__$plus$plus__sc_GenTraversableOnce__scg_CanBuildFrom__O(this, that, bf)
});
$c_sci_StringOps.prototype.stringPrefix__T = (function() {
  return $f_sc_TraversableLike__stringPrefix__T(this)
});
$c_sci_StringOps.prototype.$div$colon__O__F2__O = (function(z, op) {
  var this$ = this.sci_StringOps__f_repr;
  return $p_sc_IndexedSeqOptimized__foldl__I__I__O__F2__O(this, 0, this$.length, z, op)
});
$c_sci_StringOps.prototype.toVector__sci_Vector = (function() {
  var this$1 = $m_sci_Vector$();
  var cbf = this$1.scg_GenTraversableFactory__f_ReusableCBFInstance;
  return $as_sci_Vector($f_sc_TraversableLike__to__scg_CanBuildFrom__O(this, cbf))
});
$c_sci_StringOps.prototype.mkString__T__T__T__T = (function(start, sep, end) {
  return $f_sc_TraversableOnce__mkString__T__T__T__T(this, start, sep, end)
});
$c_sci_StringOps.prototype.addString__scm_StringBuilder__T__T__T__scm_StringBuilder = (function(b, start, sep, end) {
  return $f_sc_TraversableOnce__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end)
});
$c_sci_StringOps.prototype.toString__T = (function() {
  var this$ = this.sci_StringOps__f_repr;
  return this$
});
$c_sci_StringOps.prototype.length__I = (function() {
  var this$ = this.sci_StringOps__f_repr;
  return this$.length
});
$c_sci_StringOps.prototype.hashCode__I = (function() {
  var this$ = this.sci_StringOps__f_repr;
  return $f_T__hashCode__I(this$)
});
$c_sci_StringOps.prototype.equals__O__Z = (function(x$1) {
  return $m_sci_StringOps$().equals$extension__T__O__Z(this.sci_StringOps__f_repr, x$1)
});
$c_sci_StringOps.prototype.seq__sc_TraversableOnce = (function() {
  var this$ = this.sci_StringOps__f_repr;
  return new $c_sci_WrappedString(this$)
});
$c_sci_StringOps.prototype.slice__I__I__O = (function(from, until) {
  return $m_sci_StringOps$().slice$extension__T__I__I__T(this.sci_StringOps__f_repr, from, until)
});
$c_sci_StringOps.prototype.apply__I__O = (function(idx) {
  var this$ = this.sci_StringOps__f_repr;
  return $bC($charAt(this$, idx))
});
$c_sci_StringOps.prototype.newBuilder__scm_Builder = (function() {
  return $ct_scm_StringBuilder__(new $c_scm_StringBuilder())
});
$c_sci_StringOps.prototype.thisCollection__sc_Traversable = (function() {
  var this$ = this.sci_StringOps__f_repr;
  return new $c_sci_WrappedString(this$)
});
$c_sci_StringOps.prototype.thisCollection__sc_Seq = (function() {
  var this$ = this.sci_StringOps__f_repr;
  return new $c_sci_WrappedString(this$)
});
$c_sci_StringOps.prototype.repr__O = (function() {
  return this.sci_StringOps__f_repr
});
function $as_sci_StringOps(obj) {
  return (((obj instanceof $c_sci_StringOps) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.StringOps"))
}
function $isArrayOf_sci_StringOps(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_StringOps)))
}
function $asArrayOf_sci_StringOps(obj, depth) {
  return (($isArrayOf_sci_StringOps(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.StringOps;", depth))
}
var $d_sci_StringOps = new $TypeData().initClass({
  sci_StringOps: 0
}, false, "scala.collection.immutable.StringOps", {
  sci_StringOps: 1,
  O: 1,
  sci_StringLike: 1,
  sc_IndexedSeqOptimized: 1,
  sc_IndexedSeqLike: 1,
  sc_SeqLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenIterableLike: 1,
  sc_GenSeqLike: 1,
  s_math_Ordered: 1,
  jl_Comparable: 1
});
$c_sci_StringOps.prototype.$classData = $d_sci_StringOps;
function $is_sc_Seq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_Seq)))
}
function $as_sc_Seq(obj) {
  return (($is_sc_Seq(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.Seq"))
}
function $isArrayOf_sc_Seq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_Seq)))
}
function $asArrayOf_sc_Seq(obj, depth) {
  return (($isArrayOf_sc_Seq(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.Seq;", depth))
}
function $as_sjs_js_ArrayOps(obj) {
  return ((false || (obj === null)) ? obj : $throwClassCastException(obj, "scala.scalajs.js.ArrayOps"))
}
function $isArrayOf_sjs_js_ArrayOps(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sjs_js_ArrayOps)))
}
function $asArrayOf_sjs_js_ArrayOps(obj, depth) {
  return (($isArrayOf_sjs_js_ArrayOps(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.scalajs.js.ArrayOps;", depth))
}
function $is_sc_Map(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_Map)))
}
function $as_sc_Map(obj) {
  return (($is_sc_Map(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.Map"))
}
function $isArrayOf_sc_Map(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_Map)))
}
function $asArrayOf_sc_Map(obj, depth) {
  return (($isArrayOf_sc_Map(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.Map;", depth))
}
function $is_sc_Set(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_Set)))
}
function $as_sc_Set(obj) {
  return (($is_sc_Set(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.Set"))
}
function $isArrayOf_sc_Set(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_Set)))
}
function $asArrayOf_sc_Set(obj, depth) {
  return (($isArrayOf_sc_Set(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.Set;", depth))
}
function $is_sc_IndexedSeq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_IndexedSeq)))
}
function $as_sc_IndexedSeq(obj) {
  return (($is_sc_IndexedSeq(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.IndexedSeq"))
}
function $isArrayOf_sc_IndexedSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_IndexedSeq)))
}
function $asArrayOf_sc_IndexedSeq(obj, depth) {
  return (($isArrayOf_sc_IndexedSeq(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.IndexedSeq;", depth))
}
function $is_sc_LinearSeq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_LinearSeq)))
}
function $as_sc_LinearSeq(obj) {
  return (($is_sc_LinearSeq(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.LinearSeq"))
}
function $isArrayOf_sc_LinearSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_LinearSeq)))
}
function $asArrayOf_sc_LinearSeq(obj, depth) {
  return (($isArrayOf_sc_LinearSeq(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.LinearSeq;", depth))
}
/** @constructor */
function $c_sc_AbstractSeq() {
  /*<skip>*/
}
$c_sc_AbstractSeq.prototype = new $h_sc_AbstractIterable();
$c_sc_AbstractSeq.prototype.constructor = $c_sc_AbstractSeq;
/** @constructor */
function $h_sc_AbstractSeq() {
  /*<skip>*/
}
$h_sc_AbstractSeq.prototype = $c_sc_AbstractSeq.prototype;
$c_sc_AbstractSeq.prototype.thisCollection__sc_Seq = (function() {
  return this
});
$c_sc_AbstractSeq.prototype.lengthCompare__I__I = (function(len) {
  return $f_sc_SeqLike__lengthCompare__I__I(this, len)
});
$c_sc_AbstractSeq.prototype.isEmpty__Z = (function() {
  return $f_sc_SeqLike__isEmpty__Z(this)
});
$c_sc_AbstractSeq.prototype.size__I = (function() {
  return this.length__I()
});
$c_sc_AbstractSeq.prototype.reverse__O = (function() {
  return $f_sc_SeqLike__reverse__O(this)
});
$c_sc_AbstractSeq.prototype.toString__T = (function() {
  return $f_sc_TraversableLike__toString__T(this)
});
$c_sc_AbstractSeq.prototype.hashCode__I = (function() {
  return $m_s_util_hashing_MurmurHash3$().seqHash__sc_Seq__I(this.seq__sc_Seq())
});
$c_sc_AbstractSeq.prototype.equals__O__Z = (function(that) {
  return $f_sc_GenSeqLike__equals__O__Z(this, that)
});
/** @constructor */
function $c_sc_AbstractMap() {
  /*<skip>*/
}
$c_sc_AbstractMap.prototype = new $h_sc_AbstractIterable();
$c_sc_AbstractMap.prototype.constructor = $c_sc_AbstractMap;
/** @constructor */
function $h_sc_AbstractMap() {
  /*<skip>*/
}
$h_sc_AbstractMap.prototype = $c_sc_AbstractMap.prototype;
$c_sc_AbstractMap.prototype.newBuilder__scm_Builder = (function() {
  return new $c_scm_MapBuilder(this.empty__sc_Map())
});
$c_sc_AbstractMap.prototype.isEmpty__Z = (function() {
  return $f_sc_MapLike__isEmpty__Z(this)
});
$c_sc_AbstractMap.prototype.getOrElse__O__F0__O = (function(key, default$1) {
  return $f_sc_MapLike__getOrElse__O__F0__O(this, key, default$1)
});
$c_sc_AbstractMap.prototype.apply__O__O = (function(key) {
  return $f_sc_MapLike__apply__O__O(this, key)
});
$c_sc_AbstractMap.prototype.contains__O__Z = (function(key) {
  return $f_sc_MapLike__contains__O__Z(this, key)
});
$c_sc_AbstractMap.prototype.addString__scm_StringBuilder__T__T__T__scm_StringBuilder = (function(b, start, sep, end) {
  return $f_sc_MapLike__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end)
});
$c_sc_AbstractMap.prototype.stringPrefix__T = (function() {
  return "Map"
});
$c_sc_AbstractMap.prototype.toString__T = (function() {
  return $f_sc_TraversableLike__toString__T(this)
});
$c_sc_AbstractMap.prototype.equals__O__Z = (function(that) {
  return $f_sc_GenMapLike__equals__O__Z(this, that)
});
/** @constructor */
function $c_sc_AbstractSet() {
  /*<skip>*/
}
$c_sc_AbstractSet.prototype = new $h_sc_AbstractIterable();
$c_sc_AbstractSet.prototype.constructor = $c_sc_AbstractSet;
/** @constructor */
function $h_sc_AbstractSet() {
  /*<skip>*/
}
$h_sc_AbstractSet.prototype = $c_sc_AbstractSet.prototype;
$c_sc_AbstractSet.prototype.newBuilder__scm_Builder = (function() {
  return new $c_scm_SetBuilder(this.empty__sc_Set())
});
$c_sc_AbstractSet.prototype.$plus$plus__sc_GenTraversableOnce__sc_Set = (function(elems) {
  return $f_sc_SetLike__$plus$plus__sc_GenTraversableOnce__sc_Set(this, elems)
});
$c_sc_AbstractSet.prototype.isEmpty__Z = (function() {
  return $f_sc_SetLike__isEmpty__Z(this)
});
$c_sc_AbstractSet.prototype.union__sc_GenSet__sc_Set = (function(that) {
  return this.$plus$plus__sc_GenTraversableOnce__sc_Set(that)
});
$c_sc_AbstractSet.prototype.stringPrefix__T = (function() {
  return "Set"
});
$c_sc_AbstractSet.prototype.toString__T = (function() {
  return $f_sc_TraversableLike__toString__T(this)
});
$c_sc_AbstractSet.prototype.subsetOf__sc_GenSet__Z = (function(that) {
  return this.forall__F1__Z(that)
});
$c_sc_AbstractSet.prototype.equals__O__Z = (function(that) {
  return $f_sc_GenSetLike__equals__O__Z(this, that)
});
$c_sc_AbstractSet.prototype.hashCode__I = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.unorderedHash__sc_TraversableOnce__I__I(this, this$1.s_util_hashing_MurmurHash3$__f_setSeed)
});
function $is_sci_Seq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sci_Seq)))
}
function $as_sci_Seq(obj) {
  return (($is_sci_Seq(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Seq"))
}
function $isArrayOf_sci_Seq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Seq)))
}
function $asArrayOf_sci_Seq(obj, depth) {
  return (($isArrayOf_sci_Seq(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.Seq;", depth))
}
function $is_sci_Set(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sci_Set)))
}
function $as_sci_Set(obj) {
  return (($is_sci_Set(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Set"))
}
function $isArrayOf_sci_Set(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Set)))
}
function $asArrayOf_sci_Set(obj, depth) {
  return (($isArrayOf_sci_Set(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.Set;", depth))
}
function $is_sci_IndexedSeq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sci_IndexedSeq)))
}
function $as_sci_IndexedSeq(obj) {
  return (($is_sci_IndexedSeq(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.IndexedSeq"))
}
function $isArrayOf_sci_IndexedSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_IndexedSeq)))
}
function $asArrayOf_sci_IndexedSeq(obj, depth) {
  return (($isArrayOf_sci_IndexedSeq(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.IndexedSeq;", depth))
}
/** @constructor */
function $c_sci_AbstractMap() {
  /*<skip>*/
}
$c_sci_AbstractMap.prototype = new $h_sc_AbstractMap();
$c_sci_AbstractMap.prototype.constructor = $c_sci_AbstractMap;
/** @constructor */
function $h_sci_AbstractMap() {
  /*<skip>*/
}
$h_sci_AbstractMap.prototype = $c_sci_AbstractMap.prototype;
$c_sci_AbstractMap.prototype.empty__sci_Map = (function() {
  $m_sci_Map$();
  return $m_sci_Map$EmptyMap$()
});
$c_sci_AbstractMap.prototype.companion__scg_GenericCompanion = (function() {
  return $m_sci_Iterable$()
});
$c_sci_AbstractMap.prototype.thisCollection__sc_Traversable = (function() {
  return this
});
$c_sci_AbstractMap.prototype.seq__sc_TraversableOnce = (function() {
  return this
});
$c_sci_AbstractMap.prototype.empty__sc_Map = (function() {
  return this.empty__sci_Map()
});
function $p_sci_ListSet__skip$1__sci_ListSet__I__sci_ListSet($thiz, ls, count) {
  while (true) {
    if ((count === 0)) {
      return ls
    } else {
      var temp$ls = ls.next__sci_ListSet();
      var temp$count = (((-1) + count) | 0);
      ls = temp$ls;
      count = temp$count
    }
  }
}
function $p_sci_ListSet__containsLimited$1__sci_ListSet__O__sci_ListSet__Z($thiz, n, e, end) {
  while (true) {
    if ((n !== end)) {
      if ($m_sr_BoxesRunTime$().equals__O__O__Z(e, n.elem__O())) {
        return true
      } else {
        n = n.next__sci_ListSet()
      }
    } else {
      return false
    }
  }
}
function $p_sci_ListSet__distanceTo$1__sci_ListSet__sci_ListSet__I__I($thiz, n, end, soFar) {
  while (true) {
    if ((n === end)) {
      return soFar
    } else {
      var temp$n = n.next__sci_ListSet();
      var temp$soFar = ((1 + soFar) | 0);
      n = temp$n;
      soFar = temp$soFar
    }
  }
}
function $p_sci_ListSet__reverseList$1__sci_List($thiz) {
  var curr = $thiz;
  var res = $m_sci_Nil$();
  while ((!curr.isEmpty__Z())) {
    var x$4 = curr.elem__O();
    var this$1 = res;
    res = new $c_sci_$colon$colon(x$4, this$1);
    curr = curr.next__sci_ListSet()
  };
  return res
}
/** @constructor */
function $c_sci_ListSet() {
  /*<skip>*/
}
$c_sci_ListSet.prototype = new $h_sc_AbstractSet();
$c_sci_ListSet.prototype.constructor = $c_sci_ListSet;
/** @constructor */
function $h_sci_ListSet() {
  /*<skip>*/
}
$h_sci_ListSet.prototype = $c_sci_ListSet.prototype;
$c_sci_ListSet.prototype.companion__scg_GenericCompanion = (function() {
  return $m_sci_ListSet$()
});
$c_sci_ListSet.prototype.size__I = (function() {
  return 0
});
$c_sci_ListSet.prototype.isEmpty__Z = (function() {
  return true
});
$c_sci_ListSet.prototype.contains__O__Z = (function(elem) {
  return false
});
$c_sci_ListSet.prototype.$plus__O__sci_ListSet = (function(elem) {
  return new $c_sci_ListSet$Node(this, elem)
});
$c_sci_ListSet.prototype.$plus$plus__sc_GenTraversableOnce__sci_ListSet = (function(xs) {
  if ((xs instanceof $c_sci_ListSet)) {
    var x2 = $as_sci_ListSet(xs);
    if ((x2 === this)) {
      return this
    } else {
      var lsSize = x2.size__I();
      if ((lsSize === 0)) {
        return this
      } else if (this.isEmpty__Z()) {
        return x2
      } else {
        var thisSize = this.size__I();
        var remaining = ((thisSize < lsSize) ? thisSize : lsSize);
        var thisTail = $p_sci_ListSet__skip$1__sci_ListSet__I__sci_ListSet(this, this, ((thisSize - remaining) | 0));
        var lsTail = $p_sci_ListSet__skip$1__sci_ListSet__I__sci_ListSet(this, x2, ((lsSize - remaining) | 0));
        while (((thisTail !== lsTail) && (!lsTail.isEmpty__Z()))) {
          thisTail = thisTail.next__sci_ListSet();
          lsTail = lsTail.next__sci_ListSet()
        };
        var toAdd = x2;
        var result = this;
        var pending = null;
        var pending0 = null;
        var pending1 = null;
        var pending2 = null;
        var pending3 = null;
        var pendingCount = 0;
        while ((toAdd !== lsTail)) {
          var elem = toAdd.elem__O();
          if ((!$p_sci_ListSet__containsLimited$1__sci_ListSet__O__sci_ListSet__Z(this, result, elem, lsTail))) {
            var x1$2 = pendingCount;
            switch (x1$2) {
              case 0: {
                pending0 = elem;
                break
              }
              case 1: {
                pending1 = elem;
                break
              }
              case 2: {
                pending2 = elem;
                break
              }
              case 3: {
                pending3 = elem;
                break
              }
              default: {
                if ((pending === null)) {
                  pending = new $ac_O($p_sci_ListSet__distanceTo$1__sci_ListSet__sci_ListSet__I__I(this, toAdd, lsTail, 0))
                };
                $m_sr_ScalaRunTime$().array_update__O__I__O__V(pending, (((-4) + pendingCount) | 0), elem)
              }
            };
            pendingCount = ((1 + pendingCount) | 0)
          };
          toAdd = toAdd.next__sci_ListSet()
        };
        while ((pendingCount > 0)) {
          var x1$3 = pendingCount;
          switch (x1$3) {
            case 1: {
              var elem$2 = pending0;
              break
            }
            case 2: {
              var elem$2 = pending1;
              break
            }
            case 3: {
              var elem$2 = pending2;
              break
            }
            case 4: {
              var elem$2 = pending3;
              break
            }
            default: {
              var elem$2 = $m_sr_ScalaRunTime$().array_apply__O__I__O(pending, (((-5) + pendingCount) | 0))
            }
          };
          var r = result;
          result = new $c_sci_ListSet$Node(r, elem$2);
          pendingCount = (((-1) + pendingCount) | 0)
        };
        return result
      }
    }
  } else {
    return (xs.isEmpty__Z() ? this : $as_sci_ListSet(xs.$div$colon__O__F2__O(this, new $c_sjsr_AnonFunction2(((x$2$2, x$3$2) => {
      var x$2 = $as_sci_ListSet(x$2$2);
      return x$2.$plus__O__sci_ListSet(x$3$2)
    })))))
  }
});
$c_sci_ListSet.prototype.iterator__sc_Iterator = (function() {
  var this$1 = $p_sci_ListSet__reverseList$1__sci_List(this);
  return $f_sc_LinearSeqLike__iterator__sc_Iterator(this$1)
});
$c_sci_ListSet.prototype.elem__O = (function() {
  throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), "elem of empty set")
});
$c_sci_ListSet.prototype.next__sci_ListSet = (function() {
  throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), "next of empty set")
});
$c_sci_ListSet.prototype.stringPrefix__T = (function() {
  return "ListSet"
});
$c_sci_ListSet.prototype.thisCollection__sc_Traversable = (function() {
  return this
});
$c_sci_ListSet.prototype.apply__O__O = (function(v1) {
  return this.contains__O__Z(v1)
});
$c_sci_ListSet.prototype.empty__sc_Set = (function() {
  $m_sci_ListSet$();
  return $m_sci_ListSet$EmptyListSet$()
});
$c_sci_ListSet.prototype.seq__sc_TraversableOnce = (function() {
  return this
});
$c_sci_ListSet.prototype.$plus$plus__sc_GenTraversableOnce__sc_Set = (function(elems) {
  return this.$plus$plus__sc_GenTraversableOnce__sci_ListSet(elems)
});
$c_sci_ListSet.prototype.$plus__O__sc_Set = (function(elem) {
  return this.$plus__O__sci_ListSet(elem)
});
function $as_sci_ListSet(obj) {
  return (((obj instanceof $c_sci_ListSet) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.ListSet"))
}
function $isArrayOf_sci_ListSet(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_ListSet)))
}
function $asArrayOf_sci_ListSet(obj, depth) {
  return (($isArrayOf_sci_ListSet(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.ListSet;", depth))
}
/** @constructor */
function $c_sci_Set$EmptySet$() {
  /*<skip>*/
}
$c_sci_Set$EmptySet$.prototype = new $h_sc_AbstractSet();
$c_sci_Set$EmptySet$.prototype.constructor = $c_sci_Set$EmptySet$;
/** @constructor */
function $h_sci_Set$EmptySet$() {
  /*<skip>*/
}
$h_sci_Set$EmptySet$.prototype = $c_sci_Set$EmptySet$.prototype;
$c_sci_Set$EmptySet$.prototype.companion__scg_GenericCompanion = (function() {
  return $m_sci_Set$()
});
$c_sci_Set$EmptySet$.prototype.size__I = (function() {
  return 0
});
$c_sci_Set$EmptySet$.prototype.contains__O__Z = (function(elem) {
  return false
});
$c_sci_Set$EmptySet$.prototype.iterator__sc_Iterator = (function() {
  return $m_sc_Iterator$().sc_Iterator$__f_empty
});
$c_sci_Set$EmptySet$.prototype.foreach__F1__V = (function(f) {
  /*<skip>*/
});
$c_sci_Set$EmptySet$.prototype.$plus$plus__sc_GenTraversableOnce__scg_CanBuildFrom__O = (function(that, bf) {
  if ((bf === $m_sci_Set$().sci_Set$__f_ReusableCBF)) {
    if ((that instanceof $c_sci_HashSet)) {
      var x2 = $as_sci_HashSet(that);
      if ((x2.size__I() > 4)) {
        return x2
      }
    };
    var x = $m_sci_Set$EmptySet$();
    if ($f_sc_GenSetLike__equals__O__Z(x, that)) {
      return $m_sci_Set$EmptySet$()
    };
    if ((that instanceof $c_sci_Set$Set1)) {
      var x4 = $as_sci_Set$Set1(that);
      return x4
    };
    if ((that instanceof $c_sci_Set$Set2)) {
      var x5 = $as_sci_Set$Set2(that);
      return x5
    };
    if ((that instanceof $c_sci_Set$Set3)) {
      var x6 = $as_sci_Set$Set3(that);
      return x6
    };
    if ((that instanceof $c_sci_Set$Set4)) {
      var x7 = $as_sci_Set$Set4(that);
      return x7
    };
    return $f_sc_TraversableLike__$plus$plus__sc_GenTraversableOnce__scg_CanBuildFrom__O(this, that, bf)
  } else if ((bf === $m_sci_HashSet$().sci_HashSet$__f_ReusableCBF)) {
    if ((that instanceof $c_sci_HashSet)) {
      var x2$2 = $as_sci_HashSet(that);
      return x2$2
    } else {
      return $f_sc_TraversableLike__$plus$plus__sc_GenTraversableOnce__scg_CanBuildFrom__O(this, that, bf)
    }
  } else {
    return $f_sc_TraversableLike__$plus$plus__sc_GenTraversableOnce__scg_CanBuildFrom__O(this, that, bf)
  }
});
$c_sci_Set$EmptySet$.prototype.thisCollection__sc_Traversable = (function() {
  return this
});
$c_sci_Set$EmptySet$.prototype.apply__O__O = (function(v1) {
  return false
});
$c_sci_Set$EmptySet$.prototype.empty__sc_Set = (function() {
  $m_sci_Set$();
  return $m_sci_Set$EmptySet$()
});
$c_sci_Set$EmptySet$.prototype.seq__sc_TraversableOnce = (function() {
  return this
});
$c_sci_Set$EmptySet$.prototype.$plus__O__sc_Set = (function(elem) {
  return new $c_sci_Set$Set1(elem)
});
var $d_sci_Set$EmptySet$ = new $TypeData().initClass({
  sci_Set$EmptySet$: 0
}, false, "scala.collection.immutable.Set$EmptySet$", {
  sci_Set$EmptySet$: 1,
  sc_AbstractSet: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_Set: 1,
  F1: 1,
  sc_GenSet: 1,
  sc_GenSetLike: 1,
  scg_GenericSetTemplate: 1,
  sc_SetLike: 1,
  scg_Subtractable: 1,
  sci_Set: 1,
  sci_Iterable: 1,
  sci_Traversable: 1,
  s_Immutable: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Set$EmptySet$.prototype.$classData = $d_sci_Set$EmptySet$;
var $n_sci_Set$EmptySet$;
function $m_sci_Set$EmptySet$() {
  if ((!$n_sci_Set$EmptySet$)) {
    $n_sci_Set$EmptySet$ = new $c_sci_Set$EmptySet$()
  };
  return $n_sci_Set$EmptySet$
}
/** @constructor */
function $c_sci_Set$Set1(elem1) {
  this.sci_Set$Set1__f_elem1 = null;
  this.sci_Set$Set1__f_elem1 = elem1
}
$c_sci_Set$Set1.prototype = new $h_sc_AbstractSet();
$c_sci_Set$Set1.prototype.constructor = $c_sci_Set$Set1;
/** @constructor */
function $h_sci_Set$Set1() {
  /*<skip>*/
}
$h_sci_Set$Set1.prototype = $c_sci_Set$Set1.prototype;
$c_sci_Set$Set1.prototype.companion__scg_GenericCompanion = (function() {
  return $m_sci_Set$()
});
$c_sci_Set$Set1.prototype.size__I = (function() {
  return 1
});
$c_sci_Set$Set1.prototype.contains__O__Z = (function(elem) {
  return $m_sr_BoxesRunTime$().equals__O__O__Z(elem, this.sci_Set$Set1__f_elem1)
});
$c_sci_Set$Set1.prototype.$plus__O__sci_Set = (function(elem) {
  return (this.contains__O__Z(elem) ? this : new $c_sci_Set$Set2(this.sci_Set$Set1__f_elem1, elem))
});
$c_sci_Set$Set1.prototype.iterator__sc_Iterator = (function() {
  $m_sc_Iterator$();
  var elem = this.sci_Set$Set1__f_elem1;
  return new $c_sc_Iterator$$anon$3(elem)
});
$c_sci_Set$Set1.prototype.foreach__F1__V = (function(f) {
  f.apply__O__O(this.sci_Set$Set1__f_elem1)
});
$c_sci_Set$Set1.prototype.forall__F1__Z = (function(p) {
  return $uZ(p.apply__O__O(this.sci_Set$Set1__f_elem1))
});
$c_sci_Set$Set1.prototype.head__O = (function() {
  return this.sci_Set$Set1__f_elem1
});
$c_sci_Set$Set1.prototype.thisCollection__sc_Traversable = (function() {
  return this
});
$c_sci_Set$Set1.prototype.apply__O__O = (function(v1) {
  return this.contains__O__Z(v1)
});
$c_sci_Set$Set1.prototype.empty__sc_Set = (function() {
  $m_sci_Set$();
  return $m_sci_Set$EmptySet$()
});
$c_sci_Set$Set1.prototype.seq__sc_TraversableOnce = (function() {
  return this
});
$c_sci_Set$Set1.prototype.$plus__O__sc_Set = (function(elem) {
  return this.$plus__O__sci_Set(elem)
});
function $as_sci_Set$Set1(obj) {
  return (((obj instanceof $c_sci_Set$Set1) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Set$Set1"))
}
function $isArrayOf_sci_Set$Set1(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Set$Set1)))
}
function $asArrayOf_sci_Set$Set1(obj, depth) {
  return (($isArrayOf_sci_Set$Set1(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.Set$Set1;", depth))
}
var $d_sci_Set$Set1 = new $TypeData().initClass({
  sci_Set$Set1: 0
}, false, "scala.collection.immutable.Set$Set1", {
  sci_Set$Set1: 1,
  sc_AbstractSet: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_Set: 1,
  F1: 1,
  sc_GenSet: 1,
  sc_GenSetLike: 1,
  scg_GenericSetTemplate: 1,
  sc_SetLike: 1,
  scg_Subtractable: 1,
  sci_Set: 1,
  sci_Iterable: 1,
  sci_Traversable: 1,
  s_Immutable: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Set$Set1.prototype.$classData = $d_sci_Set$Set1;
/** @constructor */
function $c_sci_Set$Set2(elem1, elem2) {
  this.sci_Set$Set2__f_elem1 = null;
  this.sci_Set$Set2__f_elem2 = null;
  this.sci_Set$Set2__f_elem1 = elem1;
  this.sci_Set$Set2__f_elem2 = elem2
}
$c_sci_Set$Set2.prototype = new $h_sc_AbstractSet();
$c_sci_Set$Set2.prototype.constructor = $c_sci_Set$Set2;
/** @constructor */
function $h_sci_Set$Set2() {
  /*<skip>*/
}
$h_sci_Set$Set2.prototype = $c_sci_Set$Set2.prototype;
$c_sci_Set$Set2.prototype.companion__scg_GenericCompanion = (function() {
  return $m_sci_Set$()
});
$c_sci_Set$Set2.prototype.size__I = (function() {
  return 2
});
$c_sci_Set$Set2.prototype.contains__O__Z = (function(elem) {
  return ($m_sr_BoxesRunTime$().equals__O__O__Z(elem, this.sci_Set$Set2__f_elem1) || $m_sr_BoxesRunTime$().equals__O__O__Z(elem, this.sci_Set$Set2__f_elem2))
});
$c_sci_Set$Set2.prototype.$plus__O__sci_Set = (function(elem) {
  return (this.contains__O__Z(elem) ? this : new $c_sci_Set$Set3(this.sci_Set$Set2__f_elem1, this.sci_Set$Set2__f_elem2, elem))
});
$c_sci_Set$Set2.prototype.iterator__sc_Iterator = (function() {
  return new $c_sci_Set$Set2$$anon$1(this)
});
$c_sci_Set$Set2.prototype.scala$collection$immutable$Set$Set2$$getElem__I__O = (function(i) {
  switch (i) {
    case 0: {
      return this.sci_Set$Set2__f_elem1;
      break
    }
    case 1: {
      return this.sci_Set$Set2__f_elem2;
      break
    }
    default: {
      throw new $c_s_MatchError(i)
    }
  }
});
$c_sci_Set$Set2.prototype.foreach__F1__V = (function(f) {
  f.apply__O__O(this.sci_Set$Set2__f_elem1);
  f.apply__O__O(this.sci_Set$Set2__f_elem2)
});
$c_sci_Set$Set2.prototype.forall__F1__Z = (function(p) {
  return ($uZ(p.apply__O__O(this.sci_Set$Set2__f_elem1)) && $uZ(p.apply__O__O(this.sci_Set$Set2__f_elem2)))
});
$c_sci_Set$Set2.prototype.head__O = (function() {
  return this.sci_Set$Set2__f_elem1
});
$c_sci_Set$Set2.prototype.thisCollection__sc_Traversable = (function() {
  return this
});
$c_sci_Set$Set2.prototype.apply__O__O = (function(v1) {
  return this.contains__O__Z(v1)
});
$c_sci_Set$Set2.prototype.empty__sc_Set = (function() {
  $m_sci_Set$();
  return $m_sci_Set$EmptySet$()
});
$c_sci_Set$Set2.prototype.seq__sc_TraversableOnce = (function() {
  return this
});
$c_sci_Set$Set2.prototype.$plus__O__sc_Set = (function(elem) {
  return this.$plus__O__sci_Set(elem)
});
function $as_sci_Set$Set2(obj) {
  return (((obj instanceof $c_sci_Set$Set2) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Set$Set2"))
}
function $isArrayOf_sci_Set$Set2(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Set$Set2)))
}
function $asArrayOf_sci_Set$Set2(obj, depth) {
  return (($isArrayOf_sci_Set$Set2(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.Set$Set2;", depth))
}
var $d_sci_Set$Set2 = new $TypeData().initClass({
  sci_Set$Set2: 0
}, false, "scala.collection.immutable.Set$Set2", {
  sci_Set$Set2: 1,
  sc_AbstractSet: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_Set: 1,
  F1: 1,
  sc_GenSet: 1,
  sc_GenSetLike: 1,
  scg_GenericSetTemplate: 1,
  sc_SetLike: 1,
  scg_Subtractable: 1,
  sci_Set: 1,
  sci_Iterable: 1,
  sci_Traversable: 1,
  s_Immutable: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Set$Set2.prototype.$classData = $d_sci_Set$Set2;
/** @constructor */
function $c_sci_Set$Set3(elem1, elem2, elem3) {
  this.sci_Set$Set3__f_elem1 = null;
  this.sci_Set$Set3__f_elem2 = null;
  this.sci_Set$Set3__f_elem3 = null;
  this.sci_Set$Set3__f_elem1 = elem1;
  this.sci_Set$Set3__f_elem2 = elem2;
  this.sci_Set$Set3__f_elem3 = elem3
}
$c_sci_Set$Set3.prototype = new $h_sc_AbstractSet();
$c_sci_Set$Set3.prototype.constructor = $c_sci_Set$Set3;
/** @constructor */
function $h_sci_Set$Set3() {
  /*<skip>*/
}
$h_sci_Set$Set3.prototype = $c_sci_Set$Set3.prototype;
$c_sci_Set$Set3.prototype.companion__scg_GenericCompanion = (function() {
  return $m_sci_Set$()
});
$c_sci_Set$Set3.prototype.size__I = (function() {
  return 3
});
$c_sci_Set$Set3.prototype.contains__O__Z = (function(elem) {
  return (($m_sr_BoxesRunTime$().equals__O__O__Z(elem, this.sci_Set$Set3__f_elem1) || $m_sr_BoxesRunTime$().equals__O__O__Z(elem, this.sci_Set$Set3__f_elem2)) || $m_sr_BoxesRunTime$().equals__O__O__Z(elem, this.sci_Set$Set3__f_elem3))
});
$c_sci_Set$Set3.prototype.$plus__O__sci_Set = (function(elem) {
  return (this.contains__O__Z(elem) ? this : new $c_sci_Set$Set4(this.sci_Set$Set3__f_elem1, this.sci_Set$Set3__f_elem2, this.sci_Set$Set3__f_elem3, elem))
});
$c_sci_Set$Set3.prototype.iterator__sc_Iterator = (function() {
  return new $c_sci_Set$Set3$$anon$2(this)
});
$c_sci_Set$Set3.prototype.scala$collection$immutable$Set$Set3$$getElem__I__O = (function(i) {
  switch (i) {
    case 0: {
      return this.sci_Set$Set3__f_elem1;
      break
    }
    case 1: {
      return this.sci_Set$Set3__f_elem2;
      break
    }
    case 2: {
      return this.sci_Set$Set3__f_elem3;
      break
    }
    default: {
      throw new $c_s_MatchError(i)
    }
  }
});
$c_sci_Set$Set3.prototype.foreach__F1__V = (function(f) {
  f.apply__O__O(this.sci_Set$Set3__f_elem1);
  f.apply__O__O(this.sci_Set$Set3__f_elem2);
  f.apply__O__O(this.sci_Set$Set3__f_elem3)
});
$c_sci_Set$Set3.prototype.forall__F1__Z = (function(p) {
  return (($uZ(p.apply__O__O(this.sci_Set$Set3__f_elem1)) && $uZ(p.apply__O__O(this.sci_Set$Set3__f_elem2))) && $uZ(p.apply__O__O(this.sci_Set$Set3__f_elem3)))
});
$c_sci_Set$Set3.prototype.head__O = (function() {
  return this.sci_Set$Set3__f_elem1
});
$c_sci_Set$Set3.prototype.thisCollection__sc_Traversable = (function() {
  return this
});
$c_sci_Set$Set3.prototype.apply__O__O = (function(v1) {
  return this.contains__O__Z(v1)
});
$c_sci_Set$Set3.prototype.empty__sc_Set = (function() {
  $m_sci_Set$();
  return $m_sci_Set$EmptySet$()
});
$c_sci_Set$Set3.prototype.seq__sc_TraversableOnce = (function() {
  return this
});
$c_sci_Set$Set3.prototype.$plus__O__sc_Set = (function(elem) {
  return this.$plus__O__sci_Set(elem)
});
function $as_sci_Set$Set3(obj) {
  return (((obj instanceof $c_sci_Set$Set3) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Set$Set3"))
}
function $isArrayOf_sci_Set$Set3(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Set$Set3)))
}
function $asArrayOf_sci_Set$Set3(obj, depth) {
  return (($isArrayOf_sci_Set$Set3(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.Set$Set3;", depth))
}
var $d_sci_Set$Set3 = new $TypeData().initClass({
  sci_Set$Set3: 0
}, false, "scala.collection.immutable.Set$Set3", {
  sci_Set$Set3: 1,
  sc_AbstractSet: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_Set: 1,
  F1: 1,
  sc_GenSet: 1,
  sc_GenSetLike: 1,
  scg_GenericSetTemplate: 1,
  sc_SetLike: 1,
  scg_Subtractable: 1,
  sci_Set: 1,
  sci_Iterable: 1,
  sci_Traversable: 1,
  s_Immutable: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Set$Set3.prototype.$classData = $d_sci_Set$Set3;
/** @constructor */
function $c_sci_Set$Set4(elem1, elem2, elem3, elem4) {
  this.sci_Set$Set4__f_elem1 = null;
  this.sci_Set$Set4__f_elem2 = null;
  this.sci_Set$Set4__f_elem3 = null;
  this.sci_Set$Set4__f_elem4 = null;
  this.sci_Set$Set4__f_elem1 = elem1;
  this.sci_Set$Set4__f_elem2 = elem2;
  this.sci_Set$Set4__f_elem3 = elem3;
  this.sci_Set$Set4__f_elem4 = elem4
}
$c_sci_Set$Set4.prototype = new $h_sc_AbstractSet();
$c_sci_Set$Set4.prototype.constructor = $c_sci_Set$Set4;
/** @constructor */
function $h_sci_Set$Set4() {
  /*<skip>*/
}
$h_sci_Set$Set4.prototype = $c_sci_Set$Set4.prototype;
$c_sci_Set$Set4.prototype.companion__scg_GenericCompanion = (function() {
  return $m_sci_Set$()
});
$c_sci_Set$Set4.prototype.size__I = (function() {
  return 4
});
$c_sci_Set$Set4.prototype.contains__O__Z = (function(elem) {
  return ((($m_sr_BoxesRunTime$().equals__O__O__Z(elem, this.sci_Set$Set4__f_elem1) || $m_sr_BoxesRunTime$().equals__O__O__Z(elem, this.sci_Set$Set4__f_elem2)) || $m_sr_BoxesRunTime$().equals__O__O__Z(elem, this.sci_Set$Set4__f_elem3)) || $m_sr_BoxesRunTime$().equals__O__O__Z(elem, this.sci_Set$Set4__f_elem4))
});
$c_sci_Set$Set4.prototype.$plus__O__sci_Set = (function(elem) {
  return (this.contains__O__Z(elem) ? this : $ct_sci_HashSet__(new $c_sci_HashSet()).$plus__O__sci_HashSet(this.sci_Set$Set4__f_elem1).$plus__O__sci_HashSet(this.sci_Set$Set4__f_elem2).$plus__O__sci_HashSet(this.sci_Set$Set4__f_elem3).$plus__O__sci_HashSet(this.sci_Set$Set4__f_elem4).$plus__O__sci_HashSet(elem))
});
$c_sci_Set$Set4.prototype.iterator__sc_Iterator = (function() {
  return new $c_sci_Set$Set4$$anon$3(this)
});
$c_sci_Set$Set4.prototype.scala$collection$immutable$Set$Set4$$getElem__I__O = (function(i) {
  switch (i) {
    case 0: {
      return this.sci_Set$Set4__f_elem1;
      break
    }
    case 1: {
      return this.sci_Set$Set4__f_elem2;
      break
    }
    case 2: {
      return this.sci_Set$Set4__f_elem3;
      break
    }
    case 3: {
      return this.sci_Set$Set4__f_elem4;
      break
    }
    default: {
      throw new $c_s_MatchError(i)
    }
  }
});
$c_sci_Set$Set4.prototype.foreach__F1__V = (function(f) {
  f.apply__O__O(this.sci_Set$Set4__f_elem1);
  f.apply__O__O(this.sci_Set$Set4__f_elem2);
  f.apply__O__O(this.sci_Set$Set4__f_elem3);
  f.apply__O__O(this.sci_Set$Set4__f_elem4)
});
$c_sci_Set$Set4.prototype.forall__F1__Z = (function(p) {
  return ((($uZ(p.apply__O__O(this.sci_Set$Set4__f_elem1)) && $uZ(p.apply__O__O(this.sci_Set$Set4__f_elem2))) && $uZ(p.apply__O__O(this.sci_Set$Set4__f_elem3))) && $uZ(p.apply__O__O(this.sci_Set$Set4__f_elem4)))
});
$c_sci_Set$Set4.prototype.head__O = (function() {
  return this.sci_Set$Set4__f_elem1
});
$c_sci_Set$Set4.prototype.thisCollection__sc_Traversable = (function() {
  return this
});
$c_sci_Set$Set4.prototype.apply__O__O = (function(v1) {
  return this.contains__O__Z(v1)
});
$c_sci_Set$Set4.prototype.empty__sc_Set = (function() {
  $m_sci_Set$();
  return $m_sci_Set$EmptySet$()
});
$c_sci_Set$Set4.prototype.seq__sc_TraversableOnce = (function() {
  return this
});
$c_sci_Set$Set4.prototype.$plus__O__sc_Set = (function(elem) {
  return this.$plus__O__sci_Set(elem)
});
function $as_sci_Set$Set4(obj) {
  return (((obj instanceof $c_sci_Set$Set4) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Set$Set4"))
}
function $isArrayOf_sci_Set$Set4(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Set$Set4)))
}
function $asArrayOf_sci_Set$Set4(obj, depth) {
  return (($isArrayOf_sci_Set$Set4(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.Set$Set4;", depth))
}
var $d_sci_Set$Set4 = new $TypeData().initClass({
  sci_Set$Set4: 0
}, false, "scala.collection.immutable.Set$Set4", {
  sci_Set$Set4: 1,
  sc_AbstractSet: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_Set: 1,
  F1: 1,
  sc_GenSet: 1,
  sc_GenSetLike: 1,
  scg_GenericSetTemplate: 1,
  sc_SetLike: 1,
  scg_Subtractable: 1,
  sci_Set: 1,
  sci_Iterable: 1,
  sci_Traversable: 1,
  s_Immutable: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Set$Set4.prototype.$classData = $d_sci_Set$Set4;
function $ct_sci_HashSet__($thiz) {
  return $thiz
}
/** @constructor */
function $c_sci_HashSet() {
  /*<skip>*/
}
$c_sci_HashSet.prototype = new $h_sc_AbstractSet();
$c_sci_HashSet.prototype.constructor = $c_sci_HashSet;
/** @constructor */
function $h_sci_HashSet() {
  /*<skip>*/
}
$h_sci_HashSet.prototype = $c_sci_HashSet.prototype;
$c_sci_HashSet.prototype.companion__scg_GenericCompanion = (function() {
  return $m_sci_HashSet$()
});
$c_sci_HashSet.prototype.size__I = (function() {
  return 0
});
$c_sci_HashSet.prototype.iterator__sc_Iterator = (function() {
  return $m_sc_Iterator$().sc_Iterator$__f_empty
});
$c_sci_HashSet.prototype.foreach__F1__V = (function(f) {
  /*<skip>*/
});
$c_sci_HashSet.prototype.contains__O__Z = (function(e) {
  return this.get0__O__I__I__Z(e, this.computeHash__O__I(e), 0)
});
$c_sci_HashSet.prototype.subsetOf__sc_GenSet__Z = (function(that) {
  if ((that instanceof $c_sci_HashSet)) {
    var x2 = $as_sci_HashSet(that);
    return this.subsetOf0__sci_HashSet__I__Z(x2, 0)
  } else {
    var this$1 = this.iterator__sc_Iterator();
    return $f_sc_Iterator__forall__F1__Z(this$1, that)
  }
});
$c_sci_HashSet.prototype.subsetOf0__sci_HashSet__I__Z = (function(that, level) {
  return true
});
$c_sci_HashSet.prototype.$plus__O__sci_HashSet = (function(e) {
  return this.updated0__O__I__I__sci_HashSet(e, this.computeHash__O__I(e), 0)
});
$c_sci_HashSet.prototype.union__sc_GenSet__sci_HashSet = (function(that) {
  if ((that instanceof $c_sci_HashSet)) {
    var x2 = $as_sci_HashSet(that);
    if ((this === x2)) {
      return this
    } else {
      $m_sci_HashSet$();
      var s = this.union0__sci_HashSet__I__sci_HashSet(x2, 0);
      return ((s === null) ? $m_sci_HashSet$EmptyHashSet$() : s)
    }
  } else if (that.isEmpty__Z()) {
    return this
  } else {
    var acc = new $c_sci_HashSet$acc$1(this);
    if ($is_sci_Set(that)) {
      that.foreach__F1__V(acc)
    } else {
      var this$2 = that.iterator__sc_Iterator();
      $f_sc_Iterator__foreach__F1__V(this$2, acc)
    };
    return acc.sci_HashSet$acc$1__f_res
  }
});
$c_sci_HashSet.prototype.union0__sci_HashSet__I__sci_HashSet = (function(that, level) {
  return that
});
$c_sci_HashSet.prototype.improve__I__I = (function(hcode) {
  var h = ((hcode + (~(hcode << 9))) | 0);
  h = (h ^ ((h >>> 14) | 0));
  h = ((h + (h << 4)) | 0);
  return (h ^ ((h >>> 10) | 0))
});
$c_sci_HashSet.prototype.computeHash__O__I = (function(key) {
  return this.improve__I__I($m_sr_Statics$().anyHash__O__I(key))
});
$c_sci_HashSet.prototype.get0__O__I__I__Z = (function(key, hash, level) {
  return false
});
$c_sci_HashSet.prototype.updated0__O__I__I__sci_HashSet = (function(key, hash, level) {
  return new $c_sci_HashSet$HashSet1(key, hash)
});
$c_sci_HashSet.prototype.thisCollection__sc_Traversable = (function() {
  return this
});
$c_sci_HashSet.prototype.apply__O__O = (function(v1) {
  return this.contains__O__Z(v1)
});
$c_sci_HashSet.prototype.seq__sc_TraversableOnce = (function() {
  return this
});
$c_sci_HashSet.prototype.union__sc_GenSet__sc_Set = (function(that) {
  return this.union__sc_GenSet__sci_HashSet(that)
});
$c_sci_HashSet.prototype.$plus__O__sc_Set = (function(elem) {
  return this.$plus__O__sci_HashSet(elem)
});
$c_sci_HashSet.prototype.empty__sc_Set = (function() {
  $m_sci_HashSet$();
  return $m_sci_HashSet$EmptyHashSet$()
});
function $as_sci_HashSet(obj) {
  return (((obj instanceof $c_sci_HashSet) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.HashSet"))
}
function $isArrayOf_sci_HashSet(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_HashSet)))
}
function $asArrayOf_sci_HashSet(obj, depth) {
  return (($isArrayOf_sci_HashSet(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.HashSet;", depth))
}
var $d_sci_HashSet = new $TypeData().initClass({
  sci_HashSet: 0
}, false, "scala.collection.immutable.HashSet", {
  sci_HashSet: 1,
  sc_AbstractSet: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_Set: 1,
  F1: 1,
  sc_GenSet: 1,
  sc_GenSetLike: 1,
  scg_GenericSetTemplate: 1,
  sc_SetLike: 1,
  scg_Subtractable: 1,
  sci_Set: 1,
  sci_Iterable: 1,
  sci_Traversable: 1,
  s_Immutable: 1,
  sc_CustomParallelizable: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_HashSet.prototype.$classData = $d_sci_HashSet;
/** @constructor */
function $c_sci_ListSet$EmptyListSet$() {
  /*<skip>*/
}
$c_sci_ListSet$EmptyListSet$.prototype = new $h_sci_ListSet();
$c_sci_ListSet$EmptyListSet$.prototype.constructor = $c_sci_ListSet$EmptyListSet$;
/** @constructor */
function $h_sci_ListSet$EmptyListSet$() {
  /*<skip>*/
}
$h_sci_ListSet$EmptyListSet$.prototype = $c_sci_ListSet$EmptyListSet$.prototype;
var $d_sci_ListSet$EmptyListSet$ = new $TypeData().initClass({
  sci_ListSet$EmptyListSet$: 0
}, false, "scala.collection.immutable.ListSet$EmptyListSet$", {
  sci_ListSet$EmptyListSet$: 1,
  sci_ListSet: 1,
  sc_AbstractSet: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_Set: 1,
  F1: 1,
  sc_GenSet: 1,
  sc_GenSetLike: 1,
  scg_GenericSetTemplate: 1,
  sc_SetLike: 1,
  scg_Subtractable: 1,
  sci_Set: 1,
  sci_Iterable: 1,
  sci_Traversable: 1,
  s_Immutable: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_ListSet$EmptyListSet$.prototype.$classData = $d_sci_ListSet$EmptyListSet$;
var $n_sci_ListSet$EmptyListSet$;
function $m_sci_ListSet$EmptyListSet$() {
  if ((!$n_sci_ListSet$EmptyListSet$)) {
    $n_sci_ListSet$EmptyListSet$ = new $c_sci_ListSet$EmptyListSet$()
  };
  return $n_sci_ListSet$EmptyListSet$
}
function $p_sci_ListSet$Node__sizeInternal__sci_ListSet__I__I($thiz, n, acc) {
  while (true) {
    if (n.isEmpty__Z()) {
      return acc
    } else {
      var temp$n = n.next__sci_ListSet();
      var temp$acc = ((1 + acc) | 0);
      n = temp$n;
      acc = temp$acc
    }
  }
}
function $p_sci_ListSet$Node__containsInternal__sci_ListSet__O__Z($thiz, n, e) {
  while (true) {
    if ((!n.isEmpty__Z())) {
      if ($m_sr_BoxesRunTime$().equals__O__O__Z(n.elem__O(), e)) {
        return true
      } else {
        n = n.next__sci_ListSet()
      }
    } else {
      return false
    }
  }
}
/** @constructor */
function $c_sci_ListSet$Node(outer, elem) {
  this.sci_ListSet$Node__f_elem = null;
  this.sci_ListSet$Node__f_$outer = null;
  this.sci_ListSet$Node__f_elem = elem;
  if ((outer === null)) {
    throw null
  } else {
    this.sci_ListSet$Node__f_$outer = outer
  }
}
$c_sci_ListSet$Node.prototype = new $h_sci_ListSet();
$c_sci_ListSet$Node.prototype.constructor = $c_sci_ListSet$Node;
/** @constructor */
function $h_sci_ListSet$Node() {
  /*<skip>*/
}
$h_sci_ListSet$Node.prototype = $c_sci_ListSet$Node.prototype;
$c_sci_ListSet$Node.prototype.elem__O = (function() {
  return this.sci_ListSet$Node__f_elem
});
$c_sci_ListSet$Node.prototype.size__I = (function() {
  return $p_sci_ListSet$Node__sizeInternal__sci_ListSet__I__I(this, this, 0)
});
$c_sci_ListSet$Node.prototype.isEmpty__Z = (function() {
  return false
});
$c_sci_ListSet$Node.prototype.contains__O__Z = (function(e) {
  return $p_sci_ListSet$Node__containsInternal__sci_ListSet__O__Z(this, this, e)
});
$c_sci_ListSet$Node.prototype.$plus__O__sci_ListSet = (function(e) {
  return ($p_sci_ListSet$Node__containsInternal__sci_ListSet__O__Z(this, this, e) ? this : new $c_sci_ListSet$Node(this, e))
});
$c_sci_ListSet$Node.prototype.next__sci_ListSet = (function() {
  return this.sci_ListSet$Node__f_$outer
});
$c_sci_ListSet$Node.prototype.$plus__O__sc_Set = (function(elem) {
  return this.$plus__O__sci_ListSet(elem)
});
var $d_sci_ListSet$Node = new $TypeData().initClass({
  sci_ListSet$Node: 0
}, false, "scala.collection.immutable.ListSet$Node", {
  sci_ListSet$Node: 1,
  sci_ListSet: 1,
  sc_AbstractSet: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_Set: 1,
  F1: 1,
  sc_GenSet: 1,
  sc_GenSetLike: 1,
  scg_GenericSetTemplate: 1,
  sc_SetLike: 1,
  scg_Subtractable: 1,
  sci_Set: 1,
  sci_Iterable: 1,
  sci_Traversable: 1,
  s_Immutable: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_ListSet$Node.prototype.$classData = $d_sci_ListSet$Node;
function $as_sci_TreeSet(obj) {
  return ((false || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.TreeSet"))
}
function $isArrayOf_sci_TreeSet(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_TreeSet)))
}
function $asArrayOf_sci_TreeSet(obj, depth) {
  return (($isArrayOf_sci_TreeSet(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.TreeSet;", depth))
}
/** @constructor */
function $c_scm_AbstractSeq() {
  /*<skip>*/
}
$c_scm_AbstractSeq.prototype = new $h_sc_AbstractSeq();
$c_scm_AbstractSeq.prototype.constructor = $c_scm_AbstractSeq;
/** @constructor */
function $h_scm_AbstractSeq() {
  /*<skip>*/
}
$h_scm_AbstractSeq.prototype = $c_scm_AbstractSeq.prototype;
$c_scm_AbstractSeq.prototype.seq__scm_Seq = (function() {
  return this
});
$c_scm_AbstractSeq.prototype.seq__sc_TraversableOnce = (function() {
  return this.seq__scm_Seq()
});
/** @constructor */
function $c_sci_HashSet$EmptyHashSet$() {
  /*<skip>*/
}
$c_sci_HashSet$EmptyHashSet$.prototype = new $h_sci_HashSet();
$c_sci_HashSet$EmptyHashSet$.prototype.constructor = $c_sci_HashSet$EmptyHashSet$;
/** @constructor */
function $h_sci_HashSet$EmptyHashSet$() {
  /*<skip>*/
}
$h_sci_HashSet$EmptyHashSet$.prototype = $c_sci_HashSet$EmptyHashSet$.prototype;
$c_sci_HashSet$EmptyHashSet$.prototype.head__O = (function() {
  throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), "Empty Set")
});
var $d_sci_HashSet$EmptyHashSet$ = new $TypeData().initClass({
  sci_HashSet$EmptyHashSet$: 0
}, false, "scala.collection.immutable.HashSet$EmptyHashSet$", {
  sci_HashSet$EmptyHashSet$: 1,
  sci_HashSet: 1,
  sc_AbstractSet: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_Set: 1,
  F1: 1,
  sc_GenSet: 1,
  sc_GenSetLike: 1,
  scg_GenericSetTemplate: 1,
  sc_SetLike: 1,
  scg_Subtractable: 1,
  sci_Set: 1,
  sci_Iterable: 1,
  sci_Traversable: 1,
  s_Immutable: 1,
  sc_CustomParallelizable: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_HashSet$EmptyHashSet$.prototype.$classData = $d_sci_HashSet$EmptyHashSet$;
var $n_sci_HashSet$EmptyHashSet$;
function $m_sci_HashSet$EmptyHashSet$() {
  if ((!$n_sci_HashSet$EmptyHashSet$)) {
    $n_sci_HashSet$EmptyHashSet$ = new $c_sci_HashSet$EmptyHashSet$()
  };
  return $n_sci_HashSet$EmptyHashSet$
}
function $p_sci_HashSet$HashTrieSet__addMaybeSubset$1__sci_HashSet$HashTrieSet__sci_HashSet$HashTrieSet__I__sci_HashSet$HashTrieSet($thiz, larger, smaller, level$4) {
  var resultElems = null;
  var ai = 0;
  var bi = 0;
  var abm = larger.sci_HashSet$HashTrieSet__f_bitmap;
  var bbm = smaller.sci_HashSet$HashTrieSet__f_bitmap;
  var a = larger.sci_HashSet$HashTrieSet__f_elems;
  var b = smaller.sci_HashSet$HashTrieSet__f_elems;
  var additionalSize = 0;
  var bsb = (bbm ^ (bbm & (((-1) + bbm) | 0)));
  while ((bsb !== 0)) {
    var skippedBitsInA = (abm & (((-1) + bsb) | 0));
    ai = ((ai + $m_jl_Integer$().bitCount__I__I(skippedBitsInA)) | 0);
    abm = (abm ^ skippedBitsInA);
    var aai = a.get(ai);
    var bbi = b.get(bi);
    var result = ((aai === bbi) ? aai : aai.union0__sci_HashSet__I__sci_HashSet(bbi, ((5 + level$4) | 0)));
    if ((result !== aai)) {
      if ((resultElems === null)) {
        resultElems = a.clone__O()
      };
      additionalSize = ((additionalSize + ((result.size__I() - aai.size__I()) | 0)) | 0);
      resultElems.set(ai, result)
    };
    abm = (abm ^ bsb);
    bbm = (bbm ^ bsb);
    bsb = (bbm ^ (bbm & (((-1) + bbm) | 0)));
    ai = ((1 + ai) | 0);
    bi = ((1 + bi) | 0)
  };
  return ((resultElems === null) ? larger : new $c_sci_HashSet$HashTrieSet(larger.sci_HashSet$HashTrieSet__f_bitmap, resultElems, ((larger.sci_HashSet$HashTrieSet__f_size0 + additionalSize) | 0)))
}
function $p_sci_HashSet$HashTrieSet__addDistinct$1__sci_HashSet$HashTrieSet__sci_HashSet$HashTrieSet($thiz, that) {
  var ai = 0;
  var bi = 0;
  var offset = 0;
  var abm = $thiz.sci_HashSet$HashTrieSet__f_bitmap;
  var bbm = that.sci_HashSet$HashTrieSet__f_bitmap;
  var a = $thiz.sci_HashSet$HashTrieSet__f_elems;
  var b = that.sci_HashSet$HashTrieSet__f_elems;
  var allBits = (abm | bbm);
  var i = allBits;
  var resultElems = new ($d_sci_HashSet.getArrayOf().constr)($m_jl_Integer$().bitCount__I__I(i));
  var lsb = (allBits ^ (allBits & (((-1) + allBits) | 0)));
  while ((lsb !== 0)) {
    if (((lsb & abm) !== 0)) {
      resultElems.set(offset, a.get(ai));
      ai = ((1 + ai) | 0)
    } else {
      resultElems.set(offset, b.get(bi));
      bi = ((1 + bi) | 0)
    };
    offset = ((1 + offset) | 0);
    allBits = (allBits ^ lsb);
    lsb = (allBits ^ (allBits & (((-1) + allBits) | 0)))
  };
  return new $c_sci_HashSet$HashTrieSet((abm | bbm), resultElems, (($thiz.sci_HashSet$HashTrieSet__f_size0 + that.sci_HashSet$HashTrieSet__f_size0) | 0))
}
function $p_sci_HashSet$HashTrieSet__addCommon$1__sci_HashSet$HashTrieSet__I__sci_HashSet$HashTrieSet($thiz, that, level$4) {
  var ai = 0;
  var bi = 0;
  var abm = $thiz.sci_HashSet$HashTrieSet__f_bitmap;
  var bbm = that.sci_HashSet$HashTrieSet__f_bitmap;
  var a = $thiz.sci_HashSet$HashTrieSet__f_elems;
  var b = that.sci_HashSet$HashTrieSet__f_elems;
  var allBits = (abm | bbm);
  var i = allBits;
  var resultElems = new ($d_sci_HashSet.getArrayOf().constr)($m_jl_Integer$().bitCount__I__I(i));
  var offset = 0;
  var rs = 0;
  var lsb = (allBits ^ (allBits & (((-1) + allBits) | 0)));
  var result = null;
  while ((lsb !== 0)) {
    if (((lsb & abm) !== 0)) {
      if (((lsb & bbm) !== 0)) {
        var aai = a.get(ai);
        var bbi = b.get(bi);
        result = ((aai === bbi) ? aai : aai.union0__sci_HashSet__I__sci_HashSet(bbi, ((5 + level$4) | 0)));
        ai = ((1 + ai) | 0);
        bi = ((1 + bi) | 0)
      } else {
        result = a.get(ai);
        ai = ((1 + ai) | 0)
      }
    } else {
      result = b.get(bi);
      bi = ((1 + bi) | 0)
    };
    allBits = (allBits ^ lsb);
    lsb = (allBits ^ (allBits & (((-1) + allBits) | 0)));
    resultElems.set(offset, result);
    rs = ((rs + result.size__I()) | 0);
    offset = ((1 + offset) | 0)
  };
  return new $c_sci_HashSet$HashTrieSet((abm | bbm), resultElems, rs)
}
/** @constructor */
function $c_sci_HashSet$HashTrieSet(bitmap, elems, size0) {
  this.sci_HashSet$HashTrieSet__f_bitmap = 0;
  this.sci_HashSet$HashTrieSet__f_elems = null;
  this.sci_HashSet$HashTrieSet__f_size0 = 0;
  this.sci_HashSet$HashTrieSet__f_bitmap = bitmap;
  this.sci_HashSet$HashTrieSet__f_elems = elems;
  this.sci_HashSet$HashTrieSet__f_size0 = size0
}
$c_sci_HashSet$HashTrieSet.prototype = new $h_sci_HashSet();
$c_sci_HashSet$HashTrieSet.prototype.constructor = $c_sci_HashSet$HashTrieSet;
/** @constructor */
function $h_sci_HashSet$HashTrieSet() {
  /*<skip>*/
}
$h_sci_HashSet$HashTrieSet.prototype = $c_sci_HashSet$HashTrieSet.prototype;
$c_sci_HashSet$HashTrieSet.prototype.size__I = (function() {
  return this.sci_HashSet$HashTrieSet__f_size0
});
$c_sci_HashSet$HashTrieSet.prototype.get0__O__I__I__Z = (function(key, hash, level) {
  var index = (31 & ((hash >>> level) | 0));
  var mask = (1 << index);
  if ((this.sci_HashSet$HashTrieSet__f_bitmap === (-1))) {
    return this.sci_HashSet$HashTrieSet__f_elems.get((31 & index)).get0__O__I__I__Z(key, hash, ((5 + level) | 0))
  } else if (((this.sci_HashSet$HashTrieSet__f_bitmap & mask) !== 0)) {
    var i = (this.sci_HashSet$HashTrieSet__f_bitmap & (((-1) + mask) | 0));
    var offset = $m_jl_Integer$().bitCount__I__I(i);
    return this.sci_HashSet$HashTrieSet__f_elems.get(offset).get0__O__I__I__Z(key, hash, ((5 + level) | 0))
  } else {
    return false
  }
});
$c_sci_HashSet$HashTrieSet.prototype.updated0__O__I__I__sci_HashSet = (function(key, hash, level) {
  var index = (31 & ((hash >>> level) | 0));
  var mask = (1 << index);
  var i = (this.sci_HashSet$HashTrieSet__f_bitmap & (((-1) + mask) | 0));
  var offset = $m_jl_Integer$().bitCount__I__I(i);
  if (((this.sci_HashSet$HashTrieSet__f_bitmap & mask) !== 0)) {
    var sub = this.sci_HashSet$HashTrieSet__f_elems.get(offset);
    var subNew = sub.updated0__O__I__I__sci_HashSet(key, hash, ((5 + level) | 0));
    if ((sub === subNew)) {
      return this
    } else {
      var elemsNew = new ($d_sci_HashSet.getArrayOf().constr)(this.sci_HashSet$HashTrieSet__f_elems.u.length);
      var src = this.sci_HashSet$HashTrieSet__f_elems;
      var length = this.sci_HashSet$HashTrieSet__f_elems.u.length;
      $systemArraycopyRefs(src, 0, elemsNew, 0, length);
      elemsNew.set(offset, subNew);
      return new $c_sci_HashSet$HashTrieSet(this.sci_HashSet$HashTrieSet__f_bitmap, elemsNew, ((1 + this.sci_HashSet$HashTrieSet__f_size0) | 0))
    }
  } else {
    var elemsNew$2 = new ($d_sci_HashSet.getArrayOf().constr)(((1 + this.sci_HashSet$HashTrieSet__f_elems.u.length) | 0));
    var src$1 = this.sci_HashSet$HashTrieSet__f_elems;
    $systemArraycopyRefs(src$1, 0, elemsNew$2, 0, offset);
    elemsNew$2.set(offset, new $c_sci_HashSet$HashSet1(key, hash));
    var src$2 = this.sci_HashSet$HashTrieSet__f_elems;
    var destPos = ((1 + offset) | 0);
    var length$1 = ((this.sci_HashSet$HashTrieSet__f_elems.u.length - offset) | 0);
    $systemArraycopyRefs(src$2, offset, elemsNew$2, destPos, length$1);
    var bitmapNew = (this.sci_HashSet$HashTrieSet__f_bitmap | mask);
    return new $c_sci_HashSet$HashTrieSet(bitmapNew, elemsNew$2, ((1 + this.sci_HashSet$HashTrieSet__f_size0) | 0))
  }
});
$c_sci_HashSet$HashTrieSet.prototype.union0__sci_HashSet__I__sci_HashSet = (function(that, level) {
  if ((that === this)) {
    return this
  } else if ((that instanceof $c_sci_HashSet$LeafHashSet)) {
    var x2 = $as_sci_HashSet$LeafHashSet(that);
    var index = (31 & ((x2.sci_HashSet$LeafHashSet__f_hash >>> level) | 0));
    var mask = (1 << index);
    var i = (this.sci_HashSet$HashTrieSet__f_bitmap & (((-1) + mask) | 0));
    var offset = $m_jl_Integer$().bitCount__I__I(i);
    if (((this.sci_HashSet$HashTrieSet__f_bitmap & mask) !== 0)) {
      var sub = this.sci_HashSet$HashTrieSet__f_elems.get(offset);
      if ((sub === x2)) {
        return this
      } else {
        var sub1 = sub.union0__sci_HashSet__I__sci_HashSet(x2, ((5 + level) | 0));
        if ((sub === sub1)) {
          return this
        } else {
          var this$1 = this.sci_HashSet$HashTrieSet__f_elems;
          var elems1 = this$1.clone__O();
          elems1.set(offset, sub1);
          return new $c_sci_HashSet$HashTrieSet(this.sci_HashSet$HashTrieSet__f_bitmap, elems1, ((this.sci_HashSet$HashTrieSet__f_size0 + ((sub1.size__I() - sub.size__I()) | 0)) | 0))
        }
      }
    } else {
      var elems1$2 = new ($d_sci_HashSet.getArrayOf().constr)(((1 + this.sci_HashSet$HashTrieSet__f_elems.u.length) | 0));
      var src = this.sci_HashSet$HashTrieSet__f_elems;
      $systemArraycopyRefs(src, 0, elems1$2, 0, offset);
      elems1$2.set(offset, x2);
      var src$1 = this.sci_HashSet$HashTrieSet__f_elems;
      var destPos = ((1 + offset) | 0);
      var length = ((this.sci_HashSet$HashTrieSet__f_elems.u.length - offset) | 0);
      $systemArraycopyRefs(src$1, offset, elems1$2, destPos, length);
      var bitmap1 = (this.sci_HashSet$HashTrieSet__f_bitmap | mask);
      return new $c_sci_HashSet$HashTrieSet(bitmap1, elems1$2, ((this.sci_HashSet$HashTrieSet__f_size0 + x2.size__I()) | 0))
    }
  } else if ((that instanceof $c_sci_HashSet$HashTrieSet)) {
    var x3 = $as_sci_HashSet$HashTrieSet(that);
    var abm = this.sci_HashSet$HashTrieSet__f_bitmap;
    var bbm = x3.sci_HashSet$HashTrieSet__f_bitmap;
    var allBits = (abm | bbm);
    return (((allBits === abm) && ((allBits !== bbm) || (this.sci_HashSet$HashTrieSet__f_size0 >= x3.sci_HashSet$HashTrieSet__f_size0))) ? $p_sci_HashSet$HashTrieSet__addMaybeSubset$1__sci_HashSet$HashTrieSet__sci_HashSet$HashTrieSet__I__sci_HashSet$HashTrieSet(this, this, x3, level) : ((allBits === bbm) ? $p_sci_HashSet$HashTrieSet__addMaybeSubset$1__sci_HashSet$HashTrieSet__sci_HashSet$HashTrieSet__I__sci_HashSet$HashTrieSet(this, x3, this, level) : (((abm & bbm) === 0) ? $p_sci_HashSet$HashTrieSet__addDistinct$1__sci_HashSet$HashTrieSet__sci_HashSet$HashTrieSet(this, x3) : $p_sci_HashSet$HashTrieSet__addCommon$1__sci_HashSet$HashTrieSet__I__sci_HashSet$HashTrieSet(this, x3, level))))
  } else {
    return this
  }
});
$c_sci_HashSet$HashTrieSet.prototype.equals__O__Z = (function(other) {
  if ((other instanceof $c_sci_HashSet$HashTrieSet)) {
    var x2 = $as_sci_HashSet$HashTrieSet(other);
    if ((this === x2)) {
      return true
    } else if (((this.sci_HashSet$HashTrieSet__f_bitmap === x2.sci_HashSet$HashTrieSet__f_bitmap) && (this.sci_HashSet$HashTrieSet__f_size0 === x2.sci_HashSet$HashTrieSet__f_size0))) {
      var a = this.sci_HashSet$HashTrieSet__f_elems;
      var b = x2.sci_HashSet$HashTrieSet__f_elems;
      return $m_ju_Arrays$().equals__AO__AO__Z(a, b)
    } else {
      return false
    }
  } else {
    return ((!(other instanceof $c_sci_HashSet)) && $f_sc_GenSetLike__equals__O__Z(this, other))
  }
});
$c_sci_HashSet$HashTrieSet.prototype.subsetOf0__sci_HashSet__I__Z = (function(that, level) {
  if ((that === this)) {
    return true
  } else {
    if ((that instanceof $c_sci_HashSet$HashTrieSet)) {
      var x2 = $as_sci_HashSet$HashTrieSet(that);
      if ((((this.sci_HashSet$HashTrieSet__f_bitmap & (~x2.sci_HashSet$HashTrieSet__f_bitmap)) === 0) && (this.sci_HashSet$HashTrieSet__f_size0 <= x2.sci_HashSet$HashTrieSet__f_size0))) {
        var abm = this.sci_HashSet$HashTrieSet__f_bitmap;
        var a = this.sci_HashSet$HashTrieSet__f_elems;
        var ai = 0;
        var b = x2.sci_HashSet$HashTrieSet__f_elems;
        var bbm = x2.sci_HashSet$HashTrieSet__f_bitmap;
        var bi = 0;
        if (((abm & bbm) === abm)) {
          while ((abm !== 0)) {
            var alsb = (abm ^ (abm & (((-1) + abm) | 0)));
            var blsb = (bbm ^ (bbm & (((-1) + bbm) | 0)));
            if ((alsb === blsb)) {
              if ((!a.get(ai).subsetOf0__sci_HashSet__I__Z(b.get(bi), ((5 + level) | 0)))) {
                return false
              };
              abm = (abm & (~alsb));
              ai = ((1 + ai) | 0)
            };
            bbm = (bbm & (~blsb));
            bi = ((1 + bi) | 0)
          };
          return true
        } else {
          return false
        }
      }
    };
    return false
  }
});
$c_sci_HashSet$HashTrieSet.prototype.foreach__F1__V = (function(f) {
  var i = 0;
  while ((i < this.sci_HashSet$HashTrieSet__f_elems.u.length)) {
    this.sci_HashSet$HashTrieSet__f_elems.get(i).foreach__F1__V(f);
    i = ((1 + i) | 0)
  }
});
$c_sci_HashSet$HashTrieSet.prototype.iterator__sc_Iterator = (function() {
  return new $c_sci_HashSet$HashTrieSet$$anon$1(this)
});
function $as_sci_HashSet$HashTrieSet(obj) {
  return (((obj instanceof $c_sci_HashSet$HashTrieSet) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.HashSet$HashTrieSet"))
}
function $isArrayOf_sci_HashSet$HashTrieSet(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_HashSet$HashTrieSet)))
}
function $asArrayOf_sci_HashSet$HashTrieSet(obj, depth) {
  return (($isArrayOf_sci_HashSet$HashTrieSet(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.HashSet$HashTrieSet;", depth))
}
var $d_sci_HashSet$HashTrieSet = new $TypeData().initClass({
  sci_HashSet$HashTrieSet: 0
}, false, "scala.collection.immutable.HashSet$HashTrieSet", {
  sci_HashSet$HashTrieSet: 1,
  sci_HashSet: 1,
  sc_AbstractSet: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_Set: 1,
  F1: 1,
  sc_GenSet: 1,
  sc_GenSetLike: 1,
  scg_GenericSetTemplate: 1,
  sc_SetLike: 1,
  scg_Subtractable: 1,
  sci_Set: 1,
  sci_Iterable: 1,
  sci_Traversable: 1,
  s_Immutable: 1,
  sc_CustomParallelizable: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_HashSet$HashTrieSet.prototype.$classData = $d_sci_HashSet$HashTrieSet;
function $ct_sci_HashSet$LeafHashSet__I__($thiz, hash) {
  $thiz.sci_HashSet$LeafHashSet__f_hash = hash;
  return $thiz
}
/** @constructor */
function $c_sci_HashSet$LeafHashSet() {
  this.sci_HashSet$LeafHashSet__f_hash = 0
}
$c_sci_HashSet$LeafHashSet.prototype = new $h_sci_HashSet();
$c_sci_HashSet$LeafHashSet.prototype.constructor = $c_sci_HashSet$LeafHashSet;
/** @constructor */
function $h_sci_HashSet$LeafHashSet() {
  /*<skip>*/
}
$h_sci_HashSet$LeafHashSet.prototype = $c_sci_HashSet$LeafHashSet.prototype;
function $as_sci_HashSet$LeafHashSet(obj) {
  return (((obj instanceof $c_sci_HashSet$LeafHashSet) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.HashSet$LeafHashSet"))
}
function $isArrayOf_sci_HashSet$LeafHashSet(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_HashSet$LeafHashSet)))
}
function $asArrayOf_sci_HashSet$LeafHashSet(obj, depth) {
  return (($isArrayOf_sci_HashSet$LeafHashSet(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.HashSet$LeafHashSet;", depth))
}
/** @constructor */
function $c_sci_HashSet$HashSet1(key, hash) {
  this.sci_HashSet$LeafHashSet__f_hash = 0;
  this.sci_HashSet$HashSet1__f_key = null;
  this.sci_HashSet$HashSet1__f_key = key;
  $ct_sci_HashSet$LeafHashSet__I__(this, hash)
}
$c_sci_HashSet$HashSet1.prototype = new $h_sci_HashSet$LeafHashSet();
$c_sci_HashSet$HashSet1.prototype.constructor = $c_sci_HashSet$HashSet1;
/** @constructor */
function $h_sci_HashSet$HashSet1() {
  /*<skip>*/
}
$h_sci_HashSet$HashSet1.prototype = $c_sci_HashSet$HashSet1.prototype;
$c_sci_HashSet$HashSet1.prototype.size__I = (function() {
  return 1
});
$c_sci_HashSet$HashSet1.prototype.get0__O__I__I__Z = (function(key, hash, level) {
  return ((hash === this.sci_HashSet$LeafHashSet__f_hash) && $m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_HashSet$HashSet1__f_key))
});
$c_sci_HashSet$HashSet1.prototype.equals__O__Z = (function(other) {
  if ((other instanceof $c_sci_HashSet$HashSet1)) {
    var x2 = $as_sci_HashSet$HashSet1(other);
    return ((this === x2) || ((this.sci_HashSet$LeafHashSet__f_hash === x2.sci_HashSet$LeafHashSet__f_hash) && $m_sr_BoxesRunTime$().equals__O__O__Z(this.sci_HashSet$HashSet1__f_key, x2.sci_HashSet$HashSet1__f_key)))
  } else {
    return ((!(other instanceof $c_sci_HashSet)) && $f_sc_GenSetLike__equals__O__Z(this, other))
  }
});
$c_sci_HashSet$HashSet1.prototype.subsetOf0__sci_HashSet__I__Z = (function(that, level) {
  return ((this === that) || that.get0__O__I__I__Z(this.sci_HashSet$HashSet1__f_key, this.sci_HashSet$LeafHashSet__f_hash, level))
});
$c_sci_HashSet$HashSet1.prototype.updated0__O__I__I__sci_HashSet = (function(key, hash, level) {
  if ((hash === this.sci_HashSet$LeafHashSet__f_hash)) {
    if ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_HashSet$HashSet1__f_key)) {
      return this
    } else {
      $m_sci_ListSet$();
      var this$2 = $m_sci_ListSet$EmptyListSet$();
      var elem = this.sci_HashSet$HashSet1__f_key;
      return new $c_sci_HashSet$HashSetCollision1(hash, new $c_sci_ListSet$Node(this$2, elem).$plus__O__sci_ListSet(key), 2)
    }
  } else {
    return $m_sci_HashSet$().scala$collection$immutable$HashSet$$makeHashTrieSet__I__sci_HashSet__I__sci_HashSet__I__I__sci_HashSet$HashTrieSet(this.sci_HashSet$LeafHashSet__f_hash, this, hash, new $c_sci_HashSet$HashSet1(key, hash), level, 2)
  }
});
$c_sci_HashSet$HashSet1.prototype.union0__sci_HashSet__I__sci_HashSet = (function(that, level) {
  if ((that instanceof $c_sci_HashSet$HashSet1)) {
    var x2 = $as_sci_HashSet$HashSet1(that);
    if ((this.sci_HashSet$LeafHashSet__f_hash === x2.sci_HashSet$LeafHashSet__f_hash)) {
      if ($m_sr_BoxesRunTime$().equals__O__O__Z(this.sci_HashSet$HashSet1__f_key, x2.sci_HashSet$HashSet1__f_key)) {
        return this
      } else {
        var $$x1 = this.sci_HashSet$LeafHashSet__f_hash;
        $m_sci_ListSet$();
        var this$2 = $m_sci_ListSet$EmptyListSet$();
        var elem = this.sci_HashSet$HashSet1__f_key;
        return new $c_sci_HashSet$HashSetCollision1($$x1, new $c_sci_ListSet$Node(this$2, elem).$plus__O__sci_ListSet(x2.sci_HashSet$HashSet1__f_key), 2)
      }
    } else {
      return $m_sci_HashSet$().scala$collection$immutable$HashSet$$makeHashTrieSet__I__sci_HashSet__I__sci_HashSet__I__I__sci_HashSet$HashTrieSet(this.sci_HashSet$LeafHashSet__f_hash, this, x2.sci_HashSet$LeafHashSet__f_hash, x2, level, 2)
    }
  } else {
    return that.union0__sci_HashSet__I__sci_HashSet(this, level)
  }
});
$c_sci_HashSet$HashSet1.prototype.iterator__sc_Iterator = (function() {
  $m_sc_Iterator$();
  var array = [this.sci_HashSet$HashSet1__f_key];
  var elems = $ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), array);
  return $f_sc_IndexedSeqLike__iterator__sc_Iterator(elems)
});
$c_sci_HashSet$HashSet1.prototype.foreach__F1__V = (function(f) {
  f.apply__O__O(this.sci_HashSet$HashSet1__f_key)
});
function $as_sci_HashSet$HashSet1(obj) {
  return (((obj instanceof $c_sci_HashSet$HashSet1) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.HashSet$HashSet1"))
}
function $isArrayOf_sci_HashSet$HashSet1(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_HashSet$HashSet1)))
}
function $asArrayOf_sci_HashSet$HashSet1(obj, depth) {
  return (($isArrayOf_sci_HashSet$HashSet1(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.HashSet$HashSet1;", depth))
}
var $d_sci_HashSet$HashSet1 = new $TypeData().initClass({
  sci_HashSet$HashSet1: 0
}, false, "scala.collection.immutable.HashSet$HashSet1", {
  sci_HashSet$HashSet1: 1,
  sci_HashSet$LeafHashSet: 1,
  sci_HashSet: 1,
  sc_AbstractSet: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_Set: 1,
  F1: 1,
  sc_GenSet: 1,
  sc_GenSetLike: 1,
  scg_GenericSetTemplate: 1,
  sc_SetLike: 1,
  scg_Subtractable: 1,
  sci_Set: 1,
  sci_Iterable: 1,
  sci_Traversable: 1,
  s_Immutable: 1,
  sc_CustomParallelizable: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_HashSet$HashSet1.prototype.$classData = $d_sci_HashSet$HashSet1;
/** @constructor */
function $c_sci_HashSet$HashSetCollision1(hash, ks, size) {
  this.sci_HashSet$LeafHashSet__f_hash = 0;
  this.sci_HashSet$HashSetCollision1__f_ks = null;
  this.sci_HashSet$HashSetCollision1__f_size = 0;
  this.sci_HashSet$HashSetCollision1__f_ks = ks;
  this.sci_HashSet$HashSetCollision1__f_size = size;
  $ct_sci_HashSet$LeafHashSet__I__(this, hash)
}
$c_sci_HashSet$HashSetCollision1.prototype = new $h_sci_HashSet$LeafHashSet();
$c_sci_HashSet$HashSetCollision1.prototype.constructor = $c_sci_HashSet$HashSetCollision1;
/** @constructor */
function $h_sci_HashSet$HashSetCollision1() {
  /*<skip>*/
}
$h_sci_HashSet$HashSetCollision1.prototype = $c_sci_HashSet$HashSetCollision1.prototype;
$c_sci_HashSet$HashSetCollision1.prototype.size__I = (function() {
  return this.sci_HashSet$HashSetCollision1__f_size
});
$c_sci_HashSet$HashSetCollision1.prototype.get0__O__I__I__Z = (function(key, hash, level) {
  return ((hash === this.sci_HashSet$LeafHashSet__f_hash) && this.sci_HashSet$HashSetCollision1__f_ks.contains__O__Z(key))
});
$c_sci_HashSet$HashSetCollision1.prototype.equals__O__Z = (function(other) {
  if ((other instanceof $c_sci_HashSet$HashSetCollision1)) {
    var x2 = $as_sci_HashSet$HashSetCollision1(other);
    if ((this === x2)) {
      return true
    } else if ((this.sci_HashSet$LeafHashSet__f_hash === x2.sci_HashSet$LeafHashSet__f_hash)) {
      var x = this.sci_HashSet$HashSetCollision1__f_ks;
      var x$2 = x2.sci_HashSet$HashSetCollision1__f_ks;
      return ((x === null) ? (x$2 === null) : $f_sc_GenSetLike__equals__O__Z(x, x$2))
    } else {
      return false
    }
  } else {
    return ((!(other instanceof $c_sci_HashSet)) && $f_sc_GenSetLike__equals__O__Z(this, other))
  }
});
$c_sci_HashSet$HashSetCollision1.prototype.subsetOf0__sci_HashSet__I__Z = (function(that, level) {
  if ((this === that)) {
    return true
  } else {
    var this$1 = this.sci_HashSet$HashSetCollision1__f_ks;
    var this$2 = $p_sci_ListSet__reverseList$1__sci_List(this$1);
    var this$3 = $f_sc_LinearSeqLike__iterator__sc_Iterator(this$2);
    var res = true;
    while ((res && this$3.hasNext__Z())) {
      var arg1 = this$3.next__O();
      res = that.get0__O__I__I__Z(arg1, this.sci_HashSet$LeafHashSet__f_hash, level)
    };
    return res
  }
});
$c_sci_HashSet$HashSetCollision1.prototype.updated0__O__I__I__sci_HashSet = (function(key, hash, level) {
  if ((hash === this.sci_HashSet$LeafHashSet__f_hash)) {
    var ks1 = this.sci_HashSet$HashSetCollision1__f_ks.$plus__O__sci_ListSet(key);
    return ((ks1 === this.sci_HashSet$HashSetCollision1__f_ks) ? this : new $c_sci_HashSet$HashSetCollision1(hash, ks1, ((1 + this.sci_HashSet$HashSetCollision1__f_size) | 0)))
  } else {
    return $m_sci_HashSet$().scala$collection$immutable$HashSet$$makeHashTrieSet__I__sci_HashSet__I__sci_HashSet__I__I__sci_HashSet$HashTrieSet(this.sci_HashSet$LeafHashSet__f_hash, this, hash, new $c_sci_HashSet$HashSet1(key, hash), level, ((1 + this.sci_HashSet$HashSetCollision1__f_size) | 0))
  }
});
$c_sci_HashSet$HashSetCollision1.prototype.union0__sci_HashSet__I__sci_HashSet = (function(that, level) {
  if ((that instanceof $c_sci_HashSet$HashSet1)) {
    var x2 = $as_sci_HashSet$HashSet1(that);
    if ((x2.sci_HashSet$LeafHashSet__f_hash !== this.sci_HashSet$LeafHashSet__f_hash)) {
      return $m_sci_HashSet$().scala$collection$immutable$HashSet$$makeHashTrieSet__I__sci_HashSet__I__sci_HashSet__I__I__sci_HashSet$HashTrieSet(this.sci_HashSet$LeafHashSet__f_hash, this, x2.sci_HashSet$LeafHashSet__f_hash, x2, level, ((1 + this.sci_HashSet$HashSetCollision1__f_size) | 0))
    } else {
      var ks1 = this.sci_HashSet$HashSetCollision1__f_ks.$plus__O__sci_ListSet(x2.sci_HashSet$HashSet1__f_key);
      return ((ks1 === this.sci_HashSet$HashSetCollision1__f_ks) ? this : new $c_sci_HashSet$HashSetCollision1(this.sci_HashSet$LeafHashSet__f_hash, ks1, ((1 + this.sci_HashSet$HashSetCollision1__f_size) | 0)))
    }
  } else if ((that instanceof $c_sci_HashSet$HashSetCollision1)) {
    var x3 = $as_sci_HashSet$HashSetCollision1(that);
    if ((x3.sci_HashSet$LeafHashSet__f_hash !== this.sci_HashSet$LeafHashSet__f_hash)) {
      return $m_sci_HashSet$().scala$collection$immutable$HashSet$$makeHashTrieSet__I__sci_HashSet__I__sci_HashSet__I__I__sci_HashSet$HashTrieSet(this.sci_HashSet$LeafHashSet__f_hash, this, x3.sci_HashSet$LeafHashSet__f_hash, x3, level, ((this.sci_HashSet$HashSetCollision1__f_size + x3.sci_HashSet$HashSetCollision1__f_size) | 0))
    } else if ((this === x3)) {
      return this
    } else {
      var ks1$2 = this.sci_HashSet$HashSetCollision1__f_ks.$plus$plus__sc_GenTraversableOnce__sci_ListSet(x3.sci_HashSet$HashSetCollision1__f_ks);
      if ((ks1$2 === this.sci_HashSet$HashSetCollision1__f_ks)) {
        return this
      } else {
        var newSize = ks1$2.size__I();
        return ((newSize === x3.sci_HashSet$HashSetCollision1__f_size) ? x3 : new $c_sci_HashSet$HashSetCollision1(this.sci_HashSet$LeafHashSet__f_hash, ks1$2, newSize))
      }
    }
  } else {
    return that.union0__sci_HashSet__I__sci_HashSet(this, level)
  }
});
$c_sci_HashSet$HashSetCollision1.prototype.iterator__sc_Iterator = (function() {
  var this$1 = this.sci_HashSet$HashSetCollision1__f_ks;
  var this$2 = $p_sci_ListSet__reverseList$1__sci_List(this$1);
  return $f_sc_LinearSeqLike__iterator__sc_Iterator(this$2)
});
$c_sci_HashSet$HashSetCollision1.prototype.foreach__F1__V = (function(f) {
  var this$1 = this.sci_HashSet$HashSetCollision1__f_ks;
  var this$2 = $p_sci_ListSet__reverseList$1__sci_List(this$1);
  var this$3 = $f_sc_LinearSeqLike__iterator__sc_Iterator(this$2);
  $f_sc_Iterator__foreach__F1__V(this$3, f)
});
function $as_sci_HashSet$HashSetCollision1(obj) {
  return (((obj instanceof $c_sci_HashSet$HashSetCollision1) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.HashSet$HashSetCollision1"))
}
function $isArrayOf_sci_HashSet$HashSetCollision1(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_HashSet$HashSetCollision1)))
}
function $asArrayOf_sci_HashSet$HashSetCollision1(obj, depth) {
  return (($isArrayOf_sci_HashSet$HashSetCollision1(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.HashSet$HashSetCollision1;", depth))
}
var $d_sci_HashSet$HashSetCollision1 = new $TypeData().initClass({
  sci_HashSet$HashSetCollision1: 0
}, false, "scala.collection.immutable.HashSet$HashSetCollision1", {
  sci_HashSet$HashSetCollision1: 1,
  sci_HashSet$LeafHashSet: 1,
  sci_HashSet: 1,
  sc_AbstractSet: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_Set: 1,
  F1: 1,
  sc_GenSet: 1,
  sc_GenSetLike: 1,
  scg_GenericSetTemplate: 1,
  sc_SetLike: 1,
  scg_Subtractable: 1,
  sci_Set: 1,
  sci_Iterable: 1,
  sci_Traversable: 1,
  s_Immutable: 1,
  sc_CustomParallelizable: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_HashSet$HashSetCollision1.prototype.$classData = $d_sci_HashSet$HashSetCollision1;
function $p_sci_ListMap__reverseList$1__sci_List($thiz) {
  var curr = $thiz;
  var res = $m_sci_Nil$();
  while ((!curr.isEmpty__Z())) {
    var x$4 = new $c_T2(curr.key__O(), curr.value__O());
    var this$1 = res;
    res = new $c_sci_$colon$colon(x$4, this$1);
    curr = curr.next__sci_ListMap()
  };
  return res
}
/** @constructor */
function $c_sci_ListMap() {
  /*<skip>*/
}
$c_sci_ListMap.prototype = new $h_sci_AbstractMap();
$c_sci_ListMap.prototype.constructor = $c_sci_ListMap;
/** @constructor */
function $h_sci_ListMap() {
  /*<skip>*/
}
$h_sci_ListMap.prototype = $c_sci_ListMap.prototype;
$c_sci_ListMap.prototype.size__I = (function() {
  return 0
});
$c_sci_ListMap.prototype.isEmpty__Z = (function() {
  return true
});
$c_sci_ListMap.prototype.get__O__s_Option = (function(key) {
  return $m_s_None$()
});
$c_sci_ListMap.prototype.foreachEntry__F2__V = (function(f) {
  var current = this;
  while ((!current.isEmpty__Z())) {
    f.apply__O__O__O(current.key__O(), current.value__O());
    current = current.next__sci_ListMap()
  }
});
$c_sci_ListMap.prototype.hashCode__I = (function() {
  if (this.isEmpty__Z()) {
    return $m_s_util_hashing_MurmurHash3$().s_util_hashing_MurmurHash3$__f_emptyMapHash
  } else {
    var hasher = new $c_sci_Map$HashCodeAccumulator();
    this.foreachEntry__F2__V(hasher);
    return hasher.finalizeHash__I()
  }
});
$c_sci_ListMap.prototype.updated__O__O__sci_ListMap = (function(key, value) {
  return new $c_sci_ListMap$Node(this, key, value)
});
$c_sci_ListMap.prototype.$plus__T2__sci_ListMap = (function(kv) {
  return new $c_sci_ListMap$Node(this, kv.T2__f__1, kv.T2__f__2)
});
$c_sci_ListMap.prototype.$plus$plus__sc_GenTraversableOnce__sci_ListMap = (function(xs) {
  return (xs.isEmpty__Z() ? this : $as_sci_ListMap(xs.$div$colon__O__F2__O(this, new $c_sjsr_AnonFunction2(((x$2$2, x$3$2) => {
    var x$2 = $as_sci_ListMap(x$2$2);
    var x$3 = $as_T2(x$3$2);
    return x$2.$plus__T2__sci_ListMap(x$3)
  })))))
});
$c_sci_ListMap.prototype.iterator__sc_Iterator = (function() {
  var this$1 = $p_sci_ListMap__reverseList$1__sci_List(this);
  return $f_sc_LinearSeqLike__iterator__sc_Iterator(this$1)
});
$c_sci_ListMap.prototype.key__O = (function() {
  throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), "key of empty map")
});
$c_sci_ListMap.prototype.value__O = (function() {
  throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), "value of empty map")
});
$c_sci_ListMap.prototype.next__sci_ListMap = (function() {
  throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), "next of empty map")
});
$c_sci_ListMap.prototype.stringPrefix__T = (function() {
  return "ListMap"
});
$c_sci_ListMap.prototype.thisCollection__sc_Traversable = (function() {
  return this
});
$c_sci_ListMap.prototype.$plus__T2__sc_GenMap = (function(kv) {
  return this.$plus__T2__sci_ListMap(kv)
});
$c_sci_ListMap.prototype.$plus__T2__sci_Map = (function(kv) {
  return this.$plus__T2__sci_ListMap(kv)
});
$c_sci_ListMap.prototype.updated__O__O__sci_Map = (function(key, value) {
  return this.updated__O__O__sci_ListMap(key, value)
});
$c_sci_ListMap.prototype.empty__sc_Map = (function() {
  $m_sci_ListMap$();
  return $m_sci_ListMap$EmptyListMap$()
});
$c_sci_ListMap.prototype.empty__sci_Map = (function() {
  $m_sci_ListMap$();
  return $m_sci_ListMap$EmptyListMap$()
});
function $as_sci_ListMap(obj) {
  return (((obj instanceof $c_sci_ListMap) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.ListMap"))
}
function $isArrayOf_sci_ListMap(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_ListMap)))
}
function $asArrayOf_sci_ListMap(obj, depth) {
  return (($isArrayOf_sci_ListMap(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.ListMap;", depth))
}
/** @constructor */
function $c_sci_Map$EmptyMap$() {
  /*<skip>*/
}
$c_sci_Map$EmptyMap$.prototype = new $h_sci_AbstractMap();
$c_sci_Map$EmptyMap$.prototype.constructor = $c_sci_Map$EmptyMap$;
/** @constructor */
function $h_sci_Map$EmptyMap$() {
  /*<skip>*/
}
$h_sci_Map$EmptyMap$.prototype = $c_sci_Map$EmptyMap$.prototype;
$c_sci_Map$EmptyMap$.prototype.size__I = (function() {
  return 0
});
$c_sci_Map$EmptyMap$.prototype.apply__O__E = (function(key) {
  throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), ("key not found: " + key))
});
$c_sci_Map$EmptyMap$.prototype.get__O__s_Option = (function(key) {
  return $m_s_None$()
});
$c_sci_Map$EmptyMap$.prototype.getOrElse__O__F0__O = (function(key, default$1) {
  return default$1.apply__O()
});
$c_sci_Map$EmptyMap$.prototype.iterator__sc_Iterator = (function() {
  return $m_sc_Iterator$().sc_Iterator$__f_empty
});
$c_sci_Map$EmptyMap$.prototype.updated__O__O__sci_Map = (function(key, value) {
  return new $c_sci_Map$Map1(key, value)
});
$c_sci_Map$EmptyMap$.prototype.$plus__T2__sci_Map = (function(kv) {
  var key = kv.T2__f__1;
  var value = kv.T2__f__2;
  return new $c_sci_Map$Map1(key, value)
});
$c_sci_Map$EmptyMap$.prototype.$plus$plus__sc_GenTraversableOnce__scg_CanBuildFrom__O = (function(that, bf) {
  if ($m_sci_Map$().scala$collection$immutable$Map$$isMapCBF__scg_CanBuildFrom__Z(bf)) {
    if ((that instanceof $c_sci_HashMap)) {
      var x2 = $as_sci_HashMap(that);
      if ((x2.size__I() > 4)) {
        return x2
      }
    };
    if ((that !== null)) {
      if ((that === $m_sci_Map$EmptyMap$())) {
        return this
      }
    };
    if ((that instanceof $c_sci_Map$Map1)) {
      var x4 = $as_sci_Map$Map1(that);
      return x4
    };
    if ((that instanceof $c_sci_Map$Map2)) {
      var x5 = $as_sci_Map$Map2(that);
      return x5
    };
    if ((that instanceof $c_sci_Map$Map3)) {
      var x6 = $as_sci_Map$Map3(that);
      return x6
    };
    if ((that instanceof $c_sci_Map$Map4)) {
      var x7 = $as_sci_Map$Map4(that);
      return x7
    };
    return $f_sc_TraversableLike__$plus$plus__sc_GenTraversableOnce__scg_CanBuildFrom__O(this, that, bf)
  } else if ($m_sci_Map$().scala$collection$immutable$Map$$isHashMapCBF__scg_CanBuildFrom__Z(bf)) {
    if ((that instanceof $c_sci_HashMap)) {
      var x2$2 = $as_sci_HashMap(that);
      return x2$2
    } else {
      return $f_sc_TraversableLike__$plus$plus__sc_GenTraversableOnce__scg_CanBuildFrom__O(this, that, bf)
    }
  } else {
    return $f_sc_TraversableLike__$plus$plus__sc_GenTraversableOnce__scg_CanBuildFrom__O(this, that, bf)
  }
});
$c_sci_Map$EmptyMap$.prototype.hashCode__I = (function() {
  return $m_s_util_hashing_MurmurHash3$().s_util_hashing_MurmurHash3$__f_emptyMapHash
});
$c_sci_Map$EmptyMap$.prototype.$plus__T2__sc_GenMap = (function(kv) {
  var key = kv.T2__f__1;
  var value = kv.T2__f__2;
  return new $c_sci_Map$Map1(key, value)
});
$c_sci_Map$EmptyMap$.prototype.apply__O__O = (function(key) {
  this.apply__O__E(key)
});
var $d_sci_Map$EmptyMap$ = new $TypeData().initClass({
  sci_Map$EmptyMap$: 0
}, false, "scala.collection.immutable.Map$EmptyMap$", {
  sci_Map$EmptyMap$: 1,
  sci_AbstractMap: 1,
  sc_AbstractMap: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_Map: 1,
  sc_GenMap: 1,
  sc_GenMapLike: 1,
  sc_MapLike: 1,
  s_PartialFunction: 1,
  F1: 1,
  scg_Subtractable: 1,
  sci_Map: 1,
  sci_Iterable: 1,
  sci_Traversable: 1,
  s_Immutable: 1,
  sci_MapLike: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1,
  sci_HasForeachEntry: 1
});
$c_sci_Map$EmptyMap$.prototype.$classData = $d_sci_Map$EmptyMap$;
var $n_sci_Map$EmptyMap$;
function $m_sci_Map$EmptyMap$() {
  if ((!$n_sci_Map$EmptyMap$)) {
    $n_sci_Map$EmptyMap$ = new $c_sci_Map$EmptyMap$()
  };
  return $n_sci_Map$EmptyMap$
}
/** @constructor */
function $c_sci_Map$Map1(key1, value1) {
  this.sci_Map$Map1__f_key1 = null;
  this.sci_Map$Map1__f_value1 = null;
  this.sci_Map$Map1__f_key1 = key1;
  this.sci_Map$Map1__f_value1 = value1
}
$c_sci_Map$Map1.prototype = new $h_sci_AbstractMap();
$c_sci_Map$Map1.prototype.constructor = $c_sci_Map$Map1;
/** @constructor */
function $h_sci_Map$Map1() {
  /*<skip>*/
}
$h_sci_Map$Map1.prototype = $c_sci_Map$Map1.prototype;
$c_sci_Map$Map1.prototype.size__I = (function() {
  return 1
});
$c_sci_Map$Map1.prototype.apply__O__O = (function(key) {
  if ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map1__f_key1)) {
    return this.sci_Map$Map1__f_value1
  } else {
    throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), ("key not found: " + key))
  }
});
$c_sci_Map$Map1.prototype.get__O__s_Option = (function(key) {
  return ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map1__f_key1) ? new $c_s_Some(this.sci_Map$Map1__f_value1) : $m_s_None$())
});
$c_sci_Map$Map1.prototype.getOrElse__O__F0__O = (function(key, default$1) {
  return ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map1__f_key1) ? this.sci_Map$Map1__f_value1 : default$1.apply__O())
});
$c_sci_Map$Map1.prototype.iterator__sc_Iterator = (function() {
  $m_sc_Iterator$();
  var elem = new $c_T2(this.sci_Map$Map1__f_key1, this.sci_Map$Map1__f_value1);
  return new $c_sc_Iterator$$anon$3(elem)
});
$c_sci_Map$Map1.prototype.updated__O__O__sci_Map = (function(key, value) {
  return ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map1__f_key1) ? new $c_sci_Map$Map1(this.sci_Map$Map1__f_key1, value) : new $c_sci_Map$Map2(this.sci_Map$Map1__f_key1, this.sci_Map$Map1__f_value1, key, value))
});
$c_sci_Map$Map1.prototype.$plus__T2__sci_Map = (function(kv) {
  return this.updated__O__O__sci_Map(kv.T2__f__1, kv.T2__f__2)
});
$c_sci_Map$Map1.prototype.$plus$plus__sc_GenTraversableOnce__scg_CanBuildFrom__O = (function(that, bf) {
  if ($m_sci_Map$().scala$collection$immutable$Map$$isMapCBF__scg_CanBuildFrom__Z(bf)) {
    if ((that !== null)) {
      if ((that === $m_sci_Map$EmptyMap$())) {
        return this
      }
    };
    if ((that instanceof $c_sci_Map$Map1)) {
      var x3 = $as_sci_Map$Map1(that);
      return x3.addTo__sci_Map__sci_Map(this)
    };
    if ((that instanceof $c_sci_Map$Map2)) {
      var x4 = $as_sci_Map$Map2(that);
      return x4.addTo__sci_Map__sci_Map(this)
    };
    if ((that instanceof $c_sci_Map$Map3)) {
      var x5 = $as_sci_Map$Map3(that);
      return x5.addTo__sci_Map__sci_Map(this)
    };
    if ((that instanceof $c_sci_Map$Map4)) {
      var x6 = $as_sci_Map$Map4(that);
      return x6.addTo__sci_Map__sci_Map(this)
    };
    return $f_sc_TraversableLike__$plus$plus__sc_GenTraversableOnce__scg_CanBuildFrom__O(this, that, bf)
  } else {
    return $f_sc_TraversableLike__$plus$plus__sc_GenTraversableOnce__scg_CanBuildFrom__O(this, that, bf)
  }
});
$c_sci_Map$Map1.prototype.addTo__sci_Map__sci_Map = (function(m) {
  return m.updated__O__O__sci_Map(this.sci_Map$Map1__f_key1, this.sci_Map$Map1__f_value1)
});
$c_sci_Map$Map1.prototype.foreach__F1__V = (function(f) {
  f.apply__O__O(new $c_T2(this.sci_Map$Map1__f_key1, this.sci_Map$Map1__f_value1))
});
$c_sci_Map$Map1.prototype.forall__F1__Z = (function(p) {
  return $uZ(p.apply__O__O(new $c_T2(this.sci_Map$Map1__f_key1, this.sci_Map$Map1__f_value1)))
});
$c_sci_Map$Map1.prototype.hashCode__I = (function() {
  var a = 0;
  var b = 0;
  var c = 1;
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  var x = this.sci_Map$Map1__f_key1;
  var y = this.sci_Map$Map1__f_value1;
  var h = this$1.product2Hash__O__O__I__I(x, y, (-889275714));
  a = ((a + h) | 0);
  b = (b ^ h);
  if ((h !== 0)) {
    c = Math.imul(c, h)
  };
  h = $m_s_util_hashing_MurmurHash3$().s_util_hashing_MurmurHash3$__f_mapSeed;
  h = $m_s_util_hashing_MurmurHash3$().mix__I__I__I(h, a);
  h = $m_s_util_hashing_MurmurHash3$().mix__I__I__I(h, b);
  h = $m_s_util_hashing_MurmurHash3$().mixLast__I__I__I(h, c);
  return $m_s_util_hashing_MurmurHash3$().finalizeHash__I__I__I(h, 1)
});
$c_sci_Map$Map1.prototype.$plus__T2__sc_GenMap = (function(kv) {
  return this.updated__O__O__sci_Map(kv.T2__f__1, kv.T2__f__2)
});
function $as_sci_Map$Map1(obj) {
  return (((obj instanceof $c_sci_Map$Map1) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Map$Map1"))
}
function $isArrayOf_sci_Map$Map1(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Map$Map1)))
}
function $asArrayOf_sci_Map$Map1(obj, depth) {
  return (($isArrayOf_sci_Map$Map1(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.Map$Map1;", depth))
}
var $d_sci_Map$Map1 = new $TypeData().initClass({
  sci_Map$Map1: 0
}, false, "scala.collection.immutable.Map$Map1", {
  sci_Map$Map1: 1,
  sci_AbstractMap: 1,
  sc_AbstractMap: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_Map: 1,
  sc_GenMap: 1,
  sc_GenMapLike: 1,
  sc_MapLike: 1,
  s_PartialFunction: 1,
  F1: 1,
  scg_Subtractable: 1,
  sci_Map: 1,
  sci_Iterable: 1,
  sci_Traversable: 1,
  s_Immutable: 1,
  sci_MapLike: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1,
  sci_HasForeachEntry: 1
});
$c_sci_Map$Map1.prototype.$classData = $d_sci_Map$Map1;
/** @constructor */
function $c_sci_Map$Map2(key1, value1, key2, value2) {
  this.sci_Map$Map2__f_key1 = null;
  this.sci_Map$Map2__f_value1 = null;
  this.sci_Map$Map2__f_key2 = null;
  this.sci_Map$Map2__f_value2 = null;
  this.sci_Map$Map2__f_key1 = key1;
  this.sci_Map$Map2__f_value1 = value1;
  this.sci_Map$Map2__f_key2 = key2;
  this.sci_Map$Map2__f_value2 = value2
}
$c_sci_Map$Map2.prototype = new $h_sci_AbstractMap();
$c_sci_Map$Map2.prototype.constructor = $c_sci_Map$Map2;
/** @constructor */
function $h_sci_Map$Map2() {
  /*<skip>*/
}
$h_sci_Map$Map2.prototype = $c_sci_Map$Map2.prototype;
$c_sci_Map$Map2.prototype.size__I = (function() {
  return 2
});
$c_sci_Map$Map2.prototype.apply__O__O = (function(key) {
  if ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map2__f_key1)) {
    return this.sci_Map$Map2__f_value1
  } else if ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map2__f_key2)) {
    return this.sci_Map$Map2__f_value2
  } else {
    throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), ("key not found: " + key))
  }
});
$c_sci_Map$Map2.prototype.get__O__s_Option = (function(key) {
  return ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map2__f_key1) ? new $c_s_Some(this.sci_Map$Map2__f_value1) : ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map2__f_key2) ? new $c_s_Some(this.sci_Map$Map2__f_value2) : $m_s_None$()))
});
$c_sci_Map$Map2.prototype.getOrElse__O__F0__O = (function(key, default$1) {
  return ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map2__f_key1) ? this.sci_Map$Map2__f_value1 : ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map2__f_key2) ? this.sci_Map$Map2__f_value2 : default$1.apply__O()))
});
$c_sci_Map$Map2.prototype.scala$collection$immutable$Map$Map2$$_getKey__I__O = (function(i) {
  switch (i) {
    case 0: {
      return this.sci_Map$Map2__f_key1;
      break
    }
    case 1: {
      return this.sci_Map$Map2__f_key2;
      break
    }
    default: {
      throw new $c_s_MatchError(i)
    }
  }
});
$c_sci_Map$Map2.prototype.scala$collection$immutable$Map$Map2$$_getValue__I__O = (function(i) {
  switch (i) {
    case 0: {
      return this.sci_Map$Map2__f_value1;
      break
    }
    case 1: {
      return this.sci_Map$Map2__f_value2;
      break
    }
    default: {
      throw new $c_s_MatchError(i)
    }
  }
});
$c_sci_Map$Map2.prototype.iterator__sc_Iterator = (function() {
  return new $c_sci_Map$Map2$$anon$1(this)
});
$c_sci_Map$Map2.prototype.updated__O__O__sci_Map = (function(key, value) {
  return ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map2__f_key1) ? new $c_sci_Map$Map2(this.sci_Map$Map2__f_key1, value, this.sci_Map$Map2__f_key2, this.sci_Map$Map2__f_value2) : ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map2__f_key2) ? new $c_sci_Map$Map2(this.sci_Map$Map2__f_key1, this.sci_Map$Map2__f_value1, this.sci_Map$Map2__f_key2, value) : new $c_sci_Map$Map3(this.sci_Map$Map2__f_key1, this.sci_Map$Map2__f_value1, this.sci_Map$Map2__f_key2, this.sci_Map$Map2__f_value2, key, value)))
});
$c_sci_Map$Map2.prototype.$plus__T2__sci_Map = (function(kv) {
  return this.updated__O__O__sci_Map(kv.T2__f__1, kv.T2__f__2)
});
$c_sci_Map$Map2.prototype.$plus$plus__sc_GenTraversableOnce__scg_CanBuildFrom__O = (function(that, bf) {
  if ($m_sci_Map$().scala$collection$immutable$Map$$isMapCBF__scg_CanBuildFrom__Z(bf)) {
    if ((that !== null)) {
      if ((that === $m_sci_Map$EmptyMap$())) {
        return this
      }
    };
    if ((that instanceof $c_sci_Map$Map1)) {
      var x3 = $as_sci_Map$Map1(that);
      return x3.addTo__sci_Map__sci_Map(this)
    };
    if ((that instanceof $c_sci_Map$Map2)) {
      var x4 = $as_sci_Map$Map2(that);
      return x4.addTo__sci_Map__sci_Map(this)
    };
    if ((that instanceof $c_sci_Map$Map3)) {
      var x5 = $as_sci_Map$Map3(that);
      return x5.addTo__sci_Map__sci_Map(this)
    };
    if ((that instanceof $c_sci_Map$Map4)) {
      var x6 = $as_sci_Map$Map4(that);
      return x6.addTo__sci_Map__sci_Map(this)
    };
    return $f_sc_TraversableLike__$plus$plus__sc_GenTraversableOnce__scg_CanBuildFrom__O(this, that, bf)
  } else {
    return $f_sc_TraversableLike__$plus$plus__sc_GenTraversableOnce__scg_CanBuildFrom__O(this, that, bf)
  }
});
$c_sci_Map$Map2.prototype.addTo__sci_Map__sci_Map = (function(m) {
  return m.updated__O__O__sci_Map(this.sci_Map$Map2__f_key1, this.sci_Map$Map2__f_value1).updated__O__O__sci_Map(this.sci_Map$Map2__f_key2, this.sci_Map$Map2__f_value2)
});
$c_sci_Map$Map2.prototype.foreach__F1__V = (function(f) {
  f.apply__O__O(new $c_T2(this.sci_Map$Map2__f_key1, this.sci_Map$Map2__f_value1));
  f.apply__O__O(new $c_T2(this.sci_Map$Map2__f_key2, this.sci_Map$Map2__f_value2))
});
$c_sci_Map$Map2.prototype.forall__F1__Z = (function(p) {
  return ($uZ(p.apply__O__O(new $c_T2(this.sci_Map$Map2__f_key1, this.sci_Map$Map2__f_value1))) && $uZ(p.apply__O__O(new $c_T2(this.sci_Map$Map2__f_key2, this.sci_Map$Map2__f_value2))))
});
$c_sci_Map$Map2.prototype.hashCode__I = (function() {
  var a = 0;
  var b = 0;
  var c = 1;
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  var x = this.sci_Map$Map2__f_key1;
  var y = this.sci_Map$Map2__f_value1;
  var h = this$1.product2Hash__O__O__I__I(x, y, (-889275714));
  a = ((a + h) | 0);
  b = (b ^ h);
  if ((h !== 0)) {
    c = Math.imul(c, h)
  };
  var this$2 = $m_s_util_hashing_MurmurHash3$();
  var x$1 = this.sci_Map$Map2__f_key2;
  var y$1 = this.sci_Map$Map2__f_value2;
  h = this$2.product2Hash__O__O__I__I(x$1, y$1, (-889275714));
  a = ((a + h) | 0);
  b = (b ^ h);
  if ((h !== 0)) {
    c = Math.imul(c, h)
  };
  h = $m_s_util_hashing_MurmurHash3$().s_util_hashing_MurmurHash3$__f_mapSeed;
  h = $m_s_util_hashing_MurmurHash3$().mix__I__I__I(h, a);
  h = $m_s_util_hashing_MurmurHash3$().mix__I__I__I(h, b);
  h = $m_s_util_hashing_MurmurHash3$().mixLast__I__I__I(h, c);
  return $m_s_util_hashing_MurmurHash3$().finalizeHash__I__I__I(h, 2)
});
$c_sci_Map$Map2.prototype.$plus__T2__sc_GenMap = (function(kv) {
  return this.updated__O__O__sci_Map(kv.T2__f__1, kv.T2__f__2)
});
function $as_sci_Map$Map2(obj) {
  return (((obj instanceof $c_sci_Map$Map2) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Map$Map2"))
}
function $isArrayOf_sci_Map$Map2(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Map$Map2)))
}
function $asArrayOf_sci_Map$Map2(obj, depth) {
  return (($isArrayOf_sci_Map$Map2(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.Map$Map2;", depth))
}
var $d_sci_Map$Map2 = new $TypeData().initClass({
  sci_Map$Map2: 0
}, false, "scala.collection.immutable.Map$Map2", {
  sci_Map$Map2: 1,
  sci_AbstractMap: 1,
  sc_AbstractMap: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_Map: 1,
  sc_GenMap: 1,
  sc_GenMapLike: 1,
  sc_MapLike: 1,
  s_PartialFunction: 1,
  F1: 1,
  scg_Subtractable: 1,
  sci_Map: 1,
  sci_Iterable: 1,
  sci_Traversable: 1,
  s_Immutable: 1,
  sci_MapLike: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1,
  sci_HasForeachEntry: 1
});
$c_sci_Map$Map2.prototype.$classData = $d_sci_Map$Map2;
/** @constructor */
function $c_sci_Map$Map3(key1, value1, key2, value2, key3, value3) {
  this.sci_Map$Map3__f_key1 = null;
  this.sci_Map$Map3__f_value1 = null;
  this.sci_Map$Map3__f_key2 = null;
  this.sci_Map$Map3__f_value2 = null;
  this.sci_Map$Map3__f_key3 = null;
  this.sci_Map$Map3__f_value3 = null;
  this.sci_Map$Map3__f_key1 = key1;
  this.sci_Map$Map3__f_value1 = value1;
  this.sci_Map$Map3__f_key2 = key2;
  this.sci_Map$Map3__f_value2 = value2;
  this.sci_Map$Map3__f_key3 = key3;
  this.sci_Map$Map3__f_value3 = value3
}
$c_sci_Map$Map3.prototype = new $h_sci_AbstractMap();
$c_sci_Map$Map3.prototype.constructor = $c_sci_Map$Map3;
/** @constructor */
function $h_sci_Map$Map3() {
  /*<skip>*/
}
$h_sci_Map$Map3.prototype = $c_sci_Map$Map3.prototype;
$c_sci_Map$Map3.prototype.size__I = (function() {
  return 3
});
$c_sci_Map$Map3.prototype.apply__O__O = (function(key) {
  if ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map3__f_key1)) {
    return this.sci_Map$Map3__f_value1
  } else if ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map3__f_key2)) {
    return this.sci_Map$Map3__f_value2
  } else if ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map3__f_key3)) {
    return this.sci_Map$Map3__f_value3
  } else {
    throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), ("key not found: " + key))
  }
});
$c_sci_Map$Map3.prototype.get__O__s_Option = (function(key) {
  return ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map3__f_key1) ? new $c_s_Some(this.sci_Map$Map3__f_value1) : ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map3__f_key2) ? new $c_s_Some(this.sci_Map$Map3__f_value2) : ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map3__f_key3) ? new $c_s_Some(this.sci_Map$Map3__f_value3) : $m_s_None$())))
});
$c_sci_Map$Map3.prototype.getOrElse__O__F0__O = (function(key, default$1) {
  return ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map3__f_key1) ? this.sci_Map$Map3__f_value1 : ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map3__f_key2) ? this.sci_Map$Map3__f_value2 : ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map3__f_key3) ? this.sci_Map$Map3__f_value3 : default$1.apply__O())))
});
$c_sci_Map$Map3.prototype.scala$collection$immutable$Map$Map3$$_getKey__I__O = (function(i) {
  switch (i) {
    case 0: {
      return this.sci_Map$Map3__f_key1;
      break
    }
    case 1: {
      return this.sci_Map$Map3__f_key2;
      break
    }
    case 2: {
      return this.sci_Map$Map3__f_key3;
      break
    }
    default: {
      throw new $c_s_MatchError(i)
    }
  }
});
$c_sci_Map$Map3.prototype.scala$collection$immutable$Map$Map3$$_getValue__I__O = (function(i) {
  switch (i) {
    case 0: {
      return this.sci_Map$Map3__f_value1;
      break
    }
    case 1: {
      return this.sci_Map$Map3__f_value2;
      break
    }
    case 2: {
      return this.sci_Map$Map3__f_value3;
      break
    }
    default: {
      throw new $c_s_MatchError(i)
    }
  }
});
$c_sci_Map$Map3.prototype.iterator__sc_Iterator = (function() {
  return new $c_sci_Map$Map3$$anon$4(this)
});
$c_sci_Map$Map3.prototype.updated__O__O__sci_Map = (function(key, value) {
  return ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map3__f_key1) ? new $c_sci_Map$Map3(this.sci_Map$Map3__f_key1, value, this.sci_Map$Map3__f_key2, this.sci_Map$Map3__f_value2, this.sci_Map$Map3__f_key3, this.sci_Map$Map3__f_value3) : ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map3__f_key2) ? new $c_sci_Map$Map3(this.sci_Map$Map3__f_key1, this.sci_Map$Map3__f_value1, this.sci_Map$Map3__f_key2, value, this.sci_Map$Map3__f_key3, this.sci_Map$Map3__f_value3) : ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map3__f_key3) ? new $c_sci_Map$Map3(this.sci_Map$Map3__f_key1, this.sci_Map$Map3__f_value1, this.sci_Map$Map3__f_key2, this.sci_Map$Map3__f_value2, this.sci_Map$Map3__f_key3, value) : new $c_sci_Map$Map4(this.sci_Map$Map3__f_key1, this.sci_Map$Map3__f_value1, this.sci_Map$Map3__f_key2, this.sci_Map$Map3__f_value2, this.sci_Map$Map3__f_key3, this.sci_Map$Map3__f_value3, key, value))))
});
$c_sci_Map$Map3.prototype.$plus__T2__sci_Map = (function(kv) {
  return this.updated__O__O__sci_Map(kv.T2__f__1, kv.T2__f__2)
});
$c_sci_Map$Map3.prototype.$plus$plus__sc_GenTraversableOnce__scg_CanBuildFrom__O = (function(that, bf) {
  if ($m_sci_Map$().scala$collection$immutable$Map$$isMapCBF__scg_CanBuildFrom__Z(bf)) {
    if ((that !== null)) {
      if ((that === $m_sci_Map$EmptyMap$())) {
        return this
      }
    };
    if ((that instanceof $c_sci_Map$Map1)) {
      var x3 = $as_sci_Map$Map1(that);
      return x3.addTo__sci_Map__sci_Map(this)
    };
    if ((that instanceof $c_sci_Map$Map2)) {
      var x4 = $as_sci_Map$Map2(that);
      return x4.addTo__sci_Map__sci_Map(this)
    };
    if ((that instanceof $c_sci_Map$Map3)) {
      var x5 = $as_sci_Map$Map3(that);
      return x5.addTo__sci_Map__sci_Map(this)
    };
    if ((that instanceof $c_sci_Map$Map4)) {
      var x6 = $as_sci_Map$Map4(that);
      return x6.addTo__sci_Map__sci_Map(this)
    };
    return $f_sc_TraversableLike__$plus$plus__sc_GenTraversableOnce__scg_CanBuildFrom__O(this, that, bf)
  } else {
    return $f_sc_TraversableLike__$plus$plus__sc_GenTraversableOnce__scg_CanBuildFrom__O(this, that, bf)
  }
});
$c_sci_Map$Map3.prototype.addTo__sci_Map__sci_Map = (function(m) {
  return m.updated__O__O__sci_Map(this.sci_Map$Map3__f_key1, this.sci_Map$Map3__f_value1).updated__O__O__sci_Map(this.sci_Map$Map3__f_key2, this.sci_Map$Map3__f_value2).updated__O__O__sci_Map(this.sci_Map$Map3__f_key3, this.sci_Map$Map3__f_value3)
});
$c_sci_Map$Map3.prototype.foreach__F1__V = (function(f) {
  f.apply__O__O(new $c_T2(this.sci_Map$Map3__f_key1, this.sci_Map$Map3__f_value1));
  f.apply__O__O(new $c_T2(this.sci_Map$Map3__f_key2, this.sci_Map$Map3__f_value2));
  f.apply__O__O(new $c_T2(this.sci_Map$Map3__f_key3, this.sci_Map$Map3__f_value3))
});
$c_sci_Map$Map3.prototype.forall__F1__Z = (function(p) {
  return (($uZ(p.apply__O__O(new $c_T2(this.sci_Map$Map3__f_key1, this.sci_Map$Map3__f_value1))) && $uZ(p.apply__O__O(new $c_T2(this.sci_Map$Map3__f_key2, this.sci_Map$Map3__f_value2)))) && $uZ(p.apply__O__O(new $c_T2(this.sci_Map$Map3__f_key3, this.sci_Map$Map3__f_value3))))
});
$c_sci_Map$Map3.prototype.hashCode__I = (function() {
  var a = 0;
  var b = 0;
  var c = 1;
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  var x = this.sci_Map$Map3__f_key1;
  var y = this.sci_Map$Map3__f_value1;
  var h = this$1.product2Hash__O__O__I__I(x, y, (-889275714));
  a = ((a + h) | 0);
  b = (b ^ h);
  if ((h !== 0)) {
    c = Math.imul(c, h)
  };
  var this$2 = $m_s_util_hashing_MurmurHash3$();
  var x$1 = this.sci_Map$Map3__f_key2;
  var y$1 = this.sci_Map$Map3__f_value2;
  h = this$2.product2Hash__O__O__I__I(x$1, y$1, (-889275714));
  a = ((a + h) | 0);
  b = (b ^ h);
  if ((h !== 0)) {
    c = Math.imul(c, h)
  };
  var this$3 = $m_s_util_hashing_MurmurHash3$();
  var x$2 = this.sci_Map$Map3__f_key3;
  var y$2 = this.sci_Map$Map3__f_value3;
  h = this$3.product2Hash__O__O__I__I(x$2, y$2, (-889275714));
  a = ((a + h) | 0);
  b = (b ^ h);
  if ((h !== 0)) {
    c = Math.imul(c, h)
  };
  h = $m_s_util_hashing_MurmurHash3$().s_util_hashing_MurmurHash3$__f_mapSeed;
  h = $m_s_util_hashing_MurmurHash3$().mix__I__I__I(h, a);
  h = $m_s_util_hashing_MurmurHash3$().mix__I__I__I(h, b);
  h = $m_s_util_hashing_MurmurHash3$().mixLast__I__I__I(h, c);
  return $m_s_util_hashing_MurmurHash3$().finalizeHash__I__I__I(h, 3)
});
$c_sci_Map$Map3.prototype.$plus__T2__sc_GenMap = (function(kv) {
  return this.updated__O__O__sci_Map(kv.T2__f__1, kv.T2__f__2)
});
function $as_sci_Map$Map3(obj) {
  return (((obj instanceof $c_sci_Map$Map3) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Map$Map3"))
}
function $isArrayOf_sci_Map$Map3(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Map$Map3)))
}
function $asArrayOf_sci_Map$Map3(obj, depth) {
  return (($isArrayOf_sci_Map$Map3(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.Map$Map3;", depth))
}
var $d_sci_Map$Map3 = new $TypeData().initClass({
  sci_Map$Map3: 0
}, false, "scala.collection.immutable.Map$Map3", {
  sci_Map$Map3: 1,
  sci_AbstractMap: 1,
  sc_AbstractMap: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_Map: 1,
  sc_GenMap: 1,
  sc_GenMapLike: 1,
  sc_MapLike: 1,
  s_PartialFunction: 1,
  F1: 1,
  scg_Subtractable: 1,
  sci_Map: 1,
  sci_Iterable: 1,
  sci_Traversable: 1,
  s_Immutable: 1,
  sci_MapLike: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1,
  sci_HasForeachEntry: 1
});
$c_sci_Map$Map3.prototype.$classData = $d_sci_Map$Map3;
/** @constructor */
function $c_sci_Map$Map4(key1, value1, key2, value2, key3, value3, key4, value4) {
  this.sci_Map$Map4__f_key1 = null;
  this.sci_Map$Map4__f_value1 = null;
  this.sci_Map$Map4__f_key2 = null;
  this.sci_Map$Map4__f_value2 = null;
  this.sci_Map$Map4__f_key3 = null;
  this.sci_Map$Map4__f_value3 = null;
  this.sci_Map$Map4__f_key4 = null;
  this.sci_Map$Map4__f_value4 = null;
  this.sci_Map$Map4__f_key1 = key1;
  this.sci_Map$Map4__f_value1 = value1;
  this.sci_Map$Map4__f_key2 = key2;
  this.sci_Map$Map4__f_value2 = value2;
  this.sci_Map$Map4__f_key3 = key3;
  this.sci_Map$Map4__f_value3 = value3;
  this.sci_Map$Map4__f_key4 = key4;
  this.sci_Map$Map4__f_value4 = value4
}
$c_sci_Map$Map4.prototype = new $h_sci_AbstractMap();
$c_sci_Map$Map4.prototype.constructor = $c_sci_Map$Map4;
/** @constructor */
function $h_sci_Map$Map4() {
  /*<skip>*/
}
$h_sci_Map$Map4.prototype = $c_sci_Map$Map4.prototype;
$c_sci_Map$Map4.prototype.size__I = (function() {
  return 4
});
$c_sci_Map$Map4.prototype.apply__O__O = (function(key) {
  if ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map4__f_key1)) {
    return this.sci_Map$Map4__f_value1
  } else if ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map4__f_key2)) {
    return this.sci_Map$Map4__f_value2
  } else if ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map4__f_key3)) {
    return this.sci_Map$Map4__f_value3
  } else if ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map4__f_key4)) {
    return this.sci_Map$Map4__f_value4
  } else {
    throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), ("key not found: " + key))
  }
});
$c_sci_Map$Map4.prototype.get__O__s_Option = (function(key) {
  return ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map4__f_key1) ? new $c_s_Some(this.sci_Map$Map4__f_value1) : ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map4__f_key2) ? new $c_s_Some(this.sci_Map$Map4__f_value2) : ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map4__f_key3) ? new $c_s_Some(this.sci_Map$Map4__f_value3) : ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map4__f_key4) ? new $c_s_Some(this.sci_Map$Map4__f_value4) : $m_s_None$()))))
});
$c_sci_Map$Map4.prototype.getOrElse__O__F0__O = (function(key, default$1) {
  return ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map4__f_key1) ? this.sci_Map$Map4__f_value1 : ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map4__f_key2) ? this.sci_Map$Map4__f_value2 : ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map4__f_key3) ? this.sci_Map$Map4__f_value3 : ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map4__f_key4) ? this.sci_Map$Map4__f_value4 : default$1.apply__O()))))
});
$c_sci_Map$Map4.prototype.scala$collection$immutable$Map$Map4$$_getKey__I__O = (function(i) {
  switch (i) {
    case 0: {
      return this.sci_Map$Map4__f_key1;
      break
    }
    case 1: {
      return this.sci_Map$Map4__f_key2;
      break
    }
    case 2: {
      return this.sci_Map$Map4__f_key3;
      break
    }
    case 3: {
      return this.sci_Map$Map4__f_key4;
      break
    }
    default: {
      throw new $c_s_MatchError(i)
    }
  }
});
$c_sci_Map$Map4.prototype.scala$collection$immutable$Map$Map4$$_getValue__I__O = (function(i) {
  switch (i) {
    case 0: {
      return this.sci_Map$Map4__f_value1;
      break
    }
    case 1: {
      return this.sci_Map$Map4__f_value2;
      break
    }
    case 2: {
      return this.sci_Map$Map4__f_value3;
      break
    }
    case 3: {
      return this.sci_Map$Map4__f_value4;
      break
    }
    default: {
      throw new $c_s_MatchError(i)
    }
  }
});
$c_sci_Map$Map4.prototype.iterator__sc_Iterator = (function() {
  return new $c_sci_Map$Map4$$anon$7(this)
});
$c_sci_Map$Map4.prototype.updated__O__O__sci_Map = (function(key, value) {
  return ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map4__f_key1) ? new $c_sci_Map$Map4(this.sci_Map$Map4__f_key1, value, this.sci_Map$Map4__f_key2, this.sci_Map$Map4__f_value2, this.sci_Map$Map4__f_key3, this.sci_Map$Map4__f_value3, this.sci_Map$Map4__f_key4, this.sci_Map$Map4__f_value4) : ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map4__f_key2) ? new $c_sci_Map$Map4(this.sci_Map$Map4__f_key1, this.sci_Map$Map4__f_value1, this.sci_Map$Map4__f_key2, value, this.sci_Map$Map4__f_key3, this.sci_Map$Map4__f_value3, this.sci_Map$Map4__f_key4, this.sci_Map$Map4__f_value4) : ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map4__f_key3) ? new $c_sci_Map$Map4(this.sci_Map$Map4__f_key1, this.sci_Map$Map4__f_value1, this.sci_Map$Map4__f_key2, this.sci_Map$Map4__f_value2, this.sci_Map$Map4__f_key3, value, this.sci_Map$Map4__f_key4, this.sci_Map$Map4__f_value4) : ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map4__f_key4) ? new $c_sci_Map$Map4(this.sci_Map$Map4__f_key1, this.sci_Map$Map4__f_value1, this.sci_Map$Map4__f_key2, this.sci_Map$Map4__f_value2, this.sci_Map$Map4__f_key3, this.sci_Map$Map4__f_value3, this.sci_Map$Map4__f_key4, value) : $ct_sci_HashMap__(new $c_sci_HashMap()).updated__O__O__sci_HashMap(this.sci_Map$Map4__f_key1, this.sci_Map$Map4__f_value1).updated__O__O__sci_HashMap(this.sci_Map$Map4__f_key2, this.sci_Map$Map4__f_value2).updated__O__O__sci_HashMap(this.sci_Map$Map4__f_key3, this.sci_Map$Map4__f_value3).updated__O__O__sci_HashMap(this.sci_Map$Map4__f_key4, this.sci_Map$Map4__f_value4).updated__O__O__sci_HashMap(key, value)))))
});
$c_sci_Map$Map4.prototype.$plus__T2__sci_Map = (function(kv) {
  return this.updated__O__O__sci_Map(kv.T2__f__1, kv.T2__f__2)
});
$c_sci_Map$Map4.prototype.$plus$plus__sc_GenTraversableOnce__scg_CanBuildFrom__O = (function(that, bf) {
  if ($m_sci_Map$().scala$collection$immutable$Map$$isMapCBF__scg_CanBuildFrom__Z(bf)) {
    if ((that !== null)) {
      if ((that === $m_sci_Map$EmptyMap$())) {
        return this
      }
    };
    if ((that instanceof $c_sci_Map$Map1)) {
      var x3 = $as_sci_Map$Map1(that);
      return x3.addTo__sci_Map__sci_Map(this)
    };
    if ((that instanceof $c_sci_Map$Map2)) {
      var x4 = $as_sci_Map$Map2(that);
      return x4.addTo__sci_Map__sci_Map(this)
    };
    if ((that instanceof $c_sci_Map$Map3)) {
      var x5 = $as_sci_Map$Map3(that);
      return x5.addTo__sci_Map__sci_Map(this)
    };
    if ((that instanceof $c_sci_Map$Map4)) {
      var x6 = $as_sci_Map$Map4(that);
      return x6.addTo__sci_Map__sci_Map(this)
    };
    return $f_sc_TraversableLike__$plus$plus__sc_GenTraversableOnce__scg_CanBuildFrom__O(this, that, bf)
  } else {
    return $f_sc_TraversableLike__$plus$plus__sc_GenTraversableOnce__scg_CanBuildFrom__O(this, that, bf)
  }
});
$c_sci_Map$Map4.prototype.addTo__sci_Map__sci_Map = (function(m) {
  return m.updated__O__O__sci_Map(this.sci_Map$Map4__f_key1, this.sci_Map$Map4__f_value1).updated__O__O__sci_Map(this.sci_Map$Map4__f_key2, this.sci_Map$Map4__f_value2).updated__O__O__sci_Map(this.sci_Map$Map4__f_key3, this.sci_Map$Map4__f_value3).updated__O__O__sci_Map(this.sci_Map$Map4__f_key4, this.sci_Map$Map4__f_value4)
});
$c_sci_Map$Map4.prototype.foreach__F1__V = (function(f) {
  f.apply__O__O(new $c_T2(this.sci_Map$Map4__f_key1, this.sci_Map$Map4__f_value1));
  f.apply__O__O(new $c_T2(this.sci_Map$Map4__f_key2, this.sci_Map$Map4__f_value2));
  f.apply__O__O(new $c_T2(this.sci_Map$Map4__f_key3, this.sci_Map$Map4__f_value3));
  f.apply__O__O(new $c_T2(this.sci_Map$Map4__f_key4, this.sci_Map$Map4__f_value4))
});
$c_sci_Map$Map4.prototype.forall__F1__Z = (function(p) {
  return ((($uZ(p.apply__O__O(new $c_T2(this.sci_Map$Map4__f_key1, this.sci_Map$Map4__f_value1))) && $uZ(p.apply__O__O(new $c_T2(this.sci_Map$Map4__f_key2, this.sci_Map$Map4__f_value2)))) && $uZ(p.apply__O__O(new $c_T2(this.sci_Map$Map4__f_key3, this.sci_Map$Map4__f_value3)))) && $uZ(p.apply__O__O(new $c_T2(this.sci_Map$Map4__f_key4, this.sci_Map$Map4__f_value4))))
});
$c_sci_Map$Map4.prototype.hashCode__I = (function() {
  var a = 0;
  var b = 0;
  var c = 1;
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  var x = this.sci_Map$Map4__f_key1;
  var y = this.sci_Map$Map4__f_value1;
  var h = this$1.product2Hash__O__O__I__I(x, y, (-889275714));
  a = ((a + h) | 0);
  b = (b ^ h);
  if ((h !== 0)) {
    c = Math.imul(c, h)
  };
  var this$2 = $m_s_util_hashing_MurmurHash3$();
  var x$1 = this.sci_Map$Map4__f_key2;
  var y$1 = this.sci_Map$Map4__f_value2;
  h = this$2.product2Hash__O__O__I__I(x$1, y$1, (-889275714));
  a = ((a + h) | 0);
  b = (b ^ h);
  if ((h !== 0)) {
    c = Math.imul(c, h)
  };
  var this$3 = $m_s_util_hashing_MurmurHash3$();
  var x$2 = this.sci_Map$Map4__f_key3;
  var y$2 = this.sci_Map$Map4__f_value3;
  h = this$3.product2Hash__O__O__I__I(x$2, y$2, (-889275714));
  a = ((a + h) | 0);
  b = (b ^ h);
  if ((h !== 0)) {
    c = Math.imul(c, h)
  };
  var this$4 = $m_s_util_hashing_MurmurHash3$();
  var x$3 = this.sci_Map$Map4__f_key4;
  var y$3 = this.sci_Map$Map4__f_value4;
  h = this$4.product2Hash__O__O__I__I(x$3, y$3, (-889275714));
  a = ((a + h) | 0);
  b = (b ^ h);
  if ((h !== 0)) {
    c = Math.imul(c, h)
  };
  h = $m_s_util_hashing_MurmurHash3$().s_util_hashing_MurmurHash3$__f_mapSeed;
  h = $m_s_util_hashing_MurmurHash3$().mix__I__I__I(h, a);
  h = $m_s_util_hashing_MurmurHash3$().mix__I__I__I(h, b);
  h = $m_s_util_hashing_MurmurHash3$().mixLast__I__I__I(h, c);
  return $m_s_util_hashing_MurmurHash3$().finalizeHash__I__I__I(h, 4)
});
$c_sci_Map$Map4.prototype.$plus__T2__sc_GenMap = (function(kv) {
  return this.updated__O__O__sci_Map(kv.T2__f__1, kv.T2__f__2)
});
function $as_sci_Map$Map4(obj) {
  return (((obj instanceof $c_sci_Map$Map4) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Map$Map4"))
}
function $isArrayOf_sci_Map$Map4(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Map$Map4)))
}
function $asArrayOf_sci_Map$Map4(obj, depth) {
  return (($isArrayOf_sci_Map$Map4(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.Map$Map4;", depth))
}
var $d_sci_Map$Map4 = new $TypeData().initClass({
  sci_Map$Map4: 0
}, false, "scala.collection.immutable.Map$Map4", {
  sci_Map$Map4: 1,
  sci_AbstractMap: 1,
  sc_AbstractMap: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_Map: 1,
  sc_GenMap: 1,
  sc_GenMapLike: 1,
  sc_MapLike: 1,
  s_PartialFunction: 1,
  F1: 1,
  scg_Subtractable: 1,
  sci_Map: 1,
  sci_Iterable: 1,
  sci_Traversable: 1,
  s_Immutable: 1,
  sci_MapLike: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1,
  sci_HasForeachEntry: 1
});
$c_sci_Map$Map4.prototype.$classData = $d_sci_Map$Map4;
function $p_sci_Range__gap__J($thiz) {
  var value = $thiz.sci_Range__f_end;
  var hi = (value >> 31);
  var value$1 = $thiz.sci_Range__f_start;
  var hi$1 = (value$1 >> 31);
  var lo = ((value - value$1) | 0);
  var hi$2 = ((((-2147483648) ^ lo) > ((-2147483648) ^ value)) ? (((-1) + ((hi - hi$1) | 0)) | 0) : ((hi - hi$1) | 0));
  return new $c_RTLong(lo, hi$2)
}
function $p_sci_Range__isExact__Z($thiz) {
  var this$2 = $p_sci_Range__gap__J($thiz);
  var value = $thiz.sci_Range__f_step;
  var hi = (value >> 31);
  var this$3 = $m_RTLong$();
  var lo = this$3.remainderImpl__I__I__I__I__I(this$2.RTLong__f_lo, this$2.RTLong__f_hi, value, hi);
  var hi$1 = this$3.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
  return ((lo === 0) && (hi$1 === 0))
}
function $p_sci_Range__hasStub__Z($thiz) {
  return ($thiz.isInclusive__Z() || (!$p_sci_Range__isExact__Z($thiz)))
}
function $p_sci_Range__longLength__J($thiz) {
  var this$2 = $p_sci_Range__gap__J($thiz);
  var value = $thiz.sci_Range__f_step;
  var hi = (value >> 31);
  var this$3 = $m_RTLong$();
  var lo = this$3.divideImpl__I__I__I__I__I(this$2.RTLong__f_lo, this$2.RTLong__f_hi, value, hi);
  var hi$1 = this$3.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
  var value$1 = ($p_sci_Range__hasStub__Z($thiz) ? 1 : 0);
  var hi$2 = (value$1 >> 31);
  var lo$1 = ((lo + value$1) | 0);
  var hi$3 = ((((-2147483648) ^ lo$1) < ((-2147483648) ^ lo)) ? ((1 + ((hi$1 + hi$2) | 0)) | 0) : ((hi$1 + hi$2) | 0));
  return new $c_RTLong(lo$1, hi$3)
}
function $p_sci_Range__locationAfterN__I__I($thiz, n) {
  return (($thiz.sci_Range__f_start + Math.imul($thiz.sci_Range__f_step, n)) | 0)
}
function $ct_sci_Range__I__I__I__($thiz, start, end, step) {
  $thiz.sci_Range__f_start = start;
  $thiz.sci_Range__f_end = end;
  $thiz.sci_Range__f_step = step;
  $thiz.sci_Range__f_isEmpty = ((((start > end) && (step > 0)) || ((start < end) && (step < 0))) || ((start === end) && (!$thiz.isInclusive__Z())));
  if ((step === 0)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "step cannot be 0.")
  };
  if ($thiz.sci_Range__f_isEmpty) {
    var $$x1 = 0
  } else {
    var t = $p_sci_Range__longLength__J($thiz);
    var lo = t.RTLong__f_lo;
    var hi = t.RTLong__f_hi;
    var $$x1 = (((hi === 0) ? (((-2147483648) ^ lo) > (-1)) : (hi > 0)) ? (-1) : lo)
  };
  $thiz.sci_Range__f_scala$collection$immutable$Range$$numRangeElements = $$x1;
  switch (step) {
    case 1: {
      var $$x2 = ($thiz.isInclusive__Z() ? end : (((-1) + end) | 0));
      break
    }
    case (-1): {
      var $$x2 = ($thiz.isInclusive__Z() ? end : ((1 + end) | 0));
      break
    }
    default: {
      var this$2 = $p_sci_Range__gap__J($thiz);
      var hi$1 = (step >> 31);
      var this$3 = $m_RTLong$();
      var lo$1 = this$3.remainderImpl__I__I__I__I__I(this$2.RTLong__f_lo, this$2.RTLong__f_hi, step, hi$1);
      var $$x2 = ((lo$1 !== 0) ? ((end - lo$1) | 0) : ($thiz.isInclusive__Z() ? end : ((end - step) | 0)))
    }
  };
  $thiz.sci_Range__f_scala$collection$immutable$Range$$lastElement = $$x2;
  return $thiz
}
/** @constructor */
function $c_sci_Range() {
  this.sci_Range__f_start = 0;
  this.sci_Range__f_end = 0;
  this.sci_Range__f_step = 0;
  this.sci_Range__f_isEmpty = false;
  this.sci_Range__f_scala$collection$immutable$Range$$numRangeElements = 0;
  this.sci_Range__f_scala$collection$immutable$Range$$lastElement = 0
}
$c_sci_Range.prototype = new $h_sc_AbstractSeq();
$c_sci_Range.prototype.constructor = $c_sci_Range;
/** @constructor */
function $h_sci_Range() {
  /*<skip>*/
}
$h_sci_Range.prototype = $c_sci_Range.prototype;
$c_sci_Range.prototype.companion__scg_GenericCompanion = (function() {
  return $m_sci_IndexedSeq$()
});
$c_sci_Range.prototype.hashCode__I = (function() {
  return $m_s_util_hashing_MurmurHash3$().seqHash__sc_Seq__I(this)
});
$c_sci_Range.prototype.iterator__sc_Iterator = (function() {
  return $f_sc_IndexedSeqLike__iterator__sc_Iterator(this)
});
$c_sci_Range.prototype.sizeHintIfCheap__I = (function() {
  return this.length__I()
});
$c_sci_Range.prototype.isEmpty__Z = (function() {
  return this.sci_Range__f_isEmpty
});
$c_sci_Range.prototype.last__I = (function() {
  if (this.sci_Range__f_isEmpty) {
    var this$1 = $m_sci_Nil$();
    return $uI($f_sc_LinearSeqOptimized__last__O(this$1))
  } else {
    return this.sci_Range__f_scala$collection$immutable$Range$$lastElement
  }
});
$c_sci_Range.prototype.head__I = (function() {
  return (this.sci_Range__f_isEmpty ? $m_sci_Nil$().head__E() : this.sci_Range__f_start)
});
$c_sci_Range.prototype.copy__I__I__I__sci_Range = (function(start, end, step) {
  return $ct_sci_Range__I__I__I__(new $c_sci_Range(), start, end, step)
});
$c_sci_Range.prototype.isInclusive__Z = (function() {
  return false
});
$c_sci_Range.prototype.size__I = (function() {
  return this.length__I()
});
$c_sci_Range.prototype.length__I = (function() {
  return ((this.sci_Range__f_scala$collection$immutable$Range$$numRangeElements < 0) ? $m_sci_Range$().scala$collection$immutable$Range$$fail__I__I__I__Z__E(this.sci_Range__f_start, this.sci_Range__f_end, this.sci_Range__f_step, this.isInclusive__Z()) : this.sci_Range__f_scala$collection$immutable$Range$$numRangeElements)
});
$c_sci_Range.prototype.scala$collection$immutable$Range$$validateMaxLength__V = (function() {
  if ((this.sci_Range__f_scala$collection$immutable$Range$$numRangeElements < 0)) {
    $m_sci_Range$().scala$collection$immutable$Range$$fail__I__I__I__Z__E(this.sci_Range__f_start, this.sci_Range__f_end, this.sci_Range__f_step, this.isInclusive__Z())
  }
});
$c_sci_Range.prototype.foreach__F1__V = (function(f) {
  if ((!this.sci_Range__f_isEmpty)) {
    var i = this.sci_Range__f_start;
    while (true) {
      f.apply__O__O(i);
      if ((i === this.sci_Range__f_scala$collection$immutable$Range$$lastElement)) {
        return (void 0)
      };
      i = ((i + this.sci_Range__f_step) | 0)
    }
  }
});
$c_sci_Range.prototype.take__I__sci_Range = (function(n) {
  if (((n <= 0) || this.sci_Range__f_isEmpty)) {
    var value = this.sci_Range__f_start;
    return $ct_sci_Range__I__I__I__(new $c_sci_Range(), value, value, this.sci_Range__f_step)
  } else {
    return (((n >= this.sci_Range__f_scala$collection$immutable$Range$$numRangeElements) && (this.sci_Range__f_scala$collection$immutable$Range$$numRangeElements >= 0)) ? this : new $c_sci_Range$Inclusive(this.sci_Range__f_start, $p_sci_Range__locationAfterN__I__I(this, (((-1) + n) | 0)), this.sci_Range__f_step))
  }
});
$c_sci_Range.prototype.drop__I__sci_Range = (function(n) {
  if (((n <= 0) || this.sci_Range__f_isEmpty)) {
    return this
  } else if (((n >= this.sci_Range__f_scala$collection$immutable$Range$$numRangeElements) && (this.sci_Range__f_scala$collection$immutable$Range$$numRangeElements >= 0))) {
    var value = this.sci_Range__f_end;
    return $ct_sci_Range__I__I__I__(new $c_sci_Range(), value, value, this.sci_Range__f_step)
  } else {
    return this.copy__I__I__I__sci_Range($p_sci_Range__locationAfterN__I__I(this, n), this.sci_Range__f_end, this.sci_Range__f_step)
  }
});
$c_sci_Range.prototype.init__sci_Range = (function() {
  if (this.sci_Range__f_isEmpty) {
    var this$1 = $m_sci_Nil$();
    $f_sc_TraversableLike__init__O(this$1)
  };
  return this.dropRight__I__sci_Range(1)
});
$c_sci_Range.prototype.tail__sci_Range = (function() {
  if (this.sci_Range__f_isEmpty) {
    $m_sci_Nil$().tail__sci_List()
  };
  return this.drop__I__sci_Range(1)
});
$c_sci_Range.prototype.takeRight__I__sci_Range = (function(n) {
  if ((n <= 0)) {
    var value = this.sci_Range__f_start;
    return $ct_sci_Range__I__I__I__(new $c_sci_Range(), value, value, this.sci_Range__f_step)
  } else if ((this.sci_Range__f_scala$collection$immutable$Range$$numRangeElements >= 0)) {
    return this.drop__I__sci_Range(((this.sci_Range__f_scala$collection$immutable$Range$$numRangeElements - n) | 0))
  } else {
    var y = this.last__I();
    var hi = (y >> 31);
    var value$1 = this.sci_Range__f_step;
    var hi$1 = (value$1 >> 31);
    var value$2 = (((-1) + n) | 0);
    var hi$2 = (value$2 >> 31);
    var a0 = (65535 & value$1);
    var a1 = ((value$1 >>> 16) | 0);
    var b0 = (65535 & value$2);
    var b1 = ((value$2 >>> 16) | 0);
    var a0b0 = Math.imul(a0, b0);
    var a1b0 = Math.imul(a1, b0);
    var a0b1 = Math.imul(a0, b1);
    var lo = ((a0b0 + (((a1b0 + a0b1) | 0) << 16)) | 0);
    var c1part = ((((a0b0 >>> 16) | 0) + a0b1) | 0);
    var hi$3 = ((((((((Math.imul(value$1, hi$2) + Math.imul(hi$1, value$2)) | 0) + Math.imul(a1, b1)) | 0) + ((c1part >>> 16) | 0)) | 0) + (((((65535 & c1part) + a1b0) | 0) >>> 16) | 0)) | 0);
    var lo$1 = ((y - lo) | 0);
    var hi$4 = ((((-2147483648) ^ lo$1) > ((-2147483648) ^ y)) ? (((-1) + ((hi - hi$3) | 0)) | 0) : ((hi - hi$3) | 0));
    if ((this.sci_Range__f_step > 0)) {
      var value$3 = this.sci_Range__f_start;
      var hi$5 = (value$3 >> 31);
      var $$x2 = ((hi$4 === hi$5) ? (((-2147483648) ^ lo$1) < ((-2147483648) ^ value$3)) : (hi$4 < hi$5))
    } else {
      var $$x2 = false
    };
    if ($$x2) {
      var $$x1 = true
    } else if ((this.sci_Range__f_step < 0)) {
      var value$4 = this.sci_Range__f_start;
      var hi$6 = (value$4 >> 31);
      var $$x1 = ((hi$4 === hi$6) ? (((-2147483648) ^ lo$1) > ((-2147483648) ^ value$4)) : (hi$4 > hi$6))
    } else {
      var $$x1 = false
    };
    if ($$x1) {
      return this
    } else {
      return new $c_sci_Range$Inclusive(lo$1, y, this.sci_Range__f_step)
    }
  }
});
$c_sci_Range.prototype.dropRight__I__sci_Range = (function(n) {
  if ((n <= 0)) {
    return this
  } else if ((this.sci_Range__f_scala$collection$immutable$Range$$numRangeElements >= 0)) {
    return this.take__I__sci_Range(((this.sci_Range__f_scala$collection$immutable$Range$$numRangeElements - n) | 0))
  } else {
    var y = ((this.last__I() - Math.imul(this.sci_Range__f_step, n)) | 0);
    if ((((this.sci_Range__f_step > 0) && (y < this.sci_Range__f_start)) || ((this.sci_Range__f_step < 0) && (y > this.sci_Range__f_start)))) {
      var value = this.sci_Range__f_start;
      return $ct_sci_Range__I__I__I__(new $c_sci_Range(), value, value, this.sci_Range__f_step)
    } else {
      return new $c_sci_Range$Inclusive(this.sci_Range__f_start, y, this.sci_Range__f_step)
    }
  }
});
$c_sci_Range.prototype.reverse__sci_Range = (function() {
  return (this.sci_Range__f_isEmpty ? this : new $c_sci_Range$Inclusive(this.last__I(), this.sci_Range__f_start, ((-this.sci_Range__f_step) | 0)))
});
$c_sci_Range.prototype.equals__O__Z = (function(other) {
  if ((other instanceof $c_sci_Range)) {
    var x2 = $as_sci_Range(other);
    if (this.sci_Range__f_isEmpty) {
      return x2.sci_Range__f_isEmpty
    } else if (((!x2.sci_Range__f_isEmpty) && (this.sci_Range__f_start === x2.sci_Range__f_start))) {
      var l0 = this.last__I();
      return ((l0 === x2.last__I()) && ((this.sci_Range__f_start === l0) || (this.sci_Range__f_step === x2.sci_Range__f_step)))
    } else {
      return false
    }
  } else {
    return $f_sc_GenSeqLike__equals__O__Z(this, other)
  }
});
$c_sci_Range.prototype.toString__T = (function() {
  var preposition = (this.isInclusive__Z() ? "to" : "until");
  var stepped = ((this.sci_Range__f_step === 1) ? "" : (" by " + this.sci_Range__f_step));
  var prefix = (this.sci_Range__f_isEmpty ? "empty " : ((!$p_sci_Range__isExact__Z(this)) ? "inexact " : ""));
  return (((((((prefix + "Range ") + this.sci_Range__f_start) + " ") + preposition) + " ") + this.sci_Range__f_end) + stepped)
});
$c_sci_Range.prototype.apply$mcII$sp__I__I = (function(idx) {
  this.scala$collection$immutable$Range$$validateMaxLength__V();
  if (((idx < 0) || (idx >= this.sci_Range__f_scala$collection$immutable$Range$$numRangeElements))) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + idx))
  } else {
    return ((this.sci_Range__f_start + Math.imul(this.sci_Range__f_step, idx)) | 0)
  }
});
$c_sci_Range.prototype.thisCollection__sc_Traversable = (function() {
  return this
});
$c_sci_Range.prototype.thisCollection__sc_Seq = (function() {
  return this
});
$c_sci_Range.prototype.seq__sc_TraversableOnce = (function() {
  return this
});
$c_sci_Range.prototype.seq__sc_Seq = (function() {
  return this
});
$c_sci_Range.prototype.toSeq__sci_Seq = (function() {
  return this
});
$c_sci_Range.prototype.reverse__O = (function() {
  return this.reverse__sci_Range()
});
$c_sci_Range.prototype.takeRight__I__O = (function(n) {
  return this.takeRight__I__sci_Range(n)
});
$c_sci_Range.prototype.tail__O = (function() {
  return this.tail__sci_Range()
});
$c_sci_Range.prototype.init__O = (function() {
  return this.init__sci_Range()
});
$c_sci_Range.prototype.drop__I__O = (function(n) {
  return this.drop__I__sci_Range(n)
});
$c_sci_Range.prototype.apply__O__O = (function(v1) {
  var idx = $uI(v1);
  return this.apply$mcII$sp__I__I(idx)
});
$c_sci_Range.prototype.apply__I__O = (function(idx) {
  return this.apply$mcII$sp__I__I(idx)
});
$c_sci_Range.prototype.head__O = (function() {
  return this.head__I()
});
function $as_sci_Range(obj) {
  return (((obj instanceof $c_sci_Range) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Range"))
}
function $isArrayOf_sci_Range(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Range)))
}
function $asArrayOf_sci_Range(obj, depth) {
  return (($isArrayOf_sci_Range(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.Range;", depth))
}
var $d_sci_Range = new $TypeData().initClass({
  sci_Range: 0
}, false, "scala.collection.immutable.Range", {
  sci_Range: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_GenSeq: 1,
  sc_GenSeqLike: 1,
  sc_SeqLike: 1,
  sci_IndexedSeq: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_Traversable: 1,
  s_Immutable: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqLike: 1,
  sc_CustomParallelizable: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Range.prototype.$classData = $d_sci_Range;
/** @constructor */
function $c_sci_Stream() {
  /*<skip>*/
}
$c_sci_Stream.prototype = new $h_sc_AbstractSeq();
$c_sci_Stream.prototype.constructor = $c_sci_Stream;
/** @constructor */
function $h_sci_Stream() {
  /*<skip>*/
}
$h_sci_Stream.prototype = $c_sci_Stream.prototype;
$c_sci_Stream.prototype.apply__I__O = (function(n) {
  return $f_sc_LinearSeqOptimized__apply__I__O(this, n)
});
$c_sci_Stream.prototype.sameElements__sc_GenIterable__Z = (function(that) {
  return $f_sc_LinearSeqOptimized__sameElements__sc_GenIterable__Z(this, that)
});
$c_sci_Stream.prototype.lengthCompare__I__I = (function(len) {
  return $f_sc_LinearSeqOptimized__lengthCompare__I__I(this, len)
});
$c_sci_Stream.prototype.hashCode__I = (function() {
  return $m_s_util_hashing_MurmurHash3$().seqHash__sc_Seq__I(this)
});
$c_sci_Stream.prototype.toSeq__sci_Seq = (function() {
  return this
});
$c_sci_Stream.prototype.companion__scg_GenericCompanion = (function() {
  return $m_sci_Stream$()
});
$c_sci_Stream.prototype.append__F0__sci_Stream = (function(rest) {
  if (this.isEmpty__Z()) {
    return $as_sc_GenTraversableOnce(rest.apply__O()).toStream__sci_Stream()
  } else {
    var hd = this.head__O();
    var tl = new $c_sjsr_AnonFunction0((() => $as_sci_Stream(this.tail__O()).append__F0__sci_Stream(rest)));
    return new $c_sci_Stream$Cons(hd, tl)
  }
});
$c_sci_Stream.prototype.force__sci_Stream = (function() {
  var these = this;
  var those = this;
  if ((!these.isEmpty__Z())) {
    these = $as_sci_Stream(these.tail__O())
  };
  while ((those !== these)) {
    if (these.isEmpty__Z()) {
      return this
    };
    these = $as_sci_Stream(these.tail__O());
    if (these.isEmpty__Z()) {
      return this
    };
    these = $as_sci_Stream(these.tail__O());
    if ((these === those)) {
      return this
    };
    those = $as_sci_Stream(those.tail__O())
  };
  return this
});
$c_sci_Stream.prototype.length__I = (function() {
  var len = 0;
  var left = this;
  while ((!left.isEmpty__Z())) {
    len = ((1 + len) | 0);
    left = $as_sci_Stream(left.tail__O())
  };
  return len
});
$c_sci_Stream.prototype.toStream__sci_Stream = (function() {
  return this
});
$c_sci_Stream.prototype.$plus$plus__sc_GenTraversableOnce__scg_CanBuildFrom__O = (function(that, bf) {
  if ((bf.apply__O__scm_Builder(this) instanceof $c_sci_Stream$StreamBuilder)) {
    if (this.isEmpty__Z()) {
      var x$1 = that.toStream__sci_Stream()
    } else {
      var hd = this.head__O();
      var tl = new $c_sjsr_AnonFunction0((() => {
        var x = $as_sci_Stream(this.tail__O()).$plus$plus__sc_GenTraversableOnce__scg_CanBuildFrom__O(that, $m_sci_Stream$().sci_Stream$__f_ReusableCBF);
        return $as_sci_Stream(x)
      }));
      var x$1 = new $c_sci_Stream$Cons(hd, tl)
    };
    return x$1
  } else {
    return $f_sc_TraversableLike__$plus$plus__sc_GenTraversableOnce__scg_CanBuildFrom__O(this, that, bf)
  }
});
$c_sci_Stream.prototype.map__F1__scg_CanBuildFrom__O = (function(f, bf) {
  if ((bf.apply__O__scm_Builder(this) instanceof $c_sci_Stream$StreamBuilder)) {
    if (this.isEmpty__Z()) {
      var x$1 = $m_sci_Stream$Empty$()
    } else {
      var hd = f.apply__O__O(this.head__O());
      var tl = new $c_sjsr_AnonFunction0((() => {
        var x = $as_sci_Stream(this.tail__O()).map__F1__scg_CanBuildFrom__O(f, $m_sci_Stream$().sci_Stream$__f_ReusableCBF);
        return $as_sci_Stream(x)
      }));
      var x$1 = new $c_sci_Stream$Cons(hd, tl)
    };
    return x$1
  } else {
    return $f_sc_TraversableLike__map__F1__scg_CanBuildFrom__O(this, f, bf)
  }
});
$c_sci_Stream.prototype.flatMap__F1__scg_CanBuildFrom__O = (function(f, bf) {
  if ((bf.apply__O__scm_Builder(this) instanceof $c_sci_Stream$StreamBuilder)) {
    if (this.isEmpty__Z()) {
      var x$1 = $m_sci_Stream$Empty$()
    } else {
      var nonEmptyPrefix = new $c_sr_ObjectRef(this);
      var prefix = $as_sc_GenTraversableOnce(f.apply__O__O($as_sci_Stream(nonEmptyPrefix.sr_ObjectRef__f_elem).head__O())).toStream__sci_Stream();
      while (((!$as_sci_Stream(nonEmptyPrefix.sr_ObjectRef__f_elem).isEmpty__Z()) && prefix.isEmpty__Z())) {
        nonEmptyPrefix.sr_ObjectRef__f_elem = $as_sci_Stream($as_sci_Stream(nonEmptyPrefix.sr_ObjectRef__f_elem).tail__O());
        if ((!$as_sci_Stream(nonEmptyPrefix.sr_ObjectRef__f_elem).isEmpty__Z())) {
          prefix = $as_sc_GenTraversableOnce(f.apply__O__O($as_sci_Stream(nonEmptyPrefix.sr_ObjectRef__f_elem).head__O())).toStream__sci_Stream()
        }
      };
      var x$1 = ($as_sci_Stream(nonEmptyPrefix.sr_ObjectRef__f_elem).isEmpty__Z() ? ($m_sci_Stream$(), $m_sci_Stream$Empty$()) : prefix.append__F0__sci_Stream(new $c_sjsr_AnonFunction0((() => {
        var x = $as_sci_Stream($as_sci_Stream(nonEmptyPrefix.sr_ObjectRef__f_elem).tail__O()).flatMap__F1__scg_CanBuildFrom__O(f, $m_sci_Stream$().sci_Stream$__f_ReusableCBF);
        return $as_sci_Stream(x)
      }))))
    };
    return x$1
  } else {
    return $f_sc_TraversableLike__flatMap__F1__scg_CanBuildFrom__O(this, f, bf)
  }
});
$c_sci_Stream.prototype.iterator__sc_Iterator = (function() {
  return new $c_sci_StreamIterator(this)
});
$c_sci_Stream.prototype.foreach__F1__V = (function(f) {
  var _$this = this;
  while ((!_$this.isEmpty__Z())) {
    f.apply__O__O(_$this.head__O());
    _$this = $as_sci_Stream(_$this.tail__O())
  }
});
$c_sci_Stream.prototype.foldLeft__O__F2__O = (function(z, op) {
  var _$this = this;
  while (true) {
    if (_$this.isEmpty__Z()) {
      return z
    } else {
      var temp$_$this = $as_sci_Stream(_$this.tail__O());
      var temp$z = op.apply__O__O__O(z, _$this.head__O());
      _$this = temp$_$this;
      z = temp$z
    }
  }
});
$c_sci_Stream.prototype.addString__scm_StringBuilder__T__T__T__scm_StringBuilder = (function(b, start, sep, end) {
  b.append__T__scm_StringBuilder(start);
  if ((!this.isEmpty__Z())) {
    b.append__O__scm_StringBuilder(this.head__O());
    var cursor = this;
    var n = 1;
    if (cursor.tailDefined__Z()) {
      var scout = $as_sci_Stream(this.tail__O());
      if (scout.isEmpty__Z()) {
        b.append__T__scm_StringBuilder(end);
        return b
      };
      if ((cursor !== scout)) {
        cursor = scout;
        if (scout.tailDefined__Z()) {
          scout = $as_sci_Stream(scout.tail__O());
          while (((cursor !== scout) && scout.tailDefined__Z())) {
            b.append__T__scm_StringBuilder(sep).append__O__scm_StringBuilder(cursor.head__O());
            n = ((1 + n) | 0);
            cursor = $as_sci_Stream(cursor.tail__O());
            scout = $as_sci_Stream(scout.tail__O());
            if (scout.tailDefined__Z()) {
              scout = $as_sci_Stream(scout.tail__O())
            }
          }
        }
      };
      if ((!scout.tailDefined__Z())) {
        while ((cursor !== scout)) {
          b.append__T__scm_StringBuilder(sep).append__O__scm_StringBuilder(cursor.head__O());
          n = ((1 + n) | 0);
          cursor = $as_sci_Stream(cursor.tail__O())
        };
        var this$1 = cursor;
        if ((!this$1.isEmpty__Z())) {
          b.append__T__scm_StringBuilder(sep).append__O__scm_StringBuilder(cursor.head__O())
        }
      } else {
        var runner = this;
        var k = 0;
        while ((runner !== scout)) {
          runner = $as_sci_Stream(runner.tail__O());
          scout = $as_sci_Stream(scout.tail__O());
          k = ((1 + k) | 0)
        };
        if (((cursor === scout) && (k > 0))) {
          b.append__T__scm_StringBuilder(sep).append__O__scm_StringBuilder(cursor.head__O());
          n = ((1 + n) | 0);
          cursor = $as_sci_Stream(cursor.tail__O())
        };
        while ((cursor !== scout)) {
          b.append__T__scm_StringBuilder(sep).append__O__scm_StringBuilder(cursor.head__O());
          n = ((1 + n) | 0);
          cursor = $as_sci_Stream(cursor.tail__O())
        };
        n = ((n - k) | 0)
      }
    };
    if ((!cursor.isEmpty__Z())) {
      if ((!cursor.tailDefined__Z())) {
        b.append__T__scm_StringBuilder(sep).append__T__scm_StringBuilder("?")
      } else {
        b.append__T__scm_StringBuilder(sep).append__T__scm_StringBuilder("...")
      }
    }
  };
  b.append__T__scm_StringBuilder(end);
  return b
});
$c_sci_Stream.prototype.mkString__T__T__T__T = (function(start, sep, end) {
  this.force__sci_Stream();
  return $f_sc_TraversableOnce__mkString__T__T__T__T(this, start, sep, end)
});
$c_sci_Stream.prototype.toString__T = (function() {
  return $f_sc_TraversableOnce__mkString__T__T__T__T(this, "Stream(", ", ", ")")
});
$c_sci_Stream.prototype.take__I__sci_Stream = (function(n) {
  if (((n <= 0) || this.isEmpty__Z())) {
    $m_sci_Stream$();
    return $m_sci_Stream$Empty$()
  } else if ((n === 1)) {
    var hd = this.head__O();
    var tl = new $c_sjsr_AnonFunction0((() => {
      $m_sci_Stream$();
      return $m_sci_Stream$Empty$()
    }));
    return new $c_sci_Stream$Cons(hd, tl)
  } else {
    var hd$1 = this.head__O();
    var tl$1 = new $c_sjsr_AnonFunction0((() => $as_sci_Stream(this.tail__O()).take__I__sci_Stream((((-1) + n) | 0))));
    return new $c_sci_Stream$Cons(hd$1, tl$1)
  }
});
$c_sci_Stream.prototype.drop__I__sci_Stream = (function(n) {
  var _$this = this;
  while (true) {
    if (((n <= 0) || _$this.isEmpty__Z())) {
      return _$this
    } else {
      var temp$_$this = $as_sci_Stream(_$this.tail__O());
      var temp$n = (((-1) + n) | 0);
      _$this = temp$_$this;
      n = temp$n
    }
  }
});
$c_sci_Stream.prototype.init__sci_Stream = (function() {
  if (this.isEmpty__Z()) {
    return $as_sci_Stream($f_sc_TraversableLike__init__O(this))
  } else if ($as_sc_SeqLike(this.tail__O()).isEmpty__Z()) {
    return $m_sci_Stream$Empty$()
  } else {
    var hd = this.head__O();
    var tl = new $c_sjsr_AnonFunction0((() => $as_sci_Stream(this.tail__O()).init__sci_Stream()));
    return new $c_sci_Stream$Cons(hd, tl)
  }
});
$c_sci_Stream.prototype.takeRight__I__sci_Stream = (function(n) {
  var these = this;
  var lead = this.drop__I__sci_Stream(n);
  while ((!lead.isEmpty__Z())) {
    these = $as_sci_Stream(these.tail__O());
    lead = $as_sci_Stream(lead.tail__O())
  };
  return these
});
$c_sci_Stream.prototype.reverse__sci_Stream = (function() {
  var elem = $m_sci_Stream$Empty$();
  var result = new $c_sr_ObjectRef(elem);
  var these = this;
  while ((!these.isEmpty__Z())) {
    $m_sci_Stream$();
    var stream = new $c_sjsr_AnonFunction0(((result) => (() => $as_sci_Stream(result.sr_ObjectRef__f_elem)))(result));
    var r = new $c_sci_Stream$ConsWrapper(stream).$hash$colon$colon__O__sci_Stream(these.head__O());
    r.tail__O();
    result.sr_ObjectRef__f_elem = r;
    these = $as_sci_Stream(these.tail__O())
  };
  return $as_sci_Stream(result.sr_ObjectRef__f_elem)
});
$c_sci_Stream.prototype.flatten__F1__sci_Stream = (function(asTraversable) {
  var st = new $c_sr_ObjectRef(this);
  while (true) {
    var this$2 = $as_sci_Stream(st.sr_ObjectRef__f_elem);
    if ((!this$2.isEmpty__Z())) {
      var h = $as_sc_GenTraversableOnce(asTraversable.apply__O__O($as_sci_Stream(st.sr_ObjectRef__f_elem).head__O()));
      if (h.isEmpty__Z()) {
        st.sr_ObjectRef__f_elem = $as_sci_Stream($as_sci_Stream(st.sr_ObjectRef__f_elem).tail__O())
      } else {
        var x$4 = h.toStream__sci_Stream();
        $m_sci_Stream$();
        var stream = new $c_sjsr_AnonFunction0(((st, asTraversable) => (() => $as_sci_Stream($as_sci_Stream(st.sr_ObjectRef__f_elem).tail__O()).flatten__F1__sci_Stream(asTraversable)))(st, asTraversable));
        return new $c_sci_Stream$ConsWrapper(stream).$hash$colon$colon$colon__sci_Stream__sci_Stream(x$4)
      }
    } else {
      break
    }
  };
  $m_sci_Stream$();
  return $m_sci_Stream$Empty$()
});
$c_sci_Stream.prototype.stringPrefix__T = (function() {
  return "Stream"
});
$c_sci_Stream.prototype.equals__O__Z = (function(that) {
  return ((this === that) || $f_sc_GenSeqLike__equals__O__Z(this, that))
});
$c_sci_Stream.prototype.thisCollection__sc_Traversable = (function() {
  return this
});
$c_sci_Stream.prototype.thisCollection__sc_Seq = (function() {
  return this
});
$c_sci_Stream.prototype.seq__sc_TraversableOnce = (function() {
  return this
});
$c_sci_Stream.prototype.seq__sc_Seq = (function() {
  return this
});
$c_sci_Stream.prototype.apply__O__O = (function(v1) {
  var n = $uI(v1);
  return $f_sc_LinearSeqOptimized__apply__I__O(this, n)
});
$c_sci_Stream.prototype.flatten__F1__sc_GenTraversable = (function(asTraversable) {
  return this.flatten__F1__sci_Stream(asTraversable)
});
$c_sci_Stream.prototype.reverse__O = (function() {
  return this.reverse__sci_Stream()
});
$c_sci_Stream.prototype.takeRight__I__O = (function(n) {
  return this.takeRight__I__sci_Stream(n)
});
$c_sci_Stream.prototype.init__O = (function() {
  return this.init__sci_Stream()
});
$c_sci_Stream.prototype.drop__I__O = (function(n) {
  return this.drop__I__sci_Stream(n)
});
$c_sci_Stream.prototype.drop__I__sc_LinearSeqOptimized = (function(n) {
  return this.drop__I__sci_Stream(n)
});
$c_sci_Stream.prototype.take__I__O = (function(n) {
  return this.take__I__sci_Stream(n)
});
function $as_sci_Stream(obj) {
  return (((obj instanceof $c_sci_Stream) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Stream"))
}
function $isArrayOf_sci_Stream(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Stream)))
}
function $asArrayOf_sci_Stream(obj, depth) {
  return (($isArrayOf_sci_Stream(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.Stream;", depth))
}
function $p_sci_HashMap__isCompatibleCBF__scg_CanBuildFrom__Z($thiz, cbf) {
  while (true) {
    var x1 = cbf;
    if (false) {
      var x2 = $as_sc_package$WrappedCanBuildFrom(x1);
      cbf = x2.wrapped__scg_CanBuildFrom()
    } else {
      var $$x1 = cbf;
      var this$1 = $m_sci_HashMap$();
      if (($$x1 === this$1.sci_HashMap$__f_ReusableCBF)) {
        return true
      } else {
        return (cbf === $m_sci_Map$().sci_Map$__f_ReusableCBF)
      }
    }
  }
}
function $ct_sci_HashMap__($thiz) {
  return $thiz
}
/** @constructor */
function $c_sci_HashMap() {
  /*<skip>*/
}
$c_sci_HashMap.prototype = new $h_sci_AbstractMap();
$c_sci_HashMap.prototype.constructor = $c_sci_HashMap;
/** @constructor */
function $h_sci_HashMap() {
  /*<skip>*/
}
$h_sci_HashMap.prototype = $c_sci_HashMap.prototype;
$c_sci_HashMap.prototype.size__I = (function() {
  return 0
});
$c_sci_HashMap.prototype.iterator__sc_Iterator = (function() {
  return $m_sc_Iterator$().sc_Iterator$__f_empty
});
$c_sci_HashMap.prototype.foreach__F1__V = (function(f) {
  /*<skip>*/
});
$c_sci_HashMap.prototype.foreachEntry__F2__V = (function(f) {
  /*<skip>*/
});
$c_sci_HashMap.prototype.hashCode__I = (function() {
  if ($f_sc_MapLike__isEmpty__Z(this)) {
    return $m_s_util_hashing_MurmurHash3$().s_util_hashing_MurmurHash3$__f_emptyMapHash
  } else {
    var hasher = new $c_sci_Map$HashCodeAccumulator();
    this.foreachEntry__F2__V(hasher);
    return hasher.finalizeHash__I()
  }
});
$c_sci_HashMap.prototype.get__O__s_Option = (function(key) {
  return this.get0__O__I__I__s_Option(key, this.computeHash__O__I(key), 0)
});
$c_sci_HashMap.prototype.getOrElse__O__F0__O = (function(key, default$1) {
  return this.getOrElse0__O__I__I__F0__O(key, this.computeHash__O__I(key), 0, default$1)
});
$c_sci_HashMap.prototype.updated__O__O__sci_HashMap = (function(key, value) {
  return this.updated0__O__I__I__O__T2__sci_HashMap$Merger__sci_HashMap(key, this.computeHash__O__I(key), 0, value, null, null)
});
$c_sci_HashMap.prototype.$plus__T2__sci_HashMap = (function(kv) {
  return this.updated0__O__I__I__O__T2__sci_HashMap$Merger__sci_HashMap(kv.T2__f__1, this.computeHash__O__I(kv.T2__f__1), 0, kv.T2__f__2, kv, null)
});
$c_sci_HashMap.prototype.improve__I__I = (function(hcode) {
  var h = ((hcode + (~(hcode << 9))) | 0);
  h = (h ^ ((h >>> 14) | 0));
  h = ((h + (h << 4)) | 0);
  return (h ^ ((h >>> 10) | 0))
});
$c_sci_HashMap.prototype.computeHash__O__I = (function(key) {
  return this.improve__I__I($m_sr_Statics$().anyHash__O__I(key))
});
$c_sci_HashMap.prototype.get0__O__I__I__s_Option = (function(key, hash, level) {
  return $m_s_None$()
});
$c_sci_HashMap.prototype.getOrElse0__O__I__I__F0__O = (function(key, hash, level, f) {
  return f.apply__O()
});
$c_sci_HashMap.prototype.updated0__O__I__I__O__T2__sci_HashMap$Merger__sci_HashMap = (function(key, hash, level, value, kv, merger) {
  return new $c_sci_HashMap$HashMap1(key, hash, value, kv)
});
$c_sci_HashMap.prototype.merge0__sci_HashMap__I__sci_HashMap$Merger__sci_HashMap = (function(that, level, merger) {
  return that
});
$c_sci_HashMap.prototype.$plus$plus__sc_GenTraversableOnce__scg_CanBuildFrom__O = (function(that, bf) {
  if ($p_sci_HashMap__isCompatibleCBF__scg_CanBuildFrom__Z(this, bf)) {
    if ((this === that)) {
      return that
    } else if (that.isEmpty__Z()) {
      return this
    } else {
      if ((that instanceof $c_sci_HashMap)) {
        var x2 = $as_sci_HashMap(that);
        var result$2 = this.merge0__sci_HashMap__I__sci_HashMap$Merger__sci_HashMap(x2, 0, $m_sci_HashMap$().sci_HashMap$__f__concatMerger)
      } else {
        var result = new $c_sr_ObjectRef(this);
        that.foreach__F1__V(new $c_sjsr_AnonFunction1(((x$3$2) => {
          var x$3 = $as_T2(x$3$2);
          result.sr_ObjectRef__f_elem = $as_sci_HashMap(result.sr_ObjectRef__f_elem).$plus__T2__sci_HashMap(x$3)
        })));
        var result$2 = $as_sci_HashMap(result.sr_ObjectRef__f_elem)
      };
      return result$2
    }
  } else {
    return $f_sc_TraversableLike__$plus$plus__sc_GenTraversableOnce__scg_CanBuildFrom__O(this, that, bf)
  }
});
$c_sci_HashMap.prototype.thisCollection__sc_Traversable = (function() {
  return this
});
$c_sci_HashMap.prototype.seq__sc_TraversableOnce = (function() {
  return this
});
$c_sci_HashMap.prototype.$plus__T2__sc_GenMap = (function(kv) {
  return this.$plus__T2__sci_HashMap(kv)
});
$c_sci_HashMap.prototype.$plus__T2__sci_Map = (function(kv) {
  return this.$plus__T2__sci_HashMap(kv)
});
$c_sci_HashMap.prototype.updated__O__O__sci_Map = (function(key, value) {
  return this.updated__O__O__sci_HashMap(key, value)
});
$c_sci_HashMap.prototype.empty__sc_Map = (function() {
  $m_sci_HashMap$();
  return $m_sci_HashMap$EmptyHashMap$()
});
$c_sci_HashMap.prototype.empty__sci_Map = (function() {
  $m_sci_HashMap$();
  return $m_sci_HashMap$EmptyHashMap$()
});
function $as_sci_HashMap(obj) {
  return (((obj instanceof $c_sci_HashMap) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.HashMap"))
}
function $isArrayOf_sci_HashMap(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_HashMap)))
}
function $asArrayOf_sci_HashMap(obj, depth) {
  return (($isArrayOf_sci_HashMap(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.HashMap;", depth))
}
var $d_sci_HashMap = new $TypeData().initClass({
  sci_HashMap: 0
}, false, "scala.collection.immutable.HashMap", {
  sci_HashMap: 1,
  sci_AbstractMap: 1,
  sc_AbstractMap: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_Map: 1,
  sc_GenMap: 1,
  sc_GenMapLike: 1,
  sc_MapLike: 1,
  s_PartialFunction: 1,
  F1: 1,
  scg_Subtractable: 1,
  sci_Map: 1,
  sci_Iterable: 1,
  sci_Traversable: 1,
  s_Immutable: 1,
  sci_MapLike: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1,
  sc_CustomParallelizable: 1,
  sci_HasForeachEntry: 1
});
$c_sci_HashMap.prototype.$classData = $d_sci_HashMap;
function $p_sci_List__isLikeListReusableCBF__scg_CanBuildFrom__Z($thiz, bf) {
  return (((((bf === $m_sci_List$().scg_GenTraversableFactory__f_ReusableCBFInstance) || (bf === $m_sci_LinearSeq$().scg_GenTraversableFactory__f_ReusableCBFInstance)) || (bf === $m_sc_LinearSeq$().scg_GenTraversableFactory__f_ReusableCBFInstance)) || (bf === $m_sci_Seq$().scg_GenTraversableFactory__f_ReusableCBFInstance)) || (bf === $m_sc_Seq$().scg_GenTraversableFactory__f_ReusableCBFInstance))
}
function $p_sci_List__loop$2__sci_List__sci_List__sci_List($thiz, lead, lag) {
  while (true) {
    var x1 = lead;
    var x = $m_sci_Nil$();
    if (x.equals__O__Z(x1)) {
      return lag
    } else if ((x1 instanceof $c_sci_$colon$colon)) {
      var x2 = $as_sci_$colon$colon(x1);
      var tail = x2.sci_$colon$colon__f_tl;
      var temp$lag = $as_sci_List(lag.tail__O());
      lead = tail;
      lag = temp$lag
    } else {
      throw new $c_s_MatchError(x1)
    }
  }
}
/** @constructor */
function $c_sci_List() {
  /*<skip>*/
}
$c_sci_List.prototype = new $h_sc_AbstractSeq();
$c_sci_List.prototype.constructor = $c_sci_List;
/** @constructor */
function $h_sci_List() {
  /*<skip>*/
}
$h_sci_List.prototype = $c_sci_List.prototype;
$c_sci_List.prototype.length__I = (function() {
  return $f_sc_LinearSeqOptimized__length__I(this)
});
$c_sci_List.prototype.apply__I__O = (function(n) {
  return $f_sc_LinearSeqOptimized__apply__I__O(this, n)
});
$c_sci_List.prototype.foldLeft__O__F2__O = (function(z, op) {
  return $f_sc_LinearSeqOptimized__foldLeft__O__F2__O(this, z, op)
});
$c_sci_List.prototype.sameElements__sc_GenIterable__Z = (function(that) {
  return $f_sc_LinearSeqOptimized__sameElements__sc_GenIterable__Z(this, that)
});
$c_sci_List.prototype.lengthCompare__I__I = (function(len) {
  return $f_sc_LinearSeqOptimized__lengthCompare__I__I(this, len)
});
$c_sci_List.prototype.hashCode__I = (function() {
  return $m_s_util_hashing_MurmurHash3$().seqHash__sc_Seq__I(this)
});
$c_sci_List.prototype.iterator__sc_Iterator = (function() {
  return $f_sc_LinearSeqLike__iterator__sc_Iterator(this)
});
$c_sci_List.prototype.toSeq__sci_Seq = (function() {
  return this
});
$c_sci_List.prototype.companion__scg_GenericCompanion = (function() {
  return $m_sci_List$()
});
$c_sci_List.prototype.$colon$colon$colon__sci_List__sci_List = (function(prefix) {
  return (this.isEmpty__Z() ? prefix : (prefix.isEmpty__Z() ? this : new $c_scm_ListBuffer().$plus$plus$eq__sc_TraversableOnce__scm_ListBuffer(prefix).prependToList__sci_List__sci_List(this)))
});
$c_sci_List.prototype.$plus$plus__sc_GenTraversableOnce__scg_CanBuildFrom__O = (function(that, bf) {
  return ($p_sci_List__isLikeListReusableCBF__scg_CanBuildFrom__Z(this, bf) ? that.seq__sc_TraversableOnce().toList__sci_List().$colon$colon$colon__sci_List__sci_List(this) : $f_sc_TraversableLike__$plus$plus__sc_GenTraversableOnce__scg_CanBuildFrom__O(this, that, bf))
});
$c_sci_List.prototype.toList__sci_List = (function() {
  return this
});
$c_sci_List.prototype.take__I__sci_List = (function(n) {
  if ((this.isEmpty__Z() || (n <= 0))) {
    return $m_sci_Nil$()
  } else {
    var h = new $c_sci_$colon$colon(this.head__O(), $m_sci_Nil$());
    var t = h;
    var rest = $as_sci_List(this.tail__O());
    var i = 1;
    while (true) {
      if (rest.isEmpty__Z()) {
        return this
      };
      if ((i < n)) {
        i = ((1 + i) | 0);
        var nx = new $c_sci_$colon$colon(rest.head__O(), $m_sci_Nil$());
        t.sci_$colon$colon__f_tl = nx;
        t = nx;
        rest = $as_sci_List(rest.tail__O())
      } else {
        break
      }
    };
    return h
  }
});
$c_sci_List.prototype.drop__I__sci_List = (function(n) {
  var these = this;
  var count = n;
  while (((!these.isEmpty__Z()) && (count > 0))) {
    these = $as_sci_List(these.tail__O());
    count = (((-1) + count) | 0)
  };
  return these
});
$c_sci_List.prototype.takeRight__I__sci_List = (function(n) {
  return $p_sci_List__loop$2__sci_List__sci_List__sci_List(this, this.drop__I__sci_List(n), this)
});
$c_sci_List.prototype.map__F1__scg_CanBuildFrom__O = (function(f, bf) {
  if ($p_sci_List__isLikeListReusableCBF__scg_CanBuildFrom__Z(this, bf)) {
    if ((this === $m_sci_Nil$())) {
      return $m_sci_Nil$()
    } else {
      var h = new $c_sci_$colon$colon(f.apply__O__O(this.head__O()), $m_sci_Nil$());
      var t = h;
      var rest = $as_sci_List(this.tail__O());
      while ((rest !== $m_sci_Nil$())) {
        var nx = new $c_sci_$colon$colon(f.apply__O__O(rest.head__O()), $m_sci_Nil$());
        t.sci_$colon$colon__f_tl = nx;
        t = nx;
        rest = $as_sci_List(rest.tail__O())
      };
      return h
    }
  } else {
    return $f_sc_TraversableLike__map__F1__scg_CanBuildFrom__O(this, f, bf)
  }
});
$c_sci_List.prototype.flatMap__F1__scg_CanBuildFrom__O = (function(f, bf) {
  if ($p_sci_List__isLikeListReusableCBF__scg_CanBuildFrom__Z(this, bf)) {
    if ((this === $m_sci_Nil$())) {
      return $m_sci_Nil$()
    } else {
      var rest = this;
      var appender = null;
      var lastList = null;
      while ((rest !== $m_sci_Nil$())) {
        var c = $as_sc_GenTraversableOnce(f.apply__O__O(rest.head__O())).seq__sc_TraversableOnce();
        rest = $as_sci_List(rest.tail__O());
        if ((c !== $m_sci_Nil$())) {
          if ((lastList !== null)) {
            if ((appender === null)) {
              appender = new $c_sci_List$Appender$1(this)
            };
            var this$1 = lastList;
            var f$1 = appender;
            var these = this$1;
            while ((!these.isEmpty__Z())) {
              var v1 = these.head__O();
              f$1.apply__O__V(v1);
              these = $as_sci_List(these.tail__O())
            };
            lastList = null
          };
          if ((c instanceof $c_sci_$colon$colon)) {
            lastList = $as_sci_$colon$colon(c)
          } else {
            if ((appender === null)) {
              appender = new $c_sci_List$Appender$1(this)
            };
            c.foreach__F1__V(appender)
          }
        }
      };
      if (((appender === null) || (appender.sci_List$Appender$1__f_h === null))) {
        var result = ((lastList === null) ? $m_sci_Nil$() : lastList)
      } else {
        if ((lastList !== null)) {
          appender.appendLast__sci_$colon$colon__V(lastList)
        };
        var result = appender.sci_List$Appender$1__f_h
      };
      return result
    }
  } else {
    return $f_sc_TraversableLike__flatMap__F1__scg_CanBuildFrom__O(this, f, bf)
  }
});
$c_sci_List.prototype.foreach__F1__V = (function(f) {
  var these = this;
  while ((!these.isEmpty__Z())) {
    f.apply__O__O(these.head__O());
    these = $as_sci_List(these.tail__O())
  }
});
$c_sci_List.prototype.reverse__sci_List = (function() {
  var result = $m_sci_Nil$();
  var these = this;
  while ((!these.isEmpty__Z())) {
    var x$4 = these.head__O();
    var this$1 = result;
    result = new $c_sci_$colon$colon(x$4, this$1);
    these = $as_sci_List(these.tail__O())
  };
  return result
});
$c_sci_List.prototype.stringPrefix__T = (function() {
  return "List"
});
$c_sci_List.prototype.toStream__sci_Stream = (function() {
  return (this.isEmpty__Z() ? $m_sci_Stream$Empty$() : new $c_sci_Stream$Cons(this.head__O(), new $c_sjsr_AnonFunction0((() => $as_sci_List(this.tail__O()).toStream__sci_Stream()))))
});
$c_sci_List.prototype.thisCollection__sc_Traversable = (function() {
  return this
});
$c_sci_List.prototype.thisCollection__sc_Seq = (function() {
  return this
});
$c_sci_List.prototype.seq__sc_TraversableOnce = (function() {
  return this
});
$c_sci_List.prototype.seq__sc_Seq = (function() {
  return this
});
$c_sci_List.prototype.apply__O__O = (function(v1) {
  var n = $uI(v1);
  return $f_sc_LinearSeqOptimized__apply__I__O(this, n)
});
$c_sci_List.prototype.reverse__O = (function() {
  return this.reverse__sci_List()
});
$c_sci_List.prototype.takeRight__I__O = (function(n) {
  return this.takeRight__I__sci_List(n)
});
$c_sci_List.prototype.drop__I__O = (function(n) {
  return this.drop__I__sci_List(n)
});
$c_sci_List.prototype.drop__I__sc_LinearSeqOptimized = (function(n) {
  return this.drop__I__sci_List(n)
});
$c_sci_List.prototype.take__I__O = (function(n) {
  return this.take__I__sci_List(n)
});
function $as_sci_List(obj) {
  return (((obj instanceof $c_sci_List) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.List"))
}
function $isArrayOf_sci_List(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_List)))
}
function $asArrayOf_sci_List(obj, depth) {
  return (($isArrayOf_sci_List(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.List;", depth))
}
/** @constructor */
function $c_sci_ListMap$EmptyListMap$() {
  /*<skip>*/
}
$c_sci_ListMap$EmptyListMap$.prototype = new $h_sci_ListMap();
$c_sci_ListMap$EmptyListMap$.prototype.constructor = $c_sci_ListMap$EmptyListMap$;
/** @constructor */
function $h_sci_ListMap$EmptyListMap$() {
  /*<skip>*/
}
$h_sci_ListMap$EmptyListMap$.prototype = $c_sci_ListMap$EmptyListMap$.prototype;
var $d_sci_ListMap$EmptyListMap$ = new $TypeData().initClass({
  sci_ListMap$EmptyListMap$: 0
}, false, "scala.collection.immutable.ListMap$EmptyListMap$", {
  sci_ListMap$EmptyListMap$: 1,
  sci_ListMap: 1,
  sci_AbstractMap: 1,
  sc_AbstractMap: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_Map: 1,
  sc_GenMap: 1,
  sc_GenMapLike: 1,
  sc_MapLike: 1,
  s_PartialFunction: 1,
  F1: 1,
  scg_Subtractable: 1,
  sci_Map: 1,
  sci_Iterable: 1,
  sci_Traversable: 1,
  s_Immutable: 1,
  sci_MapLike: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1,
  sci_HasForeachEntry: 1
});
$c_sci_ListMap$EmptyListMap$.prototype.$classData = $d_sci_ListMap$EmptyListMap$;
var $n_sci_ListMap$EmptyListMap$;
function $m_sci_ListMap$EmptyListMap$() {
  if ((!$n_sci_ListMap$EmptyListMap$)) {
    $n_sci_ListMap$EmptyListMap$ = new $c_sci_ListMap$EmptyListMap$()
  };
  return $n_sci_ListMap$EmptyListMap$
}
function $p_sci_ListMap$Node__sizeInternal__sci_ListMap__I__I($thiz, cur, acc) {
  while (true) {
    if (cur.isEmpty__Z()) {
      return acc
    } else {
      var temp$cur = cur.next__sci_ListMap();
      var temp$acc = ((1 + acc) | 0);
      cur = temp$cur;
      acc = temp$acc
    }
  }
}
function $p_sci_ListMap$Node__applyInternal__sci_ListMap__O__O($thiz, cur, k) {
  while (true) {
    if (cur.isEmpty__Z()) {
      throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), ("key not found: " + k))
    } else if ($m_sr_BoxesRunTime$().equals__O__O__Z(k, cur.key__O())) {
      return cur.value__O()
    } else {
      cur = cur.next__sci_ListMap()
    }
  }
}
function $p_sci_ListMap$Node__getInternal__sci_ListMap__O__s_Option($thiz, cur, k) {
  while (true) {
    if (cur.isEmpty__Z()) {
      return $m_s_None$()
    } else if ($m_sr_BoxesRunTime$().equals__O__O__Z(k, cur.key__O())) {
      return new $c_s_Some(cur.value__O())
    } else {
      cur = cur.next__sci_ListMap()
    }
  }
}
function $p_sci_ListMap$Node__containsInternal__sci_ListMap__O__Z($thiz, cur, k) {
  while (true) {
    if ((!cur.isEmpty__Z())) {
      if ($m_sr_BoxesRunTime$().equals__O__O__Z(k, cur.key__O())) {
        return true
      } else {
        cur = cur.next__sci_ListMap()
      }
    } else {
      return false
    }
  }
}
function $p_sci_ListMap$Node__removeInternal__O__sci_ListMap__sci_List__sci_ListMap($thiz, k, cur, acc) {
  while (true) {
    if (cur.isEmpty__Z()) {
      var this$1 = acc;
      return $as_sci_ListMap($f_sc_LinearSeqOptimized__last__O(this$1))
    } else if ($m_sr_BoxesRunTime$().equals__O__O__Z(k, cur.key__O())) {
      var x$5 = cur.next__sci_ListMap();
      var this$2 = acc;
      var acc$1 = x$5;
      var these = this$2;
      while ((!these.isEmpty__Z())) {
        var arg1 = acc$1;
        var arg2 = these.head__O();
        var x0$1 = $as_sci_ListMap(arg1);
        var x1$1 = $as_sci_ListMap(arg2);
        acc$1 = new $c_sci_ListMap$Node(x0$1, x1$1.key__O(), x1$1.value__O());
        these = $as_sc_LinearSeqOptimized(these.tail__O())
      };
      return $as_sci_ListMap(acc$1)
    } else {
      var temp$cur = cur.next__sci_ListMap();
      var x$6 = cur;
      var this$3 = acc;
      var temp$acc = new $c_sci_$colon$colon(x$6, this$3);
      cur = temp$cur;
      acc = temp$acc
    }
  }
}
/** @constructor */
function $c_sci_ListMap$Node(outer, key, value) {
  this.sci_ListMap$Node__f_key = null;
  this.sci_ListMap$Node__f_value = null;
  this.sci_ListMap$Node__f_$outer = null;
  this.sci_ListMap$Node__f_key = key;
  this.sci_ListMap$Node__f_value = value;
  if ((outer === null)) {
    throw null
  } else {
    this.sci_ListMap$Node__f_$outer = outer
  }
}
$c_sci_ListMap$Node.prototype = new $h_sci_ListMap();
$c_sci_ListMap$Node.prototype.constructor = $c_sci_ListMap$Node;
/** @constructor */
function $h_sci_ListMap$Node() {
  /*<skip>*/
}
$h_sci_ListMap$Node.prototype = $c_sci_ListMap$Node.prototype;
$c_sci_ListMap$Node.prototype.key__O = (function() {
  return this.sci_ListMap$Node__f_key
});
$c_sci_ListMap$Node.prototype.value__O = (function() {
  return this.sci_ListMap$Node__f_value
});
$c_sci_ListMap$Node.prototype.size__I = (function() {
  return $p_sci_ListMap$Node__sizeInternal__sci_ListMap__I__I(this, this, 0)
});
$c_sci_ListMap$Node.prototype.isEmpty__Z = (function() {
  return false
});
$c_sci_ListMap$Node.prototype.apply__O__O = (function(k) {
  return $p_sci_ListMap$Node__applyInternal__sci_ListMap__O__O(this, this, k)
});
$c_sci_ListMap$Node.prototype.get__O__s_Option = (function(k) {
  return $p_sci_ListMap$Node__getInternal__sci_ListMap__O__s_Option(this, this, k)
});
$c_sci_ListMap$Node.prototype.contains__O__Z = (function(k) {
  return $p_sci_ListMap$Node__containsInternal__sci_ListMap__O__Z(this, this, k)
});
$c_sci_ListMap$Node.prototype.updated__O__O__sci_ListMap = (function(k, v) {
  var m = $p_sci_ListMap$Node__removeInternal__O__sci_ListMap__sci_List__sci_ListMap(this, k, this, $m_sci_Nil$());
  return new $c_sci_ListMap$Node(m, k, v)
});
$c_sci_ListMap$Node.prototype.$plus__T2__sci_ListMap = (function(kv) {
  var k = kv.T2__f__1;
  var m = $p_sci_ListMap$Node__removeInternal__O__sci_ListMap__sci_List__sci_ListMap(this, k, this, $m_sci_Nil$());
  return new $c_sci_ListMap$Node(m, kv.T2__f__1, kv.T2__f__2)
});
$c_sci_ListMap$Node.prototype.next__sci_ListMap = (function() {
  return this.sci_ListMap$Node__f_$outer
});
$c_sci_ListMap$Node.prototype.$plus__T2__sc_GenMap = (function(kv) {
  return this.$plus__T2__sci_ListMap(kv)
});
$c_sci_ListMap$Node.prototype.$plus__T2__sci_Map = (function(kv) {
  return this.$plus__T2__sci_ListMap(kv)
});
$c_sci_ListMap$Node.prototype.updated__O__O__sci_Map = (function(key, value) {
  return this.updated__O__O__sci_ListMap(key, value)
});
var $d_sci_ListMap$Node = new $TypeData().initClass({
  sci_ListMap$Node: 0
}, false, "scala.collection.immutable.ListMap$Node", {
  sci_ListMap$Node: 1,
  sci_ListMap: 1,
  sci_AbstractMap: 1,
  sc_AbstractMap: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_Map: 1,
  sc_GenMap: 1,
  sc_GenMapLike: 1,
  sc_MapLike: 1,
  s_PartialFunction: 1,
  F1: 1,
  scg_Subtractable: 1,
  sci_Map: 1,
  sci_Iterable: 1,
  sci_Traversable: 1,
  s_Immutable: 1,
  sci_MapLike: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1,
  sci_HasForeachEntry: 1
});
$c_sci_ListMap$Node.prototype.$classData = $d_sci_ListMap$Node;
/** @constructor */
function $c_sci_Range$Inclusive(start, end, step) {
  this.sci_Range__f_start = 0;
  this.sci_Range__f_end = 0;
  this.sci_Range__f_step = 0;
  this.sci_Range__f_isEmpty = false;
  this.sci_Range__f_scala$collection$immutable$Range$$numRangeElements = 0;
  this.sci_Range__f_scala$collection$immutable$Range$$lastElement = 0;
  $ct_sci_Range__I__I__I__(this, start, end, step)
}
$c_sci_Range$Inclusive.prototype = new $h_sci_Range();
$c_sci_Range$Inclusive.prototype.constructor = $c_sci_Range$Inclusive;
/** @constructor */
function $h_sci_Range$Inclusive() {
  /*<skip>*/
}
$h_sci_Range$Inclusive.prototype = $c_sci_Range$Inclusive.prototype;
$c_sci_Range$Inclusive.prototype.isInclusive__Z = (function() {
  return true
});
$c_sci_Range$Inclusive.prototype.copy__I__I__I__sci_Range = (function(start, end, step) {
  return new $c_sci_Range$Inclusive(start, end, step)
});
var $d_sci_Range$Inclusive = new $TypeData().initClass({
  sci_Range$Inclusive: 0
}, false, "scala.collection.immutable.Range$Inclusive", {
  sci_Range$Inclusive: 1,
  sci_Range: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_GenSeq: 1,
  sc_GenSeqLike: 1,
  sc_SeqLike: 1,
  sci_IndexedSeq: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_Traversable: 1,
  s_Immutable: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqLike: 1,
  sc_CustomParallelizable: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Range$Inclusive.prototype.$classData = $d_sci_Range$Inclusive;
function $p_sci_Stream$Cons__consEq$1__sci_Stream$Cons__sci_Stream$Cons__Z($thiz, a, b) {
  while (true) {
    if ($m_sr_BoxesRunTime$().equals__O__O__Z(a.sci_Stream$Cons__f_hd, b.sci_Stream$Cons__f_hd)) {
      var x1 = a.tail__sci_Stream();
      if ((x1 instanceof $c_sci_Stream$Cons)) {
        var x2 = $as_sci_Stream$Cons(x1);
        var x1$2 = b.tail__sci_Stream();
        if ((x1$2 instanceof $c_sci_Stream$Cons)) {
          var x2$2 = $as_sci_Stream$Cons(x1$2);
          if ((x2 === x2$2)) {
            return true
          } else {
            a = x2;
            b = x2$2
          }
        } else {
          return false
        }
      } else {
        return b.tail__sci_Stream().isEmpty__Z()
      }
    } else {
      return false
    }
  }
}
/** @constructor */
function $c_sci_Stream$Cons(hd, tl) {
  this.sci_Stream$Cons__f_hd = null;
  this.sci_Stream$Cons__f_tlVal = null;
  this.sci_Stream$Cons__f_tlGen = null;
  this.sci_Stream$Cons__f_hd = hd;
  this.sci_Stream$Cons__f_tlGen = tl
}
$c_sci_Stream$Cons.prototype = new $h_sci_Stream();
$c_sci_Stream$Cons.prototype.constructor = $c_sci_Stream$Cons;
/** @constructor */
function $h_sci_Stream$Cons() {
  /*<skip>*/
}
$h_sci_Stream$Cons.prototype = $c_sci_Stream$Cons.prototype;
$c_sci_Stream$Cons.prototype.isEmpty__Z = (function() {
  return false
});
$c_sci_Stream$Cons.prototype.head__O = (function() {
  return this.sci_Stream$Cons__f_hd
});
$c_sci_Stream$Cons.prototype.tailDefined__Z = (function() {
  return (this.sci_Stream$Cons__f_tlGen === null)
});
$c_sci_Stream$Cons.prototype.tail__sci_Stream = (function() {
  if ((!this.tailDefined__Z())) {
    if ((!this.tailDefined__Z())) {
      this.sci_Stream$Cons__f_tlVal = $as_sci_Stream(this.sci_Stream$Cons__f_tlGen.apply__O());
      this.sci_Stream$Cons__f_tlGen = null
    }
  };
  return this.sci_Stream$Cons__f_tlVal
});
$c_sci_Stream$Cons.prototype.sameElements__sc_GenIterable__Z = (function(that) {
  if ((that instanceof $c_sci_Stream$Cons)) {
    var x2 = $as_sci_Stream$Cons(that);
    return $p_sci_Stream$Cons__consEq$1__sci_Stream$Cons__sci_Stream$Cons__Z(this, this, x2)
  } else {
    return $f_sc_LinearSeqOptimized__sameElements__sc_GenIterable__Z(this, that)
  }
});
$c_sci_Stream$Cons.prototype.tail__O = (function() {
  return this.tail__sci_Stream()
});
function $as_sci_Stream$Cons(obj) {
  return (((obj instanceof $c_sci_Stream$Cons) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Stream$Cons"))
}
function $isArrayOf_sci_Stream$Cons(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Stream$Cons)))
}
function $asArrayOf_sci_Stream$Cons(obj, depth) {
  return (($isArrayOf_sci_Stream$Cons(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.Stream$Cons;", depth))
}
var $d_sci_Stream$Cons = new $TypeData().initClass({
  sci_Stream$Cons: 0
}, false, "scala.collection.immutable.Stream$Cons", {
  sci_Stream$Cons: 1,
  sci_Stream: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_GenSeq: 1,
  sc_GenSeqLike: 1,
  sc_SeqLike: 1,
  sci_LinearSeq: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_Traversable: 1,
  s_Immutable: 1,
  sc_LinearSeq: 1,
  sc_LinearSeqLike: 1,
  sc_LinearSeqOptimized: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Stream$Cons.prototype.$classData = $d_sci_Stream$Cons;
/** @constructor */
function $c_sci_Stream$Empty$() {
  /*<skip>*/
}
$c_sci_Stream$Empty$.prototype = new $h_sci_Stream();
$c_sci_Stream$Empty$.prototype.constructor = $c_sci_Stream$Empty$;
/** @constructor */
function $h_sci_Stream$Empty$() {
  /*<skip>*/
}
$h_sci_Stream$Empty$.prototype = $c_sci_Stream$Empty$.prototype;
$c_sci_Stream$Empty$.prototype.isEmpty__Z = (function() {
  return true
});
$c_sci_Stream$Empty$.prototype.head__E = (function() {
  throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), "head of empty stream")
});
$c_sci_Stream$Empty$.prototype.tail__E = (function() {
  throw new $c_jl_UnsupportedOperationException("tail of empty stream")
});
$c_sci_Stream$Empty$.prototype.tailDefined__Z = (function() {
  return false
});
$c_sci_Stream$Empty$.prototype.tail__O = (function() {
  this.tail__E()
});
$c_sci_Stream$Empty$.prototype.head__O = (function() {
  this.head__E()
});
var $d_sci_Stream$Empty$ = new $TypeData().initClass({
  sci_Stream$Empty$: 0
}, false, "scala.collection.immutable.Stream$Empty$", {
  sci_Stream$Empty$: 1,
  sci_Stream: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_GenSeq: 1,
  sc_GenSeqLike: 1,
  sc_SeqLike: 1,
  sci_LinearSeq: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_Traversable: 1,
  s_Immutable: 1,
  sc_LinearSeq: 1,
  sc_LinearSeqLike: 1,
  sc_LinearSeqOptimized: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Stream$Empty$.prototype.$classData = $d_sci_Stream$Empty$;
var $n_sci_Stream$Empty$;
function $m_sci_Stream$Empty$() {
  if ((!$n_sci_Stream$Empty$)) {
    $n_sci_Stream$Empty$ = new $c_sci_Stream$Empty$()
  };
  return $n_sci_Stream$Empty$
}
function $p_sci_Vector__checkRangeConvert__I__I($thiz, index) {
  var idx = ((index + $thiz.sci_Vector__f_startIndex) | 0);
  if (((index >= 0) && (idx < $thiz.sci_Vector__f_endIndex))) {
    return idx
  } else {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + index))
  }
}
function $p_sci_Vector__gotoPosWritable__I__I__I__V($thiz, oldIndex, newIndex, xor) {
  if ($thiz.sci_Vector__f_dirty) {
    $f_sci_VectorPointer__gotoPosWritable1__I__I__I__V($thiz, oldIndex, newIndex, xor)
  } else {
    $f_sci_VectorPointer__gotoPosWritable0__I__I__V($thiz, newIndex, xor);
    $thiz.sci_Vector__f_dirty = true
  }
}
function $p_sci_Vector__gotoFreshPosWritable__I__I__I__V($thiz, oldIndex, newIndex, xor) {
  if ($thiz.sci_Vector__f_dirty) {
    $f_sci_VectorPointer__gotoFreshPosWritable1__I__I__I__V($thiz, oldIndex, newIndex, xor)
  } else {
    $f_sci_VectorPointer__gotoFreshPosWritable0__I__I__I__V($thiz, oldIndex, newIndex, xor);
    $thiz.sci_Vector__f_dirty = true
  }
}
function $p_sci_Vector__shiftTopLevel__I__I__V($thiz, oldLeft, newLeft) {
  var x1 = (((-1) + $thiz.sci_Vector__f_depth) | 0);
  switch (x1) {
    case 0: {
      var array = $thiz.sci_Vector__f_display0;
      $thiz.sci_Vector__f_display0 = $f_sci_VectorPointer__copyRange__AO__I__I__AO($thiz, array, oldLeft, newLeft);
      break
    }
    case 1: {
      var array$1 = $thiz.sci_Vector__f_display1;
      $thiz.sci_Vector__f_display1 = $f_sci_VectorPointer__copyRange__AO__I__I__AO($thiz, array$1, oldLeft, newLeft);
      break
    }
    case 2: {
      var array$2 = $thiz.sci_Vector__f_display2;
      $thiz.sci_Vector__f_display2 = $f_sci_VectorPointer__copyRange__AO__I__I__AO($thiz, array$2, oldLeft, newLeft);
      break
    }
    case 3: {
      var array$3 = $thiz.sci_Vector__f_display3;
      $thiz.sci_Vector__f_display3 = $f_sci_VectorPointer__copyRange__AO__I__I__AO($thiz, array$3, oldLeft, newLeft);
      break
    }
    case 4: {
      var array$4 = $thiz.sci_Vector__f_display4;
      $thiz.sci_Vector__f_display4 = $f_sci_VectorPointer__copyRange__AO__I__I__AO($thiz, array$4, oldLeft, newLeft);
      break
    }
    case 5: {
      var array$5 = $thiz.sci_Vector__f_display5;
      $thiz.sci_Vector__f_display5 = $f_sci_VectorPointer__copyRange__AO__I__I__AO($thiz, array$5, oldLeft, newLeft);
      break
    }
    default: {
      throw new $c_s_MatchError(x1)
    }
  }
}
function $p_sci_Vector__zeroLeft__AO__I__V($thiz, array, index) {
  var i = 0;
  while ((i < index)) {
    array.set(i, null);
    i = ((1 + i) | 0)
  }
}
function $p_sci_Vector__zeroRight__AO__I__V($thiz, array, index) {
  var i = index;
  while ((i < array.u.length)) {
    array.set(i, null);
    i = ((1 + i) | 0)
  }
}
function $p_sci_Vector__copyLeft__AO__I__AO($thiz, array, right) {
  var copy = new $ac_O(array.u.length);
  $systemArraycopyRefs(array, 0, copy, 0, right);
  return copy
}
function $p_sci_Vector__copyRight__AO__I__AO($thiz, array, left) {
  var copy = new $ac_O(array.u.length);
  var length = ((copy.u.length - left) | 0);
  $systemArraycopyRefs(array, left, copy, left, length);
  return copy
}
function $p_sci_Vector__preClean__I__V($thiz, depth) {
  $thiz.sci_Vector__f_depth = depth;
  var x1 = (((-1) + depth) | 0);
  switch (x1) {
    case 0: {
      $thiz.sci_Vector__f_display1 = null;
      $thiz.sci_Vector__f_display2 = null;
      $thiz.sci_Vector__f_display3 = null;
      $thiz.sci_Vector__f_display4 = null;
      $thiz.sci_Vector__f_display5 = null;
      break
    }
    case 1: {
      $thiz.sci_Vector__f_display2 = null;
      $thiz.sci_Vector__f_display3 = null;
      $thiz.sci_Vector__f_display4 = null;
      $thiz.sci_Vector__f_display5 = null;
      break
    }
    case 2: {
      $thiz.sci_Vector__f_display3 = null;
      $thiz.sci_Vector__f_display4 = null;
      $thiz.sci_Vector__f_display5 = null;
      break
    }
    case 3: {
      $thiz.sci_Vector__f_display4 = null;
      $thiz.sci_Vector__f_display5 = null;
      break
    }
    case 4: {
      $thiz.sci_Vector__f_display5 = null;
      break
    }
    case 5: {
      break
    }
    default: {
      throw new $c_s_MatchError(x1)
    }
  }
}
function $p_sci_Vector__cleanLeftEdge__I__V($thiz, cutIndex) {
  if ((cutIndex < 32)) {
    $p_sci_Vector__zeroLeft__AO__I__V($thiz, $thiz.sci_Vector__f_display0, cutIndex)
  } else if ((cutIndex < 1024)) {
    $p_sci_Vector__zeroLeft__AO__I__V($thiz, $thiz.sci_Vector__f_display0, (31 & cutIndex));
    $thiz.sci_Vector__f_display1 = $p_sci_Vector__copyRight__AO__I__AO($thiz, $thiz.sci_Vector__f_display1, ((cutIndex >>> 5) | 0))
  } else if ((cutIndex < 32768)) {
    $p_sci_Vector__zeroLeft__AO__I__V($thiz, $thiz.sci_Vector__f_display0, (31 & cutIndex));
    $thiz.sci_Vector__f_display1 = $p_sci_Vector__copyRight__AO__I__AO($thiz, $thiz.sci_Vector__f_display1, (31 & ((cutIndex >>> 5) | 0)));
    $thiz.sci_Vector__f_display2 = $p_sci_Vector__copyRight__AO__I__AO($thiz, $thiz.sci_Vector__f_display2, ((cutIndex >>> 10) | 0))
  } else if ((cutIndex < 1048576)) {
    $p_sci_Vector__zeroLeft__AO__I__V($thiz, $thiz.sci_Vector__f_display0, (31 & cutIndex));
    $thiz.sci_Vector__f_display1 = $p_sci_Vector__copyRight__AO__I__AO($thiz, $thiz.sci_Vector__f_display1, (31 & ((cutIndex >>> 5) | 0)));
    $thiz.sci_Vector__f_display2 = $p_sci_Vector__copyRight__AO__I__AO($thiz, $thiz.sci_Vector__f_display2, (31 & ((cutIndex >>> 10) | 0)));
    $thiz.sci_Vector__f_display3 = $p_sci_Vector__copyRight__AO__I__AO($thiz, $thiz.sci_Vector__f_display3, ((cutIndex >>> 15) | 0))
  } else if ((cutIndex < 33554432)) {
    $p_sci_Vector__zeroLeft__AO__I__V($thiz, $thiz.sci_Vector__f_display0, (31 & cutIndex));
    $thiz.sci_Vector__f_display1 = $p_sci_Vector__copyRight__AO__I__AO($thiz, $thiz.sci_Vector__f_display1, (31 & ((cutIndex >>> 5) | 0)));
    $thiz.sci_Vector__f_display2 = $p_sci_Vector__copyRight__AO__I__AO($thiz, $thiz.sci_Vector__f_display2, (31 & ((cutIndex >>> 10) | 0)));
    $thiz.sci_Vector__f_display3 = $p_sci_Vector__copyRight__AO__I__AO($thiz, $thiz.sci_Vector__f_display3, (31 & ((cutIndex >>> 15) | 0)));
    $thiz.sci_Vector__f_display4 = $p_sci_Vector__copyRight__AO__I__AO($thiz, $thiz.sci_Vector__f_display4, ((cutIndex >>> 20) | 0))
  } else if ((cutIndex < 1073741824)) {
    $p_sci_Vector__zeroLeft__AO__I__V($thiz, $thiz.sci_Vector__f_display0, (31 & cutIndex));
    $thiz.sci_Vector__f_display1 = $p_sci_Vector__copyRight__AO__I__AO($thiz, $thiz.sci_Vector__f_display1, (31 & ((cutIndex >>> 5) | 0)));
    $thiz.sci_Vector__f_display2 = $p_sci_Vector__copyRight__AO__I__AO($thiz, $thiz.sci_Vector__f_display2, (31 & ((cutIndex >>> 10) | 0)));
    $thiz.sci_Vector__f_display3 = $p_sci_Vector__copyRight__AO__I__AO($thiz, $thiz.sci_Vector__f_display3, (31 & ((cutIndex >>> 15) | 0)));
    $thiz.sci_Vector__f_display4 = $p_sci_Vector__copyRight__AO__I__AO($thiz, $thiz.sci_Vector__f_display4, (31 & ((cutIndex >>> 20) | 0)));
    $thiz.sci_Vector__f_display5 = $p_sci_Vector__copyRight__AO__I__AO($thiz, $thiz.sci_Vector__f_display5, ((cutIndex >>> 25) | 0))
  } else {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException())
  }
}
function $p_sci_Vector__cleanRightEdge__I__V($thiz, cutIndex) {
  if ((cutIndex <= 32)) {
    $p_sci_Vector__zeroRight__AO__I__V($thiz, $thiz.sci_Vector__f_display0, cutIndex)
  } else if ((cutIndex <= 1024)) {
    $p_sci_Vector__zeroRight__AO__I__V($thiz, $thiz.sci_Vector__f_display0, ((1 + (31 & (((-1) + cutIndex) | 0))) | 0));
    $thiz.sci_Vector__f_display1 = $p_sci_Vector__copyLeft__AO__I__AO($thiz, $thiz.sci_Vector__f_display1, ((cutIndex >>> 5) | 0))
  } else if ((cutIndex <= 32768)) {
    $p_sci_Vector__zeroRight__AO__I__V($thiz, $thiz.sci_Vector__f_display0, ((1 + (31 & (((-1) + cutIndex) | 0))) | 0));
    $thiz.sci_Vector__f_display1 = $p_sci_Vector__copyLeft__AO__I__AO($thiz, $thiz.sci_Vector__f_display1, ((1 + (31 & (((((-1) + cutIndex) | 0) >>> 5) | 0))) | 0));
    $thiz.sci_Vector__f_display2 = $p_sci_Vector__copyLeft__AO__I__AO($thiz, $thiz.sci_Vector__f_display2, ((cutIndex >>> 10) | 0))
  } else if ((cutIndex <= 1048576)) {
    $p_sci_Vector__zeroRight__AO__I__V($thiz, $thiz.sci_Vector__f_display0, ((1 + (31 & (((-1) + cutIndex) | 0))) | 0));
    $thiz.sci_Vector__f_display1 = $p_sci_Vector__copyLeft__AO__I__AO($thiz, $thiz.sci_Vector__f_display1, ((1 + (31 & (((((-1) + cutIndex) | 0) >>> 5) | 0))) | 0));
    $thiz.sci_Vector__f_display2 = $p_sci_Vector__copyLeft__AO__I__AO($thiz, $thiz.sci_Vector__f_display2, ((1 + (31 & (((((-1) + cutIndex) | 0) >>> 10) | 0))) | 0));
    $thiz.sci_Vector__f_display3 = $p_sci_Vector__copyLeft__AO__I__AO($thiz, $thiz.sci_Vector__f_display3, ((cutIndex >>> 15) | 0))
  } else if ((cutIndex <= 33554432)) {
    $p_sci_Vector__zeroRight__AO__I__V($thiz, $thiz.sci_Vector__f_display0, ((1 + (31 & (((-1) + cutIndex) | 0))) | 0));
    $thiz.sci_Vector__f_display1 = $p_sci_Vector__copyLeft__AO__I__AO($thiz, $thiz.sci_Vector__f_display1, ((1 + (31 & (((((-1) + cutIndex) | 0) >>> 5) | 0))) | 0));
    $thiz.sci_Vector__f_display2 = $p_sci_Vector__copyLeft__AO__I__AO($thiz, $thiz.sci_Vector__f_display2, ((1 + (31 & (((((-1) + cutIndex) | 0) >>> 10) | 0))) | 0));
    $thiz.sci_Vector__f_display3 = $p_sci_Vector__copyLeft__AO__I__AO($thiz, $thiz.sci_Vector__f_display3, ((1 + (31 & (((((-1) + cutIndex) | 0) >>> 15) | 0))) | 0));
    $thiz.sci_Vector__f_display4 = $p_sci_Vector__copyLeft__AO__I__AO($thiz, $thiz.sci_Vector__f_display4, ((cutIndex >>> 20) | 0))
  } else if ((cutIndex <= 1073741824)) {
    $p_sci_Vector__zeroRight__AO__I__V($thiz, $thiz.sci_Vector__f_display0, ((1 + (31 & (((-1) + cutIndex) | 0))) | 0));
    $thiz.sci_Vector__f_display1 = $p_sci_Vector__copyLeft__AO__I__AO($thiz, $thiz.sci_Vector__f_display1, ((1 + (31 & (((((-1) + cutIndex) | 0) >>> 5) | 0))) | 0));
    $thiz.sci_Vector__f_display2 = $p_sci_Vector__copyLeft__AO__I__AO($thiz, $thiz.sci_Vector__f_display2, ((1 + (31 & (((((-1) + cutIndex) | 0) >>> 10) | 0))) | 0));
    $thiz.sci_Vector__f_display3 = $p_sci_Vector__copyLeft__AO__I__AO($thiz, $thiz.sci_Vector__f_display3, ((1 + (31 & (((((-1) + cutIndex) | 0) >>> 15) | 0))) | 0));
    $thiz.sci_Vector__f_display4 = $p_sci_Vector__copyLeft__AO__I__AO($thiz, $thiz.sci_Vector__f_display4, ((1 + (31 & (((((-1) + cutIndex) | 0) >>> 20) | 0))) | 0));
    $thiz.sci_Vector__f_display5 = $p_sci_Vector__copyLeft__AO__I__AO($thiz, $thiz.sci_Vector__f_display5, ((cutIndex >>> 25) | 0))
  } else {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException())
  }
}
function $p_sci_Vector__requiredDepth__I__I($thiz, xor) {
  if ((xor < 32)) {
    return 1
  } else if ((xor < 1024)) {
    return 2
  } else if ((xor < 32768)) {
    return 3
  } else if ((xor < 1048576)) {
    return 4
  } else if ((xor < 33554432)) {
    return 5
  } else if ((xor < 1073741824)) {
    return 6
  } else {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException())
  }
}
function $p_sci_Vector__dropFront0__I__sci_Vector($thiz, cutIndex) {
  var blockIndex = ((-32) & cutIndex);
  var xor = (cutIndex ^ (((-1) + $thiz.sci_Vector__f_endIndex) | 0));
  var d = $p_sci_Vector__requiredDepth__I__I($thiz, xor);
  var shift = (cutIndex & (~(((-1) + (1 << Math.imul(5, d))) | 0)));
  var s = new $c_sci_Vector(((cutIndex - shift) | 0), (($thiz.sci_Vector__f_endIndex - shift) | 0), ((blockIndex - shift) | 0));
  var depth = $thiz.sci_Vector__f_depth;
  $f_sci_VectorPointer__initFrom__sci_VectorPointer__I__V(s, $thiz, depth);
  s.sci_Vector__f_dirty = $thiz.sci_Vector__f_dirty;
  $p_sci_Vector__gotoPosWritable__I__I__I__V(s, $thiz.sci_Vector__f_focus, blockIndex, ($thiz.sci_Vector__f_focus ^ blockIndex));
  $p_sci_Vector__preClean__I__V(s, d);
  $p_sci_Vector__cleanLeftEdge__I__V(s, ((cutIndex - shift) | 0));
  return s
}
function $p_sci_Vector__dropBack0__I__sci_Vector($thiz, cutIndex) {
  var blockIndex = ((-32) & (((-1) + cutIndex) | 0));
  var xor = ($thiz.sci_Vector__f_startIndex ^ (((-1) + cutIndex) | 0));
  var d = $p_sci_Vector__requiredDepth__I__I($thiz, xor);
  var shift = ($thiz.sci_Vector__f_startIndex & (~(((-1) + (1 << Math.imul(5, d))) | 0)));
  var s = new $c_sci_Vector((($thiz.sci_Vector__f_startIndex - shift) | 0), ((cutIndex - shift) | 0), ((blockIndex - shift) | 0));
  var depth = $thiz.sci_Vector__f_depth;
  $f_sci_VectorPointer__initFrom__sci_VectorPointer__I__V(s, $thiz, depth);
  s.sci_Vector__f_dirty = $thiz.sci_Vector__f_dirty;
  $p_sci_Vector__gotoPosWritable__I__I__I__V(s, $thiz.sci_Vector__f_focus, blockIndex, ($thiz.sci_Vector__f_focus ^ blockIndex));
  $p_sci_Vector__preClean__I__V(s, d);
  $p_sci_Vector__cleanRightEdge__I__V(s, ((cutIndex - shift) | 0));
  return s
}
/** @constructor */
function $c_sci_Vector(startIndex, endIndex, focus) {
  this.sci_Vector__f_startIndex = 0;
  this.sci_Vector__f_endIndex = 0;
  this.sci_Vector__f_focus = 0;
  this.sci_Vector__f_dirty = false;
  this.sci_Vector__f_depth = 0;
  this.sci_Vector__f_display0 = null;
  this.sci_Vector__f_display1 = null;
  this.sci_Vector__f_display2 = null;
  this.sci_Vector__f_display3 = null;
  this.sci_Vector__f_display4 = null;
  this.sci_Vector__f_display5 = null;
  this.sci_Vector__f_startIndex = startIndex;
  this.sci_Vector__f_endIndex = endIndex;
  this.sci_Vector__f_focus = focus;
  this.sci_Vector__f_dirty = false
}
$c_sci_Vector.prototype = new $h_sc_AbstractSeq();
$c_sci_Vector.prototype.constructor = $c_sci_Vector;
/** @constructor */
function $h_sci_Vector() {
  /*<skip>*/
}
$h_sci_Vector.prototype = $c_sci_Vector.prototype;
$c_sci_Vector.prototype.hashCode__I = (function() {
  return $m_s_util_hashing_MurmurHash3$().seqHash__sc_Seq__I(this)
});
$c_sci_Vector.prototype.sizeHintIfCheap__I = (function() {
  return this.length__I()
});
$c_sci_Vector.prototype.toSeq__sci_Seq = (function() {
  return this
});
$c_sci_Vector.prototype.depth__I = (function() {
  return this.sci_Vector__f_depth
});
$c_sci_Vector.prototype.depth_$eq__I__V = (function(x$1) {
  this.sci_Vector__f_depth = x$1
});
$c_sci_Vector.prototype.display0__AO = (function() {
  return this.sci_Vector__f_display0
});
$c_sci_Vector.prototype.display0_$eq__AO__V = (function(x$1) {
  this.sci_Vector__f_display0 = x$1
});
$c_sci_Vector.prototype.display1__AO = (function() {
  return this.sci_Vector__f_display1
});
$c_sci_Vector.prototype.display1_$eq__AO__V = (function(x$1) {
  this.sci_Vector__f_display1 = x$1
});
$c_sci_Vector.prototype.display2__AO = (function() {
  return this.sci_Vector__f_display2
});
$c_sci_Vector.prototype.display2_$eq__AO__V = (function(x$1) {
  this.sci_Vector__f_display2 = x$1
});
$c_sci_Vector.prototype.display3__AO = (function() {
  return this.sci_Vector__f_display3
});
$c_sci_Vector.prototype.display3_$eq__AO__V = (function(x$1) {
  this.sci_Vector__f_display3 = x$1
});
$c_sci_Vector.prototype.display4__AO = (function() {
  return this.sci_Vector__f_display4
});
$c_sci_Vector.prototype.display4_$eq__AO__V = (function(x$1) {
  this.sci_Vector__f_display4 = x$1
});
$c_sci_Vector.prototype.display5__AO = (function() {
  return this.sci_Vector__f_display5
});
$c_sci_Vector.prototype.display5_$eq__AO__V = (function(x$1) {
  this.sci_Vector__f_display5 = x$1
});
$c_sci_Vector.prototype.companion__scg_GenericCompanion = (function() {
  return $m_sci_Vector$()
});
$c_sci_Vector.prototype.length__I = (function() {
  return ((this.sci_Vector__f_endIndex - this.sci_Vector__f_startIndex) | 0)
});
$c_sci_Vector.prototype.toVector__sci_Vector = (function() {
  return this
});
$c_sci_Vector.prototype.lengthCompare__I__I = (function(len) {
  return ((this.length__I() - len) | 0)
});
$c_sci_Vector.prototype.initIterator__sci_VectorIterator__V = (function(s) {
  var depth = this.sci_Vector__f_depth;
  $f_sci_VectorPointer__initFrom__sci_VectorPointer__I__V(s, this, depth);
  if (this.sci_Vector__f_dirty) {
    var index = this.sci_Vector__f_focus;
    $f_sci_VectorPointer__stabilize__I__V(s, index)
  };
  if ((s.sci_VectorIterator__f_depth > 1)) {
    var index$1 = this.sci_Vector__f_startIndex;
    var xor = (this.sci_Vector__f_startIndex ^ this.sci_Vector__f_focus);
    $f_sci_VectorPointer__gotoPos__I__I__V(s, index$1, xor)
  }
});
$c_sci_Vector.prototype.iterator__sci_VectorIterator = (function() {
  if ((this.length__I() === 0)) {
    return $m_sci_Vector$().sci_Vector$__f_scala$collection$immutable$Vector$$emptyIterator
  } else {
    var s = new $c_sci_VectorIterator(this.sci_Vector__f_startIndex, this.sci_Vector__f_endIndex);
    this.initIterator__sci_VectorIterator__V(s);
    return s
  }
});
$c_sci_Vector.prototype.apply__I__O = (function(index) {
  var idx = $p_sci_Vector__checkRangeConvert__I__I(this, index);
  var xor = (idx ^ this.sci_Vector__f_focus);
  return $f_sci_VectorPointer__getElem__I__I__O(this, idx, xor)
});
$c_sci_Vector.prototype.$plus$colon__O__scg_CanBuildFrom__O = (function(elem, bf) {
  return ((((((bf === $m_sci_Vector$().scg_GenTraversableFactory__f_ReusableCBFInstance) || (bf === $m_sci_IndexedSeq$().scg_GenTraversableFactory__f_ReusableCBFInstance)) || (bf === $m_sc_IndexedSeq$().scg_GenTraversableFactory__f_ReusableCBFInstance)) || (bf === $m_sci_Seq$().scg_GenTraversableFactory__f_ReusableCBFInstance)) || (bf === $m_sc_Seq$().scg_GenTraversableFactory__f_ReusableCBFInstance)) ? this.appendFront__O__sci_Vector(elem) : $f_sc_SeqLike__$plus$colon__O__scg_CanBuildFrom__O(this, elem, bf))
});
$c_sci_Vector.prototype.$colon$plus__O__scg_CanBuildFrom__O = (function(elem, bf) {
  return ((((((bf === $m_sci_Vector$().scg_GenTraversableFactory__f_ReusableCBFInstance) || (bf === $m_sci_IndexedSeq$().scg_GenTraversableFactory__f_ReusableCBFInstance)) || (bf === $m_sc_IndexedSeq$().scg_GenTraversableFactory__f_ReusableCBFInstance)) || (bf === $m_sci_Seq$().scg_GenTraversableFactory__f_ReusableCBFInstance)) || (bf === $m_sc_Seq$().scg_GenTraversableFactory__f_ReusableCBFInstance)) ? this.appendBack__O__sci_Vector(elem) : $f_sc_SeqLike__$colon$plus__O__scg_CanBuildFrom__O(this, elem, bf))
});
$c_sci_Vector.prototype.drop__I__sci_Vector = (function(n) {
  if ((n <= 0)) {
    return this
  } else if ((this.sci_Vector__f_startIndex < ((this.sci_Vector__f_endIndex - n) | 0))) {
    return $p_sci_Vector__dropFront0__I__sci_Vector(this, ((this.sci_Vector__f_startIndex + n) | 0))
  } else {
    var this$1 = $m_sci_Vector$();
    return this$1.sci_Vector$__f_NIL
  }
});
$c_sci_Vector.prototype.takeRight__I__sci_Vector = (function(n) {
  if ((n <= 0)) {
    var this$1 = $m_sci_Vector$();
    return this$1.sci_Vector$__f_NIL
  } else {
    return ((((this.sci_Vector__f_endIndex - n) | 0) > this.sci_Vector__f_startIndex) ? $p_sci_Vector__dropFront0__I__sci_Vector(this, ((this.sci_Vector__f_endIndex - n) | 0)) : this)
  }
});
$c_sci_Vector.prototype.dropRight__I__sci_Vector = (function(n) {
  if ((n <= 0)) {
    return this
  } else if ((((this.sci_Vector__f_endIndex - n) | 0) > this.sci_Vector__f_startIndex)) {
    return $p_sci_Vector__dropBack0__I__sci_Vector(this, ((this.sci_Vector__f_endIndex - n) | 0))
  } else {
    var this$1 = $m_sci_Vector$();
    return this$1.sci_Vector$__f_NIL
  }
});
$c_sci_Vector.prototype.head__O = (function() {
  if ($f_sc_SeqLike__isEmpty__Z(this)) {
    throw new $c_jl_UnsupportedOperationException("empty.head")
  };
  return this.apply__I__O(0)
});
$c_sci_Vector.prototype.tail__sci_Vector = (function() {
  if ($f_sc_SeqLike__isEmpty__Z(this)) {
    throw new $c_jl_UnsupportedOperationException("empty.tail")
  };
  return this.drop__I__sci_Vector(1)
});
$c_sci_Vector.prototype.init__sci_Vector = (function() {
  if ($f_sc_SeqLike__isEmpty__Z(this)) {
    throw new $c_jl_UnsupportedOperationException("empty.init")
  };
  return this.dropRight__I__sci_Vector(1)
});
$c_sci_Vector.prototype.$plus$plus__sc_GenTraversableOnce__scg_CanBuildFrom__O = (function(that, bf) {
  if ((((((bf === $m_sci_Vector$().scg_GenTraversableFactory__f_ReusableCBFInstance) || (bf === $m_sci_IndexedSeq$().scg_GenTraversableFactory__f_ReusableCBFInstance)) || (bf === $m_sc_IndexedSeq$().scg_GenTraversableFactory__f_ReusableCBFInstance)) || (bf === $m_sci_Seq$().scg_GenTraversableFactory__f_ReusableCBFInstance)) || (bf === $m_sc_Seq$().scg_GenTraversableFactory__f_ReusableCBFInstance))) {
    if (that.isEmpty__Z()) {
      return this
    } else {
      var again = ((!that.isTraversableAgain__Z()) ? that.toVector__sci_Vector() : that.seq__sc_TraversableOnce());
      var x1 = again.size__I();
      if (((x1 <= 2) || (x1 < ((this.length__I() >>> 5) | 0)))) {
        var v = new $c_sr_ObjectRef(this);
        again.foreach__F1__V(new $c_sjsr_AnonFunction1(((x$2) => {
          var $$x1 = $as_sci_Vector(v.sr_ObjectRef__f_elem);
          var this$3 = $m_sci_Vector$();
          v.sr_ObjectRef__f_elem = $as_sci_Vector($$x1.$colon$plus__O__scg_CanBuildFrom__O(x$2, this$3.scg_GenTraversableFactory__f_ReusableCBFInstance))
        })));
        return $as_sci_Vector(v.sr_ObjectRef__f_elem)
      } else if (((this.length__I() < ((x1 >>> 5) | 0)) && (again instanceof $c_sci_Vector))) {
        var v$2 = $as_sci_Vector(again);
        var ri = new $c_sci_Vector$$anon$1(this);
        while (ri.hasNext__Z()) {
          var x$1 = ri.next__O();
          var $$x2 = v$2;
          var this$4 = $m_sci_Vector$();
          v$2 = $as_sci_Vector($$x2.$plus$colon__O__scg_CanBuildFrom__O(x$1, this$4.scg_GenTraversableFactory__f_ReusableCBFInstance))
        };
        return v$2
      } else {
        return $f_sc_TraversableLike__$plus$plus__sc_GenTraversableOnce__scg_CanBuildFrom__O(this, again, bf)
      }
    }
  } else {
    return $f_sc_TraversableLike__$plus$plus__sc_GenTraversableOnce__scg_CanBuildFrom__O(this, that.seq__sc_TraversableOnce(), bf)
  }
});
$c_sci_Vector.prototype.appendFront__O__sci_Vector = (function(value) {
  if ((this.sci_Vector__f_endIndex !== this.sci_Vector__f_startIndex)) {
    var blockIndex = ((-32) & (((-1) + this.sci_Vector__f_startIndex) | 0));
    var lo = (31 & (((-1) + this.sci_Vector__f_startIndex) | 0));
    if ((this.sci_Vector__f_startIndex !== ((32 + blockIndex) | 0))) {
      var s = new $c_sci_Vector((((-1) + this.sci_Vector__f_startIndex) | 0), this.sci_Vector__f_endIndex, blockIndex);
      var depth = this.sci_Vector__f_depth;
      $f_sci_VectorPointer__initFrom__sci_VectorPointer__I__V(s, this, depth);
      s.sci_Vector__f_dirty = this.sci_Vector__f_dirty;
      $p_sci_Vector__gotoPosWritable__I__I__I__V(s, this.sci_Vector__f_focus, blockIndex, (this.sci_Vector__f_focus ^ blockIndex));
      s.sci_Vector__f_display0.set(lo, value);
      return s
    } else {
      var freeSpace = (((1 << Math.imul(5, this.sci_Vector__f_depth)) - this.sci_Vector__f_endIndex) | 0);
      var shift = (freeSpace & (~(((-1) + (1 << Math.imul(5, (((-1) + this.sci_Vector__f_depth) | 0)))) | 0)));
      var shiftBlocks = ((freeSpace >>> Math.imul(5, (((-1) + this.sci_Vector__f_depth) | 0))) | 0);
      if ((shift !== 0)) {
        if ((this.sci_Vector__f_depth > 1)) {
          var newBlockIndex = ((blockIndex + shift) | 0);
          var newFocus = ((this.sci_Vector__f_focus + shift) | 0);
          var s$2 = new $c_sci_Vector((((((-1) + this.sci_Vector__f_startIndex) | 0) + shift) | 0), ((this.sci_Vector__f_endIndex + shift) | 0), newBlockIndex);
          var depth$1 = this.sci_Vector__f_depth;
          $f_sci_VectorPointer__initFrom__sci_VectorPointer__I__V(s$2, this, depth$1);
          s$2.sci_Vector__f_dirty = this.sci_Vector__f_dirty;
          $p_sci_Vector__shiftTopLevel__I__I__V(s$2, 0, shiftBlocks);
          $p_sci_Vector__gotoFreshPosWritable__I__I__I__V(s$2, newFocus, newBlockIndex, (newFocus ^ newBlockIndex));
          s$2.sci_Vector__f_display0.set(lo, value);
          return s$2
        } else {
          var newBlockIndex$2 = ((32 + blockIndex) | 0);
          var newFocus$2 = this.sci_Vector__f_focus;
          var s$3 = new $c_sci_Vector((((((-1) + this.sci_Vector__f_startIndex) | 0) + shift) | 0), ((this.sci_Vector__f_endIndex + shift) | 0), newBlockIndex$2);
          var depth$2 = this.sci_Vector__f_depth;
          $f_sci_VectorPointer__initFrom__sci_VectorPointer__I__V(s$3, this, depth$2);
          s$3.sci_Vector__f_dirty = this.sci_Vector__f_dirty;
          $p_sci_Vector__shiftTopLevel__I__I__V(s$3, 0, shiftBlocks);
          $p_sci_Vector__gotoPosWritable__I__I__I__V(s$3, newFocus$2, newBlockIndex$2, (newFocus$2 ^ newBlockIndex$2));
          s$3.sci_Vector__f_display0.set((((-1) + shift) | 0), value);
          return s$3
        }
      } else if ((blockIndex < 0)) {
        var move = (((1 << Math.imul(5, ((1 + this.sci_Vector__f_depth) | 0))) - (1 << Math.imul(5, this.sci_Vector__f_depth))) | 0);
        var newBlockIndex$3 = ((blockIndex + move) | 0);
        var newFocus$3 = ((this.sci_Vector__f_focus + move) | 0);
        var s$4 = new $c_sci_Vector((((((-1) + this.sci_Vector__f_startIndex) | 0) + move) | 0), ((this.sci_Vector__f_endIndex + move) | 0), newBlockIndex$3);
        var depth$3 = this.sci_Vector__f_depth;
        $f_sci_VectorPointer__initFrom__sci_VectorPointer__I__V(s$4, this, depth$3);
        s$4.sci_Vector__f_dirty = this.sci_Vector__f_dirty;
        $p_sci_Vector__gotoFreshPosWritable__I__I__I__V(s$4, newFocus$3, newBlockIndex$3, (newFocus$3 ^ newBlockIndex$3));
        s$4.sci_Vector__f_display0.set(lo, value);
        return s$4
      } else {
        var newFocus$4 = this.sci_Vector__f_focus;
        var s$5 = new $c_sci_Vector((((-1) + this.sci_Vector__f_startIndex) | 0), this.sci_Vector__f_endIndex, blockIndex);
        var depth$4 = this.sci_Vector__f_depth;
        $f_sci_VectorPointer__initFrom__sci_VectorPointer__I__V(s$5, this, depth$4);
        s$5.sci_Vector__f_dirty = this.sci_Vector__f_dirty;
        $p_sci_Vector__gotoFreshPosWritable__I__I__I__V(s$5, newFocus$4, blockIndex, (newFocus$4 ^ blockIndex));
        s$5.sci_Vector__f_display0.set(lo, value);
        return s$5
      }
    }
  } else {
    var elems = new $ac_O(32);
    elems.set(31, value);
    var s$6 = new $c_sci_Vector(31, 32, 0);
    s$6.sci_Vector__f_depth = 1;
    s$6.sci_Vector__f_display0 = elems;
    return s$6
  }
});
$c_sci_Vector.prototype.appendBack__O__sci_Vector = (function(value) {
  if ((this.sci_Vector__f_endIndex !== this.sci_Vector__f_startIndex)) {
    var blockIndex = ((-32) & this.sci_Vector__f_endIndex);
    var lo = (31 & this.sci_Vector__f_endIndex);
    if ((this.sci_Vector__f_endIndex !== blockIndex)) {
      var s = new $c_sci_Vector(this.sci_Vector__f_startIndex, ((1 + this.sci_Vector__f_endIndex) | 0), blockIndex);
      var depth = this.sci_Vector__f_depth;
      $f_sci_VectorPointer__initFrom__sci_VectorPointer__I__V(s, this, depth);
      s.sci_Vector__f_dirty = this.sci_Vector__f_dirty;
      $p_sci_Vector__gotoPosWritable__I__I__I__V(s, this.sci_Vector__f_focus, blockIndex, (this.sci_Vector__f_focus ^ blockIndex));
      s.sci_Vector__f_display0.set(lo, value);
      return s
    } else {
      var shift = (this.sci_Vector__f_startIndex & (~(((-1) + (1 << Math.imul(5, (((-1) + this.sci_Vector__f_depth) | 0)))) | 0)));
      var shiftBlocks = ((this.sci_Vector__f_startIndex >>> Math.imul(5, (((-1) + this.sci_Vector__f_depth) | 0))) | 0);
      if ((shift !== 0)) {
        if ((this.sci_Vector__f_depth > 1)) {
          var newBlockIndex = ((blockIndex - shift) | 0);
          var newFocus = ((this.sci_Vector__f_focus - shift) | 0);
          var s$2 = new $c_sci_Vector(((this.sci_Vector__f_startIndex - shift) | 0), ((((1 + this.sci_Vector__f_endIndex) | 0) - shift) | 0), newBlockIndex);
          var depth$1 = this.sci_Vector__f_depth;
          $f_sci_VectorPointer__initFrom__sci_VectorPointer__I__V(s$2, this, depth$1);
          s$2.sci_Vector__f_dirty = this.sci_Vector__f_dirty;
          $p_sci_Vector__shiftTopLevel__I__I__V(s$2, shiftBlocks, 0);
          $p_sci_Vector__gotoFreshPosWritable__I__I__I__V(s$2, newFocus, newBlockIndex, (newFocus ^ newBlockIndex));
          s$2.sci_Vector__f_display0.set(lo, value);
          return s$2
        } else {
          var newBlockIndex$2 = (((-32) + blockIndex) | 0);
          var newFocus$2 = this.sci_Vector__f_focus;
          var s$3 = new $c_sci_Vector(((this.sci_Vector__f_startIndex - shift) | 0), ((((1 + this.sci_Vector__f_endIndex) | 0) - shift) | 0), newBlockIndex$2);
          var depth$2 = this.sci_Vector__f_depth;
          $f_sci_VectorPointer__initFrom__sci_VectorPointer__I__V(s$3, this, depth$2);
          s$3.sci_Vector__f_dirty = this.sci_Vector__f_dirty;
          $p_sci_Vector__shiftTopLevel__I__I__V(s$3, shiftBlocks, 0);
          $p_sci_Vector__gotoPosWritable__I__I__I__V(s$3, newFocus$2, newBlockIndex$2, (newFocus$2 ^ newBlockIndex$2));
          s$3.sci_Vector__f_display0.set(((32 - shift) | 0), value);
          return s$3
        }
      } else {
        var newFocus$3 = this.sci_Vector__f_focus;
        var s$4 = new $c_sci_Vector(this.sci_Vector__f_startIndex, ((1 + this.sci_Vector__f_endIndex) | 0), blockIndex);
        var depth$3 = this.sci_Vector__f_depth;
        $f_sci_VectorPointer__initFrom__sci_VectorPointer__I__V(s$4, this, depth$3);
        s$4.sci_Vector__f_dirty = this.sci_Vector__f_dirty;
        $p_sci_Vector__gotoFreshPosWritable__I__I__I__V(s$4, newFocus$3, blockIndex, (newFocus$3 ^ blockIndex));
        s$4.sci_Vector__f_display0.set(lo, value);
        return s$4
      }
    }
  } else {
    var elems = new $ac_O(32);
    elems.set(0, value);
    var s$5 = new $c_sci_Vector(0, 1, 0);
    s$5.sci_Vector__f_depth = 1;
    s$5.sci_Vector__f_display0 = elems;
    return s$5
  }
});
$c_sci_Vector.prototype.thisCollection__sc_Traversable = (function() {
  return this
});
$c_sci_Vector.prototype.thisCollection__sc_Seq = (function() {
  return this
});
$c_sci_Vector.prototype.seq__sc_TraversableOnce = (function() {
  return this
});
$c_sci_Vector.prototype.seq__sc_Seq = (function() {
  return this
});
$c_sci_Vector.prototype.init__O = (function() {
  return this.init__sci_Vector()
});
$c_sci_Vector.prototype.tail__O = (function() {
  return this.tail__sci_Vector()
});
$c_sci_Vector.prototype.takeRight__I__O = (function(n) {
  return this.takeRight__I__sci_Vector(n)
});
$c_sci_Vector.prototype.drop__I__O = (function(n) {
  return this.drop__I__sci_Vector(n)
});
$c_sci_Vector.prototype.apply__O__O = (function(v1) {
  return this.apply__I__O($uI(v1))
});
$c_sci_Vector.prototype.iterator__sc_Iterator = (function() {
  return this.iterator__sci_VectorIterator()
});
function $as_sci_Vector(obj) {
  return (((obj instanceof $c_sci_Vector) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Vector"))
}
function $isArrayOf_sci_Vector(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Vector)))
}
function $asArrayOf_sci_Vector(obj, depth) {
  return (($isArrayOf_sci_Vector(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.Vector;", depth))
}
var $d_sci_Vector = new $TypeData().initClass({
  sci_Vector: 0
}, false, "scala.collection.immutable.Vector", {
  sci_Vector: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_GenSeq: 1,
  sc_GenSeqLike: 1,
  sc_SeqLike: 1,
  sci_IndexedSeq: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_Traversable: 1,
  s_Immutable: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqLike: 1,
  sci_VectorPointer: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1,
  sc_CustomParallelizable: 1
});
$c_sci_Vector.prototype.$classData = $d_sci_Vector;
/** @constructor */
function $c_sci_WrappedString(self) {
  this.sci_WrappedString__f_self = null;
  this.sci_WrappedString__f_self = self
}
$c_sci_WrappedString.prototype = new $h_sc_AbstractSeq();
$c_sci_WrappedString.prototype.constructor = $c_sci_WrappedString;
/** @constructor */
function $h_sci_WrappedString() {
  /*<skip>*/
}
$h_sci_WrappedString.prototype = $c_sci_WrappedString.prototype;
$c_sci_WrappedString.prototype.isEmpty__Z = (function() {
  return $f_sc_IndexedSeqOptimized__isEmpty__Z(this)
});
$c_sci_WrappedString.prototype.foreach__F1__V = (function(f) {
  $f_sc_IndexedSeqOptimized__foreach__F1__V(this, f)
});
$c_sci_WrappedString.prototype.foldLeft__O__F2__O = (function(z, op) {
  var this$1 = this.sci_WrappedString__f_self;
  return $p_sc_IndexedSeqOptimized__foldl__I__I__O__F2__O(this, 0, this$1.length, z, op)
});
$c_sci_WrappedString.prototype.head__O = (function() {
  return $f_sc_IndexedSeqOptimized__head__O(this)
});
$c_sci_WrappedString.prototype.tail__O = (function() {
  return $f_sc_IndexedSeqOptimized__tail__O(this)
});
$c_sci_WrappedString.prototype.init__O = (function() {
  return $f_sc_IndexedSeqOptimized__init__O(this)
});
$c_sci_WrappedString.prototype.drop__I__O = (function(n) {
  var this$1 = this.sci_WrappedString__f_self;
  var until = this$1.length;
  return this.slice__I__I__sci_WrappedString(n, until)
});
$c_sci_WrappedString.prototype.takeRight__I__O = (function(n) {
  return $f_sc_IndexedSeqOptimized__takeRight__I__O(this, n)
});
$c_sci_WrappedString.prototype.sameElements__sc_GenIterable__Z = (function(that) {
  return $f_sc_IndexedSeqOptimized__sameElements__sc_GenIterable__Z(this, that)
});
$c_sci_WrappedString.prototype.copyToArray__O__I__I__V = (function(xs, start, len) {
  $f_sc_IndexedSeqOptimized__copyToArray__O__I__I__V(this, xs, start, len)
});
$c_sci_WrappedString.prototype.lengthCompare__I__I = (function(len) {
  return $f_sc_IndexedSeqOptimized__lengthCompare__I__I(this, len)
});
$c_sci_WrappedString.prototype.reverse__O = (function() {
  return $f_sc_IndexedSeqOptimized__reverse__O(this)
});
$c_sci_WrappedString.prototype.toList__sci_List = (function() {
  return $f_sc_IndexedSeqOptimized__toList__sci_List(this)
});
$c_sci_WrappedString.prototype.companion__scg_GenericCompanion = (function() {
  return $m_sci_IndexedSeq$()
});
$c_sci_WrappedString.prototype.hashCode__I = (function() {
  return $m_s_util_hashing_MurmurHash3$().seqHash__sc_Seq__I(this)
});
$c_sci_WrappedString.prototype.iterator__sc_Iterator = (function() {
  return $f_sc_IndexedSeqLike__iterator__sc_Iterator(this)
});
$c_sci_WrappedString.prototype.sizeHintIfCheap__I = (function() {
  var this$1 = this.sci_WrappedString__f_self;
  return this$1.length
});
$c_sci_WrappedString.prototype.toSeq__sci_Seq = (function() {
  return this
});
$c_sci_WrappedString.prototype.newBuilder__scm_Builder = (function() {
  return $m_sci_WrappedString$().newBuilder__scm_Builder()
});
$c_sci_WrappedString.prototype.slice__I__I__sci_WrappedString = (function(from, until) {
  var start = ((from < 0) ? 0 : from);
  if ((until <= start)) {
    var $$x1 = true
  } else {
    var this$1 = this.sci_WrappedString__f_self;
    var $$x1 = (start >= this$1.length)
  };
  if ($$x1) {
    return new $c_sci_WrappedString("")
  };
  var this$2 = this.sci_WrappedString__f_self;
  if ((until > this$2.length)) {
    var this$3 = this.sci_WrappedString__f_self;
    var end = this$3.length
  } else {
    var end = until
  };
  var this$4 = $m_s_Predef$().unwrapString__sci_WrappedString__T(this);
  if ((start < 0)) {
    $charAt(this$4, start)
  };
  if ((end > this$4.length)) {
    $charAt(this$4, end)
  };
  if ((end < start)) {
    $charAt(this$4, (-1))
  };
  return new $c_sci_WrappedString($as_T(this$4.substring(start, end)))
});
$c_sci_WrappedString.prototype.length__I = (function() {
  var this$1 = this.sci_WrappedString__f_self;
  return this$1.length
});
$c_sci_WrappedString.prototype.toString__T = (function() {
  return this.sci_WrappedString__f_self
});
$c_sci_WrappedString.prototype.seq__sc_TraversableOnce = (function() {
  return this
});
$c_sci_WrappedString.prototype.seq__sc_Seq = (function() {
  return this
});
$c_sci_WrappedString.prototype.apply__O__O = (function(v1) {
  var n = $uI(v1);
  var this$1 = this.sci_WrappedString__f_self;
  return $bC($charAt(this$1, n))
});
$c_sci_WrappedString.prototype.apply__I__O = (function(idx) {
  var this$1 = this.sci_WrappedString__f_self;
  return $bC($charAt(this$1, idx))
});
$c_sci_WrappedString.prototype.slice__I__I__O = (function(from, until) {
  return this.slice__I__I__sci_WrappedString(from, until)
});
$c_sci_WrappedString.prototype.thisCollection__sc_Traversable = (function() {
  return this
});
$c_sci_WrappedString.prototype.thisCollection__sc_Seq = (function() {
  return this
});
function $as_sci_WrappedString(obj) {
  return (((obj instanceof $c_sci_WrappedString) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.WrappedString"))
}
function $isArrayOf_sci_WrappedString(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_WrappedString)))
}
function $asArrayOf_sci_WrappedString(obj, depth) {
  return (($isArrayOf_sci_WrappedString(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.WrappedString;", depth))
}
var $d_sci_WrappedString = new $TypeData().initClass({
  sci_WrappedString: 0
}, false, "scala.collection.immutable.WrappedString", {
  sci_WrappedString: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_GenSeq: 1,
  sc_GenSeqLike: 1,
  sc_SeqLike: 1,
  sci_IndexedSeq: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_Traversable: 1,
  s_Immutable: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqLike: 1,
  sci_StringLike: 1,
  sc_IndexedSeqOptimized: 1,
  s_math_Ordered: 1,
  jl_Comparable: 1
});
$c_sci_WrappedString.prototype.$classData = $d_sci_WrappedString;
function $f_scm_ResizableArray__apply__I__O($thiz, idx) {
  if ((idx >= $thiz.scm_ArrayBuffer__f_size0)) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + idx))
  };
  return $thiz.scm_ArrayBuffer__f_array.get(idx)
}
function $f_scm_ResizableArray__foreach__F1__V($thiz, f) {
  var i = 0;
  var top = $thiz.length__I();
  while ((i < top)) {
    f.apply__O__O($thiz.scm_ArrayBuffer__f_array.get(i));
    i = ((1 + i) | 0)
  }
}
function $f_scm_ResizableArray__copyToArray__O__I__I__V($thiz, xs, start, len) {
  var that = (($m_sr_ScalaRunTime$().array_length__O__I(xs) - start) | 0);
  var x = ((len < that) ? len : that);
  var that$1 = $thiz.scm_ArrayBuffer__f_size0;
  var len1 = ((x < that$1) ? x : that$1);
  if ((len1 > 0)) {
    $m_s_Array$().copy__O__I__O__I__I__V($thiz.scm_ArrayBuffer__f_array, 0, xs, start, len1)
  }
}
function $f_scm_ResizableArray__reduceToSize__I__V($thiz, sz) {
  $m_s_Predef$().require__Z__V((sz <= $thiz.scm_ArrayBuffer__f_size0));
  while (($thiz.scm_ArrayBuffer__f_size0 > sz)) {
    $thiz.scm_ArrayBuffer__f_size0 = (((-1) + $thiz.scm_ArrayBuffer__f_size0) | 0);
    $thiz.scm_ArrayBuffer__f_array.set($thiz.scm_ArrayBuffer__f_size0, null)
  }
}
function $f_scm_ResizableArray__ensureSize__I__V($thiz, n) {
  var value = $thiz.scm_ArrayBuffer__f_array.u.length;
  var hi = (value >> 31);
  var hi$1 = (n >> 31);
  if (((hi$1 === hi) ? (((-2147483648) ^ n) > ((-2147483648) ^ value)) : (hi$1 > hi))) {
    var lo = (value << 1);
    var hi$2 = (((value >>> 31) | 0) | (hi << 1));
    var newSize__lo = lo;
    var newSize__hi = hi$2;
    while (true) {
      var hi$3 = (n >> 31);
      var b__lo = newSize__lo;
      var b__hi = newSize__hi;
      var bhi = b__hi;
      if (((hi$3 === bhi) ? (((-2147483648) ^ n) > ((-2147483648) ^ b__lo)) : (hi$3 > bhi))) {
        var this$4__lo = newSize__lo;
        var this$4__hi = newSize__hi;
        var lo$1 = this$4__lo;
        var lo$2 = (lo$1 << 1);
        var hi$4 = (((lo$1 >>> 31) | 0) | (this$4__hi << 1));
        var $$x1__lo = lo$2;
        var $$x1__hi = hi$4;
        newSize__lo = $$x1__lo;
        newSize__hi = $$x1__hi
      } else {
        break
      }
    };
    var this$5__lo = newSize__lo;
    var this$5__hi = newSize__hi;
    var ahi = this$5__hi;
    if (((ahi === 0) ? (((-2147483648) ^ this$5__lo) > (-1)) : (ahi > 0))) {
      var $$x2__lo = 2147483647;
      var $$x2__hi = 0;
      newSize__lo = $$x2__lo;
      newSize__hi = $$x2__hi
    };
    var this$6__lo = newSize__lo;
    var this$6__hi = newSize__hi;
    var newArray = new $ac_O(this$6__lo);
    var src = $thiz.scm_ArrayBuffer__f_array;
    var length = $thiz.scm_ArrayBuffer__f_size0;
    $systemArraycopyRefs(src, 0, newArray, 0, length);
    $thiz.scm_ArrayBuffer__f_array = newArray
  }
}
function $f_scm_ResizableArray__$init$__V($thiz) {
  var x = $thiz.scm_ArrayBuffer__f_initialSize;
  $thiz.scm_ArrayBuffer__f_array = new $ac_O(((x > 1) ? x : 1));
  $thiz.scm_ArrayBuffer__f_size0 = 0
}
/** @constructor */
function $c_sci_$colon$colon(head, tl) {
  this.sci_$colon$colon__f_head = null;
  this.sci_$colon$colon__f_tl = null;
  this.sci_$colon$colon__f_head = head;
  this.sci_$colon$colon__f_tl = tl
}
$c_sci_$colon$colon.prototype = new $h_sci_List();
$c_sci_$colon$colon.prototype.constructor = $c_sci_$colon$colon;
/** @constructor */
function $h_sci_$colon$colon() {
  /*<skip>*/
}
$h_sci_$colon$colon.prototype = $c_sci_$colon$colon.prototype;
$c_sci_$colon$colon.prototype.head__O = (function() {
  return this.sci_$colon$colon__f_head
});
$c_sci_$colon$colon.prototype.isEmpty__Z = (function() {
  return false
});
$c_sci_$colon$colon.prototype.productPrefix__T = (function() {
  return "::"
});
$c_sci_$colon$colon.prototype.productArity__I = (function() {
  return 2
});
$c_sci_$colon$colon.prototype.productElement__I__O = (function(x$1) {
  switch (x$1) {
    case 0: {
      return this.sci_$colon$colon__f_head;
      break
    }
    case 1: {
      return this.sci_$colon$colon__f_tl;
      break
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + x$1))
    }
  }
});
$c_sci_$colon$colon.prototype.productIterator__sc_Iterator = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this)
});
$c_sci_$colon$colon.prototype.tail__O = (function() {
  return this.sci_$colon$colon__f_tl
});
function $as_sci_$colon$colon(obj) {
  return (((obj instanceof $c_sci_$colon$colon) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.$colon$colon"))
}
function $isArrayOf_sci_$colon$colon(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_$colon$colon)))
}
function $asArrayOf_sci_$colon$colon(obj, depth) {
  return (($isArrayOf_sci_$colon$colon(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.$colon$colon;", depth))
}
var $d_sci_$colon$colon = new $TypeData().initClass({
  sci_$colon$colon: 0
}, false, "scala.collection.immutable.$colon$colon", {
  sci_$colon$colon: 1,
  sci_List: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_GenSeq: 1,
  sc_GenSeqLike: 1,
  sc_SeqLike: 1,
  sci_LinearSeq: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_Traversable: 1,
  s_Immutable: 1,
  sc_LinearSeq: 1,
  sc_LinearSeqLike: 1,
  s_Product: 1,
  sc_LinearSeqOptimized: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_$colon$colon.prototype.$classData = $d_sci_$colon$colon;
/** @constructor */
function $c_sci_HashMap$EmptyHashMap$() {
  /*<skip>*/
}
$c_sci_HashMap$EmptyHashMap$.prototype = new $h_sci_HashMap();
$c_sci_HashMap$EmptyHashMap$.prototype.constructor = $c_sci_HashMap$EmptyHashMap$;
/** @constructor */
function $h_sci_HashMap$EmptyHashMap$() {
  /*<skip>*/
}
$h_sci_HashMap$EmptyHashMap$.prototype = $c_sci_HashMap$EmptyHashMap$.prototype;
$c_sci_HashMap$EmptyHashMap$.prototype.head__T2 = (function() {
  throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), "Empty Map")
});
$c_sci_HashMap$EmptyHashMap$.prototype.head__O = (function() {
  return this.head__T2()
});
var $d_sci_HashMap$EmptyHashMap$ = new $TypeData().initClass({
  sci_HashMap$EmptyHashMap$: 0
}, false, "scala.collection.immutable.HashMap$EmptyHashMap$", {
  sci_HashMap$EmptyHashMap$: 1,
  sci_HashMap: 1,
  sci_AbstractMap: 1,
  sc_AbstractMap: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_Map: 1,
  sc_GenMap: 1,
  sc_GenMapLike: 1,
  sc_MapLike: 1,
  s_PartialFunction: 1,
  F1: 1,
  scg_Subtractable: 1,
  sci_Map: 1,
  sci_Iterable: 1,
  sci_Traversable: 1,
  s_Immutable: 1,
  sci_MapLike: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1,
  sc_CustomParallelizable: 1,
  sci_HasForeachEntry: 1
});
$c_sci_HashMap$EmptyHashMap$.prototype.$classData = $d_sci_HashMap$EmptyHashMap$;
var $n_sci_HashMap$EmptyHashMap$;
function $m_sci_HashMap$EmptyHashMap$() {
  if ((!$n_sci_HashMap$EmptyHashMap$)) {
    $n_sci_HashMap$EmptyHashMap$ = new $c_sci_HashMap$EmptyHashMap$()
  };
  return $n_sci_HashMap$EmptyHashMap$
}
/** @constructor */
function $c_sci_HashMap$HashMap1(key, hash, value, kvOrNull) {
  this.sci_HashMap$HashMap1__f_key = null;
  this.sci_HashMap$HashMap1__f_hash = 0;
  this.sci_HashMap$HashMap1__f_value = null;
  this.sci_HashMap$HashMap1__f_kvOrNull = null;
  this.sci_HashMap$HashMap1__f_key = key;
  this.sci_HashMap$HashMap1__f_hash = hash;
  this.sci_HashMap$HashMap1__f_value = value;
  this.sci_HashMap$HashMap1__f_kvOrNull = kvOrNull
}
$c_sci_HashMap$HashMap1.prototype = new $h_sci_HashMap();
$c_sci_HashMap$HashMap1.prototype.constructor = $c_sci_HashMap$HashMap1;
/** @constructor */
function $h_sci_HashMap$HashMap1() {
  /*<skip>*/
}
$h_sci_HashMap$HashMap1.prototype = $c_sci_HashMap$HashMap1.prototype;
$c_sci_HashMap$HashMap1.prototype.size__I = (function() {
  return 1
});
$c_sci_HashMap$HashMap1.prototype.get0__O__I__I__s_Option = (function(key, hash, level) {
  return (((hash === this.sci_HashMap$HashMap1__f_hash) && $m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_HashMap$HashMap1__f_key)) ? new $c_s_Some(this.sci_HashMap$HashMap1__f_value) : $m_s_None$())
});
$c_sci_HashMap$HashMap1.prototype.getOrElse0__O__I__I__F0__O = (function(key, hash, level, f) {
  return (((hash === this.sci_HashMap$HashMap1__f_hash) && $m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_HashMap$HashMap1__f_key)) ? this.sci_HashMap$HashMap1__f_value : f.apply__O())
});
$c_sci_HashMap$HashMap1.prototype.updated0__O__I__I__O__T2__sci_HashMap$Merger__sci_HashMap = (function(key, hash, level, value, kv, merger) {
  if ((hash === this.sci_HashMap$HashMap1__f_hash)) {
    if ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_HashMap$HashMap1__f_key)) {
      if ((merger === null)) {
        return (Object.is(this.sci_HashMap$HashMap1__f_value, value) ? this : new $c_sci_HashMap$HashMap1(this.sci_HashMap$HashMap1__f_key, hash, value, (Object.is(this.sci_HashMap$HashMap1__f_key, key) ? kv : null)))
      } else if (((Object.is(key, this.sci_HashMap$HashMap1__f_key) && Object.is(value, this.sci_HashMap$HashMap1__f_value)) && merger.retainIdentical__Z())) {
        return this
      } else {
        var current = this.ensurePair__T2();
        var nkv = merger.apply__T2__T2__T2(current, ((kv !== null) ? kv : new $c_T2(key, value)));
        return (((current === nkv) || (Object.is(this.sci_HashMap$HashMap1__f_key, nkv.T2__f__1) && Object.is(this.sci_HashMap$HashMap1__f_value, nkv.T2__f__2))) ? this : new $c_sci_HashMap$HashMap1(nkv.T2__f__1, hash, nkv.T2__f__2, nkv))
      }
    } else {
      $m_sci_ListMap$();
      var this$2 = $m_sci_ListMap$EmptyListMap$();
      var key$1 = this.sci_HashMap$HashMap1__f_key;
      var value$1 = this.sci_HashMap$HashMap1__f_value;
      return new $c_sci_HashMap$HashMapCollision1(hash, new $c_sci_ListMap$Node(this$2, key$1, value$1).updated__O__O__sci_ListMap(key, value))
    }
  } else {
    var that = new $c_sci_HashMap$HashMap1(key, hash, value, kv);
    return $m_sci_HashMap$().scala$collection$immutable$HashMap$$makeHashTrieMap__I__sci_HashMap__I__sci_HashMap__I__I__sci_HashMap$HashTrieMap(this.sci_HashMap$HashMap1__f_hash, this, hash, that, level, 2)
  }
});
$c_sci_HashMap$HashMap1.prototype.iterator__sc_Iterator = (function() {
  $m_sc_Iterator$();
  var array = [this.ensurePair__T2()];
  var elems = $ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), array);
  return $f_sc_IndexedSeqLike__iterator__sc_Iterator(elems)
});
$c_sci_HashMap$HashMap1.prototype.foreach__F1__V = (function(f) {
  f.apply__O__O(this.ensurePair__T2())
});
$c_sci_HashMap$HashMap1.prototype.foreachEntry__F2__V = (function(f) {
  f.apply__O__O__O(this.sci_HashMap$HashMap1__f_key, this.sci_HashMap$HashMap1__f_value)
});
$c_sci_HashMap$HashMap1.prototype.ensurePair__T2 = (function() {
  if ((this.sci_HashMap$HashMap1__f_kvOrNull !== null)) {
    return this.sci_HashMap$HashMap1__f_kvOrNull
  } else {
    this.sci_HashMap$HashMap1__f_kvOrNull = new $c_T2(this.sci_HashMap$HashMap1__f_key, this.sci_HashMap$HashMap1__f_value);
    return this.sci_HashMap$HashMap1__f_kvOrNull
  }
});
$c_sci_HashMap$HashMap1.prototype.merge0__sci_HashMap__I__sci_HashMap$Merger__sci_HashMap = (function(that, level, merger) {
  if ((that instanceof $c_sci_HashMap$HashMap1)) {
    var x2 = $as_sci_HashMap$HashMap1(that);
    return (((this === x2) && merger.retainIdentical__Z()) ? this : (((this.sci_HashMap$HashMap1__f_hash === x2.sci_HashMap$HashMap1__f_hash) && $m_sr_BoxesRunTime$().equals__O__O__Z(this.sci_HashMap$HashMap1__f_key, x2.sci_HashMap$HashMap1__f_key)) ? ((merger === $m_sci_HashMap$().sci_HashMap$__f__defaultMerger) ? this : ((merger === $m_sci_HashMap$().sci_HashMap$__f__defaultMerger.invert__sci_HashMap$Merger()) ? x2 : this.updated0__O__I__I__O__T2__sci_HashMap$Merger__sci_HashMap(x2.sci_HashMap$HashMap1__f_key, x2.sci_HashMap$HashMap1__f_hash, level, x2.sci_HashMap$HashMap1__f_value, x2.ensurePair__T2(), merger))) : this.updated0__O__I__I__O__T2__sci_HashMap$Merger__sci_HashMap(x2.sci_HashMap$HashMap1__f_key, x2.sci_HashMap$HashMap1__f_hash, level, x2.sci_HashMap$HashMap1__f_value, x2.ensurePair__T2(), merger)))
  } else {
    return that.updated0__O__I__I__O__T2__sci_HashMap$Merger__sci_HashMap(this.sci_HashMap$HashMap1__f_key, this.sci_HashMap$HashMap1__f_hash, level, this.sci_HashMap$HashMap1__f_value, this.ensurePair__T2(), merger.invert__sci_HashMap$Merger())
  }
});
$c_sci_HashMap$HashMap1.prototype.equals__O__Z = (function(that) {
  if ((that instanceof $c_sci_HashMap$HashMap1)) {
    var x2 = $as_sci_HashMap$HashMap1(that);
    return ((this === x2) || (((x2.sci_HashMap$HashMap1__f_hash === this.sci_HashMap$HashMap1__f_hash) && $m_sr_BoxesRunTime$().equals__O__O__Z(x2.sci_HashMap$HashMap1__f_key, this.sci_HashMap$HashMap1__f_key)) && $m_sr_BoxesRunTime$().equals__O__O__Z(x2.sci_HashMap$HashMap1__f_value, this.sci_HashMap$HashMap1__f_value)))
  } else {
    return ((!(that instanceof $c_sci_HashMap)) && $f_sc_GenMapLike__equals__O__Z(this, that))
  }
});
function $as_sci_HashMap$HashMap1(obj) {
  return (((obj instanceof $c_sci_HashMap$HashMap1) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.HashMap$HashMap1"))
}
function $isArrayOf_sci_HashMap$HashMap1(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_HashMap$HashMap1)))
}
function $asArrayOf_sci_HashMap$HashMap1(obj, depth) {
  return (($isArrayOf_sci_HashMap$HashMap1(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.HashMap$HashMap1;", depth))
}
var $d_sci_HashMap$HashMap1 = new $TypeData().initClass({
  sci_HashMap$HashMap1: 0
}, false, "scala.collection.immutable.HashMap$HashMap1", {
  sci_HashMap$HashMap1: 1,
  sci_HashMap: 1,
  sci_AbstractMap: 1,
  sc_AbstractMap: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_Map: 1,
  sc_GenMap: 1,
  sc_GenMapLike: 1,
  sc_MapLike: 1,
  s_PartialFunction: 1,
  F1: 1,
  scg_Subtractable: 1,
  sci_Map: 1,
  sci_Iterable: 1,
  sci_Traversable: 1,
  s_Immutable: 1,
  sci_MapLike: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1,
  sc_CustomParallelizable: 1,
  sci_HasForeachEntry: 1
});
$c_sci_HashMap$HashMap1.prototype.$classData = $d_sci_HashMap$HashMap1;
/** @constructor */
function $c_sci_HashMap$HashMapCollision1(hash, kvs) {
  this.sci_HashMap$HashMapCollision1__f_hash = 0;
  this.sci_HashMap$HashMapCollision1__f_kvs = null;
  this.sci_HashMap$HashMapCollision1__f_hash = hash;
  this.sci_HashMap$HashMapCollision1__f_kvs = kvs
}
$c_sci_HashMap$HashMapCollision1.prototype = new $h_sci_HashMap();
$c_sci_HashMap$HashMapCollision1.prototype.constructor = $c_sci_HashMap$HashMapCollision1;
/** @constructor */
function $h_sci_HashMap$HashMapCollision1() {
  /*<skip>*/
}
$h_sci_HashMap$HashMapCollision1.prototype = $c_sci_HashMap$HashMapCollision1.prototype;
$c_sci_HashMap$HashMapCollision1.prototype.size__I = (function() {
  return this.sci_HashMap$HashMapCollision1__f_kvs.size__I()
});
$c_sci_HashMap$HashMapCollision1.prototype.get0__O__I__I__s_Option = (function(key, hash, level) {
  return ((hash === this.sci_HashMap$HashMapCollision1__f_hash) ? this.sci_HashMap$HashMapCollision1__f_kvs.get__O__s_Option(key) : $m_s_None$())
});
$c_sci_HashMap$HashMapCollision1.prototype.getOrElse0__O__I__I__F0__O = (function(key, hash, level, f) {
  if ((hash === this.sci_HashMap$HashMapCollision1__f_hash)) {
    var this$1 = this.sci_HashMap$HashMapCollision1__f_kvs;
    return $f_sc_MapLike__getOrElse__O__F0__O(this$1, key, f)
  } else {
    return f.apply__O()
  }
});
$c_sci_HashMap$HashMapCollision1.prototype.updated0__O__I__I__O__T2__sci_HashMap$Merger__sci_HashMap = (function(key, hash, level, value, kv, merger) {
  if ((hash === this.sci_HashMap$HashMapCollision1__f_hash)) {
    return (((merger === null) || (!this.sci_HashMap$HashMapCollision1__f_kvs.contains__O__Z(key))) ? new $c_sci_HashMap$HashMapCollision1(hash, this.sci_HashMap$HashMapCollision1__f_kvs.updated__O__O__sci_ListMap(key, value)) : new $c_sci_HashMap$HashMapCollision1(hash, this.sci_HashMap$HashMapCollision1__f_kvs.$plus__T2__sci_ListMap(merger.apply__T2__T2__T2(new $c_T2(key, this.sci_HashMap$HashMapCollision1__f_kvs.apply__O__O(key)), kv))))
  } else {
    var that = new $c_sci_HashMap$HashMap1(key, hash, value, kv);
    return $m_sci_HashMap$().scala$collection$immutable$HashMap$$makeHashTrieMap__I__sci_HashMap__I__sci_HashMap__I__I__sci_HashMap$HashTrieMap(this.sci_HashMap$HashMapCollision1__f_hash, this, hash, that, level, ((1 + this.sci_HashMap$HashMapCollision1__f_kvs.size__I()) | 0))
  }
});
$c_sci_HashMap$HashMapCollision1.prototype.iterator__sc_Iterator = (function() {
  var this$1 = this.sci_HashMap$HashMapCollision1__f_kvs;
  var this$2 = $p_sci_ListMap__reverseList$1__sci_List(this$1);
  return $f_sc_LinearSeqLike__iterator__sc_Iterator(this$2)
});
$c_sci_HashMap$HashMapCollision1.prototype.foreach__F1__V = (function(f) {
  var this$1 = this.sci_HashMap$HashMapCollision1__f_kvs;
  var this$2 = $p_sci_ListMap__reverseList$1__sci_List(this$1);
  var this$3 = $f_sc_LinearSeqLike__iterator__sc_Iterator(this$2);
  $f_sc_Iterator__foreach__F1__V(this$3, f)
});
$c_sci_HashMap$HashMapCollision1.prototype.foreachEntry__F2__V = (function(f) {
  this.sci_HashMap$HashMapCollision1__f_kvs.foreachEntry__F2__V(f)
});
$c_sci_HashMap$HashMapCollision1.prototype.merge0__sci_HashMap__I__sci_HashMap$Merger__sci_HashMap = (function(that, level, merger) {
  if ((that instanceof $c_sci_HashMap$HashTrieMap)) {
    var x2 = $as_sci_HashMap$HashTrieMap(that);
    return x2.merge0__sci_HashMap__I__sci_HashMap$Merger__sci_HashMap(this, level, merger.invert__sci_HashMap$Merger())
  } else if ((that instanceof $c_sci_HashMap$HashMap1)) {
    var x3 = $as_sci_HashMap$HashMap1(that);
    return ((x3.sci_HashMap$HashMap1__f_hash !== this.sci_HashMap$HashMapCollision1__f_hash) ? $m_sci_HashMap$().scala$collection$immutable$HashMap$$makeHashTrieMap__I__sci_HashMap__I__sci_HashMap__I__I__sci_HashMap$HashTrieMap(this.sci_HashMap$HashMapCollision1__f_hash, this, x3.sci_HashMap$HashMap1__f_hash, x3, level, ((1 + this.sci_HashMap$HashMapCollision1__f_kvs.size__I()) | 0)) : this.updated0__O__I__I__O__T2__sci_HashMap$Merger__sci_HashMap(x3.sci_HashMap$HashMap1__f_key, x3.sci_HashMap$HashMap1__f_hash, level, x3.sci_HashMap$HashMap1__f_value, x3.ensurePair__T2(), merger))
  } else if ((that instanceof $c_sci_HashMap$HashMapCollision1)) {
    var x4 = $as_sci_HashMap$HashMapCollision1(that);
    if ((x4.sci_HashMap$HashMapCollision1__f_hash !== this.sci_HashMap$HashMapCollision1__f_hash)) {
      return $m_sci_HashMap$().scala$collection$immutable$HashMap$$makeHashTrieMap__I__sci_HashMap__I__sci_HashMap__I__I__sci_HashMap$HashTrieMap(this.sci_HashMap$HashMapCollision1__f_hash, this, x4.sci_HashMap$HashMapCollision1__f_hash, x4, level, ((x4.sci_HashMap$HashMapCollision1__f_kvs.size__I() + this.sci_HashMap$HashMapCollision1__f_kvs.size__I()) | 0))
    } else if ((merger.retainIdentical__Z() && (x4 === this))) {
      return this
    } else if (((merger === $m_sci_HashMap$().sci_HashMap$__f__defaultMerger) || (merger === $m_sci_HashMap$().sci_HashMap$__f__defaultMerger.invert__sci_HashMap$Merger()))) {
      var newkvs = ((merger === $m_sci_HashMap$().sci_HashMap$__f__defaultMerger) ? x4.sci_HashMap$HashMapCollision1__f_kvs.$plus$plus__sc_GenTraversableOnce__sci_ListMap(this.sci_HashMap$HashMapCollision1__f_kvs) : this.sci_HashMap$HashMapCollision1__f_kvs.$plus$plus__sc_GenTraversableOnce__sci_ListMap(x4.sci_HashMap$HashMapCollision1__f_kvs));
      return ((newkvs === this.sci_HashMap$HashMapCollision1__f_kvs) ? this : ((newkvs === x4.sci_HashMap$HashMapCollision1__f_kvs) ? x4 : new $c_sci_HashMap$HashMapCollision1(this.sci_HashMap$HashMapCollision1__f_hash, newkvs)))
    } else {
      var elem = null;
      elem = null;
      if ((this.sci_HashMap$HashMapCollision1__f_kvs.size__I() >= x4.sci_HashMap$HashMapCollision1__f_kvs.size__I())) {
        elem = this;
        var this$2 = x4.sci_HashMap$HashMapCollision1__f_kvs;
        var this$3 = $p_sci_ListMap__reverseList$1__sci_List(this$2);
        var this$4 = $f_sc_LinearSeqLike__iterator__sc_Iterator(this$3);
        while (this$4.hasNext__Z()) {
          var arg1 = this$4.next__O();
          var p = $as_T2(arg1);
          elem = $as_sci_HashMap(elem).updated0__O__I__I__O__T2__sci_HashMap$Merger__sci_HashMap(p.T2__f__1, this.sci_HashMap$HashMapCollision1__f_hash, level, p.T2__f__2, p, merger)
        }
      } else {
        elem = x4;
        var this$5 = this.sci_HashMap$HashMapCollision1__f_kvs;
        var this$6 = $p_sci_ListMap__reverseList$1__sci_List(this$5);
        var this$7 = $f_sc_LinearSeqLike__iterator__sc_Iterator(this$6);
        while (this$7.hasNext__Z()) {
          var arg1$1 = this$7.next__O();
          var p$3 = $as_T2(arg1$1);
          elem = $as_sci_HashMap(elem).updated0__O__I__I__O__T2__sci_HashMap$Merger__sci_HashMap(p$3.T2__f__1, this.sci_HashMap$HashMapCollision1__f_hash, level, p$3.T2__f__2, p$3, merger.invert__sci_HashMap$Merger())
        }
      };
      return $as_sci_HashMap(elem)
    }
  } else if ((that === $m_sci_HashMap$EmptyHashMap$())) {
    return this
  } else {
    throw new $c_s_MatchError(that)
  }
});
$c_sci_HashMap$HashMapCollision1.prototype.equals__O__Z = (function(that) {
  if ((that instanceof $c_sci_HashMap$HashMapCollision1)) {
    var x2 = $as_sci_HashMap$HashMapCollision1(that);
    if ((this === x2)) {
      return true
    } else if ((x2.sci_HashMap$HashMapCollision1__f_hash === this.sci_HashMap$HashMapCollision1__f_hash)) {
      var x = x2.sci_HashMap$HashMapCollision1__f_kvs;
      var x$2 = this.sci_HashMap$HashMapCollision1__f_kvs;
      return ((x === null) ? (x$2 === null) : $f_sc_GenMapLike__equals__O__Z(x, x$2))
    } else {
      return false
    }
  } else {
    return ((!(that instanceof $c_sci_HashMap)) && $f_sc_GenMapLike__equals__O__Z(this, that))
  }
});
function $as_sci_HashMap$HashMapCollision1(obj) {
  return (((obj instanceof $c_sci_HashMap$HashMapCollision1) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.HashMap$HashMapCollision1"))
}
function $isArrayOf_sci_HashMap$HashMapCollision1(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_HashMap$HashMapCollision1)))
}
function $asArrayOf_sci_HashMap$HashMapCollision1(obj, depth) {
  return (($isArrayOf_sci_HashMap$HashMapCollision1(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.HashMap$HashMapCollision1;", depth))
}
var $d_sci_HashMap$HashMapCollision1 = new $TypeData().initClass({
  sci_HashMap$HashMapCollision1: 0
}, false, "scala.collection.immutable.HashMap$HashMapCollision1", {
  sci_HashMap$HashMapCollision1: 1,
  sci_HashMap: 1,
  sci_AbstractMap: 1,
  sc_AbstractMap: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_Map: 1,
  sc_GenMap: 1,
  sc_GenMapLike: 1,
  sc_MapLike: 1,
  s_PartialFunction: 1,
  F1: 1,
  scg_Subtractable: 1,
  sci_Map: 1,
  sci_Iterable: 1,
  sci_Traversable: 1,
  s_Immutable: 1,
  sci_MapLike: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1,
  sc_CustomParallelizable: 1,
  sci_HasForeachEntry: 1
});
$c_sci_HashMap$HashMapCollision1.prototype.$classData = $d_sci_HashMap$HashMapCollision1;
function $p_sci_HashMap$HashTrieMap__mergeMaybeSubset$1__sci_HashMap$HashTrieMap__sci_HashMap$HashTrieMap__sci_HashMap$Merger__I__sci_HashMap$HashTrieMap($thiz, larger, smaller, merger, level$2) {
  var resultElems = null;
  var ai = 0;
  var bi = 0;
  var abm = larger.sci_HashMap$HashTrieMap__f_bitmap0;
  var bbm = smaller.sci_HashMap$HashTrieMap__f_bitmap0;
  var a = larger.sci_HashMap$HashTrieMap__f_elems0;
  var b = smaller.sci_HashMap$HashTrieMap__f_elems0;
  var additionalSize = 0;
  var bsb = (bbm ^ (bbm & (((-1) + bbm) | 0)));
  while ((bsb !== 0)) {
    var skippedBitsInA = (abm & (((-1) + bsb) | 0));
    ai = ((ai + $m_jl_Integer$().bitCount__I__I(skippedBitsInA)) | 0);
    abm = (abm ^ skippedBitsInA);
    var aai = a.get(ai);
    var bbi = b.get(bi);
    var result = (((aai === bbi) && merger.retainIdentical__Z()) ? aai : aai.merge0__sci_HashMap__I__sci_HashMap$Merger__sci_HashMap(bbi, ((5 + level$2) | 0), merger));
    if ((result !== aai)) {
      if ((resultElems === null)) {
        resultElems = a.clone__O()
      };
      additionalSize = ((additionalSize + ((result.size__I() - aai.size__I()) | 0)) | 0);
      resultElems.set(ai, result)
    };
    abm = (abm ^ bsb);
    bbm = (bbm ^ bsb);
    bsb = (bbm ^ (bbm & (((-1) + bbm) | 0)));
    ai = ((1 + ai) | 0);
    bi = ((1 + bi) | 0)
  };
  return ((resultElems === null) ? larger : new $c_sci_HashMap$HashTrieMap(larger.sci_HashMap$HashTrieMap__f_bitmap0, resultElems, ((larger.sci_HashMap$HashTrieMap__f_size0 + additionalSize) | 0)))
}
function $p_sci_HashMap$HashTrieMap__mergeDistinct$1__sci_HashMap$HashTrieMap__sci_HashMap($thiz, x3$1) {
  var ai = 0;
  var bi = 0;
  var offset = 0;
  var abm = $thiz.sci_HashMap$HashTrieMap__f_bitmap0;
  var bbm = x3$1.sci_HashMap$HashTrieMap__f_bitmap0;
  var a = $thiz.sci_HashMap$HashTrieMap__f_elems0;
  var b = x3$1.sci_HashMap$HashTrieMap__f_elems0;
  var allBits = (abm | bbm);
  var i = allBits;
  var resultElems = new ($d_sci_HashMap.getArrayOf().constr)($m_jl_Integer$().bitCount__I__I(i));
  var lsb = (allBits ^ (allBits & (((-1) + allBits) | 0)));
  while ((lsb !== 0)) {
    if (((lsb & abm) !== 0)) {
      resultElems.set(offset, a.get(ai));
      ai = ((1 + ai) | 0)
    } else {
      resultElems.set(offset, b.get(bi));
      bi = ((1 + bi) | 0)
    };
    offset = ((1 + offset) | 0);
    allBits = (allBits ^ lsb);
    lsb = (allBits ^ (allBits & (((-1) + allBits) | 0)))
  };
  return new $c_sci_HashMap$HashTrieMap((abm | bbm), resultElems, (($thiz.sci_HashMap$HashTrieMap__f_size0 + x3$1.sci_HashMap$HashTrieMap__f_size0) | 0))
}
function $p_sci_HashMap$HashTrieMap__mergeCommon$1__sci_HashMap$HashTrieMap__sci_HashMap$Merger__I__sci_HashMap$HashTrieMap($thiz, x3$1, merger$3, level$2) {
  var ai = 0;
  var bi = 0;
  var abm = $thiz.sci_HashMap$HashTrieMap__f_bitmap0;
  var bbm = x3$1.sci_HashMap$HashTrieMap__f_bitmap0;
  var a = $thiz.sci_HashMap$HashTrieMap__f_elems0;
  var b = x3$1.sci_HashMap$HashTrieMap__f_elems0;
  var allBits = (abm | bbm);
  var i = allBits;
  var resultElems = new ($d_sci_HashMap.getArrayOf().constr)($m_jl_Integer$().bitCount__I__I(i));
  var offset = 0;
  var rs = 0;
  var lsb = (allBits ^ (allBits & (((-1) + allBits) | 0)));
  var result = null;
  while ((lsb !== 0)) {
    if (((lsb & abm) !== 0)) {
      if (((lsb & bbm) !== 0)) {
        var aai = a.get(ai);
        var bbi = b.get(bi);
        result = (((aai === bbi) && merger$3.retainIdentical__Z()) ? aai : aai.merge0__sci_HashMap__I__sci_HashMap$Merger__sci_HashMap(bbi, ((5 + level$2) | 0), merger$3));
        ai = ((1 + ai) | 0);
        bi = ((1 + bi) | 0)
      } else {
        result = a.get(ai);
        ai = ((1 + ai) | 0)
      }
    } else {
      result = b.get(bi);
      bi = ((1 + bi) | 0)
    };
    allBits = (allBits ^ lsb);
    lsb = (allBits ^ (allBits & (((-1) + allBits) | 0)));
    resultElems.set(offset, result);
    rs = ((rs + result.size__I()) | 0);
    offset = ((1 + offset) | 0)
  };
  return new $c_sci_HashMap$HashTrieMap((abm | bbm), resultElems, rs)
}
/** @constructor */
function $c_sci_HashMap$HashTrieMap(bitmap0, elems0, size0) {
  this.sci_HashMap$HashTrieMap__f_bitmap0 = 0;
  this.sci_HashMap$HashTrieMap__f_elems0 = null;
  this.sci_HashMap$HashTrieMap__f_size0 = 0;
  this.sci_HashMap$HashTrieMap__f_bitmap0 = bitmap0;
  this.sci_HashMap$HashTrieMap__f_elems0 = elems0;
  this.sci_HashMap$HashTrieMap__f_size0 = size0
}
$c_sci_HashMap$HashTrieMap.prototype = new $h_sci_HashMap();
$c_sci_HashMap$HashTrieMap.prototype.constructor = $c_sci_HashMap$HashTrieMap;
/** @constructor */
function $h_sci_HashMap$HashTrieMap() {
  /*<skip>*/
}
$h_sci_HashMap$HashTrieMap.prototype = $c_sci_HashMap$HashTrieMap.prototype;
$c_sci_HashMap$HashTrieMap.prototype.size__I = (function() {
  return this.sci_HashMap$HashTrieMap__f_size0
});
$c_sci_HashMap$HashTrieMap.prototype.get0__O__I__I__s_Option = (function(key, hash, level) {
  var index = (31 & ((hash >>> level) | 0));
  if ((this.sci_HashMap$HashTrieMap__f_bitmap0 === (-1))) {
    return this.sci_HashMap$HashTrieMap__f_elems0.get(index).get0__O__I__I__s_Option(key, hash, ((5 + level) | 0))
  } else {
    var mask = (1 << index);
    if (((this.sci_HashMap$HashTrieMap__f_bitmap0 & mask) !== 0)) {
      var i = (this.sci_HashMap$HashTrieMap__f_bitmap0 & (((-1) + mask) | 0));
      var offset = $m_jl_Integer$().bitCount__I__I(i);
      return this.sci_HashMap$HashTrieMap__f_elems0.get(offset).get0__O__I__I__s_Option(key, hash, ((5 + level) | 0))
    } else {
      return $m_s_None$()
    }
  }
});
$c_sci_HashMap$HashTrieMap.prototype.getOrElse0__O__I__I__F0__O = (function(key, hash, level, f) {
  var index = (31 & ((hash >>> level) | 0));
  if ((this.sci_HashMap$HashTrieMap__f_bitmap0 === (-1))) {
    return this.sci_HashMap$HashTrieMap__f_elems0.get(index).getOrElse0__O__I__I__F0__O(key, hash, ((5 + level) | 0), f)
  } else {
    var mask = (1 << index);
    if (((this.sci_HashMap$HashTrieMap__f_bitmap0 & mask) !== 0)) {
      var i = (this.sci_HashMap$HashTrieMap__f_bitmap0 & (((-1) + mask) | 0));
      var offset = $m_jl_Integer$().bitCount__I__I(i);
      return this.sci_HashMap$HashTrieMap__f_elems0.get(offset).getOrElse0__O__I__I__F0__O(key, hash, ((5 + level) | 0), f)
    } else {
      return f.apply__O()
    }
  }
});
$c_sci_HashMap$HashTrieMap.prototype.updated0__O__I__I__O__T2__sci_HashMap$Merger__sci_HashMap = (function(key, hash, level, value, kv, merger) {
  var index = (31 & ((hash >>> level) | 0));
  var mask = (1 << index);
  var i = (this.sci_HashMap$HashTrieMap__f_bitmap0 & (((-1) + mask) | 0));
  var offset = $m_jl_Integer$().bitCount__I__I(i);
  if (((this.sci_HashMap$HashTrieMap__f_bitmap0 & mask) !== 0)) {
    var sub = this.sci_HashMap$HashTrieMap__f_elems0.get(offset);
    var subNew = sub.updated0__O__I__I__O__T2__sci_HashMap$Merger__sci_HashMap(key, hash, ((5 + level) | 0), value, kv, merger);
    if ((subNew === sub)) {
      return this
    } else {
      var this$1 = this.sci_HashMap$HashTrieMap__f_elems0;
      var elemsNew = this$1.clone__O();
      elemsNew.set(offset, subNew);
      return new $c_sci_HashMap$HashTrieMap(this.sci_HashMap$HashTrieMap__f_bitmap0, elemsNew, ((this.sci_HashMap$HashTrieMap__f_size0 + ((subNew.size__I() - sub.size__I()) | 0)) | 0))
    }
  } else {
    var elemsNew$2 = new ($d_sci_HashMap.getArrayOf().constr)(((1 + this.sci_HashMap$HashTrieMap__f_elems0.u.length) | 0));
    var src = this.sci_HashMap$HashTrieMap__f_elems0;
    $systemArraycopyRefs(src, 0, elemsNew$2, 0, offset);
    elemsNew$2.set(offset, new $c_sci_HashMap$HashMap1(key, hash, value, kv));
    var src$1 = this.sci_HashMap$HashTrieMap__f_elems0;
    var destPos = ((1 + offset) | 0);
    var length = ((this.sci_HashMap$HashTrieMap__f_elems0.u.length - offset) | 0);
    $systemArraycopyRefs(src$1, offset, elemsNew$2, destPos, length);
    return new $c_sci_HashMap$HashTrieMap((this.sci_HashMap$HashTrieMap__f_bitmap0 | mask), elemsNew$2, ((1 + this.sci_HashMap$HashTrieMap__f_size0) | 0))
  }
});
$c_sci_HashMap$HashTrieMap.prototype.iterator__sc_Iterator = (function() {
  return new $c_sci_HashMap$HashTrieMap$$anon$7(this)
});
$c_sci_HashMap$HashTrieMap.prototype.foreach__F1__V = (function(f) {
  var i = 0;
  while ((i < this.sci_HashMap$HashTrieMap__f_elems0.u.length)) {
    this.sci_HashMap$HashTrieMap__f_elems0.get(i).foreach__F1__V(f);
    i = ((1 + i) | 0)
  }
});
$c_sci_HashMap$HashTrieMap.prototype.foreachEntry__F2__V = (function(f) {
  var i = 0;
  while ((i < this.sci_HashMap$HashTrieMap__f_elems0.u.length)) {
    this.sci_HashMap$HashTrieMap__f_elems0.get(i).foreachEntry__F2__V(f);
    i = ((1 + i) | 0)
  }
});
$c_sci_HashMap$HashTrieMap.prototype.merge0__sci_HashMap__I__sci_HashMap$Merger__sci_HashMap = (function(that, level, merger) {
  if ((that instanceof $c_sci_HashMap$HashMap1)) {
    var x2 = $as_sci_HashMap$HashMap1(that);
    return this.updated0__O__I__I__O__T2__sci_HashMap$Merger__sci_HashMap(x2.sci_HashMap$HashMap1__f_key, x2.sci_HashMap$HashMap1__f_hash, level, x2.sci_HashMap$HashMap1__f_value, x2.ensurePair__T2(), merger)
  } else if ((that instanceof $c_sci_HashMap$HashTrieMap)) {
    var x3 = $as_sci_HashMap$HashTrieMap(that);
    var abm = this.sci_HashMap$HashTrieMap__f_bitmap0;
    var bbm = x3.sci_HashMap$HashTrieMap__f_bitmap0;
    var allBits = (abm | bbm);
    return (((this === x3) && merger.retainIdentical__Z()) ? this : (((allBits === abm) && ((allBits !== bbm) || (this.sci_HashMap$HashTrieMap__f_size0 >= x3.sci_HashMap$HashTrieMap__f_size0))) ? $p_sci_HashMap$HashTrieMap__mergeMaybeSubset$1__sci_HashMap$HashTrieMap__sci_HashMap$HashTrieMap__sci_HashMap$Merger__I__sci_HashMap$HashTrieMap(this, this, x3, merger, level) : ((allBits === bbm) ? $p_sci_HashMap$HashTrieMap__mergeMaybeSubset$1__sci_HashMap$HashTrieMap__sci_HashMap$HashTrieMap__sci_HashMap$Merger__I__sci_HashMap$HashTrieMap(this, x3, this, merger.invert__sci_HashMap$Merger(), level) : (((abm & bbm) === 0) ? $p_sci_HashMap$HashTrieMap__mergeDistinct$1__sci_HashMap$HashTrieMap__sci_HashMap(this, x3) : $p_sci_HashMap$HashTrieMap__mergeCommon$1__sci_HashMap$HashTrieMap__sci_HashMap$Merger__I__sci_HashMap$HashTrieMap(this, x3, merger, level)))))
  } else if ((that instanceof $c_sci_HashMap$HashMapCollision1)) {
    var x4 = $as_sci_HashMap$HashMapCollision1(that);
    var index = (31 & ((x4.sci_HashMap$HashMapCollision1__f_hash >>> level) | 0));
    var mask = (1 << index);
    var i = (this.sci_HashMap$HashTrieMap__f_bitmap0 & (((-1) + mask) | 0));
    var offset = $m_jl_Integer$().bitCount__I__I(i);
    if (((this.sci_HashMap$HashTrieMap__f_bitmap0 & mask) !== 0)) {
      var sub = this.sci_HashMap$HashTrieMap__f_elems0.get(offset);
      var subNew = sub.merge0__sci_HashMap__I__sci_HashMap$Merger__sci_HashMap(x4, ((5 + level) | 0), merger);
      if ((subNew === sub)) {
        return this
      } else {
        var this$1 = this.sci_HashMap$HashTrieMap__f_elems0;
        var elemsNew = this$1.clone__O();
        elemsNew.set(offset, subNew);
        return new $c_sci_HashMap$HashTrieMap(this.sci_HashMap$HashTrieMap__f_bitmap0, elemsNew, ((this.sci_HashMap$HashTrieMap__f_size0 + ((subNew.size__I() - sub.size__I()) | 0)) | 0))
      }
    } else {
      var elemsNew$2 = new ($d_sci_HashMap.getArrayOf().constr)(((1 + this.sci_HashMap$HashTrieMap__f_elems0.u.length) | 0));
      var src = this.sci_HashMap$HashTrieMap__f_elems0;
      $systemArraycopyRefs(src, 0, elemsNew$2, 0, offset);
      elemsNew$2.set(offset, x4);
      var src$1 = this.sci_HashMap$HashTrieMap__f_elems0;
      var destPos = ((1 + offset) | 0);
      var length = ((this.sci_HashMap$HashTrieMap__f_elems0.u.length - offset) | 0);
      $systemArraycopyRefs(src$1, offset, elemsNew$2, destPos, length);
      return new $c_sci_HashMap$HashTrieMap((this.sci_HashMap$HashTrieMap__f_bitmap0 | mask), elemsNew$2, ((this.sci_HashMap$HashTrieMap__f_size0 + x4.sci_HashMap$HashMapCollision1__f_kvs.size__I()) | 0))
    }
  } else {
    return ((that === $m_sci_HashMap$EmptyHashMap$()) ? this : $m_s_sys_package$().error__T__E("section supposed to be unreachable."))
  }
});
$c_sci_HashMap$HashTrieMap.prototype.equals__O__Z = (function(that) {
  if ((that instanceof $c_sci_HashMap$HashTrieMap)) {
    var x2 = $as_sci_HashMap$HashTrieMap(that);
    if ((this === x2)) {
      return true
    } else if (((this.sci_HashMap$HashTrieMap__f_bitmap0 === x2.sci_HashMap$HashTrieMap__f_bitmap0) && (this.sci_HashMap$HashTrieMap__f_size0 === x2.sci_HashMap$HashTrieMap__f_size0))) {
      var a = this.sci_HashMap$HashTrieMap__f_elems0;
      var b = x2.sci_HashMap$HashTrieMap__f_elems0;
      return $m_ju_Arrays$().equals__AO__AO__Z(a, b)
    } else {
      return false
    }
  } else {
    return ((!(that instanceof $c_sci_HashMap)) && $f_sc_GenMapLike__equals__O__Z(this, that))
  }
});
function $as_sci_HashMap$HashTrieMap(obj) {
  return (((obj instanceof $c_sci_HashMap$HashTrieMap) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.HashMap$HashTrieMap"))
}
function $isArrayOf_sci_HashMap$HashTrieMap(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_HashMap$HashTrieMap)))
}
function $asArrayOf_sci_HashMap$HashTrieMap(obj, depth) {
  return (($isArrayOf_sci_HashMap$HashTrieMap(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.HashMap$HashTrieMap;", depth))
}
var $d_sci_HashMap$HashTrieMap = new $TypeData().initClass({
  sci_HashMap$HashTrieMap: 0
}, false, "scala.collection.immutable.HashMap$HashTrieMap", {
  sci_HashMap$HashTrieMap: 1,
  sci_HashMap: 1,
  sci_AbstractMap: 1,
  sc_AbstractMap: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_Map: 1,
  sc_GenMap: 1,
  sc_GenMapLike: 1,
  sc_MapLike: 1,
  s_PartialFunction: 1,
  F1: 1,
  scg_Subtractable: 1,
  sci_Map: 1,
  sci_Iterable: 1,
  sci_Traversable: 1,
  s_Immutable: 1,
  sci_MapLike: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1,
  sc_CustomParallelizable: 1,
  sci_HasForeachEntry: 1
});
$c_sci_HashMap$HashTrieMap.prototype.$classData = $d_sci_HashMap$HashTrieMap;
/** @constructor */
function $c_sci_Nil$() {
  /*<skip>*/
}
$c_sci_Nil$.prototype = new $h_sci_List();
$c_sci_Nil$.prototype.constructor = $c_sci_Nil$;
/** @constructor */
function $h_sci_Nil$() {
  /*<skip>*/
}
$h_sci_Nil$.prototype = $c_sci_Nil$.prototype;
$c_sci_Nil$.prototype.isEmpty__Z = (function() {
  return true
});
$c_sci_Nil$.prototype.head__E = (function() {
  throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), "head of empty list")
});
$c_sci_Nil$.prototype.tail__sci_List = (function() {
  throw new $c_jl_UnsupportedOperationException("tail of empty list")
});
$c_sci_Nil$.prototype.equals__O__Z = (function(that) {
  if ($is_sc_GenSeq(that)) {
    var x2 = $as_sc_GenSeq(that);
    return x2.isEmpty__Z()
  } else {
    return false
  }
});
$c_sci_Nil$.prototype.productPrefix__T = (function() {
  return "Nil"
});
$c_sci_Nil$.prototype.productArity__I = (function() {
  return 0
});
$c_sci_Nil$.prototype.productElement__I__O = (function(x$1) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + x$1))
});
$c_sci_Nil$.prototype.productIterator__sc_Iterator = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this)
});
$c_sci_Nil$.prototype.tail__O = (function() {
  return this.tail__sci_List()
});
$c_sci_Nil$.prototype.head__O = (function() {
  this.head__E()
});
var $d_sci_Nil$ = new $TypeData().initClass({
  sci_Nil$: 0
}, false, "scala.collection.immutable.Nil$", {
  sci_Nil$: 1,
  sci_List: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_GenSeq: 1,
  sc_GenSeqLike: 1,
  sc_SeqLike: 1,
  sci_LinearSeq: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_Traversable: 1,
  s_Immutable: 1,
  sc_LinearSeq: 1,
  sc_LinearSeqLike: 1,
  s_Product: 1,
  sc_LinearSeqOptimized: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Nil$.prototype.$classData = $d_sci_Nil$;
var $n_sci_Nil$;
function $m_sci_Nil$() {
  if ((!$n_sci_Nil$)) {
    $n_sci_Nil$ = new $c_sci_Nil$()
  };
  return $n_sci_Nil$
}
/** @constructor */
function $c_scm_AbstractBuffer() {
  /*<skip>*/
}
$c_scm_AbstractBuffer.prototype = new $h_scm_AbstractSeq();
$c_scm_AbstractBuffer.prototype.constructor = $c_scm_AbstractBuffer;
/** @constructor */
function $h_scm_AbstractBuffer() {
  /*<skip>*/
}
$h_scm_AbstractBuffer.prototype = $c_scm_AbstractBuffer.prototype;
$c_scm_AbstractBuffer.prototype.$plus$plus$eq__sc_TraversableOnce__scg_Growable = (function(xs) {
  return $f_scg_Growable__$plus$plus$eq__sc_TraversableOnce__scg_Growable(this, xs)
});
function $as_scm_HashMap(obj) {
  return ((false || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.HashMap"))
}
function $isArrayOf_scm_HashMap(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_HashMap)))
}
function $asArrayOf_scm_HashMap(obj, depth) {
  return (($isArrayOf_scm_HashMap(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.HashMap;", depth))
}
function $as_scm_HashSet(obj) {
  return ((false || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.HashSet"))
}
function $isArrayOf_scm_HashSet(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_HashSet)))
}
function $asArrayOf_scm_HashSet(obj, depth) {
  return (($isArrayOf_scm_HashSet(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.HashSet;", depth))
}
function $p_scm_ListBuffer__ensureUnaliased__V($thiz) {
  if ($thiz.scm_ListBuffer__f_exported) {
    $p_scm_ListBuffer__copy__V($thiz)
  }
}
function $p_scm_ListBuffer__copy__V($thiz) {
  if ($thiz.isEmpty__Z()) {
    return (void 0)
  };
  var cursor = $thiz.scm_ListBuffer__f_scala$collection$mutable$ListBuffer$$start;
  var this$1 = $thiz.scm_ListBuffer__f_last0;
  var limit = this$1.sci_$colon$colon__f_tl;
  $thiz.clear__V();
  while ((cursor !== limit)) {
    $thiz.$plus$eq__O__scm_ListBuffer(cursor.head__O());
    cursor = $as_sci_List(cursor.tail__O())
  }
}
/** @constructor */
function $c_scm_ListBuffer() {
  this.scm_ListBuffer__f_scala$collection$mutable$ListBuffer$$start = null;
  this.scm_ListBuffer__f_last0 = null;
  this.scm_ListBuffer__f_exported = false;
  this.scm_ListBuffer__f_len = 0;
  this.scm_ListBuffer__f_scala$collection$mutable$ListBuffer$$start = $m_sci_Nil$();
  this.scm_ListBuffer__f_exported = false;
  this.scm_ListBuffer__f_len = 0
}
$c_scm_ListBuffer.prototype = new $h_scm_AbstractBuffer();
$c_scm_ListBuffer.prototype.constructor = $c_scm_ListBuffer;
/** @constructor */
function $h_scm_ListBuffer() {
  /*<skip>*/
}
$h_scm_ListBuffer.prototype = $c_scm_ListBuffer.prototype;
$c_scm_ListBuffer.prototype.lengthCompare__I__I = (function(len) {
  var this$1 = this.scm_ListBuffer__f_scala$collection$mutable$ListBuffer$$start;
  return $f_sc_LinearSeqOptimized__lengthCompare__I__I(this$1, len)
});
$c_scm_ListBuffer.prototype.sameElements__sc_GenIterable__Z = (function(that) {
  var this$1 = this.scm_ListBuffer__f_scala$collection$mutable$ListBuffer$$start;
  return $f_sc_LinearSeqOptimized__sameElements__sc_GenIterable__Z(this$1, that)
});
$c_scm_ListBuffer.prototype.foreach__F1__V = (function(f) {
  var this$1 = this.scm_ListBuffer__f_scala$collection$mutable$ListBuffer$$start;
  var these = this$1;
  while ((!these.isEmpty__Z())) {
    f.apply__O__O(these.head__O());
    these = $as_sci_List(these.tail__O())
  }
});
$c_scm_ListBuffer.prototype.foldLeft__O__F2__O = (function(z, op) {
  var this$1 = this.scm_ListBuffer__f_scala$collection$mutable$ListBuffer$$start;
  return $f_sc_LinearSeqOptimized__foldLeft__O__F2__O(this$1, z, op)
});
$c_scm_ListBuffer.prototype.$div$colon__O__F2__O = (function(z, op) {
  var this$1 = this.scm_ListBuffer__f_scala$collection$mutable$ListBuffer$$start;
  return $f_sc_LinearSeqOptimized__foldLeft__O__F2__O(this$1, z, op)
});
$c_scm_ListBuffer.prototype.head__O = (function() {
  return this.scm_ListBuffer__f_scala$collection$mutable$ListBuffer$$start.head__O()
});
$c_scm_ListBuffer.prototype.mkString__T__T__T__T = (function(start, sep, end) {
  var this$1 = this.scm_ListBuffer__f_scala$collection$mutable$ListBuffer$$start;
  return $f_sc_TraversableOnce__mkString__T__T__T__T(this$1, start, sep, end)
});
$c_scm_ListBuffer.prototype.addString__scm_StringBuilder__T__T__T__scm_StringBuilder = (function(b, start, sep, end) {
  var this$1 = this.scm_ListBuffer__f_scala$collection$mutable$ListBuffer$$start;
  return $f_sc_TraversableOnce__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this$1, b, start, sep, end)
});
$c_scm_ListBuffer.prototype.sizeHint__I__V = (function(size) {
  /*<skip>*/
});
$c_scm_ListBuffer.prototype.sizeHintBounded__I__sc_TraversableLike__V = (function(size, boundingColl) {
  $f_scm_Builder__sizeHintBounded__I__sc_TraversableLike__V(this, size, boundingColl)
});
$c_scm_ListBuffer.prototype.companion__scg_GenericCompanion = (function() {
  return $m_scm_ListBuffer$()
});
$c_scm_ListBuffer.prototype.length__I = (function() {
  return this.scm_ListBuffer__f_len
});
$c_scm_ListBuffer.prototype.size__I = (function() {
  return this.scm_ListBuffer__f_len
});
$c_scm_ListBuffer.prototype.isEmpty__Z = (function() {
  return (this.scm_ListBuffer__f_len === 0)
});
$c_scm_ListBuffer.prototype.apply__I__O = (function(n) {
  if (((n < 0) || (n >= this.scm_ListBuffer__f_len))) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n))
  } else {
    var this$2 = this.scm_ListBuffer__f_scala$collection$mutable$ListBuffer$$start;
    return $f_sc_LinearSeqOptimized__apply__I__O(this$2, n)
  }
});
$c_scm_ListBuffer.prototype.$plus$eq__O__scm_ListBuffer = (function(x) {
  $p_scm_ListBuffer__ensureUnaliased__V(this);
  var last1 = new $c_sci_$colon$colon(x, $m_sci_Nil$());
  if ((this.scm_ListBuffer__f_len === 0)) {
    this.scm_ListBuffer__f_scala$collection$mutable$ListBuffer$$start = last1
  } else {
    this.scm_ListBuffer__f_last0.sci_$colon$colon__f_tl = last1
  };
  this.scm_ListBuffer__f_last0 = last1;
  this.scm_ListBuffer__f_len = ((1 + this.scm_ListBuffer__f_len) | 0);
  return this
});
$c_scm_ListBuffer.prototype.$plus$plus$eq__sc_TraversableOnce__scm_ListBuffer = (function(xs) {
  while (true) {
    var x1 = xs;
    if ((x1 !== null)) {
      if ((x1 === this)) {
        var n = this.scm_ListBuffer__f_len;
        xs = $as_sc_TraversableOnce($f_sc_IterableLike__take__I__O(this, n));
        continue
      }
    };
    return $as_scm_ListBuffer($f_scg_Growable__$plus$plus$eq__sc_TraversableOnce__scg_Growable(this, xs))
  }
});
$c_scm_ListBuffer.prototype.clear__V = (function() {
  this.scm_ListBuffer__f_scala$collection$mutable$ListBuffer$$start = $m_sci_Nil$();
  this.scm_ListBuffer__f_last0 = null;
  this.scm_ListBuffer__f_exported = false;
  this.scm_ListBuffer__f_len = 0
});
$c_scm_ListBuffer.prototype.toList__sci_List = (function() {
  this.scm_ListBuffer__f_exported = (!this.isEmpty__Z());
  return this.scm_ListBuffer__f_scala$collection$mutable$ListBuffer$$start
});
$c_scm_ListBuffer.prototype.toStream__sci_Stream = (function() {
  return this.toList__sci_List().toStream__sci_Stream()
});
$c_scm_ListBuffer.prototype.prependToList__sci_List__sci_List = (function(xs) {
  if (this.isEmpty__Z()) {
    return xs
  } else {
    $p_scm_ListBuffer__ensureUnaliased__V(this);
    this.scm_ListBuffer__f_last0.sci_$colon$colon__f_tl = xs;
    return this.toList__sci_List()
  }
});
$c_scm_ListBuffer.prototype.iterator__sc_Iterator = (function() {
  return new $c_scm_ListBuffer$$anon$1(this)
});
$c_scm_ListBuffer.prototype.equals__O__Z = (function(that) {
  if ((that instanceof $c_scm_ListBuffer)) {
    var x2 = $as_scm_ListBuffer(that);
    return this.scm_ListBuffer__f_scala$collection$mutable$ListBuffer$$start.equals__O__Z(x2.scm_ListBuffer__f_scala$collection$mutable$ListBuffer$$start)
  } else {
    return $f_sc_GenSeqLike__equals__O__Z(this, that)
  }
});
$c_scm_ListBuffer.prototype.stringPrefix__T = (function() {
  return "ListBuffer"
});
$c_scm_ListBuffer.prototype.thisCollection__sc_Traversable = (function() {
  return this
});
$c_scm_ListBuffer.prototype.seq__sc_Seq = (function() {
  return this
});
$c_scm_ListBuffer.prototype.result__O = (function() {
  return this.toList__sci_List()
});
$c_scm_ListBuffer.prototype.$plus$plus$eq__sc_TraversableOnce__scg_Growable = (function(xs) {
  return this.$plus$plus$eq__sc_TraversableOnce__scm_ListBuffer(xs)
});
$c_scm_ListBuffer.prototype.$plus$eq__O__scg_Growable = (function(elem) {
  return this.$plus$eq__O__scm_ListBuffer(elem)
});
$c_scm_ListBuffer.prototype.$plus$eq__O__scm_Builder = (function(elem) {
  return this.$plus$eq__O__scm_ListBuffer(elem)
});
$c_scm_ListBuffer.prototype.apply__O__O = (function(v1) {
  return this.apply__I__O($uI(v1))
});
function $as_scm_ListBuffer(obj) {
  return (((obj instanceof $c_scm_ListBuffer) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.ListBuffer"))
}
function $isArrayOf_scm_ListBuffer(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_ListBuffer)))
}
function $asArrayOf_scm_ListBuffer(obj, depth) {
  return (($isArrayOf_scm_ListBuffer(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.ListBuffer;", depth))
}
var $d_scm_ListBuffer = new $TypeData().initClass({
  scm_ListBuffer: 0
}, false, "scala.collection.mutable.ListBuffer", {
  scm_ListBuffer: 1,
  scm_AbstractBuffer: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_GenSeq: 1,
  sc_GenSeqLike: 1,
  sc_SeqLike: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_Traversable: 1,
  s_Mutable: 1,
  scm_SeqLike: 1,
  scm_Cloneable: 1,
  s_Cloneable: 1,
  jl_Cloneable: 1,
  scm_Buffer: 1,
  scm_BufferLike: 1,
  scg_Growable: 1,
  scg_Clearable: 1,
  scg_Shrinkable: 1,
  sc_script_Scriptable: 1,
  scg_Subtractable: 1,
  scm_ReusableBuilder: 1,
  scm_Builder: 1,
  scg_SeqForwarder: 1,
  scg_IterableForwarder: 1,
  scg_TraversableForwarder: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_scm_ListBuffer.prototype.$classData = $d_scm_ListBuffer;
function $ct_scm_StringBuilder__jl_StringBuilder__($thiz, underlying) {
  $thiz.scm_StringBuilder__f_underlying = underlying;
  return $thiz
}
function $ct_scm_StringBuilder__I__T__($thiz, initCapacity, initValue) {
  var this$1 = $ct_jl_StringBuilder__I__(new $c_jl_StringBuilder(), ((initValue.length + initCapacity) | 0));
  this$1.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$1.jl_StringBuilder__f_java$lang$StringBuilder$$content) + initValue);
  $ct_scm_StringBuilder__jl_StringBuilder__($thiz, this$1);
  return $thiz
}
function $ct_scm_StringBuilder__($thiz) {
  $ct_scm_StringBuilder__I__T__($thiz, 16, "");
  return $thiz
}
/** @constructor */
function $c_scm_StringBuilder() {
  this.scm_StringBuilder__f_underlying = null
}
$c_scm_StringBuilder.prototype = new $h_scm_AbstractSeq();
$c_scm_StringBuilder.prototype.constructor = $c_scm_StringBuilder;
/** @constructor */
function $h_scm_StringBuilder() {
  /*<skip>*/
}
$h_scm_StringBuilder.prototype = $c_scm_StringBuilder.prototype;
$c_scm_StringBuilder.prototype.sizeHint__I__V = (function(size) {
  /*<skip>*/
});
$c_scm_StringBuilder.prototype.sizeHintBounded__I__sc_TraversableLike__V = (function(size, boundingColl) {
  $f_scm_Builder__sizeHintBounded__I__sc_TraversableLike__V(this, size, boundingColl)
});
$c_scm_StringBuilder.prototype.$plus$plus$eq__sc_TraversableOnce__scg_Growable = (function(xs) {
  return $f_scg_Growable__$plus$plus$eq__sc_TraversableOnce__scg_Growable(this, xs)
});
$c_scm_StringBuilder.prototype.slice__I__I__O = (function(from, until) {
  return $f_sci_StringLike__slice__I__I__O(this, from, until)
});
$c_scm_StringBuilder.prototype.foreach__F1__V = (function(f) {
  $f_sc_IndexedSeqOptimized__foreach__F1__V(this, f)
});
$c_scm_StringBuilder.prototype.foldLeft__O__F2__O = (function(z, op) {
  return $p_sc_IndexedSeqOptimized__foldl__I__I__O__F2__O(this, 0, this.scm_StringBuilder__f_underlying.length__I(), z, op)
});
$c_scm_StringBuilder.prototype.head__O = (function() {
  return $f_sc_IndexedSeqOptimized__head__O(this)
});
$c_scm_StringBuilder.prototype.tail__O = (function() {
  return $f_sc_IndexedSeqOptimized__tail__O(this)
});
$c_scm_StringBuilder.prototype.init__O = (function() {
  return $f_sc_IndexedSeqOptimized__init__O(this)
});
$c_scm_StringBuilder.prototype.drop__I__O = (function(n) {
  var until = this.scm_StringBuilder__f_underlying.length__I();
  return $f_sci_StringLike__slice__I__I__O(this, n, until)
});
$c_scm_StringBuilder.prototype.takeRight__I__O = (function(n) {
  return $f_sc_IndexedSeqOptimized__takeRight__I__O(this, n)
});
$c_scm_StringBuilder.prototype.sameElements__sc_GenIterable__Z = (function(that) {
  return $f_sc_IndexedSeqOptimized__sameElements__sc_GenIterable__Z(this, that)
});
$c_scm_StringBuilder.prototype.copyToArray__O__I__I__V = (function(xs, start, len) {
  $f_sc_IndexedSeqOptimized__copyToArray__O__I__I__V(this, xs, start, len)
});
$c_scm_StringBuilder.prototype.lengthCompare__I__I = (function(len) {
  return $f_sc_IndexedSeqOptimized__lengthCompare__I__I(this, len)
});
$c_scm_StringBuilder.prototype.toList__sci_List = (function() {
  return $f_sc_IndexedSeqOptimized__toList__sci_List(this)
});
$c_scm_StringBuilder.prototype.companion__scg_GenericCompanion = (function() {
  return $m_scm_IndexedSeq$()
});
$c_scm_StringBuilder.prototype.hashCode__I = (function() {
  return $m_s_util_hashing_MurmurHash3$().seqHash__sc_Seq__I(this)
});
$c_scm_StringBuilder.prototype.iterator__sc_Iterator = (function() {
  return $f_sc_IndexedSeqLike__iterator__sc_Iterator(this)
});
$c_scm_StringBuilder.prototype.sizeHintIfCheap__I = (function() {
  return this.scm_StringBuilder__f_underlying.length__I()
});
$c_scm_StringBuilder.prototype.length__I = (function() {
  return this.scm_StringBuilder__f_underlying.length__I()
});
$c_scm_StringBuilder.prototype.$plus$eq__C__scm_StringBuilder = (function(x) {
  this.append__C__scm_StringBuilder(x);
  return this
});
$c_scm_StringBuilder.prototype.append__O__scm_StringBuilder = (function(x) {
  var this$2 = this.scm_StringBuilder__f_underlying;
  var str = ("" + x);
  this$2.jl_StringBuilder__f_java$lang$StringBuilder$$content = (this$2.jl_StringBuilder__f_java$lang$StringBuilder$$content + str);
  return this
});
$c_scm_StringBuilder.prototype.append__T__scm_StringBuilder = (function(s) {
  var this$1 = this.scm_StringBuilder__f_underlying;
  this$1.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$1.jl_StringBuilder__f_java$lang$StringBuilder$$content) + s);
  return this
});
$c_scm_StringBuilder.prototype.append__C__scm_StringBuilder = (function(x) {
  var this$1 = this.scm_StringBuilder__f_underlying;
  var str = $as_T(String.fromCharCode(x));
  this$1.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$1.jl_StringBuilder__f_java$lang$StringBuilder$$content) + str);
  return this
});
$c_scm_StringBuilder.prototype.reverse__scm_StringBuilder = (function() {
  return $ct_scm_StringBuilder__jl_StringBuilder__(new $c_scm_StringBuilder(), $ct_jl_StringBuilder__jl_CharSequence__(new $c_jl_StringBuilder(), this.scm_StringBuilder__f_underlying).reverse__jl_StringBuilder())
});
$c_scm_StringBuilder.prototype.toString__T = (function() {
  return this.scm_StringBuilder__f_underlying.jl_StringBuilder__f_java$lang$StringBuilder$$content
});
$c_scm_StringBuilder.prototype.isEmpty__Z = (function() {
  return (this.scm_StringBuilder__f_underlying.length__I() === 0)
});
$c_scm_StringBuilder.prototype.seq__sc_TraversableOnce = (function() {
  return this
});
$c_scm_StringBuilder.prototype.seq__sc_Seq = (function() {
  return this
});
$c_scm_StringBuilder.prototype.seq__scm_Seq = (function() {
  return this
});
$c_scm_StringBuilder.prototype.result__O = (function() {
  return this.scm_StringBuilder__f_underlying.jl_StringBuilder__f_java$lang$StringBuilder$$content
});
$c_scm_StringBuilder.prototype.reverse__O = (function() {
  return this.reverse__scm_StringBuilder()
});
$c_scm_StringBuilder.prototype.$plus$eq__O__scg_Growable = (function(elem) {
  return this.$plus$eq__C__scm_StringBuilder($uC(elem))
});
$c_scm_StringBuilder.prototype.$plus$eq__O__scm_Builder = (function(elem) {
  return this.$plus$eq__C__scm_StringBuilder($uC(elem))
});
$c_scm_StringBuilder.prototype.apply__O__O = (function(v1) {
  var index = $uI(v1);
  return $bC(this.scm_StringBuilder__f_underlying.charAt__I__C(index))
});
$c_scm_StringBuilder.prototype.apply__I__O = (function(idx) {
  return $bC(this.scm_StringBuilder__f_underlying.charAt__I__C(idx))
});
$c_scm_StringBuilder.prototype.newBuilder__scm_Builder = (function() {
  return new $c_scm_GrowingBuilder($ct_scm_StringBuilder__(new $c_scm_StringBuilder()))
});
$c_scm_StringBuilder.prototype.thisCollection__sc_Traversable = (function() {
  return this
});
$c_scm_StringBuilder.prototype.thisCollection__sc_Seq = (function() {
  return this
});
var $d_scm_StringBuilder = new $TypeData().initClass({
  scm_StringBuilder: 0
}, false, "scala.collection.mutable.StringBuilder", {
  scm_StringBuilder: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_GenSeq: 1,
  sc_GenSeqLike: 1,
  sc_SeqLike: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_Traversable: 1,
  s_Mutable: 1,
  scm_SeqLike: 1,
  scm_Cloneable: 1,
  s_Cloneable: 1,
  jl_Cloneable: 1,
  jl_CharSequence: 1,
  scm_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqLike: 1,
  scm_IndexedSeqLike: 1,
  sci_StringLike: 1,
  sc_IndexedSeqOptimized: 1,
  s_math_Ordered: 1,
  jl_Comparable: 1,
  scm_ReusableBuilder: 1,
  scm_Builder: 1,
  scg_Growable: 1,
  scg_Clearable: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_scm_StringBuilder.prototype.$classData = $d_scm_StringBuilder;
function $ct_sjs_js_WrappedArray__sjs_js_Array__($thiz, array) {
  $thiz.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array = array;
  return $thiz
}
function $ct_sjs_js_WrappedArray__($thiz) {
  $ct_sjs_js_WrappedArray__sjs_js_Array__($thiz, []);
  return $thiz
}
/** @constructor */
function $c_sjs_js_WrappedArray() {
  this.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array = null
}
$c_sjs_js_WrappedArray.prototype = new $h_scm_AbstractBuffer();
$c_sjs_js_WrappedArray.prototype.constructor = $c_sjs_js_WrappedArray;
/** @constructor */
function $h_sjs_js_WrappedArray() {
  /*<skip>*/
}
$h_sjs_js_WrappedArray.prototype = $c_sjs_js_WrappedArray.prototype;
$c_sjs_js_WrappedArray.prototype.sizeHint__I__V = (function(size) {
  /*<skip>*/
});
$c_sjs_js_WrappedArray.prototype.sizeHintBounded__I__sc_TraversableLike__V = (function(size, boundingColl) {
  $f_scm_Builder__sizeHintBounded__I__sc_TraversableLike__V(this, size, boundingColl)
});
$c_sjs_js_WrappedArray.prototype.isEmpty__Z = (function() {
  return $f_sc_IndexedSeqOptimized__isEmpty__Z(this)
});
$c_sjs_js_WrappedArray.prototype.foreach__F1__V = (function(f) {
  $f_sc_IndexedSeqOptimized__foreach__F1__V(this, f)
});
$c_sjs_js_WrappedArray.prototype.foldLeft__O__F2__O = (function(z, op) {
  return $p_sc_IndexedSeqOptimized__foldl__I__I__O__F2__O(this, 0, $uI(this.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array.length), z, op)
});
$c_sjs_js_WrappedArray.prototype.slice__I__I__O = (function(from, until) {
  return $f_sc_IndexedSeqOptimized__slice__I__I__O(this, from, until)
});
$c_sjs_js_WrappedArray.prototype.head__O = (function() {
  return $f_sc_IndexedSeqOptimized__head__O(this)
});
$c_sjs_js_WrappedArray.prototype.tail__O = (function() {
  return $f_sc_IndexedSeqOptimized__tail__O(this)
});
$c_sjs_js_WrappedArray.prototype.init__O = (function() {
  return $f_sc_IndexedSeqOptimized__init__O(this)
});
$c_sjs_js_WrappedArray.prototype.drop__I__O = (function(n) {
  var until = $uI(this.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array.length);
  return $f_sc_IndexedSeqOptimized__slice__I__I__O(this, n, until)
});
$c_sjs_js_WrappedArray.prototype.takeRight__I__O = (function(n) {
  return $f_sc_IndexedSeqOptimized__takeRight__I__O(this, n)
});
$c_sjs_js_WrappedArray.prototype.sameElements__sc_GenIterable__Z = (function(that) {
  return $f_sc_IndexedSeqOptimized__sameElements__sc_GenIterable__Z(this, that)
});
$c_sjs_js_WrappedArray.prototype.copyToArray__O__I__I__V = (function(xs, start, len) {
  $f_sc_IndexedSeqOptimized__copyToArray__O__I__I__V(this, xs, start, len)
});
$c_sjs_js_WrappedArray.prototype.lengthCompare__I__I = (function(len) {
  return $f_sc_IndexedSeqOptimized__lengthCompare__I__I(this, len)
});
$c_sjs_js_WrappedArray.prototype.reverse__O = (function() {
  return $f_sc_IndexedSeqOptimized__reverse__O(this)
});
$c_sjs_js_WrappedArray.prototype.toList__sci_List = (function() {
  return $f_sc_IndexedSeqOptimized__toList__sci_List(this)
});
$c_sjs_js_WrappedArray.prototype.hashCode__I = (function() {
  return $m_s_util_hashing_MurmurHash3$().seqHash__sc_Seq__I(this)
});
$c_sjs_js_WrappedArray.prototype.iterator__sc_Iterator = (function() {
  return $f_sc_IndexedSeqLike__iterator__sc_Iterator(this)
});
$c_sjs_js_WrappedArray.prototype.sizeHintIfCheap__I = (function() {
  return $uI(this.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array.length)
});
$c_sjs_js_WrappedArray.prototype.companion__scg_GenericCompanion = (function() {
  return $m_sjs_js_WrappedArray$()
});
$c_sjs_js_WrappedArray.prototype.apply__I__O = (function(index) {
  return this.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array[index]
});
$c_sjs_js_WrappedArray.prototype.length__I = (function() {
  return $uI(this.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array.length)
});
$c_sjs_js_WrappedArray.prototype.stringPrefix__T = (function() {
  return "WrappedArray"
});
$c_sjs_js_WrappedArray.prototype.thisCollection__sc_Traversable = (function() {
  return this
});
$c_sjs_js_WrappedArray.prototype.thisCollection__sc_Seq = (function() {
  return this
});
$c_sjs_js_WrappedArray.prototype.seq__sc_TraversableOnce = (function() {
  return this
});
$c_sjs_js_WrappedArray.prototype.seq__sc_Seq = (function() {
  return this
});
$c_sjs_js_WrappedArray.prototype.seq__scm_Seq = (function() {
  return this
});
$c_sjs_js_WrappedArray.prototype.result__O = (function() {
  return this
});
$c_sjs_js_WrappedArray.prototype.$plus$eq__O__scg_Growable = (function(elem) {
  this.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array.push(elem);
  return this
});
$c_sjs_js_WrappedArray.prototype.$plus$eq__O__scm_Builder = (function(elem) {
  this.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array.push(elem);
  return this
});
$c_sjs_js_WrappedArray.prototype.apply__O__O = (function(v1) {
  var index = $uI(v1);
  return this.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array[index]
});
function $as_sjs_js_WrappedArray(obj) {
  return (((obj instanceof $c_sjs_js_WrappedArray) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.scalajs.js.WrappedArray"))
}
function $isArrayOf_sjs_js_WrappedArray(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sjs_js_WrappedArray)))
}
function $asArrayOf_sjs_js_WrappedArray(obj, depth) {
  return (($isArrayOf_sjs_js_WrappedArray(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.scalajs.js.WrappedArray;", depth))
}
var $d_sjs_js_WrappedArray = new $TypeData().initClass({
  sjs_js_WrappedArray: 0
}, false, "scala.scalajs.js.WrappedArray", {
  sjs_js_WrappedArray: 1,
  scm_AbstractBuffer: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_GenSeq: 1,
  sc_GenSeqLike: 1,
  sc_SeqLike: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_Traversable: 1,
  s_Mutable: 1,
  scm_SeqLike: 1,
  scm_Cloneable: 1,
  s_Cloneable: 1,
  jl_Cloneable: 1,
  scm_Buffer: 1,
  scm_BufferLike: 1,
  scg_Growable: 1,
  scg_Clearable: 1,
  scg_Shrinkable: 1,
  sc_script_Scriptable: 1,
  scg_Subtractable: 1,
  scm_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqLike: 1,
  scm_IndexedSeqLike: 1,
  scm_ArrayLike: 1,
  scm_IndexedSeqOptimized: 1,
  sc_IndexedSeqOptimized: 1,
  scm_Builder: 1
});
$c_sjs_js_WrappedArray.prototype.$classData = $d_sjs_js_WrappedArray;
function $ct_scm_ArrayBuffer__I__($thiz, initialSize) {
  $thiz.scm_ArrayBuffer__f_initialSize = initialSize;
  $f_scm_ResizableArray__$init$__V($thiz);
  return $thiz
}
function $ct_scm_ArrayBuffer__($thiz) {
  $ct_scm_ArrayBuffer__I__($thiz, 16);
  return $thiz
}
/** @constructor */
function $c_scm_ArrayBuffer() {
  this.scm_ArrayBuffer__f_initialSize = 0;
  this.scm_ArrayBuffer__f_array = null;
  this.scm_ArrayBuffer__f_size0 = 0
}
$c_scm_ArrayBuffer.prototype = new $h_scm_AbstractBuffer();
$c_scm_ArrayBuffer.prototype.constructor = $c_scm_ArrayBuffer;
/** @constructor */
function $h_scm_ArrayBuffer() {
  /*<skip>*/
}
$h_scm_ArrayBuffer.prototype = $c_scm_ArrayBuffer.prototype;
$c_scm_ArrayBuffer.prototype.length__I = (function() {
  return this.scm_ArrayBuffer__f_size0
});
$c_scm_ArrayBuffer.prototype.apply__I__O = (function(idx) {
  return $f_scm_ResizableArray__apply__I__O(this, idx)
});
$c_scm_ArrayBuffer.prototype.foreach__F1__V = (function(f) {
  $f_scm_ResizableArray__foreach__F1__V(this, f)
});
$c_scm_ArrayBuffer.prototype.copyToArray__O__I__I__V = (function(xs, start, len) {
  $f_scm_ResizableArray__copyToArray__O__I__I__V(this, xs, start, len)
});
$c_scm_ArrayBuffer.prototype.sizeHintBounded__I__sc_TraversableLike__V = (function(size, boundingColl) {
  $f_scm_Builder__sizeHintBounded__I__sc_TraversableLike__V(this, size, boundingColl)
});
$c_scm_ArrayBuffer.prototype.isEmpty__Z = (function() {
  return $f_sc_IndexedSeqOptimized__isEmpty__Z(this)
});
$c_scm_ArrayBuffer.prototype.foldLeft__O__F2__O = (function(z, op) {
  return $p_sc_IndexedSeqOptimized__foldl__I__I__O__F2__O(this, 0, this.scm_ArrayBuffer__f_size0, z, op)
});
$c_scm_ArrayBuffer.prototype.slice__I__I__O = (function(from, until) {
  return $f_sc_IndexedSeqOptimized__slice__I__I__O(this, from, until)
});
$c_scm_ArrayBuffer.prototype.head__O = (function() {
  return $f_sc_IndexedSeqOptimized__head__O(this)
});
$c_scm_ArrayBuffer.prototype.tail__O = (function() {
  return $f_sc_IndexedSeqOptimized__tail__O(this)
});
$c_scm_ArrayBuffer.prototype.init__O = (function() {
  return $f_sc_IndexedSeqOptimized__init__O(this)
});
$c_scm_ArrayBuffer.prototype.drop__I__O = (function(n) {
  var until = this.scm_ArrayBuffer__f_size0;
  return $f_sc_IndexedSeqOptimized__slice__I__I__O(this, n, until)
});
$c_scm_ArrayBuffer.prototype.takeRight__I__O = (function(n) {
  return $f_sc_IndexedSeqOptimized__takeRight__I__O(this, n)
});
$c_scm_ArrayBuffer.prototype.sameElements__sc_GenIterable__Z = (function(that) {
  return $f_sc_IndexedSeqOptimized__sameElements__sc_GenIterable__Z(this, that)
});
$c_scm_ArrayBuffer.prototype.lengthCompare__I__I = (function(len) {
  return $f_sc_IndexedSeqOptimized__lengthCompare__I__I(this, len)
});
$c_scm_ArrayBuffer.prototype.reverse__O = (function() {
  return $f_sc_IndexedSeqOptimized__reverse__O(this)
});
$c_scm_ArrayBuffer.prototype.toList__sci_List = (function() {
  return $f_sc_IndexedSeqOptimized__toList__sci_List(this)
});
$c_scm_ArrayBuffer.prototype.hashCode__I = (function() {
  return $m_s_util_hashing_MurmurHash3$().seqHash__sc_Seq__I(this)
});
$c_scm_ArrayBuffer.prototype.iterator__sc_Iterator = (function() {
  return $f_sc_IndexedSeqLike__iterator__sc_Iterator(this)
});
$c_scm_ArrayBuffer.prototype.sizeHintIfCheap__I = (function() {
  return this.scm_ArrayBuffer__f_size0
});
$c_scm_ArrayBuffer.prototype.companion__scg_GenericCompanion = (function() {
  return $m_scm_ArrayBuffer$()
});
$c_scm_ArrayBuffer.prototype.sizeHint__I__V = (function(len) {
  if (((len > this.scm_ArrayBuffer__f_size0) && (len >= 1))) {
    var newarray = new $ac_O(len);
    var src = this.scm_ArrayBuffer__f_array;
    var length = this.scm_ArrayBuffer__f_size0;
    $systemArraycopyRefs(src, 0, newarray, 0, length);
    this.scm_ArrayBuffer__f_array = newarray
  }
});
$c_scm_ArrayBuffer.prototype.$plus$eq__O__scm_ArrayBuffer = (function(elem) {
  var n = ((1 + this.scm_ArrayBuffer__f_size0) | 0);
  $f_scm_ResizableArray__ensureSize__I__V(this, n);
  this.scm_ArrayBuffer__f_array.set(this.scm_ArrayBuffer__f_size0, elem);
  this.scm_ArrayBuffer__f_size0 = ((1 + this.scm_ArrayBuffer__f_size0) | 0);
  return this
});
$c_scm_ArrayBuffer.prototype.$plus$plus$eq__sc_TraversableOnce__scm_ArrayBuffer = (function(xs) {
  if ($is_sc_IndexedSeqLike(xs)) {
    var x2 = $as_sc_IndexedSeqLike(xs);
    var n = x2.length__I();
    var n$1 = ((this.scm_ArrayBuffer__f_size0 + n) | 0);
    $f_scm_ResizableArray__ensureSize__I__V(this, n$1);
    x2.copyToArray__O__I__I__V(this.scm_ArrayBuffer__f_array, this.scm_ArrayBuffer__f_size0, n);
    this.scm_ArrayBuffer__f_size0 = ((this.scm_ArrayBuffer__f_size0 + n) | 0);
    return this
  } else {
    return $as_scm_ArrayBuffer($f_scg_Growable__$plus$plus$eq__sc_TraversableOnce__scg_Growable(this, xs))
  }
});
$c_scm_ArrayBuffer.prototype.remove__I__I__V = (function(n, count) {
  if ((count < 0)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), (("removing negative number of elements: " + "") + count))
  } else if ((count === 0)) {
    return (void 0)
  };
  if (((n < 0) || (n > ((this.scm_ArrayBuffer__f_size0 - count) | 0)))) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ((((("at " + "") + n) + " deleting ") + "") + count))
  };
  var m = ((n + count) | 0);
  var len = ((this.scm_ArrayBuffer__f_size0 - ((n + count) | 0)) | 0);
  var src = this.scm_ArrayBuffer__f_array;
  var dest = this.scm_ArrayBuffer__f_array;
  $systemArraycopyRefs(src, m, dest, n, len);
  var sz = ((this.scm_ArrayBuffer__f_size0 - count) | 0);
  $f_scm_ResizableArray__reduceToSize__I__V(this, sz)
});
$c_scm_ArrayBuffer.prototype.stringPrefix__T = (function() {
  return "ArrayBuffer"
});
$c_scm_ArrayBuffer.prototype.thisCollection__sc_Traversable = (function() {
  return this
});
$c_scm_ArrayBuffer.prototype.thisCollection__sc_Seq = (function() {
  return this
});
$c_scm_ArrayBuffer.prototype.seq__sc_TraversableOnce = (function() {
  return this
});
$c_scm_ArrayBuffer.prototype.seq__sc_Seq = (function() {
  return this
});
$c_scm_ArrayBuffer.prototype.seq__scm_Seq = (function() {
  return this
});
$c_scm_ArrayBuffer.prototype.apply__O__O = (function(v1) {
  var idx = $uI(v1);
  return $f_scm_ResizableArray__apply__I__O(this, idx)
});
$c_scm_ArrayBuffer.prototype.result__O = (function() {
  return this
});
$c_scm_ArrayBuffer.prototype.$plus$plus$eq__sc_TraversableOnce__scg_Growable = (function(xs) {
  return this.$plus$plus$eq__sc_TraversableOnce__scm_ArrayBuffer(xs)
});
$c_scm_ArrayBuffer.prototype.$plus$eq__O__scg_Growable = (function(elem) {
  return this.$plus$eq__O__scm_ArrayBuffer(elem)
});
$c_scm_ArrayBuffer.prototype.$plus$eq__O__scm_Builder = (function(elem) {
  return this.$plus$eq__O__scm_ArrayBuffer(elem)
});
function $as_scm_ArrayBuffer(obj) {
  return (((obj instanceof $c_scm_ArrayBuffer) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.ArrayBuffer"))
}
function $isArrayOf_scm_ArrayBuffer(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_ArrayBuffer)))
}
function $asArrayOf_scm_ArrayBuffer(obj, depth) {
  return (($isArrayOf_scm_ArrayBuffer(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.ArrayBuffer;", depth))
}
var $d_scm_ArrayBuffer = new $TypeData().initClass({
  scm_ArrayBuffer: 0
}, false, "scala.collection.mutable.ArrayBuffer", {
  scm_ArrayBuffer: 1,
  scm_AbstractBuffer: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_AbstractTraversable: 1,
  O: 1,
  sc_Traversable: 1,
  sc_TraversableLike: 1,
  scg_HasNewBuilder: 1,
  scg_FilterMonadic: 1,
  sc_TraversableOnce: 1,
  sc_GenTraversableOnce: 1,
  sc_GenTraversableLike: 1,
  sc_Parallelizable: 1,
  sc_GenTraversable: 1,
  scg_GenericTraversableTemplate: 1,
  sc_Iterable: 1,
  sc_GenIterable: 1,
  sc_GenIterableLike: 1,
  sc_IterableLike: 1,
  s_Equals: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_GenSeq: 1,
  sc_GenSeqLike: 1,
  sc_SeqLike: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_Traversable: 1,
  s_Mutable: 1,
  scm_SeqLike: 1,
  scm_Cloneable: 1,
  s_Cloneable: 1,
  jl_Cloneable: 1,
  scm_Buffer: 1,
  scm_BufferLike: 1,
  scg_Growable: 1,
  scg_Clearable: 1,
  scg_Shrinkable: 1,
  sc_script_Scriptable: 1,
  scg_Subtractable: 1,
  scm_IndexedSeqOptimized: 1,
  scm_IndexedSeqLike: 1,
  sc_IndexedSeqLike: 1,
  sc_IndexedSeqOptimized: 1,
  scm_Builder: 1,
  scm_ResizableArray: 1,
  scm_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_CustomParallelizable: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
$c_scm_ArrayBuffer.prototype.$classData = $d_scm_ArrayBuffer;
$L0 = new $c_RTLong(0, 0);
$d_J.zero = $L0;
let $e_DetApp = $m_Lcfx70_cfpl_draft_DetApp$();
export { $e_DetApp as DetApp };
//# sourceMappingURL=main.js.map
