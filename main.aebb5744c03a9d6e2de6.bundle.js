(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{174:function(module){module.exports={name:"react-intersection-observer",version:"8.23.1",description:"Monitor if a component is inside the viewport, using IntersectionObserver API",main:"react-intersection-observer.cjs.js",module:"react-intersection-observer.esm.js",unpkg:"react-intersection-observer.umd.min.js",typings:"index.d.ts",author:"Daniel Schmidt",private:!0,repository:{type:"git",url:"https://github.com/thebuilder/react-intersection-observer.git"},license:"MIT",keywords:["react","component","hooks","viewport","intersection","observer","lazy load","inview","useInView","useIntersectionObserver"],prettier:{singleQuote:!0,semi:!1,trailingComma:"all",proseWrap:"always"},eslintIgnore:["*.snap","test-utils.js","dist/**","lib/**","example/**","webpack.config.js"],scripts:{coveralls:"cat ./coverage/lcov.info | coveralls",prebuild:"rm -rf dist lib",build:"run-s build:*","build:lib":"rollup -c","build:ts":"tsc -p tsconfig.build.json && tsc -p tsconfig.test.json","build:copy":'copyfiles -f package.json README.md LICENSE dist && json -I -f dist/package.json -e "this.private=false; this.devDependencies=undefined; this.optionalDependencies=undefined; this.scripts=undefined; this.husky=undefined; this.prettier=undefined; this.jest=undefined; this.eslintConfig=undefined; this.eslintIgnore=undefined; this.np=undefined;"',dev:"concurrently -k -r 'jest --watch' 'yarn run storybook'",lint:"eslint . --ext js,ts,tsx",preversion:"yarn build",pretty:"prettier '**/*.{js,ts,tsx,md,json,yml,html}' --write",storybook:"start-storybook -p 9000","storybook:build":"build-storybook --output-dir example",test:"jest"},np:{yarn:!1,contents:"dist"},husky:{hooks:{"pre-commit":"tsc && lint-staged"}},"lint-staged":{"*.{js,json,css,md,ts,tsx}":["prettier --write","git add"],"src/**/*.{ts,tsx}":["eslint","jest --findRelatedTests"]},eslintConfig:{extends:["react-app"],parser:"@typescript-eslint/parser",plugins:["@typescript-eslint","react-hooks"],settings:{react:{version:"detect"}},rules:{"no-unused-vars":0,"react-hooks/rules-of-hooks":"error","react-hooks/exhaustive-deps":"warn"}},jest:{testEnvironment:"jsdom",setupFilesAfterEnv:["react-testing-library/cleanup-after-each","jest-dom/extend-expect"],coveragePathIgnorePatterns:["/node_modules/","/src/test-utils.ts","jest-setup.js"]},dependencies:{"@babel/runtime":"^7.0.0",invariant:"^2.2.4"},peerDependencies:{react:"^15.0.0 || ^16.0.0 || ^17.0.0"},devDependencies:{"@babel/cli":"^7.2.3","@babel/core":"^7.3.4","@babel/plugin-proposal-class-properties":"^7.3.4","@babel/plugin-transform-runtime":"^7.3.4","@babel/preset-env":"^7.3.4","@babel/preset-flow":"^7.0.0","@babel/preset-react":"^7.0.0","@babel/preset-typescript":"^7.1.0","@storybook/addon-actions":"^5.0.0","@storybook/addon-knobs":"^5.0.6","@storybook/components":"^5.0.0","@storybook/react":"^5.0.0","@types/jest":"^24.0.9","@types/react":"^16.8.6","@types/react-dom":"^16.8.2","@types/storybook__addon-actions":"^3.4.1","@types/storybook__addon-knobs":"^5.0.0","@types/storybook__react":"^4.0.0","@typescript-eslint/eslint-plugin":"^1.4.2","@typescript-eslint/parser":"^1.4.2","babel-eslint":"10.0.1","babel-jest":"^24.5.0","babel-loader":"^8.0.5",concurrently:"^4.1.0",copyfiles:"^2.1.0",coveralls:"^3.0.3",eslint:"^5.15.2","eslint-config-react-app":"^4.0.0","eslint-plugin-flowtype":"^3.2.1","eslint-plugin-import":"2.17.2","eslint-plugin-jsx-a11y":"^6.2.1","eslint-plugin-react":"^7.12.4","eslint-plugin-react-hooks":"^1.5.0",husky:"^1.3.1","intersection-observer":"^0.6.0",jest:"^24.5.0","jest-dom":"^3.1.3",json:"^9.0.6","lint-staged":"^8.1.5","npm-run-all":"^4.1.5",prettier:"^1.16.2",react:"^16.8.3","react-dom":"^16.8.3","react-test-renderer":"^16.8.3","react-testing-library":"^7.0.0",rollup:"^1.10.0","rollup-plugin-babel":"^4.2.0","rollup-plugin-commonjs":"^9.2.1","rollup-plugin-node-resolve":"^4.0.1","rollup-plugin-replace":"^2.1.0","rollup-plugin-terser":"^4.0.4",typescript:"^3.2.4"}}},175:function(module,__webpack_exports__,__webpack_require__){"use strict";var _home_travis_build_thebuilder_react_intersection_observer_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(14),_home_travis_build_thebuilder_react_intersection_observer_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(125),_home_travis_build_thebuilder_react_intersection_observer_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(126),_home_travis_build_thebuilder_react_intersection_observer_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(129),_home_travis_build_thebuilder_react_intersection_observer_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(127),_home_travis_build_thebuilder_react_intersection_observer_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(24),_home_travis_build_thebuilder_react_intersection_observer_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(128),_home_travis_build_thebuilder_react_intersection_observer_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(18),react__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(0),style={margin:"64px",backgroundColor:"slategrey",overflowY:"scroll",position:"absolute",top:"0",left:"0",right:"0",bottom:"0"},RootComponent=function(_React$PureComponent){function RootComponent(){var _getPrototypeOf2,_this;Object(_home_travis_build_thebuilder_react_intersection_observer_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.a)(this,RootComponent);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return _this=Object(_home_travis_build_thebuilder_react_intersection_observer_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__.a)(this,(_getPrototypeOf2=Object(_home_travis_build_thebuilder_react_intersection_observer_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.a)(RootComponent)).call.apply(_getPrototypeOf2,[this].concat(args))),Object(_home_travis_build_thebuilder_react_intersection_observer_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__.a)(Object(_home_travis_build_thebuilder_react_intersection_observer_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__.a)(_this),"state",{node:null}),Object(_home_travis_build_thebuilder_react_intersection_observer_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__.a)(Object(_home_travis_build_thebuilder_react_intersection_observer_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__.a)(_this),"handleNode",function(node){_this.setState({node:node})}),_this}return Object(_home_travis_build_thebuilder_react_intersection_observer_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__.a)(RootComponent,_React$PureComponent),Object(_home_travis_build_thebuilder_react_intersection_observer_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__.a)(RootComponent,[{key:"render",value:function render(){return react__WEBPACK_IMPORTED_MODULE_8__.createElement("div",{ref:this.handleNode,style:Object(_home_travis_build_thebuilder_react_intersection_observer_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__.a)({},style,this.props.style)},this.state.node?this.props.children(this.state.node):null)}}]),RootComponent}(react__WEBPACK_IMPORTED_MODULE_8__.PureComponent);__webpack_exports__.a=RootComponent},272:function(module,exports,__webpack_require__){__webpack_require__(273),__webpack_require__(351),module.exports=__webpack_require__(352)},3:function(module,__webpack_exports__,__webpack_require__){"use strict";var _home_travis_build_thebuilder_react_intersection_observer_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(14),_home_travis_build_thebuilder_react_intersection_observer_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(60),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(0),style={height:"101vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",backgroundColor:"#2d1176",color:"#fff"};__webpack_exports__.a=function ScrollWrapper(_ref){var children=_ref.children,props=Object(_home_travis_build_thebuilder_react_intersection_observer_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.a)(_ref,["children"]);return react__WEBPACK_IMPORTED_MODULE_2__.createElement("div",props,react__WEBPACK_IMPORTED_MODULE_2__.createElement("section",{style:Object(_home_travis_build_thebuilder_react_intersection_observer_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__.a)({},style)},react__WEBPACK_IMPORTED_MODULE_2__.createElement("h1",null,"⬇ Scroll Down ⬇")),children,react__WEBPACK_IMPORTED_MODULE_2__.createElement("section",{style:Object(_home_travis_build_thebuilder_react_intersection_observer_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__.a)({},style)},react__WEBPACK_IMPORTED_MODULE_2__.createElement("h1",null,"⬆︎ Scroll up ⬆︎")))}},352:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__(0);var _storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(59),_storybook_theming__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(270),_package__WEBPACK_IMPORTED_MODULE_5__=(__webpack_require__(501),__webpack_require__(502),__webpack_require__(174));Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.addParameters)({options:{theme:Object(_storybook_theming__WEBPACK_IMPORTED_MODULE_2__.create)({base:"dark",brandTitle:_package__WEBPACK_IMPORTED_MODULE_5__.name,brandUrl:_package__WEBPACK_IMPORTED_MODULE_5__.repository.url}),isFullscreen:!1,panelPosition:"bottom"}});var req=__webpack_require__(507);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.configure)(function loadStories(){req.keys().forEach(req)},module)}.call(this,__webpack_require__(144)(module))},4:function(module,__webpack_exports__,__webpack_require__){"use strict";var objectSpread=__webpack_require__(14),objectWithoutProperties=__webpack_require__(60),classCallCheck=__webpack_require__(125),createClass=__webpack_require__(126),possibleConstructorReturn=__webpack_require__(129),getPrototypeOf=__webpack_require__(127),assertThisInitialized=__webpack_require__(24),inherits=__webpack_require__(128),defineProperty=__webpack_require__(18),react=__webpack_require__(0),browser=__webpack_require__(173),browser_default=__webpack_require__.n(browser),INSTANCE_MAP=new Map,OBSERVER_MAP=new Map,ROOT_IDS=new Map,consecutiveRootId=0;function observe(element,callback){var options=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};options.threshold||(options.threshold=0);var root=options.root,rootMargin=options.rootMargin,threshold=options.threshold;if(browser_default()(!INSTANCE_MAP.has(element),"react-intersection-observer: Trying to observe %s, but it's already being observed by another instance.\nMake sure the `ref` is only used by a single <Observer /> instance.\n\n%s",element),element){var observerId=function getRootId(root){return root?ROOT_IDS.has(root)?ROOT_IDS.get(root):(consecutiveRootId+=1,ROOT_IDS.set(root,consecutiveRootId.toString()),ROOT_IDS.get(root)+"_"):""}(root)+(rootMargin?"".concat(threshold.toString(),"_").concat(rootMargin):threshold.toString()),observerInstance=OBSERVER_MAP.get(observerId);observerInstance||(observerInstance=new IntersectionObserver(onChange,options),observerId&&OBSERVER_MAP.set(observerId,observerInstance));var instance={callback:callback,element:element,inView:!1,observerId:observerId,observer:observerInstance,thresholds:observerInstance.thresholds||(Array.isArray(threshold)?threshold:[threshold])};return INSTANCE_MAP.set(element,instance),observerInstance.observe(element),instance}}function unobserve(element){if(element){var instance=INSTANCE_MAP.get(element);if(instance){var observerId=instance.observerId,observer=instance.observer,root=observer.root;observer.unobserve(element);var itemsLeft=!1,rootObserved=!1;observerId&&INSTANCE_MAP.forEach(function(item,key){key!==element&&(item.observerId===observerId&&(itemsLeft=!0,rootObserved=!0),item.observer.root===root&&(rootObserved=!0))}),!rootObserved&&root&&ROOT_IDS.delete(root),observer&&!itemsLeft&&observer.disconnect(),INSTANCE_MAP.delete(element)}}}function onChange(changes){changes.forEach(function(intersection){var isIntersecting=intersection.isIntersecting,intersectionRatio=intersection.intersectionRatio,target=intersection.target,instance=INSTANCE_MAP.get(target);if(instance&&intersectionRatio>=0){var inView=instance.thresholds.some(function(threshold){return instance.inView?intersectionRatio>threshold:intersectionRatio>=threshold});void 0!==isIntersecting&&(inView=inView&&isIntersecting),instance.inView=inView,instance.callback(inView,intersection)}})}var InView_InView=function(_React$Component){function InView(){var _getPrototypeOf2,_this;Object(classCallCheck.a)(this,InView);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return _this=Object(possibleConstructorReturn.a)(this,(_getPrototypeOf2=Object(getPrototypeOf.a)(InView)).call.apply(_getPrototypeOf2,[this].concat(args))),Object(defineProperty.a)(Object(assertThisInitialized.a)(_this),"state",{inView:!1,entry:void 0}),Object(defineProperty.a)(Object(assertThisInitialized.a)(_this),"node",null),Object(defineProperty.a)(Object(assertThisInitialized.a)(_this),"handleNode",function(node){_this.node&&unobserve(_this.node),_this.node=node||null,_this.observeNode()}),Object(defineProperty.a)(Object(assertThisInitialized.a)(_this),"handleChange",function(inView,entry){(inView!==_this.state.inView||inView)&&_this.setState({inView:inView,entry:entry}),_this.props.onChange&&_this.props.onChange(inView,entry)}),_this}return Object(inherits.a)(InView,_React$Component),Object(createClass.a)(InView,[{key:"componentDidMount",value:function componentDidMount(){0}},{key:"componentDidUpdate",value:function componentDidUpdate(prevProps,prevState){prevProps.rootMargin===this.props.rootMargin&&prevProps.root===this.props.root&&prevProps.threshold===this.props.threshold||(unobserve(this.node),this.observeNode()),prevState.inView!==this.state.inView&&this.state.inView&&this.props.triggerOnce&&(unobserve(this.node),this.node=null)}},{key:"componentWillUnmount",value:function componentWillUnmount(){this.node&&(unobserve(this.node),this.node=null)}},{key:"observeNode",value:function observeNode(){if(this.node){var _this$props=this.props,threshold=_this$props.threshold,root=_this$props.root,rootMargin=_this$props.rootMargin;observe(this.node,this.handleChange,{threshold:threshold,root:root,rootMargin:rootMargin})}}},{key:"render",value:function render(){var _this$state=this.state,inView=_this$state.inView,entry=_this$state.entry;if(!function isPlainChildren(props){return"function"!=typeof props.children}(this.props))return this.props.children({inView:inView,entry:entry,ref:this.handleNode});var _this$props2=this.props,children=_this$props2.children,as=_this$props2.as,tag=_this$props2.tag,props=(_this$props2.triggerOnce,_this$props2.threshold,_this$props2.root,_this$props2.rootMargin,Object(objectWithoutProperties.a)(_this$props2,["children","as","tag","triggerOnce","threshold","root","rootMargin"]));return react.createElement(as||tag||"div",Object(objectSpread.a)({ref:this.handleNode},props),children)}}]),InView}(react.Component);Object(defineProperty.a)(InView_InView,"displayName","InView"),Object(defineProperty.a)(InView_InView,"defaultProps",{threshold:0,triggerOnce:!1});var slicedToArray=__webpack_require__(61);function useInView(){var options=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},_React$useState=react.useState(null),_React$useState2=Object(slicedToArray.a)(_React$useState,2),ref=_React$useState2[0],setRef=_React$useState2[1],_React$useState3=react.useState({inView:!1,entry:void 0}),_React$useState4=Object(slicedToArray.a)(_React$useState3,2),state=_React$useState4[0],setState=_React$useState4[1];return react.useEffect(function(){if(ref)return observe(ref,function(inView,intersection){setState({inView:inView,entry:intersection}),inView&&options.triggerOnce&&unobserve(ref)},options),function(){unobserve(ref)}},[ref,options.threshold,options.root,options.rootMargin,options.triggerOnce]),react.useDebugValue(state.inView),[setRef,state.inView,state.entry]}__webpack_require__.d(__webpack_exports__,"b",function(){return useInView});__webpack_exports__.a=InView_InView},502:function(module,exports,__webpack_require__){var content=__webpack_require__(503);"string"==typeof content&&(content=[[module.i,content,""]]);var options={hmr:!0,transform:void 0,insertInto:void 0};__webpack_require__(505)(content,options);content.locals&&(module.exports=content.locals)},503:function(module,exports,__webpack_require__){(module.exports=__webpack_require__(504)(!1)).push([module.i,"body {\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,\n    Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;\n  padding: 0;\n  margin: 0;\n  color: #0c0c0c;\n  font-size: 16px;\n}\n\nh1 {\n  font-size: 2rem;\n}\n",""])},507:function(module,exports,__webpack_require__){var map={"./Hooks.story.tsx":508,"./InView.story.tsx":584};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=507},508:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _home_travis_build_thebuilder_react_intersection_observer_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(61),_home_travis_build_thebuilder_react_intersection_observer_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(60),_home_travis_build_thebuilder_react_intersection_observer_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(14),react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(0),_storybook_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(59),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(7),_src_index__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(4),_ScrollWrapper_index__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(3),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(130),_Status__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(91),sharedStyle={display:"flex",minHeight:"25vh",flexDirection:"column",justifyContent:"center",alignItems:"center",textAlign:"center",background:"#148bb4",color:"azure"};function getOptions(){var options=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{threshold:0,triggerOnce:!1},threshold=options.threshold,triggerOnce=options.triggerOnce;return Object(_home_travis_build_thebuilder_react_intersection_observer_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__.a)({},options,{threshold:options&&Array.isArray(threshold)?threshold:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_8__.number)("Threshold",threshold||0,{range:!0,min:0,max:1,step:.1}),triggerOnce:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_8__.boolean)("Trigger once",triggerOnce||!1)})}var LazyHookComponent=function LazyHookComponent(_ref){var options=_ref.options,style=_ref.style,children=_ref.children,rest=Object(_home_travis_build_thebuilder_react_intersection_observer_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.a)(_ref,["options","style","children"]),_useInView=Object(_src_index__WEBPACK_IMPORTED_MODULE_6__.b)(getOptions(options)),_useInView2=Object(_home_travis_build_thebuilder_react_intersection_observer_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useInView,3),ref=_useInView2[0],inView=_useInView2[1],entry=_useInView2[2],_React$useState=react__WEBPACK_IMPORTED_MODULE_3__.useState(!0),_React$useState2=Object(_home_travis_build_thebuilder_react_intersection_observer_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_React$useState,2),isLoading=_React$useState2[0],setIsLoading=_React$useState2[1];return Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_5__.action)("Inview")(inView,entry),react__WEBPACK_IMPORTED_MODULE_3__.useEffect(function(){setIsLoading(!1)},[]),isLoading?react__WEBPACK_IMPORTED_MODULE_3__.createElement("div",null,"Loading..."):react__WEBPACK_IMPORTED_MODULE_3__.createElement("div",Object.assign({ref:ref,style:Object(_home_travis_build_thebuilder_react_intersection_observer_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__.a)({},sharedStyle,style)},rest),react__WEBPACK_IMPORTED_MODULE_3__.createElement(_Status__WEBPACK_IMPORTED_MODULE_9__.a,{inView:inView}),react__WEBPACK_IMPORTED_MODULE_3__.createElement("h2",null,children||"Header is inside the viewport",": ",inView.toString()))},HookComponent=function HookComponent(_ref2){var options=_ref2.options,style=_ref2.style,children=_ref2.children,rest=Object(_home_travis_build_thebuilder_react_intersection_observer_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.a)(_ref2,["options","style","children"]),_useInView3=Object(_src_index__WEBPACK_IMPORTED_MODULE_6__.b)(getOptions(options)),_useInView4=Object(_home_travis_build_thebuilder_react_intersection_observer_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useInView3,3),ref=_useInView4[0],inView=_useInView4[1],entry=_useInView4[2];return Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_5__.action)("Inview")(inView,entry),react__WEBPACK_IMPORTED_MODULE_3__.createElement("div",Object.assign({ref:ref,style:Object(_home_travis_build_thebuilder_react_intersection_observer_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__.a)({},sharedStyle,style)},rest),react__WEBPACK_IMPORTED_MODULE_3__.createElement(_Status__WEBPACK_IMPORTED_MODULE_9__.a,{inView:inView}),react__WEBPACK_IMPORTED_MODULE_3__.createElement("h2",null,children||"Header is inside the viewport",": ",inView.toString()))};Object(_storybook_react__WEBPACK_IMPORTED_MODULE_4__.storiesOf)("useInView hook",module).addDecorator(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_8__.withKnobs).add("Basic",function(){return react__WEBPACK_IMPORTED_MODULE_3__.createElement(_ScrollWrapper_index__WEBPACK_IMPORTED_MODULE_7__.a,null,react__WEBPACK_IMPORTED_MODULE_3__.createElement(HookComponent,null))}).add("Lazy Hook rendering",function(){return react__WEBPACK_IMPORTED_MODULE_3__.createElement(_ScrollWrapper_index__WEBPACK_IMPORTED_MODULE_7__.a,null,react__WEBPACK_IMPORTED_MODULE_3__.createElement(LazyHookComponent,null))}).add("Start in view",function(){return react__WEBPACK_IMPORTED_MODULE_3__.createElement(HookComponent,null)}).add("Taller then viewport",function(){return react__WEBPACK_IMPORTED_MODULE_3__.createElement(_ScrollWrapper_index__WEBPACK_IMPORTED_MODULE_7__.a,null,react__WEBPACK_IMPORTED_MODULE_3__.createElement(HookComponent,{style:{height:"150vh"}}))}).add("With threshold 100%",function(){return react__WEBPACK_IMPORTED_MODULE_3__.createElement(_ScrollWrapper_index__WEBPACK_IMPORTED_MODULE_7__.a,null,react__WEBPACK_IMPORTED_MODULE_3__.createElement(HookComponent,{options:{threshold:1}},"Header is fully inside the viewport"))}).add("With threshold 50%",function(){return react__WEBPACK_IMPORTED_MODULE_3__.createElement(_ScrollWrapper_index__WEBPACK_IMPORTED_MODULE_7__.a,null,react__WEBPACK_IMPORTED_MODULE_3__.createElement(HookComponent,{options:{threshold:.5}},"Header is 50% inside the viewport"))}).add("Taller then viewport with threshold 100%",function(){return react__WEBPACK_IMPORTED_MODULE_3__.createElement(_ScrollWrapper_index__WEBPACK_IMPORTED_MODULE_7__.a,null,react__WEBPACK_IMPORTED_MODULE_3__.createElement(HookComponent,{options:{threshold:1},style:{height:"150vh"}},"Header is fully inside the viewport"))})}.call(this,__webpack_require__(144)(module))},584:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _home_travis_build_thebuilder_react_intersection_observer_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(14),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),_storybook_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(59),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(7),_src_index__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(4),_ScrollWrapper_index__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(3),_Root_index__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(175),_Status__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(91),Header=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(function(props,ref){return react__WEBPACK_IMPORTED_MODULE_1__.createElement("div",{ref:ref,style:Object(_home_travis_build_thebuilder_react_intersection_observer_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__.a)({display:"flex",minHeight:"25vh",flexDirection:"column",justifyContent:"center",alignItems:"center",textAlign:"center",background:"#148bb4",color:"azure"},props.style)},void 0!==props.inView?react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Status__WEBPACK_IMPORTED_MODULE_7__.a,{inView:props.inView}):null,react__WEBPACK_IMPORTED_MODULE_1__.createElement("h2",null,props.children))});Object(_storybook_react__WEBPACK_IMPORTED_MODULE_2__.storiesOf)("Intersection Observer",module).add("Basic",function(){return react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ScrollWrapper_index__WEBPACK_IMPORTED_MODULE_5__.a,null,react__WEBPACK_IMPORTED_MODULE_1__.createElement(_src_index__WEBPACK_IMPORTED_MODULE_4__.a,{onChange:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_3__.action)("Child Observer inview")},function(_ref){var inView=_ref.inView,ref=_ref.ref;return react__WEBPACK_IMPORTED_MODULE_1__.createElement(Header,{ref:ref,inView:inView},"Header inside viewport: ",inView.toString())}))}).add("With root margin",function(){return react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ScrollWrapper_index__WEBPACK_IMPORTED_MODULE_5__.a,null,react__WEBPACK_IMPORTED_MODULE_1__.createElement(_src_index__WEBPACK_IMPORTED_MODULE_4__.a,{rootMargin:"150px",onChange:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_3__.action)("Child Observer inview")},function(_ref2){var inView=_ref2.inView,ref=_ref2.ref;return react__WEBPACK_IMPORTED_MODULE_1__.createElement(Header,{ref:ref,inView:inView},"Header inside viewport: ",inView.toString())}))}).add("Start in view",function(){return react__WEBPACK_IMPORTED_MODULE_1__.createElement(_src_index__WEBPACK_IMPORTED_MODULE_4__.a,{onChange:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_3__.action)("Child Observer inview")},function(_ref3){var inView=_ref3.inView,ref=_ref3.ref;return react__WEBPACK_IMPORTED_MODULE_1__.createElement(Header,{ref:ref,inView:inView},"Header inside viewport: ",inView.toString())})}).add("Plain children",function(){return react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ScrollWrapper_index__WEBPACK_IMPORTED_MODULE_5__.a,null,react__WEBPACK_IMPORTED_MODULE_1__.createElement(_src_index__WEBPACK_IMPORTED_MODULE_4__.a,{onChange:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_3__.action)("Child Observer inview"),className:"custom-class",as:"div"},react__WEBPACK_IMPORTED_MODULE_1__.createElement(Header,null,"Plain children")))}).add("Taller then viewport",function(){return react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ScrollWrapper_index__WEBPACK_IMPORTED_MODULE_5__.a,null,react__WEBPACK_IMPORTED_MODULE_1__.createElement(_src_index__WEBPACK_IMPORTED_MODULE_4__.a,{onChange:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_3__.action)("Child Observer inview")},function(_ref4){var inView=_ref4.inView,ref=_ref4.ref;return react__WEBPACK_IMPORTED_MODULE_1__.createElement(Header,{ref:ref,style:{height:"150vh"}},"Header is inside the viewport: ",inView.toString())}))}).add("With threshold 100%",function(){return react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ScrollWrapper_index__WEBPACK_IMPORTED_MODULE_5__.a,null,react__WEBPACK_IMPORTED_MODULE_1__.createElement(_src_index__WEBPACK_IMPORTED_MODULE_4__.a,{threshold:1,onChange:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_3__.action)("Child Observer inview")},function(_ref5){var inView=_ref5.inView,ref=_ref5.ref;return react__WEBPACK_IMPORTED_MODULE_1__.createElement(Header,{ref:ref,inView:inView},"Header is fully inside the viewport: ",inView.toString())}))}).add("With threshold 50%",function(){return react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ScrollWrapper_index__WEBPACK_IMPORTED_MODULE_5__.a,null,react__WEBPACK_IMPORTED_MODULE_1__.createElement(_src_index__WEBPACK_IMPORTED_MODULE_4__.a,{threshold:.5,onChange:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_3__.action)("Child Observer inview")},function(_ref6){var inView=_ref6.inView,ref=_ref6.ref;return react__WEBPACK_IMPORTED_MODULE_1__.createElement(Header,{ref:ref,inView:inView},"Header is 50% inside the viewport: ",inView.toString())}))}).add("Taller then viewport with threshold 100%",function(){return react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ScrollWrapper_index__WEBPACK_IMPORTED_MODULE_5__.a,null,react__WEBPACK_IMPORTED_MODULE_1__.createElement(_src_index__WEBPACK_IMPORTED_MODULE_4__.a,{threshold:1},function(_ref7){var inView=_ref7.inView,ref=_ref7.ref;return react__WEBPACK_IMPORTED_MODULE_1__.createElement(Header,{ref:ref,inView:inView,style:{height:"150vh"}},"Header is fully inside the viewport: ",inView.toString())}))}).add("With threshold array",function(){return react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ScrollWrapper_index__WEBPACK_IMPORTED_MODULE_5__.a,null,react__WEBPACK_IMPORTED_MODULE_1__.createElement(_src_index__WEBPACK_IMPORTED_MODULE_4__.a,{threshold:[0,.25,.5,.75,1],onChange:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_3__.action)("Hit threshold trigger")},function(_ref8){var inView=_ref8.inView,ref=_ref8.ref;return react__WEBPACK_IMPORTED_MODULE_1__.createElement(Header,{ref:ref,inView:inView},"Header is inside threshold: ",inView.toString()," - onChange triggers multiple times.")}))}).add("With root",function(){return react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Root_index__WEBPACK_IMPORTED_MODULE_6__.a,null,function(node){return react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ScrollWrapper_index__WEBPACK_IMPORTED_MODULE_5__.a,null,react__WEBPACK_IMPORTED_MODULE_1__.createElement(_src_index__WEBPACK_IMPORTED_MODULE_4__.a,{threshold:0,root:node,onChange:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_3__.action)("Child Observer inview")},function(_ref9){var inView=_ref9.inView,ref=_ref9.ref;return react__WEBPACK_IMPORTED_MODULE_1__.createElement(Header,{ref:ref,inView:inView},"Header is inside the root viewport: ",inView.toString())}))})}).add("With root and rootMargin",function(){return react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Root_index__WEBPACK_IMPORTED_MODULE_6__.a,null,function(node){return react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ScrollWrapper_index__WEBPACK_IMPORTED_MODULE_5__.a,null,react__WEBPACK_IMPORTED_MODULE_1__.createElement(_src_index__WEBPACK_IMPORTED_MODULE_4__.a,{threshold:0,root:node,rootMargin:"100px",onChange:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_3__.action)("Child Observer inview")},function(_ref10){var inView=_ref10.inView,ref=_ref10.ref;return react__WEBPACK_IMPORTED_MODULE_1__.createElement(Header,{ref:ref,inView:inView},"Header is inside the root viewport: ",inView.toString())}))})}).add("Trigger once",function(){return react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ScrollWrapper_index__WEBPACK_IMPORTED_MODULE_5__.a,null,react__WEBPACK_IMPORTED_MODULE_1__.createElement(_src_index__WEBPACK_IMPORTED_MODULE_4__.a,{threshold:1,triggerOnce:!0,onChange:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_3__.action)("Child Observer inview")},function(_ref11){var inView=_ref11.inView,ref=_ref11.ref;return react__WEBPACK_IMPORTED_MODULE_1__.createElement(Header,{ref:ref,inView:inView},"Header was fully inside the viewport: ",inView.toString())}))}).add("Multiple observers",function(){return react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ScrollWrapper_index__WEBPACK_IMPORTED_MODULE_5__.a,null,react__WEBPACK_IMPORTED_MODULE_1__.createElement(_src_index__WEBPACK_IMPORTED_MODULE_4__.a,{threshold:1,onChange:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_3__.action)("Child Observer inview")},function(_ref12){var inView=_ref12.inView,ref=_ref12.ref;return react__WEBPACK_IMPORTED_MODULE_1__.createElement(Header,{ref:ref},"Header 1 is fully inside the viewport: ",inView.toString())}),react__WEBPACK_IMPORTED_MODULE_1__.createElement(_src_index__WEBPACK_IMPORTED_MODULE_4__.a,{threshold:1,onChange:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_3__.action)("Child Observer inview")},function(_ref13){var inView=_ref13.inView,ref=_ref13.ref;return react__WEBPACK_IMPORTED_MODULE_1__.createElement(Header,{ref:ref},"Header 2 is fully inside the viewport: ",inView.toString())}))})}.call(this,__webpack_require__(144)(module))},91:function(module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),statusElement={position:"fixed",top:0,right:0,width:32,height:32,background:"rgba(255, 255, 255, 0.6)",display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"0 0 0 10px"},emojiIcon={width:"1em",height:"1em",lineHeight:1};__webpack_exports__.a=function Status(_ref){var inView=_ref.inView;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{style:statusElement},inView?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{role:"img","aria-label":"In view",style:emojiIcon},"✅"):react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{role:"img","aria-label":"Outside the viewport",style:emojiIcon},"❌"))}}},[[272,1,2]]]);
//# sourceMappingURL=main.aebb5744c03a9d6e2de6.bundle.js.map