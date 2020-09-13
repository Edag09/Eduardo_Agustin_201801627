using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Proyecto1
{
    public partial class Reg : System.Web.UI.Page
    {
        ConexionSQL conexion = new ConexionSQL();
        protected void Page_Load(object sender, EventArgs e)
        {
            userExistente.Visible = false;
            LlenarCampos.Visible = false;
        }

        protected void btnRegistro_Click(object sender, EventArgs e)
        {
            if (nombre.Text == "" || apellido.Text == "" || Usuario.Text == "" || contasenia.Text == "" || Fnacimiento.Text == "" || Pais.Text == "" || Correo.Text == "")
            {
                LlenarCampos.Visible = true;
            }
            else if (conexion.Loger(Usuario.Text))
            {
                userExistente.Visible = true;
                Usuario.Text = "";

            }
            else
            {
                conexion.Insertar(nombre.Text, apellido.Text, Usuario.Text, contasenia.Text, Fnacimiento.Text, Pais.Text, Correo.Text);
                Response.Redirect("Inicio.aspx");
            }
        }

        protected void Regreso_Click(object sender, EventArgs e)
        {
            Response.Redirect("Inicio.aspx");
        }
    }
}