
var fc_CSS=document.createElement("link");
    fc_CSS.setAttribute("rel","stylesheet");
    
var fc_isSecured = (window.location && window.location.protocol == "https:");

var fc_lang = document.getElementsByTagName("html")[0].getAttribute("lang"); 

var fc_rtlLanguages = ["ar","he"]; 

var fc_rtlSuffix = (fc_rtlLanguages.indexOf(fc_lang) >= 0) ? "-rtl" : "";
    fc_CSS.setAttribute("type","text/css");
    fc_CSS.setAttribute("href",((fc_isSecured)? "https://d36mpcpuzc4ztk.cloudfront.net":"http://assets1.chat.freshdesk.com")+"/css/visitor"+fc_rtlSuffix+".css");document.getElementsByTagName("head")[0].appendChild(fc_CSS);
    
var fc_JS=document.createElement("script"); 
    fc_JS.type="text/javascript"; 
    fc_JS.defer=true;
    fc_JS.src=((fc_isSecured)?"https://d36mpcpuzc4ztk.cloudfront.net":"http://assets.chat.freshdesk.com")+"/js/visitor.js";(document.body?document.body:document.getElementsByTagName("head")[0]).appendChild(fc_JS);window.livechat_setting= "eyJ3aWRnZXRfc2l0ZV91cmwiOiJ3cGZpeGl0LmZyZXNoZGVzay5jb20iLCJwcm9kdWN0X2lkIjpudWxsLCJuYW1lIjoiV1AgRml4IEl0Iiwid2lkZ2V0X2V4dGVybmFsX2lkIjpudWxsLCJ3aWRnZXRfaWQiOiIwYjMwNDQ5Yi04MzFkLTRhYmMtYTFhOC0wZGQ1ZjRkNDJiZTAiLCJzaG93X29uX3BvcnRhbCI6dHJ1ZSwicG9ydGFsX2xvZ2luX3JlcXVpcmVkIjp0cnVlLCJsYW5ndWFnZSI6bnVsbCwidGltZXpvbmUiOm51bGwsImlkIjoxMDAwMDExMjYwLCJtYWluX3dpZGdldCI6MSwiZmNfaWQiOiJiZWUzZTVjMGNhYjVkNTk2MGVhMGZlMTdkYWRiMTk0NCIsInNob3ciOjEsInJlcXVpcmVkIjoyLCJoZWxwZGVza25hbWUiOiJXUCBGSXggSXQiLCJuYW1lX2xhYmVsIjoiTmFtZSIsIm1lc3NhZ2VfbGFiZWwiOiJNZXNzYWdlIiwicGhvbmVfbGFiZWwiOiJQaG9uZSIsInRleHRmaWVsZF9sYWJlbCI6IlRleHRmaWVsZCIsImRyb3Bkb3duX2xhYmVsIjoiRHJvcGRvd24iLCJ3ZWJ1cmwiOiJ3cGZpeGl0LmZyZXNoZGVzay5jb20iLCJub2RldXJsIjoiY2hhdC5mcmVzaGRlc2suY29tIiwiZGVidWciOjEsIm1lIjoiTWUiLCJleHBpcnkiOjAsImVudmlyb25tZW50IjoicHJvZHVjdGlvbiIsImVuZF9jaGF0X3RoYW5rX21zZyI6IlRoYW5rIHlvdSEhISIsImVuZF9jaGF0X2VuZF90aXRsZSI6IkVuZCIsImVuZF9jaGF0X2NhbmNlbF90aXRsZSI6IkNhbmNlbCIsInNpdGVfaWQiOiJiZWUzZTVjMGNhYjVkNTk2MGVhMGZlMTdkYWRiMTk0NCIsImFjdGl2ZSI6MCwicm91dGluZyI6eyJjaG9pY2VzIjp7ImRlZmF1bHQiOlsiMCJdfSwiZHJvcGRvd25fYmFzZWQiOiJmYWxzZSJ9LCJwcmVjaGF0X2Zvcm0iOjAsImJ1c2luZXNzX2NhbGVuZGFyIjpudWxsLCJwcm9hY3RpdmVfY2hhdCI6MCwicHJvYWN0aXZlX3RpbWUiOjE1LCJzaXRlX3VybCI6IndwZml4aXQuZnJlc2hkZXNrLmNvbSIsImV4dGVybmFsX2lkIjpudWxsLCJkZWxldGVkIjowLCJtb2JpbGUiOjEsImFjY291bnRfaWQiOm51bGwsImNyZWF0ZWRfYXQiOiIyMDE0LTA5LTExVDA3OjEwOjE5LjAwMFoiLCJ1cGRhdGVkX2F0IjoiMjAxNy0wNy0yNFQyMDozMzoyMy4wMDBaIiwiY2JEZWZhdWx0TWVzc2FnZXMiOnsiY29icm93c2luZ19zdGFydF9tc2ciOiJZb3VyIHNjcmVlbnNoYXJlIHNlc3Npb24gaGFzIHN0YXJ0ZWQiLCJjb2Jyb3dzaW5nX3N0b3BfbXNnIjoiWW91ciBzY3JlZW5zaGFyaW5nIHNlc3Npb24gaGFzIGVuZGVkIiwiY29icm93c2luZ19kZW55X21zZyI6IllvdXIgcmVxdWVzdCB3YXMgZGVjbGluZWQiLCJjb2Jyb3dzaW5nX2FnZW50X2J1c3kiOiJBZ2VudCBpcyBpbiBzY3JlZW4gc2hhcmUgc2Vzc2lvbiB3aXRoIGN1c3RvbWVyIiwiY29icm93c2luZ192aWV3aW5nX3NjcmVlbiI6IllvdSBhcmUgdmlld2luZyB0aGUgdmlzaXRvcuKAmXMgc2NyZWVuICIsImNvYnJvd3NpbmdfY29udHJvbGxpbmdfc2NyZWVuIjoiWW91IGhhdmUgYWNjZXNzIHRvIHZpc2l0b3LigJlzIHNjcmVlbiAiLCJjb2Jyb3dzaW5nX3JlcXVlc3RfY29udHJvbCI6IlJlcXVlc3QgdmlzaXRvciBmb3Igc2NyZWVuIGFjY2VzcyAiLCJjb2Jyb3dzaW5nX2dpdmVfdmlzaXRvcl9jb250cm9sIjoiR2l2ZSBhY2Nlc3MgYmFjayB0byB2aXNpdG9yICIsImNvYnJvd3Npbmdfc3RvcF9yZXF1ZXN0IjoiRW5kIHlvdXIgc2NyZWVuc2hhcmluZyBzZXNzaW9uIiwiY29icm93c2luZ19yZXF1ZXN0X2NvbnRyb2xfcmVqZWN0ZWQiOiJZb3VyIHJlcXVlc3Qgd2FzIGRlY2xpbmVkIiwiY29icm93c2luZ19jYW5jZWxfdmlzaXRvcl9tc2ciOiJTY3JlZW5zaGFyaW5nIGlzIGN1cnJlbnRseSB1bmF2YWlsYWJsZSIsImNvYnJvd3NpbmdfYWdlbnRfcmVxdWVzdF9jb250cm9sIjoiQWdlbnQgaXMgcmVxdWVzdGluZyBhY2Nlc3MgdG8geW91ciBzY3JlZW4iLCJjYl92aWV3aW5nX3NjcmVlbl92aSI6IkFnZW50IGNhbiB2aWV3IHlvdXIgc2NyZWVuICIsImNiX2NvbnRyb2xsaW5nX3NjcmVlbl92aSI6IkFnZW50IGhhcyBhY2Nlc3MgdG8geW91ciBzY3JlZW4gIiwiY2Jfdmlld19tb2RlX3N1YnRleHQiOiJZb3VyIGFjY2VzcyB0byB0aGUgc2NyZWVuIGhhcyBiZWVuIHdpdGhkcmF3biAiLCJjYl9naXZlX2NvbnRyb2xfdmkiOiJBbGxvdyBhZ2VudCB0byBhY2Nlc3MgeW91ciBzY3JlZW4gIiwiY2JfdmlzaXRvcl9zZXNzaW9uX3JlcXVlc3QiOiJBZ2VudCBzZWVrcyBhY2Nlc3MgdG8geW91ciBzY3JlZW4gIn19";

