(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{170:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var i=n(1),a=n(11),o=(n(0),n(185)),r=n(187),c={id:"whitesource",title:"Whitesource"},s={id:"development-infrastructure/code-validation/whitesource",title:"Whitesource",description:"import useBaseUrl from '@docusaurus/useBaseUrl';",source:"@site/../docs/development-infrastructure/code-validation/whitesource.mdx",permalink:"/docs/development-infrastructure/code-validation/whitesource",editUrl:"https://github.com/finos/open-developer-platform/edit/master/website/../docs/development-infrastructure/code-validation/whitesource.mdx",sidebar:"mainSidebar",previous:{title:"Sonar Cloud",permalink:"/docs/development-infrastructure/code-validation/sonarcloud"},next:{title:"Project Documentation",permalink:"/docs/development-infrastructure/project-documentation"}},l=[{value:"Glossary",id:"glossary",children:[]},{value:"Features",id:"features",children:[]},{value:"WhiteSource Policies",id:"whitesource-policies",children:[]},{value:"Integration with GitHub.com",id:"integration-with-githubcom",children:[{value:"FINOS default configurations",id:"finos-default-configurations",children:[]},{value:"Enable WhiteSource scanning",id:"enable-whitesource-scanning",children:[]},{value:"Testing WhiteSource scanning",id:"testing-whitesource-scanning",children:[]},{value:"Configuring WhiteSource scanning",id:"configuring-whitesource-scanning",children:[]}]},{value:"Build integration",id:"build-integration",children:[]},{value:"Request access",id:"request-access",children:[]}],u={rightToc:l};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(i.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("img",{height:"150px",alt:"whitesource-logo",src:Object(r.a)("img/vendors/whitesource-logo.png")}),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(i.a)({parentName:"tr"},{align:null})),Object(o.b)("th",Object(i.a)({parentName:"tr"},{align:"left"})))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(i.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"td"},"Name")),Object(o.b)("td",Object(i.a)({parentName:"tr"},{align:"left"}),"Whitesource")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(i.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"td"},"Status")),Object(o.b)("td",Object(i.a)({parentName:"tr"},{align:"left"}),"Delivered")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(i.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"td"},"Link")),Object(o.b)("td",Object(i.a)({parentName:"tr"},{align:"left"}),Object(o.b)("a",Object(i.a)({parentName:"td"},{href:"whitesourcesoftware.com"}),"whitesourcesoftware.com"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(i.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"td"},"Topics")),Object(o.b)("td",Object(i.a)({parentName:"tr"},{align:"left"}),"Legal, Security, Quality")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(i.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"td"},"Languages")),Object(o.b)("td",Object(i.a)({parentName:"tr"},{align:"left"}),"Javascript")))),Object(o.b)("p",null,Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://www.whitesourcesoftware.com/"}),"WhiteSource")," automatically identi\ufb01es all the open source components and dependencies in your build by constant and automatic cross-referencing of your open source components against WhiteSource\u2019s de\ufb01nitive database of open source repositories.\nWhiteSource provides a dedicated instance to validate and enforce security and legal compliance for all Symphony Software Foundation hosted projects."),Object(o.b)("p",null,"Below are listed the main WhiteSource features that have been adopted by Foundation projects."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Check libraries for outdated versions"),Object(o.b)("li",{parentName:"ol"},"Check libraries for security vulnerabilities"),Object(o.b)("li",{parentName:"ol"},"Check libraries for bugs"),Object(o.b)("li",{parentName:"ol"},"Check libraries for problematic/undefined licenses"),Object(o.b)("li",{parentName:"ol"},"Check libraries for release activity"),Object(o.b)("li",{parentName:"ol"},"Integration with CI environments")),Object(o.b)("h2",{id:"glossary"},"Glossary"),Object(o.b)("p",null,"To avoid confusion, below are listed some WhiteSource concepts that differ with the definitions used within the Foundation."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"A ",Object(o.b)("strong",{parentName:"li"},"FINOS repository")," is a Github repository hosted by the Foundation; in WhiteSource terms, this is called a project"),Object(o.b)("li",{parentName:"ol"},"A ",Object(o.b)("strong",{parentName:"li"},"FINOS Project")," is a logical entity that includes\na. one or more project leaders\nb. a project team\nc. one or more Foundation repositories; if one, project and repository will have the same name.\nd. In WhiteSource terms, this is called a product and can be accessed directly by the WhiteSource main menu; each ",Object(o.b)("strong",{parentName:"li"},"WhiteSource Product")," will list below the projects included."),Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"Foundation WhiteSoure dashboard")," - WhiteSource provides a dedicated instance for the Foundation projects that can be accessed\na. by all project leaders, to check and export project metrics\nb. by Foundation Staff, to configure Foundation WhiteSource policies"),Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"Foundation WhiteSource policies")," - A collection of rules and workflows implemented in the WhiteSource dashboard by the Foundation team to enforce security and legal compliance; below are reported the details."),Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"Alert")," - The visual notification that WhiteSource shows in the main dashboard when a policy violation is found")),Object(o.b)("h2",{id:"features"},"Features"),Object(o.b)("img",{height:"150px",alt:"whitesource-dashboard",src:Object(r.a)("img/vendors/whitesource-dashboard.png")}),Object(o.b)("p",null,"WhiteSource provides the following features to Foundation project leads/committers that have been granted access:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Access the WhiteSource dashboard for one or more projects\na. Access WhiteSource Due Diligence and Risk reports\nb. Browse (and drill down) through project libraries\nc. Browse (and drill down) through licenses found in the project\nd. Check alerts and warnings triggered by policy violations"),Object(o.b)("li",{parentName:"ol"},"Configure WhiteSource build plugins to upload project metrics"),Object(o.b)("li",{parentName:"ol"},"Configure Travis CI (or other CI environments) to continuously\na. validate code against Foundation policies enforced by WhiteSource\nb. fail the build, if any policy violation is found\nc. upload project metrics to the WhiteSource Foundation dashboard")),Object(o.b)("h2",{id:"whitesource-policies"},"WhiteSource Policies"),Object(o.b)("p",null,"Below are the WhiteSource policies that have been configured by the Foundation and are enforced across all integrated projects; all libraries that are scanned in a project are matched against the following policies, in the order reported below, until a policy is matched."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"[SECURITY]"," Reject High Security Vulnerability Severity - any library that contains high level CVEs is marked as Rejected,"),Object(o.b)("li",{parentName:"ol"},"[SECURITY]"," Reject High Security Vulnerability Score - any library that contains CVEs with score higher than 7 is marked as Rejected,"),Object(o.b)("li",{parentName:"ol"},"[QUALITY]"," Reject High Bug Rating - any library ",Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"https://www.whitesourcesoftware.com/open-source-bug-tracking/"}),"high bug rating")," is marked as Rejected,"),Object(o.b)("li",{parentName:"ol"},"[LEGAL]"," Licenses that require review - any library with unknown license is marked as Rejected,"),Object(o.b)("li",{parentName:"ol"},"[QUALITY]"," Reassign Low Version Activity - any library with a low amount of versions released is Reassigned to the project lead for validation,"),Object(o.b)("li",{parentName:"ol"},"[QUALITY]"," Reassign Stale (5 years) Library - any library without a release for more than 5 years is Reassigned to the project lead for validation,"),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"[LEGAL] Reject Problematic (Category X license) libraries - any library using a Category X license, as indicated in our contribution legal requirements, are marked as Rejected."))),Object(o.b)("p",null,"Note that legal policies are currently disabled due to the large amount of false positive generated by dual-licensed libraries. We are working to improve things."),Object(o.b)("h2",{id:"integration-with-githubcom"},"Integration with GitHub.com"),Object(o.b)("p",null,"FINOS have rolled out the ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://whitesource.atlassian.net/wiki/spaces/WD/pages/697696422/WhiteSource+for+GitHub.com"}),"WhiteSource integration for Github.com"),", which enables:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Automatic (and configurable) scanning of all commits on the default branch (commonly master) and Pull Requests"),Object(o.b)("li",{parentName:"ol"},"Automatic (and configurable) scanning of all Pull Requests against the default branch (commonly master)"),Object(o.b)("li",{parentName:"ol"},"Support for most of languages and build tools currently used in FINOS projects"),Object(o.b)("li",{parentName:"ol"},"Creation of GitHub issues with CVE description and meta; please find the issue details on the ",Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"https://whitesource.atlassian.net/wiki/spaces/WD/pages/697696422/WhiteSource+for+GitHub.com#WhiteSourceforGitHub.com-ViewingDetailsofanIssue"}),"WhiteSource docs page"))),Object(o.b)("img",{alt:"whitesource-issue",src:Object(r.a)("img/vendors/whitesource-issue.png")}),Object(o.b)("h3",{id:"finos-default-configurations"},"FINOS default configurations"),Object(o.b)("p",null,"There are 2 configuration files to define at repository level, in order to enable the WhiteSource integration with GitHub.com: .whitesource file configures the bot and whitesource.config configures the WhiteSource agent."),Object(o.b)("h4",{id:"whitesource"},".whitesource"),Object(o.b)("p",null,"Specifies whether to use GitHub Issues or not and points to the WhiteSource agent configuration. You can copy this file definition from ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/finos/project-blueprint"}),"https://github.com/finos/project-blueprint")),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{}),'.whitesource\n{\n  "scanSettings": {\n    "configMode": "LOCAL"\n  },\n  "checkRunSettings": {\n    "vulnerableCheckRunConclusionLevel": "failure"\n  },\n  "issueSettings": {\n    "minSeverityLevel": "LOW"\n  }\n}\n')),Object(o.b)("h4",{id:"whitesourceconfig"},"whitesource.config"),Object(o.b)("p",null,"Specifies build-time configurations, including language-specific settings, file inclusions/exclusions and more. You can copy the default configuration from ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/finos/project-blueprint"}),"FINOS project blueprint"),". More info can be found on ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://whitesource.atlassian.net/wiki/spaces/WD/pages/489160834/Unified+Agent+Configuration+File+Parameters"}),"parameters docs page")),Object(o.b)("h3",{id:"enable-whitesource-scanning"},"Enable WhiteSource scanning"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Read the ",Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"https://whitesource.atlassian.net/wiki/spaces/WD/pages/697696422/WhiteSource+for+GitHub.com"}),"WhiteSource for Github.com integration")," documentation, to know what it does and how"),Object(o.b)("li",{parentName:"ol"},"Email ",Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"mailto:help@finos.org"}),"help@finos.org")," to request the activation of WhiteSource integration on a FINOS hosted project\na. When enabled, the app will create a Pull Request to add a .whitesource file in the codebase root"),Object(o.b)("li",{parentName:"ol"},"Merge the Pull Request raised on point #2")),Object(o.b)("h3",{id:"testing-whitesource-scanning"},"Testing WhiteSource scanning"),Object(o.b)("p",null,"The easiest and less invasive way to test is to create a new branch, add a dependency with security vulnerabilities and commit the change; few minutes later (time depends on build complexity), the app will have created one GitHub Issue for each CVE found."),Object(o.b)("img",{alt:"whitesource-pr-check",src:Object(r.a)("img/vendors/whitesource-pr-check.png")}),Object(o.b)("p",null,"If no issues are created, and want to know if the scan was performed, email ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"mailto:help@finos.org"}),"help@finos.org")," and FINOS team will help you debugging bot's execution."),Object(o.b)("h3",{id:"configuring-whitesource-scanning"},"Configuring WhiteSource scanning"),Object(o.b)("p",null,"False positives are expected, when enabling the WhiteSource integration, because of a long list of factors related with the (sometimes low) quality of the downstream library that you're consuming; being able to fine-tune the WhiteSource agent is very important, in particular excluding files and folders that should not be scanned, which is necessary most of the times."),Object(o.b)("p",null,"To have the ability to exclude files and folders, you must:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Copy the FINOS blueprint ",Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"https://github.com/finos/project-blueprint/blob/master/.whitesource"}),Object(o.b)("strong",{parentName:"a"},".whitesource"))," into your GitHub repository."),Object(o.b)("li",{parentName:"ol"},"Copy the FINOS blueprint ",Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"whitesource.config"}),Object(o.b)("strong",{parentName:"a"},"whitesource.config"))," into your GitHub repository."),Object(o.b)("li",{parentName:"ol"},"Configure your project ",Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"https://github.com/finos/project-blueprint/blob/master/whitesource.config#L11"}),"excludes")," in ",Object(o.b)("inlineCode",{parentName:"li"},"whitesource.config"),"."),Object(o.b)("li",{parentName:"ol"},"Send a Pull Request to your project which includes a change to your dependencies, and see the WhiteSource scanning in action.")),Object(o.b)("p",null,"Please note that there may be additional configurations to apply, based on your build requirements and tools; build-specific configurations can be viewed  on ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://whitesource.atlassian.net/wiki/spaces/WD/pages/804814917/Unified+Agent+Configuration+File+and+Parameters#UnifiedAgentConfigurationFileandParameters-PackageManagerDependencyResolvers"}),"WhiteSource Agent docs"),", and see what applies to your project configuration."),Object(o.b)("h2",{id:"build-integration"},"Build integration"),Object(o.b)("p",null,"As alternative to the GitHub.com integration, WhiteSource also provides an agent (CLI tool) that can be downloaded and executed from any environment; this may be necessary in case the project's build tool or language are not supported by WhiteSource and some custom build logic must be performed to prepare for the scanning."),Object(o.b)("p",null,"Many build servers are supported, including Travis CI, the most used tool used by FINOS hosted projects"),Object(o.b)("p",null,"Glossary\nTo avoid confusion, below are listed some WhiteSource concepts that differ with the definitions used within the Foundation."),Object(o.b)("p",null,"A Foundation repository is a Github repository hosted by the Foundation; in WhiteSource terms, this is called a project\nA Foundation project is a logical entity that includes\none or more project leaders\na project team\none or more Foundation repositories; if one, project and repository will have the same name.\nIn WhiteSource terms, this is called a product and can be accessed directly by the WhiteSource main menu; each WhiteSource product will list below the projects included."),Object(o.b)("h2",{id:"request-access"},"Request access"),Object(o.b)("p",null,"You can request access to the FINOS WhiteSource dashboard if you're part of a FINOS project team; please send an email to ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"mailto:help@finos.org"}),"help@finos.org")," that specifies:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"the email address you'd like to use to login"),Object(o.b)("li",{parentName:"ol"},"the Foundation project you would like to scan with WhiteSource")),Object(o.b)("p",null,"If you login for the first time in WhiteSource and no project have been registered yet, the dashboard will look empty; ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://finosfoundation.atlassian.net/wiki/spaces/FDX/pages/75530409"}),"check how to configure your build")," in order to upload metrics for the first time."))}b.isMDXComponent=!0},185:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return p}));var i=n(0),a=n.n(i);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},b=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=Object(i.forwardRef)((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,r=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=u(n),h=i,p=b["".concat(r,".").concat(h)]||b[h]||d[h]||o;return n?a.a.createElement(p,c({ref:t},l,{components:n})):a.a.createElement(p,c({ref:t},l))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,r[1]=c;for(var l=2;l<o;l++)r[l]=n[l];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},186:function(e,t,n){"use strict";var i=n(0),a=n(56);t.a=function(){return Object(i.useContext)(a.a)}},187:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));n(188);var i=n(186);function a(e){var t=(Object(i.a)().siteConfig||{}).baseUrl,n=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?n+e.slice(1):n+e}},188:function(e,t,n){"use strict";var i=n(5),a=n(15),o=n(189),r="".startsWith;i(i.P+i.F*n(190)("startsWith"),"String",{startsWith:function(e){var t=o(this,e,"startsWith"),n=a(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),i=String(e);return r?r.call(t,i,n):t.slice(n,n+i.length)===i}})},189:function(e,t,n){var i=n(80),a=n(22);e.exports=function(e,t,n){if(i(t))throw TypeError("String#"+n+" doesn't accept regex!");return String(a(e))}},190:function(e,t,n){var i=n(2)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[i]=!1,!"/./"[e](t)}catch(a){}}return!0}}}]);