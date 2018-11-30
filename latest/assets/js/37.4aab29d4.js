(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{236:function(t,e,s){"use strict";s.r(e);var a=s(0),o=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("Github Sample Repo:")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/zowe/webui-scenarios/tree/master/basic-react",target:"_blank",rel:"noopener noreferrer"}},[t._v("basic-react"),s("OutboundLink")],1)])]),t._v(" "),s("p",[t._v("For this section we have provided a react sample (through an Iframe), which connects to the API defined in the API extension sample.")]),t._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("Make sure that you first expose an API to connect to before following the steps below. To use the sample provided, first go through the steps listed in "),s("router-link",{attrs:{to:"./../extend-api/liberty-api-sample.html"}},[t._v("API extension sample")]),t._v(".")],1)]),t._v(" "),t._m(1),t._v(" "),s("ol",[t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),s("li",[t._v("Create a "),s("code",[t._v("pluginDefinition.json")]),t._v(" "),s("router-link",{attrs:{to:"./../extend-api/ReactJSUI.html#configuring-your-app-for-zowe"}},[t._v("following the guide")]),t._v(" and copy to "),s("code",[t._v("Desktop/<Your_Project_Name>/")]),t._v(" "),t._m(6)],1),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),s("li",[t._v("Edit this folder (using vi) to read:")])]),t._v(" "),t._m(9),t._m(10),t._v(" "),t._m(11),t._v(" "),s("p",[t._v("Upon restarting the server, navigate to the zlux server.")]),t._v(" "),t._m(12),t._v(" "),s("p",[t._v("Check to make sure that your new plugin has been added and that it is able to interact with the server.")]),t._v(" "),s("p",[t._v("If it is not able to interact with the server and you are getting CORS errors, you may need to update the server to accept all connections.")]),t._v(" "),t._m(13),t._v(" "),s("p",[t._v("To update the server:")]),t._v(" "),t._m(14),t._v(" "),t._m(15)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"add-react-app-to-zlux"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#add-react-app-to-zlux","aria-hidden":"true"}},[this._v("#")]),this._v(" Add React app to zLUX")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"to-install"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#to-install","aria-hidden":"true"}},[this._v("#")]),this._v(" To Install")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",[t._v("Point your project to the server hosting you API.\n"),s("ul",[s("li",[t._v("In the sample this can be defined in the "),s("code",[t._v("Constants.js")]),t._v(" file.")]),t._v(" "),s("li",[t._v("The default is: "),s("code",[t._v("localhost:7443")]),t._v(", but otherwise point to your hardware address.")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[this._v("Create a minified version of your project.\n"),e("ul",[e("li",[this._v("Generate minified version using "),e("code",[this._v("npm run build")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[this._v("Create folder for project and create new "),e("code",[this._v("web")]),this._v(" folder inside it.\n"),e("ul",[e("li",[this._v("EX: "),e("code",[this._v("/Desktop/<Your_Project_Name>")]),this._v(" and "),e("code",[this._v("Desktop/<Your_Project_Name>/web")])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",[t._v("Copy built project into "),s("code",[t._v("Desktop/<Your_Project_Name>/web")]),t._v(" "),s("ul",[s("li",[t._v("If using the sample, copy "),s("code",[t._v("app.min.js")]),t._v(" , "),s("code",[t._v("index.html")]),t._v(" , "),s("code",[t._v("icon.png")]),t._v(" and "),s("code",[t._v("css")]),t._v(" into to "),s("code",[t._v("/Desktop/<Your_Project_Name>/web/")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("If using the sample this is included within the project. Copy to "),e("code",[this._v("Desktop/<Your_Project_Name>/")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[this._v("Copy project from "),e("code",[this._v("/Desktop")]),this._v(" to "),e("code",[this._v("<zowe_base>/")]),this._v(" "),e("ul",[e("li",[this._v("Use "),e("code",[this._v("scp <userID>@<server> /Users/path/to/files <zowe_base>/")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[this._v("Create new file within the plugins folder ("),e("code",[this._v("<zowe_base>/zlux-example-server-plugins")]),this._v(") called "),e("code",[this._v("com.<Your_Project_Name>.json")]),this._v(" "),e("ul",[e("li",[e("code",[this._v("touch com.<Your_Project_Name>.json")])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{attrs:{class:"token property"}},[t._v('"identifier"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"com.<Your_Project_Name>"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{attrs:{class:"token property"}},[t._v('"pluginLocation"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"../../<Your_Project_Name>"')]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ol",{attrs:{start:"9"}},[s("li",[t._v("Run "),s("code",[t._v("./deploy.sh")]),t._v(" found in "),s("code",[t._v("<zowe_base>/zlux-build")])]),t._v(" "),s("li",[t._v("Run "),s("code",[t._v("./zowe-stop.sh")]),t._v(" found in "),s("code",[t._v("<zowe_base>/scripts")])]),t._v(" "),s("li",[t._v("Run "),s("code",[t._v("./zowe-start.sh")]),t._v(" found in "),s("code",[t._v("<zowe_base>/scripts")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"verify-install"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#verify-install","aria-hidden":"true"}},[this._v("#")]),this._v(" Verify Install")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("This can be found at: "),e("code",[this._v("https://<base>:<port>/ZLUX/plugins/com.rs.mvd/web/")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"warning custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("WARNING")]),this._v(" "),e("p",[this._v("Note: This is for development purposes only.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Navigate to "),e("code",[this._v("<zowe-base>/explorer-server/wlp/usr/servers/Atlas/server.xml")])]),this._v(" "),e("li",[this._v("Open to the file with vi and paste the following code in.")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{attrs:{class:"token operator"}},[t._v("<")]),s("span",{attrs:{class:"token operator"}},[t._v("!")]),s("span",{attrs:{class:"token operator"}},[t._v("--")]),t._v(" "),s("span",{attrs:{class:"token constant"}},[t._v("FOR")]),t._v(" "),s("span",{attrs:{class:"token constant"}},[t._v("TESTING")]),t._v(" "),s("span",{attrs:{class:"token constant"}},[t._v("ONLY")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("--")]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("cors allowCredentials"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token string"}},[t._v('"true"')]),t._v(" allowedMethods"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token string"}},[t._v('"GET, DELETE, POST, PUT, OPTIONS"')]),t._v(" allowedOrigins"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token string"}},[t._v('"*"')]),t._v(" allowedHeaders"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token string"}},[t._v('"*"')]),t._v(" domain"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token string"}},[t._v('"/"')]),s("span",{attrs:{class:"token operator"}},[t._v("/")]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{attrs:{class:"token operator"}},[t._v("<")]),s("span",{attrs:{class:"token operator"}},[t._v("!")]),s("span",{attrs:{class:"token operator"}},[t._v("--")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("/")]),s("span",{attrs:{class:"token constant"}},[t._v("FOR")]),t._v(" "),s("span",{attrs:{class:"token constant"}},[t._v("TESTING")]),t._v(" "),s("span",{attrs:{class:"token constant"}},[t._v("ONLY")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("--")]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])])}],!1,null,null,null);o.options.__file="react-sample.md";e.default=o.exports}}]);