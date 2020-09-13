using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Windows;

namespace Proyecto1
{
    public partial class Prueba : System.Web.UI.Page
    {
        ConexionSQL conexion = new ConexionSQL();
        protected void Page_Load(object sender, EventArgs e)
        {
            Label8.Visible = false;
            Label10.Visible = false;
        }

        protected void Button1_Click(object sender, EventArgs e)
        {
            if (TextBox1.Text == "" || TextBox2.Text == "" || TextBox3.Text == "" || TextBox8.Text == "" || TextBox5.Text == "" || TextBox6.Text == "" || TextBox7.Text == "")
            {
                Label8.Visible = true;
            }
            else if (conexion.Loger(TextBox3.Text))
            {
                Label10.Visible = true;
            }
            else {
                conexion.Insertar(TextBox1.Text, TextBox2.Text, TextBox3.Text, TextBox8.Text, TextBox5.Text, TextBox6.Text, TextBox7.Text);
                Response.Redirect("Inicio.aspx");
            }
        }

        protected void Button2_Click(object sender, EventArgs e)
        {
            Response.Redirect("Juego.aspx");
        }

        protected void Button3_Click(object sender, EventArgs e)
        {

        }

        //public void VerificacionUsuario(string usuario)
        //{
        //    try
        //    {
        //        cmd = new SqlCommand("Select count(1) from Usuario where Nom_Usuario = @usuario");
        //        cmd.Parameters.AddWithValue("@usuario", TextBox3.Text.Trim());
        //        int cont = Convert.ToInt32(cmd.ExecuteScalar());
                
        //        if (cont == 1)
        //        {
        //            Lbl10.Visible = true;
        //        }
        //        else {
        //            Insertar(TextBox1.Text, TextBox2.Text, TextBox3.Text, TextBox8.Text, TextBox5.Text, TextBox6.Text, TextBox7.Text);
        //            TextBox1.Text = "";
        //            TextBox2.Text = "";
        //            TextBox3.Text = "";
        //            TextBox8.Text = "";
        //            TextBox5.Text = "";
        //            TextBox6.Text = "";
        //            TextBox7.Text = "";
        //        }
        //    }
        //    catch (Exception ex)
        //    {
        //        Console.WriteLine("Error");
        //    }
        //}
    }
}