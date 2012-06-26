<div id="news_content">
      <p><strong>Elapse 是一个开源的 JavaScript 模板引擎，其特点如下：</strong></p>
<p>&nbsp;</p>
<ul>
<li>语法简单：由于该引擎基于JS语法，并做增强，所以学习成本低，且功能强大。</li>
<li>可编译，高性能：经测试，编译后的运行效率和市面上大部分模板引擎效率持平，或更高。</li>
<li>简单的include：只需配置一个loader（加载器），便可支持各种模板来源，并自动从来源获取模板。</li>
</ul>
<p><span style="font-size: x-small;"><strong><span style="font-size: medium;">需求样例——渲染一个数据表格：</span></strong></span></p>
<p><span style="font-size: medium;"><span style="font-size: medium;"><br></span></span></p>
<p><span style="font-size: medium;"><span style="font-size: small;"><span style="font-size: medium;">模板：</span></span></span></p>
<p>&nbsp;</p>
<div class="dp-highlighter"><div class="bar"><div class="tools">Html代码 <embed wmode="transparent" src="/javascripts/syntaxhighlighter/clipboard_new.swf" width="14" height="15" flashvars="clipboard=%09%09%09%09%3Ctable%3E%0A%09%09%09%09%09%3Cthead%3E%0A%09%09%09%09%09%09%3Ctr%3E%0A%09%09%09%09%09%09%09%3Cth%3E%0A%09%09%09%09%09%09%09%09%E5%A7%93%E5%90%8D%0A%09%09%09%09%09%09%09%3C%2Fth%3E%0A%09%09%09%09%09%09%09%3Cth%3E%0A%09%09%09%09%09%09%09%09%E6%80%A7%E5%88%AB%0A%09%09%09%09%09%09%09%3C%2Fth%3E%0A%09%09%09%09%09%09%09%3Cth%3E%0A%09%09%09%09%09%09%09%09%E7%94%9F%E6%97%A5%0A%09%09%09%09%09%09%09%3C%2Fth%3E%0A%09%09%09%09%09%09%3C%2Ftr%3E%0A%09%09%09%09%09%3C%2Fthead%3E%0A%09%09%09%09%09%3Ctbody%3E%0A%09%09%09%09%09%09%24%7Bforarr%20%23userList%20as%20user%7D%0A%09%09%09%09%09%09%09%3Ctr%3E%0A%09%09%09%09%09%09%09%09%3Ctd%3E%0A%09%09%09%09%09%09%09%09%09%24%7Buser.name%7D%0A%09%09%09%09%09%09%09%09%3C%2Ftd%3E%0A%09%09%09%09%09%09%09%09%3Ctd%3E%0A%09%09%09%09%09%09%09%09%09%24%7Buser.sex%7D%0A%09%09%09%09%09%09%09%09%3C%2Ftd%3E%0A%09%09%09%09%09%09%09%09%3Ctd%3E%0A%09%09%09%09%09%09%09%09%09%24%7Buser.birthday%7D%0A%09%09%09%09%09%09%09%09%3C%2Ftd%3E%0A%09%09%09%09%09%09%09%3C%2Ftr%3E%0A%09%09%09%09%09%09%24%7B%2Fforarr%7D%0A%09%09%09%09%09%3C%2Ftbody%3E%0A%09%09%09%09%3C%2Ftable%3E" quality="high" allowscriptaccess="always" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer"></div></div><ol start="1" class="dp-xml"><li><span><span class="tag">&lt;</span><span class="tag-name">table</span><span class="tag">&gt;</span><span>&nbsp;&nbsp;</span></span></li><li><span>&nbsp;&nbsp;&nbsp;&nbsp;<span class="tag">&lt;</span><span class="tag-name">thead</span><span class="tag">&gt;</span><span>&nbsp;&nbsp;</span></span></li><li><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="tag">&lt;</span><span class="tag-name">tr</span><span class="tag">&gt;</span><span>&nbsp;&nbsp;</span></span></li><li><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="tag">&lt;</span><span class="tag-name">th</span><span class="tag">&gt;</span><span>&nbsp;&nbsp;</span></span></li><li><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;姓名&nbsp;&nbsp;</span></li><li><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="tag">&lt;/</span><span class="tag-name">th</span><span class="tag">&gt;</span><span>&nbsp;&nbsp;</span></span></li><li><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="tag">&lt;</span><span class="tag-name">th</span><span class="tag">&gt;</span><span>&nbsp;&nbsp;</span></span></li><li><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;性别&nbsp;&nbsp;</span></li><li><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="tag">&lt;/</span><span class="tag-name">th</span><span class="tag">&gt;</span><span>&nbsp;&nbsp;</span></span></li><li><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="tag">&lt;</span><span class="tag-name">th</span><span class="tag">&gt;</span><span>&nbsp;&nbsp;</span></span></li><li><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;生日&nbsp;&nbsp;</span></li><li><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="tag">&lt;/</span><span class="tag-name">th</span><span class="tag">&gt;</span><span>&nbsp;&nbsp;</span></span></li><li><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="tag">&lt;/</span><span class="tag-name">tr</span><span class="tag">&gt;</span><span>&nbsp;&nbsp;</span></span></li><li><span>&nbsp;&nbsp;&nbsp;&nbsp;<span class="tag">&lt;/</span><span class="tag-name">thead</span><span class="tag">&gt;</span><span>&nbsp;&nbsp;</span></span></li><li><span>&nbsp;&nbsp;&nbsp;&nbsp;<span class="tag">&lt;</span><span class="tag-name">tbody</span><span class="tag">&gt;</span><span>&nbsp;&nbsp;</span></span></li><li><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${forarr&nbsp;#userList&nbsp;as&nbsp;user}&nbsp;&nbsp;</span></li><li><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="tag">&lt;</span><span class="tag-name">tr</span><span class="tag">&gt;</span><span>&nbsp;&nbsp;</span></span></li><li><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="tag">&lt;</span><span class="tag-name">td</span><span class="tag">&gt;</span><span>&nbsp;&nbsp;</span></span></li><li><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${user.name}&nbsp;&nbsp;</span></li><li><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="tag">&lt;/</span><span class="tag-name">td</span><span class="tag">&gt;</span><span>&nbsp;&nbsp;</span></span></li><li><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="tag">&lt;</span><span class="tag-name">td</span><span class="tag">&gt;</span><span>&nbsp;&nbsp;</span></span></li><li><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${user.sex}&nbsp;&nbsp;</span></li><li><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="tag">&lt;/</span><span class="tag-name">td</span><span class="tag">&gt;</span><span>&nbsp;&nbsp;</span></span></li><li><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="tag">&lt;</span><span class="tag-name">td</span><span class="tag">&gt;</span><span>&nbsp;&nbsp;</span></span></li><li><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${user.birthday}&nbsp;&nbsp;</span></li><li><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="tag">&lt;/</span><span class="tag-name">td</span><span class="tag">&gt;</span><span>&nbsp;&nbsp;</span></span></li><li><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="tag">&lt;/</span><span class="tag-name">tr</span><span class="tag">&gt;</span><span>&nbsp;&nbsp;</span></span></li><li><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${/forarr}&nbsp;&nbsp;</span></li><li><span>&nbsp;&nbsp;&nbsp;&nbsp;<span class="tag">&lt;/</span><span class="tag-name">tbody</span><span class="tag">&gt;</span><span>&nbsp;&nbsp;</span></span></li><li><span><span class="tag">&lt;/</span><span class="tag-name">table</span><span class="tag">&gt;</span><span>&nbsp;&nbsp;</span></span></li></ol></div><pre name="code" class="html" style="display: none; ">				&lt;table&gt;
					&lt;thead&gt;
						&lt;tr&gt;
							&lt;th&gt;
								姓名
							&lt;/th&gt;
							&lt;th&gt;
								性别
							&lt;/th&gt;
							&lt;th&gt;
								生日
							&lt;/th&gt;
						&lt;/tr&gt;
					&lt;/thead&gt;
					&lt;tbody&gt;
						${forarr #userList as user}
							&lt;tr&gt;
								&lt;td&gt;
									${user.name}
								&lt;/td&gt;
								&lt;td&gt;
									${user.sex}
								&lt;/td&gt;
								&lt;td&gt;
									${user.birthday}
								&lt;/td&gt;
							&lt;/tr&gt;
						${/forarr}
					&lt;/tbody&gt;
				&lt;/table&gt;</pre>
<p>&nbsp;</p>
<p><span style="font-size: medium;">注入到模板的数据：</span></p>
<p>&nbsp;</p>
<div class="dp-highlighter"><div class="bar"><div class="tools">Js代码 <embed wmode="transparent" src="/javascripts/syntaxhighlighter/clipboard_new.swf" width="14" height="15" flashvars="clipboard=%09%09%09%09%7B%0A%09%09%09%09%09%22userList%22%3A%20%5B%0A%09%09%09%09%09%09%7B%0A%09%09%09%09%09%09%09%22name%22%3A%20%22%E5%B0%8F%E6%98%8E%22%2C%0A%09%09%09%09%09%09%09%22sex%22%3A%20%22%E7%94%B7%22%2C%0A%09%09%09%09%09%09%09%22birthday%22%3A%20%221989-10-29%22%0A%09%09%09%09%09%09%7D%2C%0A%09%09%09%09%09%09%7B%0A%09%09%09%09%09%09%09%22name%22%3A%20%22%E5%B0%8F%E7%BA%A2%22%2C%0A%09%09%09%09%09%09%09%22sex%22%3A%20%22%E5%A5%B3%22%2C%0A%09%09%09%09%09%09%09%22birthday%22%3A%20%221989-10-1%22%0A%09%09%09%09%09%09%7D%0A%09%09%09%09%09%5D%0A%09%09%09%09%7D" quality="high" allowscriptaccess="always" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer"></div></div><ol start="1" class="dp-c"><li><span><span>{&nbsp;&nbsp;</span></span></li><li><span>&nbsp;&nbsp;&nbsp;&nbsp;<span class="string">"userList"</span><span>:&nbsp;[&nbsp;&nbsp;</span></span></li><li><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{&nbsp;&nbsp;</span></li><li><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="string">"name"</span><span>:&nbsp;</span><span class="string">"小明"</span><span>,&nbsp;&nbsp;</span></span></li><li><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="string">"sex"</span><span>:&nbsp;</span><span class="string">"男"</span><span>,&nbsp;&nbsp;</span></span></li><li><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="string">"birthday"</span><span>:&nbsp;</span><span class="string">"1989-10-29"</span><span>&nbsp;&nbsp;</span></span></li><li><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},&nbsp;&nbsp;</span></li><li><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{&nbsp;&nbsp;</span></li><li><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="string">"name"</span><span>:&nbsp;</span><span class="string">"小红"</span><span>,&nbsp;&nbsp;</span></span></li><li><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="string">"sex"</span><span>:&nbsp;</span><span class="string">"女"</span><span>,&nbsp;&nbsp;</span></span></li><li><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="string">"birthday"</span><span>:&nbsp;</span><span class="string">"1989-10-1"</span><span>&nbsp;&nbsp;</span></span></li><li><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}&nbsp;&nbsp;</span></li><li><span>&nbsp;&nbsp;&nbsp;&nbsp;]&nbsp;&nbsp;</span></li><li><span>}&nbsp;&nbsp;</span></li></ol></div><pre name="code" class="js" style="display: none; ">				{
					"userList": [
						{
							"name": "小明",
							"sex": "男",
							"birthday": "1989-10-29"
						},
						{
							"name": "小红",
							"sex": "女",
							"birthday": "1989-10-1"
						}
					]
				}</pre>
<p>&nbsp;&nbsp;<span style="white-space: pre;">	</span></p>
<p><span style="font-size: medium;">渲染代码：</span></p>
<p>&nbsp;</p>
<div class="dp-highlighter"><div class="bar"><div class="tools">Js代码 <embed wmode="transparent" src="/javascripts/syntaxhighlighter/clipboard_new.swf" width="14" height="15" flashvars="clipboard=%09%09%09%09var%20template%20%3D%20%24(%22%23template%22).val()%3B%0A%09%09%09%09var%20json%20%3D%20%24.parseJSON(%24(%22%23json%22).val())%3B%0A%09%09%09%09%2F%2F%E6%B8%B2%E6%9F%93%E4%BB%A3%E7%A0%81%E5%BC%80%E5%A7%8B%0A%09%09%09%09Elapse.renderFromSource(%7B%0A%09%09%09%09%09source%3A%20template%2C%0A%09%09%09%09%09data%3A%20json%2C%0A%09%09%09%09%09complete%3A%20function%20(text)%20%7B%0A%09%09%09%09%09%09%24(%22%23result%22).html(text)%3B%0A%09%09%09%09%09%7D%0A%09%09%09%09%7D)%3B%0A%09%09%09%09%2F%2F%E6%B8%B2%E6%9F%93%E4%BB%A3%E7%A0%81%E7%BB%93%E6%9D%9F" quality="high" allowscriptaccess="always" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer"></div></div><ol start="1" class="dp-c"><li><span><span class="keyword">var</span><span>&nbsp;template&nbsp;=&nbsp;$(</span><span class="string">"#template"</span><span>).val();&nbsp;&nbsp;</span></span></li><li><span><span class="keyword">var</span><span>&nbsp;json&nbsp;=&nbsp;$.parseJSON($(</span><span class="string">"#json"</span><span>).val());&nbsp;&nbsp;</span></span></li><li><span><span class="comment">//渲染代码开始</span><span>&nbsp;&nbsp;</span></span></li><li><span>Elapse.renderFromSource({&nbsp;&nbsp;</span></li><li><span>&nbsp;&nbsp;&nbsp;&nbsp;source:&nbsp;template,&nbsp;&nbsp;</span></li><li><span>&nbsp;&nbsp;&nbsp;&nbsp;data:&nbsp;json,&nbsp;&nbsp;</span></li><li><span>&nbsp;&nbsp;&nbsp;&nbsp;complete:&nbsp;<span class="keyword">function</span><span>&nbsp;(text)&nbsp;{&nbsp;&nbsp;</span></span></li><li><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$(<span class="string">"#result"</span><span>).html(text);&nbsp;&nbsp;</span></span></li><li><span>&nbsp;&nbsp;&nbsp;&nbsp;}&nbsp;&nbsp;</span></li><li><span>});&nbsp;&nbsp;</span></li><li><span><span class="comment">//渲染代码结束</span><span>&nbsp;&nbsp;</span></span></li></ol></div><pre name="code" class="js" style="display: none; ">				var template = $("#template").val();
				var json = $.parseJSON($("#json").val());
				//渲染代码开始
				Elapse.renderFromSource({
					source: template,
					data: json,
					complete: function (text) {
						$("#result").html(text);
					}
				});
				//渲染代码结束</pre>
<p>&nbsp;</p>
<p><span style="font-size: medium;">渲染结果：</span></p>
<p>&nbsp;</p>
<div class="dp-highlighter"><div class="bar"><div class="tools">Html代码 <embed wmode="transparent" src="/javascripts/syntaxhighlighter/clipboard_new.swf" width="14" height="15" flashvars="clipboard=%3Ctable%3E%20%20%0A%20%20%20%20%3Cthead%3E%20%20%0A%20%20%20%20%20%20%20%20%3Ctr%3E%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cth%3E%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%E5%A7%93%E5%90%8D%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fth%3E%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cth%3E%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%E6%80%A7%E5%88%AB%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fth%3E%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cth%3E%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%E7%94%9F%E6%97%A5%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fth%3E%20%20%0A%20%20%20%20%20%20%20%20%3C%2Ftr%3E%20%20%0A%20%20%20%20%3C%2Fthead%3E%20%20%0A%20%20%20%20%3Ctbody%3E%20%20%0A%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Ctr%3E%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ctd%3E%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%E5%B0%8F%E6%98%8E%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Ftd%3E%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ctd%3E%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%E7%94%B7%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Ftd%3E%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ctd%3E%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%201989-10-29%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Ftd%3E%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Ftr%3E%20%20%0A%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Ctr%3E%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ctd%3E%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%E5%B0%8F%E7%BA%A2%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Ftd%3E%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ctd%3E%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%E5%A5%B3%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Ftd%3E%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ctd%3E%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%201989-10-1%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Ftd%3E%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Ftr%3E%20%20%0A%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%3C%2Ftbody%3E%20%20%0A%3C%2Ftable%3E" quality="high" allowscriptaccess="always" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer"></div></div><ol start="1" class="dp-xml"><li><span><span class="tag">&lt;</span><span class="tag-name">table</span><span class="tag">&gt;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;</span></span></li><li><span>&nbsp;&nbsp;&nbsp;&nbsp;<span class="tag">&lt;</span><span class="tag-name">thead</span><span class="tag">&gt;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;</span></span></li><li><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="tag">&lt;</span><span class="tag-name">tr</span><span class="tag">&gt;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;</span></span></li><li><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="tag">&lt;</span><span class="tag-name">th</span><span class="tag">&gt;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;</span></span></li><li><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;姓名&nbsp;&nbsp;&nbsp;&nbsp;</span></li><li><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="tag">&lt;/</span><span class="tag-name">th</span><span class="tag">&gt;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;</span></span></li><li><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="tag">&lt;</span><span class="tag-name">th</span><span class="tag">&gt;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;</span></span></li><li><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;性别&nbsp;&nbsp;&nbsp;&nbsp;</span></li><li><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="tag">&lt;/</span><span class="tag-name">th</span><span class="tag">&gt;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;</span></span></li><li><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="tag">&lt;</span><span class="tag-name">th</span><span class="tag">&gt;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;</span></span></li><li><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;生日&nbsp;&nbsp;&nbsp;&nbsp;</span></li><li><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="tag">&lt;/</span><span class="tag-name">th</span><span class="tag">&gt;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;</span></span></li><li><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="tag">&lt;/</span><span class="tag-name">tr</span><span class="tag">&gt;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;</span></span></li><li><span>&nbsp;&nbsp;&nbsp;&nbsp;<span class="tag">&lt;/</span><span class="tag-name">thead</span><span class="tag">&gt;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;</span></span></li><li><span>&nbsp;&nbsp;&nbsp;&nbsp;<span class="tag">&lt;</span><span class="tag-name">tbody</span><span class="tag">&gt;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;</span></span></li><li><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></li><li><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="tag">&lt;</span><span class="tag-name">tr</span><span class="tag">&gt;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;</span></span></li><li><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="tag">&lt;</span><span class="tag-name">td</span><span class="tag">&gt;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;</span></span></li><li><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;小明&nbsp;&nbsp;&nbsp;&nbsp;</span></li><li><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="tag">&lt;/</span><span class="tag-name">td</span><span class="tag">&gt;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;</span></span></li><li><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="tag">&lt;</span><span class="tag-name">td</span><span class="tag">&gt;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;</span></span></li><li><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;男&nbsp;&nbsp;&nbsp;&nbsp;</span></li><li><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="tag">&lt;/</span><span class="tag-name">td</span><span class="tag">&gt;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;</span></span></li><li><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="tag">&lt;</span><span class="tag-name">td</span><span class="tag">&gt;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;</span></span></li><li><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1989-10-29&nbsp;&nbsp;&nbsp;&nbsp;</span></li><li><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="tag">&lt;/</span><span class="tag-name">td</span><span class="tag">&gt;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;</span></span></li><li><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="tag">&lt;/</span><span class="tag-name">tr</span><span class="tag">&gt;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;</span></span></li><li><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></li><li><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="tag">&lt;</span><span class="tag-name">tr</span><span class="tag">&gt;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;</span></span></li><li><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="tag">&lt;</span><span class="tag-name">td</span><span class="tag">&gt;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;</span></span></li><li><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;小红&nbsp;&nbsp;&nbsp;&nbsp;</span></li><li><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="tag">&lt;/</span><span class="tag-name">td</span><span class="tag">&gt;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;</span></span></li><li><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="tag">&lt;</span><span class="tag-name">td</span><span class="tag">&gt;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;</span></span></li><li><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;女&nbsp;&nbsp;&nbsp;&nbsp;</span></li><li><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="tag">&lt;/</span><span class="tag-name">td</span><span class="tag">&gt;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;</span></span></li><li><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="tag">&lt;</span><span class="tag-name">td</span><span class="tag">&gt;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;</span></span></li><li><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1989-10-1&nbsp;&nbsp;&nbsp;&nbsp;</span></li><li><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="tag">&lt;/</span><span class="tag-name">td</span><span class="tag">&gt;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;</span></span></li><li><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="tag">&lt;/</span><span class="tag-name">tr</span><span class="tag">&gt;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;</span></span></li><li><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></li><li><span>&nbsp;&nbsp;&nbsp;&nbsp;<span class="tag">&lt;/</span><span class="tag-name">tbody</span><span class="tag">&gt;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;</span></span></li><li><span><span class="tag">&lt;/</span><span class="tag-name">table</span><span class="tag">&gt;</span><span>&nbsp;&nbsp;</span></span></li></ol></div><pre name="code" class="html" style="display: none; ">&lt;table&gt;  
    &lt;thead&gt;  
        &lt;tr&gt;  
            &lt;th&gt;  
                姓名  
            &lt;/th&gt;  
            &lt;th&gt;  
                性别  
            &lt;/th&gt;  
            &lt;th&gt;  
                生日  
            &lt;/th&gt;  
        &lt;/tr&gt;  
    &lt;/thead&gt;  
    &lt;tbody&gt;  
          
            &lt;tr&gt;  
                &lt;td&gt;  
                    小明  
                &lt;/td&gt;  
                &lt;td&gt;  
                    男  
                &lt;/td&gt;  
                &lt;td&gt;  
                    1989-10-29  
                &lt;/td&gt;  
            &lt;/tr&gt;  
          
            &lt;tr&gt;  
                &lt;td&gt;  
                    小红  
                &lt;/td&gt;  
                &lt;td&gt;  
                    女  
                &lt;/td&gt;  
                &lt;td&gt;  
                    1989-10-1  
                &lt;/td&gt;  
            &lt;/tr&gt;  
          
    &lt;/tbody&gt;  
&lt;/table&gt;</pre>
&nbsp;
<p><strong style="font-size: medium;"><strong style="font-size: medium;">简</strong>单的变量访问机制：</strong></p>
<p>&nbsp;</p>
<div class="dp-highlighter"><div class="bar"><div class="tools">Html代码 <embed wmode="transparent" src="/javascripts/syntaxhighlighter/clipboard_new.swf" width="14" height="15" flashvars="clipboard=%09%E8%AE%BF%E9%97%AE%E7%94%A8%E6%88%B7%E5%8F%98%E9%87%8F%EF%BC%9A%24%7B%23userList%7D%20%24%7B%23userList.length%7D%0A%09%E8%AE%BF%E9%97%AEJS%E5%85%A8%E5%B1%80%E5%8F%98%E9%87%8F%EF%BC%9A%24%7B%40location.href%7D%0A%09%E8%AE%BF%E9%97%AE%E7%B3%BB%E7%BB%9F%E7%94%9F%E6%88%90%E7%9A%84%E4%B8%B4%E6%97%B6%E5%8F%98%E9%87%8F%EF%BC%9A%20%24%7BcurUser%7D" quality="high" allowscriptaccess="always" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer"></div></div><ol start="1" class="dp-xml"><li><span><span>访问用户变量：${#userList}&nbsp;${#userList.length}&nbsp;&nbsp;</span></span></li><li><span>访问JS全局变量：${@location.href}&nbsp;&nbsp;</span></li><li><span>访问系统生成的临时变量：&nbsp;${curUser}&nbsp;&nbsp;</span></li></ol></div><pre name="code" class="html" style="display: none; ">	访问用户变量：${#userList} ${#userList.length}
	访问JS全局变量：${@location.href}
	访问系统生成的临时变量： ${curUser}</pre>
&nbsp;
<p>&nbsp;</p>
<p><span style="font-size: xx-small;"><span style="font-size: medium;"><strong>为常用需求优化的关键字：</strong></span></span></p>
<p>&nbsp;</p>
<p><span style="font-size: medium;">循环数组：</span></p>
<p>&nbsp;</p>
<div class="dp-highlighter"><div class="bar"><div class="tools">Html代码 <embed wmode="transparent" src="/javascripts/syntaxhighlighter/clipboard_new.swf" width="14" height="15" flashvars="clipboard=%09%09%09%09%09%24%7Bforarr%20%23userList%20as%20user%7D%0A%09%09%09%09%09%09%E5%88%97%E8%A1%A8%E9%95%BF%E5%BA%A6%E4%B8%BA%3A%24%7B%23userList.length%7D%2C%E7%8E%B0%E5%9C%A8%E5%BE%AA%E7%8E%AF%E5%88%B0%E4%BA%86%24%7Buser%23index%7D%2C%E5%80%BC%3A%24%7Buser%7D%0A%09%09%09%09%09%24%7B%2Fforarr%7D" quality="high" allowscriptaccess="always" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer"></div></div><ol start="1" class="dp-xml"><li><span><span>${forarr&nbsp;#userList&nbsp;as&nbsp;user}&nbsp;&nbsp;</span></span></li><li><span>&nbsp;&nbsp;&nbsp;&nbsp;列表长度为:${#userList.length},现在循环到了${user#index},值:${user}&nbsp;&nbsp;</span></li><li><span>${/forarr}&nbsp;&nbsp;</span></li></ol></div><pre name="code" class="html" style="display: none; ">					${forarr #userList as user}
						列表长度为:${#userList.length},现在循环到了${user#index},值:${user}
					${/forarr}</pre>
<p>&nbsp;&nbsp;<span style="white-space: pre;">	</span></p>
<p><span style="font-size: medium;">循环对象：</span></p>
<p>&nbsp;</p>
<div class="dp-highlighter"><div class="bar"><div class="tools">Html代码 <embed wmode="transparent" src="/javascripts/syntaxhighlighter/clipboard_new.swf" width="14" height="15" flashvars="clipboard=%09%09%09%09%09%24%7Bforeach%20%23colors%20as%20color%7D%0A%09%09%09%09%09%09%E9%A2%9C%E8%89%B2%24%7Bcolor%23key%7D%E7%9A%84%E5%8D%81%E5%85%AD%E8%BF%9B%E5%88%B6%E5%80%BC%E4%B8%BA%3A%24%7Bcolor%7D%0A%09%09%09%09%09%24%7B%2Fforeach%7D" quality="high" allowscriptaccess="always" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer"></div></div><ol start="1" class="dp-xml"><li><span><span>${foreach&nbsp;#colors&nbsp;as&nbsp;color}&nbsp;&nbsp;</span></span></li><li><span>&nbsp;&nbsp;&nbsp;&nbsp;颜色${color#key}的十六进制值为:${color}&nbsp;&nbsp;</span></li><li><span>${/foreach}&nbsp;&nbsp;</span></li></ol></div><pre name="code" class="html" style="display: none; ">					${foreach #colors as color}
						颜色${color#key}的十六进制值为:${color}
					${/foreach}</pre>
&nbsp;&nbsp;
<p><span style="font-size: medium;">单纯循环：</span></p>
<p>&nbsp;</p>
<div class="dp-highlighter"><div class="bar"><div class="tools">Html代码 <embed wmode="transparent" src="/javascripts/syntaxhighlighter/clipboard_new.swf" width="14" height="15" flashvars="clipboard=%09%09%09%09%09%E5%BE%AA%E7%8E%AF%E5%8D%81%E6%AC%A1%3A%0A%09%09%09%09%09%24%7Bloop%2010%20as%20ls%7D%0A%09%09%09%09%09%09%E5%BE%AA%E7%8E%AF%E6%AD%A5%E8%BF%9B%E4%B8%BA%24%7Bls%23step%7D%2C%E5%BE%AA%E7%8E%AF%E5%88%B0%E4%BA%86%24%7Bls%7D%2C%E5%BE%AA%E7%8E%AF%E5%88%B0%24%7Bls%23over%7D%E5%8D%B3%E7%BB%93%E6%9D%9F%E3%80%82%0A%09%09%09%09%09%24%7B%2Floop%7D%0A%09%09%09%09%09%0A%09%09%09%09%09%E5%BE%AA%E7%8E%AF%E5%8D%81%E6%AC%A1%EF%BC%8C%E6%AF%8F%E6%AC%A1%E9%80%92%E5%A2%9E2%3A%0A%09%09%09%09%09%24%7Bloop%2010%2C2%20as%20ls%7D%0A%09%09%09%09%09%09%E5%BE%AA%E7%8E%AF%E6%AD%A5%E8%BF%9B%E4%B8%BA%24%7Bls%23step%7D%2C%E5%BE%AA%E7%8E%AF%E5%88%B0%E4%BA%86%24%7Bls%7D%2C%E5%BE%AA%E7%8E%AF%E5%88%B0%24%7Bls%23over%7D%E5%8D%B3%E7%BB%93%E6%9D%9F%E3%80%82%0A%09%09%09%09%09%24%7B%2Floop%7D%0A%09%09%09%09%09%0A%09%09%09%09%09%E5%BE%AA%E7%8E%AF%E5%8D%81%E6%AC%A1%EF%BC%8C%E6%AF%8F%E6%AC%A1%E9%80%92%E5%A2%9E2%2C%E5%88%9D%E5%A7%8B%E5%80%BC%E4%B8%BA5%3A%0A%09%09%09%09%09%24%7Bloop%2010%2C2%2C5%20as%20ls%7D%0A%09%09%09%09%09%09%E5%BE%AA%E7%8E%AF%E6%AD%A5%E8%BF%9B%E4%B8%BA%24%7Bls%23step%7D%2C%E5%BE%AA%E7%8E%AF%E5%88%B0%E4%BA%86%24%7Bls%7D%2C%E5%BE%AA%E7%8E%AF%E5%88%B0%24%7Bls%23over%7D%E5%8D%B3%E7%BB%93%E6%9D%9F%E3%80%82%0A%09%09%09%09%09%24%7B%2Floop%7D" quality="high" allowscriptaccess="always" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer"></div></div><ol start="1" class="dp-xml"><li><span><span>循环十次:&nbsp;&nbsp;</span></span></li><li><span>${loop&nbsp;10&nbsp;as&nbsp;ls}&nbsp;&nbsp;</span></li><li><span>&nbsp;&nbsp;&nbsp;&nbsp;循环步进为${ls#step},循环到了${ls},循环到${ls#over}即结束。&nbsp;&nbsp;</span></li><li><span>${/loop}&nbsp;&nbsp;</span></li><li><span>&nbsp;&nbsp;</span></li><li><span>循环十次，每次递增2:&nbsp;&nbsp;</span></li><li><span>${loop&nbsp;10,2&nbsp;as&nbsp;ls}&nbsp;&nbsp;</span></li><li><span>&nbsp;&nbsp;&nbsp;&nbsp;循环步进为${ls#step},循环到了${ls},循环到${ls#over}即结束。&nbsp;&nbsp;</span></li><li><span>${/loop}&nbsp;&nbsp;</span></li><li><span>&nbsp;&nbsp;</span></li><li><span>循环十次，每次递增2,初始值为5:&nbsp;&nbsp;</span></li><li><span>${loop&nbsp;10,2,5&nbsp;as&nbsp;ls}&nbsp;&nbsp;</span></li><li><span>&nbsp;&nbsp;&nbsp;&nbsp;循环步进为${ls#step},循环到了${ls},循环到${ls#over}即结束。&nbsp;&nbsp;</span></li><li><span>${/loop}&nbsp;&nbsp;</span></li></ol></div><pre name="code" class="html" style="display: none; ">					循环十次:
					${loop 10 as ls}
						循环步进为${ls#step},循环到了${ls},循环到${ls#over}即结束。
					${/loop}
					
					循环十次，每次递增2:
					${loop 10,2 as ls}
						循环步进为${ls#step},循环到了${ls},循环到${ls#over}即结束。
					${/loop}
					
					循环十次，每次递增2,初始值为5:
					${loop 10,2,5 as ls}
						循环步进为${ls#step},循环到了${ls},循环到${ls#over}即结束。
					${/loop}</pre>
<p>&nbsp;<span style="white-space: pre;">	</span></p>
<p><span style="font-size: medium;">while循环：</span></p>
<p>&nbsp;</p>
<div class="dp-highlighter"><div class="bar"><div class="tools">Html代码 <embed wmode="transparent" src="/javascripts/syntaxhighlighter/clipboard_new.swf" width="14" height="15" flashvars="clipboard=%09%09%09%09%09%24%7Bwhile%20true%7D%0A%09%09%09%09%09%09%E4%B8%80%E6%AC%A1%E5%BE%AA%E7%8E%AF%E7%AB%8B%E9%A9%AC%E9%80%80%E5%87%BA%0A%09%09%09%09%09%09%24%7Bbreak%7D%0A%09%09%09%09%09%24%7B%2Fwhile%7D" quality="high" allowscriptaccess="always" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer"></div></div><ol start="1" class="dp-xml"><li><span><span>${while&nbsp;true}&nbsp;&nbsp;</span></span></li><li><span>&nbsp;&nbsp;&nbsp;&nbsp;一次循环立马退出&nbsp;&nbsp;</span></li><li><span>&nbsp;&nbsp;&nbsp;&nbsp;${break}&nbsp;&nbsp;</span></li><li><span>${/while}&nbsp;&nbsp;</span></li></ol></div><pre name="code" class="html" style="display: none; ">					${while true}
						一次循环立马退出
						${break}
					${/while}</pre>
<p><span style="white-space: pre;">	</span></p>
<p><span style="font-size: medium;">if语句：</span></p>
<p>&nbsp;</p>
<div class="dp-highlighter"><div class="bar"><div class="tools">Html代码 <embed wmode="transparent" src="/javascripts/syntaxhighlighter/clipboard_new.swf" width="14" height="15" flashvars="clipboard=%09%09%09%09%09%24%7Bif%20%23userList.length%20%3D%3D%203%7D%0A%09%09%09%09%09%09%E7%94%A8%E6%88%B7%E5%88%97%E8%A1%A8%E9%95%BF%E5%BA%A6%E4%B8%BA3%0A%09%09%09%09%09%24%7B%2Fif%7D" quality="high" allowscriptaccess="always" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer"></div></div><ol start="1" class="dp-xml"><li><span><span>${if&nbsp;#</span><span class="attribute">userList.length</span><span>&nbsp;==&nbsp;3}&nbsp;&nbsp;</span></span></li><li><span>&nbsp;&nbsp;&nbsp;&nbsp;用户列表长度为3&nbsp;&nbsp;</span></li><li><span>${/if}&nbsp;&nbsp;</span></li></ol></div><pre name="code" class="html" style="display: none; ">					${if #userList.length == 3}
						用户列表长度为3
					${/if}</pre>
<p>&nbsp;</p>
<p><span style="font-size: medium;">else语句：</span></p>
<p>&nbsp;</p>
<div class="dp-highlighter"><div class="bar"><div class="tools">Html代码 <embed wmode="transparent" src="/javascripts/syntaxhighlighter/clipboard_new.swf" width="14" height="15" flashvars="clipboard=%09%09%09%09%09%24%7Bif%20%23userList.length%20%3D%3D%203%7D%0A%09%09%09%09%09%09%E7%94%A8%E6%88%B7%E5%88%97%E8%A1%A8%E9%95%BF%E5%BA%A6%E4%B8%BA3%0A%09%09%09%09%09%24%7Belse%7D%0A%09%09%09%09%09%09%E7%94%A8%E6%88%B7%E5%88%97%E8%A1%A8%E9%95%BF%E5%BA%A6%E4%B8%8D%E4%B8%BA3%0A%09%09%09%09%09%24%7B%2Fif%7D%09%09" quality="high" allowscriptaccess="always" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer"></div></div><ol start="1" class="dp-xml"><li><span><span>${if&nbsp;#</span><span class="attribute">userList.length</span><span>&nbsp;==&nbsp;3}&nbsp;&nbsp;</span></span></li><li><span>&nbsp;&nbsp;&nbsp;&nbsp;用户列表长度为3&nbsp;&nbsp;</span></li><li><span>${else}&nbsp;&nbsp;</span></li><li><span>&nbsp;&nbsp;&nbsp;&nbsp;用户列表长度不为3&nbsp;&nbsp;</span></li><li><span>${/if}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></li></ol></div><pre name="code" class="html" style="display: none; ">					${if #userList.length == 3}
						用户列表长度为3
					${else}
						用户列表长度不为3
					${/if}		</pre>
&nbsp;&nbsp;
<p><span style="font-size: medium;">elseif语句：</span></p>
<p>&nbsp;</p>
<div class="dp-highlighter"><div class="bar"><div class="tools">Html代码 <embed wmode="transparent" src="/javascripts/syntaxhighlighter/clipboard_new.swf" width="14" height="15" flashvars="clipboard=%09%09%09%09%09%24%7Bif%20%23userList.length%20%3D%3D%203%7D%0A%09%09%09%09%09%09%E7%94%A8%E6%88%B7%E5%88%97%E8%A1%A8%E9%95%BF%E5%BA%A6%E4%B8%BA3%0A%09%09%09%09%09%24%7Belseif%20%23userList.length%20%3D%3D%200%7D%0A%09%09%09%09%09%09%E7%94%A8%E6%88%B7%E5%88%97%E8%A1%A8%E9%95%BF%E5%BA%A6%E4%B8%BA0%0A%09%09%09%09%09%24%7Belse%7D%0A%09%09%09%09%09%09%E7%94%A8%E6%88%B7%E5%88%97%E8%A1%A8%E9%95%BF%E5%BA%A6%E4%B8%8D%E4%B8%BA3%0A%09%09%09%09%09%24%7B%2Fif%7D" quality="high" allowscriptaccess="always" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer"></div></div><ol start="1" class="dp-xml"><li><span><span>${if&nbsp;#</span><span class="attribute">userList.length</span><span>&nbsp;==&nbsp;3}&nbsp;&nbsp;</span></span></li><li><span>&nbsp;&nbsp;&nbsp;&nbsp;用户列表长度为3&nbsp;&nbsp;</span></li><li><span>${elseif&nbsp;#<span class="attribute">userList.length</span><span>&nbsp;==&nbsp;0}&nbsp;&nbsp;</span></span></li><li><span>&nbsp;&nbsp;&nbsp;&nbsp;用户列表长度为0&nbsp;&nbsp;</span></li><li><span>${else}&nbsp;&nbsp;</span></li><li><span>&nbsp;&nbsp;&nbsp;&nbsp;用户列表长度不为3&nbsp;&nbsp;</span></li><li><span>${/if}&nbsp;&nbsp;</span></li></ol></div><pre name="code" class="html" style="display: none; ">					${if #userList.length == 3}
						用户列表长度为3
					${elseif #userList.length == 0}
						用户列表长度为0
					${else}
						用户列表长度不为3
					${/if}</pre>
<p>&nbsp;</p>
<p><span style="font-size: medium;">switch语句：</span></p>
<p>&nbsp;</p>
<div class="dp-highlighter"><div class="bar"><div class="tools">Html代码 <embed wmode="transparent" src="/javascripts/syntaxhighlighter/clipboard_new.swf" width="14" height="15" flashvars="clipboard=%09%09%09%09%09%24%7Bswitch%20%23userList.length%7D%0A%09%09%09%09%09%09%24%7Bcase%200%7D%0A%09%09%09%09%09%09%09%E7%94%A8%E6%88%B7%E5%88%97%E8%A1%A8%E9%95%BF%E5%BA%A6%E4%B8%BA%E7%A9%BA%E3%80%82%0A%09%09%09%09%09%09%09%24%7Bbreak%7D%0A%09%09%09%09%09%09%24%7Bcase%201%7D%0A%09%09%09%09%09%09%09%E7%94%A8%E6%88%B7%E5%88%97%E8%A1%A8%E9%95%BF%E5%BA%A6%E4%B8%BA1%E3%80%82%0A%09%09%09%09%09%09%09%24%7Bbreak%7D%0A%09%09%09%09%09%09%24%7Bcase%202%7D%0A%09%09%09%09%09%09%09%E7%94%A8%E6%88%B7%E5%88%97%E8%A1%A8%E9%95%BF%E5%BA%A6%E4%B8%BA2%E3%80%82%0A%09%09%09%09%09%09%09%24%7Bbreak%7D%0A%09%09%09%09%09%09%24%7Bcase%203%7D%0A%09%09%09%09%09%09%09%E7%94%A8%E6%88%B7%E5%88%97%E8%A1%A8%E9%95%BF%E5%BA%A6%E4%B8%BA3%E3%80%82%0A%09%09%09%09%09%09%09%24%7Bbreak%7D%0A%09%09%09%09%09%09%24%7Bdefault%7D%0A%09%09%09%09%09%09%09%E7%A5%9E%E9%A9%AC%E5%95%8A%E3%80%82%E3%80%82%E3%80%82%0A%09%09%09%09%09%24%7B%2Fswitch%7D" quality="high" allowscriptaccess="always" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer"></div></div><ol start="1" class="dp-xml"><li><span><span>${switch&nbsp;#userList.length}&nbsp;&nbsp;</span></span></li><li><span>&nbsp;&nbsp;&nbsp;&nbsp;${case&nbsp;0}&nbsp;&nbsp;</span></li><li><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;用户列表长度为空。&nbsp;&nbsp;</span></li><li><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${break}&nbsp;&nbsp;</span></li><li><span>&nbsp;&nbsp;&nbsp;&nbsp;${case&nbsp;1}&nbsp;&nbsp;</span></li><li><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;用户列表长度为1。&nbsp;&nbsp;</span></li><li><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${break}&nbsp;&nbsp;</span></li><li><span>&nbsp;&nbsp;&nbsp;&nbsp;${case&nbsp;2}&nbsp;&nbsp;</span></li><li><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;用户列表长度为2。&nbsp;&nbsp;</span></li><li><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${break}&nbsp;&nbsp;</span></li><li><span>&nbsp;&nbsp;&nbsp;&nbsp;${case&nbsp;3}&nbsp;&nbsp;</span></li><li><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;用户列表长度为3。&nbsp;&nbsp;</span></li><li><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${break}&nbsp;&nbsp;</span></li><li><span>&nbsp;&nbsp;&nbsp;&nbsp;${default}&nbsp;&nbsp;</span></li><li><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;神马啊。。。&nbsp;&nbsp;</span></li><li><span>${/switch}&nbsp;&nbsp;</span></li></ol></div><pre name="code" class="html" style="display: none; ">					${switch #userList.length}
						${case 0}
							用户列表长度为空。
							${break}
						${case 1}
							用户列表长度为1。
							${break}
						${case 2}
							用户列表长度为2。
							${break}
						${case 3}
							用户列表长度为3。
							${break}
						${default}
							神马啊。。。
					${/switch}</pre>
&nbsp;
<p><span style="font-size: medium;">定义变量：</span></p>
<p>&nbsp;</p>
<div class="dp-highlighter"><div class="bar"><div class="tools">Html代码 <embed wmode="transparent" src="/javascripts/syntaxhighlighter/clipboard_new.swf" width="14" height="15" flashvars="clipboard=%09%09%09%09%09%E5%B0%86%E4%B8%80%E4%B8%AA%E5%8F%98%E9%87%8F%E8%B5%8Bnull%3A%0A%09%09%09%09%09%24%7Beval%20%23userList%5B0%5D%20%3D%20null%7D%0A%09%09%09%09%09%0A%09%09%09%09%09%E5%AE%9A%E4%B9%89%E4%B8%80%E4%B8%AA%E5%8F%98%E9%87%8F%2C%E5%BF%85%E9%A1%BB%E5%AE%9A%E4%B9%89%E5%9C%A8%23%E4%B8%8B%3A%0A%09%09%09%09%09%24%7Beval%20%23myvar%20%3D%20%22hello%20world!%22%7D" quality="high" allowscriptaccess="always" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer"></div></div><ol start="1" class="dp-xml"><li><span><span>将一个变量赋null:&nbsp;&nbsp;</span></span></li><li><span>${eval&nbsp;#userList[0]&nbsp;=&nbsp;null}&nbsp;&nbsp;</span></li><li><span>&nbsp;&nbsp;</span></li><li><span>定义一个变量,必须定义在#下:&nbsp;&nbsp;</span></li><li><span>${eval&nbsp;#<span class="attribute">myvar</span><span>&nbsp;=&nbsp;</span><span class="attribute-value">"hello&nbsp;world!"</span><span>}&nbsp;&nbsp;</span></span></li></ol></div><pre name="code" class="html" style="display: none; ">					将一个变量赋null:
					${eval #userList[0] = null}
					
					定义一个变量,必须定义在#下:
					${eval #myvar = "hello world!"}</pre>
<p>&nbsp;</p>
<p><span style="font-size: medium;">给模板命名（注册模板）：</span></p>
<p>&nbsp;</p>
<div class="dp-highlighter"><div class="bar"><div class="tools">Html代码 <embed wmode="transparent" src="/javascripts/syntaxhighlighter/clipboard_new.swf" width="14" height="15" flashvars="clipboard=%09%09%09%09%09%E8%AE%BE%E7%BD%AE%E6%A8%A1%E6%9D%BF%E7%9A%84name%E4%B8%BA%E2%80%9Cuserlist%E2%80%9D%0A%09%09%09%09%09%24%7Bname%20userlist%7D" quality="high" allowscriptaccess="always" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer"></div></div><ol start="1" class="dp-xml"><li><span><span>设置模板的name为“userlist”&nbsp;&nbsp;</span></span></li><li><span>${name&nbsp;userlist}&nbsp;&nbsp;</span></li></ol></div><pre name="code" class="html" style="display: none; ">					设置模板的name为“userlist”
					${name userlist}</pre>
&nbsp;
<p><span style="font-size: medium;">简单的模板包含：</span></p>
<p>&nbsp;</p>
<div class="dp-highlighter"><div class="bar"><div class="tools">Html代码 <embed wmode="transparent" src="/javascripts/syntaxhighlighter/clipboard_new.swf" width="14" height="15" flashvars="clipboard=%09%09%09%09%09%E5%8C%85%E5%90%AB%E5%90%8D%E7%A7%B0%E4%B8%BA%E2%80%9Cuserlist%E2%80%9D%E7%9A%84%E6%A8%A1%E6%9D%BF%EF%BC%9A%0A%09%09%09%09%09%24%7Binclude%20userlist%7D%0A%09%09%09%09%09%0A%09%09%09%09%09%E5%8C%85%E5%90%AB%E5%90%8D%E7%A7%B0%E4%B8%BA%E2%80%9Cuserlist%E2%80%9D%E7%9A%84%E6%A8%A1%E6%9D%BF%2C%E5%B9%B6%E4%B8%94%E5%90%91%E5%85%B6%E6%B3%A8%E5%85%A5%E4%B8%80%E4%BA%9B%E6%95%B0%E6%8D%AE%EF%BC%9A%0A%09%09%09%09%09%24%7Binclude%20userlist%3A%23userList%7D" quality="high" allowscriptaccess="always" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer"></div></div><ol start="1" class="dp-xml"><li><span><span>包含名称为“userlist”的模板：&nbsp;&nbsp;</span></span></li><li><span>${include&nbsp;userlist}&nbsp;&nbsp;</span></li><li><span>&nbsp;&nbsp;</span></li><li><span>包含名称为“userlist”的模板,并且向其注入一些数据：&nbsp;&nbsp;</span></li><li><span>${include&nbsp;userlist:#userList}&nbsp;&nbsp;</span></li></ol></div><pre name="code" class="html" style="display: none; ">					包含名称为“userlist”的模板：
					${include userlist}
					
					包含名称为“userlist”的模板,并且向其注入一些数据：
					${include userlist:#userList}</pre>
<p>&nbsp;<span style="white-space: pre;">	</span></p>
<p><span style="font-size: medium;">系统如何找到包含的模板：</span></p>
<p>&nbsp;</p>
<div class="dp-highlighter"><div class="bar"><div class="tools">Js代码 <embed wmode="transparent" src="/javascripts/syntaxhighlighter/clipboard_new.swf" width="14" height="15" flashvars="clipboard=%09%09%09%09%09Elapse.setLoader(%7B%0A%09%09%09%09%09%09loader%3A%20function%20(name%2C%20setter)%20%7B%09%0A%09%09%09%09%09%09%09%2F%2F%E8%AE%BE%E7%BD%AEloader%E5%87%BD%E6%95%B0%EF%BC%8C%E5%BD%93%E7%B3%BB%E7%BB%9F%E9%9C%80%E8%A6%81%E7%9A%84%E6%A8%A1%E6%9D%BF%E6%9C%AA%E6%B3%A8%E5%86%8C%E7%9A%84%E8%AF%9D%EF%BC%8C%E4%BC%9A%E8%B0%83%E7%94%A8%E6%AD%A4%E6%96%B9%E6%B3%95%E3%80%82%0A%09%09%09%09%09%09%09%2F%2Fname%3A%20%E9%9C%80%E8%A6%81%E7%9A%84%E6%A8%A1%E6%9D%BF%E7%9A%84%E5%90%8D%E7%A7%B0%0A%09%09%09%09%09%09%09%2F%2Fsetter%3A%20%E6%8E%A5%E6%94%B6%E6%A8%A1%E6%9D%BF%E6%96%B9%E6%B3%95%E3%80%82%0A%09%09%09%09%09%09%09%2F%2F%E5%AE%9A%E4%B9%89%E4%BD%A0%E7%9A%84%E8%8E%B7%E5%8F%96%E6%96%B9%E5%BC%8F%EF%BC%9A%E6%9D%A5%E8%87%AAdom%E3%80%81%E6%9D%A5%E8%87%AA%E8%BF%9C%E7%A8%8B%E3%80%82%E3%80%82%E3%80%82%E6%88%91%E8%BF%99%E9%87%8C%E6%98%AF%E6%9D%A5%E8%87%AA%E8%BF%9C%E7%A8%8B%E3%80%82%20%20%0A%09%09%09%09%09%09%09%24.ajax(%7B%0A%09%09%09%09%09%09%09%09url%3A%20%22%2FgetTemplate%22%2C%0A%09%09%09%09%09%09%09%09data%3A%20%22name%3D%22%20%2B%20name%2C%0A%09%09%09%09%09%09%09%09type%3A%20%22get%22%2C%0A%09%09%09%09%09%09%09%09dataType%3A%20%22text%22%2C%0A%09%09%09%09%09%09%09%09success%3A%20function%20(source)%20%7B%0A%09%09%09%09%09%09%09%09%09setter(source)%3B%0A%09%09%09%09%09%09%09%09%7D%0A%09%09%09%09%09%09%09%7D)%3B%0A%09%09%09%09%09%09%7D%0A%09%09%09%09%09%7D)%3B%0A%09%09%09%09%09%0A%09%09%09%09%09%2F%2F%E4%BD%A0%E5%8F%AA%E9%9C%80%E8%A6%81%E6%BB%A1%E8%B6%B3loader%E7%9A%84%E8%B0%83%E7%94%A8%E5%8D%B3%E5%8F%AF%EF%BC%8C%E5%8F%AA%E6%9C%89%E5%BD%93%E4%BB%A5%E4%B8%8A%E4%BB%A3%E7%A0%81%E7%9A%84%E2%80%9Csetter%E2%80%9D%E5%8F%82%E6%95%B0%E6%8E%A5%E6%94%B6%E4%BA%86%E6%A8%A1%E6%9D%BF%E6%BA%90%E6%96%87%E4%BB%B6%EF%BC%8C%E7%B3%BB%E7%BB%9F%E6%89%8D%E8%AE%A4%E4%B8%BA%E5%BE%97%E5%88%B0%E4%BA%86%E6%AD%A4%E6%A8%A1%E6%9D%BF%E3%80%82%E4%BD%A0%E5%AF%B9%E6%A8%A1%E6%9D%BF%E5%8A%A0%E8%BD%BD%E5%A4%A7%E5%8F%AF%E6%94%BE%E5%BF%83%EF%BC%8C%E4%B8%80%E5%88%87%E9%83%BD%E7%94%B1%E5%BC%95%E6%93%8E%E8%B0%83%E5%BA%A6%E5%A5%BD%E4%BA%86%E3%80%82" quality="high" allowscriptaccess="always" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer"></div></div><ol start="1" class="dp-c"><li><span><span>Elapse.setLoader({&nbsp;&nbsp;</span></span></li><li><span>&nbsp;&nbsp;&nbsp;&nbsp;loader:&nbsp;<span class="keyword">function</span><span>&nbsp;(name,&nbsp;setter)&nbsp;{&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span></li><li><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="comment">//设置loader函数，当系统需要的模板未注册的话，会调用此方法。</span><span>&nbsp;&nbsp;</span></span></li><li><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="comment">//name:&nbsp;需要的模板的名称</span><span>&nbsp;&nbsp;</span></span></li><li><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="comment">//setter:&nbsp;接收模板方法。</span><span>&nbsp;&nbsp;</span></span></li><li><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="comment">//定义你的获取方式：来自dom、来自远程。。。我这里是来自远程。&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span></span></li><li><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$.ajax({&nbsp;&nbsp;</span></li><li><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;url:&nbsp;<span class="string">"/getTemplate"</span><span>,&nbsp;&nbsp;</span></span></li><li><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;data:&nbsp;<span class="string">"name="</span><span>&nbsp;+&nbsp;name,&nbsp;&nbsp;</span></span></li><li><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;type:&nbsp;<span class="string">"get"</span><span>,&nbsp;&nbsp;</span></span></li><li><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;dataType:&nbsp;<span class="string">"text"</span><span>,&nbsp;&nbsp;</span></span></li><li><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;success:&nbsp;<span class="keyword">function</span><span>&nbsp;(source)&nbsp;{&nbsp;&nbsp;</span></span></li><li><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;setter(source);&nbsp;&nbsp;</span></li><li><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}&nbsp;&nbsp;</span></li><li><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;});&nbsp;&nbsp;</span></li><li><span>&nbsp;&nbsp;&nbsp;&nbsp;}&nbsp;&nbsp;</span></li><li><span>});&nbsp;&nbsp;</span></li><li><span>&nbsp;&nbsp;</span></li><li><span><span class="comment">//你只需要满足loader的调用即可，只有当以上代码的“setter”参数接收了模板源文件，系统才认为得到了此模板。你对模板加载大可放心，一切都由引擎调度好了。</span><span>&nbsp;&nbsp;</span></span></li></ol></div><pre name="code" class="js" style="display: none; ">					Elapse.setLoader({
						loader: function (name, setter) {	
							//设置loader函数，当系统需要的模板未注册的话，会调用此方法。
							//name: 需要的模板的名称
							//setter: 接收模板方法。
							//定义你的获取方式：来自dom、来自远程。。。我这里是来自远程。  
							$.ajax({
								url: "/getTemplate",
								data: "name=" + name,
								type: "get",
								dataType: "text",
								success: function (source) {
									setter(source);
								}
							});
						}
					});
					
					//你只需要满足loader的调用即可，只有当以上代码的“setter”参数接收了模板源文件，系统才认为得到了此模板。你对模板加载大可放心，一切都由引擎调度好了。</pre>
<p>&nbsp;</p>
<p><strong>详细文档</strong>：见附件中的guide.html（勿用ie查看，文档样式不兼容）</p>
<p>&nbsp;</p>
<p><strong>项目地址</strong>：<a target="_blank" href="https://github.com/yinhang/Elapse">https://github.com/yinhang/Elapse</a></p>
<p>&nbsp;</p>
<p><span style="color: #ff0000;"><strong>欢迎你的使用，并期待你加入此项目一同开发。</strong><strong style="font-size: medium;"><span style="white-space: pre;">	</span></strong></span></p>
<p>&nbsp;</p>
<p>&nbsp;</p>
    </div>