var casper = require('casper').create();
var username = 'kenshin1983';
var password = '998877xxxx';
var itemLink = casper.cli.args[0];

casper.start('http://www.alimama.com/member/login.htm?forward=http://u.alimama.com', function(){
	this.page.switchToChildFrame(0);
	this.fill('#J_StaticForm', {
		TPL_username : username,
		TPL_password : password
	}, true);
	this.waitForSelector('.login-success');
});

casper.thenOpen('http://pub.alimama.com/#!/promo/self/links');

casper.waitForSelector('#J_originUrl', function() {
    this.capture('capture3.png');
	this.evaluate(function(link){
		document.querySelector('#J_originUrl').value = link;
		document.querySelector('.promo-links-main button').click();
	}, itemLink);
});

casper.waitForSelector('#J_zone_add', function() {
	this.capture('capture4.png');
	this.waitForSelector('a.btn-size28.mr10', function(){
		this.click('a.btn-size28.mr10');
	});
	
	this.waitForSelector('div.getcode-box', function(){
		this.capture('capture5.png');
		this.echo(this.fetchText('div.getcode-box textarea'));
	});
});

casper.run();
