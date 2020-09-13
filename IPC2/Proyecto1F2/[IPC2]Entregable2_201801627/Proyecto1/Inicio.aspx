<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Inicio.aspx.cs" Inherits="Proyecto1.Inicio" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>Página Principal</title>
    <link rel="stylesheet" href="StyleInicial.css"/>
    <link href="https://fonts.googleapis.com/css2?family=Sriracha&display=swap" rel="stylesheet" />
</head>
<body>
    <form id="form1" runat="server">
        <div>
           <table>
                <tr>
                    <td> 
                        <asp:Image id="Image1" runat="server" Height="250px" BorderWidth="10px" ImageUrl="~/Principal.png" Width="600px" AlternateText="Imagen no disponible" ImageAlign="Top" />
                    </td>
                </tr>
               <tr id="P">
                   <td>
                        <br />
                        <asp:Label ID="Label1" runat="server" Text="Usuario"></asp:Label>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;<asp:TextBox ID="User" runat="server"></asp:TextBox>
                   &nbsp;
                        <asp:Label ID="RequeridoUser" runat="server" Text="Llenar Campos Requeridos" ForeColor ="black"></asp:Label>
                   </td>
               </tr>
               <tr id="P1">
                   <td>
                       <br />
                        <asp:Label ID="Label2" runat="server" Text="Contraseña"></asp:Label> &nbsp; <asp:TextBox ID="Password" runat="server" TextMode="Password"></asp:TextBox>
                   &nbsp;<asp:Label ID="RequeridoPass" runat="server" Text="Llenar Campos Requeridos" ForeColor ="Black"></asp:Label>
                   </td>
               </tr>
               <tr>
                   <td>
                       <br />
                       <asp:Button ID="Iniciar" runat="server" Text="Iniciar Sesion" OnClick="Iniciar_Click" />
                   &nbsp;</td>
               </tr>
               <tr id="Secundario" >
                   <td>
                        <asp:Label ID="error" runat="server" Text="Usuario o Contraseña incorrecta" ForeColor="Black" ></asp:Label>
                        <br />
                       <br />
                        <asp:Label ID="Label3" runat="server" Text="¿Aún no tienes una cuenta? Crea una, Es Gratis!"></asp:Label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <asp:Button ID="Registro" runat="server" Text="Registrarse" OnClick="Registro_Click" />
                   </td>
               </tr>
            </table>
        </div>
    </form>
</body>
</html>
