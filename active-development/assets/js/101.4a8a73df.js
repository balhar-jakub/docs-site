(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{377:function(e,t,o){"use strict";o.r(t);var i=o(15),r=Object(i.a)({},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"installing-zowe-runtime-from-a-convenience-build"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#installing-zowe-runtime-from-a-convenience-build","aria-hidden":"true"}},[e._v("#")]),e._v(" Installing Zowe runtime from a convenience build")]),e._v(" "),o("p",[e._v("You install the Zowe™ convenience build by running shell script within a Unix System Services (USS) shell.")]),e._v(" "),o("ol",[o("li",[o("a",{attrs:{href:"#obtaining-and-preparing-the-convenience-build"}},[e._v("Obtaining and preparing the convenience build")])]),e._v(" "),o("li",[o("a",{attrs:{href:"#installing-the-zowe-runtime"}},[e._v("Installing the Zowe runtime")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"#step-1-locate-the-install-directory"}},[e._v("Step 1: Locate the install directory")])]),e._v(" "),o("li",[o("a",{attrs:{href:"#step-2-review-the-zowe-installyaml-file"}},[e._v("Step 2: Review the "),o("code",[e._v("zowe-install.yaml")]),e._v(" file")])]),e._v(" "),o("li",[o("a",{attrs:{href:"#step-3-execute-the-zowe-installsh-script"}},[e._v("Step 3: Execute the "),o("code",[e._v("zowe-install.sh")]),e._v(" script")])])])])]),e._v(" "),o("h2",{attrs:{id:"obtaining-and-preparing-the-convenience-build"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#obtaining-and-preparing-the-convenience-build","aria-hidden":"true"}},[e._v("#")]),e._v(" Obtaining and preparing the convenience build")]),e._v(" "),o("p",[e._v("The Zowe installation file for Zowe z/OS components are distributed as a PAX file that contains the runtimes and the scripts to install and launch the z/OS runtime. For each release, there is a PAX file named "),o("code",[e._v("zowe-v.r.m.pax")]),e._v(", where")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("v")]),e._v(" indicates the version")]),e._v(" "),o("li",[o("code",[e._v("r")]),e._v(" indicates the release number")]),e._v(" "),o("li",[o("code",[e._v("m")]),e._v(" indicates the modification number")])]),e._v(" "),o("p",[e._v("The numbers are incremented each time a release is created so the higher the numbers, the later the release.")]),e._v(" "),o("p",[e._v("To download the PAX file, open your web browser and click the "),o("strong",[e._v("Zowe z/OS Components")]),e._v(" button on the "),o("a",{attrs:{href:"https://zowe.org/#download",target:"_blank",rel:"noopener noreferrer"}},[e._v("Zowe Download"),o("OutboundLink")],1),e._v(" website to save it to a folder on your desktop. After you download the PAX file, follow the instructions to verify the PAX file and prepare it to install the Zowe runtime.")]),e._v(" "),o("p",[o("strong",[e._v("Follow these steps:")])]),e._v(" "),o("ol",[o("li",[o("p",[e._v("Verify the integrity of the PAX file to ensure that the file you download is officially distributed by the Zowe project.")]),e._v(" "),o("p",[e._v("Follow the instructions in the "),o("strong",[e._v("Verify Hash and Signature of Zowe Binary")]),e._v(" section on the post-download page "),o("code",[e._v("https://d1xozlojgf8voe.cloudfront.net/post_download.html?version=v.r.m")]),e._v(" after you download the official build. For example, the post-download page for Version 1.4.0 is "),o("a",{attrs:{href:"https://d1xozlojgf8voe.cloudfront.net/post_download.html?version=1.4.0",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://d1xozlojgf8voe.cloudfront.net/post_download.html?version=1.4.0"),o("OutboundLink")],1),e._v(".")])]),e._v(" "),o("li",[o("p",[e._v("Transfer the PAX file to z/OS.")]),e._v(" "),o("p",[o("strong",[e._v("Follow these steps:")])]),e._v(" "),o("p",[e._v("a. Open a terminal in Mac OS/Linux, or command prompt in Windows OS, and navigate to the directory where you downloaded the Zowe PAX file.")]),e._v(" "),o("p",[e._v("b. Connect to z/OS using SFTP. Issue the following command:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("sftp <userID@ip.of.zos.box>\n")])])]),o("p",[e._v("If SFTP is not available or if you prefer to use FTP, you can issue the following command instead:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("ftp <userID@ip.of.zos.box>\n")])])]),o("p",[o("strong",[e._v("Note:")]),e._v(" When you use FTP, switch to binary file transfer mode by issuing the following command:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("bin\n")])])]),o("p",[e._v("c. Navigate to the target directory that you wish to transfer the Zowe PAX file into on z/OS.")]),e._v(" "),o("p",[o("strong",[e._v("Note:")]),e._v(" After you connect to z/OS and enter your password, you enter into the Unix file system. The following commands are useful:")]),e._v(" "),o("ul",[o("li",[e._v("To see what directory you are in, type "),o("code",[e._v("pwd")]),e._v(".")]),e._v(" "),o("li",[e._v("To switch directory, type "),o("code",[e._v("cd")]),e._v(".")]),e._v(" "),o("li",[e._v("To list the contents of a directory, type "),o("code",[e._v("ls")]),e._v(".")]),e._v(" "),o("li",[e._v("To create a directory, type "),o("code",[e._v("mkdir")]),e._v(".")])]),e._v(" "),o("p",[e._v("d. When you are in the directory you want to transfer the Zowe PAX file into, issue the following command:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("put <zowe-v.r.m>.pax\n")])])]),o("p",[e._v("Where "),o("em",[e._v("zowe-v.r.m")]),e._v(" is a variable that indicates the name of the PAX file you downloaded.")]),e._v(" "),o("p",[o("strong",[e._v("Note:")]),e._v(" When your terminal is connected to z/OS through FTP or SFTP, you can prepend commands with "),o("code",[e._v("l")]),e._v(" to have them issued against your desktop.  To list the contents of a directory on your desktop, type "),o("code",[e._v("lls")]),e._v(" where "),o("code",[e._v("ls")]),e._v(" lists contents of a directory on z/OS.")])]),e._v(" "),o("li",[o("p",[e._v("When the PAX file is transferred, expand the PAX file by issuing the following command in an SSH session:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("pax -ppx -rf <zowe-v.r.m>.pax\n")])])]),o("p",[e._v("Where "),o("em",[e._v("zowe-v.r.m")]),e._v(" is a variable that indicates the name of the PAX file you downloaded.")]),e._v(" "),o("p",[e._v("This will expand to a file structure.")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("   /files\n   /install\n   /scripts\n   ...\n")])])]),o("p",[o("strong",[e._v("Note")]),e._v(": The PAX file will expand into the current directory. A good practice is to keep the installation directory apart from the directory that contains the PAX file.  To do this, you can create a directory such as "),o("code",[e._v("/zowe/paxes")]),e._v(" that contains the PAX files, and another such as "),o("code",[e._v("/zowe/builds")]),e._v(".  Use SFTP to transfer the Zowe PAX file into the "),o("code",[e._v("/zowe/paxes")]),e._v(" directory, use the "),o("code",[e._v("cd")]),e._v(" command to switch into "),o("code",[e._v("/zowe/builds")]),e._v(" and issue the command "),o("code",[e._v("pax -ppx -rf ../paxes/<zowe-v.r.m>.pax")]),e._v(".  The "),o("code",[e._v("/install")]),e._v(" folder will be created inside the "),o("code",[e._v("zowe/builds")]),e._v(" directory from where the installation can be launched.")])])]),e._v(" "),o("h2",{attrs:{id:"installing-the-zowe-runtime"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#installing-the-zowe-runtime","aria-hidden":"true"}},[e._v("#")]),e._v(" Installing the Zowe runtime")]),e._v(" "),o("p",[e._v("To install Zowe API Mediation Layer, Zowe Application Framework, and z/OS Services, you install the Zowe runtime on z/OS.")]),e._v(" "),o("p",[o("strong",[e._v("Follow these steps:")])]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"#step-1:-locate-the-install-directory"}},[e._v("Step 1: Locate the install directory")])]),e._v(" "),o("li",[o("a",{attrs:{href:"#step-2:-review-the-%60zowe-install.yaml%60-file"}},[e._v("Step 2: Review the "),o("code",[e._v("zowe-install.yaml")]),e._v(" file")])]),e._v(" "),o("li",[o("a",{attrs:{href:"#step-3:-install-and-configure-the-zowe-runtime"}},[e._v("Step 3: Execute the "),o("code",[e._v("zowe-install.sh")]),e._v(" script")])])]),e._v(" "),o("h3",{attrs:{id:"step-1-locate-the-install-directory"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#step-1-locate-the-install-directory","aria-hidden":"true"}},[e._v("#")]),e._v(" Step 1: Locate the install directory")]),e._v(" "),o("p",[e._v("Navigate to the directory where the installation archive is extracted. Locate the "),o("code",[e._v("/install")]),e._v(" directory.")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("  /install\n    /zowe-install.sh\n    /zowe-install.yaml\n")])])]),o("h3",{attrs:{id:"step-2-review-the-zowe-install-yaml-file"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#step-2-review-the-zowe-install-yaml-file","aria-hidden":"true"}},[e._v("#")]),e._v(" Step 2: Review the "),o("code",[e._v("zowe-install.yaml")]),e._v(" file")]),e._v(" "),o("p",[e._v("Review the "),o("code",[e._v("zowe-install.yaml")]),e._v(" file which contains the "),o("code",[e._v("install:rootDir")]),e._v(" property that is used by the installation.")]),e._v(" "),o("p",[o("code",[e._v("install:rootDir")]),e._v(" is the directory that Zowe installs to create a Zowe runtime. The default directory is "),o("code",[e._v("~/zowe/v.r.m")]),e._v(" where "),o("em",[e._v("v")]),e._v(" is the Zowe version number, "),o("em",[e._v("r")]),e._v(" is the release number and "),o("em",[e._v("m")]),e._v(" is the modification number, for example, 1.0.0 or 1.2.11. The user's home directory is the default value. This ensures that the user who performs the installation has permission to create the directories that are required for the installation. If the Zowe runtime will be maintained by multiple users, it is recommended to use another directory based on your site's conventions.")]),e._v(" "),o("p",[e._v("You can run the installation process multiple times with different values in the "),o("code",[e._v("zowe-install.yaml")]),e._v(" file to create separate installations of the Zowe runtime. Ensure that the directory where Zowe will be installed is empty. The install script exits if the directory is not empty and creates the directory if it does not exist.")]),e._v(" "),o("h3",{attrs:{id:"step-3-install-and-configure-the-zowe-runtime"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#step-3-install-and-configure-the-zowe-runtime","aria-hidden":"true"}},[e._v("#")]),e._v(" Step 3: Install and configure the Zowe runtime")]),e._v(" "),o("p",[e._v("You install and configure the Zowe runtime by executing the "),o("code",[e._v("zowe-install.sh")]),e._v(" script. The "),o("code",[e._v("zowe-install.sh")]),e._v(" mode performs two steps.")]),e._v(" "),o("ol",[o("li",[e._v("Install a Zowe runtime into the "),o("code",[e._v("root_dir")]),e._v(" folder.")]),e._v(" "),o("li",[e._v("Configure the runtime directory so that an instance of the ZOWESVR STC can be launched which will start the Zowe address spaces.")])]),e._v(" "),o("p",[e._v("It's recommended that you install the Zowe runtime first by running the "),o("code",[e._v("zowe-install.sh -I")]),e._v(" option that just performs the first installation step to create the runtime directory. Then, configure the runtime directory separately following instructions in "),o("router-link",{attrs:{to:"/user-guide/configure-zowe-runtime.html#configuring-the-zowe-runtime-directory"}},[e._v("Configuring the Zowe runtime directory")]),e._v(". Alternatively, you can both install and configure the Zowe runtime by running a single command "),o("code",[e._v("zowe-install.sh")]),e._v(" without the "),o("code",[e._v("-I")]),e._v(" parameter. In this case, ensure that you review "),o("router-link",{attrs:{to:"/user-guide/configure-zowe-runtime.html#configuring-the-zowe-runtime-directory"}},[e._v("Configuring the Zowe runtime directory")]),e._v(" before you run the command "),o("code",[e._v("zowe-install.sh")]),e._v(".")],1),e._v(" "),o("p",[e._v("In this documentation, the steps of creating the runtime directory and configuring the runtime directory are described separately. The configuration step is the same for a Zowe runtime whether it is installed from a convenience build or from an SMP/E distribution.")]),e._v(" "),o("p",[o("strong",[e._v("Follow these steps:")])]),e._v(" "),o("ol",[o("li",[o("p",[e._v("Create the Zowe runtime directory.")]),e._v(" "),o("p",[e._v("With the current directory being the "),o("code",[e._v("/install")]),e._v(" directory, execute the script "),o("code",[e._v("zowe-install.sh")]),e._v(" by issuing the following command:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("zowe-install.sh -I\n")])])]),o("p",[o("strong",[e._v("Note:")]),e._v(" If you leave off the "),o("code",[e._v("-I")]),e._v(" parameter, the "),o("code",[e._v("zowe-install.sh")]),e._v(" script will create and also configure the Zowe runtime directory using the "),o("code",[e._v("rootDir:")]),e._v(" value. If you choose to do this, make sure that you have reviewed "),o("router-link",{attrs:{to:"/user-guide/configure-zowe-runtime.html#configuring-the-zowe-runtime-directory"}},[e._v("Configuring the Zowe runtime directory")]),e._v(". If you run "),o("code",[e._v("zowe-install.sh")]),e._v(" without the "),o("code",[e._v("-I")]),e._v(" parameter the file "),o("code",[e._v("zowe-install.yaml")]),e._v(" containing parameter values used to drive the configuration will be in the same "),o("code",[e._v("/install")]),e._v(" directory as location of "),o("code",[e._v("zowe-install.sh")]),e._v(".  If you use the "),o("code",[e._v("-I")]),e._v(" option and configure post install which is the recommended approach the "),o("code",[e._v("zowe-install.yaml")]),e._v(" file will be in the "),o("code",[e._v("scripts/config")]),e._v(" directory of the "),o("code",[e._v("rootDir:")]),e._v(".")],1),e._v(" "),o("p",[e._v("During execution of "),o("code",[e._v("zowe-install.sh")]),e._v(" You might receive the following error that the file cannot be executed:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("zowe-install.sh: cannot execute\n")])])]),o("p",[e._v("The error occurs when the install script does not have execute permission. To add execute permission, issue the following command:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("chmod u+x zowe-install.sh\n")])])]),o("p",[e._v("Each time the install script runs, it creates a log file that contains more information. This file is stored in the "),o("code",[e._v("/log")]),e._v(" directory and is created with a date and time stamp name, for example "),o("code",[e._v("/log/2019-02-05-18-08-35.log")]),e._v(". This file is copied across into the runtime folder into which Zowe is installed, and contains useful information to help diagnose problems that may occur during an install.")])]),e._v(" "),o("li",[o("p",[e._v("(Optional) Check prerequisites.")]),e._v(" "),o("p",[e._v("Before you continue with the configuration of the Zowe runtime, you can check the install condition of the required prerequisites for Zowe. To do this, issue the following command with the current directory being the "),o("code",[e._v("/install")]),e._v(" directory.")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("zowe-check-prereqs.sh\n")])])]),o("p",[e._v("The script writes messages to your terminal window. The results are marked "),o("code",[e._v("OK")]),e._v(", "),o("code",[e._v("Info")]),e._v(", "),o("code",[e._v("Warning")]),e._v(" or "),o("code",[e._v("Error")]),e._v(". Correct any reported errors and rerun the command to ensure that no errors exist before you run the "),o("code",[e._v("zowe-install.sh")]),e._v(" script to install the Zowe runtime. The "),o("code",[e._v("zowe-check-prereqs.sh")]),e._v(" script does not change any settings. You can run it as often as required before you configure the Zowe runtime directory.")])]),e._v(" "),o("li",[o("p",[e._v("Configure the Zowe runtime directory.")]),e._v(" "),o("p",[e._v("For the convenience build, the location of the Zowe runtime directory will be the value of the "),o("code",[e._v("install:rootDir")]),e._v(" parameter from the "),o("code",[e._v("zowe-install.yaml")]),e._v(". Follow the instructions in "),o("router-link",{attrs:{to:"/user-guide/configure-zowe-runtime.html"}},[e._v("Configuring the Zowe runtime directory")]),e._v(" to complete this step.")],1)])])])},[],!1,null,null,null);t.default=r.exports}}]);