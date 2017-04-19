#Fortinet-Angular Patch

I had issues using angular JS (1.3) with Fortinet SSLVPN (Web).

They rewrite JS ($location, $browser) and have own functions to rewrite stuff.

The problem was a lost scope, returning $location.url() without scope for $location (this) inside url().

This patch should be loaded before angular and should eliminate those problems.
