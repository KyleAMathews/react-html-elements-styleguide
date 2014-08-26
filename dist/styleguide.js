// Generated by CoffeeScript undefined
var React;

React = require('react');

module.exports = React.createClass({
  displayName: 'Styleguide',
  render: function() {
    return React.DOM.div(null, React.DOM.h1(null, "Styleguide"), React.DOM.p(null, "The purpose of a styleguide like this is to help determine what the default CSS settings are and to ensure all normal HTML Elements are styled while designing a site."), React.DOM.hr(null), React.DOM.h1({
      "id": "headings"
    }, "Headings"), React.DOM.h1(null, "Heading 1"), React.DOM.h2(null, "Heading 2"), React.DOM.h3(null, "Heading 3"), React.DOM.h4(null, "Heading 4"), React.DOM.h5(null, "Heading 5"), React.DOM.h6(null, "Heading 6"), React.DOM.hr(null), React.DOM.h1({
      "id": "code"
    }, "Code"), React.DOM.pre(null, React.DOM.code({
      "ref": "code"
    }, 'code {\n  @include border-radius(3px);\n  @include force-wrap();\n  background: gray(90%);\n  border: 1px solid gray(80%);\n  display: inline;\n  font-family: Inconsolata, monospace, serif;\n  font-size: 16px;\n  line-height: 20px;\n  max-width: 100%;\n  overflow: auto;\n  padding: 0 rhythm(0.125);\n}')), React.DOM.hr(null), React.DOM.h1({
      "id": "paragraph"
    }, "Paragraph"), React.DOM.img({
      "src": "http://placekitten.com/800/300"
    }), React.DOM.p(null, "Lorem ipsum dolor sit amet, ", React.DOM.a({
      "href": "http://google.com"
    }, "test link"), " adipiscing elit. Nullam dignissim convallis est. Quisque aliquam. Donec faucibus. Nunc iaculis suscipit dui. Nam sit amet sem. Aliquam libero nisi, imperdiet at, tincidunt nec, gravida vehicula, nisl. Praesent mattis, massa quis luctus fermentum, turpis mi volutpat justo, eu volutpat enim diam eget metus. Maecenas ornare tortor. Donec sed tellus eget sapien fringilla nonummy. Mauris a ante. Suspendisse quam sem, consequat at, commodo vitae, feugiat in, nunc. Morbi imperdiet augue quis tellus."), React.DOM.p(null, "Lorem ipsum dolor sit amet, ", React.DOM.em(null, "emphasis"), " consectetuer adipiscing elit. Nullam dignissim convallis est. Quisque aliquam. Donec faucibus. Nunc iaculis suscipit dui. Nam sit amet sem. Aliquam libero nisi, imperdiet at, tincidunt nec, gravida vehicula, nisl. Praesent mattis, massa quis luctus fermentum, turpis mi volutpat justo, eu volutpat enim diam eget metus. Maecenas ornare tortor. Donec sed tellus eget sapien fringilla nonummy. Mauris a ante. Suspendisse quam sem, consequat at, commodo vitae, feugiat in, nunc. Morbi imperdiet augue quis tellus."), React.DOM.hr(null), React.DOM.h1({
      "id": "list_types"
    }, "List Types"), React.DOM.h3(null, "Definition List"), React.DOM.dl(null, React.DOM.dt(null, "Definition List Title"), React.DOM.dd(null, "This is a definition list division.")), React.DOM.h3(null, "Ordered List"), React.DOM.ol(null, React.DOM.li(null, "List Item 1"), React.DOM.li(null, "List Item 2"), React.DOM.li(null, "List Item 3")), React.DOM.h3(null, "Unordered List"), React.DOM.ul(null, React.DOM.li(null, "List Item 1"), React.DOM.li(null, "List Item 2"), React.DOM.li(null, "List Item 3")), React.DOM.hr(null), React.DOM.h1({
      "id": "tables"
    }, "Tables"), React.DOM.table(null, React.DOM.thead(null, React.DOM.tr(null, React.DOM.th(null, "Table Header 1"), React.DOM.th(null, "Table Header 2"), React.DOM.th(null, "Table Header 3"))), React.DOM.tbody(null, React.DOM.tr(null, React.DOM.td(null, "Division 1"), React.DOM.td(null, "Division 2"), React.DOM.td(null, "Division 3")), React.DOM.tr(null, React.DOM.td(null, "Division 1"), React.DOM.td(null, "Division 2"), React.DOM.td(null, "Division 3")), React.DOM.tr(null, React.DOM.td(null, "Division 1"), React.DOM.td(null, "Division 2"), React.DOM.td(null, "Division 3")))), React.DOM.br(null), React.DOM.hr(null), React.DOM.h1({
      "id": "misc"
    }, "Misc Stuff - abbr, code, sub, sup, pre, blockquote etc."), React.DOM.p(null, "Lorem ", React.DOM.sup(null, "superscript"), " dolor ", React.DOM.sub(null, "subscript"), " amet, consectetuer adipiscing elit. Nullam dignissim convallis est. Quisque aliquam. ", React.DOM.cite(null, "cite"), ". Nunc iaculis suscipit dui. Nam sit amet sem. Aliquam libero nisi, imperdiet at, tincidunt nec, gravida vehicula, nisl. Praesent mattis, massa quis luctus fermentum, turpis mi volutpat justo, eu volutpat enim diam eget metus. Maecenas ornare tortor. Donec sed ", React.DOM.code(null, "for apple in (for apple tree in [orchard of apple trees])"), " tellus eget sapien fringilla nonummy. Mauris a ante. Suspendisse quam sem, consequat at, commodo vitae, feugiat in, nunc. Morbi imperdiet augue quis tellus.  ", React.DOM.abbr({
      "title": "Avenue"
    }, "AVE")), React.DOM.h3(null, "Bivouac on a mountain side."), React.DOM.pre(null, "I see before me now a traveling army halting,\nBelow a fertile valley spread, with barns and the orchards of\n       summer,\nBehind, the terraced sides of a mountain, abrupt, in places rising\n       high,\nBroken, with rocks, with clinging cedars, with tall shapes dingily\n       seen,\nThe numerous camp-fires scatter\'d near and far, some away up on\n       the mountain,\nThe shadowy forms of men and horses, looming, large-sized,\n       flickering,\nAnd over all the sky\u2014the sky! far, far out of reach, studded,\n       breaking out, the eternal stars."), React.DOM.blockquote(null, React.DOM.p(null, "\"This stylesheet is going to help so freaking much.\" ", React.DOM.br(null), "-Blockquote")), React.DOM.hr(null), React.DOM.h1(null, "This is an example of Heading 1"), React.DOM.p(null, "A simple paragraph. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."), React.DOM.h2(null, "This is an example of heading 2"), React.DOM.p(null, "A simple paragraph. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."), React.DOM.h3(null, "This is an example of heading 3"), React.DOM.p(null, "A simple paragraph. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."), React.DOM.h4(null, "This is an example of heading 4"), React.DOM.p(null, "A simple paragraph. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."), React.DOM.h5(null, "This is an example of heading 5"), React.DOM.p(null, "A simple paragraph. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."), React.DOM.h6(null, "This is an example of heading 6"), React.DOM.p(null, "A simple paragraph. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."));
  }
});
