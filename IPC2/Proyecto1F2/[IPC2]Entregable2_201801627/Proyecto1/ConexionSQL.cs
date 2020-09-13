using System;
using System.Data.SqlClient;

namespace Proyecto1
{
    class ConexionSQL
    {
        SqlConnection cn;
        SqlCommand cmd;
        SqlDataReader dr;

        public ConexionSQL() {
            try {
                cn = new SqlConnection("Data Source=.;Initial Catalog=P1F2;Integrated Security=True");
                cn.Open();
                Console.WriteLine("Conectado");
                    
            }
            catch (Exception ex) {
                Console.WriteLine("No se pudo conectar con la base de datos: " + ex.ToString());
            }
        }

        public string Insertar(string nombre, string apellido, string nombre_usuario, string contrasenia, string Fnacimineto, string pais, string correo) {
            string salida = "Insertado";
            try {
                cmd = new SqlCommand( "Insert into Usuario(Nombre, Apellido, Nom_Usuario, Contrasena, Fecha_Nacimiento, Pais, Correo) values ('"+nombre+"', '"+apellido+"', '"+nombre_usuario+ "', '"+contrasenia+ "', '"+Fnacimineto+ "', '"+pais+ "', '"+correo+"')",cn);
                cmd.ExecuteNonQuery();
            }
            catch (Exception ex) {
                salida = "no se pudo conectar" + ex.ToString();
            }
            return salida;
        }

        public Boolean Loger(string user) 
        {
            
                cmd = new SqlCommand("Select count(1) from Usuario where Nom_Usuario = @usuario",cn);
                SqlDataAdapter adap = new SqlDataAdapter();
                cmd.Parameters.AddWithValue("@usuario", user);
                int cont = Convert.ToInt32(cmd.ExecuteScalar());
            if (cont == 1)
            {
                return true;
            }
            else {
                return false;
            }
        }

        public Boolean Ingreso(string user, string contra) {
            cmd = new SqlCommand("Select count(1) from Usuario where Nom_Usuario = @user and Contrasena = @pass",cn);
            cmd.Parameters.AddWithValue("@user", user);
            cmd.Parameters.AddWithValue("@pass", contra);
            int cont = Convert.ToInt32(cmd.ExecuteScalar());
            if (cont == 1)
            {
                return true;
            }
            else
            {
                return false;
            }
        }
    }

}