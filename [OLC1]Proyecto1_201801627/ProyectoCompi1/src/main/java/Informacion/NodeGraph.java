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
    public ArrayList<String> Value;
    public String TX;
    public String TY;

    public NodeGraph(String Type, String Title, ArrayList<String> Eje, ArrayList<String> Value, String TX, String TY) {
        this.Type = Type;
        this.Title = Title;
        this.Eje = Eje;
        this.Value = Value;
        this.TX = TX;
        this.TY = TY;
    }
    
    public NodeGraph(){
        this.Type = "";
        this.Title = "";
        this.Eje = null;
        this.Value = null;
        this.TX = "";
        this.TY = "";
    }
}
