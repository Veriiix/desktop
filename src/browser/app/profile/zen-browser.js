// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.

#ifdef XP_UNIX
  #ifndef XP_MACOSX
    #define UNIX_BUT_NOT_MAC
  #endif
#endif

pref("browser.tabs.cardPreview.enabled", true);
pref("browser.tabs.hoverPreview.enabled", true);
pref("browser.tabs.cardPreview.delayMs", 100);

#ifdef MOZ_UPDATE_CHANNEL
pref("devtools.debugger.prompt-connection", false);
#endif

// Theme
pref('toolkit.legacyUserProfileCustomizations.stylesheets', true);
pref('browser.compactmode.show', true);
pref('browser.display.focus_ring_on_anything', true);
pref('browser.display.focus_ring_style', 0);
pref('browser.display.focus_ring_width', 0);

pref('browser.newtabpage.activity-stream.newtabWallpapers.enabled', true);
pref('browser.newtabpage.activity-stream.newtabWallpapers.v2.enabled', true);
pref('browser.translations.newSettingsUI.enable', true);

pref("browser.urlbar.trimHttps", true);
pref("browser.urlbar.untrimOnUserInteraction.featureGate", true);

// Url bar
pref('browser.urlbar.unitConversion.enabled', true);
pref('browser.urlbar.trending.featureGate', false);
pref('browser.urlbar.weather.featureGate', true);
pref('browser.urlbar.quickactions.enabled', true);
pref('browser.urlbar.clipboard.featureGate', true);

// new tab page
pref('browser.newtabpage.activity-stream.feeds.topsites', false);
pref('browser.newtabpage.activity-stream.feeds.section.topstories', false);
pref("browser.topsites.contile.enabled", true);

// Pdf
pref('browser.download.open_pdf_attachments_inline', true);
pref('pdfjs.enableHighlightEditor', true);
pref('pdfjs.enableHighlightFloatingButton', true);

pref("alerts.showFavicons", true);
pref('browser.toolbars.bookmarks.visibility', 'never');

// Enable Do Not Track and GPC by default.
pref("privacy.donottrackheader.enabled", true);
pref("privacy.globalprivacycontrol.enabled", true);
// Disable more telemetry
pref("toolkit.telemetry.enabled", false);
pref("browser.ping-centre.telemetry", false);
pref("browser.attribution.enabled", false);
pref("toolkit.telemetry.pioneer-new-studies-available", false);

// CUSTOM ZEN PREFS

pref('zen.welcomeScreen.enabled', true);
pref('zen.welcomeScreen.seen', false);
pref('zen.tabs.vertical', true);
pref('zen.theme.accent-color', "#aac7ff");
pref('zen.theme.toolbar-themed', true);
pref('zen.theme.pill-button', false);
pref('zen.theme.floating-urlbar', false);
pref('zen.view.compact', false);
pref('zen.view.compact.hide-toolbar', false);
pref('zen.view.sidebar-expanded', false);
pref('zen.view.sidebar-expanded.show-button', true);

// Pref to enable the new profiles (TODO: Check this out!)
//pref("browser.profiles.enabled", true);

// Zen Sidebar
pref('zen.sidebar.data', "{\"data\":\n {\"p1\":{\n   \"url\":\"https://www.wikipedia.org/\"\n  },\n\"p2\":{\n   \"url\":\"https://m.twitter.com/\",\n\"ua\": true\n  },\n\"p3\": {\n   \"url\": \"https://www.youtube.com/\",\n\"ua\": true\n},\n\"p4\": {\n   \"url\": \"https://translate.google.com/\",\n\"ua\": true\n},\n\"p5\": {\n   \"url\": \"https://todoist.com/\",\n\"ua\": true\n}},\n\"index\":[\"p1\",\"p2\",\"p3\",\"p4\",\"p5\"]}");
pref('zen.sidebar.enabled', true);
pref('zen.sidebar.floating', true);

// Zen Split View
pref('zen.splitView.working', false);

// Zen Workspaces
pref('zen.workspaces.enabled', true);

// Zen Watermark
pref('zen.watermark.enabled', true);

// Smooth scrolling
user_pref('apz.overscroll.enabled', true); // not DEFAULT on Linux
user_pref('general.smoothScroll', true); // DEFAULT

// Privacy
pref('dom.private-attribution.submission.enabled', false);

pref('media.eme.enabled', true);
pref('webgl.disabled', false);

pref("app.update.url.manual", "https://get-zen.vercel.app/download");
pref("app.update.url.details", "hhttps://get-zen.vercel.app/download");
pref("app.releaseNotesURL", "https://get-zen.vercel.app/release-notes");
pref("app.releaseNotesURL.aboutDialog", "https://get-zen.vercel.app/release-notes");

// Enable importers for other browsers
pref('browser.migrate.vivaldi.enabled', true);
pref('browser.migrate.opera-gx.enabled', true);
pref('browser.migrate.opera.enabled', true);

#include fast-fox.js
#include better-fox.js