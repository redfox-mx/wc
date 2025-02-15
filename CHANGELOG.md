## [0.15.1](https://github.com/holejs/wc/compare/v0.15.0...v0.15.1) (2023-10-29)


### Bug Fixes

* **select:** Added new "CSS Custom Props" to modify the color of the options menu ([961bc46](https://github.com/holejs/wc/commit/961bc469b22ef3b5024adf3a2fc12354cbb7688b))



# [0.15.0](https://github.com/holejs/wc/compare/v0.14.3...v0.15.0) (2023-10-25)


### Features

* Added the "change" event to the input fields ([7c63924](https://github.com/holejs/wc/commit/7c63924638a0764f762596cc0906bb33d6df7962))



## [0.14.3](https://github.com/holejs/wc/compare/v0.14.2...v0.14.3) (2023-10-13)


### Bug Fixes

* Fixed message display in input fields ([458ddc3](https://github.com/holejs/wc/commit/458ddc341e139a4592d3ca0d059a53bf1441346c))
* Parsing error in "rules" attr when defining "pattern". Closes [#2](https://github.com/holejs/wc/issues/2) ([9510728](https://github.com/holejs/wc/commit/95107284b78bf585af5757357465f07ffd957689))



## [0.14.2](https://github.com/holejs/wc/compare/v0.14.1...v0.14.2) (2023-10-12)


### Bug Fixes

* **select:** Ensure options are selected within the same x-select. Closes [#1](https://github.com/holejs/wc/issues/1) ([a2defef](https://github.com/holejs/wc/commit/a2defef45389a998f609bd126affe2efc8b4c7b7))



## [0.14.1](https://github.com/holejs/wc/compare/v0.14.0...v0.14.1) (2023-10-11)


### Bug Fixes

* **select:** Corrected the display of error messages when the "hint" is not defined ([0d67126](https://github.com/holejs/wc/commit/0d6712693dd09e028767d17fddc25f8cbb90b656))
* **select:** Fixed the base font and added new CSS Custom Props ([25eca70](https://github.com/holejs/wc/commit/25eca70d0c43698eac8d057375657c74b714e3a2))



# [0.14.0](https://github.com/holejs/wc/compare/v0.13.0...v0.14.0) (2023-10-10)


### Bug Fixes

* Fixed a type issue ([ae8337c](https://github.com/holejs/wc/commit/ae8337ca3274483407e5eb72fdab332c6e409995))


### Features

* **select:** Added validation support, new a11y attributes ([8247ff5](https://github.com/holejs/wc/commit/8247ff5b69dacd0a349339868a0383e1cd470efa))
* **text-field:** Added new a11y attributes and refactored validations ([ff32c93](https://github.com/holejs/wc/commit/ff32c93addffe0a36653d8df56300427982ccb30))



# [0.13.0](https://github.com/holejs/wc/compare/v0.12.0...v0.13.0) (2023-10-06)


### Bug Fixes

* Fixed overlapping of items ([2d5c99e](https://github.com/holejs/wc/commit/2d5c99e5bbe96cf6c22bcbdb2c708a8434d55a34))


### Features

* Add imports and exports of individual components ([4a886d2](https://github.com/holejs/wc/commit/4a886d2d8b83734f62d7a71a4597d80217f57a04))
* Added import and export of components ([425502d](https://github.com/holejs/wc/commit/425502d1df84a6cc99ace43ea8ee32e8429b600a))
* **select:** "Multiple selection" was integrated into the component ([c17f495](https://github.com/holejs/wc/commit/c17f495eef0d92dfea9a9228639253bc728ee06f))
* **select:** Added "hint" property ([062feda](https://github.com/holejs/wc/commit/062feda1c8d7d8f85df8f301b4eb961980911b4d))
* **select:** Added basic functionality ([dca5cd6](https://github.com/holejs/wc/commit/dca5cd65a30f856dd3ec5cb5f486d4ff227694db))
* **select:** Added new CSS custom props ([2df1593](https://github.com/holejs/wc/commit/2df15933b79aea56dff9ac0680470434280a9f0f))
* **select:** Added support for the "disabled" and "readonly" property ([54fc234](https://github.com/holejs/wc/commit/54fc23463b0aa8be5e8a83e0c413338d643c9ca8))
* **select:** Added the "color" property and corrected the expansion functionality ([7fb2c2a](https://github.com/holejs/wc/commit/7fb2c2a4da3449c8cccf2d9b3d2c71db6dc3a1fd))
* **select:** Added the "label" property ([8245ba5](https://github.com/holejs/wc/commit/8245ba557124b0405fbaf14886cbb26c2a83220c))
* **select:** Implement semantic control for expanding and collapsing options menu ([f8de8be](https://github.com/holejs/wc/commit/f8de8bebc847d7613c668d0d7291cd197a263e2c))



# [0.12.0](https://github.com/holejs/wc/compare/v0.11.1...v0.12.0) (2023-09-22)


### Features

* **button:** Added support for the "disabled" property ([f3829e9](https://github.com/holejs/wc/commit/f3829e97e5227d37eecdc37ba1f3d3fdaca907aa))



## [0.11.1](https://github.com/holejs/wc/compare/v0.11.0...v0.11.1) (2023-09-17)


### Bug Fixes

* **text-field:** EventListeners are removed when the component is removed from the DOM ([8f4af47](https://github.com/holejs/wc/commit/8f4af47f0ab561fa6d13e217cfebb135c65037ca))
* **text-field:** Updated the style of the clear button in text fields ([f7989b9](https://github.com/holejs/wc/commit/f7989b99101e79b43302b045586a228ce0da7dca))



# [0.11.0](https://github.com/holejs/wc/compare/v0.10.0...v0.11.0) (2023-09-17)


### Features

* **text-field:** Add clearable functionality ([471c2f8](https://github.com/holejs/wc/commit/471c2f89aad0e6a6ecfec640a4ffdf4d307a5c24))
* **text-field:** Added "disable" and "readonly" functionality ([7f1740d](https://github.com/holejs/wc/commit/7f1740d3c73e346591ce3313cf17cb07a036893c))



# [0.10.0](https://github.com/holejs/wc/compare/v0.9.0...v0.10.0) (2023-09-15)


### Features

* **text-field:** feat: Conditionally render details with role and aria-label attributes ([ba38334](https://github.com/holejs/wc/commit/ba383344fcba32f19f522039bbe29ab537aace0d))



# [0.9.0](https://github.com/holejs/wc/compare/v0.8.0...v0.9.0) (2023-09-10)


### Features

* **radio:** Reset state in form when resetting ([c8653c8](https://github.com/holejs/wc/commit/c8653c8af8aa057c92a2617aebd7d65b7619a9ca))



# [0.8.0](https://github.com/holejs/wc/compare/v0.7.2...v0.8.0) (2023-09-01)


### Bug Fixes

* **radio:** Fixed multiple selection via attributes ([7df17ae](https://github.com/holejs/wc/commit/7df17ae835dc73ddb25ebc31b67db0f5f775af42))


### Features

* **radio:** Added the association to the form ([ac0fb19](https://github.com/holejs/wc/commit/ac0fb191b0532af44069aef4c3cceec27aa14994))
* **radio:** define base component ([e432282](https://github.com/holejs/wc/commit/e4322828a848a0b9f3fb119bcee654ad2f373764))
* **radio:** error messages are displayed ([8a8eefc](https://github.com/holejs/wc/commit/8a8eefcebf67b81b7579667125551655b2dbf513))
* **radio:** prevent multiple selection in the first instance ([81bd4f4](https://github.com/holejs/wc/commit/81bd4f49d6a2f3b15bdd771abc5522b06a8b3665))
* the native messages of the input fields are taken as a second option ([5c2356a](https://github.com/holejs/wc/commit/5c2356a90f85383ae223384a5a80d76e9c0f0f70))



## [0.7.2](https://github.com/holejs/wc/compare/v0.7.1...v0.7.2) (2023-08-17)


### Bug Fixes

* **card:** Fixed color mapping ([24d88c3](https://github.com/holejs/wc/commit/24d88c3348895e26c663a61f1e6ee3ef15b519fd))



## [0.7.1](https://github.com/holejs/wc/compare/v0.7.0...v0.7.1) (2023-08-13)


### Bug Fixes

* **checkbox:** Added support to "reset" and corrections in validations ([34f838b](https://github.com/holejs/wc/commit/34f838bc2813f38ee7f952fdcd3480f229860222))



# [0.7.0](https://github.com/holejs/wc/compare/v0.6.1...v0.7.0) (2023-08-12)


### Features

* **checkbox:** adding native validation ([2499aed](https://github.com/holejs/wc/commit/2499aed5af57103aa457e7ed814a76f3228ec522))
* **checkbox:** the component was attached to the form ([5a28a2c](https://github.com/holejs/wc/commit/5a28a2c44fe90003ae30d00cfd5d6fa45f59757f))



## [0.6.1](https://github.com/holejs/wc/compare/v0.6.0...v0.6.1) (2023-08-10)


### Bug Fixes

* **text-field:** Fixed the color of the slots ([9c7f7cd](https://github.com/holejs/wc/commit/9c7f7cd6f7fec39f3055bce0b4b18d2268a5983f))



# [0.6.0](https://github.com/holejs/wc/compare/v0.5.1...v0.6.0) (2023-08-10)


### Features

* **text-field:** Added "prepend-inner" and "append-inner" slots ([9b6fa2d](https://github.com/holejs/wc/commit/9b6fa2deac24789399f9263682651a6f691d417e))



## [0.5.1](https://github.com/holejs/wc/compare/v0.5.0...v0.5.1) (2023-08-09)


### Bug Fixes

* **text-field:** The allowed textfield types were limited ([b6378b5](https://github.com/holejs/wc/commit/b6378b5c41ea4ae962b226d095cb4961cfbb0c0d))



# [0.5.0](https://github.com/holejs/wc/compare/v0.4.4...v0.5.0) (2023-08-08)


### Features

* **text-field:** Added support for custom validations ([2affa4b](https://github.com/holejs/wc/commit/2affa4b37e026d5a4a5b940fb4be007de5ee427b))



## [0.4.4](https://github.com/holejs/wc/compare/v0.4.3...v0.4.4) (2023-08-08)


### Bug Fixes

* **text-field:** Fixed custom error messages issue ([450449e](https://github.com/holejs/wc/commit/450449eaba4f848e949f88187cbe5da1db574f1c))



## [0.4.3](https://github.com/holejs/wc/compare/v0.4.2...v0.4.3) (2023-08-07)


### Bug Fixes

* **text-field:** Added focus fixes, validations and allows resetting ([544abf0](https://github.com/holejs/wc/commit/544abf04362ca6583e31842795516983dc51f709))



## [0.4.2](https://github.com/holejs/wc/compare/v0.4.1...v0.4.2) (2023-08-07)


### Bug Fixes

* **text-field:** Add conditional check for required validation key and input value in the code ([a868753](https://github.com/holejs/wc/commit/a86875375c860a887be927e25be8dd92a9c55832))



## [0.4.1](https://github.com/holejs/wc/compare/v0.4.0...v0.4.1) (2023-08-07)


### Bug Fixes

* **text-field:** Add syntax validations for rules and fix bug when no rules are set. ([1011950](https://github.com/holejs/wc/commit/1011950ba880ccf7cd6a9b56d30678b26c576c61))
* **text-field:** Added email validation ([2c09807](https://github.com/holejs/wc/commit/2c09807374a791175970652f247945266c1df2ec))



# [0.4.0](https://github.com/holejs/wc/compare/v0.3.0...v0.4.0) (2023-08-07)


### Features

* **text-field:** Add function to catch "Enter" event ([a595432](https://github.com/holejs/wc/commit/a595432ba04e289dca8a697a509745e52db2eeb0))
* **text-field:** Added support for "regular" appearance ([a3ca8e7](https://github.com/holejs/wc/commit/a3ca8e7aad35f437bfe97db226793b24e13e5cf5))
* **text-field:** Added support for the "color" property and accessibility properties. ([add62c5](https://github.com/holejs/wc/commit/add62c5d4c9ea1b9365c793e786f85e3be41c0e4))
* **text-field:** Added the "hint" property ([c90f874](https://github.com/holejs/wc/commit/c90f8742ad4a42c3f3cc00466f1c5fd31309a082))
* **text-field:** Base design added ([5027a7a](https://github.com/holejs/wc/commit/5027a7a4237ceaa24ad9aca6fe775bec018153cc))
* **text-field:** Changed the name from "regular" to "underline" ([f10ecec](https://github.com/holejs/wc/commit/f10ecec9a0c79a5933eed83014c24f8feb1cbbda))
* **text-field:** It is allowed to customize the "placeholder" ([e5f66a3](https://github.com/holejs/wc/commit/e5f66a371102a0dfdc3e51d5877ec5f9d1e1404c))
* **text-field:** It was associated with the form ([9036f74](https://github.com/holejs/wc/commit/9036f741514484a23ad2cd3a7c4f44ebc68514e3))
* **text-field:** native validations were integrated (except the pattern) ([a791162](https://github.com/holejs/wc/commit/a791162bd64e8c9b1f815286f2ef893830244ebe))



# [0.3.0](https://github.com/holejs/wc/compare/v0.2.0...v0.3.0) (2023-08-01)


### Bug Fixes

* **chip:**  define global types ([efbe1a3](https://github.com/holejs/wc/commit/efbe1a3ffcbfb6b6c3d896a390de5b7540d60f42))


### Features

* **alert:** Added support for "text" appearance ([fcb6e79](https://github.com/holejs/wc/commit/fcb6e79b1d19411fd4d5af84c230b6c40e0c4b7a))
* **alert:** Added support for the "dismissible" property ([c85c061](https://github.com/holejs/wc/commit/c85c061000cdc499fea0ae5032de5e11251aaa2f))
* **alert:** Added the "outlined" appearance ([5e5adab](https://github.com/holejs/wc/commit/5e5adab8286563af563f268806e53da93e23ab93))
* **alert:** Color change is allowed ([4c23072](https://github.com/holejs/wc/commit/4c23072ee8285bf8ec472bd14cee556140f168c0))
* **alert:** The basic scheme and operation were defined ([af34d63](https://github.com/holejs/wc/commit/af34d63edbc903df3ee57b54f29cf01ad1361566))



# [0.2.0](https://github.com/holejs/wc/compare/v0.1.0...v0.2.0) (2023-08-01)


### Bug Fixes

* **chip:** The sizes were corrected ([b4a020a](https://github.com/holejs/wc/commit/b4a020a80cd3a2360b8dfbf06abffedd8b014278))


### Features

* **chip:** Added "appearance" property ([ed6ff16](https://github.com/holejs/wc/commit/ed6ff16b2570bde226524541b4f66236ae652b4d))
* **chip:** Added "outlined" appearance ([0036b84](https://github.com/holejs/wc/commit/0036b840aa3ce9b1ac15dd6ea99cba5b8d013566))
* **chip:** Added closable functionality ([0096cca](https://github.com/holejs/wc/commit/0096ccab882eba318ef04c700cb7b70bee585fc6))
* **chip:** Added the "rounded" property ([ae9bad9](https://github.com/holejs/wc/commit/ae9bad99b8d1637ccd35360a82cbfa7a1f402c62))
* **chip:** Added the "text" appearance ([725fe6b](https://github.com/holejs/wc/commit/725fe6bde9d71c6ad8b35503a3aa596b722b7d08))
* **chip:** It is allowed to set different sizes ([093fa05](https://github.com/holejs/wc/commit/093fa053a9896b2b4d6e13f5573687e2c8424508))
* **chip:** The base design is complete ([39ca781](https://github.com/holejs/wc/commit/39ca7810612b55cd68b251a4b76f7ca162d10242))



# [0.1.0](https://github.com/holejs/wc/compare/v0.0.2...v0.1.0) (2023-07-29)


### Features

* **button:** The button is attached to the form ([e5f8e80](https://github.com/holejs/wc/commit/e5f8e8017285d4a6f14843a2945dde664515ab45))



## [0.0.2](https://github.com/holejs/wc/compare/v0.0.1...v0.0.2) (2023-07-29)


### Features

* **button:** Colors are allowed. ([8c0dc3f](https://github.com/holejs/wc/commit/8c0dc3ffef28bf77d5ae7c31c698eada3041f8b8))
* **card:** Added disabled property ([33cbe70](https://github.com/holejs/wc/commit/33cbe7099a3f464d9c8a32f1035ad57bb0f44e30))
* **card:** Added general styles and functionality ([bc6cc34](https://github.com/holejs/wc/commit/bc6cc3487ce2095715e8f1ff2dcab6a872568b15))
* **card:** Added support for outlined variant ([15c9ab9](https://github.com/holejs/wc/commit/15c9ab957cbce1e7572bc887dc6c7c05208ee168))



## 0.0.1 (2023-07-28)


### Features

* **button:** Added ":hover" support to all variants ([427a95f](https://github.com/holejs/wc/commit/427a95fece112db79079fd7d2710dc9cfd09daf9))
* **button:** Added "fab" appearance and other CSS Custom Properties ([8c9d3c0](https://github.com/holejs/wc/commit/8c9d3c065b3c18956195b9af88e295f8fd57ad1c))
* **button:** Added "outlined" appearance ([2693709](https://github.com/holejs/wc/commit/2693709cef6460568efca068432a32d32cae45e3))
* **button:** Added "uppercase", "lowercase" and "capitalize" ([1cacaea](https://github.com/holejs/wc/commit/1cacaeaf1c49145c744e13a5ca969f314ad13b22))
* **button:** Added aria- support ([6f0b701](https://github.com/holejs/wc/commit/6f0b701c78ef62cc0fa87b040ace9c731369c386))
* **button:** Added the "fullwidth" property ([1d1e024](https://github.com/holejs/wc/commit/1d1e02496af7149ab847bf7d5068ae2abce99e18))
* **button:** Added the "icon" appearance ([36a3e58](https://github.com/holejs/wc/commit/36a3e585c5db4f447092518df13b26910bb53ddb))
* **button:** Added the "rounded" property ([944c1ff](https://github.com/holejs/wc/commit/944c1ffa852370e1a56404906a45304db5b9b946))
* **button:** Added the "text" appearance ([0f878f7](https://github.com/holejs/wc/commit/0f878f79684262dc815eb5c614664a9dc2cf57b5))
* **button:** CSS custom props is modified ([6561b1f](https://github.com/holejs/wc/commit/6561b1faf4e4af0d95e168b918098f5fe6134d84))
* **button:** It is allowed to set elevations ([aa543af](https://github.com/holejs/wc/commit/aa543affd19644d2e198fe16c046bbfaf8bcd44c))
* **button:** The structure and base styles of the component were defined ([a2ebdd7](https://github.com/holejs/wc/commit/a2ebdd72e1f9e52ba437bcbdaded866557a9cf21))
* Changed color palette names ([1334f8e](https://github.com/holejs/wc/commit/1334f8eeda53fa060cf8d17f85a33664d6c5748a))
* **ripple:** A new component was created ([8a3a485](https://github.com/holejs/wc/commit/8a3a4856596441d403cefc9b8ef743d5dd5f825b))
* **ripple:** Added the color, opacity and duration property ([fefb6f9](https://github.com/holejs/wc/commit/fefb6f92c1b35f37dd63ac3ef4e0324fa2490089))



