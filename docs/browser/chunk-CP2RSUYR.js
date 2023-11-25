import{B as y,C as G,D as te,E as v,F as _,H as ie,I as g,J as ne,K as T,L as re,N as oe,O as U,Q as M,V as se,X as B,a as u,b as h,c as z,d as Z,e as J,f as O,h as N,i as d,j as f,k as X,l as Y,m as c,n as p,o as K,r as Q,t as P,v as k,w as j,x as s,y as ee,z as b}from"./chunk-QUK22F54.js";var pe=(()=>{let e=class e{constructor(i,r){this._renderer=i,this._elementRef=r,this.onChange=o=>{},this.onTouched=()=>{}}setProperty(i,r){this._renderer.setProperty(this._elementRef.nativeElement,i,r)}registerOnTouched(i){this.onTouched=i}registerOnChange(i){this.onChange=i}setDisabledState(i){this.setProperty("disabled",i)}};e.\u0275fac=function(r){return new(r||e)(s(k),s(P))},e.\u0275dir=p({type:e});let t=e;return t})(),xe=(()=>{let e=class e extends pe{};e.\u0275fac=(()=>{let i;return function(o){return(i||(i=Q(e)))(o||e)}})(),e.\u0275dir=p({type:e,features:[y]});let t=e;return t})(),ge=new f("NgValueAccessor");var Oe={provide:ge,useExisting:O(()=>I),multi:!0};function Ne(){let t=U()?U().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var Pe=new f("CompositionEventMode"),I=(()=>{let e=class e extends pe{constructor(i,r,o){super(i,r),this._compositionMode=o,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!Ne())}writeValue(i){let r=i??"";this.setProperty("value",r)}_handleInput(i){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(i)}_compositionStart(){this._composing=!0}_compositionEnd(i){this._composing=!1,this._compositionMode&&this.onChange(i)}};e.\u0275fac=function(r){return new(r||e)(s(k),s(P),s(Pe,8))},e.\u0275dir=p({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(r,o){r&1&&g("input",function(a){return o._handleInput(a.target.value)})("blur",function(){return o.onTouched()})("compositionstart",function(){return o._compositionStart()})("compositionend",function(a){return o._compositionEnd(a.target.value)})},features:[T([Oe]),y]});let t=e;return t})();var ke=new f("NgValidators"),je=new f("NgAsyncValidators");function me(t){return t!=null}function ye(t){return ie(t)?z(t):t}function ve(t){let e={};return t.forEach(n=>{e=n!=null?u(u({},e),n):e}),Object.keys(e).length===0?null:e}function _e(t,e){return e.map(n=>n(t))}function Ge(t){return!t.validate}function Ce(t){return t.map(e=>Ge(e)?e:n=>e.validate(n))}function Te(t){if(!t)return null;let e=t.filter(me);return e.length==0?null:function(n){return ve(_e(n,e))}}function Ve(t){return t!=null?Te(Ce(t)):null}function Ue(t){if(!t)return null;let e=t.filter(me);return e.length==0?null:function(n){let i=_e(n,e).map(ye);return J(i).pipe(Z(ve))}}function De(t){return t!=null?Ue(Ce(t)):null}function ae(t,e){return t===null?[e]:Array.isArray(t)?[...t,e]:[t,e]}function Be(t){return t._rawValidators}function Re(t){return t._rawAsyncValidators}function R(t){return t?Array.isArray(t)?t:[t]:[]}function E(t,e){return Array.isArray(t)?t.includes(e):t===e}function le(t,e){let n=R(e);return R(t).forEach(r=>{E(n,r)||n.push(r)}),n}function ue(t,e){return R(e).filter(n=>!E(t,n))}var w=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=Ve(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=De(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,n){return this.control?this.control.hasError(e,n):!1}getError(e,n){return this.control?this.control.getError(e,n):null}},H=class extends w{get formDirective(){return null}get path(){return null}},D=class extends w{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},L=class{constructor(e){this._cd=e}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}},He={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},St=h(u({},He),{"[class.ng-submitted]":"isSubmitted"}),be=(()=>{let e=class e extends L{constructor(i){super(i)}};e.\u0275fac=function(r){return new(r||e)(s(D,2))},e.\u0275dir=p({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,o){r&2&&te("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)},features:[y]});let t=e;return t})();var C="VALID",A="INVALID",m="PENDING",V="DISABLED";function Le(t){return(S(t)?t.validators:t)||null}function $e(t){return Array.isArray(t)?Ve(t):t||null}function We(t,e){return(S(e)?e.asyncValidators:t)||null}function qe(t){return Array.isArray(t)?De(t):t||null}function S(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}var $=class{constructor(e,n){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(n)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get valid(){return this.status===C}get invalid(){return this.status===A}get pending(){return this.status==m}get disabled(){return this.status===V}get enabled(){return this.status!==V}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(le(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(le(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(ue(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(ue(e,this._rawAsyncValidators))}hasValidator(e){return E(this._rawValidators,e)}hasAsyncValidator(e){return E(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){this.touched=!0,this._parent&&!e.onlySelf&&this._parent.markAsTouched(e)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(e=>e.markAllAsTouched())}markAsUntouched(e={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(n=>{n.markAsUntouched({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}markAsDirty(e={}){this.pristine=!1,this._parent&&!e.onlySelf&&this._parent.markAsDirty(e)}markAsPristine(e={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(n=>{n.markAsPristine({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}markAsPending(e={}){this.status=m,e.emitEvent!==!1&&this.statusChanges.emit(this.status),this._parent&&!e.onlySelf&&this._parent.markAsPending(e)}disable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=V,this.errors=null,this._forEachChild(i=>{i.disable(h(u({},e),{onlySelf:!0}))}),this._updateValue(),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(h(u({},e),{skipPristineCheck:n})),this._onDisabledChange.forEach(i=>i(!0))}enable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=C,this._forEachChild(i=>{i.enable(h(u({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(h(u({},e),{skipPristineCheck:n})),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(e){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===C||this.status===m)&&this._runAsyncValidator(e.emitEvent)),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(e)}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(n=>n._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?V:C}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e){if(this.asyncValidator){this.status=m,this._hasOwnPendingAsyncValidator=!0;let n=ye(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(i=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(i,{emitEvent:e})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(e,n={}){this.errors=e,this._updateControlsErrors(n.emitEvent!==!1)}get(e){let n=e;return n==null||(Array.isArray(n)||(n=n.split(".")),n.length===0)?null:n.reduce((i,r)=>i&&i._find(r),this)}getError(e,n){let i=n?this.get(n):this;return i&&i.errors?i.errors[e]:null}hasError(e,n){return!!this.getError(e,n)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(e)}_initObservables(){this.valueChanges=new b,this.statusChanges=new b}_calculateStatus(){return this._allControlsDisabled()?V:this.errors?A:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(m)?m:this._anyControlsHaveStatus(A)?A:C}_anyControlsHaveStatus(e){return this._anyControls(n=>n.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e={}){this.pristine=!this._anyControlsDirty(),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}_updateTouched(e={}){this.touched=this._anyControlsTouched(),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){S(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let n=this._parent&&this._parent.dirty;return!e&&!!n&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=$e(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=qe(this._rawAsyncValidators)}};var Me=new f("CallSetDisabledState",{providedIn:"root",factory:()=>W}),W="always";function ze(t,e){return[...e.path,t]}function Ze(t,e,n=W){Xe(t,e),e.valueAccessor.writeValue(t.value),(t.disabled||n==="always")&&e.valueAccessor.setDisabledState?.(t.disabled),Ye(t,e),Qe(t,e),Ke(t,e),Je(t,e)}function de(t,e){t.forEach(n=>{n.registerOnValidatorChange&&n.registerOnValidatorChange(e)})}function Je(t,e){if(e.valueAccessor.setDisabledState){let n=i=>{e.valueAccessor.setDisabledState(i)};t.registerOnDisabledChange(n),e._registerOnDestroy(()=>{t._unregisterOnDisabledChange(n)})}}function Xe(t,e){let n=Be(t);e.validator!==null?t.setValidators(ae(n,e.validator)):typeof n=="function"&&t.setValidators([n]);let i=Re(t);e.asyncValidator!==null?t.setAsyncValidators(ae(i,e.asyncValidator)):typeof i=="function"&&t.setAsyncValidators([i]);let r=()=>t.updateValueAndValidity();de(e._rawValidators,r),de(e._rawAsyncValidators,r)}function Ye(t,e){e.valueAccessor.registerOnChange(n=>{t._pendingValue=n,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&Ae(t,e)})}function Ke(t,e){e.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&Ae(t,e),t.updateOn!=="submit"&&t.markAsTouched()})}function Ae(t,e){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function Qe(t,e){let n=(i,r)=>{e.valueAccessor.writeValue(i),r&&e.viewToModelUpdate(i)};t.registerOnChange(n),e._registerOnDestroy(()=>{t._unregisterOnChange(n)})}function et(t,e){if(!t.hasOwnProperty("model"))return!1;let n=t.model;return n.isFirstChange()?!0:!Object.is(e,n.currentValue)}function tt(t){return Object.getPrototypeOf(t.constructor)===xe}function it(t,e){if(!e)return null;Array.isArray(e);let n,i,r;return e.forEach(o=>{o.constructor===I?n=o:tt(o)?i=o:r=o}),r||i||n||null}function ce(t,e){let n=t.indexOf(e);n>-1&&t.splice(n,1)}function he(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var nt=class extends ${constructor(e=null,n,i){super(Le(n),We(i,n)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(n),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),S(n)&&(n.nonNullable||n.initialValueIsDefault)&&(he(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,n={}){this.value=this._pendingValue=e,this._onChange.length&&n.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,n.emitViewToModelChange!==!1)),this.updateValueAndValidity(n)}patchValue(e,n={}){this.setValue(e,n)}reset(e=this.defaultValue,n={}){this._applyFormState(e),this.markAsPristine(n),this.markAsUntouched(n),this.setValue(this.value,n),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){ce(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){ce(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){he(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var rt={provide:D,useExisting:O(()=>q)},fe=(()=>Promise.resolve())(),q=(()=>{let e=class e extends D{constructor(i,r,o,l,a,Se){super(),this._changeDetectorRef=a,this.callSetDisabledState=Se,this.control=new nt,this._registered=!1,this.name="",this.update=new b,this._parent=i,this._setValidators(r),this._setAsyncValidators(o),this.valueAccessor=it(this,l)}ngOnChanges(i){if(this._checkForErrors(),!this._registered||"name"in i){if(this._registered&&(this._checkName(),this.formDirective)){let r=i.name.previousValue;this.formDirective.removeControl({name:r,path:this._getPath(r)})}this._setUpControl()}"isDisabled"in i&&this._updateDisabled(i),et(i,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(i){this.viewModel=i,this.update.emit(i)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){Ze(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(i){fe.then(()=>{this.control.setValue(i,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(i){let r=i.isDisabled.currentValue,o=r!==0&&oe(r);fe.then(()=>{o&&!this.control.disabled?this.control.disable():!o&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(i){return this._parent?ze(i,this._parent):[i]}};e.\u0275fac=function(r){return new(r||e)(s(H,9),s(ke,10),s(je,10),s(ge,10),s(ee,8),s(Me,8))},e.\u0275dir=p({type:e,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:["disabled","isDisabled"],model:["ngModel","model"],options:["ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[T([rt]),y,K]});let t=e;return t})();var ot=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=c({type:e}),e.\u0275inj=d({});let t=e;return t})();var st=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=c({type:e}),e.\u0275inj=d({imports:[ot]});let t=e;return t})();var Ee=(()=>{let e=class e{static withConfig(i){return{ngModule:e,providers:[{provide:Me,useValue:i.callSetDisabledState??W}]}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=c({type:e}),e.\u0275inj=d({imports:[st]});let t=e;return t})();var x=class{constructor(){this.nome="",this.senha=""}};var we=(()=>{let e=class e{constructor(i){this.router=i,this.usuarioAutenticado=!1}fazerAutenticacao(i){i.nome==="admin"&&i.senha==="admin"?(this.usuarioAutenticado=!0,this.router.navigate(["/home"])):this.usuarioAutenticado=!1}usuarioEstaAutenticado(){return this.usuarioAutenticado}};e.\u0275fac=function(r){return new(r||e)(X(se))},e.\u0275prov=N({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var Fe=(()=>{let e=class e{constructor(i){this.authService=i,this.usuario=new x}fazerLogin(){this.authService.fazerAutenticacao(this.usuario)}};e.\u0275fac=function(r){return new(r||e)(s(we))},e.\u0275cmp=Y({type:e,selectors:[["app-autenticacao"]],standalone:!0,features:[re],decls:7,vars:2,consts:[[1,"main-login"],[1,"box-login"],["type","text","id","userName","placeholder","Usu\xE1rio ou e-mail",1,"form-control",3,"ngModel","ngModelChange"],["type","password","id","inputSenha","placeholder","Senha",1,"form-control",3,"ngModel","ngModelChange"],["type","submit","value","Acessar",3,"click"]],template:function(r,o){r&1&&(v(0,"section",0)(1,"div",1)(2,"h1"),ne(3,"LOGIN"),_(),v(4,"input",2),g("ngModelChange",function(a){return o.usuario.nome=a}),_(),v(5,"input",3),g("ngModelChange",function(a){return o.usuario.senha=a}),_(),v(6,"input",4),g("click",function(){return o.fazerLogin()}),_()()()),r&2&&(j(4),G("ngModel",o.usuario.nome),j(1),G("ngModel",o.usuario.senha))},dependencies:[M,Ee,I,be,q],styles:['@import"https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;300;400;500;700;900&display=swap";html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{padding:0;margin:0;box-sizing:border-box;font-family:Roboto,sans-serif;font-size:16px}.main-login[_ngcontent-%COMP%]{height:100vh;background:#ffccff;display:flex;flex-direction:row;justify-content:center;align-items:center}.box-login[_ngcontent-%COMP%]{width:350px;padding:40px;background:#191919;text-align:center;border-radius:50px;box-shadow:4px 2px 9px 2px #00000056}.box-login[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{color:#fff;font-family:Noto Sans JP,sans-serif;font-weight:lighter}.box-login[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]{border:0;background:none;display:block;margin:20px auto;text-align:center;border:2px solid #800080;padding:14px 10px;outline:none;color:#fff;border-radius:24px;transition:width .5s;width:200px}.box-login[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]:focus{width:280px;border-color:#fcf}.box-login[_ngcontent-%COMP%]   input[type=password][_ngcontent-%COMP%]{border:0;background:none;display:block;margin:20px auto;text-align:center;border:2px solid #800080;padding:14px 10px;outline:none;color:#fff;border-radius:24px;transition:width .5s;width:200px}.box-login[_ngcontent-%COMP%]   input[type=password][_ngcontent-%COMP%]:focus{width:280px;border-color:#fcf}.box-login[_ngcontent-%COMP%]   input[type=submit][_ngcontent-%COMP%]{border:0;background:none;display:block;margin:20px auto;text-align:center;border:2px solid #800080;outline:none;color:#fff;border-radius:24px;transition:width .5s;padding:14px 40px;font-family:Noto Sans JP,sans-serif;transition:background-color .5s}.box-login[_ngcontent-%COMP%]   input[type=submit][_ngcontent-%COMP%]:hover{color:#191919;background:#ffccff}@media screen and (min-width: 768px){.box-login[_ngcontent-%COMP%]{width:450px}}']});let t=e;return t})();var ut=[{path:"",component:Fe}],Ie=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=c({type:e}),e.\u0275inj=d({imports:[B.forChild(ut),B]});let t=e;return t})();var $t=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=c({type:e}),e.\u0275inj=d({imports:[M,Ie]});let t=e;return t})();export{$t as AutenticacaoModule};
