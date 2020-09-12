<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Prueba.aspx.cs" Inherits="Proyecto1.Prueba" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>Página Principal</title>
</head>
<body>
    <header>
        <div id="Titulo">Othello</div>
    </header>
    <form id="form1" runat="server">
        <div>

            <asp:Label ID="Label1" runat="server" Text="Nombre: "></asp:Label>
            <br />
            <asp:TextBox ID="TextBox1" runat="server"></asp:TextBox>
            <br />
            <br />
            <asp:Label ID="Label2" runat="server" Text="Apellido: "></asp:Label>
            <br />
            <asp:TextBox ID="TextBox2" runat="server"></asp:TextBox>
            <br />
            <br />
            <asp:Label ID="Label3" runat="server" Text="Nombre de Usuario: "></asp:Label>
            <br />
            <asp:TextBox ID="TextBox3" runat="server"></asp:TextBox>
            <br />
            <br />
            <asp:Label ID="Label4" runat="server" Text="Contraseña: "></asp:Label>
            <br />
            <asp:TextBox ID="TextBox8" runat="server" TextMode ="Password"  ></asp:TextBox>
            <br />
            <br />
            <asp:Label ID="Label5" runat="server" Text="Fecha de Nacimiento: "></asp:Label>
            <br />
            <asp:TextBox ID="TextBox5" runat="server"></asp:TextBox>
            <br />
            <br />
            <asp:Label ID="Label6" runat="server" Text="Pais: "></asp:Label>
            <br />
            <asp:TextBox ID="TextBox6" runat="server"></asp:TextBox>
            <br />
            <br />
            <asp:Label ID="Label7" runat="server" Text="Correo: "></asp:Label>
            <br />
            <asp:TextBox ID="TextBox7" runat="server"></asp:TextBox>
            <br />
            <br />
            <asp:Button ID="Button1" runat="server" Text="Enviar" OnClick="Button1_Click" />

            <br />
            <br />
            <asp:Button ID="Button3" runat="server" Text="Mostrar Datos" />

            <br />
            <br />
            <asp:Button ID="Button2" runat="server" Text="Cambiar de Pagina" OnClick="Button2_Click" />

        </div>
    </form>
</body>
</html>
