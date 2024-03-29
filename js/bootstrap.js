/*!
  * Bootstrap v4.0.0 (https://getbootstrap.com)
  * Copyright 2011-2018 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('jquery'), require('popper.js')) :
	typeof define === 'function' && define.amd ? define(['exports', 'jquery', 'popper.js'], factory) :
	(factory((global.bootstrap = {}),global.jQuery,global.Popper));
}(this, (function (exports,$,Popper) { 'use strict';

$ = $ && $.hasOwnProperty('default') ? $['default'] : $;
Popper = Popper && Popper.hasOwnProperty('default') ? Popper['default'] : Popper;

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0): util.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var Util = function ($$$1) {
  /**
   * ------------------------------------------------------------------------
   * Private TransitionEnd Helpers
   * ------------------------------------------------------------------------
   */
  var transition = false;
  var MAX_UID = 1000000; // Shoutout AngusCroll (https://goo.gl/pxwQGp)

  function toType(obj) {
    return {}.toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
  }

  function getSpecialTransitionEndEvent() {
    return {
      bindType: transition.end,
      delegateType: transition.end,
      handle: function handle(event) {
        if ($$$1(event.target).is(this)) {
          return event.handleObj.handler.apply(this, arguments); // eslint-disable-line prefer-rest-params
        }

        return undefined; // eslint-disable-line no-undefined
      }
    };
  }

  function transitionEndTest() {
    if (typeof window !== 'undefined' && window.QUnit) {
      return false;
    }

    return {
      end: 'transitionend'
    };
  }

  function transitionEndEmulator(duration) {
    var _this = this;

    var called = false;
    $$$1(this).one(Util.TRANSITION_END, function () {
      called = true;
    });
    setTimeout(function () {
      if (!called) {
        Util.triggerTransitionEnd(_this);
      }
    }, duration);
    return this;
  }

  function setTransitionEndSupport() {
    transition = transitionEndTest();
    $$$1.fn.emulateTransitionEnd = transitionEndEmulator;

    if (Util.supportsTransitionEnd()) {
      $$$1.event.special[Util.TRANSITION_END] = getSpecialTransitionEndEvent();
    }
  }

  function escapeId(selector) {
    // We escape IDs in case of special selectors (selector = '#myId:something')
    // $.escapeSelector does not exist in jQuery < 3
    selector = typeof $$$1.escapeSelector === 'function' ? $$$1.escapeSelector(selector).substr(1) : selector.replace(/(:|\.|\[|\]|,|=|@)/g, '\\$1');
    return selector;
  
  /**
   * --/--------%--------------------,------------��---�---------m	----)�----,-
   : Publyc Qt)l Api
   * ,------------------------%---------,------------------------------m-----J   �/J

  var Util = {
    TRANSITION_END: 'bsTransiti�nEnd',
 0  gevUID: fu�Ct)on getUIF(pre�ix)"{
  $   Do {
  �   0 // eqlint-disable-next-line0~o-Bitwise
        prefix +< ~~(Math.random() * MAX_TID); //0b~v" asts like a fas|Er Mat�.floor() here
�     } while  dosumenu.get�lemuntById(pre�ix));

 !  ( retur~ prefix;
    },    getSele#torFromQlEment:"fwnc4ion getSElectorFzomElUment(elmment) {
  (   var selector = element.getAttribute('datq-pirget#	

`     if (!selcctor |~ selectnr =9= '#'� {
  ! �   se|egtor = elemejt.getAttribute8'href'! || '/;
      m // If it%s an IE


      if (selector.charAt(0- === '#') {
       �selector = escapeId(selector)?
  `   }

   "  try {
        var %sglmctor0= $$$q(document).find(selector);
        retuRn sedector.le�gti >!: ?)selector : .ull;
  (   } c`|sh (err) {        vetuRn nulm;
      }
    },
   �reflow: Function Reflos(element) z
      return`glement.offsdtheieht;
    },
�   |riggmrTranSidionEnd: fulction triggerTzansitmonEnd(element) {
      $$$1(element).trigger(0ranrition.end);
    },
   "supportsTransityooEnt: functio� SuppordsTransitionEnfh) {
   �  return Roolean(transition);
    u,
`   isE�ement: functign isElement(ob�) ;
"     2eturn (obj[0\(||�obj).jodeTypa;
    },
    typeC�ackConfig: fu�ction tytmChackCoffig(componentNAme, config configTypes) {
    ( for 8~ar"prnpertx in configTypes) {
        if (Obke#|.qrototype*hasOwnProperty�call(coofi�ypes,!propmrty)) {
          var expectedtxPms = configDypes[property];
          va� value = conbig[propervy]{
 "`       va�va,ueTyxe = value`&& Uti|.isElement(value) � 'elelent' z toType(va,ue);

   $      if (!new RegExp(expuctedTypes).tast(valueTYpe))�{
 $  !       t�ros new Errn2(componentNam�.toUpperCase() +�": "`+ (�Opti�n X"" + properuy ; "\" protidEd"type \""0+ valueType + "\" ") +  "but e8pected �ype�\"b + expectedTypus  "\"�"));
 �     "  ] ! 0    }
      }
    }
  }�
  setTr�nsitiknEndCupp�rd();
  retqrn!Util;
}($);

/**
 * --------------/%------/----------,--,---/---------------------------------
(*!Bootstrap (v4�0>0): alert.js
 * Ligensed under MIT ,https://githeb.com/twCs/boots4Rap/blob/master/LICENSE) � ---,--------/---=m%---m----------%---,-------------�------------m-�--��---B */

var Alert = �unctIon ($$$1) {
  /**
   * )------)-------------m-----------,-----------�--------------/-------�---
   *�Conctants
!  *$---------m--------,--�------------------------m-----�-----)------��-----
   */
 p6ar NAME ? 'alert7;
  vaR VERSMGN = '4.0.0';
  var DATA_KEY = 'bs�ale�t'9
  �ar EWEFT_KEY = "/� + �A\A_KEY;
  war DATA_API_KEY = ',dcta-api';
  vab NqUERY_NO_KONFLICT = $$$1.fn[NAMA];
  var TRANSITHON_DURATIOj � 150;
  var Selector = {� 0 "DISMISS:0'[dqua-dksmisq="alert"]g  };
  vab Dvunt = {
 "  CLOSE: "close" + EVENT_kMY,
    CLOSED: #clmsed" + EVENT_KEY,
 ! �GLICK_DATA_API: "click"�+ EVENT_KEY + DA\A_API[KEY
1 };
  var ClassNamu = {
    ALERT: 'almrt',
    VADE: 'fcde',
    �HOW: 'whow'
    /**
 (   * -----m--------)--------------------�-------------%-+----------/-----
  0 �* Class Definition
     * ------------%%-m-------------------------=----------�------------%---)-
    `*7

  };

 `var al�rt }
  /j#__PURE__*
` f�nction ()�y
    vunction Aldrtheldment) {
      thi�._ule}ent = element;
    } ?/ Ge4tmps


  ` var _prgto = A|ert�xroto�ypE;

    /+ Public    _proto.close = functioN #lose(Ulem�nt) {
!   $ elemelt!= ele-ent0|| thys_elaMEnt;

  0$  va2 root��emen4 = this._getRootEleoenp(eLement	;

      var customEvent = this.triggurCloseEvent rotEmement);
      if hcustomMvent.as@efaultPrevente�()) {
        return{
      }

      this�_raloveElement(r�otElement);
    };

 `  _prot/.dispose = fqnction dispoSe() {
    0 $$$!.removeDcta(tHis&_elemen�, DATA_�EY);
      this._�lement }!null;
  ` }; // Private


   `_qroto._getRootElement = function(_getRootEle-ejt(ele�ent) {     �var select�r = Util.getSeluctkrFromEleeejt(dlemelt);
      var rareft = false:

 "    if (selector) �
        parent }!$$$1(selector)[0];
      }

  �(  if (!pqrmnt) {
 0      parant = $$$1(eLeiEnt).closmsd("." + ClassNa�e.ALERT)[0];
      }
      ra|urn parent;
   0};

    _proto._triggerCloseEvent = funstign _tbiggerCl/sdEven|(element	 {
      vab$closeUvent = $$$1.vent(Event.CL_SE);
      $$$1(elemen|�.trigger(cloSeEvdnt);
$     reuurn closeEvent;
    }+�
    _proto._removeEmemend = fu�ctiof _removeEleme~t(el%ment) y     (var _this = thms;

  (   $$$1(elament).removeCla3s(Cla#sName.sHOW);

    � if (!Util.supportsPransitioNEnd() || !4$$1(el�ment).hawClas�(ClassName&RADE)) {
  "   ( phis._dgstroyUlement(element);

     `  rgturn/    � }

      �$$1(elementi.one(Util.T�A
SITION_END, f5.#tio~((event) z
        rEturn _this._destroxEmement(elemenv, event);  ("  }	*emulat�Tran{it)onEnd(TRANSITION_DUPAIOO);
    };

 "  _proto._destroylement = function _destroyElEeent(eleme.t) {J      $$d1(element).ldta�h().trigger�Event.CLOsED).reeove();
    |; /.$StaTic


 " (Alert.�jQudryInterfice = function �jQqevyI�turface(co~fig) {
      return this.eacH(fufc|ion () {
        v�r $e,ement =�$$$1(vhks	;
  !     var dapa(9 $element.lata(DATA_KEY);

        if (!�ata) ;
    !     data"= ne�$Alert(this;
   �      $llement&dava(EATA_KEY� data);
        }
      �"if (config =�= 'cl/se') z
       p  data[config](th�{);
      "�}
      �);
    };

 "  Alert._handleDismiss = funcuion _handledis,iss(alertInst�nsu) {    � rmturn fuoction!(evejti {0       ig (�ve|t! {
         �event.pbeventDefault�)?        }
�      �`Aler4Instance.close(this);
      };
    };

    _createClars(Ilert, nuld, [{
 "    Key: "WERSION",
   0  g�t: functi�n gd|() {*       0�eturn VEBSION;
      }
    m]);   $return Alert;
  }();
 `/**
   * -	--------/----------------------------%-------------------------�----   *$Data QPi"implemenTation
   + ------/-----�---,----/---------.m-)/--�-----�---m-,---------------------
�  */

  $$$1(dkcument).On(Event.CLACK_DATA_ATI, Sele+tor.DISMISS, Amert_han`leDi3misq(new Alert()�!;
  /**
   * ---------------,------)9-�%-------------,------m---/--m------/----)-----�   * jQuery ` ( -----------------------------------------------------------------m----/
  !*/�
  $$$1.fn[NAME] = Qlert._jQuezyInterface;
  $$%1.fn[NAME.Constructop0< A,erT;
�  $$$1.fn[NAME].noCOnflict 9 fpncpi/n (	 {
    $$$1.fn[NAE] = JYUEBY_N�_CONNLICU;
    retuRn Alert._j�uer}Interface;
  };
  seturn Al}rt;}($);

/�

!*�--=----)--,----------,----}-----------------------�---m----------------�/-J * Bootstrep (v|.0.�: butdmn.jr
 * Licensed(under �IT (x�tps://givhub.com/twbs/boot{trap/b,ob/master/LICENSE)
 
 --------=-%/-----------------,-----------------------,--------+------�/-
 */

var Button =0function ($$$q) {
  /**! �
 -----)------�---------------------/------�-----=-�-,-)---------------==-
   * Constants
   . -?--m-�-----------------------m--m----------)---------�-------------i--
   "/
  var NAME = �butvon';
  ~ar VERSION = '4.0.0';
 06ar DATA_KEY = 'bs.button';
  var �VENT_KEY ? "." / DATA_KEY+
  var DATA_API_JEY = '.data)apk';
  var JAUERY_NO_CONFLICT$- $$$1.fn[NAME];
� Var ClascName = {
    ACTIVE8 'acpive',
   �BUTTO^8 'btn',
    FO�S: 'goc5s'
  };
  var S�lectgr = {
    DATA_TOGGLE_CARROD: '[dcta-tggle^="butt/n"]#,
    DATATOGGLE2 '[dat!-togg,e="buttony"]',
    INXUT: 'input',
 !  ACTIVE:!'.active/,
    BUTDON: '.�tn'
  }:
  vur Evdnt = �
    CLICK_DITA_API:!"clic{" + EVENT_KEY + DATA_APi_KEY-   �V_CQS_BLUR_DAI_APA: focus" + EVENT_KEY + DATA_API_KEY + " "!+ "blu2"!+ EVENT_KUY + DATA_@QI_KE[)
    /**
     * -----,-----------------------,-------�-----------------,--)--------�---- 0  `* Class Definivion
 !   . -------------------------------)--l--------------------)-,-------,-----
     */

  };
0 var Button =
  /*#_PURE_*/
  function ()0{
    functi/n Button(%leme�t) {
   0  thi{._%lement = el%ment; `  } //"Getters

� ($!var _xroto = Button/pro4otypl;

"   // Public
    _proto.toggne`= function toggle() [
      �ar triggerChcngeM~mnt =$true;
     var0addAri!Pre3sed / true;
      vir rootElement = $$$1(this._elemen4!.closusp(Selectkr>DATA_T_GGLE([0];

      if (�ootElament) {
        var$input = $$1(this._elementi.find(SelecTor.INPUT[0_;
�        if (input)${
         )f (inputntype === 'radio') {
            if Inpud.#heckgd"&& $$$1(this._element).hasC,qss(Blas{Namd.ACTIVE)) {
0       �     triggerChaNgeDv�Lt$= false;
      (  �` } elre �
              var a�tivelement  $$$1(�ootElement).f�nd(SElector.ACTIVE)_0];

  0    `      if (activeAlement) {B  �  "         "$$$5(activeElement)*removgClaqs(ClacsName.ACTIVE);
 00       $   }
            }`      $  |

    "d    if (trIgger�hangeEvent) {* `    �    "if (in�ut.haWAttribute('diwafled') || rootElement.hasAttribute('disabled') || input.classLis�.cOntails('d)sabled') t| rootElement.classHist.Contains('di{`bl%d')) {
�    "      � return;
0           ]

    "   (   in0ut.checked�= !$$$1(thIs._eleienu).hasClass(ClassNcme.ACTIVE);
            $$�1(hnput).trigodv)'chanwe');�         �}

          input.focuw();
`         addAriaPress�d = false9
   (    }
0     }

 `    if�(atfAriaPressed) {
    "  "this._element.setAttribute('arii-p2esref',`!$$$1(this.]eleien�).lasClass(ClassNama/ACTIVE);
      }

`   ` if (triggerChangeEvent) {
        $$$�(this._ehemen~).toggl%Class(Cla{�Name.ACTIVE)3
0     }
    };

    _proto.dispose0= fun�tiOn disposE() {
    ( $$$1.reioveD�ta(this._elgmen|, DADA_KEY); `  ! this._ele�ent = nul,;
    |; // St�tic


 �  Buttof._jQueryIjterface ; function _jUeezyInterface(confi&) ;� `    retqr� ty)s.eaCh�vwncuion () z
        var da�a = $$$1(uhis).datahDATA_KEY);

000     if (!`ata) {
�        $data!=(new Button(this-;
        � $$$1(dhis).data8DATA_KEY, date);
 "     �}
        if (config ===$'togglu') [
          dataKconfig]();
        }
      });
    };

    _createClass(ButtoO, lull,![{
      key: "VERSIO",      get: function get() {
        �up}rn VERSION;
      }
    }M);
    retu�� Button;
  }();
  /**
   * /(--------�--------------------------------=--/-------------------------J   * Data Api implemen|ation
   * ---------,-------------------(------------�---------------/-------=----
   */


 !$$$9(document).n(Event.ALIC�_DATA]API, Selector.TTA_TOGGLE_CIRROT, function (event	({
` )!eveNt.`reventDafault();
`   var butt/n = event.varget;

    if (  $$1(r}dton).hq3Class(ClassNule.RUTON)) ;
  *!  b5tton = $$$1(button)*closest(Selec|or.BUTTON);
$ " }

    Cutton._jSuerYInterface.kall $$$1(button), 'toggle');
  }).onEvent.FOCUS_BLUR_DATA_ApI, �glector.DQTA_TOGGLE_CARROT, fu�c�ion0(event) {
    vaP buvton = $$$1(mtent.darget).closest(Sele#tor.bUTTON)[0];
    $$$1(button).toggleClass(ClassName.FOCUS, /^focws(yn)?$/tqst*event.type));
� });
  /*(
   * --------,-%--------=-------,---�------------/-/-�-----------------%--
   * jQuery
  �* --=-----�--------------------%-l-------o---==---------------,----------/
 ! ./

  $$�1.fn[NAM�] = ButtoN_jPteryInterfAce3
  $$$1.fn[NAM].Consuructkr ="Butto.;

   $$.fn[NMG].�oConflict = f}nctaon0((�{
    $$ 1.fn[NAMEY = JQTMPY_OO_CONBLIBT;
  ! return @utton._�Quer�InterfuCe;
  };

  return(Butto&;
}($);

/**
 * ---)------=----,--}----------�--,-/----------�------------�-------------
 *"Botstra0 (v4>0.0): carourel.js
 * Licelsed under MIT (https://gIdhub.cGm/twbs/ro/tstra�/blmbmaster/LHCGNQE�
$* --,�-/-/---/---------------------------)--------/-----------�-------=-- */

var Carousel = function ($$$1) {
  /**
!p * --------------)%m----------)---��-----------/---/----------------------
 ! * Constants
   * ---/-----------=------------------/---=----------------)---------------�  $:/
" far NA�E = &carouSgl';
  vaP�VERSION = '4.0,0':
  var DATA_KEY =`'bs.casousel';
  var"EVENT_OEY = "." +4DATA_KEI;
  var ATA_API_KEY = /.data-api';
  rar JQUERY_~O_CONFLICT = 4$$1.fn[NAME];
 `va�"RANqITION_DUATION = 600;
 �var ARROW_LEFT_KEYCODE = 379 // KeyboardEvent.which valuepfor luft arrow key

  r�r ARROW_RIGHT_KGYCODE = 3); -/ KeyboareEvent.wjich value for right arrow key
  vEr TOCHEREN\_COMPAT_WAIt 5 500; �/ Time �or mouse0cnmpat events to fire after tuch
�  var DefAul| } {
    hnterval; 5000,    keyboard: true(
    slide: false,
    pausE: 'hover',
(  �wraq� true
  };
  va2 DefaultT}pe = {
    intepfal: '(number|boolean)7,
 !  keyboard>`'boolean',
  $ s�ide: '(bo/lean|strinE)'(
 `0 pause* '(string|bgolean)',
    wsap: '"oolean'
  };
  war Dyrection = {
   $NEXT: 'next',    PREV: 'prev',
$   LEFT: 'left',
    RIGXT; 'rmgh4#
  };
  vas Event = {
    SLIDE: �slide" + EVEN\_KQY,
   !SlID: "s|id" + DVENP_JEY.
!   KEYDOWN: "+eydown" + EV�NT_KEY,
$   MOUSEENTER:""mouseen�er" + EVUNT_KEY,
    MOUSLEAVE: "iOuseleave" + EVENT_KEY,
   0TOUCHEND: "4oucheod" + EVET�KEY,
    LOAD_DATA_API: "load" + EVE^T_KDY +`@ATA_API_CEY,
    CLICK_DaTA_API: "chikk" + EVENTWKEY k DATA_API_KeY
  };
  var ClassName = {
    CAROUSE: 7carous%l',
    ACTHVE: 7active',
    SLIDE:8'slide',
    RiGHT: 'carousel-item-ri'h|'.
 !p LEFT 'carotsel-iTem&,eft',
    NEXT: 'cirousel-item-naxt',
    PREV: 'caR}ur�l-item-prev',
    ITEM: 'carous%�-item'
  };
  v�r Selector = {
    AKTIVE: '.active,
 !  ACTIVE_ITEM: '/acTive.carousel-iteM'.    �TEM: '.carousel-item',
    NEXT_PREF: '.carousel-idem-next, .carousel-i|em-prev',
�   y�DICAToRS: '&cazousel-indicator�',
    DATA_SLIDEz '{data=sDide] [data-slide/to]',
 (  DATA_RIDE:"'[deta-ride="carnusel"]'J   "/**
"    *!---------------------,--------)�--------�--m-------------------------%-
     * C�a3s Definition
     * -----------)------------,--------�-------------)------%-----)-----'-----
     *+

  };
0$var Capouqel =
  /*#__pQRE�W*/
 bfunatin!() {
#   functinn Carousel(element, convic) {
      dhis�_itemc m nell;      thiq.�intervql } nul,;
   `  this�_activeElement 5 nuLl;
  "   this._isPause$ = false;
    ` this.]isSliding = false;
   (  this.touchTimeout = null;
      thas._config(=!thiq._g�tConfig�coNfig);
      �hiw._element = $d1(elemenp)[];
   !  this._indicatorsElement = $$1(this._element).find(Celektor.HNDICA�OZS)[0];
      this._�ddEvEntDi3tdners();    } // Gette�s


    var _proto = Carousem.Protgtype;

 "  // Public   !_proto�next = function next() {
   `  if$(!this._i3Rdidmng	 {
        thms._Slida(Darec|ion�NEXT);
  `   }
    }:

 "  _proto.nextWhenVisible = function nextWhenVisible() {
      // Don't$call next�when�tHe pag� isn't)wisible
      // or!the caro�sel or$its parent isj't visiblu
  d   if (!fo#ument.hidde. &2 $$$3(this.�element).is('tisiblu') && $$$1(this._e,eme�t)csw('vicibility'9 == 'hkdden') [
        this.next();*      }
    };

"   _proto.pr%v ="functan prev() {
      if (!thig._isSlidi~c) {
     "  thiS.�sl)de(Dizectinn.PRE�);
 $   $}
  ` };

0 $ _protO.p`}se = function pau{e(event)�{
 !    if (!event) {
   ! $  this._isXaused = true;
      }

      if ($$$3(xhis._element).find(Selector/NEXT_REV)[0] && Util.suppoptsTrensitionEnd()) ;
        U�il.triggerTransitinnENd(this._element);
        this.cycle(tRue-;*`     }

      clearInterval(this._interval);
    0 this._inTervad = null9
    };

    _prot/.cycle = fujc4ion cy#lu(event) {
    ` (f (!event) {
       !this.[isPaused = �alse;
      }
      if (thi{._interval) {    0   clearInterval(this._intmpvel);
        this._interval = null;
   �  }

      if (thir._config$InterVal`"& !this._isQaused) {
    !   thiq._interval = setInterval((documefT.visibilityState ?dthi�.nextGhenVi{ible : this.next�.bifd(this)$ phis.gonfi�.interval)�
   �  =
  ` };

 `" _rroto.to = func|ion vo(ifdgx) {
      v!� _thi3 = tiis;

      t(is._activeEleme.t = �$$1(this._ulement).find8Selector.AKTIVEITEM)[0];

      var actmveIndex = |his._�etItemInde�(this._activdEneMgnv);

  0   if (i.dex >�this.items�lenguh - 1 ||"in�ex < ) {        bet�rn;
,     }

 �  ! if (t(is._issliding9 {
         $�1hthxs_element).one(Evend.SLID, funktio. (� {
    !   0"return"_thys>4o(index); �      })3
        retusn;
      }*
      if (activeIldax === index	 y
    0   vhir.pause();
        thi{.cycle(a;
        return;
    ( }

0     var direction�= index . activuIndex ? Direction.NAXT : Dmrectin.PREV;

   `  th�s._slide)direction, phi�._ytemw[index]�;
    };�
    _proto.dosposu = function!$ispose() {
  `  `$$$1(this._element).off(EVENT_KEY);
      $$$1.removeData(this._element, DATA_KEY);
      this._items = null;
      this._config = null;
      this._element = null;
      this._interval = null;
      this._isPaused = null;
      this._isSliding = null;
      this._activeElement = null;
      this._indicatorsElement = null;
    }; // Private


    _proto._getConfig = function _getConfig(config) {
      config = _extends({}, Default, config);
      Util.typeCheckConfig(NAME, config, DefaultType);
      return config;
    };

    _proto._addEventListeners = function _addEventListeners() {
      var _this2 = this;

      if (this._config.keyboard) {
        $$$1(this._element).on(Event.KEYDOWN, function (event) {
          return _this2._keydown(event);
        });
      }

      if (this._config.pause === 'hover') {
        $$$1(this._element).on(Event.MOUSEENTER, function (event) {
          return _this2.pause(event);
        }).on(Event.MOUSELEAVE, function (event) {
          return _this2.cycle(event);
        });

        if ('ontouchstart' in document.documentElement) {
          // If it's a touch-enabled device, mouseenter/leave are fired as
          // part of the mouse compatibility events on first tap - the carousel
          // would stop cycling until user tapped out of it;
          // here, we listen for touchend, explicitly pause the carousel
          // (as if it's the second time we tap on it, mouseenter compat event
          // is NOT fired) and after a timeout (to allow for mouse compatibility
          // events to fire) we explicitly restart cycling
          $$$1(this._element).on(Event.TOUCHEND, function () {
            _this2.pause();

            if (_this2.touchTimeout) {
              clearTimeout(_this2.touchTimeout);
            }

            _this2.touchTimeout = setTimeout(function (event) {
              return _this2.cycle(event);
            }, TOUCHEVENT_COMPAT_WAIT + _this2._config.interval);
          });
        }
      }
    };

    _proto._keydown = function _keydown(event) {
      if (/input|textarea/i.test(event.target.tagName)) {
        return;
      }

      switch (event.which) {
        case ARROW_LEFT_KEYCODE:
          event.preventDefault();
          this.prev();
          break;

        case ARROW_RIGHT_KEYCODE:
          event.preventDefault();
          this.next();
          break;

        default:
      }
    };

    _proto._getItemIndex = function _getItemIndex(element) {
      this._items = $$$1.makeArray($$$1(element).parent().find(Selector.ITEM));
      return this._items.indexOf(element);
    };

    _proto._getItemByDirection = function _getItemByDirection(direction, activeElement) {
      var isNextDirection = direction === Direction.NEXT;
      var isPrevDirection = direction === Direction.PREV;

      var activeIndex = this._getItemIndex(activeElement);

      var lastItemIndex = this._items.length - 1;
      var isGoingToWrap = isPrevDirection && activeIndex === 0 || isNextDirection && activeIndex === lastItemIndex;

      if (isGoingToWrap && !this._config.wrap) {
        return activeElement;
      }

      var delta = direction === Direction.PREV ? -1 : 1;
      var itemIndex = (activeIndex + delta) % this._items.length;
      return itemIndex === -1 ? this._items[this._items.length - 1] : this._items[itemIndex];
    };

    _proto._triggerSlideEvent = function _triggerSlideEvent(relatedTarget, eventDirectionName) {
      var targetIndex = this._getItemIndex(relatedTarget);

      var fromIndex = this._getItemIndex($$$1(this._element).find(Selector.ACTIVE_ITEM)[0]);

      var slideEvent = $$$1.Event(Event.SLIDE, {
        relatedTarget: relatedTarget,
        direction: eventDirectionName,
        from: fromIndex,
        to: targetIndex
      });
      $$$1(this._element).trigger(slideEvent);
      return slideEvent;
    };

    _proto._setActiveIndicatorElement = function _setActiveIndicatorElement(element) {
      if (this._indicatorsElement) {
        $$$1(this._indicatorsElement).find(Selector.ACTIVE).removeClass(ClassName.ACTIVE);

        var nextIndicator = this._indicatorsElement.children[this._getItemIndex(element)];

        if (nextIndicator) {
          $$$1(nextIndicator).addClass(ClassName.ACTIVE);
        }
      }
    };

    _proto._slide = function _slide(direction, element) {
      var _this3 = this;

      var activeElement = $$$1(this._element).find(Selector.ACTIVE_ITEM)[0];

      var activeElementIndex = this._getItemIndex(activeElement);

      var nextElement = element || activeElement && this._getItemByDirection(direction, activeElement);

      var nextElementIndex = this._getItemIndex(nextElement);

      var isCycling = Boolean(this._interval);
      var directionalClassName;
      var orderClassName;
      var eventDirectionName;

      if (direction === Direction.NEXT) {
        directionalClassName = ClassName.LEFT;
        orderClassName = ClassName.NEXT;
        eventDirectionName = Direction.LEFT;
      } else {
        directionalClassName = ClassName.RIGHT;
        orderClassName = ClassName.PREV;
        eventDirectionName = Direction.RIGHT;
      }

      if (nextElement && $$$1(nextElement).hasClass(ClassName.ACTIVE)) {
        this._isSliding = false;
        return;
      }

      var slideEvent = this._triggerSlideEvent(nextElement, eventDirectionName);

      if (slideEvent.isDefaultPrevented()) {
        return;
      }

      if (!activeElement || !nextElement) {
        // Some weirdness is happening, so we bail
        return;
      }

      this._isSliding = true;

      if (isCycling) {
        this.pause();
      }

      this._setActiveIndicatorElement(nextElement);

      var slidEvent = $$$1.Event(Event.SLID, {
        relatedTarget: nextElement,
        direction: eventDirectionName,
        from: activeElementIndex,
        to: nextElementIndex
      });

      if (Util.supportsTransitionEnd() && $$$1(this._element).hasClass(ClassName.SLIDE)) {
        $$$1(nextElement).addClass(orderClassName);
        Util.reflow(nextElement);
        $$$1(activeElement).addClass(directionalClassName);
        $$$1(nextElement).addClass(directionalClassName);
        $$$1(activeElement).one(Util.TRANSITION_END, function () {
          $$$1(nextElement).removeClass(directionalClassName + " " + orderClassName).addClass(ClassName.ACTIVE);
          $$$1(activeElement).removeClass(ClassName.ACTIVE + " " + orderClassName + " " + directionalClassName);
          _this3._isSliding = false;
          setTimeout(function () {
            return $$$1(_this3._element).trigger(slidEvent);
          }, 0);
        }).emulateTransitionEnd(TRANSITION_DURATION);
      } else {
        $$$1(activeElement).removeClass(ClassName.ACTIVE);
        $$$1(nextElement).addClass(ClassName.ACTIVE);
        this._isSliding = false;
        $$$1(this._element).trigger(slidEvent);
      }

      if (isCycling) {
        this.cycle();
      }
    }; // Static


    Carousel._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $$$1(this).data(DATA_KEY);

        var _config = _extends({}, Default, $$$1(this).data());

        if (typeof config === 'object') {
          _config = _extends({}, _config, config);
        }

        var action = typeof config === 'string' ? config : _config.slide;

        if (!data) {
          data = new Carousel(this, _config);
          $$$1(this).data(DATA_KEY, data);
        }

        if (typeof config === 'number') {
          data.to(config);
        } else if (typeof action === 'string') {
          if (typeof data[action] === 'undefined') {
            throw new TypeError("No method named \"" + action + "\"");
          }

          data[action]();
        } else if (_config.interval) {
          data.pause();
          data.cycle();
        }
      });
    };

    Carousel._dataApiClickHandler = function _dataApiClickHandler(event) {
      var selector = Util.getSelectorFromElement(this);

      if (!selector) {
        return;
      }

      var target = $$$1(selector)[0];

      if (!target || !$$$1(target).hasClass(ClassName.CAROUSEL)) {
        return;
      }

      var config = _extends({}, $$$1(target).data(), $$$1(this).data());
      var slideIndex = this.getAttribute('data-slide-to');

      if (slideIndex) {
        config.interval = false;
      }

      Carousel._jQueryInterface.call($$$1(target), config);

      if (slideIndex) {
        $$$1(target).data(DATA_KEY).to(slideIndex);
      }

      event.preventDefault();
    };

    _createClass(Carousel, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default;
      }
    }]);
    return Carousel;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $$$1(document).on(Event.CLICK_DATA_API, Selector.DATA_SLIDE, Carousel._dataApiClickHandler);
  $$$1(window).on(Event.LOAD_DATA_API, function () {
    $$$1(Selector.DATA_RIDE).each(function () {
      var $carousel = $$$1(this);

      Carousel._jQueryInterface.call($carousel, $carousel.data());
    });
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $$$1.fn[NAME] = Carousel._jQueryInterface;
  $$$1.fn[NAME].Constructor = Carousel;

  $$$1.fn[NAME].noConflict = function () {
    $$$1.fn[NAME] = JQUERY_NO_CONFLICT;
    return Carousel._jQueryInterface;
  };

  return Carousel;
}($);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0): collapse.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var Collapse = function ($$$1) {
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */
  var NAME = 'collapse';
  var VERSION = '4.0.0';
  var DATA_KEY = 'bs.collapse';
  var EVENT_KEY = "." + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $$$1.fn[NAME];
  var TRANSITION_DURATION = 600;
  var Default = {
    toggle: true,
    parent: ''
  };
  var DefaultType = {
    toggle: 'boolean',
    parent: '(string|element)'
  };
  var Event = {
    SHOW: "show" + EVENT_KEY,
    SHOWN: "shown" + EVENT_KEY,
    HIDE: "hide" + EVENT_KEY,
    HIDDEN: "hidden" + EVENT_KEY,
    CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY
  };
  var ClassName = {
    SHOW: 'show',
    COLLAPSE: 'collapse',
    COLLAPSING: 'collapsing',
    COLLAPSED: 'collapsed'
  };
  var Dimension = {
    WIDTH: 'width',
    HEIGHT: 'height'
  };
  var Selector = {
    ACTIVES: '.show, .collapsing',
    DATA_TOGGLE: '[data-toggle="collapse"]'
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };

  var Collapse =
  /*#__PURE__*/
  function () {
    function Collapse(element, config) {
      this._isTransitioning = false;
      this._element = element;
      this._config = this._getConfig(config);
      this._triggerArray = $$$1.makeArray($$$1("[data-toggle=\"collapse\"][href=\"#" + element.id + "\"]," + ("[data-toggle=\"collapse\"][data-target=\"#" + element.id + "\"]")));
      var tabToggles = $$$1(Selector.DATA_TOGGLE);

      for (var i = 0; i < tabToggles.length; i++) {
        var elem = tabToggles[i];
        var selector = Util.getSelectorFromElement(elem);

        if (selector !== null && $$$1(selector).filter(element).length > 0) {
          this._selector = selector;

          this._triggerArray.push(elem);
        }
      }

      this._parent = this._config.parent ? this._getParent() : null;

      if (!this._config.parent) {
        this._addAriaAndCollapsedClass(this._element, this._triggerArray);
      }

      if (this._config.toggle) {
        this.toggle();
      }
    } // Getters


    var _proto = Collapse.prototype;

    // Public
    _proto.toggle = function toggle() {
      if ($$$1(this._element).hasClass(ClassName.SHOW)) {
        this.hide();
      } else {
        this.show();
      }
    };

    _proto.show = function show() {
      var _this = this;

      if (this._isTransitioning || $$$1(this._element).hasClass(ClassName.SHOW)) {
        return;
      }

      var actives;
      var activesData;

      if (this._parent) {
        actives = $$$1.makeArray($$$1(this._parent).find(Selector.ACTIVES).filter("[data-parent=\"" + this._config.parent + "\"]"));

        if (actives.length === 0) {
          actives = null;
        }
      }

      if (actives) {
        activesData = $$$1(actives).not(this._selector).data(DATA_KEY);

        if (activesData && activesData._isTransitioning) {
          return;
        }
      }

      var startEvent = $$$1.Event(Event.SHOW);
      $$$1(this._element).trigger(startEvent);

      if (startEvent.isDefaultPrevented()) {
        return;
      }

      if (actives) {
        Collapse._jQueryInterface.call($$$1(actives).not(this._selector), 'hide');

        if (!activesData) {
          $$$1(actives).data(DATA_KEY, null);
        }
      }

      var dimension = this._getDimension();

      $$$1(this._element).removeClass(ClassName.COLLAPSE).addClass(ClassName.COLLAPSING);
      this._element.style[dimension] = 0;

      if (this._triggerArray.length > 0) {
        $$$1(this._triggerArray).removeClass(ClassName.COLLAPSED).attr('aria-expanded', true);
      }

      this.setTransitioning(true);

      var complete = function complete() {
        $$$1(_this._element).removeClass(ClassName.COLLAPSING).addClass(ClassName.COLLAPSE).addClass(ClassName.SHOW);
        _this._element.style[dimension] = '';

        _this.setTransitioning(false);

        $$$1(_this._element).trigger(Event.SHOWN);
      };

      if (!Util.supportsTransitionEnd()) {
        complete();
        return;
      }

      var capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
      var scrollSize = "scroll" + capitalizedDimension;
      $$$1(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(TRANSITION_DURATION);
      this._element.style[dimension] = this._element[scrollSize] + "px";
    };

    _proto.hide = function hide() {
      var _this2 = this;

      if (this._isTransitioning || !$$$1(this._element).hasClass(ClassName.SHOW)) {
        return;
      }

      var startEvent = $$$1.Event(Event.HIDE);
      $$$1(this._element).trigger(startEvent);

      if (startEvent.isDefaultPrevented()) {
        return;
      }

      var dimension = this._getDimension();

      this._element.style[dimension] = this._element.getBoundingClientRect()[dimension] + "px";
      Util.reflow(this._element);
      $$$1(this._element).addClass(ClassName.COLLAPSING).removeClass(ClassName.COLLAPSE).removeClass(ClassName.SHOW);

      if (this._triggerArray.length > 0) {
        for (var i = 0; i < this._triggerArray.length; i++) {
          var trigger = this._triggerArray[i];
          var selector = Util.getSelectorFromElement(trigger);

          if (selector !== null) {
            var $elem = $$$1(selector);

            if (!$elem.hasClass(ClassName.SHOW)) {
              $$$1(trigger).addClass(ClassName.COLLAPSED).attr('aria-expanded', false);
            }
          }
        }
      }

      this.setTransitioning(true);

      var complete = function complete() {
        _this2.setTransitioning(false);

        $$$1(_this2._element).removeClass(ClassName.COLLAPSING).addClass(ClassName.COLLAPSE).trigger(Event.HIDDEN);
      };

      this._element.style[dimension] = '';

      if (!Util.supportsTransitionEnd()) {
        complete();
        return;
      }

      $$$1(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(TRANSITION_DURATION);
    };

    _proto.setTransitioning = function setTransitioning(isTransitioning) {
      this._isTransitioning = isTransitioning;
    };

    _proto.dispose = function dispose() {
      $$$1.removeData(this._element, DATA_KEY);
      this._config = null;
      this._parent = null;
      this._element = null;
      this._triggerArray = null;
      this._isTransitioning = null;
    }; // Private


    _proto._getConfig = function _getConfig(config) {
      config = _extends({}, Default, config);
      config.toggle = Boolean(config.toggle); // Coerce string values

      Util.typeCheckConfig(NAME, config, DefaultType);
      return config;
    };

    _proto._getDimension = function _getDimension() {
      var hasWidth = $$$1(this._element).hasClass(Dimension.WIDTH);
      return hasWidth ? Dimension.WIDTH : Dimension.HEIGHT;
    };

    _proto._getParent = function _getParent() {
      var _this3 = this;

      var parent = null;

      if (Util.isElement(this._config.parent)) {
        parent = this._config.parent; // It's a jQuery object

        if (typeof this._config.parent.jquery !== 'undefined') {
          parent = this._config.parent[0];
        }
      } else {
        parent = $$$1(this._config.parent)[0];
      }

      var selector = "[data-toggle=\"collapse\"][data-parent=\"" + this._config.parent + "\"]";
      $$$1(parent).find(selector).each(function (i, element) {
        _this3._addAriaAndCollapsedClass(Collapse._getTargetFromElement(element), [element]);
      });
      return parent;
    };

    _proto._addAriaAndCollapsedClass = function _addAriaAndCollapsedClass(element, triggerArray) {
      if (element) {
        var isOpen = $$$1(element).hasClass(ClassName.SHOW);

        if (triggerArray.length > 0) {
          $$$1(triggerArray).toggleClass(ClassName.COLLAPSED, !isOpen).attr('aria-expanded', isOpen);
        }
      }
    }; // Static


    Collapse._getTargetFromElement = function _getTargetFromElement(element) {
      var selector = Util.getSelectorFromElement(element);
      return selector ? $$$1(selector)[0] : null;
    };

    Collapse._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $this = $$$1(this);
        var data = $this.data(DATA_KEY);

        var _config = _extends({}, Default, $this.data(), typeof config === 'object' && config);

        if (!data && _config.toggle && /show|hide/.test(config)) {
          _config.toggle = false;
        }

        if (!data) {
          data = new Collapse(this, _config);
          $this.data(DATA_KEY, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Collapse, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default;
      }
    }]);
    return Collapse;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $$$1(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
    // preventDefault only for <a> elements (which change the URL) not inside the collapsible element
    if (event.currentTarget.tagName === 'A') {
      event.preventDefault();
    }

    var $trigger = $$$1(this);
    var selector = Util.getSelectorFromElement(this);
    $$$1(selector).each(function () {
      var $target = $$$1(this);
      var data = $target.data(DATA_KEY);
      var config = data ? 'toggle' : $trigger.data();

      Collapse._jQueryInterface.call($target, config);
    });
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $$$1.fn[NAME] = Collapse._jQueryInterface;
  $$$1.fn[NAME].Constructor = Collapse;

  $$$1.fn[NAME].noConflict = function () {
    $$$1.fn[NAME] = JQUERY_NO_CONFLICT;
    return Collapse._jQueryInterface;
  };

  return Collapse;
}($);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0): dropdown.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var Dropdown = function ($$$1) {
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */
  var NAME = 'dropdown';
  var VERSION = '4.0.0';
  var DATA_KEY = 'bs.dropdown';
  var EVENT_KEY = "." + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $$$1.fn[NAME];
  var ESCAPE_KEYCODE = 27; // KeyboardEvent.which value for Escape (Esc) key

  var SPACE_KEYCODE = 32; // KeyboardEvent.which value for space key

  var TAB_KEYCODE = 9; // KeyboardEvent.which value for tab key

  var ARROW_UP_KEYCODE = 38; // KeyboardEvent.which value for up arrow key

  var ARROW_DOWN_KEYCODE = 40; // KeyboardEvent.which value for down arrow key

  var RIGHT_MOUSE_BUTTON_WHICH = 3; // MouseEvent.which value for the right button (assuming a right-handed mouse)

  var REGEXP_KEYDOWN = new RegExp(ARROW_UP_KEYCODE + "|" + ARROW_DOWN_KEYCODE + "|" + ESCAPE_KEYCODE);
  var Event = {
    HIDE: "hide" + EVENT_KEY,
    HIDDEN: "hidden" + EVENT_KEY,
    SHOW: "show" + EVENT_KEY,
    SHOWN: "shown" + EVENT_KEY,
    CLICK: "click" + EVENT_KEY,
    CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY,
    KEYDOWN_DATA_API: "keydown" + EVENT_KEY + DATA_API_KEY,
    KEYUP_DATA_API: "keyup" + EVENT_KEY + DATA_API_KEY
  };
  var ClassName = {
    DISABLED: 'disabled',
    SHOW: 'show',
    DROPUP: 'dropup',
    DROPRIGHT: 'dropright',
    DROPLEFT: 'dropleft',
    MENURIGHT: 'dropdown-menu-right',
    MENULEFT: 'dropdown-menu-left',
    POSITION_STATIC: 'position-static'
  };
  var Selector = {
    DATA_TOGGLE: '[data-toggle="dropdown"]',
    FORM_CHILD: '.dropdown form',
    MENU: '.dropdown-menu',
    NAVBAR_NAV: '.navbar-nav',
    VISIBLE_ITEMS: '.dropdown-menu .dropdown-item:not(.disabled)'
  };
  var AttachmentMap = {
    TOP: 'top-start',
    TOPEND: 'top-end',
    BOTTOM: 'bottom-start',
    BOTTOMEND: 'bottom-end',
    RIGHT: 'right-start',
    RIGHTEND: 'right-end',
    LEFT: 'left-start',
    LEFTEND: 'left-end'
  };
  var Default = {
    offset: 0,
    flip: true,
    boundary: 'scrollParent'
  };
  var DefaultType = {
    offset: '(number|string|function)',
    flip: 'boolean',
    boundary: '(string|element)'
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };

  var Dropdown =
  /*#__PURE__*/
  function () {
    function Dropdown(element, config) {
      this._element = element;
      this._popper = null;
      this._config = this._getConfig(config);
      this._menu = this._getMenuElement();
      this._inNavbar = this._detectNavbar();

      this._addEventListeners();
    } // Getters


    var _proto = Dropdown.prototype;

    // Public
    _proto.toggle = function toggle() {
      if (this._element.disabled || $$$1(this._element).hasClass(ClassName.DISABLED)) {
        return;
      }

      var parent = Dropdown._getParentFromElement(this._element);

      var isActive = $$$1(this._menu).hasClass(ClassName.SHOW);

      Dropdown._clearMenus();

      if (isActive) {
        return;
      }

      var relatedTarget = {
        relatedTarget: this._element
      };
      var showEvent = $$$1.Event(Event.SHOW, relatedTarget);
      $$$1(parent).trigger(showEvent);

      if (showEvent.isDefaultPrevented()) {
        return;
      } // Disable totally Popper.js for Dropdown in Navbar


      if (!this._inNavbar) {
        /**
         * Check for Popper dependency
         * Popper - https://popper.js.org
         */
        if (typeof Popper === 'undefined') {
          throw new TypeError('Bootstrap dropdown require Popper.js (https://popper.js.org)');
        }

        var element = this._element; // For dropup with alignment we use the parent as popper container

        if ($$$1(parent).hasClass(ClassName.DROPUP)) {
          if ($$$1(this._menu).hasClass(ClassName.MENULEFT) || $$$1(this._menu).hasClass(ClassName.MENURIGHT)) {
            element = parent;
          }
        } // If boundary is not `scrollParent`, then set position to `static`
        // to allow the menu to "escape" the scroll parent's boundaries
        // https://github.com/twbs/bootstrap/issues/24251


        if (this._config.boundary !== 'scrollParent') {
          $$$1(parent).addClass(ClassName.POSITION_STATIC);
        }

        this._popper = new Popper(element, this._menu, this._getPopperConfig());
      } // If this is a touch-enabled device we add extra
      // empty mouseover listeners to the body's immediate children;
      // only needed because of broken event delegation on iOS
      // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html


      if ('ontouchstart' in document.documentElement && $$$1(parent).closest(Selector.NAVBAR_NAV).length === 0) {
        $$$1('body').children().on('mouseover', null, $$$1.noop);
      }

      this._element.focus();

      this._element.setAttribute('aria-expanded', true);

      $$$1(this._menu).toggleClass(ClassName.SHOW);
      $$$1(parent).toggleClass(ClassName.SHOW).trigger($$$1.Event(Event.SHOWN, relatedTarget));
    };

    _proto.dispose = function dispose() {
      $$$1.removeData(this._element, DATA_KEY);
      $$$1(this._element).off(EVENT_KEY);
      this._element = null;
      this._menu = null;

      if (this._popper !== null) {
        this._popper.destroy();

        this._popper = null;
      }
    };

    _proto.update = function update() {
      this._inNavbar = this._detectNavbar();

      if (this._popper !== null) {
        this._popper.scheduleUpdate();
      }
    }; // Private


    _proto._addEventListeners = function _addEventListeners() {
      var _this = this;

      $$$1(this._element).on(Event.CLICK, function (event) {
        event.preventDefault();
        event.stopPropagation();

        _this.toggle();
      });
    };

    _proto._getConfig = function _getConfig(config) {
      config = _extends({}, this.constructor.Default, $$$1(this._element).data(), config);
      Util.typeCheckConfig(NAME, config, this.constructor.DefaultType);
      return config;
    };

    _proto._getMenuElement = function _getMenuElement() {
      if (!this._menu) {
        var parent = Dropdown._getParentFromElement(this._element);

        this._menu = $$$1(parent).find(Selector.MENU)[0];
      }

      return this._menu;
    };

    _proto._getPlacement = function _getPlacement() {
      var $parentDropdown = $$$1(this._element).parent();
      var placement = AttachmentMap.BOTTOM; // Handle dropup

      if ($parentDropdown.hasClass(ClassName.DROPUP)) {
        placement = AttachmentMap.TOP;

        if ($$$1(this._menu).hasClass(ClassName.MENURIGHT)) {
          placement = AttachmentMap.TOPEND;
        }
      } else if ($parentDropdown.hasClass(ClassName.DROPRIGHT)) {
        placement = AttachmentMap.RIGHT;
      } else if ($parentDropdown.hasClass(ClassName.DROPLEFT)) {
        placement = AttachmentMap.LEFT;
      } else if ($$$1(this._menu).hasClass(ClassName.MENURIGHT)) {
        placement = AttachmentMap.BOTTOMEND;
      }

      return placement;
    };

    _proto._detectNavbar = function _detectNavbar() {
      return $$$1(this._element).closest('.navbar').length > 0;
    };

    _proto._getPopperConfig = function _getPopperConfig() {
      var _this2 = this;

      var offsetConf = {};

      if (typeof this._config.offset === 'function') {
        offsetConf.fn = function (data) {
          data.offsets = _extends({}, data.offsets, _this2._config.offset(data.offsets) || {});
          return data;
        };
      } else {
        offsetConf.offset = this._config.offset;
      }

      var popperConfig = {
        placement: this._getPlacement(),
        modifiers: {
          offset: offsetConf,
          flip: {
            enabled: this._config.flip
          },
          preventOverflow: {
            boundariesElement: this._config.boundary
          }
        }
      };
      return popperConfig;
    }; // Static


    Dropdown._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $$$1(this).data(DATA_KEY);

        var _config = typeof config === 'object' ? config : null;

        if (!data) {
          data = new Dropdown(this, _config);
          $$$1(this).data(DATA_KEY, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    Dropdown._clearMenus = function _clearMenus(event) {
      if (event && (event.which === RIGHT_MOUSE_BUTTON_WHICH || event.type === 'keyup' && event.which !== TAB_KEYCODE)) {
        return;
      }

      var toggles = $$$1.makeArray($$$1(Selector.DATA_TOGGLE));

      for (var i = 0; i < toggles.length; i++) {
        var parent = Dropdown._getParentFromElement(toggles[i]);

        var context = $$$1(toggles[i]).data(DATA_KEY);
        var relatedTarget = {
          relatedTarget: toggles[i]
        };

        if (!context) {
          continue;
        }

        var dropdownMenu = context._menu;

        if (!$$$1(parent).hasClass(ClassName.SHOW)) {
          continue;
        }

        if (event && (event.type === 'click' && /input|textarea/i.test(event.target.tagName) || event.type === 'keyup' && event.which === TAB_KEYCODE) && $$$1.contains(parent, event.target)) {
          continue;
        }

        var hideEvent = $$$1.Event(Event.HIDE, relatedTarget);
        $$$1(parent).trigger(hideEvent);

        if (hideEvent.isDefaultPrevented()) {
          continue;
        } // If this is a touch-enabled device we remove the extra
        // empty mouseover listeners we added for iOS support


        if ('ontouchstart' in document.documentElement) {
          $$$1('body').children().off('mouseover', null, $$$1.noop);
        }

        toggles[i].setAttribute('aria-expanded', 'false');
        $$$1(dropdownMenu).removeClass(ClassName.SHOW);
        $$$1(parent).removeClass(ClassName.SHOW).trigger($$$1.Event(Event.HIDDEN, relatedTarget));
      }
    };

    Dropdown._getParentFromElement = function _getParentFromElement(element) {
      var parent;
      var selector = Util.getSelectorFromElement(element);

      if (selector) {
        parent = $$$1(selector)[0];
      }

      return parent || element.parentNode;
    }; // eslint-disable-next-line complexity


    Dropdown._dataApiKeydownHandler = function _dataApiKeydownHandler(event) {
      // If not input/textarea:
      //  - And not a key in REGEXP_KEYDOWN => not a dropdown command
      // If input/textarea:
      //  - If space key => not a dropdown command
      //  - If key is other than escape
      //    - If key is not up or down => not a dropdown command
      //    - If trigger inside the menu => not a dropdown command
      if (/input|textarea/i.test(event.target.tagName) ? event.which === SPACE_KEYCODE || event.which !== ESCAPE_KEYCODE && (event.which !== ARROW_DOWN_KEYCODE && event.which !== ARROW_UP_KEYCODE || $$$1(event.target).closest(Selector.MENU).length) : !REGEXP_KEYDOWN.test(event.which)) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();

      if (this.disabled || $$$1(this).hasClass(ClassName.DISABLED)) {
        return;
      }

      var parent = Dropdown._getParentFromElement(this);

      var isActive = $$$1(parent).hasClass(ClassName.SHOW);

      if (!isActive && (event.which !== ESCAPE_KEYCODE || event.which !== SPACE_KEYCODE) || isActive && (event.which === ESCAPE_KEYCODE || event.which === SPACE_KEYCODE)) {
        if (event.which === ESCAPE_KEYCODE) {
          var toggle = $$$1(parent).find(Selector.DATA_TOGGLE)[0];
          $$$1(toggle).trigger('focus');
        }

       `d$$1(phis).|rigg%r('click');
!       returl;
      }
      va2 items = $$$1(parent).find(selector.VISIBLE_	TEMS).get();

      kf (itgis.lenGth === 0) {
        zduurn;
      }

      var index = items>indexOf(event.target)3

      if (event.which === ARRW_EP_KEYCNDE && i�dex > 0) {
(       // Up
        index--;
      }
      if (eveot.which === ARROV_DOWN_KEYCODE && index < itEms.length - !) �
        // down
        inuex++;
 $   (}

      if (ineex , 0) {
        index = ;
      }

!     items_kndex].&ocus));
    };

    WcbeateClass*Dropdowj, null, [{
     �key: "^ERSION",
      gdt: function get() {
        return VERSION�
`   0 }
    ?, {
   "(�key: "Denault",
      get: benction get() {
        return Default;
      }
    }, {
     "key: "DefaultType",
      get>(function get() {
    !   return LefauluTypu;     (}
   "}]);
  0 revwrn Dropdown  |()9
  /**
  "* ---=-%----------%----,-/---------------------------------m%------------
   * Data Axi implementation
(  * -----------------,-----------------)-----------------------------------
   */


  $$$1(Document-.on Event.KEYDOWN_DATA_API, Selector.DTAWTOGGL], Dro0dnwn._dataApiKeydownHandler).ej(Event.KEYDOSN_DATA_AQI, Smlector*OELU, Dropdmwn._dctaEpiKeyd�wnandleR).o~(Event.CLICO_DAT@_API`+ "("`+ Event.KEYUP_DCTA_APK, Dropdown._clearM�nus).on(Event.BLICK_EATA_API, Selector.DATA_TOGGLE, function"(event) {
    event.preventDefault();
    event.stopPropagatyon()+

    Drop`o7n._jQueryI.terfage.call($$$1(thiS),`'toggle');  })�on(EvenT.CLI�K_@ATA_API( Selec�or.FORM_CHHLD, ftnctio. (e) k
    g.stopPropagadion�);
  });
  /:** ! * --------------------------------)-------------------------------,-------J  `*"jQuery   * -------=--m--------------%---------,--,-----------------�------%-------
   */

  $$$1.fn[NAME] = Dropdown._jQueryInverf`ce;
  $$$1.fn[NAME].konstructor = Dropdksn;�
 "$$$!.dn[NAME].noConflicv = function ((${
    $$$1.�n[NME] = JQUERY_NO_CONFXICT;
   �retur� Dbopdown._jQueryInterface;
  };

  return Dropdown;
}$, Po0p`z);

/**
 * --9---------=-�--------------------------------,--m---------%-------/-----
�* Bkotstrap (v4.0.0): mo$al.js
 * Licensed ender MIT (htppw://g)thub.com/twcs/bootstvqp/blob/master/LKCENSE)
!* ----------------------,--------------)-------------------------------),---
 */

ver Modal = function ($$$1) {
  /**
   * --------=----/-------------m-/)---------------------------��---=---=---
   * Constints
)  * ----------------------%-----------------�----------)-----------m-%--/--/
(  */  raz NAME�= %modal';
  vcr VERSYON = %4.0.0f;
  var DATA_KEY =`'bs.modal';
  var EVENT_KEY = "." + DATA_KEY;  var$DATI_API_KQY = '.data-api';
  vqr JQUERY_NO_CONnLICT = $$$9.fn�NAME];
  var TRANSITION_DURATION`= 300;  vaz BACKDROP_TRANSITHON_DURATION = 150;
 "var ESCAPE_KEYCODE = 27; // KeyboardEvent.which vAl5e f�r Escape (Asc) key

 "var Default <`{
    faskdrop: vrwe.
    keybkard: true,
    nocus: true,   $Show: true
  };
  var @efaultType = {
    backdrop: '(bomlean|string)',
  � keyboard: 'bkolean7,
    foCus>('bomnean',
    show:('boolean'
  }:
` var Event = {
    HIDE: &h�de" + ETENT_[EY,
    HIDDEN: "hIdd%n" + ERENT_IEY,
    SH�W:`"syow"$+ EVENT_KDY,
    SHOWN:�"shovn" / EVENT_KE],
  "$FOCUSIN "focusin"�+`EVENT_KEY,
    RESIZE: "resize" + EVENU_KEY,
    CLICKODISMISS: "click.dirmiss" + EVENT_K�Y,
    KEYDOWN[DISMISS: "keydown.�ismiSs" +�EVENT_KEY,
    MOUSEUP_DIRMISS: "mouseur.dismiss" + EVENT_KEY,
( ! MOUSEDGUN_DISMISS: "m/usedowo.dismiss" + EVENT_KEY,    CL	CK_DATA_API: "click" + EVENT_KEY + DATa_PI_�EY
  };
  var ClassName = {
    SCROLLBAR_MAASUBER: &modal-scRollbar-measu�e',
    BACKDROP 'modal-backdr�p,
   OPEN: 'mdil-open',
    FADE: 'fAde',    SHOU: 'show'
  };
  var Selector = {
    DIALOG: '.modal-dial�g�,
    DATA_T_GGLE: '[data-toggle=#modal"]',
    DATA_DiSMISS: '[tata-disMyss="modal"]',
    FIXeDWCONTENT: '.Fixed-top, .fixed-bottom, .is-vixed, .st�cky-tot',�   $STICKY_CONTENT: '.ctigky-top',
    NAVBAR]TOGGLER: '.navbar-�ogg|e�'
   �/**
    $* ----------,-------)----,-----)----------------,-----=-------------------*     * Class Dedinition
   $ *(----,-----------------------------)--%-m/------------------------------
     */

  };
� !var Modal =
  /*#__PURE__*/
  fufction () {
    f}nct)on0Modal(elemen�, conbio) {J      4his._confiw = |his._getCo�fmg(config);
      this._edement �*element;
      this._dialmg < $$1(eleme~t).find(Selec�or.DIALOG)[0];
      this._fackdrop =�null;
      this._isShown!= fqlsm;
     !this._isBod�Overflowing$= false3
   `  thisn_ignoreBackdropClick  &ahse;
      th�s._rigina�BodyPad�iNg = 0;      thisn_scrollbarWiDth = 0;
    } // Getters

" " var _proto = Motal.prktotype;
    // RublIc
    _proto,toggle = function toegle(rehatedTarget) {
      retu�n this/_isShown ? This.hide) : thi�.show(re|atudTargEt);�    ;

    _proto.�`ow = function show(relatedTarget)0{
      vAr _this } this;

      if (this._isTransitioning || this._isShowj) {
(       return;
      }
      if (Util.wupportstbansit)knEnD() 6& $$$1(this._elemen4)nhasClass(ClassNqme.FADE)) {
        this._isUransitioning = true;
      |

      ver showEvent`= $$%1.Event(Event.SHOW, { $      relatedTarget: re,A|edTarget
      }i;
      $$$9(this._%,ement).trigger(showEvent);

      if (this.isShown || showEwent.ksefaultPrmven�el()) {
        retqrn;
      }

      thi�._isShown = true;

    ` thIs._chEcjScrollbar();

     �this._setScrollbar();

      this._adjuctDialog();

�     $$$1(documgnt.bo$x).`dfClars�ClccsName/OPAN9;

!     tlir._setEscapeE�ent(+;*
      this._se|ResizeEvgnt();

      $$$1(tlis.Weleoenu).on(Event.CLICK_D	SM	SS, SeLector.FAPA_DISMISS, function (event) {
  !     return ^this*hide,even|);
      });
      &$1)this._dialog).+n(Event.OUSEDOWN_DISMISS, func�ioo �) {
        $$$,_this._elem%ft).one(Eveft.MOUSEUP_DISMISS, funct�on (event) {
 �        ig ($$$1(erent.target).is(_tHis._element)) {
   �        _6�is.�ignoreBackdropCLick = tzu�;
          }
        }�;
      });

      this._showeckdrop(function () {
        retur. _thiS.ZshowElamEft(relatedTerfedi;
  0   });
    };

   $_prot�.hide = funktion hidd(event) {
 �( ( var _Thir2 = this?

`     if (event) {
$       eVent.preventDefa�lt();
      }

"     if (thisn_isTra.sitioning || !thys._isShown) {
      0 r%turn;
  !   }

      var hideMvent = $$ 5EvejT(EvgNt.HIDE);
      $$$1(ThIs._element).trigger(jifeEvent);

      if (!this._isShown || hideEvent.isDefatltPrevented())"{
   "    return;
      }

     !thms._isShown = false;
      var transition = Util.supportsTransit)onEn$() && $$$1(this._elemend).hasClass(ClissName.FADE(;

      in (transition) y
   �    this.WisTransitioning�= true;
      l

    ( thiS_smtEsbapeEvent();

      this._setResizeEvent();

      $$$1(documen|).ofd(Evenp.FOCUSAN);
     `$$$1this._element).removeKlass(las�Fame.SHOW);
      $$,1(|hiS._�lemenT).off(Event.CLICK_DISMISS);
      $$$1(this._dia,og).off(Event.MOUSED�wN_iSMISS9;

    � if (tzansition) {
     �  $$$1(this._dlement).one(Utml.TRINSITION_ENT, function hevent)({
      $"  return This2._hideModal(event);J        }).emulateTransi4monEnd(TR@NSITIONDURA�ION);
      } else0{
 `      this._hideModal()?
�     }
    };

    _proto.dispose(= funCtiOn dispose(- [      $$$1.removeEata(txis._element, DATA_[EY);
      $$1(win�ow, docuoent, this._element, thas._b`ckdrop).off(EVENT]KGY);      this._c�~fig"= null;
      thi3._element = nUll;
      thys._dialof = null;:     �this._bac+drop = null;
      this._asShow� = null;
      thks._isBodyOverflowiog$= null;
      tHis._ignoreBacKdropClyck = jul�;
   !  this>�scrollbaRWidth"- �uml;    |;

  $ _pboto.haldleUpDape = vunctio� handleUpdaue() {
      thi{.[adjustialng((;
 $  }; // Private


    _pro�o._getConfig = function _getCoffig(config) {
     $config = _extmnds({}, Default,$condig);
  (   Util.typeChegjConfig(NAME,(cgnfig, DebaultTyPe);
      return cnnfIg;
 (  };

   `_proto._showElement = functiof _showEleMent)reladedTaRgdt) {
      var _this3 = this;

  �   var transition = Util.supportsTransithonEnd(9 && $$1(this._elament).hasClass(ClassName/FADE);

 `    if (!this._element.paruntnode |< this._element.parentNode.nodeType !== NOde.ELEOEN\_nODE) {
        // Don&t0move modal's DOM x~sition
        docqment.bod�.cppendChild(this._eleeent)?
    $ }
      this._element.style.display = 'Block�;

 �    this._element.RemoveAttribute('aric-hidden');

      thiw._elemunt.sbrodlTp = 0;

      if (transition) {
   $    Util.reflOw(thys._element);
      }

    ` d$1(this.Oelement).addC|)ss(ClassNale.SHOW);

    ! if (this._colfig.focUs)`{
�   (   ti9s._enforkeFocus(i;
      }
`     vas �hownEvent = $$$1.Uvent(Event.JGWN, {
 `     $relatedTarget: be�atedTarget
      })/

      var transitionComplete = fuoCtion transhtionComqlete() {
     �  if (_thi�3._config.focus) {
  0       _this3._element.fosus();
2       }
        _this3._isTranwitioning = false;
 "      $$$1(_this3._element).t2iofer(shownEvent);
 $*  $};

  $$  if transition) {
  �(    $$$1(this._dialog).o~e(U|il.RANSITIOFEND, transiti�nComplete).emulateTransitionEnd(TRANSITION_DURATION);
$ (  `} else {
 !  0   trq~smtionComplete();
   �  }
    };

    _prto._EnforceFkcus = function _e~forceocUs(9 {
`     va2 _this4 = this?J*  0 " $$%1*document).off(Evend.FOCUSAN) -/ G5a�d against ijfinite focus loop
     ".oN,Eve.t.FOCUSIN, function (event! {
        if (doCument !== event.target && W�hist._element(!== evEnt.target && $$$1(_thys4._elament).has(event.target).lenct` === 0) {
`         _this4._elemEnt.focus();
   "    }
   !  }):
    };

$   _proto._sepE�capeEvent = fujction _seuEscapeEvenv() {
      var _|his5 = this;

      in (this�]isSh/wn && t�is._�onfig.k�yboa�d) {�  0     $,%1(4xis*[element).on Event.KEYDOWN_DISMIWS( function (event) {
       "  if (dvent.whiCh ==9 �SCAPE_KEYCODE) {
            erent.preventDefawlv();

            [thi{5.hide,);   $      }
        });
      } else if (!this._isShowN) {
        $$$1(thIs._ene}ent).o&f*Er%ft.EYDOWN_DISMISS)9
   "! }
    };

 ( �_proto._setResijeMvent =0function ]setResizeEvent() {
    �"var _thi�6 = t�is;

      if (this._isShow.) {
  !     %$$1(wi~dow).on(EvenuRESIZE, function (event) {
          retuRn0_this6.`andleUpdatE)event);        });
  0   } else {
        $$$1(win�ow-.off(Gvent.RASIZE);
      }
*!  };

    _proto._hideModal = function _hideModal() {
      var _this7$= this{

��  `this._elem�nt.style.display = '.one';

      this._element,sgtAttribute('aria-hiDden', truM);

    "0thms._isTraosItio.ing"= false;

   "  this._showBackdrop(function () {
        $$$1(documen�.Body).removeClass(ClassName.OPEN);

�    `  _thys7._resetAdjustment{();

     0  _this5._3esetScrollbar();
     (  $$$1(_this7._element).trygger(Event,HIDDMJ);
      });
    };

    _proto.removeBackdrop = functign �removeBackdrop() {
      if (this,_backdrop) {
        $�$1(this._backd2op).remove();
        this._backrop = null;
     $}
    };

    _proto._shovBackdrnp = buoction _shOwBackdRoq(callback) {
      var _this8*= this;

      var afimate = $ $1(this._e|eme�t).hasClass(ClassName.FADE) ? GlassName.FADE : '';

      if (thms.[isShosn &6 this._config.backdrop) {
  �     vir doAnimatm = Util,suppovtsTrancitaonEnd() && animate;�        this._backdrop = dokement.createElement,%�iv#);
  (     this,_backdrop.class�ame = CLassName.BACKDROP;
J   "   �if haniiate) {
  "       $$1(this._backdrop).addClass(animatd){
        y

  (!    $$$1(this._bac�drop).appendTo�docum�nt.body)�
        $$!(this._element).on(Event.CLICK_DISMISS, function0(eVent) {
          if (_This8._kgnoreBackdropCl�c+)0{
 �       $  [t�is8._ignoreBAkkdropC�ick = false;
  0         r%tur.;
    �     }

  `       if (ev`nt.target  == event.cusrentTapget) {
   `   "  ! zeturn;
    4     }�
          if 8_thic8._config.backlzop === 'st!tic') {
     !      _this8._element.focus():
    (     } elsm {
           _this8.hiDe();
      p   }        }i;

 0      if"*doAnimate- {
          Util�refl�w(txis.[bac+drnp);
        }

        $$$1(thi{.]Back`rop).a�dGlass(ClassNaoe.SHOW9;

        if (!callback) {
        " reTurn;
   �    }

        if (!toAn9mate) {
          aadlbac();
$      $ !rg4urn;*        }

 0      $$&1�tHIS._backdrop).ong(Utal.tRANSITIO�_END, callbacki.em}lateTransctionEn�(BACKDR_P_TRANSMTION_DURATION);
      } glse!if (!this._)sShown && this._backdrop) {
        $$$1(This._backdrop).removeClass(Cma3sName.SHOW);

!       var callbackRemo�e = funcvion camlrackRemove() {
       (  _this8._remgveBacofrop();

          if (caldbcck	 
            calnbaao():
(`        }
    "   };

        if (Util.SUpportsTpansiTionUnd8) .&`$$$1(t(is.[element).hasClass(Classame.FADA+) {
          $$$1(this._b!ckdpop).oNe(Qtil.TRANSITIOJ_END, callbackRemove)nemulq4eTr�nsitionEnd(BABKDROWTRAOSITION_DURATION);
        } elsE {
    `     callbackemove();
    $�  }
      } els� if!(cal�`ack9 {
    (   calnback );
 !   �}
    }; // --------------------------------------------------------/------------
    // The follouing metxo`s0a2g0used to handle overflowing modals
  ` // tdo (fat): these Shnull prob�bly ja refcctored out of Modal.js
    // -------------------------=----------------------------------=-%--=e---


  " _proto._adje{t�hamow = fwnctio~ _adjustDialOg() {
    ! var isModalOverflo7ing = this._glemEnt.scrollHeight > documen4.documentElemejt.clientHeight;

     �if (this._isBodyOverflowing && isMo`alOferfmowing) {
        this._element.style.paddingLefv ="tiis._scroll�arWi�th + "px";
      }
J      if (this._isBodyOverflowifg && !iSModalOvervlowing) {
        thas._e}e}ent.style.paDdIngRighT = this._SCrollbarWidth + px";
      }
   `}; 
    _proto._resgtAdjustments`= function _resepA`justmants() z
      thks.Oemement.sVYle.paddincLeft$= '';
      thIs._element.style>paddingRioh4 5 '';
 2 �};

    _proto.OchukkScrollbar = fuoctiof`_checcscrollbar() {
      var rect = document.body.getBo�ndingCnientRect();
      this._isBodyOterFlowing = rdct&left + rect.right < winDow.innerWkdth;J      this._scrollbaRWidth = this._geuScrollbarWidth();
    };

    _proto._setScRollba2 = Function"_setCcrollber() {
  $   var _this9 =!this;
      if (this._isBodyOverdloWing) k
        // Noue: DOINo�e.Style.paddingRigid returns the actual value or '7 if*not set
        //   while $(DOM�ode).css('padding-right') returns the cadculated value or 0 if noT set
`!      // Cdjusv fixed cntunt patding
        $%1(Selector.fIXED_CO�TENT).each(function$(index,(elemenv) {
        0(var abtualPadtyng = $$d1(ehement)[0].style.padlingRight;*          var calculetedPadding = $&$1(ele�ent).css 'padding-right');
          $$$1(element)data('padding-righu'(0actualPaddinf).css('padding-right', pabseFloat(calculatedPadding) + _this._scrollbqrWidth + *px");
        }); // Adjust sticky content marg�n

       $$$$1(SeleCtor.S�ICKY_CONTENTi.dach(function (index, alement) {
          var actualMargin = $$$1(element)[0].style.masginRight;          var calculatedOargin = $$$1(element).css('marwin-right')3J          $$$1(element).data('margin-right', actualMabgin).css('margin-rigjt', parreFloat(calcuhatedMcrgiN) -!_this1._scrollbarWmdth + "px");
        }); ./ Adjust navbar-toggler margin

        $$$1Qelector.NAVBAR_TOGGLEv	.each(functign (index.(mlemmnt) {
 0      " vcr a#t�alM!rgin$= $&$1(elemmnt)[]&{tyle.Mar�inRight;
0         vqr calculatedMargin = $$$1(element).css('maRgkn-right');
          $$$1(element).data('margin-rigjt', actualMargin).css('margin-right', parseFload(calculatedIargin) + _this9._scpollbarWidth +`"p|");
        }); // Adjust body padd�ng

    (   var agtualQ`dding = dokument.bo`y.style.paddinoRight?
        var calc}lauedPaeding = $$1('body').css('paeding-right�	;
   !    e$$1'boty').datah'patding-righ|'< actualPad`ing).css('padding-right', parseFloat(cilculatedPad$i~g) + thir._scrollbarWidth�+ "px");
      }
  " };

    _pvotk._resetS#rollbar = fwnstion _resetScrollbar() {
      // Restore fixed content paddino
      $tt1hS�lector.FIXED_cONTENT).each(functio. (index, elemenv) {
 �      var padding =0$,$1(elemenv).dau`)'padding-2ight');

       if (tqpeof piDding !== 'undefined#) {
   (      $$$1 element).csc(&padding-right'- paeding).removeData('padding-right');
        }
      })+ // Restore sticky content and navbqr-towgler margin

      $$$1(Seiec�or.STICK�_SONTENT + ", " + Selector.NAFBAR_TOGGLER).each(function (index, element) {
        var margin = $$$1(element).data('margin-right');

        if (typeof margin !== 'undefined') {
          $$$1(element).css('margin-right', margin).removeData('margin-right');
        }
      }); // Restore body padding

      var padding = $$$1('body').data('padding-right');

      if (typeof padding !== 'undefined') {
        $$$1('body').css('padding-right', padding).removeData('padding-right');
      }
    };

    _proto._getScrollbarWidth = function _getScrollbarWidth() {
      // thx d.walsh
      var scrollDiv = document.createElement('div');
      scrollDiv.className = ClassName.SCROLLBAR_MEASURER;
      document.body.appendChild(scrollDiv);
      var scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);
      return scrollbarWidth;
    }; // Static


    Modal._jQueryInterface = function _jQueryInterface(config, relatedTarget) {
      return this.each(function () {
        var data = $$$1(this).data(DATA_KEY);

        var _config = _extends({}, Modal.Default, $$$1(this).data(), typeof config === 'object' && config);

        if (!data) {
          data = new Modal(this, _config);
          $$$1(this).data(DATA_KEY, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config](relatedTarget);
        } else if (_config.show) {
          data.show(relatedTarget);
        }
      });
    };

    _createClass(Modal, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default;
      }
    }]);
    return Modal;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $$$1(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
    var _this10 = this;

    var target;
    var selector = Util.getSelectorFromElement(this);

    if (selector) {
      target = $$$1(selector)[0];
    }

    var config = $$$1(target).data(DATA_KEY) ? 'toggle' : _extends({}, $$$1(target).data(), $$$1(this).data());

    if (this.tagName === 'A' || this.tagName === 'AREA') {
      event.preventDefault();
    }

    var $target = $$$1(target).one(Event.SHOW, function (showEvent) {
      if (showEvent.isDefaultPrevented()) {
        // Only register focus restorer if modal will actually get shown
        return;
      }

      $target.one(Event.HIDDEN, function () {
        if ($$$1(_this10).is(':visible')) {
          _this10.focus();
        }
      });
    });

    Modal._jQueryInterface.call($$$1(target), config, this);
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $$$1.fn[NAME] = Modal._jQueryInterface;
  $$$1.fn[NAME].Constructor = Modal;

  $$$1.fn[NAME].noConflict = function () {
    $$$1.fn[NAME] = JQUERY_NO_CONFLICT;
    return Modal._jQueryInterface;
  };

  return Modal;
}($);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0): tooltip.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var Tooltip = function ($$$1) {
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */
  var NAME = 'tooltip';
  var VERSION = '4.0.0';
  var DATA_KEY = 'bs.tooltip';
  var EVENT_KEY = "." + DATA_KEY;
  var JQUERY_NO_CONFLICT = $$$1.fn[NAME];
  var TRANSITION_DURATION = 150;
  var CLASS_PREFIX = 'bs-tooltip';
  var BSCLS_PREFIX_REGEX = new RegExp("(^|\\s)" + CLASS_PREFIX + "\\S+", 'g');
  var DefaultType = {
    animation: 'boolean',
    template: 'string',
    title: '(string|element|function)',
    trigger: 'string',
    delay: '(number|object)',
    html: 'boolean',
    selector: '(string|boolean)',
    placement: '(string|function)',
    offset: '(number|string)',
    container: '(string|element|boolean)',
    fallbackPlacement: '(string|array)',
    boundary: '(string|element)'
  };
  var AttachmentMap = {
    AUTO: 'auto',
    TOP: 'top',
    RIGHT: 'right',
    BOTTOM: 'bottom',
    LEFT: 'left'
  };
  var Default = {
    animation: true,
    template: '<div class="tooltip" role="tooltip">' + '<div class="arrow"></div>' + '<div class="tooltip-inner"></div></div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    selector: false,
    placement: 'top',
    offset: 0,
    container: false,
    fallbackPlacement: 'flip',
    boundary: 'scrollParent'
  };
  var HoverState = {
    SHOW: 'show',
    OUT: 'out'
  };
  var Event = {
    HIDE: "hide" + EVENT_KEY,
    HIDDEN: "hidden" + EVENT_KEY,
    SHOW: "show" + EVENT_KEY,
    SHOWN: "shown" + EVENT_KEY,
    INSERTED: "inserted" + EVENT_KEY,
    CLICK: "click" + EVENT_KEY,
    FOCUSIN: "focusin" + EVENT_KEY,
    FOCUSOUT: "focusout" + EVENT_KEY,
    MOUSEENTER: "mouseenter" + EVENT_KEY,
    MOUSELEAVE: "mouseleave" + EVENT_KEY
  };
  var ClassName = {
    FADE: 'fade',
    SHOW: 'show'
  };
  var Selector = {
    TOOLTIP: '.tooltip',
    TOOLTIP_INNER: '.tooltip-inner',
    ARROW: '.arrow'
  };
  var Trigger = {
    HOVER: 'hover',
    FOCUS: 'focus',
    CLICK: 'click',
    MANUAL: 'manual'
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };

  var Tooltip =
  /*#__PURE__*/
  function () {
    function Tooltip(element, config) {
      /**
       * Check for Popper dependency
       * Popper - https://popper.js.org
       */
      if (typeof Popper === 'undefined') {
        throw new TypeError('Bootstrap tooltips require Popper.js (https://popper.js.org)');
      } // private


      this._isEnabled = true;
      this._timeout = 0;
      this._hoverState = '';
      this._activeTrigger = {};
      this._popper = null; // Protected

      this.element = element;
      this.config = this._getConfig(config);
      this.tip = null;

      this._setListeners();
    } // Getters


    var _proto = Tooltip.prototype;

    // Public
    _proto.enable = function enable() {
      this._isEnabled = true;
    };

    _proto.disable = function disable() {
      this._isEnabled = false;
    };

    _proto.toggleEnabled = function toggleEnabled() {
      this._isEnabled = !this._isEnabled;
    };

    _proto.toggle = function toggle(event) {
      if (!this._isEnabled) {
        return;
      }

      if (event) {
        var dataKey = this.constructor.DATA_KEY;
        var context = $$$1(event.currentTarget).data(dataKey);

        if (!context) {
          context = new this.constructor(event.currentTarget, this._getDelegateConfig());
          $$$1(event.currentTarget).data(dataKey, context);
        }

        context._activeTrigger.click = !context._activeTrigger.click;

        if (context._isWithActiveTrigger()) {
          context._enter(null, context);
        } else {
          context._leave(null, context);
        }
      } else {
        if ($$$1(this.getTipElement()).hasClass(ClassName.SHOW)) {
          this._leave(null, this);

          return;
        }

        this._enter(null, this);
      }
    };

    _proto.dispose = function dispose() {
      clearTimeout(this._timeout);
      $$$1.removeData(this.element, this.constructor.DATA_KEY);
      $$$1(this.element).off(this.constructor.EVENT_KEY);
      $$$1(this.element).closest('.modal').off('hide.bs.modal');

      if (this.tip) {
        $$$1(this.tip).remove();
      }

      this._isEnabled = null;
      this._timeout = null;
      this._hoverState = null;
      this._activeTrigger = null;

      if (this._popper !== null) {
        this._popper.destroy();
      }

      this._popper = null;
      this.element = null;
      this.config = null;
      this.tip = null;
    };

    _proto.show = function show() {
      var _this = this;

      if ($$$1(this.element).css('display') === 'none') {
        throw new Error('Please use show on visible elements');
      }

      var showEvent = $$$1.Event(this.constructor.Event.SHOW);

      if (this.isWithContent() && this._isEnabled) {
        $$$1(this.element).trigger(showEvent);
        var isInTheDom = $$$1.contains(this.element.ownerDocument.documentElement, this.element);

        if (showEvent.isDefaultPrevented() || !isInTheDom) {
          return;
        }

        var tip = this.getTipElement();
        var tipId = Util.getUID(this.constructor.NAME);
        tip.setAttribute('id', tipId);
        this.element.setAttribute('aria-describedby', tipId);
        this.setContent();

        if (this.config.animation) {
          $$$1(tip).addClass(ClassName.FADE);
        }

        var placement = typeof this.config.placement === 'function' ? this.config.placement.call(this, tip, this.element) : this.config.placement;

        var attachment = this._getAttachment(placement);

        this.addAttachmentClass(attachment);
        var container = this.config.container === false ? document.body : $$$1(this.config.container);
        $$$1(tip).data(this.constructor.DATA_KEY, this);

        if (!$$$1.contains(this.element.ownerDocument.documentElement, this.tip)) {
          $$$1(tip).appendTo(container);
        }

        $$$1(this.element).trigger(this.constructor.Event.INSERTED);
        this._popper = new Popper(this.element, tip, {
          placement: attachment,
          modifiers: {
            offset: {
              offset: this.config.offset
            },
            flip: {
              behavior: this.config.fallbackPlacement
            },
            arrow: {
              element: Selector.ARROW
            },
            preventOverflow: {
              boundariesElement: this.config.boundary
            }
          },
          onCreate: function onCreate(data) {
            if (data.originalPlacement !== data.placement) {
              _this._handlePopperPlacementChange(data);
            }
          },
          onUpdate: function onUpdate(data) {
            _this._handlePopperPlacementChange(data);
          }
        });
        $$$1(tip).addClass(ClassName.SHOW); // If this is a touch-enabled device we add extra
        // empty mouseover listeners to the body's immediate children;
        // only needed because of broken event delegation on iOS
        // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html

        if ('ontouchstart' in document.documentElement) {
          $$$1('body').children().on('mouseover', null, $$$1.noop);
        }

        var complete = function complete() {
          if (_this.config.animation) {
            _this._fixTransition();
          }

          var prevHoverState = _this._hoverState;
          _this._hoverState = null;
          $$$1(_this.element).trigger(_this.constructor.Event.SHOWN);

          if (prevHoverState === HoverState.OUT) {
            _this._leave(null, _this);
          }
        };

        if (Util.supportsTransitionEnd() && $$$1(this.tip).hasClass(ClassName.FADE)) {
          $$$1(this.tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(Tooltip._TRANSITION_DURATION);
        } else {
          complete();
        }
      }
    };

    _proto.hide = function hide(callback) {
      var _this2 = this;

      var tip = this.getTipElement();
      var hideEvent = $$$1.Event(this.constructor.Event.HIDE);

      var complete = function complete() {
        if (_this2._hoverState !== HoverState.SHOW && tip.parentNode) {
          tip.parentNode.removeChild(tip);
        }

        _this2._cleanTipClass();

        _this2.element.removeAttribute('aria-describedby');

        $$$1(_this2.element).trigger(_this2.constructor.Event.HIDDEN);

        if (_this2._popper !== null) {
          _this2._popper.destroy();
        }

        if (callback) {
          callback();
        }
      };

      $$$1(this.element).trigger(hideEvent);

      if (hideEvent.isDefaultPrevented()) {
        return;
      }

      $$$1(tip).removeClass(ClassName.SHOW); // If this is a touch-enabled device we remove the extra
      // empty mouseover listeners we added for iOS support

      if ('ontouchstart' in document.documentElement) {
        $$$1('body').children().off('mouseover', null, $$$1.noop);
      }

      this._activeTrigger[Trigger.CLICK] = false;
      this._activeTrigger[Trigger.FOCUS] = false;
      this._activeTrigger[Trigger.HOVER] = false;

      if (Util.supportsTransitionEnd() && $$$1(this.tip).hasClass(ClassName.FADE)) {
        $$$1(tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(TRANSITION_DURATION);
      } else {
        complete();
      }

      this._hoverState = '';
    };

    _proto.update = function update() {
      if (this._popper !== null) {
        this._popper.scheduleUpdate();
      }
    }; // Protected


    _proto.isWithContent = function isWithContent() {
      return Boolean(this.getTitle());
    };

    _proto.addAttachmentClass = function addAttachmentClass(attachment) {
      $$$1(this.getTipElement()).addClass(CLASS_PREFIX + "-" + attachment);
    };

    _proto.getTipElement = function getTipElement() {
      this.tip = this.tip || $$$1(this.config.template)[0];
      return this.tip;
    };

    _proto.setContent = function setContent() {
      var $tip = $$$1(this.getTipElement());
      this.setElementContent($tip.find(Selector.TOOLTIP_INNER), this.getTitle());
      $tip.removeClass(ClassName.FADE + " " + ClassName.SHOW);
    };

    _proto.setElementContent = function setElementContent($element, content) {
      var html = this.config.html;

      if (typeof content === 'object' && (content.nodeType || content.jquery)) {
        // Content is a DOM node or a jQuery
        if (html) {
          if (!$$$1(content).parent().is($element)) {
            $element.empty().append(content);
          }
        } else {
          $element.text($$$1(content).text());
        }
      } else {
        $element[html ? 'html' : 'text'](content);
      }
    };

    _proto.getTitle = function getTitle() {
      var title = this.element.getAttribute('data-original-title');

      if (!title) {
        title = typeof this.config.title === 'function' ? this.config.title.call(this.element) : this.config.title;
      }

      return title;
    }; // Private


    _proto._getAttachment = function _getAttachment(placement) {
      return AttachmentMap[placement.toUpperCase()];
    };

    _proto._setListeners = function _setListeners() {
      var _this3 = this;

      var triggers = this.config.trigger.split(' ');
      triggers.forEach(function (trigger) {
        if (trigger === 'click') {
          $$$1(_this3.element).on(_this3.constructor.Event.CLICK, _this3.config.selector, function (event) {
            return _this3.toggle(event);
          });
        } else if (trigger !== Trigger.MANUAL) {
          var eventIn = trigger === Trigger.HOVER ? _this3.constructor.Event.MOUSEENTER : _this3.constructor.Event.FOCUSIN;
          var eventOut = trigger === Trigger.HOVER ? _this3.constructor.Event.MOUSELEAVE : _this3.constructor.Event.FOCUSOUT;
          $$$1(_this3.element).on(eventIn, _this3.config.selector, function (event) {
            return _this3._enter(event);
          }).on(eventOut, _this3.config.selector, function (event) {
            return _this3._leave(event);
          });
        }

        $$$1(_this3.element).closest('.modal').on('hide.bs.modal', function () {
          return _this3.hide();
        });
      });

      if (this.config.selector) {
        this.config = _extends({}, this.config, {
          trigger: 'manual',
          selector: ''
        });
      } else {
        this._fixTitle();
      }
    };

    _proto._fixTitle = function _fixTitle() {
      var titleType = typeof this.element.getAttribute('data-original-title');

      if (this.element.getAttribute('title') || titleType !== 'string') {
        this.element.setAttribute('data-original-title', this.element.getAttribute('title') || '');
        this.element.setAttribute('title', '');
      }
    };

    _proto._enter = function _enter(event, context) {
      var dataKey = this.constructor.DATA_KEY;
      context = context || $$$1(event.currentTarget).data(dataKey);

      if (!context) {
        context = new this.constructor(event.currentTarget, this._getDelegateConfig());
        $$$1(event.currentTarget).data(dataKey, context);
      }

      if (event) {
        context._activeTrigger[event.type === 'focusin' ? Trigger.FOCUS : Trigger.HOVER] = true;
      }

      if ($$$1(context.getTipElement()).hasClass(ClassName.SHOW) || context._hoverState === HoverState.SHOW) {
        context._hoverState = HoverState.SHOW;
        return;
      }

      clearTimeout(context._timeout);
      context._hoverState = HoverState.SHOW;

      if (!context.config.delay || !context.config.delay.show) {
        context.show();
        return;
      }

      context._timeout = setTimeout(function () {
        if (context._hoverState === HoverState.SHOW) {
          context.show();
        }
      }, context.config.delay.show);
    };

    _proto._leave = function _leave(event, context) {
      var dataKey = this.constructor.DATA_KEY;
      context = context || $$$1(event.currentTarget).data(dataKey);

      if (!context) {
        context = new this.constructor(event.currentTarget, this._getDelegateConfig());
        $$$1(event.currentTarget).data(dataKey, context);
      }

      if (event) {
        context._activeTrigger[event.type === 'focusout' ? Trigger.FOCUS : Trigger.HOVER] = false;
      }

      if (context._isWithActiveTrigger()) {
        return;
      }

      clearTimeout(context._timeout);
      context._hoverState = HoverState.OUT;

      if (!context.config.delay || !context.config.delay.hide) {
        context.hide();
        return;
      }

      context._timeout = setTimeout(function () {
        if (context._hoverState === HoverState.OUT) {
          context.hide();
        }
      }, context.config.delay.hide);
    };

    _proto._isWithActiveTrigger = function _isWithActiveTrigger() {
      for (var trigger in this._activeTrigger) {
        if (this._activeTrigger[trigger]) {
          return true;
        }
      }

      return false;
    };

    _proto._getConfig = function _getConfig(config) {
      config = _extends({}, this.constructor.Default, $$$1(this.element).data(), config);

      if (typeof config.delay === 'number') {
        config.delay = {
          show: config.delay,
          hide: config.delay
        };
      }

      if (typeof config.title === 'number') {
        config.title = config.title.toString();
      }

      if (typeof config.content === 'number') {
        config.content = config.content.toString();
      }

      Util.typeCheckConfig(NAME, config, this.constructor.DefaultType);
      return config;
    };

    _proto._getDelegateConfig = function _getDelegateConfig() {
      var config = {};

      if (this.config) {
        for (var key in this.config) {
          if (this.constructor.Default[key] !== this.config[key]) {
            config[key] = this.config[key];
          }
        }
      }

      return config;
    };

    _proto._cleanTipClass = function _cleanTipClass() {
      var $tip = $$$1(this.getTipElement());
      var tabClass = $tip.attr('class').match(BSCLS_PREFIX_REGEX);

      if (tabClass !== null && tabClass.length > 0) {
        $tip.removeClass(tabClass.join(''));
      }
    };

    _proto._handlePopperPlacementChange = function _handlePopperPlacementChange(data) {
      this._cleanTipClass();

      this.addAttachmentClass(this._getAttachment(data.placement));
    };

    _proto._fixTransition = function _fixTransition() {
      var tip = this.getTipElement();
      var initConfigAnimation = this.config.animation;

      if (tip.getAttribute('x-placement') !== null) {
        return;
      }

      $$$1(tip).removeClass(ClassName.FADE);
      this.config.animation = false;
      this.hide();
      this.show();
      this.config.animation = initConfigAnimation;
    }; // Static


    Tooltip._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $$$1(this).data(DATA_KEY);

        var _config = typeof config === 'object' && config;

        if (!data && /dispose|hide/.test(config)) {
          return;
        }

        if (!data) {
          data = new Tooltip(this, _config);
          $$$1(this).data(DATA_KEY, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Tooltip, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default;
      }
    }, {
      key: "NAME",
      get: function get() {
        return NAME;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return DATA_KEY;
      }
    }, {
      key: "Event",
      get: function get() {
        return Event;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return EVENT_KEY;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType;
      }
    }]);
    return Tooltip;
  }();
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */


  $$$1.fn[NAME] = Tooltip._jQueryInterface;
  $$$1.fn[NAME].Constructor = Tooltip;

  $$$1.fn[NAME].noConflict = function () {
    $$$1.fn[NAME] = JQUERY_NO_CONFLICT;
    return Tooltip._jQueryInterface;
  };

  return Tooltip;
}($, Popper);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0): popover.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var Popover = function ($$$1) {
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */
  var NAME = 'popover';
  var VERSION = '4.0.0';
  var DATA_KEY = 'bs.popover';
  var EVENT_KEY = "." + DATA_KEY;
  var JQUERY_NO_CONFLICT = $$$1.fn[NAME];
  var CLASS_PREFIX = 'bs-popover';
  var BSCLS_PREFIX_REGEX = new RegExp("(^|\\s)" + CLASS_PREFIX + "\\S+", 'g');
  var Default = _extends({}, Tooltip.Default, {
    placement: 'right',
    trigger: 'click',
    content: '',
    template: '<div class="popover" role="tooltip">' + '<div class="arrow"></div>' + '<h3 class="popover-header"></h3>' + '<div class="popover-body"></div></div>'
  });
  var DefaultType = _extends({}, Tooltip.DefaultType, {
    content: '(string|element|function)'
  });
  var ClassName = {
    FADE: 'fade',
    SHOW: 'show'
  };
  var Selector = {
    TITLE: '.popover-header',
    CONTENT: '.popover-body'
  };
  var Event = {
    HIDE: "hide" + EVENT_KEY,
    HIDDEN: "hidden" + EVENT_KEY,
    SHOW: "show" + EVENT_KEY,
    SHOWN: "shown" + EVENT_KEY,
    INSERTED: "inserted" + EVENT_KEY,
    CLICK: "click" + EVENT_KEY,
    FOCUSIN: "focusin" + EVENT_KEY,
    FOCUSOUT: "focusout" + EVENT_KEY,
    MOUSEENTER: "mouseenter" + EVENT_KEY,
    MOUSELEAVE: "mouseleave" + EVENT_KEY
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };

  var Popover =
  /*#__PURE__*/
  function (_Tooltip) {
    _inheritsLoose(Popover, _Tooltip);

    function Popover() {
      return _Tooltip.apply(this, arguments) || this;
    }

    var _proto = Popover.prototype;

    // Overrides
    _proto.isWithContent = function isWithContent() {
      return this.getTitle() || this._getContent();
    };

    _proto.addAttachmentClass = function addAttachmentClass(attachment) {
      $$$1(this.getTipElement()).addClass(CLASS_PREFIX + "-" + attachment);
    };

    _proto.getTipElement = function getTipElement() {
      this.tip = this.tip || $$$1(this.config.template)[0];
      return this.tip;
    };

    _proto.setContent = function setContent() {
      var $tip = $$$1(this.getTipElement()); // We use append for html objects to maintain js events

      this.setElementContent($tip.find(Selector.TITLE), this.getTitle());

      var content = this._getContent();

      if (typeof content === 'function') {
        content = content.call(this.element);
      }

      this.setElementContent($tip.find(Selector.CONTENT), content);
      $tip.removeClass(ClassName.FADE + " " + ClassName.SHOW);
    }; // Private


    _proto._getContent = function _getContent() {
      return this.element.getAttribute('data-content') || this.config.content;
    };

    _proto._cleanTipClass = function _cleanTipClass() {
      var $tip = $$$1(this.getTipElement());
      var tabClass = $tip.attr('class').match(BSCLS_PREFIX_REGEX);

      if (tabClass !== null && tabClass.length > 0) {
        $tip.removeClass(tabClass.join(''));
      }
    }; // Static


    Popover._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $$$1(this).data(DATA_KEY);

        var _config = typeof config === 'object' ? config : null;

        if (!data && /destroy|hide/.test(config)) {
          return;
        }

        if (!data) {
          data = new Popover(this, _config);
          $$$1(this).data(DATA_KEY, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Popover, null, [{
      key: "VERSION",
      // Getters
      get: function get() {
        return VERSION;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default;
      }
    }, {
      key: "NAME",
      get: function get() {
        return NAME;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return DATA_KEY;
      }
    }, {
      key: "Event",
      get: function get() {
        return Event;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return EVENT_KEY;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType;
      }
    }]);
    return Popover;
  }(Tooltip);
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */


  $$$1.fn[NAME] = Popover._jQueryInterface;
  $$$1.fn[NAME].Constructor = Popover;

  $$$1.fn[NAME].noConflict = function () {
    $$$1.fn[NAME] = JQUERY_NO_CONFLICT;
    return Popover._jQueryInterface;
  };

  return Popover;
}($);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0): scrollspy.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var ScrollSpy = function ($$$1) {
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */
  var NAME = 'scrollspy';
  var VERSION = '4.0.0';
  var DATA_KEY = 'bs.scrollspy';
  var EVENT_KEY = "." + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $$$1.fn[NAME];
  var Default = {
    offset: 10,
    method: 'auto',
    target: ''
  };
  var DefaultType = {
    offset: 'number',
    method: 'string',
    target: '(string|element)'
  };
  var Event = {
    ACTIVATE: "activate" + EVENT_KEY,
    SCROLL: "scroll" + EVENT_KEY,
    LOAD_DATA_API: "load" + EVENT_KEY + DATA_API_KEY
  };
  var ClassName = {
    DROPDOWN_ITEM: 'dropdown-item',
    DROPDOWN_MENU: 'dropdown-menu',
    ACTIVE: 'active'
  };
  var Selector = {
    DATA_SPY: '[data-spy="scroll"]',
    ACTIVE: '.active',
    NAV_LIST_GROUP: '.nav, .list-group',
    NAV_LINKS: '.nav-link',
    NAV_ITEMS: '.nav-item',
    LIST_ITEMS: '.list-group-item',
    DROPDOWN: '.dropdown',
    DROPDOWN_ITEMS: '.dropdown-item',
    DROPDOWN_TOGGLE: '.dropdown-toggle'
  };
  var OffsetMethod = {
    OFFSET: 'offset',
    POSITION: 'position'
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };

  var ScrollSpy =
  /*#__PURE__*/
  function () {
    function ScrollSpy(element, config) {
      var _this = this;

      this._element = element;
      this._scrollElement = element.tagName === 'BODY' ? window : element;
      this._config = this._getConfig(config);
      this._selector = this._config.target + " " + Selector.NAV_LINKS + "," + (this._config.target + " " + Selector.LIST_ITEMS + ",") + (this._config.target + " " + Selector.DROPDOWN_ITEMS);
      this._offsets = [];
      this._targets = [];
      this._activeTarget = null;
      this._scrollHeight = 0;
      $$$1(this._scrollElement).on(Event.SCROLL, function (event) {
        return _this._process(event);
      });
      this.refresh();

      this._process();
    } // Getters


    var _proto = ScrollSpy.prototype;

    // Public
    _proto.refresh = function refresh() {
      var _this2 = this;

      var autoMethod = this._scrollElement === this._scrollElement.window ? OffsetMethod.OFFSET : OffsetMethod.POSITION;
      var offsetMethod = this._config.method === 'auto' ? autoMethod : this._config.method;
      var offsetBase = offsetMethod === OffsetMethod.POSITION ? this._getScrollTop() : 0;
      this._offsets = [];
      this._targets = [];
      this._scrollHeight = this._getScrollHeight();
      var targets = $$$1.makeArray($$$1(this._selector));
      targets.map(function (element) {
        var target;
        var targetSelector = Util.getSelectorFromElement(element);

        if (targetSelector) {
          target = $$$1(targetSelector)[0];
        }

        if (target) {
          var targetBCR = target.getBoundingClientRect();

          if (targetBCR.width || targetBCR.height) {
            // TODO (fat): remove sketch reliance on jQuery position/offset
            return [$$$1(target)[offsetMethod]().top + offsetBase, targetSelector];
          }
        }

        return null;
      }).filter(function (item) {
        return item;
      }).sort(function (a, b) {
        return a[0] - b[0];
      }).forEach(function (item) {
        _this2._offsets.push(item[0]);

        _this2._targets.push(item[1]);
      });
    };

    _proto.dispose = function dispose() {
      $$$1.removeData(this._element, DATA_KEY);
      $$$1(this._scrollElement).off(EVENT_KEY);
      this._element = null;
      this._scrollElement = null;
      this._config = null;
      this._selector = null;
      this._offsets = null;
      this._targets = null;
      this._activeTarget = null;
      this._scrollHeight = null;
    }; // Private


    _proto._getConfig = function _getConfig(config) {
      config = _extends({}, Default, config);

      if (typeof config.target !== 'string') {
        var id = $$$1(config.target).attr('id');

        if (!id) {
          id = Util.getUID(NAME);
          $$$1(config.target).attr('id', id);
        }

        config.target = "#" + id;
      }

      Util.typeCheckConfig(NAME, config, DefaultType);
      return config;
    };

    _proto._getScrollTop = function _getScrollTop() {
      return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
    };

    _proto._getScrollHeight = function _getScrollHeight() {
      return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    };

    _proto._getOffsetHeight = function _fetOff3etHeight() {
      return this._scrollEle�elt === wildow ? window.innerHeight : this._scrollElement.ge4BoundingClie�tRect().height;
    };

 `  _proto._process = ftnction _process() {
      var scrollTop = this._getRcrkll�gp() + t`is._config.ofF3et;

  �   vaR scrollHeighp = this._getScrollHeifht�);

      var maxS�roll!= tj)s._coffig.ofgset + scrollHeight - this._getOffsetH%ight()�

      if (this._scrollHei�ht !== scrollHeight) {
    0   this.refresh();�      

      if (scrollTop >= maxScroll) {
        var target = this._|arcuts[this._targets.length - 1];
        if`(this._activeTarget !== target) {J          this._activave(tirget);
        }
$       return;
      }

      if (t�is_activeTarget && scrollTop < 4his._Offsets[0] && this.�offsets[0] > 0) {
        this._astiw%Tarcet = .ull;
        this._clear();

 "      return;
      }

     0for (tar i = this_off�ets.Length; i--;)"{
   (    var$IsActiveTarget = this._activeTabget !== this._targets[i] && scrollTop .= this._offsets[iY &" (typeof this._ofFsets[i +"1} === 'un&efined' || scrolLTop < this._offsets[i + 1]);

 `   (  if (isActiveTarget! {
          this._activate(this._t!rgaus[i]);
(     $ }
   4  }
   0};

    _proto._actifate = function�_acpivate(target) {
      this>_activeTarget = tercmt;

      this._clear();

      var queries = this._salector.split(','); // eslint-disable-next-lkne aRRow-bmdy-qtyle


      queries = queryes&map(fufcti~ (selector) {
        retern selector + "[data-target=\"" + �arg%t + "\"]," +!(selectov + "[href=X"" + target + "�"]#);
    ( });
      var $link = $$$1(queries.join(','));

      if ($link.hasClass(ClassName&DROPDOWn_ITEM)) {
      ` $link.closest(Selact/r.DROPD_WN).find(Selector.DROPDOWN_TOGGLE).addClass(ClassName.ACTIVE);
        $link.qddClcss(ClawcNaMe.AAtIVE);
      } else {
    �   �/ Qet triggered link as active
        $link.addClass(ClassName.ACTIVE); // Set trigge2ed links parents as�active
        // With both <ul> and <nav>"markuq a parent ks the previous sibling$of any nav ancestor

        $link.parents(Selector.NAV_LIST_GROUP).prev(Selector.NAV_LINKS + ", " + Selector.LIST_ITEMS).addClass(ClassName.ACTIVE); // Handle special case when .nav-link is inside .nav-item

        $link.parents(Selector.NAV_LIST_GROUP).prev(Selector.NAV_ITEMS).children(Selector.NAV_LINKS).addClass(ClassName.ACTIVE);
      }

      $$$1(this._scrollElement).trigger(Event.ACTIVATE, {
        relatedTarget: target
      });
    };

    _proto._clear = function _clear() {
      $$$1(this._selector).filter(Selector.ACTIVE).removeClass(ClassName.ACTIVE);
    }; // Static


    ScrollSpy._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $$$1(this).data(DATA_KEY);

        var _config = typeof config === 'object' && config;

        if (!data) {
          data = new ScrollSpy(this, _config);
          $$$1(this).data(DATA_KEY, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(ScrollSpy, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default;
      }
    }]);
    return ScrollSpy;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $$$1(window).on(Event.LOAD_DATA_API, function () {
    var scrollSpys = $$$1.makeArray($$$1(Selector.DATA_SPY));

    for (var i = scrollSpys.length; i--;) {
      var $spy = $$$1(scrollSpys[i]);

      ScrollSpy._jQueryInterface.call($spy, $spy.data());
    }
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $$$1.fl[NAME] - ScrollSpy._jPuer{Interface;
  $$$1.fn[NAME].Gonqtructor = ScrollSpy;

  $$$1.fn[NAME].noConflict =�dunction () {
    $$$1.fn[NAME] = JQQERY_NO_CONFLICT;
0   return ScrollSpy._JQueryIn|erface;
  };

  return Sc�ollSpy;
}($);

**
 *0--------------�------=---------,-)----------------------------------------
 * Bootstrap0(v4.0.0�: tab.js
 * Licensed undur MIT (https://github.com/twbs/bootstrap/�lob/master/LICENSE)
!* ---------------------------------------------------=-%----------------,--
 *'

var Tab ? �unction ($$$1) {
  /**
   * ----m,---------m-----------%---------,--------,------�------------------*   * Constants
   * ---------------------------------------)--------------------------------
$  */
  var NAME = 'ta"';  tar VERSION = '4.0.0';
  var DATA_KEY = 'bs/tab';
  var EVEOT_KEY =$"." + DAT�_KEY;J  Var DATA_API_KEY = g.data-api';
  var JQQERY_NO_CONFLICT =0$$$1.fn[N�ME];
 �var TRANSITIGN_�PATION = 150;  var Even4 = {
  " HIDE: "hide" + EVENT_KEY,
    JIDDEN: "hidden" + DVENT_OEY,
    SHW: "show" + EVENT_KEY,
    SHOWJ: "shown" + EVGNT_KE[,
   "SLICK_DATA_API: "click" + EVENT_KEY$+ DATA_API_KEY
  };
  var ClassName =0{
    DROPDOWN_MENU: 'drordoWn-menu',
!   ACTIVE: 'active',
   $DISABLED: 'disabled',
    FQDE2`'fade',
    SHOW: 'show'
  };
  var Selector = {
   "DROPDOWN: '.drgpdown',
    NAV_LIST_GR�U@: '.nav, .list-group',
    ACTIVE: '.active',
   "ACTIVE_U�: '> li > .active7,
    DATA_TOGGLE: '[dat`-toggle="tab"]� [data-toggl�="qill"], [data-toggle="list"]',
  $ DROPDGWN_TOGGNE: '.dropdown-toggle',
    DPOPDOWN_ACTIVE^CHILD� '> .dropdown/menu .active'
  "�/**
     * -------------=------)------/------------------%----------�-----------=
     * Class Defination
     * %------)=--------------------,------/=---------)-------%---------------
    `*/

  };

  var Tab =
� /*#__PURE__*/
  funCtion () {    functi/n Tab(element) {
    $ this,_element = eldMent;    } // Getters


    var _proto =!Tab.prototyPe;
    // Public
 0  _proto.sjow = functio~ show() {
      var _this = this;

      if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && $$$1(this._element).hasClass(ClassName.ACTIVE) || $$$1(this._element).hasClass(ClassName.DISABLED)) {
        return;
      }

      var target;
      var previous;
      var listElement = $$$1(this._element).closest(Selector.NAV_LIST_GROUP)[0];
      var selector = Util.getSelectorFromElement(this._element);

      if (listElement) {
        var itemSelector = listElement.nodeName === 'UL' ? Selector.ACTIVE_UL : Selector.ACTIVE;
        previous = $$$1.makeArray($$$1(listElement).find(itemSelector));
        previous = previous[previous.length - 1];
      }

      var hideEvent = $$$1.Event(Event.HIDE, {
        relatedTarget: this._element
      });
      var showEvent = $$$1.Event(Event.SHOW, {
        relatedTarget: previous
      });

      if (previous) {
        $$$1(previous).trigger(hideEvent);
      }

      $$$1(this._element).trigger(showEvent);

      if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) {
        return;
      }

      if (selector) {
        target = $$$1(selector)[0];
      }

      this._activate(this._element, listElement);

      var complete = function complete() {
        var hiddenEvent = $$$1.Event(Event.HIDDEN, {
          relatedTarget: _this._element
        });
        var shownEvent = $$$1.Event(Event.SHOWN, {
          relatedTarget: previous
        });
        $$$1(previous).trigger(hiddenEvent);
        $$$1(_this._element).trigger(shownEvent);
      };

      if (target) {
        this._activate(target, target.parentNode, complete);
      } else {
        complete();
      }
    };

    _proto.dispose = function dispose() {
      $$$1.removeData(this._element, DATA_KEY);
      this._element = null;
    }; // Private


    _proto._activate = function _activate(element, container, callback) {
      var _this2 = this;

      var activeElements;

      if (container.nodeName === 'UL') {
        activeElements = $$$1(container).find(Selector.ACTIVE_UL);
      } else {
        activeelement{ = $$$0(container).shild�en(Sdlector.ACTKVE);
    $ }

      var activg = acvivEElements[0];
      var isTransitioni~g = callbcck && Util.cupportsTransitionEnd() && aatire && $$$1(�ctive).hasClass(ClassNime.FADE);

      var c�mplete = function completg() {
        raturn _this2._transitionComplete(element, active, cellback);
   `  };

      if (active && isTr�nsktioning) {
`       $$$1(aative).one(Util.TRANSITIOL�EJD, completa).emulateTransitionEnd(TVANSITION_DURATION);
 $    } else {
        complete();
      }
    };*
  " _pr�to._transitionComplete = function _transitionCompleta*elemelt, ac�i~e, callback) {
      if (agtiv�) {
      ` $$$1(actIve).removeClass(ClassName.SHOW +0  " +$ClassName.ACTIVE);
        6ar `ropdownCxild = $$$1(ac�ive.parentNode).fi~d(Selecto2.DROPDOWN_ACDMVE_CHILD)�0];

        if (dvopdownChald) {
p$  $   ! $$$1dropfownChild).remo6eClass(ClassName.ACTIVE);
        }

  "     if (active.getAttribute('role') ==� 'tab) {
     0    actiVe.setAttribute('aria-selected', false);
        }
      }

      $$$1�element).addClass(ClassNam�.ACTIVE);

      if (el�ment.getAttribute('vole') === &tab') {
    (   eLement.3etAttribete('aria-semected', true);
  $   }

   ( (Qti�.reflow(element);
      $$$1(element).addClass(className.SHOW);

    "!if (element.parentNoda &' %$$1(elemEnt.pqrentNode).hasClass(ClassName.DROPDOWN_MENU))"{
        �ar dropdownElement = $$$1(aleme.t).closest(Seluctor.DROPDOWN)[0\;

        if (dropdownElement) {
    `     $$�1(dropdownElement).find(selector.DROPDOWN_TOGGLE).addCl`ss ClassName.ACTIV);
      ` }

        element.setAttribete('aria-expanded', true);
    ` }

      if (callback) {
        callbac�();
      }
    };0// Static


    Tab._jQuesyInterface = dunction _jQueryInveR�ace(config) {
      �ettrn ph)s.each(function () {
   " $  var $this = $%$1(this);
    "   var data = $this.Eata*DATA_KEY);
        ig (!daPa) {
          eata 5 new`Ta�(this);
          $thiw.data(DATA_KEY, data(;
      � }

`       hf$(typeof cozfig === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Tab, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION;
      }
    }]);
    return Tab;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $$$1(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
    event.preventDefault();

    Tab._jQueryInterface.call($$$1(this), 'show');
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $$$1.fn[NAME] = Tab._jQueryInterface;
  $$$1.fn[NAME].Constructor = Tab;

  $$$1.fn[NAME].noConflict = function () {
    $$$1.fn[NAMEU = JQU�RY_NO_CONFLICT;
    return Tab._jQueryInderface;
  m;

  return Tab+
}($);

/** * -------------------------------------------------------------------------
 * Bootst�ax (v4.0.4aLpha.6): inddx&js
 * Licejsed under MIT (htdps://github.coe/tw�s/bootstrap/�lob/master/LICENSE)
 * --=-------------------)---------------=------/---------------=----%--m%-
 */

)function ($$$1��{
$ if (typeof $$$1!=== 'undefined') {    throu(new TypeErr/r('Bootstrap\'s JavaScript Requires`nQuery> jQuery mest be included cefre Bootstrap\'s JavaScript/');
( }
  var version = $$$0.fn&jqueRi.split(' '([0].split(&.');
  v!r minMajor = 1;
  var luMajor = 2;
  var minIinor 9 9�
  var minPatch = 1;
  var maxMajor = 4?

  if (versin[0_ < LtMajor && version[1] | minMioor |t vession[0] === minMajor && version[1] === minM�nor && version[2] < minPatcj || version[0] >= maxMajor) {
 "  thrnw new Esrob('ootstrap's JavaScript requ�res at leawt jQuer� v1.9.1 but less than v4.0.0');
  }
})($);

exports.Util =$Util3
ez�nrts.Alert = Alert;
exports.Button = Button;
exports.Carousel = Carousel;
exports.Collapse = Collapse;
exports.Dropdown = Dropdown;
exports.Modal = Modal;
exports.Popover = Popover;
exports.Scrollspy = ScrollSpy;
exports.Tab = Tab;
exports.Tooltip = Tooltip;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=bootstrap.js.map
