export function toggleAppSidebarMinify(e, appState, setAppState) {
  e.preventDefault();
  if (appState.appSidebarMinify) {
    setAppState((state) => ({ ...state, appSidebarFloatSubMenuActive: false }));
  }
  setAppState((state) => ({
    ...state,
    appSidebarMinify: !state.appSidebarMinify,
  }));
}
export function toggleAppSidebarMobile(e, appState, setAppState) {
  e.preventDefault();
  setAppState((state) => ({
    ...state,
    appSidebarMobileToggled: !state.appSidebarMobileToggled,
  }));
}
export function handleSetAppSidebarNone(value, appState, setAppState) {
  setAppState((state) => ({ ...state, appSidebarNone: value }));
}
export function handleSetAppSidebarMinified(value, appState, setAppState) {
  setAppState((state) => ({ ...state, appSidebarMinify: value }));
}
export function handleSetAppSidebarWide(value, appState, setAppState) {
  setAppState((state) => ({ ...state, appSidebarWide: value }));
}
export function handleSetAppSidebarLight(value, appState, setAppState) {
  setAppState((state) => ({ ...state, appSidebarLight: value }));
}
export function handleSetAppSidebarTransparent(value, appState, setAppState) {
  setAppState((state) => ({ ...state, appSidebarTransparent: value }));
}
export function handleSetAppSidebarSearch(value, appState, setAppState) {
  setAppState((state) => ({ ...state, appSidebarSearch: value }));
}
export function handleSetAppSidebarFixed(value, appState, setAppState) {
  if (value === true && !appState.appHeaderFixed) {
    alert(
      "Default Header with Fixed Sidebar option is not supported. Proceed with Fixed Header with Fixed Sidebar."
    );
    setAppState((state) => ({ ...state, appHeaderFixed: value }));
  }
  setAppState((state) => ({ ...state, appSidebarFixed: value }));
}
export function handleSetAppSidebarGrid(value, appState, setAppState) {
  setAppState((state) => ({ ...state, appSidebarGrid: value }));
}

export function toggleAppSidebarEnd(e, appState, setAppState) {
  e.preventDefault();
  setAppState((state) => ({
    ...state,
    appSidebarEndToggled: !state.appSidebarEndToggled,
  }));
}
export function toggleAppSidebarEndMobile(e, appState, setAppState) {
  e.preventDefault();
  setAppState((state) => ({
    ...state,
    appSidebarEndMobileToggled: !state.appSidebarEndMobileToggled,
  }));
}
export function handleSetAppSidebarEnd(value, appState, setAppState) {
  setAppState((state) => ({ ...state, appSidebarEnd: value }));
}

var appSidebarFloatSubMenuRemove;
var appSidebarFloatSubMenuCalculate;
var appSidebarFloatSubMenuRemoveTime = 250;

export function handleAppSidebarFloatSubMenuOnMouseOver(
  e,
  appState,
  setAppState
) {
  clearTimeout(appSidebarFloatSubMenuRemove);
  clearTimeout(appSidebarFloatSubMenuCalculate);
}
export function handleAppSidebarFloatSubMenuOnMouseOut(appState, setAppState) {
  appSidebarFloatSubMenuRemove = setTimeout(() => {
    setAppState((state) => ({ ...state, appSidebarFloatSubMenuActive: false }));
  }, appSidebarFloatSubMenuRemoveTime);
}
export function handleAppSidebarOnMouseOver(e, menu, appState, setAppState) {
  if (appState.appSidebarMinify) {
    if (menu.children) {
      var left =
        document.getElementById("sidebar").offsetWidth +
        document.getElementById("sidebar").offsetLeft +
        "px";

      clearTimeout(appSidebarFloatSubMenuRemove);
      clearTimeout(appSidebarFloatSubMenuCalculate);

      setAppState((state) => ({
        ...state,
        appSidebarFloatSubMenu: menu,
        appSidebarFloatSubMenuActive: true,
        appSidebarFloatSubMenuLeft: left,
      }));

      var offset = e.currentTarget.offsetParent.getBoundingClientRect();

      appSidebarFloatSubMenuCalculate = setTimeout(() => {
        var targetTop = offset.top;
        var windowHeight = window.innerHeight;
        var targetHeight = document.querySelector(
          ".app-sidebar-float-submenu-container"
        ).offsetHeight;
        var top, bottom, arrowTop, arrowBottom, lineTop, lineBottom;

        if (windowHeight - targetTop > targetHeight) {
          top = offset.top + "px";
          bottom = "auto";
          arrowTop = "20px";
          arrowBottom = "auto";
          lineTop = "20px";
          lineBottom = "auto";
        } else {
          var aBottom = windowHeight - targetTop - 21;
          top = "auto";
          bottom = "0";
          arrowTop = "auto";
          arrowBottom = aBottom + "px";
          lineTop = "20px";
          lineBottom = aBottom + "px";
        }

        setAppState((state) => ({
          appSidebarFloatSubMenuTop: top,
          appSidebarFloatSubMenuBottom: bottom,
          appSidebarFloatSubMenuLineTop: lineTop,
          appSidebarFloatSubMenuLineBottom: lineBottom,
          appSidebarFloatSubMenuArrowTop: arrowTop,
          appSidebarFloatSubMenuArrowBottom: arrowBottom,
          appSidebarFloatSubMenuOffset: offset,
        }));
      }, 0);
    } else {
      appSidebarFloatSubMenuRemove = setTimeout(() => {
        setAppState((state) => ({
          ...state,
          appSidebarFloatSubMenu: "",
          appSidebarFloatSubMenuActive: false,
        }));
      }, appSidebarFloatSubMenuRemoveTime);
    }
  }
}
export function handleAppSidebarOnMouseOut(e, appState, setAppState) {
  if (appState.appSidebarMinify) {
    appSidebarFloatSubMenuRemove = setTimeout(() => {
      setAppState((state) => ({
        ...state,
        appSidebarFloatSubMenuActive: false,
      }));
    }, appSidebarFloatSubMenuRemoveTime);
  }
}
export function handleAppSidebarFloatSubMenuClick(appState, setAppState) {
  if (appState.appSidebarMinify) {
    const windowHeight = window.innerHeight;
    const targetHeight = document.getElementById(
      "app-sidebar-float-submenu"
    ).offsetHeight;
    const targetTop = appState.appSidebarFloatSubMenuOffset.top;
    const top = windowHeight - targetTop > targetHeight ? targetTop : "auto";
    const left =
      appState.appSidebarFloatSubMenuOffset.left +
      document.getElementById("sidebar").offsetWidth +
      "px";
    const bottom = windowHeight - targetTop > targetHeight ? "auto" : "0";
    const arrowTop = windowHeight - targetTop > targetHeight ? "20px" : "auto";
    const arrowBottom =
      windowHeight - targetTop > targetHeight
        ? "auto"
        : windowHeight - targetTop - 21 + "px";
    const lineTop = windowHeight - targetTop > targetHeight ? "20px" : "auto";
    const lineBottom =
      windowHeight - targetTop > targetHeight
        ? "auto"
        : windowHeight - targetTop - 21 + "px";

    setAppState((state) => ({
      ...state,
      appSidebarFloatSubMenuTop: top,
      appSidebarFloatSubMenuLeft: left,
      appSidebarFloatSubMenuBottom: bottom,
      appSidebarFloatSubMenuLineTop: lineTop,
      appSidebarFloatSubMenuLineBottom: lineBottom,
      appSidebarFloatSubMenuArrowTop: arrowTop,
      appSidebarFloatSubMenuArrowBottom: arrowBottom,
    }));
  }
}

export function handleSetAppContentNone(value, appState, setAppState) {
  setAppState((state) => ({ ...state, appContentNone: value }));
}
export function handleSetAppContentClass(value, appState, setAppState) {
  setAppState((state) => ({ ...state, appContentClass: value }));
}
export function handleSetAppContentFullHeight(value, appState, setAppState) {
  setAppState((state) => ({ ...state, appContentFullHeight: value }));
}

export function handleSetAppHeaderNone(value, appState, setAppState) {
  setAppState((state) => ({ ...state, appHeaderNone: value }));
}
export function handleSetAppHeaderFixed(value, appState, setAppState) {
  if (value === false && appState.appSidebarFixed) {
    alert(
      "Default Header with Fixed Sidebar option is not supported. Proceed with Default Header with Default Sidebar."
    );
    setAppState((state) => ({ ...state, appSidebarFixed: false }));
  }
  setAppState((state) => ({ ...state, appHeaderFixed: value }));
}
export function handleSetAppHeaderInverse(value, appState, setAppState) {
  setAppState((state) => ({ ...state, appHeaderInverse: value }));
}
export function handleSetAppHeaderMegaMenu(value, appState, setAppState) {
  setAppState((state) => ({ ...state, appHeaderMegaMenu: value }));
}
export function handleSetAppHeaderLanguageBar(value, appState, setAppState) {
  setAppState((state) => ({ ...state, appHeaderLanguageBar: value }));
}

export function handleSetAppTopMenu(value, appState, setAppState) {
  setAppState((state) => ({ ...state, appTopMenu: value }));
}
export function toggleAppTopMenuMobile(e, appState, setAppState) {
  e.preventDefault();
  setAppState((state) => ({
    ...state,
    appTopMenuMobileToggled: !state.appTopMenuMobileToggled,
  }));
}
export function handleSetAppSidebarTwo(value, appState, setAppState) {
  setAppState((state) => ({ ...state, appSidebarTwo: value }));
  setAppState((state) => ({ ...state, appSidebarEndToggled: value }));
}
export function handleSetAppBoxedLayout(value, appState, setAppState) {
  if (value === true) {
    document.body.classList.add("boxed-layout");
  } else {
    document.body.classList.remove("boxed-layout");
  }
}
export function handleSetAppDarkMode(value, appState, setAppState) {
  if (value === true) {
    document.body.classList.add("dark-mode");
  } else {
    document.body.classList.remove("dark-mode");
  }
  handleSetColor(appState, setAppState);
}
export function handleSetAppGradientEnabled(value, appState, setAppState) {
  setAppState((state) => ({ ...state, appGradientEnabled: value }));
}
export function handleSetFont(appState, setAppState) {
  setAppState((state) => ({
    ...state,
    font: {
      family: window
        .getComputedStyle(document.body)
        .getPropertyValue("--bs-body-font-family")
        .trim(),
      size: window
        .getComputedStyle(document.body)
        .getPropertyValue("--bs-body-font-size")
        .trim(),
      weight: window
        .getComputedStyle(document.body)
        .getPropertyValue("--bs-body-font-family")
        .trim(),
    },
  }));
}
export function handleSetColor(appState, setAppState) {
  setAppState((state) => ({
    ...state,
    color: {
      componentColor: window
        .getComputedStyle(document.body)
        .getPropertyValue("--app-component-color")
        .trim(),
      componentBg: window
        .getComputedStyle(document.body)
        .getPropertyValue("--app-component-bg")
        .trim(),
      dark: window
        .getComputedStyle(document.body)
        .getPropertyValue("--bs-dark")
        .trim(),
      light: window
        .getComputedStyle(document.body)
        .getPropertyValue("--bs-light")
        .trim(),
      blue: window
        .getComputedStyle(document.body)
        .getPropertyValue("--bs-blue")
        .trim(),
      indigo: window
        .getComputedStyle(document.body)
        .getPropertyValue("--bs-indigo")
        .trim(),
      purple: window
        .getComputedStyle(document.body)
        .getPropertyValue("--bs-purple")
        .trim(),
      pink: window
        .getComputedStyle(document.body)
        .getPropertyValue("--bs-pink")
        .trim(),
      red: window
        .getComputedStyle(document.body)
        .getPropertyValue("--bs-red")
        .trim(),
      orange: window
        .getComputedStyle(document.body)
        .getPropertyValue("--bs-orange")
        .trim(),
      yellow: window
        .getComputedStyle(document.body)
        .getPropertyValue("--bs-yellow")
        .trim(),
      green: window
        .getComputedStyle(document.body)
        .getPropertyValue("--bs-green")
        .trim(),
      success: window
        .getComputedStyle(document.body)
        .getPropertyValue("--bs-success")
        .trim(),
      teal: window
        .getComputedStyle(document.body)
        .getPropertyValue("--bs-teal")
        .trim(),
      cyan: window
        .getComputedStyle(document.body)
        .getPropertyValue("--bs-cyan")
        .trim(),
      white: window
        .getComputedStyle(document.body)
        .getPropertyValue("--bs-white")
        .trim(),
      gray: window
        .getComputedStyle(document.body)
        .getPropertyValue("--bs-gray")
        .trim(),
      lime: window
        .getComputedStyle(document.body)
        .getPropertyValue("--bs-lime")
        .trim(),
      gray100: window
        .getComputedStyle(document.body)
        .getPropertyValue("--bs-gray-100")
        .trim(),
      gray200: window
        .getComputedStyle(document.body)
        .getPropertyValue("--bs-gray-200")
        .trim(),
      gray300: window
        .getComputedStyle(document.body)
        .getPropertyValue("--bs-gray-300")
        .trim(),
      gray400: window
        .getComputedStyle(document.body)
        .getPropertyValue("--bs-gray-400")
        .trim(),
      gray500: window
        .getComputedStyle(document.body)
        .getPropertyValue("--bs-gray-500")
        .trim(),
      gray600: window
        .getComputedStyle(document.body)
        .getPropertyValue("--bs-gray-600")
        .trim(),
      gray700: window
        .getComputedStyle(document.body)
        .getPropertyValue("--bs-gray-700")
        .trim(),
      gray800: window
        .getComputedStyle(document.body)
        .getPropertyValue("--bs-gray-800")
        .trim(),
      gray900: window
        .getComputedStyle(document.body)
        .getPropertyValue("--bs-gray-900")
        .trim(),
      black: window
        .getComputedStyle(document.body)
        .getPropertyValue("--bs-black")
        .trim(),
      componentColorRgb: window
        .getComputedStyle(document.body)
        .getPropertyValue("--app-component-color-rgb")
        .trim(),
      componentBgRgb: window
        .getComputedStyle(document.body)
        .getPropertyValue("--app-component-bg-rgb")
        .trim(),
      darkRgb: window
        .getComputedStyle(document.body)
        .getPropertyValue("--bs-dark-rgb")
        .trim(),
      lightRgb: window
        .getComputedStyle(document.body)
        .getPropertyValue("--bs-light-rgb")
        .trim(),
      blueRgb: window
        .getComputedStyle(document.body)
        .getPropertyValue("--bs-blue-rgb")
        .trim(),
      indigoRgb: window
        .getComputedStyle(document.body)
        .getPropertyValue("--bs-indigo-rgb")
        .trim(),
      purpleRgb: window
        .getComputedStyle(document.body)
        .getPropertyValue("--bs-purple-rgb")
        .trim(),
      pinkRgb: window
        .getComputedStyle(document.body)
        .getPropertyValue("--bs-pink-rgb")
        .trim(),
      redRgb: window
        .getComputedStyle(document.body)
        .getPropertyValue("--bs-red-rgb")
        .trim(),
      orangeRgb: window
        .getComputedStyle(document.body)
        .getPropertyValue("--bs-orange-rgb")
        .trim(),
      yellowRgb: window
        .getComputedStyle(document.body)
        .getPropertyValue("--bs-yellow-rgb")
        .trim(),
      greenRgb: window
        .getComputedStyle(document.body)
        .getPropertyValue("--bs-green-rgb")
        .trim(),
      successRgb: window
        .getComputedStyle(document.body)
        .getPropertyValue("--bs-success-rgb")
        .trim(),
      tealRgb: window
        .getComputedStyle(document.body)
        .getPropertyValue("--bs-teal-rgb")
        .trim(),
      cyanRgb: window
        .getComputedStyle(document.body)
        .getPropertyValue("--bs-cyan-rgb")
        .trim(),
      whiteRgb: window
        .getComputedStyle(document.body)
        .getPropertyValue("--bs-white-rgb")
        .trim(),
      grayRgb: window
        .getComputedStyle(document.body)
        .getPropertyValue("--bs-gray-rgb")
        .trim(),
      limeRgb: window
        .getComputedStyle(document.body)
        .getPropertyValue("--bs-lime-rgb")
        .trim(),
      gray100Rgb: window
        .getComputedStyle(document.body)
        .getPropertyValue("--bs-gray-100-rgb")
        .trim(),
      gray200Rgb: window
        .getComputedStyle(document.body)
        .getPropertyValue("--bs-gray-200-rgb")
        .trim(),
      gray300Rgb: window
        .getComputedStyle(document.body)
        .getPropertyValue("--bs-gray-300-rgb")
        .trim(),
      gray400Rgb: window
        .getComputedStyle(document.body)
        .getPropertyValue("--bs-gray-400-rgb")
        .trim(),
      gray500Rgb: window
        .getComputedStyle(document.body)
        .getPropertyValue("--bs-gray-500-rgb")
        .trim(),
      gray600Rgb: window
        .getComputedStyle(document.body)
        .getPropertyValue("--bs-gray-600-rgb")
        .trim(),
      gray700Rgb: window
        .getComputedStyle(document.body)
        .getPropertyValue("--bs-gray-700-rgb")
        .trim(),
      gray800Rgb: window
        .getComputedStyle(document.body)
        .getPropertyValue("--bs-gray-800-rgb")
        .trim(),
      gray900Rgb: window
        .getComputedStyle(document.body)
        .getPropertyValue("--bs-gray-900-rgb")
        .trim(),
      blackRgb: window
        .getComputedStyle(document.body)
        .getPropertyValue("--bs-black-rgb")
        .trim(),
    },
  }));
}
export function handleSetAppTheme(value) {
  var newTheme = "theme-" + value;
  for (var x = 0; x < document.body.classList.length; x++) {
    if (
      document.body.classList[x].indexOf("theme-") > -1 &&
      document.body.classList[x] !== newTheme
    ) {
      document.body.classList.remove(document.body.classList[x]);
    }
  }
  document.body.classList.add(newTheme);
}

export function handleScroll(appState, setAppState) {
  if (window.scrollY > 0) {
    setAppState((state) => ({ ...state, hasScroll: true }));
  } else {
    setAppState((state) => ({ ...state, hasScroll: false }));
  }
  var elm = document.getElementsByClassName("nvtooltip");
  for (var i = 0; i < elm.length; i++) {
    elm[i].classList.add("d-none");
  }
}

export const fullState = {
  authUser: false,
  appTheme: "",
  appDarkMode: false,
  appGradientEnabled: false,

  appHeaderNone: false,
  appHeaderFixed: true,
  appHeaderInverse: false,
  appHeaderMegaMenu: false,
  appHeaderLanguageBar: false,
  hasScroll: false,
  appSidebarNone: false,
  appSidebarWide: false,
  appSidebarLight: false,
  appSidebarMinify: false,
  appSidebarMobileToggled: false,
  appSidebarTransparent: false,
  appSidebarSearch: false,
  appSidebarFixed: true,
  appSidebarGrid: false,

  appSidebarFloatSubMenuActive: false,
  appSidebarFloatSubMenu: "",
  appSidebarFloatSubMenuTop: "auto",
  appSidebarFloatSubMenuLeft: "auto",
  appSidebarFloatSubMenuBottom: "auto",
  appSidebarFloatSubMenuLineTop: "auto",
  appSidebarFloatSubMenuLineBottom: "auto",
  appSidebarFloatSubMenuArrowTop: "auto",
  appSidebarFloatSubMenuArrowBottom: "auto",
  appSidebarFloatSubMenuOffset: "",

  appContentNone: false,
  appContentClass: "",
  appContentFullHeight: false,

  appTopMenu: false,
  appTopMenuMobileToggled: false,

  appSidebarTwo: false,

  appSidebarEnd: false,
  appSidebarEndToggled: false,
  appSidebarEndMobileToggled: false,

  font: {
    family: window
      .getComputedStyle(document.body)
      .getPropertyValue("--bs-body-font-family")
      .trim(),
    size: window
      .getComputedStyle(document.body)
      .getPropertyValue("--bs-body-font-size")
      .trim(),
    weight: window
      .getComputedStyle(document.body)
      .getPropertyValue("--bs-body-font-family")
      .trim(),
  },
  color: {
    componentColor: window
      .getComputedStyle(document.body)
      .getPropertyValue("--app-component-color")
      .trim(),
    componentBg: window
      .getComputedStyle(document.body)
      .getPropertyValue("--app-component-bg")
      .trim(),
    dark: window
      .getComputedStyle(document.body)
      .getPropertyValue("--bs-dark")
      .trim(),
    light: window
      .getComputedStyle(document.body)
      .getPropertyValue("--bs-light")
      .trim(),
    blue: window
      .getComputedStyle(document.body)
      .getPropertyValue("--bs-blue")
      .trim(),
    indigo: window
      .getComputedStyle(document.body)
      .getPropertyValue("--bs-indigo")
      .trim(),
    purple: window
      .getComputedStyle(document.body)
      .getPropertyValue("--bs-purple")
      .trim(),
    pink: window
      .getComputedStyle(document.body)
      .getPropertyValue("--bs-pink")
      .trim(),
    red: window
      .getComputedStyle(document.body)
      .getPropertyValue("--bs-red")
      .trim(),
    orange: window
      .getComputedStyle(document.body)
      .getPropertyValue("--bs-orange")
      .trim(),
    yellow: window
      .getComputedStyle(document.body)
      .getPropertyValue("--bs-yellow")
      .trim(),
    green: window
      .getComputedStyle(document.body)
      .getPropertyValue("--bs-green")
      .trim(),
    success: window
      .getComputedStyle(document.body)
      .getPropertyValue("--bs-success")
      .trim(),
    teal: window
      .getComputedStyle(document.body)
      .getPropertyValue("--bs-teal")
      .trim(),
    cyan: window
      .getComputedStyle(document.body)
      .getPropertyValue("--bs-cyan")
      .trim(),
    white: window
      .getComputedStyle(document.body)
      .getPropertyValue("--bs-white")
      .trim(),
    gray: window
      .getComputedStyle(document.body)
      .getPropertyValue("--bs-gray")
      .trim(),
    lime: window
      .getComputedStyle(document.body)
      .getPropertyValue("--bs-lime")
      .trim(),
    gray100: window
      .getComputedStyle(document.body)
      .getPropertyValue("--bs-gray-100")
      .trim(),
    gray200: window
      .getComputedStyle(document.body)
      .getPropertyValue("--bs-gray-200")
      .trim(),
    gray300: window
      .getComputedStyle(document.body)
      .getPropertyValue("--bs-gray-300")
      .trim(),
    gray400: window
      .getComputedStyle(document.body)
      .getPropertyValue("--bs-gray-400")
      .trim(),
    gray500: window
      .getComputedStyle(document.body)
      .getPropertyValue("--bs-gray-500")
      .trim(),
    gray600: window
      .getComputedStyle(document.body)
      .getPropertyValue("--bs-gray-600")
      .trim(),
    gray700: window
      .getComputedStyle(document.body)
      .getPropertyValue("--bs-gray-700")
      .trim(),
    gray800: window
      .getComputedStyle(document.body)
      .getPropertyValue("--bs-gray-800")
      .trim(),
    gray900: window
      .getComputedStyle(document.body)
      .getPropertyValue("--bs-gray-900")
      .trim(),
    black: window
      .getComputedStyle(document.body)
      .getPropertyValue("--bs-black")
      .trim(),
    componentColorRgb: window
      .getComputedStyle(document.body)
      .getPropertyValue("--app-component-color-rgb")
      .trim(),
    componentBgRgb: window
      .getComputedStyle(document.body)
      .getPropertyValue("--app-component-bg-rgb")
      .trim(),
    darkRgb: window
      .getComputedStyle(document.body)
      .getPropertyValue("--bs-dark-rgb")
      .trim(),
    lightRgb: window
      .getComputedStyle(document.body)
      .getPropertyValue("--bs-light-rgb")
      .trim(),
    blueRgb: window
      .getComputedStyle(document.body)
      .getPropertyValue("--bs-blue-rgb")
      .trim(),
    indigoRgb: window
      .getComputedStyle(document.body)
      .getPropertyValue("--bs-indigo-rgb")
      .trim(),
    purpleRgb: window
      .getComputedStyle(document.body)
      .getPropertyValue("--bs-purple-rgb")
      .trim(),
    pinkRgb: window
      .getComputedStyle(document.body)
      .getPropertyValue("--bs-pink-rgb")
      .trim(),
    redRgb: window
      .getComputedStyle(document.body)
      .getPropertyValue("--bs-red-rgb")
      .trim(),
    orangeRgb: window
      .getComputedStyle(document.body)
      .getPropertyValue("--bs-orange-rgb")
      .trim(),
    yellowRgb: window
      .getComputedStyle(document.body)
      .getPropertyValue("--bs-yellow-rgb")
      .trim(),
    greenRgb: window
      .getComputedStyle(document.body)
      .getPropertyValue("--bs-green-rgb")
      .trim(),
    successRgb: window
      .getComputedStyle(document.body)
      .getPropertyValue("--bs-success-rgb")
      .trim(),
    tealRgb: window
      .getComputedStyle(document.body)
      .getPropertyValue("--bs-teal-rgb")
      .trim(),
    cyanRgb: window
      .getComputedStyle(document.body)
      .getPropertyValue("--bs-cyan-rgb")
      .trim(),
    whiteRgb: window
      .getComputedStyle(document.body)
      .getPropertyValue("--bs-white-rgb")
      .trim(),
    grayRgb: window
      .getComputedStyle(document.body)
      .getPropertyValue("--bs-gray-rgb")
      .trim(),
    limeRgb: window
      .getComputedStyle(document.body)
      .getPropertyValue("--bs-lime-rgb")
      .trim(),
    gray100Rgb: window
      .getComputedStyle(document.body)
      .getPropertyValue("--bs-gray-100-rgb")
      .trim(),
    gray200Rgb: window
      .getComputedStyle(document.body)
      .getPropertyValue("--bs-gray-200-rgb")
      .trim(),
    gray300Rgb: window
      .getComputedStyle(document.body)
      .getPropertyValue("--bs-gray-300-rgb")
      .trim(),
    gray400Rgb: window
      .getComputedStyle(document.body)
      .getPropertyValue("--bs-gray-400-rgb")
      .trim(),
    gray500Rgb: window
      .getComputedStyle(document.body)
      .getPropertyValue("--bs-gray-500-rgb")
      .trim(),
    gray600Rgb: window
      .getComputedStyle(document.body)
      .getPropertyValue("--bs-gray-600-rgb")
      .trim(),
    gray700Rgb: window
      .getComputedStyle(document.body)
      .getPropertyValue("--bs-gray-700-rgb")
      .trim(),
    gray800Rgb: window
      .getComputedStyle(document.body)
      .getPropertyValue("--bs-gray-800-rgb")
      .trim(),
    gray900Rgb: window
      .getComputedStyle(document.body)
      .getPropertyValue("--bs-gray-900-rgb")
      .trim(),
    blackRgb: window
      .getComputedStyle(document.body)
      .getPropertyValue("--bs-black-rgb")
      .trim(),
  },
};
