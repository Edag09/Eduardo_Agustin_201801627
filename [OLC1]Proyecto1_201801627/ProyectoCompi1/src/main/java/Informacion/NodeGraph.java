package Informacion;
import java.util.ArrayList;

/**
 *
 * @author renea
 */
public class NodeGraph {
    public String Type;
    public String Title;
    public ArrayList<String> Eje;
    public ArrayList<String> EjePie;
    public ArrayList<String> Value;
    public ArrayList<String> ValuePie;
    public String TX;
    public String TY;

    public NodeGraph(String Type, String Title, ArrayList<String> Eje, ArrayList<String> EjePie, ArrayList<String> Value, ArrayList<String> ValuePie, String TX, String TY) {
        this.Type = Type;
        this.Title = Title;
        this.Eje = Eje;
        this.EjePie = EjePie;
        this.Value = Value;
        this.ValuePie = ValuePie; 
        this.TX = TX;
        this.TY = TY;
    }
    
    public NodeGraph(){
        this.Type = "";
        this.Title = "";
        this.Eje = null;
        this.EjePie = null;
        this.Value = null;
        this.ValuePie = null;
        this.TX = "";
        this.TY = "";
    }
}
