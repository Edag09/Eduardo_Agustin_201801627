<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Registro.aspx.cs" Inherits="Proyecto1.Reg" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>Registro de Jugador</title>
    <link rel="stylesheet" href="StyleForm.css" />
    <style type="text/css">
        .auto-style1 {
            height: 31px;
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
    <nav>
        <div id="Barra"></div>
    </nav>
    <br />

    <form id="form1" runat="server">
        <div>
            <table id="titulo">
                <tr>
                    <td>
                        <h1>Registro de Jugadores</h1>
                    </td>
                </tr>
            </table>

            <table>
                <tr>
                    <td>
                        <strong><label for="">Nombre: </label></strong>&nbsp&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp
                        <asp:TextBox ID="nombre" runat="server"></asp:TextBox>
                        <br/><br/>
                    </td>
                </tr>

                <tr>
                    <td>
                        <strong><label for="">Apellido: </label></strong>&nbsp&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp&nbsp;
                        <asp:TextBox ID="apellido" runat="server"></asp:TextBox>
                        <br/><br/>
                    </td>
                </tr>

                <tr>
                    <td>
                        <strong><label for="">Nombre de Usuario: </label></strong>&nbsp&nbsp&nbsp;&nbsp;&nbsp;
                        <asp:TextBox ID="Usuario" runat="server"></asp:TextBox>&nbsp&nbsp&nbsp&nbsp <asp:Label ID="userExistente" runat="server" Text="Usuario ya Existente" ForeColor ="Red"></asp:Label>
                        <br/><br/>
                    </td>
                </tr>

                <tr>
                    <td>
                        <strong><label for="">Contraseña: </label></strong>&nbsp&nbsp&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <asp:TextBox ID="contasenia" runat="server" TextMode ="Password"></asp:TextBox>
                        <br/><br/>
                    </td>
                </tr>

                <tr>
                    <td>
                        <strong><label for="">Fecha de Nacimiento: </label></strong>&nbsp&nbsp
                        <asp:TextBox ID="Fnacimiento" runat="server" placeholder="AAAA/MM/DD"></asp:TextBox>
                        <br/><br/>
                    </td>
                </tr>

                <tr>
                    <td>
                        <strong><label for="">Pais: </label></strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <asp:TextBox ID="Pais" runat="server"></asp:TextBox>
                        <br/><br/>
                    </td>
                </tr>

                <tr>
                    <td>
                        <strong><label for="">Correo Electrónico: </label></strong>&nbsp&nbsp&nbsp;&nbsp;
                        <asp:TextBox ID="Correo" runat="server" placeholder="Correo@dominio.com"></asp:TextBox>
                        <br/><br/>
                    </td>
                </tr>

                <tr>
                    <td class="auto-style1">
                        <asp:Button ID="btnRegistro" runat="server" Text="Registrarse" OnClick="btnRegistro_Click" />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <asp:Button ID="Regreso" runat="server" Text="Regresar" OnClick="Regreso_Click" />
                        <br />
                    </td>
                </tr>

                <tr>
                    <td>
                        <asp:Label ID="LlenarCampos" runat="server" Text="Por favor llenar todos los campos requeridos" ForeColor="Red"></asp:Label>
                    </td>
                </tr>

            </table>
        </div>
    </form>
</body>
</html>
