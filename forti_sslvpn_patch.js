/*
	FortiNet SSLVPN (WEB) Patch for Angular (1.3.18)
	Makes routes with angular possible...
*/
function _fgt_angularLocation(a){
	return typeof a === 'object' && a.hasOwnProperty('$$url');
}
if(typeof fgt_sslvpn !== "undefined"){
	fgt_sslvpn.host_restore = function(a){
		if(_fgt_angularLocation(a)) return fgt_sslvpn.location_restore(a, fgt_sslvpn.LOC_HOST).bind(a);
		else return fgt_sslvpn.location_restore(a, fgt_sslvpn.LOC_HOST)
	}
	fgt_sslvpn.hostname_restore = function(a){
		if(_fgt_angularLocation(a)) return fgt_sslvpn.location_restore(a, fgt_sslvpn.LOC_HOSTNAME).bind(a);
		else return fgt_sslvpn.location_restore(a, fgt_sslvpn.LOC_HOSTNAME)
	}
	fgt_sslvpn.port_restore = function(a){
		if(_fgt_angularLocation(a)) return fgt_sslvpn.location_restore(a, fgt_sslvpn.LOC_PORT).bind(a);
		else return fgt_sslvpn.location_restore(a, fgt_sslvpn.LOC_PORT)
	}
	fgt_sslvpn.href_restore = function(a){
		if(_fgt_angularLocation(a)) return fgt_sslvpn.location_restore(a, fgt_sslvpn.LOC_HREF).bind(a);
		else return fgt_sslvpn.location_restore(a, fgt_sslvpn.LOC_HREF)
	}
	fgt_sslvpn.pathname_restore = function(a){
		if(_fgt_angularLocation(a)) return fgt_sslvpn.location_restore(a, fgt_sslvpn.LOC_PATHNAME).bind(a);
		else return fgt_sslvpn.location_restore(a, fgt_sslvpn.LOC_PATHNAME)
	}
	fgt_sslvpn.protocol_restore = function(a){
		if(_fgt_angularLocation(a)) return fgt_sslvpn.location_restore(a, fgt_sslvpn.LOC_PROTOCOL).bind(a);
		else return fgt_sslvpn.location_restore(a, fgt_sslvpn.LOC_PROTOCOL)
	}
	fgt_sslvpn.domain_restore = function(a){
		if(_fgt_angularLocation(a)) return fgt_sslvpn.location_restore(a, fgt_sslvpn.LOC_DOMAIN).bind(a);
		else return fgt_sslvpn.location_restore(a, fgt_sslvpn.LOC_DOMAIN)
	}
	fgt_sslvpn.referrer_restore = function(a){
		if(_fgt_angularLocation(a)) return fgt_sslvpn.location_restore(a, fgt_sslvpn.LOC_REFERRER).bind(a);
		else return fgt_sslvpn.location_restore(a, fgt_sslvpn.LOC_REFERRER)
	}
	fgt_sslvpn.url_restore = function(a){
		if(_fgt_angularLocation(a)) return fgt_sslvpn.location_restore(a, fgt_sslvpn.LOC_URL).bind(a);
		else return fgt_sslvpn.location_restore(a, fgt_sslvpn.LOC_URL)
	}
	
}