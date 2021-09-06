package Informacion;

public class Exceptions {
    public String Type;
    public String Description;
    public int Row;
    public int Column;

    public Exceptions(String Type, String Description, int Row, int Column) {
        this.Type = Type;
        this.Description = Description;
        this.Row = Row;
        this.Column = Column;
    }
}
