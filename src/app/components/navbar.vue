<template>
  <nav class="navbar navbar-default">
    <div class="container">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="#">Chief Engine <small><sup>v0.0.1</sup></small></a>
      </div>

      <div class="collapse navbar-collapse" id="navbar">
        <ul class="nav navbar-nav">
          <li><router-link to="/" href="#"><i class="fa fa-lg fa-home"></i></router-link></li>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Developers <span class="caret"></span></a>
            <ul class="dropdown-menu">
              <li><a href="//github.com/hegdeashwin/chief-engine" target="_blank">Github Home Page</a></li>
              <li><a href="//github.com/hegdeashwin/chief-engine/releases" target="_blank">Release Page</a></li>
              <li role="separator" class="divider"></li>
              <li><a href="//github.com/hegdeashwin/chief-engine/milestones" target="_blank">Report Issues</a></li>
              <li><a href="//github.com/hegdeashwin/chief-engine/pulls" target="_blank">Open Pull Requests</a></li>
              <li role="separator" class="divider"></li>
              <li><a href="//github.com/hegdeashwin/chief-engine" target="_blank">About Chief Engine</a></li>
            </ul>
          </li>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Help <span class="caret"></span></a>
            <ul class="dropdown-menu">
              <li><a href="#">Welcome</a></li>
              <li role="separator" class="divider"></li>
              <li><a href="//github.com/Frontcore/frontcore/wiki" target="_blank">Documentation</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
