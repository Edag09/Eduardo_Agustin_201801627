using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Proyecto1
{
    public partial class Inicio : System.Web.UI.Page
    {
        ConexionSQL conexion = new ConexionSQL();
        protected void Page_Load(object sender, EventArgs e)
        {
            error.Visible = false;
            RequeridoUser.Visible = false;
            RequeridoPass.Visible = false;
        }

        protected void Registro_Click(object sender, EventArgs e)
        {
            Response.Redirect("Registro.aspx");
        }

        protected void Iniciar_Click(object sender, EventArgs e)
        {
            if (User.Text == "" || Password.Text == "")
            {
                RequeridoUser.Visible = true;
                RequeridoPass.Visible = true;
            }
            else if (!conexion.Ingreso(User.Text, Password.Text))
            {
                error.Visible = true;
            }
            else {
                conexion.Ingreso(User.Text, Password.Text);
                Response.Redirect("Principal.aspx");


            }
        }
    }
}