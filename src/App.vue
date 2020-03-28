<template>
  <div id="app">
    <router-view name="header" />

    <router-view :key="$route.fullPath" />

    <router-view name="footer" />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

html,
body {
  font-family: sans-serif;
  font-size: 10px;
  line-height: 1;
  color: #333;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: 100%;
  font-weight: normal;
}

ul {
  list-style-type: none;
}

img {
  border: 0 none;
  vertical-align: top;
}

a,
a:active,
a:hover,
a:visited,
a:link {
  color: #333;
  text-decoration: none;
}

caption {
  overflow: hidden;
  width: 1px;
  font-size: 1px;
  line-height: 0;
  text-indent: -9999px;
}

.screen_out {
  overflow: hidden;
  position: absolute;
  width: 1px;
  height: 1px;
  line-height: 0;
  text-indent: -9999px;
}

.outer_cell {
  display: table;
  width: 100%;
  height: 100%;
}

.outer_cell .inner_cell {
  display: table-cell;
  vertical-align: middle;
}

.wrap_welcome {
  min-width: 320px;
  margin: 0 auto;
  padding: 0 10px 40px;
  box-sizing: border-box;
}

.wrap_welcome .inner_welcome {
  margin-top: 20px;
}

.wrap_welcome .title_local {
  font-size: 18px;
  font-weight: 700;
  text-align: center;
}

.wrap_welcome .link_local {
  display: inline-block;
  margin: 11px 0 0;
  padding: 6px;
  font-size: 16px;
  font-weight: 700;
}

.wrap_welcome .group_button {
  margin-top: 40px;
}

.wrap_welcome .title_welcome {
  display: block;
  font-size: 18px;
  font-weight: 700;
  text-align: center;
}

.wrap_welcome .description_welcome {
  font-size: 14px;
  line-height: 1.4;
  color: #888;
  text-align: center;
}

.wrap_welcome .title_welcome + .description_welcome {
  margin-top: 20px;
}

.wrap_welcome .description_welcome + .description_welcome {
  margin-top: 10px;
}

.container {
  padding: 50px 0 42px;
  background-color: #fff;
}

.contents {
  margin-top: 20px;
  margin-right: 10px;
  margin-left: 10px;
}

.contents.create,
.contents.edit {
  margin-top: 10px;
}

.contents.create .post_header,
.contents.edit .post_header {
  margin: -1px 0 10px;
  padding: 0;
}

.contents.article {
  position: relative;
  z-index: 1;
  margin: 56.25% 0 0;
  padding: 0 10px;
  border-top: 0 none;
  background-color: #fff;
}

.group_button {
  margin-top: 20px;
  font-size: 0;
}

.group_button .inner_half:first-child {
  padding-left: 0;
}

.group_button .inner_half {
  display: inline-block;
  width: 50%;
  padding-left: 10px;
  box-sizing: border-box;
  vertical-align: top;
}

.group_button .button_global2 ~ .button_global2,
.group_button .button_global2 ~ .link_global,
.group_button .link_global ~ .link_global,
.group_button .link_global ~ .button_global2 {
  margin-top: 10px;
}

.link_global {
  display: block;
  padding: 13px 0;
  border: 1px solid #0074c2;
  box-sizing: border-box;
  font-family: sans-serif;
  font-size: 14px;
  font-weight: 700;
  line-height: 1;
  color: #0074c2 !important;
  background-color: #fff;
  text-align: center;
}

.link_action {
  color: #fff !important;
  border-color: transparent;
  background-color: #0074c2;
}

.link_delete {
  color: #fff !important;
  border-color: transparent;
  background-color: #000;
}

.link_search {
  color: #fff !important;
  border-color: transparent;
  background-color: #000;
}

.icon_global {
  display: inline-block;
  font-size: 1px;
  line-height: 0;
  color: transparent;
  background: url(~@/assets/images/ico_global.png) 0 0 no-repeat;
  background-size: 160px auto;
  vertical-align: middle;
}

.group_select {
  display: inline-block;
  position: relative;
  z-index: 1;
  min-width: 90px;
  width: 30%;
  height: 40px;
  border: 1px solid #e9e9e9;
  box-sizing: border-box;
  background-position: 100% 50%;
}

.group_select .label_local {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  padding: 0 12px;
  font-size: 0;
}

.group_select .select_local {
  width: 100%;
  height: 39px;
  border: 0 none;
  font-family: inherit;
  line-height: 38px;
  opacity: 0;
  filter: alpha(opacity=0);
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  cursor: pointer;
}

.group_select .text_local {
  display: inline-block;
  font-size: 14px;
  line-height: 39px;
  text-align: left;
  vertical-align: middle;
}

.group_select .icon_arrow {
  position: absolute;
  top: 50%;
  right: 12px;
  width: 14px;
  height: 14px;
  margin-top: -7px;
  background-position: 0 -35px;
}

.group_select.full {
  display: block;
  min-width: auto;
  width: 100%;
  border-right: 0 none;
  border-left: 0 none;
}

.post_header {
  display: table;
  width: 100%;
  padding: 10px 0;
}

.post_container .title_local {
  font-size: 14px;
  line-height: 1.4;
}

.post_container .post_information {
  margin-top: 10px;
  font-size: 0;
}

.post_container .text_local:first-child {
  margin-left: 0;
  padding-left: 0;
}

.post_container .text_local:first-child:before {
  display: none;
}

.post_container .text_local {
  position: relative;
  margin-left: 10px;
  padding-left: 10px;
  font-size: 12px;
  color: #888;
}

.post_container .text_local:before {
  position: absolute;
  top: 4px;
  bottom: 3px;
  left: 0;
  border-left: 1px solid #e9e9e9;
  content: '';
}

.post_contents {
  padding-top: 10px;
  border-top: 1px solid #e9e9e9;
  box-sizing: border-box;
  font-size: 10pt;
  line-height: 1.4;
}

.post_contents .ql-container.ql-snow {
  border: 0 none;
}

.post_contents .ql-editor {
  padding: 0;
}

.post_contents .ql-editor pre {
  background-color: #23241f;
  color: #f8f8f2;
  overflow: visible;
}

.post_contents .quillWrapper {
  display: none;
}
</style>
