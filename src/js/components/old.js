/* eslint-disable */
"use strict";
svg4everybody(),
  (function () {
    var e = function (a, e) {
      !(function (e, t) {
        e.forEach(function (e) {
          var i = void 0,
            a = void 0;
          (a = "string" == typeof e ? (i = e) : ((i = e[0]), e[1])), t(i, a);
        });
      })(e, function (e, i) {
        bowser[e] && document.documentElement.classList.add("is-" + a + "-" + i);
      });
    };
    e("engine", ["blink", "gecko", ["msedge", "edge"], ["msie", "ie"], "webkit"]),
      e("device", ["mobile", "tablet"]),
      e("browser", [
        "android",
        "bada",
        "blackberry",
        "chrome",
        "firefox",
        "ios",
        "kMeleon",
        ["msedge", "edge"],
        ["msie", "ie"],
        "opera",
        "phantom",
        "qupzilla",
        "safari",
        "sailfish",
        ["samsungBrowser", "samsung"],
        "seamonkey",
        "silk",
        "sleipnir",
        "tizen",
        "ucbrowser",
        "vivaldi",
        "webos",
        ["yandexbrowser", "yandex"],
      ]),
      e("os", ["android", "bada", "blackberry", "chromeos", "firefoxos", "ipad", "iphone", "ipod", "ios", "linux", "mac", "windows", "windowsphone", "sailfish", "tizen", "webos"]);
  })();
var state = { preloaderStatus: !0, isScrolling: !0, prevPath: location.pathname.split("/")[1] || "index" },
  vars = {},
  KEY_UP = 38,
  KEY_DOWN = 40,
  isTransition = !0,
  countVacanciesSlides = 1,
  countAboutSlides = 1;
(vars.$window = $(window)),
  (vars.$document = $(document)),
  (vars.$html = $(document.documentElement)),
  (vars.$body = $(document.body)),
  (vars.$app = $(".app")),
  (vars.$siteNavControls = $(".site-nav-controls")),
  (vars.$sideLink = $(".side-link")),
  (vars.$language = $(".language")),
  (vars.$pagesOverlay = $(".pages-overlay")),
  (vars.$header = $(".header")),
  (vars.$headerLogo = $(".header__logo")),
  (vars.$headerNav = $(".header__nav")),
  (vars.$menuOpenPopup = $(".header__menu-open")),
  (vars.$menuPopup = $(".menu-popup")),
  (vars.$menuPopupOverlay = $(".menu-popup__overlay")),
  (vars.$menuPopupClose = $(".menu-popup__button--close")),
  (vars.$menuPopupContent = $(".menu-popup__content")),
  (vars.$menuPopupContentBlock = $(".menu-popup__content__block")),
  (vars.$menuPopupLink = $(".menu-popup__link a")),
  (vars.$pages = $(".page")),
  (vars.$pageIndex = $(".index-page")),
  (vars.$preloader = $(".preloader")),
  (vars.$preloaderLines = $(".preloader-lines")),
  (vars.$preloaderLogo = $(".preloader__logo")),
  (vars.$preloaderStatus = $(".preloader__status")),
  (vars.$preloaderNum = $(".preloader__status__number")),
  (vars.clipTextObjects = []),
  (vars.indexSliderImages = []),
  (vars.$indexHero = $(".index-hero")),
  (vars.$indexAbout = $(".index-about")),
  (vars.$indexSlidepreview = $(".index-slidepreview")),
  (vars.$indexSlidesContainer = $(".index-slides-container")),
  (vars.$indexPartners = $(".index-partners")),
  (vars.$indexCall = $(".index-call")),
  (vars.$indexHeroHeading = $(".index-hero__heading")),
  (vars.$indexHeroPortfolio = $(".index-portfolio")),
  (vars.$indexHeroPortfolioTimer = $(".index-portfolio__slider-timer")),
  (vars.$indexHeroPortfolioSliderCount = $(".index-portfolio__slider-count")),
  (vars.$indexHeroPartnersContainer = $(".index-portfolio__partners-container")),
  (vars.$indexHeroPartner = $(".index-portfolio__partner")),
  (vars.$indexSlideDown = $(".index-hero .index-slidedown")),
  (vars.$indexAboutSvgIcon = $(".index-about__svg")),
  (vars.$indexAboutHeading = $(".index-about__heading")),
  (vars.$indexAboutText = $(".index-about__text")),
  (vars.$indexAboutParticleIcon = $(".index-about__particle-icon")),
  (vars.$indexSlidepreviewShim = $(".index-slidepreview__shim")),
  (vars.$indexSlidepreviewText = $(".index-slidepreview__text")),
  (vars.$indexSectionHeading = $(".index-section__heading")),
  (vars.$indexSectionText = $(".index-section__text")),
  (vars.$indexSectionShim = $(".index-section__shim")),
  (vars.$indexSectionParticleIcon = $(".index-section__particle-icon")),
  (vars.$indexFeedbackSliderContainer = $(".index-feedback-slider")),
  (vars.$indexCallHeading = $(".index-call__heading")),
  (vars.$indexCallText = $(".index-call__text")),
  (vars.$indexCallParticleIcon = $(".index-call__particle-icon")),
  (vars.$pageVacancies = $(".page--vacancies")),
  (vars.$vacancies = $(".vacancies")),
  (vars.$vacanciesBlockWeSearch = $(".vacancies__block--we-search")),
  (vars.$vacanciesBlockWriteUs = $(".vacancies__block--write-us")),
  (vars.$vacanciesSearchParticleIcon = $(".vacancies__block--we-search__particle-icon-container")),
  (vars.$vacanciesMailParticleIcon = $(".vacancies__block--write-us__particle-icon")),
  (vars.$vacanciesOpenPopup = $(".vacancies__block--we-search__item")),
  (vars.$vacanciesPopup = $(".vacancies__popup")),
  (vars.$vacanciesPopupOverlay = $(".vacancies__popup__overlay")),
  (vars.$vacanciesPopupClose = $(".vacancies__popup__button--close")),
  (vars.$vacanciesPopupContent = $(".vacancies__popup__content")),
  (vars.$vacanciesPopupContentBlock = $(".vacancies__popup__content__block")),
  (vars.$vacanciesWeSearchTitle = $(".vacancies__block--we-search__title")),
  (vars.$vacanciesWeSearchText = $(".vacancies__block--we-search__text")),
  (vars.$vacanciesWeSearchItem = $(".vacancies__block--we-search__item")),
  (vars.$vacanciesWeSearchLeftside = $(".vacancies__block--we-search__leftside")),
  (vars.$vacanciesWeSearchRightside = $(".vacancies__block--we-search__rightside")),
  (vars.$vacanciesScrolldown = $(".vacancies button.index-slidedown")),
  (vars.$vacanciesBlockWriteUsTitle = $(".vacancies__block--write-us__title")),
  (vars.$vacanciesBlockWriteUsText = $(".vacancies__block--write-us__text")),
  (vars.$vacanciesBlockWriteUsBtn = $(".vacancies__block--write-us__button")),
  (vars.$vacanciesBlockWriteUsLeftside = $(".vacancies__block--write-us__button-container")),
  (vars.$vacanciesBlockWriteUsRightside = $(".vacancies__block--write-us__textblock")),
  (vars.projectsSliderImages = []),
  (vars.$projectsSlider = $(".projects__slider")),
  (vars.$projectsSlides = $(".projects__slider__item")),
  (vars.$projectsArrow = $(".projects__slider__nav__item")),
  (vars.$projectsSliderNav = $(".projects__slider__nav")),
  (vars.$projectsSliderCount = $(".projects__slider__nav__count")),
  (vars.$projectsImageSlider = $(".projects__image-slider")),
  (vars.$projectsImageSliderImg = $(".projects__image-slider > img")),
  (vars.$projectsImageSliderShim = $(".projects__image-slider__shim")),
  (vars.$projectsSlideImage = $(".projects__slider__item__image")),
  (vars.$projectsSlideTitle = $(".projects__slider__item__title")),
  (vars.$projectsSlideText = $(".projects__slider__item__text")),
  (vars.$projectsSlideLink = $(".projects__slider__item__link")),
  (vars.$projectsSlideTextblock = $(".projects__slider__item__textblock")),
  (vars.$projectsSlideLabel = $(".projects__slider__item__label")),
  (vars.$pageAbout = $(".page--about")),
  (vars.$about = $(".about")),
  (vars.$aboutParticleIcon = $(".about__block__particle-icon")),
  (vars.$aboutSlidedown = $(".page--about button.index-slidedown")),
  (vars.$aboutMission = $(".about__block--mission")),
  (vars.$aboutWeMake = $(".about__block--we-make")),
  (vars.$aboutPolicy = $(".about__block--policy")),
  (vars.$aboutClientsFeedback = $(".about__block--clients-feedback")),
  (vars.$aboutMissionTitle = $(".about__block--mission__title")),
  (vars.$aboutMissionSubtitle = $(".about__block--mission__subtitle")),
  (vars.$aboutMissionText = $(".about__block--mission__text")),
  (vars.$aboutWeMakeTextblock = $(".about__block--we-make__textblock")),
  (vars.$aboutWeMakeImage = $(".about__block--we-make__image")),
  (vars.$aboutPolicyTitle = $(".about__block--policy__title")),
  (vars.$aboutPolicyText = $(".about__block--policy__text")),
  (vars.$aboutClientsFeedbackItem1 = $(".about__block--clients-feedback__item--1")),
  (vars.$aboutClientsFeedbackItem2 = $(".about__block--clients-feedback__item--2")),
  (vars.$contacts = $(".contacts")),
  (vars.$contactsParticleIcon = $(".contacts__particle-icon")),
  (vars.$contactsTitle = $(".contacts__title")),
  (vars.$contactsText = $(".contacts__text")),
  (vars.$contactsItemImage = $(".contacts__item__image")),
  (vars.$contactsItemImageShim = $(".contacts__item__image__shim")),
  (vars.$contactsItemTextblock = $(".contacts__item__textblock"));
var helpers = {
  getMousePosInElem: function (e, i) {
    var a = e.getBoundingClientRect();
    return { x: i.clientX - a.left, y: i.clientY - a.top };
  },
  isElementPartiallyInViewport: function (e) {
    var i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : $(e).height() / 2,
      a = e.getBoundingClientRect(),
      t = window.innerHeight || document.documentElement.clientHeight,
      s = window.innerWidth || document.documentElement.clientWidth,
      n = a.top <= t - i && 0 <= a.top + a.height,
      o = a.left <= s && 0 <= a.left + a.width;
    return n && o;
  },
  isElementInViewport: function (e) {
    var i = e.getBoundingClientRect(),
      a = window.innerHeight || document.documentElement.clientHeight,
      t = window.innerWidth || document.documentElement.clientWidth;
    return 0 <= i.left && 0 <= i.top && i.left + i.width <= t && i.top + i.height <= a;
  },
  getRandomInteger: function (e, i) {
    var a = e - 0.5 + Math.random() * (i - e + 1);
    return (a = Math.round(a));
  },
  detectIeVersion: function () {
    var e = void 0;
    return bowser.msie && (e = "" + parseInt(bowser.version, 10)), e || !1;
  },
  isBrowserMs: function () {
    return vars.$html.hasClass("is-browser-ie") || vars.$html.hasClass("is-browser-edge");
  },
  isBrowserIe: function () {
    return vars.$html.hasClass("is-browser-ie");
  },
  isBrowserFirefox: function () {
    return vars.$html.hasClass("is-browser-firefox");
  },
  isMobile: function () {
    return vars.$html.hasClass("is-device-mobile");
  },
  isScrolldownKey: function (e) {
    return 34 === e.which || (!e.shiftKey && 32 === e.which) || 40 === e.which;
  },
  isScrollupKey: function (e) {
    return !!(33 === e.which || (e.shiftKey && 32 === e.which) || 38 === e.which);
  },
  showSplittedText: function (a, t, s, n) {
    var o = a.find(".split-char"),
      r = 0;
    a.removeClass("is-animated"),
      o.each(function (e, i) {
        TweenLite.to(i, t, {
          y: 0,
          opacity: 1,
          delay: r,
          onComplete: function () {
            e === Math.floor(o.length / 1.2) && n && n(), e === o.length - 1 && a.addClass("is-animated");
          },
        }),
          (r += s);
      });
  },
};
if ((bowser.msie && $(".ie-shim__version").text(helpers.detectIeVersion()), !bowser.msie)) {
  var preloader = function e() {
      var i = location.pathname.split("/")[1] || "index";
      if (preloaderPercent < 100) 100 < (preloaderPercent += 1) && (preloaderPercent = 100), vars.$preloaderNum.text(preloaderPercent), setTimeout(e, preloaderTimeoutDuration);
      else {
        var a = new TimelineMax({
          onStart: function () {
            vars.$preloaderLines.find(".lines").addClass("lines--" + i);
          },
          onComplete: function () {
            vars.$preloader.addClass("is-hidden"), vars.$preloaderLines.addClass("is-hidden"), TweenMax.set([vars.$preloaderStatus, vars.$preloaderLogo, vars.$preloader], { clearProps: "all" });
          },
        });
        a
          .to(vars.$preloaderStatus, 0.4, { opacity: 0 })
          .to(vars.$preloaderLogo, 0.4, { opacity: 0 }, 0)
          .to(vars.$preloader, 0.5, { width: 0 }, 0.4)
          .add(function () {
            1280 < vars.$window.width() ? $(".is-preloading").addClass("is-hidden").removeClass("is-preloading") : $(".is-preloading").removeClass("is-preloading"), $('.page[data-page="' + i + '"]').removeClass("is-hidden");
          })
          .from($(".preloader-lines .lines__col").eq(0), 1, { y: "-100%", clearProps: "all" }, 0.9)
          .from($(".preloader-lines .lines__column").eq(1), 0.5, { y: "100%", clearProps: "all" }, 0.5)
          .from($(".preloader-lines .lines__column").eq(2), 0.8, { y: "-100%", clearProps: "all" }, 1)
          .from($(".preloader-lines .lines__column").eq(3), 0.5, { y: "100%", clearProps: "all" }, 0.4)
          .from($(".preloader-lines .lines__column").eq(4), 1, { y: "-100%", clearProps: "all" }, 0.8)
          .from($(".preloader-lines .lines__column").eq(5), 1, { y: "100%", clearProps: "all" }, 0.4)
          .from($(".preloader-lines .lines__column").eq(6), 0.6, { y: "-100%", clearProps: "all" }, 1.2)
          .from($(".preloader-lines .lines__column").eq(7), 1, { y: "100%", clearProps: "all" }, 0.7)
          .from($(".preloader-lines .lines__column").eq(8), 0.5, { y: "-100%", clearProps: "all" }, 1.4)
          .from(vars.$header, 0.5, {
            opacity: 0,
            y: -60,
            pointerEvents: "none",
            clearProps: "all",
            onStart: function () {
              state.preloaderStatus = !1;
            },
          })
          .from(vars.$sideLink, 0.5, { x: 60, clearProps: "all" }, "-=0.5")
          .from(vars.$language, 0.5, { opacity: 0, clearProps: "all" })
          .from(vars.$app, 1, {
            display: "none",
            opacity: 0,
            clearProps: "all",
            onStart: function () {
              showPage(i), "index" === i && vars.$document.trigger("indexRoute");
            },
          })
          .to(vars.$preloaderLines, 0.5, { opacity: 0 }, "-=1"),
          $(window).width() <= 1280 && a.timeScale(1.5);
      }
    },
    initMenuSlide = function () {
      var i = $(".header__nav"),
        a = $(".header__nav a"),
        t = $(".header__nav__slide"),
        s = void 0,
        n = void 0;
      function o() {
        if ((i.removeClass("is-hovering"), i.hasClass("header__nav--inner"))) {
          var e = i.find(".is-current");
          return (s = e.width()), (n = e.offset().left - i.offset().left + 5), void TweenLite.to(t, 0.2, { width: s, x: n });
        }
        TweenLite.to(t, 0.2, { scale: 0, x: n });
      }
      function r(e) {
        e.length &&
          ((s = e.width()),
          (n = e.offset().left - i.offset().left + 5),
          (i.hasClass("is-hovering") || i.hasClass("header__nav--inner")) &&
            TweenLite.to(t, 0.3, {
              onStart: function () {
                t.css({ width: s });
              },
              x: n,
              scale: 1,
            }),
          i.hasClass("is-hovering") ||
            i.hasClass("header__nav--inner") ||
            new TimelineMax({
              onComplete: function () {
                i.addClass("is-hovering");
              },
            })
              .to(t, 0, { width: s, x: n })
              .to(t, 0.3, { scale: 1 }));
      }
      function e() {
        var e = i.find(".is-current");
        o(), r(e);
      }
      i.hover(function () {}, o),
        a.hover(function (e) {
          r($(e.currentTarget));
        }),
        a.on("click", function (e) {
          a.removeClass("is-current"), $(e.currentTarget).addClass("is-current").blur();
        }),
        vars.$document.on("routeChange", function () {
          e();
        }),
        e();
    },
    showMenuPopup = function () {
      vars.$body.addClass("is-modal-opened is-modal-opening");
      var e = new TimelineMax({
        onStart: function () {
          vars.$menuPopup.removeClass("is-hidden").focus(), vars.$menuPopupContent.removeClass("is-hidden");
        },
        onComplete: function () {
          vars.$headerNav.addClass("is-hidden"), vars.$body.removeClass("is-modal-opening"), TweenMax.set([vars.$headerNav], { clearProps: "all" });
        },
      });
      e
        .to(vars.$menuOpenPopup, 0.3, { opacity: 0, y: -50 })
        .from(vars.$menuPopupOverlay, 0.3, { opacity: 0, clearProps: "opacity" })
        .from(vars.$menuPopupContent, 0.6, { x: "100%", clearProps: "all" }, 0)
        .from(vars.$menuPopupClose, 0.3, { opacity: 0, y: -50, clearProps: "all" }, 0.3)
        .from(vars.$menuPopupContentBlock, 0.3, { opacity: 0, clearProps: "all" }, 0.6),
        $(window).width() <= 1280 && e.timeScale(2);
    },
    hideMenuPopup = function (e) {
      var i = new TimelineMax({
        onStart: function () {
          vars.$headerNav.removeClass("is-hidden");
        },
        onComplete: function () {
          vars.$body.removeClass("is-modal-opened"),
            vars.$menuPopup.addClass("is-hidden").blur(),
            vars.$menuPopupContent.addClass("is-hidden"),
            TweenMax.set([vars.$menuPopupContentBlock, vars.$menuPopupContent, vars.$menuPopupOverlay, vars.$menuPopupClose], { clearProps: "all" }),
            e && e();
        },
      });
      i
        .to(vars.$menuPopupContentBlock, 0.3, { opacity: 0 })
        .to(vars.$menuPopupOverlay, 0.3, { opacity: 0 })
        .to(vars.$menuPopupContent, 0.6, { x: "100%" }, 0.3)
        .to(vars.$menuPopupClose, 0.3, { opacity: 0, y: -50 }, 0.3)
        .to(vars.$menuOpenPopup, 0.3, { opacity: 1, y: 0, clearProps: "all" }, 0.6),
        $(window).width() <= 1280 && i.timeScale(2);
    },
    distortionSlider = function (t, e) {
      var s = { btnPrev: e.btnPrev || null, btnNext: e.btnNext || null, onInit: e.onInit || null, onSlideChange: e.onSlideChange || null, onForceSlideChange: e.onForceSlideChange || null },
        l = { currentSlide: 0, totalSlides: 0, isLinked: t.is("a"), isSwiping: !1 },
        i = t.find("img"),
        c = [],
        d = [],
        a = !1,
        n = void 0,
        o = new PIXI.loaders.Loader(),
        p = void 0,
        r = [];
      function v(e, i) {
        var a = l.currentSlide;
        new TimelineMax({
          onStart: function () {
            (l.isSwiping = !0), (l.currentSlide = e), s.onSlideChange && !i && s.onSlideChange(l.currentSlide), s.onForceSlideChange && i && s.onForceSlideChange(l.currentSlide);
          },
          onComplete: function () {
            (l.isSwiping = !1), l.isLinked && t.attr("href", c[e]);
          },
        })
          .to(d[a].filter.scale, 1.3, { x: 1e3 + 200 * Math.random(), y: 1e3 + 200 * Math.random() })
          .to(d[l.currentSlide].container, 1, { alpha: 0 }, 0)
          .to(d[e].container, 1, { alpha: 1 }, 0)
          .to(d[e].filter.scale, 1.3, { x: 1, y: 1 }, 0);
      }
      function u() {
        (a = !1), clearInterval(n);
      }
      function h(e, i) {
        e < 0 && (e = l.totalSlides - 1), e >= l.totalSlides && (e = 0), i && u(), v(e);
      }
      function x(e) {
        var i = l.currentSlide - 1;
        l.isSwiping || t.hasClass("is-animating") || h(i, e);
      }
      function m(e) {
        var i = l.currentSlide + 1;
        l.isSwiping || t.hasClass("is-animating") || h(i, e);
      }
      return (
        i.each(function (e, i) {
          c.push($(i).data("link"));
        }),
        i.each(function (e, i) {
          r.push($(i).attr("src"));
        }),
        new Promise(function (a) {
          i.each(function (e, i) {
            var a = $(i).attr("src");
            o.add("image" + e, a);
          }),
            o.load(function (e, i) {
              e.destroy(), a(i);
            });
        }).then(function (e) {
          var n = e.image1.data.naturalWidth,
            o = e.image1.data.naturalHeight,
            r = PIXI.Sprite.fromImage("/images/displacement-filter.png");
          (p = new PIXI.Application({ width: n, height: o, transparent: !0 })),
            (r.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT),
            r.scale.set(0.4 + 0.6 * Math.random()),
            $(p.view).appendTo(t),
            t.attr("href", c[0]),
            (l.totalSlides = i.length),
            1280 < vars.$window.width() ? i.addClass("is-hidden") : i.addClass("is-hide index-portfolio__slider-slide"),
            $.each(e, function (e, i) {
              var a = {};
              (a.container = new PIXI.Container()), (a.bg = PIXI.Sprite.from(i.data)), (a.filter = new PIXI.filters.DisplacementFilter(r));
              var t = "image0" === e ? 1 : 0,
                s = "image0" === e ? 1 : 1e3 + 200 * Math.random();
              d.push(a),
                (a.bg.width = n),
                (a.bg.height = o),
                (a.bg.position.x = 0),
                (a.bg.position.y = 0),
                (a.container.alpha = t),
                a.filter.scale.set(s),
                a.container.addChild(a.bg),
                (a.container.filters = [a.filter]),
                p.stage.addChild(a.container);
            }),
            s.btnPrev.on("click", function () {
              x(!0);
            }),
            s.btnNext.on("click", function () {
              m(!0);
            }),
            s.onInit && s.onInit();
        }),
        {
          prev: function (e) {
            x(e);
          },
          next: function (e) {
            m(e);
          },
          slideTo: function (e) {
            h(e);
          },
          forceTo: function (e) {
            !(function (e) {
              v(e, !0);
            })(e);
          },
          showSlide: function (e, i) {
            !(function (e, i) {
              new TimelineMax({
                onStart: function () {
                  (l.isSwiping = !0), (l.currentSlide = e);
                },
                onComplete: function () {
                  (l.isSwiping = !1), l.isLinked && t.attr("href", c[e]), i && i();
                },
              })
                .to(d[e].container, 1, { alpha: 1 }, 0)
                .to(d[e].filter.scale, 1.3, { x: 1, y: 1 }, 0);
            })(e, i);
          },
          hideSlide: function (e) {
            !(function (e) {
              var i = l.currentSlide;
              new TimelineMax({
                onStart: function () {
                  l.isSwiping = !0;
                },
                onComplete: function () {
                  e && e();
                },
              })
                .to(d[i].filter.scale, 1.3, { x: 1e3 + 200 * Math.random(), y: 1e3 + 200 * Math.random() })
                .to(d[l.currentSlide].container, 1, { alpha: 0 }, 0);
            })(e);
          },
          getState: function () {
            return l;
          },
          start: function () {
            p.start();
          },
          startAutoplay: function () {
            !0 !== a &&
              ((a = !0),
              (n = setInterval(function () {
                m();
              }, 1e4)));
          },
          pause: function () {
            u();
          },
          stop: function () {
            p.stop();
          },
        }
      );
    },
    initParticleIcons = function () {
      var t = { radius: Math.pow(70, 2), x: 0, y: 0 },
        i = {
          indexAbout: { name: "indexAboutIcon", $container: $(".index-about__particle-icon"), $mouseContainer: vars.$indexAbout, src: $(".index-about__particle-icon img").attr("src"), imageSize: { width: 0, height: 0 }, particles: [] },
          indexPartners: {
            name: "indexPartnersIcon",
            $container: $(".index-section__particle-icon"),
            $mouseContainer: vars.$indexPartners,
            src: $(".index-section__particle-icon img").attr("src"),
            imageSize: { width: 0, height: 0 },
            particles: [],
          },
          indexCall: { name: "indexCallIcon", $container: $(".index-call__particle-icon"), $mouseContainer: vars.$indexCall, src: $(".index-call__particle-icon img").attr("src"), imageSize: { width: 0, height: 0 }, particles: [] },
          about: { name: "aboutIcon", $container: $(".about__block__particle-icon"), $mouseContainer: vars.$about, src: $(".about__block__particle-icon img").attr("src"), imageSize: { width: 0, height: 0 }, particles: [] },
          vacanciesSearch: {
            name: "vacanciesSearch",
            $container: $(".vacancies__block--we-search__particle-icon"),
            $mouseContainer: vars.$vacancies,
            src: $(".vacancies__block--we-search__particle-icon img").attr("src"),
            imageSize: { width: 0, height: 0 },
            particles: [],
          },
          vacanciesWrite: {
            name: "vacanciesWrite",
            $container: $(".vacancies__block--write-us__particle-icon"),
            $mouseContainer: vars.$vacancies,
            src: $(".vacancies__block--write-us__particle-icon img").attr("src"),
            imageSize: { width: 0, height: 0 },
            particles: [],
          },
          contacts: { name: "contacts", $container: $(".contacts__particle-icon"), $mouseContainer: vars.$contacts, src: $(".contacts__particle-icon img").attr("src"), imageSize: { width: 0, height: 0 }, particles: [] },
        },
        x = { friction: 0.6, ease: 0.1, spacing: 1, size: 1 },
        s = new PIXI.Application({ width: 500, height: 500, transparent: !0 }),
        n = s.ticker,
        e = s.loader,
        o = void 0,
        a = new Promise(function (a) {
          e
            .add(i.indexAbout.name, i.indexAbout.src)
            .add(i.indexPartners.name, i.indexPartners.src)
            .add(i.indexCall.name, i.indexCall.src)
            .add(i.about.name, i.about.src)
            .add(i.vacanciesSearch.name, i.vacanciesSearch.src)
            .add(i.vacanciesWrite.name, i.vacanciesWrite.src)
            .add(i.contacts.name, i.contacts.src),
            e.load(function (e, i) {
              e.destroy(), a(i);
            });
        }),
        r = void 0,
        l = void 0;
      function m(e, i, a, t) {
        (this.random = Math.random()),
          (this.originX = e),
          (this.originY = i),
          (this.x = e),
          (this.y = i),
          (this.ix = e + 150 * (this.random - 0.5)),
          (this.iy = this.originY - 250 * this.random),
          (this.dx = 20 * (Math.random() - 0.5) * e),
          (this.dy = 20 * (Math.random() - 0.5) * i),
          (this.rx = 0),
          (this.ry = 0),
          (this.vx = 0),
          (this.vy = 0),
          (this.force = 0),
          (this.angle = 0),
          (this.distance = 0),
          (this.distanceOrigin = 100),
          (this.color = a),
          (this.alpha = t || 1),
          (this.constructed = !1),
          (this.destroy = !1);
      }
      function c(e) {
        n.remove(r), (t.x = -200), (t.y = -200);
        var i = e.imageSize.width + 200,
          a = e.imageSize.height + 200;
        s.renderer.resize(i, a),
          e.$container.append(s.view),
          (function (e) {
            (s.stage = new PIXI.particles.ParticleContainer(7e4)), (o = new PIXI.Texture(PIXI.Texture.WHITE, new PIXI.Rectangle(0, 0, x.size, x.size)));
            for (var i = 0; i < e.particles.length; i++) {
              var a = e.particles[i];
              (a.destroy = !1),
                (a.constructed = !1),
                (a.x = a.ix),
                (a.y = a.iy),
                (a.sprite = new PIXI.Sprite(o)),
                (a.sprite.width = x.size),
                (a.sprite.height = x.size),
                (a.sprite.interactive = !1),
                (a.sprite.tint = PIXI.utils.rgb2hex(a.color)),
                (a.sprite.alpha = a.alpha),
                (a.sprite.x = a.x + s.view.width / 2 - e.imageSize.width / 2),
                (a.sprite.y = a.y + s.view.height / 2 - e.imageSize.height / 2),
                s.stage.addChild(a.sprite);
            }
          })(e),
          bowser.tablet ||
            bowser.mobile ||
            (function (i) {
              var e = void 0;
              (e = i.$mouseContainer ? i.$mouseContainer : vars.$body).off("mousemove", l),
                (l = function (e) {
                  (t.radius = Math.pow(70 + 10 * (Math.random() - 0.5), 2)),
                    (t.x = helpers.getMousePosInElem(s.view, e).x - s.view.width / 2 + i.imageSize.width / 2),
                    (t.y = helpers.getMousePosInElem(s.view, e).y - s.view.height / 2 + i.imageSize.height / 2);
                }),
                e.on("mousemove", l);
            })(e),
          (r = function () {
            !(function (e) {
              t.radius = Math.max(t.radius / 2, 0);
              for (var i = 0; i < e.particles.length; i++)
                e.particles[i].update(), (e.particles[i].sprite.x = e.particles[i].x + s.view.width / 2 - e.imageSize.width / 2), (e.particles[i].sprite.y = e.particles[i].y + s.view.height / 2 - e.imageSize.height / 2);
            })(e);
          }),
          n.add(r),
          n.start(),
          (bowser.tablet || bowser.mobile) &&
            setTimeout(function () {
              e.$container.css("background-image", "url(" + e.base64 + ")");
            }, 5e3);
      }
      return (
        (m.prototype.update = function () {
          (this.rx = t.x - this.x),
            (this.ry = t.y - this.y),
            (this.distance = this.rx * this.rx + this.ry * this.ry),
            (this.force = t.radius / this.distance),
            this.distance < t.radius && ((this.angle = Math.atan2(this.ry, this.rx)), (this.vx += this.force * Math.cos(this.angle)), (this.vy += this.force * Math.sin(this.angle))),
            (this.distanceOrigin = Math.sqrt((this.x - this.originX) * (this.x - this.originX) + (this.y - this.originY) * (this.y - this.originY))),
            this.distanceOrigin < 10 && !this.constructed && (this.constructed = !0),
            this.constructed && !this.destroy && ((this.x += (this.vx *= x.friction) + (this.originX - this.x) * x.ease), (this.y += (this.vy *= x.friction) + (this.originY - this.y) * x.ease)),
            this.constructed || this.destroy || ((this.x += ((this.originX - this.x) * x.ease) / 5), (this.y += (this.originY - this.y) * x.ease * 10 - (this.originX - this.x) * (this.originX - this.x) * this.random)),
            this.destroy && ((this.x += ((this.dx - this.x) * x.ease) / 50), (this.y += ((this.dy - this.y) * x.ease) / 50));
        }),
        a.then(function (h) {
          $.each(i, function (e, i) {
            var a = h[i.name].data.width / h[i.name].data.height,
              t = i.$container.width() / h[i.name].data.width;
            (i.imageSize.width = h[i.name].data.width * t), (i.imageSize.height = i.imageSize.width / a);
            for (
              var s = (function (e, i) {
                  var a = document.createElement("canvas"),
                    t = a.getContext("2d");
                  (a.width = i.imageSize.width), (a.height = i.imageSize.height), $(a).addClass("is-hidden").appendTo(vars.$body), t.drawImage(e, 0, 0, i.imageSize.width, i.imageSize.height);
                  var s = t.getImageData(0, 0, i.imageSize.width, i.imageSize.height);
                  return $(a).remove(), s;
                })(h[i.name].data, i),
                n = void 0,
                o = void 0,
                r = void 0,
                l = void 0,
                c = void 0,
                d = void 0,
                p = void 0,
                v = 0;
              v < s.height;
              v += x.spacing
            )
              for (var u = 0; u < s.width; u += x.spacing)
                (n = 4 * (v * s.width + u)),
                  (o = Math.floor(50 * Math.random() - 20)),
                  (p = [(r = s.data[n] + o) / 255, (c = s.data[n + 1] + o) / 255, (l = s.data[n + 2] + o) / 255]),
                  0 !== (d = s.data[n + 3]) && r < 255 && c < 255 && l < 255 && i.particles.push(new m(u, v, p, d / 255));
            (i.img = h[i.name].data),
              i.$container.find("img").addClass("is-hidden"),
              i.$container.addClass("is-inited"),
              i.base64 ||
                (i.base64 = (function (e) {
                  var i = document.createElement("canvas"),
                    a = i.getContext("2d");
                  (i.width = e.imageSize.width), (i.height = e.imageSize.height), $(i).addClass("is-hidden").appendTo(vars.$body);
                  for (var t = 0; t < e.particles.length; t++) {
                    var s = e.particles[t],
                      n = s.color
                        .reduce(function (e, i) {
                          return e + 255 * i + ",";
                        }, "")
                        .replace(/,\s*$/, "");
                    (a.fillStyle = "rgba(" + n + ", " + s.alpha + ")"), a.fillRect(s.originX, s.originY, x.size, x.size);
                  }
                  var o = i.toDataURL();
                  return $(i).remove(), o;
                })(i));
          });
        }),
        {
          initIcon: function (e) {
            c(i[e]);
          },
          breakIcon: function (e) {
            !(function (e) {
              for (var i = 0; i < e.particles.length; i++) e.particles[i].destroy = !0;
            })(i[e]);
          },
          stop: function () {
            n.stop(), n.remove(r), $(s.view).detach(), null !== s.stage && (s.stage.destroy(!0), (s.stage = null));
          },
        }
      );
    },
    initCircleAnim = function (e, i) {
      var a = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 3,
        t = arguments[3],
        s = arguments[4],
        n = void 0,
        o = void 0;
      function r() {
        TweenMax.to(e, 1, {
          opacity: 1,
          scale: 1,
          delay: i,
          onComplete: function () {
            e.addClass("is-animating"), helpers.isBrowserFirefox() || helpers.isBrowserMs() || (n = TweenMax.to(e, a, t)), o && o();
          },
        });
      }
      return (
        s && (o = s),
        r(),
        {
          play: function () {
            n && n.play();
          },
          pause: function () {
            n && n.pause();
          },
          destroy: function () {
            n && n.kill(), TweenMax.set(e, { opacity: 0, scale: 0, transform: 0 });
          },
          reInit: function () {
            r();
          },
        }
      );
    },
    initPartnersCircles = function (e, i, a, t) {
      var s = [],
        n = void 0;
      function o(e, i, a) {
        var t = TweenMax.to(e, i, a);
        s.push(t);
      }
      function r() {
        TweenMax.set(i, { x: 0, y: 0, opacity: 1, scale: 0 }), TweenMax.set(a, { x: 0, y: 0, opacity: 1, scale: 0 });
      }
      function l() {
        new TimelineMax({
          onComplete: function () {
            n && n();
          },
        })
          .to(e, 0.8, {
            opacity: 1,
            scale: 1,
            onComplete: function () {
              e.addClass("is-animating"),
                TweenMax.killTweensOf(e),
                helpers.isBrowserFirefox() ||
                  helpers.isBrowserMs() ||
                  o(e, 20, {
                    bezier: [
                      { x: -5, y: 5 },
                      { x: -5, y: -10 },
                      { x: 5, y: 10 },
                      { x: 5, y: -10 },
                      { x: 0, y: 0 },
                    ],
                    repeat: -1,
                    ease: Linear.easeNone,
                  });
            },
          })
          .to(
            i,
            0.8,
            {
              x: 0,
              y: 0,
              scale: 1,
              onComplete: function () {
                i.addClass("is-animating"),
                  TweenMax.killTweensOf(i),
                  helpers.isBrowserFirefox() ||
                    helpers.isBrowserMs() ||
                    o(i, 15, {
                      bezier: [
                        { x: -10, y: 5 },
                        { x: -10, y: -5 },
                        { x: 10, y: -5 },
                        { x: 10, y: -5 },
                        { x: 0, y: 0 },
                      ],
                      repeat: -1,
                      ease: Linear.easeNone,
                    });
              },
            },
            "-=0.2"
          )
          .to(
            a,
            0.8,
            {
              x: 0,
              y: 0,
              scale: 1,
              onComplete: function () {
                a.addClass("is-animating"),
                  TweenMax.killTweensOf(a),
                  helpers.isBrowserFirefox() ||
                    helpers.isBrowserMs() ||
                    o(a, 16, {
                      bezier: [
                        { x: 10, y: -5 },
                        { x: 5, y: -15 },
                        { x: -10, y: 15 },
                        { x: -5, y: -15 },
                        { x: 0, y: 0 },
                      ],
                      repeat: -1,
                      ease: Linear.easeNone,
                    });
              },
            },
            "-=0.4"
          );
      }
      return (
        t && (n = t),
        r(),
        l(),
        {
          play: function () {
            $.each(s, function (e, i) {
              i && i.play();
            });
          },
          pause: function () {
            $.each(s, function (e, i) {
              i && i.pause();
            });
          },
          destroy: function () {
            $.each(s, function (e, i) {
              i && i.kill();
            }),
              r(),
              TweenMax.set(e, { scale: 0, transform: 0, opacity: 0 });
          },
          reInit: function () {
            l();
          },
        }
      );
    },
    makeSliderTimer = function (v) {
      var u = new PIXI.Application({ width: v.width() + 50, height: v.height() + 50, transparent: !0, antialias: !0, roundPixels: !1 }),
        h = new PIXI.particles.ParticleContainer(1e4, { alpha: !0 }),
        e = u.ticker,
        x = void 0;
      v.append(u.view);
      var m = { lineWidth: 1, particlesOnDot: 20 },
        i = 0.6,
        a = 0.1,
        _ = 1,
        f = 1,
        w = new PIXI.Texture(PIXI.Texture.WHITE, new PIXI.Rectangle(0, 0, f, f)),
        g = { radius: v.width() / 2, cx: (v.width() + 50) / 2, cy: (v.height() + 50) / 2 },
        t = { radius: Math.pow(1, 2), x: g.cx, y: g.cy },
        S = [];
      function C(e, i, a) {
        (this.sprite = null),
          (this.originX = e),
          (this.originY = i),
          (this.x = this.originX),
          (this.y = this.originY),
          (this.rx = 0),
          (this.ry = 0),
          (this.vx = 0),
          (this.vy = 0),
          (this.force = 0),
          (this.angle = 0),
          (this.distance = 10),
          (this.color = a),
          (this.alpha = 1);
      }
      return (
        (C.prototype.update = function () {
          (this.rx = (t.x - this.x) * (Math.random() + 0.6)),
            (this.ry = (t.y - this.y) * (Math.random() + 0.6)),
            (this.distance = this.rx * this.rx + this.ry * this.ry),
            (this.force = t.radius / this.distance),
            this.distance < t.radius && ((this.angle = Math.atan2(this.ry, this.rx)), (this.vx += this.force * Math.cos(this.angle)), (this.vy += this.force * Math.sin(this.angle))),
            (this.vx *= i * (Math.random() + 0.6)),
            (this.vy *= i * (Math.random() + 0.6)),
            (this.x += this.vx + (this.originX - this.x) * a),
            (this.y += this.vy + (this.originY - this.y) * a);
        }),
        (function () {
          for (
            var e = (function () {
                var e = document.createElement("canvas"),
                  i = e.getContext("2d");
                (e.width = v.width() + 50),
                  (e.height = v.height() + 50),
                  $(e).addClass("is-hidden").appendTo(vars.$body),
                  (i.strokeStyle = "#00d741"),
                  (i.lineWidth = m.lineWidth),
                  i.beginPath(),
                  i.arc(g.cx, g.cy, g.radius, 0, 2 * Math.PI),
                  i.stroke();
                var a = i.getImageData(0, 0, e.width, e.height);
                return $(e).addClass("is-hidden"), { data: a, canvas: e };
              })(),
              i = e.data,
              a = void 0,
              t = 0;
            t < i.height;
            t += _
          )
            for (var s = 0; s < i.width; s += _) {
              a = 4 * (t * i.width + s);
              var n = i.data[a],
                o = i.data[a + 1],
                r = i.data[a + 2],
                l = i.data[a + 3],
                c = [n / 255, o / 255, r / 255];
              0 !== l && S.push(new C(s, t, c, l / 255));
            }
          for (var d = 0; d < S.length; d++) {
            var p = S[d];
            (p.sprite = new PIXI.Sprite(w)), (p.sprite.tint = PIXI.utils.rgb2hex(p.color)), (p.sprite.alpha = p.alpha), (p.sprite.x = p.x), (p.sprite.y = p.y), (p.sprite.width = f), (p.sprite.height = f), h.addChild(p.sprite);
          }
          u.stage.addChild(h), ((x = new PIXI.Sprite(PIXI.Texture.fromCanvas(e.canvas))).alpha = 0), u.stage.addChild(x);
        })(),
        e.add(function () {
          !(function () {
            for (var e = 0; e < S.length; e++) {
              var i = S[e];
              i.update(), (i.sprite.alpha = i.alpha), (i.sprite.x = i.x), (i.sprite.y = i.y);
            }
          })();
        }),
        {
          animate: function () {
            TweenMax.killTweensOf([t, h, x]),
              new TimelineMax({
                onStart: function () {
                  (x.alpha = 0), (h.alpha = 1);
                },
              })
                .to(t, 0.3, { radius: Math.pow(g.radius + 50, 2) })
                .to(t, 0.6, { radius: Math.pow(1, 2) })
                .to(h, 0.3, { alpha: 0 }, "+=0.2")
                .to(x, 0.3, { alpha: 1 }, "-=0.3");
          },
          animateIn: function () {
            u.start(),
              TweenMax.killTweensOf([t, h, x]),
              new TimelineMax({
                onStart: function () {
                  (x.alpha = 0), (h.alpha = 1);
                },
                onComplete: function () {
                  u.stop();
                },
              })
                .to(t, 0.3, { radius: Math.pow(g.radius + 50, 2) })
                .to(h, 0.3, { alpha: 0 }, "-=0.1")
                .set(t, { radius: Math.pow(1, 2) });
          },
          animateOut: function () {
            u.start(),
              TweenMax.killTweensOf([t, h, x]),
              new TimelineMax({
                onComplete: function () {
                  u.stop();
                },
              })
                .set(t, { radius: Math.pow(g.radius + 50, 2) })
                .to(t, 0.6, { radius: Math.pow(1, 2) })
                .to(h, 0.3, { alpha: 1 }, "-=0.5")
                .to(h, 0.3, { alpha: 0 }, "+=0.2")
                .to(x, 0.3, { alpha: 1 }, "-=0.3");
          },
          start: function () {
            u.start();
          },
          stop: function () {
            u.stop();
          },
        }
      );
    },
    showIndexHero = function () {
      var e = vars.$indexHero.data("section"),
        a = $('.index-portfolio__partner[data-index-project="1"]');
      1280 < vars.$window.width() && (vars.indexPortfolioSlider.start(), vars.indexPortfolioSlider.forceTo(0)),
        (state.isScrolling = !0),
        vars.$indexHero.removeClass("is-hidden").css("opacity", 1).focus(),
        vars.$pageIndex.addClass("is-swiping").data("currentsection", e);
      var t = vars.$indexHeroHeading.find(".split-char"),
        s = 0;
      vars.$indexHeroHeading.removeClass("is-animated"),
        t.each(function (i, e) {
          TweenLite.to(e, 0.3, {
            y: 0,
            opacity: 1,
            delay: s,
            onStart: function () {
              if (0 === i) {
                $(".index-portfolio__partners-container").css("opacity", 1),
                  1280 < vars.$window.width()
                    ? (a.find(".index-portfolio__partner__image").css("opacity", 0),
                      a.find(".index-portfolio__partner__desc").css("opacity", 0),
                      a.find(".index-portfolio__partner__logo").css("opacity", 0),
                      a.find(".index-portfolio__partner__name").css("opacity", 0),
                      TweenMax.set(a.find(".index-portfolio__partner__name__line"), { scale: 0 }))
                    : (TweenMax.set(t, { clearProps: "opacity, transform" }),
                      $(".index-portfolio__partner-image").css("opacity", 0),
                      $(".index-portfolio__partner__logo").css("opacity", 0),
                      $(".index-portfolio__partner__content").css("opacity", 0),
                      $(".index-about").css("opacity", 0),
                      $(".index-slides-container").css("opacity", 0));
                var e = new TimelineMax({
                  onComplete: function () {
                    (state.isScrolling = !1), vars.$pageIndex.removeClass("is-swiping"), 1280 < vars.$window.width() && TweenMax.to(vars.$indexSlideDown, 0.3, { opacity: 1 });
                  },
                });
                1280 < $(window).width() &&
                  e
                    .to(a.find(".index-portfolio__partner__image"), 0.4, { opacity: 1 })
                    .to(a.find(".index-portfolio__partner__desc"), 0.4, { opacity: 1 }, "-=0.2")
                    .to(a.find(".index-portfolio__partner__name"), 0.4, { opacity: 1 })
                    .to(a.find(".index-portfolio__partner__name__line"), 0.3, { scale: 1 }, "-=0.2")
                    .from($(".index-portfolio__partners-container"), 0.3, { backgroundColor: "transparent" }, "-=0.3")
                    .to(a.find(".index-portfolio__partner__logo"), 0.3, { opacity: 1 }, "-=0.3")
                    .to(vars.$indexHeroPortfolio, 0.6, {
                      opacity: 1,
                      onStart: function () {
                        1280 < vars.$window.width() && (vars.indexPortfolioSlider.forceTo(0), vars.indexPortfolioTimer.start(), vars.indexPortfolioSlider.startAutoplay());
                      },
                    })
                    .from(vars.$indexAbout, 0.4, { opacity: 0, y: 50, clearProps: "all" }),
                  $(window).width() <= 1280 &&
                    ((a = $(".index-portfolio__partner.swiper-slide-active")),
                    mainSlider.update(!0),
                    mainSlider.slideTo(0, 0),
                    e
                      .staggerFrom($(".index-portfolio__partner-image"), 0.4, { opacity: 0, stagger: 0.2, clearProps: "all" })
                      .from(a.find(".index-portfolio__partner__content"), 0.5, { opacity: 0, clearProps: "all" })
                      .from(a.find(".index-portfolio__partner__name"), 0.5, { opacity: 0, y: "-20", clearProps: "all" })
                      .from(a.find(".index-portfolio__partner__desc"), 0.5, { opacity: 0, y: "-20", clearProps: "all" })
                      .from(a.find(".index-portfolio__partner__logo"), 0.4, { opacity: 0, y: "20", clearProps: "all" }, "-=0.1")
                      .to(vars.$indexAbout, 0.6, { opacity: 1, clearProps: "all" }, "-=0.2")
                      .to(vars.$indexSlidesContainer, 0.6, { opacity: 1, clearProps: "all" })
                      .to(vars.$indexHeroPortfolio, 0.5, { opacity: 1 })
                      .timeScale(2));
              }
            },
            onComplete: function () {
              i === t.length - 1 && vars.$indexHeroHeading.addClass("is-animated");
            },
          }),
            (s += 0.02);
        });
    },
    hideIndexHero = function (e, i, a) {
      var t = vars.$indexHeroHeading.find(".split-char");
      (state.isScrolling = !0),
        vars.$pageIndex.addClass("is-swiping"),
        i &&
          (vars.indexPortfolioSlider.pause(),
          vars.indexPortfolioSlider.stop(),
          vars.indexPortfolioTimer.stop(),
          vars.$indexHero.addClass("is-hidden").blur(),
          TweenMax.set(vars.$indexHero, { opacity: 0 }),
          TweenMax.set([t, vars.$indexHeroPortfolio, vars.$indexHeroPartnersContainer, vars.$indexSlideDown], { clearProps: "opacity, transform" })),
        TweenLite.to(vars.$indexHero, 0.5, {
          opacity: 0,
          onComplete: function () {
            vars.indexPortfolioSlider.pause(),
              vars.indexPortfolioSlider.stop(),
              vars.indexPortfolioTimer.stop(),
              vars.$indexHero.addClass("is-hidden").blur(),
              TweenMax.set([t, vars.$indexHeroPortfolio, vars.$indexHeroPartnersContainer, vars.$indexSlideDown], { clearProps: "opacity, transform" }),
              a && a();
          },
        });
    },
    animateAboutSvgIcon = function (e) {
      new TimelineMax({
        onComplete: function () {
          e && e();
        },
      })
        .to(vars.AboutSvgIcon[0], 1, { strokeDashoffset: 0 })
        .to(vars.AboutSvgIcon[1], 0.7, { strokeDashoffset: 0 }, "-=0.3")
        .to(vars.AboutSvgIcon[2], 0.7, { strokeDashoffset: 0 }, "-=0.4")
        .to(vars.AboutSvgIcon[3], 0.7, { strokeDashoffset: 0 }, "-=0.4")
        .to(vars.AboutSvgIcon[4], 0.7, { strokeDashoffset: 0 }, "-=0.4")
        .to(vars.AboutSvgIcon[5], 2, { strokeDashoffset: 0 }, "-=0.25")
        .to(vars.AboutSvgIcon[7], 2, { strokeDashoffset: 0 }, "-=2")
        .to(vars.AboutSvgIcon[6], 1.5, { opacity: 1 }, "-=1.3");
    },
    showIndexAbout = function () {
      var e = vars.$indexAbout.data("section");
      vars.$pageIndex.data("currentsection", e),
        vars.$indexAbout.removeClass("is-hidden"),
        vars.$indexAbout.css("opacity", 1),
        animateAboutSvgIcon(function () {
          (state.isScrolling = !1), vars.$pageIndex.removeClass("is-swiping");
        });
      var a = vars.$indexAboutHeading.find(".split-char"),
        t = 0;
      vars.$indexAboutHeading.removeClass("is-animated"),
        a.each(function (e, i) {
          TweenLite.from(i, 0.3, {
            y: 10,
            opacity: 0,
            delay: t,
            onComplete: function () {
              e === a.length - 1 && (vars.$indexAboutHeading.addClass("is-animated"), TweenLite.to(vars.$indexAboutText, 0.3, { opacity: 1, y: 0 }));
            },
          }),
            (t += 0.02);
        }),
        vars.particleIcons.initIcon("indexAbout"),
        TweenLite.from(vars.$indexAboutParticleIcon, 0.2, { opacity: 0, delay: 0.3 });
    },
    hideIndexAbout = function (e, i, a) {
      (state.isScrolling = !0), vars.$pageIndex.addClass("is-swiping");
      var t = void 0;
      if (("forward" === e && (t = -10), "backward" === e && (t = 10), i))
        return (
          vars.particleIcons.stop(),
          vars.$indexAbout.addClass("is-hidden"),
          TweenMax.set([vars.$indexAboutSvgIcon, vars.$indexAboutHeading, vars.$indexAboutText, vars.$indexAboutParticleIcon], { clearProps: "all" }),
          TweenMax.killTweensOf(vars.AboutSvgIcon),
          void TweenMax.set(vars.AboutSvgIcon, { clearProps: "all" })
        );
      new TimelineMax({
        onStart: function () {
          vars.particleIcons.breakIcon("indexAbout");
        },
        onComplete: function () {
          vars.$indexAbout.addClass("is-hidden"),
            vars.particleIcons.stop(),
            a && a(e),
            TweenMax.set([vars.$indexAboutSvgIcon, vars.$indexAboutHeading, vars.$indexAboutText, vars.$indexAboutParticleIcon], { clearProps: "all" }),
            TweenMax.killTweensOf(vars.AboutSvgIcon),
            TweenMax.set(vars.AboutSvgIcon, { clearProps: "all" });
        },
      })
        .to(vars.$indexAboutSvgIcon, 0.2, { opacity: 0, y: t })
        .to(vars.$indexAboutHeading, 0.2, { opacity: 0, y: t })
        .to(vars.$indexAboutText, 0.2, { opacity: 0, y: t }, "-=0.1")
        .to(vars.$indexAboutParticleIcon, 0.3, { opacity: 0 }, "-=0.1");
    },
    showIndexSlidepreview = function (e, s) {
      var i = vars.$indexSlidepreview.data("section"),
        a = vars.$indexSlidepreview.find(".index-slidepreview__text"),
        t = vars.$indexSlidepreview.find(".index-slidepreview__img--1"),
        n = vars.$indexSlidepreview.find(".index-slidepreview__img-spacer--1"),
        o = vars.$indexSlidepreview.find(".index-slidepreview__img--2"),
        r = vars.$indexSlidepreview.find(".index-slidepreview__img--1 .index-slidepreview__img__shim"),
        l = vars.$indexSlidepreview.find(".index-slidepreview__img--2 .index-slidepreview__img__shim");
      if (s) return TweenMax.set([a, t, o], { clearProps: "opacity, transform, position, top, left, width, height" }), void TweenMax.set(vars.$indexSlidepreviewShim, { x: "-100%" });
      s || vars.$pageIndex.data("currentsection", i),
        vars.$indexSlidepreview.removeClass("is-hidden"),
        vars.$indexSlidepreview.css("opacity", 1),
        (vars.slidePreviewImageProps.width = n.width()),
        (vars.slidePreviewImageProps.height = n.height()),
        (vars.slidePreviewImageProps.offset = n.offset()),
        "forward" === e &&
          new TimelineMax()
            .add(function () {
              var a = vars.$indexSlidepreviewText.find(".split-char"),
                t = 0;
              vars.$indexSlidepreviewText.removeClass("is-animated"),
                a.each(function (e, i) {
                  TweenLite.to(i, 0.3, {
                    y: 0,
                    opacity: 1,
                    delay: t,
                    onComplete: function () {
                      e === a.length - 1 && (vars.$indexSlidepreviewText.addClass("is-animated"), s || ((state.isScrolling = !1), vars.$pageIndex.removeClass("is-swiping")));
                    },
                  }),
                    (t += 0.015);
                });
            })
            .from(t, 0.3, { opacity: 0, clearProps: "opacity" })
            .from(r, 0.3, { x: "0%", skewX: 0, clearProps: "all" })
            .from(o, 0.3, { opacity: 0, clearProps: "opacity" }, "-=0.1")
            .from(l, 0.3, { x: "0%", skewX: 0, clearProps: "all" }),
        "backward" === e &&
          new TimelineMax({
            onStart: function () {
              TweenMax.set(a, { clearProps: "opacity, transform" }), TweenMax.set(o, { clearProps: "transform" });
            },
            onComplete: function () {
              TweenMax.set([a, t, o], { clearProps: "opacity, transform, position, top, left, width, height" });
            },
          })
            .add(function () {
              var a = vars.$indexSlidepreviewText.find(".split-char"),
                t = 0;
              vars.$indexSlidepreviewText.removeClass("is-animated"),
                a.each(function (e, i) {
                  TweenLite.to(i, 0.3, {
                    y: 0,
                    opacity: 1,
                    delay: t,
                    onComplete: function () {
                      e === a.length - 1 && (s || ((state.isScrolling = !1), vars.$pageIndex.removeClass("is-swiping")), vars.$indexSlidepreviewText.addClass("is-animated"));
                    },
                  }),
                    (t += 0.015);
                });
            })
            .to(t, 0.5, { top: vars.slidePreviewImageProps.offset.top, left: "50%", width: vars.slidePreviewImageProps.width, height: vars.slidePreviewImageProps.height })
            .to(
              vars.$indexSlidepreviewShim,
              0.5,
              {
                x: "-100%",
                onComplete: function () {
                  vars.$pageIndex.hasClass("is-hidden") || vars.$siteNavControls.removeClass("is-white");
                },
              },
              "-=0.4"
            )
            .to(o, 0.2, { opacity: 1 });
    },
    hideIndexSlidepreview = function (e, i, a) {
      var t = vars.$indexSlidepreview.find(".index-slidepreview__text"),
        s = vars.$indexSlidepreview.find(".index-slidepreview__img--1"),
        n = vars.$indexSlidepreview.find(".index-slidepreview__img--2"),
        o = vars.$indexSlidepreviewText.find(".split-char");
      if (((state.isScrolling = !0), vars.$pageIndex.addClass("is-swiping"), i)) return vars.$indexSlidepreview.addClass("is-hidden"), void TweenMax.set([t, s, n, o], { clearProps: "opacity, transform" });
      "forward" === e &&
        new TimelineMax({
          onComplete: function () {
            vars.$indexSlidepreview.addClass("is-hidden"), TweenMax.set(o, { clearProps: "opacity, transform" });
          },
        })
          .to(t, 0.3, { opacity: 0, y: -10 })
          .to(n, 0.3, { opacity: 0, y: -10 })
          .set(s, { position: "fixed", top: vars.slidePreviewImageProps.offset.top, left: "50%" })
          .to(vars.$indexSlidepreviewShim, 0.7, {
            x: "0%",
            onStart: function () {
              vars.$pageIndex.hasClass("is-hidden") || vars.$siteNavControls.addClass("is-white");
            },
          })
          .to(
            s,
            0.7,
            {
              top: 0,
              width: "50%",
              height: "100%",
              onComplete: function () {
                a && a(e);
              },
            },
            "-=0.6"
          ),
        "backward" === e &&
          new TimelineMax({
            onComplete: function () {
              vars.$indexSlidepreview.addClass("is-hidden"), a && a(e), TweenMax.set([t, s, n, o], { clearProps: "opacity, transform" });
            },
          })
            .to(t, 0.3, { opacity: 0, y: 10 })
            .to(s, 0.3, { opacity: 0, y: 10 })
            .to(n, 0.3, { opacity: 0, y: 10 }, "-=0.2");
    },
    showIndexSlides = function (e) {
      var i = vars.$indexSlidesContainer.data("section");
      if (
        (vars.$pageIndex.data("currentsection", i),
        vars.$indexSlidesContainer.removeClass("is-hidden"),
        "forward" === e &&
          TweenMax.fromTo(
            $(".index-slide--1 .index-slide__textblock"),
            0.5,
            { opacity: 0 },
            {
              opacity: 1,
              onComplete: function () {
                (state.isScrolling = !1), vars.$pageIndex.removeClass("is-swiping");
              },
            }
          ),
        "backward" === e)
      ) {
        var a = $(".index-slide--2"),
          t = a.find(".index-slide__img__shim"),
          s = a.find(".index-slide__textblock");
        new TimelineMax({
          onComplete: function () {
            (state.isScrolling = !1), vars.$pageIndex.removeClass("is-swiping");
          },
        })
          .to(t, 0.5, { x: "-100%" })
          .to(s, 0.5, { x: 0, opacity: 1 }, "-=0.4");
      }
    },
    hideIndexSlides = function (e, i, a) {
      if (((state.isScrolling = !0), vars.$pageIndex.addClass("is-swiping"), i))
        return vars.$indexSlidesContainer.css("opacity", 1), TweenMax.set($(".index-slide--1 .index-slide__textblock"), { opacity: 0 }), vars.$indexSlidesContainer.addClass("is-hidden"), void (a && a(e, i));
      if ("forward" === e) {
        var t = $(".index-slide--2"),
          s = t.find(".index-slide__img__shim"),
          n = t.find(".index-slide__textblock");
        new TimelineMax({
          onComplete: function () {
            vars.$indexSlidesContainer.addClass("is-hidden"), a && a(e);
          },
        })
          .to(s, 0.5, { x: "0%" })
          .to(n, 0.5, { x: 40, opacity: 0 }, "-=0.4");
      }
      "backward" === e &&
        (vars.$indexSlidesContainer.css("opacity", 1),
        TweenMax.to($(".index-slide--1 .index-slide__textblock"), 0.5, {
          opacity: 0,
          onComplete: function () {
            a && a(e, i), vars.$indexSlidesContainer.addClass("is-hidden");
          },
        }));
    },
    IndexSlides = function () {
      var i = $(".index-slide--1"),
        a = i.find(".index-slide__img__shim"),
        t = i.find(".index-slide__textblock"),
        s = $(".index-slide--2"),
        n = s.find(".index-slide__img__shim"),
        o = s.find(".index-slide__textblock"),
        r = { start: !0, end: !1 },
        l = !1;
      return {
        getState: function () {
          return { start: r.start, end: r.end, isMoving: l };
        },
        next: function () {
          r.end ||
            !0 === l ||
            ((l = !0),
            (r.start = !1),
            (r.end = !1),
            new TimelineMax({
              onStart: function () {
                vars.$indexSlidesContainer.addClass("is-moving").removeClass("is-start is-end");
              },
              onComplete: function () {
                vars.$indexSlidesContainer.removeClass("is-moving").addClass("is-end"), (l = !1), (r.start = !1), (r.end = !0);
              },
            })
              .to(a, 0.8, { x: "0%" })
              .to(t, 0.3, { x: -40, opacity: 0 })
              .add(function () {
                i.addClass("is-hidden"), s.removeClass("is-hidden");
              })
              .to(n, 0.8, { x: "-100%" })
              .to(o, 0.3, { x: 0, opacity: 1 }));
        },
        prev: function (e) {
          e
            ? new TimelineMax({
                onStart: function () {
                  vars.$indexSlidesContainer.addClass("is-moving").removeClass("is-start is-end");
                },
                onComplete: function () {
                  vars.$indexSlidesContainer.removeClass("is-moving").addClass("is-start"), (l = !1), (r.start = !0), (r.end = !1);
                },
              })
                .to(n, 0, { x: "0%" })
                .to(o, 0, { x: 40, opacity: 0 })
                .add(function () {
                  i.removeClass("is-hidden"), s.addClass("is-hidden");
                })
                .to(a, 0, { x: "-100%" })
                .to(t, 0, { x: 0, opacity: 1 })
            : r.start ||
              !0 === l ||
              ((l = !0),
              (r.start = !1),
              (r.end = !1),
              new TimelineMax({
                onStart: function () {
                  vars.$indexSlidesContainer.addClass("is-moving").removeClass("is-start is-end");
                },
                onComplete: function () {
                  vars.$indexSlidesContainer.removeClass("is-moving").addClass("is-start"), (l = !1), (r.start = !0), (r.end = !1);
                },
              })
                .to(n, 0.8, { x: "0%" })
                .to(o, 0.3, { x: 40, opacity: 0 })
                .add(function () {
                  i.removeClass("is-hidden"), s.addClass("is-hidden");
                })
                .to(a, 0.8, { x: "-100%" })
                .to(t, 0.3, { x: 0, opacity: 1 }));
        },
      };
    },
    showIndexSectionHeading = function (a) {
      var t = vars.$indexSectionHeading.find(".split-char"),
        s = 0;
      vars.$indexSectionHeading.removeClass("is-animated"),
        t.each(function (e, i) {
          TweenLite.to(i, 0.3, {
            y: 0,
            opacity: 1,
            delay: s,
            onComplete: function () {
              e === t.length - 1 && (vars.$indexSectionHeading.addClass("is-animated"), a && a());
            },
          }),
            (s += 0.05);
        });
    },
    showIndexSectionText = function () {
      TweenMax.to(vars.$indexSectionText, 0.7, { opacity: 1, y: 0 });
    },
    initSectionCircles = function () {
      vars.$indexPartners.hasClass("is-inited")
        ? vars.indexPartnersCircles.reInit()
        : ((vars.indexPartnersCircles = initPartnersCircles($(".index-partners-all"), $(".index-partner-link--rbc"), $(".index-partner-link--gs"), function () {
            (state.isScrolling = !1), vars.$pageIndex.removeClass("is-swiping");
          })),
          vars.$indexPartners.addClass("is-inited"));
    },
    showIndexSection = function (e) {
      var i = vars.$indexPartners.data("section");
      vars.$pageIndex.data("currentsection", i),
        vars.$indexPartners.removeClass("is-hidden"),
        "forward" === e &&
          ($(".index-section__col1").css("opacity", 1),
          new TimelineMax({
            onComplete: function () {
              vars.particleIcons.initIcon("indexPartners"),
                showIndexSectionHeading(function () {
                  showIndexSectionText(), TweenMax.to(vars.$indexSectionParticleIcon, 0.2, { opacity: 1 });
                }),
                initSectionCircles();
            },
          })
            .to(vars.$indexSectionShim, 0.7, {
              x: "100%",
              onComplete: function () {
                vars.$pageIndex.hasClass("is-hidden") || vars.$siteNavControls.removeClass("is-white");
              },
            })
            .to($(".index-section__col2"), 0.3, { opacity: 1 }, "-=0.4")),
        "backward" === e &&
          new TimelineMax({
            onComplete: function () {
              vars.particleIcons.initIcon("indexPartners"),
                showIndexSectionHeading(function () {
                  showIndexSectionText(), TweenMax.to(vars.$indexSectionParticleIcon, 0.2, { opacity: 1 });
                }),
                initSectionCircles();
            },
          })
            .to($(".index-section__col1"), 0.5, { opacity: 1 })
            .to($(".index-section__col2"), 0.5, { opacity: 1 }, "-=0.4");
    },
    hideIndexSection = function (e, i, a) {
      var t = vars.$indexSectionHeading.find(".split-char");
      if (((state.isScrolling = !0), vars.$pageIndex.addClass("is-swiping"), i))
        return (
          vars.particleIcons.stop(),
          vars.$indexPartners.addClass("is-hidden"),
          $(".index-section__col2").css("opacity", 0),
          TweenMax.set(vars.$indexSectionShim, { x: "0%" }),
          TweenMax.set([t, vars.$indexSectionText, vars.$indexSectionParticleIcon], { clearProps: "opacity, transform" }),
          void (vars.$indexPartners.hasClass("is-inited") && vars.indexPartnersCircles.destroy())
        );
      vars.particleIcons.breakIcon("indexPartners"),
        "forward" === e &&
          new TimelineMax({
            onComplete: function () {
              vars.$indexPartners.addClass("is-hidden"),
                vars.particleIcons.stop(),
                TweenMax.set([t, vars.$indexSectionText, vars.$indexSectionParticleIcon], { clearProps: "opacity, transform" }),
                a && a(e),
                vars.$indexPartners.hasClass("is-inited") && vars.indexPartnersCircles.destroy();
            },
          })
            .to($(".index-section__col1"), 0.5, { opacity: 0 })
            .to(vars.$indexSectionParticleIcon, 0.2, { opacity: 0 }, "-=0.2")
            .to($(".index-section__col2"), 0.5, { opacity: 0 }, "-=0.4"),
        "backward" === e &&
          new TimelineMax({
            onComplete: function () {
              vars.$indexPartners.addClass("is-hidden"),
                vars.particleIcons.stop(),
                TweenMax.set([t, vars.$indexSectionText, vars.$indexSectionParticleIcon], { clearProps: "opacity, transform" }),
                a && a(e),
                $(".index-section__col2").css("opacity", 0),
                vars.$indexPartners.hasClass("is-inited") && vars.indexPartnersCircles.destroy();
            },
          }).to(vars.$indexSectionShim, 0.7, {
            x: "0%",
            onStart: function () {
              vars.$pageIndex.hasClass("is-hidden") || i || vars.$siteNavControls.addClass("is-white");
            },
          });
    },
    showIndexCall = function () {
      var e = vars.$indexCall.data("section");
      vars.$pageIndex.data("currentsection", e), vars.$indexCall.removeClass("is-hidden"), vars.$indexCall.css("opacity", 1);
      var a = vars.$indexCallHeading.find(".split-char"),
        t = 0;
      vars.$indexCallHeading.removeClass("is-animated"),
        a.each(function (e, i) {
          TweenLite.from(i, 0.3, {
            y: 10,
            opacity: 0,
            delay: t,
            onComplete: function () {
              e === a.length - 1 &&
                (vars.$indexCallParticleIcon.addClass("is-visible"),
                vars.particleIcons.initIcon("indexCall"),
                vars.$indexCallHeading.addClass("is-animated"),
                TweenLite.to(vars.$indexCallText[0], 0.7, {
                  y: 0,
                  opacity: 1,
                  delay: 0.2,
                  onComplete: function () {
                    (state.isScrolling = !1), vars.$indexCallText.addClass("is-animated"), vars.$indexCall.addClass("is-inited"), vars.$pageIndex.removeClass("is-swiping");
                  },
                }),
                vars.$indexCall.hasClass("is-inited")
                  ? (vars.indexCallCircle1.reInit(), vars.indexCallCircle2.reInit())
                  : ((vars.indexCallCircle1 = initCircleAnim($(".index-contact-us"), 0, 20, {
                      bezier: [
                        { x: 10, y: -5 },
                        { x: 5, y: -15 },
                        { x: -10, y: 15 },
                        { x: -5, y: -15 },
                        { x: 0, y: 0 },
                      ],
                      repeat: -1,
                      ease: Linear.easeNone,
                    })),
                    (vars.indexCallCircle2 = initCircleAnim($(".index-portfolio-link"), 0.2, 16, {
                      bezier: [
                        { x: -5, y: 5 },
                        { x: -5, y: -10 },
                        { x: 5, y: 10 },
                        { x: 5, y: -10 },
                        { x: 0, y: 0 },
                      ],
                      repeat: -1,
                      ease: Linear.easeNone,
                    }))));
            },
          }),
            (t += 0.02);
        });
    },
    hideIndexCall = function (e, i, a) {
      if (((state.isScrolling = !0), vars.$pageIndex.addClass("is-swiping"), i))
        return (
          vars.particleIcons.stop(),
          TweenMax.set(vars.$indexCall, { opacity: 0 }),
          vars.$indexCall.addClass("is-hidden"),
          vars.$indexCallParticleIcon.removeClass("is-visible"),
          TweenMax.set(vars.$indexCallText, { clearProps: "all" }),
          void (vars.$indexCall.hasClass("is-inited") && (vars.indexCallCircle1.destroy(), vars.indexCallCircle2.destroy()))
        );
      vars.particleIcons.breakIcon("indexCall"),
        TweenLite.to(vars.$indexCall, 0.5, {
          opacity: 0,
          onComplete: function () {
            vars.$indexCall.addClass("is-hidden"),
              vars.particleIcons.stop(),
              a && a(e),
              vars.$indexCall.hasClass("is-inited") && (vars.indexCallCircle1.destroy(), vars.indexCallCircle2.destroy()),
              vars.$indexCallParticleIcon.removeClass("is-visible"),
              TweenMax.set(vars.$indexCallText, { clearProps: "all" });
          },
        });
    },
    handleShimDirection = function (e) {
      var i = void 0,
        a = void 0;
      return (
        "next" === e ? ((i = "110%"), (a = -10), TweenMax.set(vars.$projectsImageSliderShim, { skewX: -a, x: "-110%" })) : "prev" === e && ((i = "-110%"), (a = 10), TweenMax.set(vars.$projectsImageSliderShim, { skewX: -a, x: "110%" })),
        { x: i, skew: a }
      );
    },
    showProjectsSlide = function (e) {
      var i = $('.projects__slider__item[data-item="' + countProjectsSlides + '"]'),
        a = i.find(vars.$projectsSlideTitle),
        t = i.find(vars.$projectsSlideText),
        s = i.find(vars.$projectsSlideLink),
        n = i.find(vars.$projectsSlideLabel),
        o = vars.$projectsImageSlider.find('img[data-item="' + countProjectsSlides + '"]');
      vars.$projectsSliderCount.text(countProjectsSlides + " / " + vars.$projectsSlides.length),
        new TimelineMax({
          onStart: function () {
            vars.$projectsImageSlider.find("img").removeClass("is-active"),
              vars.$projectsImageSliderImg.addClass("is-hidden"),
              s.removeClass("is-animated"),
              o.removeClass("is-hidden"),
              vars.$projectsImageSlider.attr("href", o.data("link")),
              i.addClass("is-active");
          },
          onComplete: function () {
            vars.$window.width() < 1280 &&
              (vars.$projectsImageSlider.find("img").length === countProjectsSlides
                ? vars.$projectsImageSlider.find('img[data-item="1"]').removeClass("is-hidden").addClass("is-active")
                : vars.$projectsImageSlider
                    .find('img[data-item="' + (countProjectsSlides + 1) + '"]')
                    .removeClass("is-hidden")
                    .addClass("is-active"));
          },
        })
          .to(vars.$projectsImageSliderShim, 0.7, { x: e.x, skewX: e.skew })
          .from(n, 0.7, { opacity: 0, scale: 1.2 }, 0)
          .add(function () {
            helpers.showSplittedText(a, 0.3, 0.02, function () {
              new TimelineMax({
                onComplete: function () {
                  vars.$projectsArrow.removeClass("not-ready"), $(".projects__image-slider").removeClass("is-animating");
                },
              })
                .to(t, 0.4, { opacity: 1, y: 0 })
                .to(
                  s,
                  0.4,
                  {
                    onComplete: function () {
                      s.addClass("is-animated");
                    },
                    opacity: 1,
                    y: 0,
                  },
                  "-=0.2"
                );
            });
          }, 0);
    },
    hideProjectsSlide = function (e) {
      var i = $('.projects__slider__item[data-item="' + countProjectsSlides + '"]'),
        a = i.find(vars.$projectsSlideTitle),
        t = i.find(vars.$projectsSlideText),
        s = i.find(vars.$projectsSlideLink),
        n = i.find(vars.$projectsSlideTextblock),
        o = i.find(vars.$projectsSlideLabel),
        r = handleShimDirection(e);
      new TimelineMax({
        onStart: function () {
          vars.$projectsArrow.addClass("not-ready"), $(".projects__image-slider").addClass("is-animating");
        },
        onComplete: function () {
          vars.$projectsSlides.removeClass("is-active"),
            TweenMax.set([n, t, o, s], { clearProps: "all" }),
            TweenMax.set(a.find(".split-char"), { clearProps: "opacity, transform" }),
            "next" === e && countProjectsSlides < vars.$projectsSlides.length
              ? (countProjectsSlides++, showProjectsSlide(r))
              : "next" === e && countProjectsSlides === vars.$projectsSlides.length
              ? ((countProjectsSlides = 1), showProjectsSlide(r))
              : "prev" === e && 1 < countProjectsSlides
              ? (countProjectsSlides--, showProjectsSlide(r))
              : "prev" === e && 1 === countProjectsSlides && ((countProjectsSlides = vars.$projectsSlides.length), showProjectsSlide(r));
        },
      })
        .to(vars.$projectsImageSliderShim, 0.7, { x: "0%", skewX: 0 })
        .to(n, 0.7, { opacity: 0, y: 20 }, 0)
        .to(o, 0.7, { opacity: 0, scale: 1.2 }, 0);
    },
    animateAboutPolicyTitle = function (a) {
      var t = vars.$aboutPolicyTitle.find(".split-char"),
        s = 0;
      vars.$aboutPolicyTitle.removeClass("is-animated"),
        t.each(function (e, i) {
          TweenLite.to(i, 0.3, {
            y: 0,
            opacity: 1,
            delay: s,
            onComplete: function () {
              e === t.length - 1 && (vars.$aboutPolicyTitle.addClass("is-animated"), a && a());
            },
          }),
            (s += 0.02);
        });
    },
    pageAboutScrollDown = function (e) {
      4 !== countAboutSlides &&
        ((isTransition = !0),
        1 === countAboutSlides
          ? new TimelineMax({
              onComplete: function () {
                vars.$aboutSlidedown.addClass("is-hidden"), TweenMax.set([vars.$aboutMissionTitle, vars.$aboutSlidedown], { clearProps: "all" }), countAboutSlides++, (isTransition = !1), e && e();
              },
            })
              .to(vars.$aboutWeMake, 0.5, { opacity: 1, clearProps: "all" })
              .to(vars.$aboutMissionTitle, 0.5, { scale: 1.2 })
              .to(vars.$aboutSlidedown, 0.5, { autoAlpha: 0 }, 0)
              .to(vars.$about, 0.8, { y: "-25%" }, "-=0.4")
              .from(vars.$aboutWeMakeTextblock, 1, { y: "200%", clearProps: "all" }, "-=0.6")
              .from(vars.$aboutWeMakeImage, 1, { y: "200%", clearProps: "all" }, "-=0.9")
          : 2 === countAboutSlides
          ? new TimelineMax({
              onComplete: function () {
                TweenMax.set([vars.$aboutWeMakeTextblock, vars.$aboutWeMakeImage], { clearProps: "all" }), countAboutSlides++, (isTransition = !1), e && e();
              },
            })
              .to(vars.$aboutWeMakeTextblock, 0.8, { y: "-200%" })
              .to(vars.$aboutWeMakeImage, 0.8, { y: "-200%" }, "-=0.7")
              .to(vars.$about, 0.3, { y: "-50%" }, "-=0.5")
              .add(function () {
                animateAboutPolicyTitle();
              })
              .from(vars.$aboutPolicyText, 0.5, { autoAlpha: 0, y: 20, clearProps: "all" }, "+=0.4")
          : 3 === countAboutSlides &&
            new TimelineMax({
              onStart: function () {
                vars.$aboutClientsFeedbackItem2.removeClass("is-animated");
              },
              onComplete: function () {
                TweenMax.set([vars.$aboutPolicyTitle, vars.$aboutPolicyText], { clearProps: "all" }),
                  TweenMax.set(vars.$aboutPolicyTitle.find(".split-char"), { clearProps: "opacity, transform" }),
                  countAboutSlides++,
                  (isTransition = !1),
                  e && e();
              },
            })
              .to(vars.$aboutPolicyTitle, 0.3, { autoAlpha: 0 })
              .to(vars.$aboutPolicyText, 0.4, { autoAlpha: 0 }, "-=0.2")
              .to(vars.$about, 0.3, { y: "-75%" })
              .from(
                vars.$aboutClientsFeedbackItem2,
                0.8,
                {
                  onComplete: function () {
                    vars.$aboutClientsFeedbackItem2.addClass("is-animated");
                  },
                  y: "200%",
                  clearProps: "all",
                },
                "-=0.2"
              )
              .from(vars.$aboutClientsFeedbackItem1, 0.9, { y: "200%", clearProps: "all" }, "-=0.7"));
    },
    pageAboutScrollUp = function (e) {
      1 !== countAboutSlides &&
        ((isTransition = !0),
        2 === countAboutSlides
          ? (vars.$aboutSlidedown.removeClass("is-hidden"),
            new TimelineMax({
              onComplete: function () {
                TweenMax.set([vars.$aboutWeMakeImage, vars.$aboutWeMakeTextblock], { clearProps: "all" }), countAboutSlides--, (isTransition = !1), e && e();
              },
            })
              .to(vars.$aboutWeMakeImage, 0.8, { y: "200%" })
              .to(vars.$aboutWeMakeTextblock, 1, { y: "200%" }, 0)
              .to(vars.$about, 0.7, { y: "0%" }, "-=0.8")
              .from(vars.$aboutMissionTitle, 0.8, { scale: 1.2, clearProps: "all" }, "-=0.5")
              .from(vars.$aboutSlidedown, 0.5, { autoAlpha: 0, clearProps: "all" }))
          : 3 === countAboutSlides
          ? new TimelineMax({
              onComplete: function () {
                TweenMax.set([vars.$aboutPolicyText, vars.$aboutPolicyTitle], { clearProps: "all" }),
                  TweenMax.set(vars.$aboutPolicyTitle.find(".split-char"), { clearProps: "opacity, transform" }),
                  countAboutSlides--,
                  (isTransition = !1),
                  e && e();
              },
            })
              .to(vars.$aboutPolicyTitle, 0.3, { autoAlpha: 0 })
              .to(vars.$aboutPolicyText, 0.4, { autoAlpha: 0 }, "-=0.2")
              .to(vars.$about, 0.3, { y: "-25%" })
              .from(vars.$aboutWeMakeTextblock, 0.8, { y: "-200%", clearProps: "all" }, "-=0.2")
              .from(vars.$aboutWeMakeImage, 0.8, { y: "-200%", clearProps: "all" }, "-=0.7")
          : 4 === countAboutSlides &&
            new TimelineMax({
              onComplete: function () {
                TweenMax.set([vars.$aboutClientsFeedbackItem1, vars.$aboutClientsFeedbackItem2], { clearProps: "all" }), countAboutSlides--, (isTransition = !1), e && e();
              },
            })
              .to(vars.$aboutClientsFeedbackItem1, 0.8, { y: "200%" })
              .to(vars.$aboutClientsFeedbackItem2, 0.8, { y: "200%" }, "-=0.7")
              .to(vars.$about, 0.3, { y: "-50%" }, "-=0.5")
              .add(function () {
                animateAboutPolicyTitle();
              })
              .from(vars.$aboutPolicyText, 0.5, { autoAlpha: 0, y: 20, clearProps: "all" }, "+=0.4"));
    },
    vacanciesScrollDown = function () {
      (isTransition = !0),
        new TimelineMax({
          onStart: function () {
            vars.particleIcons.breakIcon("vacanciesSearch"), vars.$vacanciesBlockWriteUsText.removeClass("is-animated"), vars.$vacanciesBlockWriteUs.removeClass("is-hidden");
          },
          onComplete: function () {
            vars.particleIcons.stop(),
              vars.$vacanciesScrolldown.addClass("is-hidden"),
              vars.$vacanciesBlockWeSearch.addClass("is-hidden"),
              TweenMax.set(
                [
                  vars.$vacanciesWeSearchItem,
                  vars.$vacanciesWeSearchText,
                  vars.$vacanciesWeSearchLeftside,
                  vars.$vacanciesWeSearchRightside,
                  vars.$vacanciesScrolldown,
                  $(".vacancies__block--we-search__item__label"),
                  $(".vacancies__block--we-search__item__icon"),
                ],
                { clearProps: "all" }
              ),
              TweenMax.set(vars.$vacanciesWeSearchTitle.find(".split-char"), { clearProps: "opacity, transform" }),
              vars.particleIcons.initIcon("vacanciesWrite"),
              countVacanciesSlides++;
          },
        })
          .to(vars.$vacanciesWeSearchLeftside, 0.7, { autoAlpha: 0, y: -20 })
          .to(vars.$vacanciesSearchParticleIcon, 0.3, { opacity: 0, y: -20 }, 0.2)
          .to(vars.$vacanciesWeSearchRightside, 0.7, { autoAlpha: 0, y: -20 }, 0)
          .to(vars.$vacanciesScrolldown, 0.7, { autoAlpha: 0 }, 0)
          .from(vars.$vacanciesBlockWriteUsLeftside, 0.7, {
            opacity: 0,
            onComplete: function () {
              vars.$vacanciesBlockWriteUsBtn.hasClass("is-animating")
                ? vars.vacanciesCircle1.reInit()
                : (vars.vacanciesCircle1 = initCircleAnim(vars.$vacanciesBlockWriteUsBtn, 0, 15, {
                    bezier: [
                      { x: 5, y: 5 },
                      { x: 5, y: -10 },
                      { x: -5, y: 10 },
                      { x: -5, y: -10 },
                      { x: 0, y: 0 },
                    ],
                    delay: 0,
                    repeat: -1,
                    ease: Linear.easeNone,
                  }));
            },
          })
          .add(function () {
            var a = vars.$vacanciesBlockWriteUsTitle.find(".split-char"),
              t = 0;
            vars.$vacanciesBlockWriteUsTitle.removeClass("is-animated"),
              a.each(function (e, i) {
                TweenLite.to(i, 0.3, {
                  y: 0,
                  opacity: 1,
                  delay: t,
                  onComplete: function () {
                    e === a.length - 15 &&
                      (TweenMax.to(vars.$vacanciesBlockWriteUsText, 0.5, {
                        x: 0,
                        opacity: 1,
                        onComplete: function () {
                          vars.$vacanciesBlockWriteUsText.addClass("is-animated"), (isTransition = !1);
                        },
                      }),
                      TweenMax.to(vars.$vacanciesMailParticleIcon, 0.5, { y: 0, opacity: 1 })),
                      e === a.length - 1 && vars.$vacanciesBlockWriteUsTitle.addClass("is-animated");
                  },
                }),
                  (t += 0.02);
              });
          });
    },
    vacanciesScrollUp = function () {
      (isTransition = !0),
        new TimelineMax({
          onStart: function () {
            vars.particleIcons.breakIcon("vacanciesWrite"), vars.$vacanciesBlockWeSearch.removeClass("is-hidden"), vars.$vacanciesScrolldown.removeClass("is-hidden");
          },
          onComplete: function () {
            vars.$vacanciesBlockWriteUs.addClass("is-hidden"),
              vars.particleIcons.stop(),
              TweenMax.set([vars.$vacanciesBlockWriteUsLeftside, vars.$vacanciesBlockWriteUsRightside, vars.$vacanciesBlockWriteUsText], { clearProps: "all" }),
              TweenMax.set(vars.$vacanciesBlockWriteUsTitle.find(".split-char"), { clearProps: "opacity, transform" }),
              vars.particleIcons.initIcon("vacanciesSearch"),
              vars.$vacanciesBlockWriteUsBtn.hasClass("is-animating") && vars.vacanciesCircle1.destroy(),
              countVacanciesSlides--;
          },
        })
          .to(vars.$vacanciesBlockWriteUsLeftside, 0.7, { autoAlpha: 0 })
          .to(vars.$vacanciesBlockWriteUsRightside, 0.7, { autoAlpha: 0, y: 20 }, 0)
          .to(vars.$vacanciesMailParticleIcon, 0.5, { y: 20, opacity: 0 }, 0.2)
          .from(vars.$vacanciesScrolldown, 0.7, { autoAlpha: 0, clearProps: "all" }, 0)
          .add(function () {
            var a = vars.$vacanciesWeSearchTitle.find(".split-char"),
              t = 0;
            vars.$vacanciesWeSearchTitle.removeClass("is-animated"),
              a.each(function (e, i) {
                TweenLite.to(i, 0.3, {
                  y: 0,
                  opacity: 1,
                  delay: t,
                  onComplete: function () {
                    e === a.length - 10 &&
                      TweenMax.to(vars.$vacanciesWeSearchText, 0.5, {
                        opacity: 1,
                        y: 0,
                        onComplete: function () {
                          isTransition = !1;
                        },
                      }),
                      e === a.length - 1 && vars.$vacanciesWeSearchTitle.addClass("is-animated");
                  },
                }),
                  (t += 0.02);
              });
          })
          .add(function () {
            var a = 0;
            vars.$vacanciesWeSearchItem.each(function (e, i) {
              new TimelineMax({ delay: a }).to(i, 0.7, { scaleX: 1 }).to($(i).find(".vacancies__block--we-search__item__label"), 0.5, { opacity: 1 }).to($(i).find(".vacancies__block--we-search__item__icon"), 0.5, { opacity: 1 }, "-=0.4"),
                (a += 0.2);
            });
          }, 0.8)
          .to(vars.$vacanciesSearchParticleIcon, 0.3, { opacity: 1, y: 0 }, 0.8);
    },
    showVacanciesPopup = function (e) {
      var i = $('.vacancies__popup__content[data-item="' + e + '"]');
      vars.$body.addClass("is-modal-opened is-modal-opening");
      var a = new TimelineMax({
        onStart: function () {
          vars.$vacanciesPopup.removeClass("is-hidden"), i.removeClass("is-hidden"), i.find(".mCustomScrollBox").focus();
        },
        onComplete: function () {
          vars.$headerNav.addClass("is-hidden"), vars.$body.removeClass("is-modal-opening"), TweenMax.set([vars.$headerNav], { clearProps: "all" }), vars.$vacanciesBlockWeSearch.css("opacity", 0);
        },
      });
      1280 < vars.$window.width()
        ? a
            .to(vars.$headerNav, 0.5, { autoAlpha: 0, y: -50 })
            .to(vars.$menuOpenPopup, 0.5, { autoAlpha: 0, y: -50 }, 0)
            .from(i, 1, { x: "-100%", clearProps: "all" }, 0)
            .from(vars.$vacanciesPopupClose, 0.5, { autoAlpha: 0, clearProps: "all" })
            .from(vars.$vacanciesPopupContentBlock, 0.5, { autoAlpha: 0, y: -70, clearProps: "all" }, 1)
        : a
            .to(vars.$headerNav, 0.3, { autoAlpha: 0, y: -50 })
            .to(vars.$menuOpenPopup, 0.3, { autoAlpha: 0, y: -50 }, 0)
            .from(i, 0.5, { x: "100%", clearProps: "all" }, 0)
            .from(vars.$vacanciesPopupClose, 0.3, { autoAlpha: 0, y: "100%", clearProps: "all" }, 0.5)
            .from(vars.$vacanciesPopupContentBlock, 0.3, { autoAlpha: 0, y: -70, clearProps: "all" }, 0.5)
            .timeScale(1.5);
    },
    hideVacanciesPopup = function (e) {
      if ((vars.$body.addClass("is-modal-closing"), e))
        return (
          vars.$headerNav.removeClass("is-hidden"),
          vars.$vacanciesBlockWeSearch.css("opacity", 1),
          vars.$body.removeClass("is-modal-opened is-modal-closing"),
          vars.$vacanciesPopup.addClass("is-hidden"),
          vars.$vacanciesPopupContent.addClass("is-hidden"),
          vars.$vacanciesPopupContent.find(".mCustomScrollBox").blur(),
          void TweenMax.set([vars.$vacanciesPopupContentBlock, vars.$vacanciesPopupContent, vars.$vacanciesPopupClose], { clearProps: "all" })
        );
      var i = new TimelineMax({
        onStart: function () {
          vars.$headerNav.removeClass("is-hidden"), vars.$vacanciesBlockWeSearch.css("opacity", 1);
        },
        onComplete: function () {
          vars.$body.removeClass("is-modal-opened is-modal-closing"),
            vars.$vacanciesPopup.addClass("is-hidden"),
            vars.$vacanciesPopupContent.addClass("is-hidden"),
            vars.$vacanciesPopupContent.find(".mCustomScrollBox").blur(),
            TweenMax.set([vars.$vacanciesPopupContentBlock, vars.$vacanciesPopupContent, vars.$vacanciesPopupClose], { clearProps: "all" });
        },
      });
      1280 < vars.$window.width()
        ? i
            .to(vars.$vacanciesPopupContentBlock, 0.5, { autoAlpha: 0, y: -70 })
            .to(vars.$vacanciesPopupContent, 1, { x: "-100%" })
            .to(vars.$vacanciesPopupClose, 0.5, { autoAlpha: 0 }, 0)
            .from(vars.$headerNav, 0.5, { autoAlpha: 0, y: -50 }, 1)
            .to(vars.$menuOpenPopup, 0.5, { autoAlpha: 1, y: 0, clearProps: "all" }, 1)
        : i
            .to(vars.$vacanciesPopupContentBlock, 0.3, { autoAlpha: 0, y: -70 })
            .to(vars.$vacanciesPopupContent, 0.5, { x: "100%" })
            .to(vars.$vacanciesPopupClose, 0.3, { autoAlpha: 0, y: "100%" }, 0)
            .from(vars.$headerNav, 0.3, { autoAlpha: 0, y: -50 }, 0.5)
            .to(vars.$menuOpenPopup, 0.3, { autoAlpha: 1, y: 0, clearProps: "all" }, 0.5)
            .timeScale(1.5);
    },
    isPopupTransition = function () {
      return vars.$body.hasClass("is-modal-opening") || vars.$body.hasClass("is-modal-closing");
    },
    showContacts = function () {
      var a = vars.$contactsTitle.find(".split-char"),
        t = 0;
      vars.$contactsTitle.removeClass("is-animated"),
        vars.$contactsItemTextblock.find(".contacts__item__textblock__link").removeClass("is-animated"),
        a.each(function (e, i) {
          TweenLite.to(i, 0.3, {
            y: 0,
            opacity: 1,
            delay: t,
            onComplete: function () {
              e === a.length - 1 && vars.$contactsTitle.addClass("is-animated");
            },
          }),
            (t += 0.03);
        });
      var e = new TimelineMax();
      e
        .from(vars.$contactsText, 0.6, { autoAlpha: 0, x: -50, clearProps: "all" }, 0.5)
        .from(vars.$contactsItemImage, 0.6, { opacity: 0, y: 70, clearProps: "all" })
        .fromTo(vars.$contactsItemImageShim, 0.6, { x: "0%", skewX: 0 }, { x: "110%", skewX: -10, clearProps: "all" })
        .from(vars.$contactsItemTextblock, 0.6, {
          onComplete: function () {
            vars.$contactsItemTextblock.find(".contacts__item__textblock__link").addClass("is-animated");
          },
          autoAlpha: 0,
          y: 50,
          clearProps: "all",
        }),
        $(window).width() <= 1280 && e.timeScale(2);
    },
    hideContacts = function () {
      TweenMax.set(vars.$contactsTitle.find(".split-char"), { clearProps: "opacity, transform" });
    },
    pauseParticleSystems = function () {
      vars.particleIcons.stop();
    },
    showPage = function (e) {
      switch (
        (pauseParticleSystems(),
        (isTransition = !0),
        "vacancies" !== e &&
          ((countVacanciesSlides = 1),
          vars.$vacanciesScrolldown.removeClass("is-hidden"),
          vars.$vacanciesBlockWriteUs.addClass("is-hidden"),
          vars.$vacanciesBlockWeSearch.removeClass("is-hidden"),
          TweenMax.set(vars.$vacanciesWeSearchTitle.find(".split-char"), { clearProps: "opacity, transform" }),
          TweenMax.set(vars.$vacanciesBlockWriteUsTitle.find(".split-char"), { clearProps: "opacity, transform" }),
          TweenMax.set(
            [
              vars.$vacanciesWeSearchItem,
              vars.$vacanciesWeSearchText,
              vars.$vacanciesBlockWriteUsText,
              vars.$vacanciesSearchParticleIcon,
              vars.$vacanciesMailParticleIcon,
              $(".vacancies__block--we-search__item__label"),
              $(".vacancies__block--we-search__item__icon"),
            ],
            { clearProps: "opacity, transform" }
          ),
          vars.$vacanciesBlockWriteUsBtn.hasClass("is-animating") && vars.vacanciesCircle1.destroy()),
        "projects" !== e &&
          (TweenMax.killTweensOf($(".projects__slider__item.is-active").find(vars.$projectsSlideTitle).find(".split-char")),
          TweenMax.set($(".projects__slider__item.is-active").find(vars.$projectsSlideTitle).find(".split-char"), { clearProps: "opacity, transform" }),
          TweenMax.killTweensOf($(".projects__slider__item.is-active").find(vars.$projectsSlideText)),
          TweenMax.set($(".projects__slider__item.is-active").find(vars.$projectsSlideText), { clearProps: "opacity, transform" }),
          TweenMax.killTweensOf($(".projects__slider__item.is-active").find(vars.$projectsSlideLink)),
          TweenMax.set($(".projects__slider__item.is-active").find(vars.$projectsSlideLink), { clearProps: "opacity, transform" }),
          TweenMax.killTweensOf(vars.$projectsImageSliderShim),
          TweenMax.set([vars.$projectsImageSliderShim, vars.$projectsImageSlider], { clearProps: "opacity, transform" })),
        "contacts" !== e && hideContacts(),
        e)
      ) {
        case "about":
          var i = new TimelineMax({
            onStart: function () {
              vars.particleIcons.initIcon("about"), vars.$aboutSlidedown.removeClass("is-hidden"), TweenMax.set(vars.$about, { y: "0%" }), (countAboutSlides = 1);
            },
            onComplete: function () {
              isTransition = !1;
            },
          });
          i
            .from(vars.$aboutMissionTitle, 0.4, { opacity: 0, y: 50, clearProps: "all" }, 0.5)
            .from(vars.$aboutMissionSubtitle, 0.4, { opacity: 0, y: 50, clearProps: "all" })
            .from(vars.$aboutMissionText, 0.4, { opacity: 0, y: 50, clearProps: "all" })
            .from(vars.$aboutWeMake, 0.4, { opacity: 0, y: 50, clearProps: "all" })
            .from(vars.$aboutSlidedown, 0.4, { opacity: 0, clearProps: "all" }),
            $(window).width() <= 1280 && i.timeScale(1.5);
          break;
        case "contacts":
          vars.particleIcons.initIcon("contacts"), showContacts();
          break;
        case "projects":
          var a = $(".projects__slider__item.swiper-slide-active");
          $(window).width() <= 1280 && $(".projects__slider__item__link").removeClass("is-animated");
          var t = new TimelineMax({
            onComplete: function () {
              $(window).width() <= 1280 && a.find(".projects__slider__item__link").addClass("is-animated");
            },
          });
          1280 < $(window).width()
            ? t
                .from(vars.$projectsImageSlider, 0.7, { opacity: 0, y: -20, clearProps: "all" }, 0.5)
                .to(vars.$projectsImageSliderShim, 0.7, { x: "110%", skewX: -20 })
                .add(function () {
                  helpers.showSplittedText($(".projects__slider__item.is-active").find(vars.$projectsSlideTitle), 0.3, 0.02, function () {
                    new TimelineMax({
                      onStart: function () {
                        $(".projects__slider__item.is-active").find(vars.$projectsSlideLink).removeClass("is-animated");
                      },
                      onComplete: function () {
                        vars.$projectsArrow.removeClass("not-ready"), $(".projects__image-slider").removeClass("is-animating");
                      },
                    })
                      .to($(".projects__slider__item.is-active").find(vars.$projectsSlideText), 0.4, { opacity: 1, y: 0 })
                      .to(
                        $(".projects__slider__item.is-active").find(vars.$projectsSlideLink),
                        0.4,
                        {
                          onComplete: function () {
                            $(".projects__slider__item.is-active").find(vars.$projectsSlideLink).addClass("is-animated");
                          },
                          opacity: 1,
                          y: 0,
                        },
                        "-=0.2"
                      );
                  });
                }, 0.5)
                .from(vars.$projectsSlideLabel, 0.7, { opacity: 0, scale: 1.2, clearProps: "all" }, 0.5)
                .from(vars.$projectsSliderNav, 0.7, { opacity: 0, y: 50, clearProps: "all" }, 1.2)
            : t
                .to($(".projects__slider__item__title"), 0, { y: "10", opacity: 0 })
                .to([$(".projects__slider__item__text"), $(".projects__slider__item__link")], 0, { y: "20", opacity: 0 })
                .from($(".projects__slider__item__image"), 0.6, { y: "-20", opacity: 0, clearProps: "all" }, "-=0.2")
                .to(a.find(".projects__slider__item__title"), 0.7, { y: 0, opacity: 1 }, "-=0.2")
                .to(a.find(".projects__slider__item__text"), 0.5, { y: 0, opacity: 1 })
                .to(a.find(".projects__slider__item__link"), 0.5, { y: 0, opacity: 1 })
                .timeScale(1.5);
          break;
        case "vacancies":
          var s = new TimelineMax({
            onStart: function () {
              1280 < vars.$window.width()
                ? (vars.$vacanciesScrolldown.removeClass("is-hidden"), vars.$vacanciesBlockWriteUs.addClass("is-hidden"), vars.$vacanciesBlockWeSearch.removeClass("is-hidden"))
                : (vars.$vacanciesBlockWeSearch.removeClass("is-hidden"), vars.$vacanciesBlockWriteUs.css({ opacity: 0 }).removeClass("is-hidden"), $(".tiles").css({ opacity: 0 })),
                vars.particleIcons.initIcon("vacanciesSearch"),
                (countVacanciesSlides = 1);
            },
          });
          s
            .add(function () {
              var a = vars.$vacanciesWeSearchTitle.find(".split-char"),
                t = 0;
              vars.$vacanciesWeSearchTitle.removeClass("is-animated"),
                a.each(function (e, i) {
                  TweenLite.to(i, 0.3, {
                    y: 0,
                    opacity: 1,
                    delay: t,
                    onComplete: function () {
                      e === a.length - 10 && TweenMax.to(vars.$vacanciesWeSearchText, 0.5, { opacity: 1, y: 0 }), e === a.length - 1 && vars.$vacanciesWeSearchTitle.addClass("is-animated");
                    },
                  }),
                    (t += 0.02);
                });
            })
            .add(function () {
              var a = 0;
              vars.$vacanciesWeSearchItem.each(function (e, i) {
                new TimelineMax({ delay: a }).to(i, 0.7, { scaleX: 1 }).to($(i).find(".vacancies__block--we-search__item__label"), 0.5, { opacity: 1 }).to($(i).find(".vacancies__block--we-search__item__icon"), 0.5, { opacity: 1 }, "-=0.4"),
                  (a += 0.2);
              });
            }, 0.5)
            .from(vars.$vacanciesWeSearchRightside, 0.7, { opacity: 0, clearProps: "all" }, 0.5)
            .to(vars.$vacanciesSearchParticleIcon, 0.3, { opacity: 1, y: 0 }, 0.6)
            .from(vars.$vacanciesScrolldown, 0.7, {
              opacity: 0,
              clearProps: "all",
              onComplete: function () {
                isTransition = !1;
              },
            }),
            $(window).width() <= 1280 && s.from(vars.$vacanciesBlockWriteUs, 0.6, { opacity: 0, y: "30", clearProps: "all" }).from($(".tiles"), 0.5, { opacity: 0, y: "30", clearProps: "all" }).timeScale(2);
      }
    },
    pageIndexScrolldown = function () {
      if (!state.isScrolling && !0 !== vars.indexSlides.getState().isMoving) {
        var e = vars.$pageIndex.data("currentsection");
        0 === e && hideIndexHero("forward", !1, showIndexAbout),
          1 === e && hideIndexAbout("forward", !1, showIndexSlidepreview),
          2 === e && hideIndexSlidepreview("forward", !1, showIndexSlides),
          3 === e && vars.$indexSlidesContainer.hasClass("is-end") && hideIndexSlides("forward", !1, showIndexSection),
          4 === e && hideIndexSection("forward", !1, showIndexCall);
      }
    },
    pageIndexScrollup = function () {
      if (!state.isScrolling && !0 !== vars.indexSlides.getState().isMoving) {
        var e = vars.$pageIndex.data("currentsection");
        1 === e && hideIndexAbout("backward", !1, showIndexHero),
          2 === e && hideIndexSlidepreview("backward", !1, showIndexAbout),
          3 === e && vars.$indexSlidesContainer.hasClass("is-start") && hideIndexSlides("backward", !1, showIndexSlidepreview),
          4 === e && hideIndexSection("backward", !1, showIndexSlides),
          5 === e && hideIndexCall("backward", !1, showIndexSection);
      }
    },
    resetIndexScroll = function () {
      1280 < vars.$window.width() &&
        (hideIndexCall("backward", !0),
        hideIndexSection("backward", !0),
        hideIndexSlides("backward", !0, showIndexSlidepreview),
        hideIndexSlidepreview("backward", !0),
        hideIndexAbout("backward", !0),
        hideIndexHero(!0),
        vars.indexSlides.prev(!0),
        vars.$pageIndex.data("currentsection", 0),
        (state.isScrolling = !0));
    },
    showIndexFirstScreen = function () {
      state.isScrolling = !0;
      var e = new TimelineMax({
        onStart: function () {
          vars.$pagesOverlay.removeClass("is-hidden");
        },
        onComplete: function () {
          vars.$pagesOverlay.addClass("is-hidden"), TweenMax.set([vars.$pagesOverlay], { clearProps: "all" }), showIndexHero();
        },
      });
      e
        .from(vars.$pagesOverlay, 0.7, { x: "-100%" })
        .add(function () {
          resetIndexScroll(), vars.$siteNavControls.removeClass("is-white");
        })
        .to(vars.$pagesOverlay, 0.7, { x: "100%" }),
        $(window).width() <= 1280 && e.timeScale(2);
    },
    preloaderTimeoutDuration = 10,
    preloaderPercent = 0;
  preloader();
  var router = new Navigo(location.origin + "/", !1, "#");
  router.hooks({
    before: function (e) {
      if (state.preloaderStatus) (state.isScrolling = !0), vars.$pages.addClass("is-hidden"), e();
      else {
        state.isScrolling = !0;
        var i = vars.$indexHeroHeading.find(".split-char"),
          a = new TimelineMax({
            onStart: function () {
              vars.$pagesOverlay.removeClass("is-hidden");
            },
            onComplete: function () {
              vars.$pages.addClass("is-hidden"), vars.$siteNavControls.removeClass("is-white"), e();
            },
          });
        a.from(vars.$pagesOverlay, 0.7, { x: "-100%" }),
          vars.$window.width() <= 1280 &&
            (a.timeScale(2),
            TweenMax.set(i, { clearProps: "opacity, transform" }),
            $(".index-portfolio__partner-image").css("opacity", 0),
            $(".index-portfolio__partner__logo").css("opacity", 0),
            $(".index-portfolio__partner__content").css("opacity", 0),
            $(".index-about").css("opacity", 0),
            $(".index-slides-container").css("opacity", 0));
      }
    },
    after: function () {
      var e = location.pathname.split("/")[1] || "index";
      if (
        ($(".header__nav").removeClass("header__nav--inner"),
        $(".header__nav a").removeClass("is-current"),
        state.prevPath !== e && ("index" !== e && resetIndexScroll(), (state.prevPath = e)),
        "index" !== e && ($(".header__nav").addClass("header__nav--inner"), $('.header__nav a[data-location="' + e + '"]').addClass("is-current")),
        vars.$menuPopupLink.removeClass("is-current"),
        $('.menu-popup__link a[data-location="' + e + '"]').addClass("is-current"),
        vars.$body.hasClass("is-modal-opened") && hideVacanciesPopup(!0),
        vars.$document.trigger("routeChange"),
        state.preloaderStatus)
      )
        $('.page[data-page="' + e + '"]').removeClass("is-hidden");
      else {
        var i = new TimelineMax({
          onComplete: function () {
            vars.$pagesOverlay.addClass("is-hidden"), TweenMax.set([vars.$pagesOverlay], { clearProps: "all" }), "index" === e && vars.$document.trigger("indexRoute");
          },
        });
        i
          .to(vars.$pagesOverlay, 0.7, { x: "100%" }, 0)
          .add(function () {
            showPage(e), $('.page[data-page="' + e + '"]').removeClass("is-hidden"), (vars.$pageIndex[0].scrollTop = 0);
          })
          .from($('.page[data-page="' + e + '"]'), 0.2, { opacity: 0, clearProps: "all" }),
          $(window).width() <= 1280 && i.timeScale(2);
      }
    },
  }),
    router
      .on("/", function () {
        $(".header__logo").blur();
      })
      .on("/about", function () {})
      .on("/projects", function () {})
      .on("/vacancies", function () {})
      .on("/contacts", function () {})
      .notFound(function () {
        router.navigate("/");
      })
      .resolve(),
    initMenuSlide(),
    vars.$sideLink.on("click", function (e) {
      $(e.currentTarget).blur();
    }),
    vars.$menuPopupContent.mCustomScrollbar(),
    vars.$menuOpenPopup.on("click", function () {
      showMenuPopup();
    }),
    vars.$menuPopupLink.on("click", function (e) {
      e.preventDefault();
      var i = $(e.currentTarget).attr("href");
      hideMenuPopup(function () {
        router.navigate(i);
      });
    }),
    vars.$menuPopupClose.on("click", function () {
      hideMenuPopup();
    }),
    vars.$menuPopupOverlay.on("click", function () {
      hideMenuPopup();
    }),
    (vars.particleIcons = initParticleIcons());
  var mainSlider = void 0;
  (vars.indexPortfolioTimer = makeSliderTimer(vars.$indexHeroPortfolioTimer)),
    1280 < vars.$window.width() &&
      ((vars.indexPortfolioSlider = distortionSlider($(".index-portfolio__slider"), {
        btnPrev: $(".index-portfolio__slider-btn--prev"),
        btnNext: $(".index-portfolio__slider-btn--next"),
        onInit: function () {
          $(".index-portfolio__slider").addClass("is-inited");
        },
        onSlideChange: function (e) {
          var i = e + 1,
            a = $('.index-portfolio__partner[data-index-project="' + i + '"]');
          vars.$indexHeroPortfolioSliderCount.text(i + " / " + vars.$indexHeroPartner.length),
            new TimelineMax({
              onStart: function () {
                $(".index-portfolio__slider").addClass("is-animating");
              },
              onComplete: function () {
                $(".index-portfolio__slider").removeClass("is-animating");
              },
            })
              .to($(".index-portfolio__partner__content"), 0.4, { opacity: 0 })
              .to($(".index-portfolio__partner__logo"), 0.4, { opacity: 0 }, "-=0.4")
              .to($(".index-portfolio__partner__image"), 0.4, { opacity: 0, scale: 1.1 }, "-=0.4")
              .add(function () {
                $(".index-portfolio__partner").addClass("is-hidden"), TweenMax.set($(".index-portfolio__partner__content"), { clearProps: "all" }), a.removeClass("is-hidden");
              })
              .from(a.find(".index-portfolio__partner__name"), 0.5, { opacity: 0, clearProps: "all" })
              .from(a.find(".index-portfolio__partner__name__line"), 0.5, { scale: 0, clearProps: "all" }, "-=0.3")
              .to(a.find(".index-portfolio__partner__logo"), 0.3, { opacity: 1, clearProps: "all" }, "-=0.4")
              .from(a.find(".index-portfolio__partner__desc"), 0.4, { opacity: 0, clearProps: "all" }, "-=0.2")
              .to(a.find(".index-portfolio__partner__image"), 0.4, { opacity: 1, scale: 1, clearProps: "all" }, "-=0.2"),
            vars.indexPortfolioTimer.animate();
        },
        onForceSlideChange: function (e) {
          var i = e + 1,
            a = $('.index-portfolio__partner[data-index-project="' + i + '"]');
          vars.$indexHeroPortfolioSliderCount.text(i + " / " + vars.$indexHeroPartner.length),
            new TimelineMax({
              onStart: function () {
                $(".index-portfolio__slider").addClass("is-animating");
              },
              onComplete: function () {
                $(".index-portfolio__slider").removeClass("is-animating");
              },
            })
              .set($(".index-portfolio__partner__content"), { opacity: 1 })
              .set($(".index-portfolio__partner__logo"), { opacity: 1 })
              .add(function () {
                $(".index-portfolio__partner").addClass("is-hidden"), a.removeClass("is-hidden");
              })
              .set(a.find(".index-portfolio__partner__name"), { opacity: 1 })
              .set(a.find(".index-portfolio__partner__name__line"), { scale: 1 })
              .set(a.find(".index-portfolio__partner__logo"), { opacity: 1 })
              .set(a.find(".index-portfolio__partner__desc"), { opacity: 1 })
              .set(a.find(".index-portfolio__partner__image"), { opacity: 1, scale: 1 }),
            vars.indexPortfolioTimer.animate();
        },
      })),
      vars.$indexHero.on("keydown", function (e) {
        37 === e.keyCode && vars.indexPortfolioSlider.prev(!0), 39 === e.keyCode && vars.indexPortfolioSlider.next(!0);
      })),
    vars.$window.width() <= 1280 &&
      (vars.$indexHeroPartnersContainer.addClass("swiper-container-free-mode"),
      vars.$indexHeroPartner.wrapAll('<div class="swiper-wrapper"></div>'),
      vars.$indexHeroPartner.addClass("swiper-slide"),
      vars.$indexHeroPortfolioSliderCount.text("1 / " + vars.$indexHeroPartner.length),
      (mainSlider = new Swiper(vars.$indexHeroPartnersContainer, {
        loop: !0,
        speed: 350,
        autoplay: { delay: 1e4, disableOnInteraction: !1 },
        slidesPerView: "auto",
        navigation: { prevEl: ".index-portfolio__slider-btn--prev", nextEl: ".index-portfolio__slider-btn--next" },
      })),
      vars.$indexHeroPartnersContainer.on("click", ".swiper-slide", function (e) {
        e.stopPropagation();
        var i = $(e.currentTarget).index();
        mainSlider.activeIndex === i + 1 ? (e.preventDefault(), mainSlider.slidePrev()) : mainSlider.activeIndex === i - 1 && (e.preventDefault(), mainSlider.slideNext());
      }),
      mainSlider.on("slideChangeTransitionStart", function () {
        new TimelineMax().to($(".index-portfolio__partner__content"), 0.4, { opacity: 0 }).to($(".index-portfolio__partner__logo"), 0.4, { opacity: 0, y: "15" }, "-=0.25");
      }),
      mainSlider.on("slideChangeTransitionEnd", function () {
        vars.$indexHeroPortfolioSliderCount.text(mainSlider.realIndex + 1 + " / " + vars.$indexHeroPartner.length);
        var e = $('.index-portfolio__partner[data-index-project="' + (mainSlider.realIndex + 1) + '"]');
        new TimelineMax()
          .from(e.find(".index-portfolio__partner__content"), 0.2, { opacity: 0, clearProps: "all" })
          .from(e.find(".index-portfolio__partner__name"), 0.4, { opacity: 0, y: "-15", clearProps: "all" })
          .to(e.find(".index-portfolio__partner__logo"), 0.3, { opacity: 1, y: 0, clearProps: "all" }, "-=0.2")
          .from(e.find(".index-portfolio__partner__desc"), 0.3, { opacity: 0, y: "-10", clearProps: "all" }, "-=0.2");
      })),
    (vars.splittedIndexHeroHeading = new SplitType(vars.$indexHeroHeading, { split: "words, chars", charClass: "split-char", wordClass: "split-word" })),
    vars.$document.on("indexRoute", showIndexHero),
    (vars.splittedIndexAboutHeading = new SplitType(vars.$indexAboutHeading, { split: "words, chars", charClass: "split-char", wordClass: "split-word" })),
    (vars.AboutSvgIcon = [
      $(".index-about__svg .svg-animate--1"),
      $(".index-about__svg .svg-animate--2"),
      $(".index-about__svg .svg-animate--3"),
      $(".index-about__svg .svg-animate--4"),
      $(".index-about__svg .svg-animate--5"),
      $(".index-about__svg .svg-animate--6"),
      $(".index-about__svg .svg-animate--7"),
      $(".index-about__svg .svg-animate--8"),
    ]),
    (vars.slidePreviewImageProps = { width: $(".index-slidepreview__img--1").width(), height: $(".index-slidepreview__img--1").height(), offset: { top: 68 } }),
    (vars.splittedIndexSlidepreviewText = new SplitType(vars.$indexSlidepreviewText, { split: "words, chars", charClass: "split-char", wordClass: "split-word" })),
    (vars.indexSlides = new IndexSlides()),
    1280 < vars.$window.width() &&
      (vars.$indexSlidesContainer.on(
        "mousewheel",
        _.debounce(
          function (e, i) {
            state.isScrolling || (!1 === vars.indexSlides.getState().isMoving && (0 < i ? vars.indexSlides.prev() : vars.indexSlides.next()));
          },
          150,
          { leading: !0, trailing: !1 }
        )
      ),
      vars.$window.on("keydown", function (e) {
        vars.$pageIndex.hasClass("is-hidden") ||
          3 !== vars.$pageIndex.data("currentsection") ||
          state.isScrolling ||
          vars.indexSlides.getState().isMoving ||
          ((helpers.isScrolldownKey(e) || 35 === e.keyCode) && vars.indexSlides.next(), (helpers.isScrollupKey(e) || 36 === e.keyCode) && vars.indexSlides.prev());
      })),
    1280 < $(window).width() && (vars.splittedIndexSectionText = new SplitType(vars.$indexSectionText, { split: "lines", lineClass: "split-line" })),
    (vars.splittedIndexSectionHeading = new SplitType(vars.$indexSectionHeading, { split: "words, chars", lineClass: "split-line", charClass: "split-char", wordClass: "split-word" })),
    $(".index-partner-link").on("click", function (e) {
      $(e.currentTarget).blur();
    }),
    (vars.splittedIndexCallHeading = new SplitType(vars.$indexCallHeading, { split: "words, chars", charClass: "split-char", wordClass: "split-word" }));
  var countProjectsSlides = 1;
  if (
    (1280 < vars.$window.width() &&
      (vars.$projectsImageSliderImg.addClass("is-hidden"), vars.$projectsImageSlider.find('img[data-item="' + countProjectsSlides + '"]').removeClass("is-hidden"), $(".projects__slider__item--1").addClass("is-active")),
    $(".projects__slider__item").each(function (e, i) {
      var a = $(i).find(vars.$projectsSlideTitle);
      new SplitType(a, { split: "words, chars", charClass: "split-char", wordClass: "split-word" });
    }),
    1280 < vars.$window.width() &&
      (vars.$projectsSliderCount.text(countProjectsSlides + " / " + vars.$projectsSlides.length),
      vars.$projectsArrow.on("click", function (e) {
        var i = $(e.currentTarget).data("nav");
        hideProjectsSlide(i);
      }),
      vars.$window.on("keydown", function (e) {
        $(".page--projects").hasClass("is-hidden") ||
          (37 === e.keyCode && $(".projects__slider__nav__item--prev").not(".not-ready").trigger("click"), 39 === e.keyCode && $(".projects__slider__nav__item--next").not(".not-ready").trigger("click"));
      })),
    vars.$window.width() <= 1280)
  ) {
    vars.$projectsSlides.wrapAll('<div class="swiper-wrapper"></div>'), vars.$projectsSlides.addClass("swiper-slide"), vars.$projectsSliderCount.text("1 / " + vars.$projectsSlides.length);
    var projectsSlider = new Swiper(vars.$projectsSlider, { loop: !0, speed: 350, autoHeight: !0, slidesPerView: "auto", navigation: { prevEl: ".projects__slider__nav__item--prev", nextEl: ".projects__slider__nav__item--next" } });
    vars.$projectsSlider.on("click", ".swiper-slide", function (e) {
      e.stopPropagation();
      var i = $(e.currentTarget).index();
      projectsSlider.activeIndex === i + 1 ? (e.preventDefault(), projectsSlider.slidePrev()) : projectsSlider.activeIndex === i - 1 && (e.preventDefault(), projectsSlider.slideNext());
    }),
      projectsSlider.on("slideChangeTransitionStart", function () {
        new TimelineMax({
          onStart: function () {
            vars.$projectsSlideLink.removeClass("is-animated");
          },
        })
          .to($(".projects__slider__item__title"), 0.3, { opacity: 0, y: "-10" })
          .to($(".projects__slider__item__text"), 0.3, { opacity: 0, y: "-15" }, "-=0.2")
          .to($(".projects__slider__item__link"), 0.3, { opacity: 0, y: "-20" }, "-=0.2");
      }),
      projectsSlider.on("slideChangeTransitionEnd", function () {
        vars.$projectsSliderCount.text(projectsSlider.realIndex + 1 + " / " + vars.$projectsSlides.length);
        var e = $('.projects__slider__item.swiper-slide-active[data-item="' + (projectsSlider.realIndex + 1) + '"]');
        new TimelineMax({
          onComplete: function () {
            e.find(".projects__slider__item__link").addClass("is-animated");
          },
        })
          .to(e.find(".projects__slider__item__title"), 0.3, { opacity: 1, y: 0 })
          .to(e.find(".projects__slider__item__text"), 0.35, { opacity: 1, y: 0 }, "-=0.1")
          .to(e.find(".projects__slider__item__link"), 0.4, { opacity: 1, y: 0 }, "-=0.2");
      });
  }
  (vars.aboutPolicyTitle = new SplitType(vars.$aboutPolicyTitle, { split: "words, chars", charClass: "split-char", wordClass: "split-word" })),
    1280 < $(window).width() &&
      vars.$pageAbout.on(
        "mousewheel",
        _.debounce(
          function (e, i) {
            isTransition ? e.preventDefault() : isTransition || (i < 0 ? pageAboutScrollDown() : 0 < i && pageAboutScrollUp());
          },
          50,
          { leading: !0, trailing: !1 }
        )
      ),
    vars.$aboutSlidedown.on("click", function () {
      isTransition ||
        ((isTransition = !0),
        new TimelineMax({
          onComplete: function () {
            vars.$aboutSlidedown.addClass("is-hidden"), TweenMax.set([vars.$aboutMissionTitle, vars.$aboutSlidedown], { clearProps: "all" }), countAboutSlides++, (isTransition = !1);
          },
        })
          .to(vars.$aboutMissionTitle, 0.5, { scale: 1.2 })
          .to(vars.$aboutSlidedown, 0.5, { autoAlpha: 0 }, 0)
          .to(vars.$about, 0.7, { y: "-25%" }, 0.2)
          .from(vars.$aboutWeMakeTextblock, 0.8, { y: "200%", clearProps: "all" }, 0.2)
          .from(vars.$aboutWeMakeImage, 0.8, { y: "200%", clearProps: "all" }, 0.3));
    }),
    $(".about__prevent-focus-scroll").on("focus", function () {
      vars.$pageAbout.scrollTop(0);
    }),
    (vars.splittedVacanciesWeSearchHeading = new SplitType(vars.$vacanciesWeSearchTitle, { split: "words, chars", lineClass: "split-line", charClass: "split-char", wordClass: "split-word" })),
    (vars.splittedVacanciesWriteUsTitle = new SplitType(vars.$vacanciesBlockWriteUsTitle, { split: "words, chars", lineClass: "split-line", charClass: "split-char", wordClass: "split-word" })),
    1280 < $(window).width() &&
      (vars.$pageVacancies.on(
        "mousewheel",
        _.debounce(
          function (e, i) {
            vars.$body.hasClass("is-modal-opened") || isTransition || (i < 0 ? 1 === countVacanciesSlides && ((isTransition = !0), vacanciesScrollDown()) : 0 < i && 2 === countVacanciesSlides && ((isTransition = !0), vacanciesScrollUp()));
          },
          50,
          { leading: !0, trailing: !1 }
        )
      ),
      vars.$vacanciesScrolldown.on("click", function () {
        isTransition || vacanciesScrollDown();
      }),
      vars.$vacanciesPopupContent.mCustomScrollbar({ keyboard: { enable: !0 } })),
    vars.$vacanciesOpenPopup.on("click", function (e) {
      var i = $(e.currentTarget).data("item");
      vars.$body.hasClass("is-modal-opened") || showVacanciesPopup(i);
    }),
    vars.$vacanciesPopupClose.on("click", function () {
      isPopupTransition() || hideVacanciesPopup();
    }),
    vars.$vacanciesPopupOverlay.on("click", function () {
      isPopupTransition() || hideVacanciesPopup();
    }),
    vars.$window.on("keydown", function (e) {
      27 === e.keyCode && vars.$body.hasClass("is-modal-opened") && !isPopupTransition() && hideVacanciesPopup();
    }),
    (vars.splittedContactsHeading = new SplitType(vars.$contactsTitle, { split: "words, chars", lineClass: "split-line", charClass: "split-char", wordClass: "split-word" })),
    1280 < vars.$window.width()
      ? vars.$pageIndex.on(
          "mousewheel",
          _.debounce(
            function (e) {
              vars.$body.hasClass("is-modal-opened") || (state.isScrolling || !0 === vars.indexSlides.getState().isMoving ? e.preventDefault() : (0 < e.deltaY && pageIndexScrollup(), e.deltaY < 0 && pageIndexScrolldown()));
            },
            50,
            { leading: !0, trailing: !1 }
          )
        )
      : (vars.$indexHero.removeClass("is-hidden"),
        vars.$indexAbout.removeClass("is-hidden"),
        vars.$indexSlidepreview.removeClass("is-hidden"),
        vars.$indexSlidesContainer.removeClass("is-hidden"),
        vars.$indexPartners.removeClass("is-hidden"),
        vars.$indexCall.removeClass("is-hidden")),
    vars.$indexSlideDown.on("click", function () {
      pageIndexScrolldown();
    }),
    vars.$headerLogo.on("click", function () {
      "index" === state.prevPath && 0 !== vars.$pageIndex.data("currentsection") && (1 === vars.$pageIndex.data("currentsection") ? hideIndexAbout("backward", !1, showIndexHero) : showIndexFirstScreen());
    }),
    vars.$window.on("keydown", function (e) {
      vars.$pageIndex.hasClass("is-hidden") || ((helpers.isScrolldownKey(e) || 35 === e.keyCode) && pageIndexScrolldown(), (helpers.isScrollupKey(e) || 36 === e.keyCode) && pageIndexScrollup()),
        vars.$body.hasClass("is-modal-opened") ||
          isTransition ||
          (helpers.isScrolldownKey(e)
            ? ($(".page--about").hasClass("is-hidden") || pageAboutScrollDown(), $(".page--vacancies").hasClass("is-hidden") || (1 === countVacanciesSlides && ((isTransition = !0), vacanciesScrollDown())))
            : helpers.isScrollupKey(e)
            ? ($(".page--about").hasClass("is-hidden") || pageAboutScrollUp(), $(".page--vacancies").hasClass("is-hidden") || (2 === countVacanciesSlides && ((isTransition = !0), vacanciesScrollUp())))
            : 35 === e.keyCode
            ? ($(".page--about").hasClass("is-hidden") || pageAboutScrollDown(), $(".page--vacancies").hasClass("is-hidden") || (1 === countVacanciesSlides && ((isTransition = !0), vacanciesScrollDown())))
            : 36 === e.keyCode && ($(".page--about").hasClass("is-hidden") || pageAboutScrollUp(), $(".page--vacancies").hasClass("is-hidden") || (2 === countVacanciesSlides && ((isTransition = !0), vacanciesScrollUp()))));
    });
}
