<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Principal.aspx.cs" Inherits="Proyecto1.Principal" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>Menú Principal</title>
    <link rel="stylesheet" href="PrincipalStyle.css"/>
    <style type="text/css">
        .auto-style1 {
            width: 215px;
        }
    </style>
</head>
<body>
    <header>
        <table id="Imagen">
            <tr>
                <td>
                   <asp:Image id="Image1" runat="server" Height="250px" BorderWidth="10px" ImageUrl="~/Principal.png" Width="600px" AlternateText="Imagen no disponible" ImageAlign="Top" />              
                </td>
            </tr>
        </table>


    </header>
    <br />
    <form id="form1" runat="server">
        <div>
            <table id="botones">
                <tr>
                    <td class="auto-style1">
                        <asp:Button ID="Button1" runat="server" Text="Nueva Partida" />
                        <br />
                        <br />
                    </td>
                </tr>
                
                <tr>
                    <td class="auto-style1">
                        <asp:Button ID="Button2" runat="server" Text="Partida con Amigos" />
                        <br />
                        <br />
                    </td>
                </tr>

                <tr>
                    <td class="auto-style1">
                        <asp:Button ID="Button3" runat="server" Text="Torneos" />
                        <br />
                        <br />
                    </td>
                </tr>

                <tr>
                    <td class="auto-style1">
                        <asp:Button ID="Button4" runat="server" Text="Reportes" />
                        <br />
                        <br />
                    </td>
                </tr>

                <tr>
                    <td class="auto-style1">
                        <asp:Button ID="Button5" runat="server" Text="Cerrar Sesion" OnClick="Button5_Click" />
                        <br />
                        <br />
                    </td>
                </tr>

            </table>
        </div>
    </form>
</body>
</html>
