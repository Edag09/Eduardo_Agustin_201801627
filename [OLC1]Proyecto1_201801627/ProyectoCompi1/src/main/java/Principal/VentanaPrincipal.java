package Principal;
import Analizador.Lexico;
import Analizador.Sintactico;
import Analizador.sym;
import javax.swing.*;
import javax.swing.filechooser.FileNameExtensionFilter;
import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileReader;
import java.io.Reader;
import java.io.StringReader;
import java_cup.runtime.Symbol;
import java.nio.file.Files;



public class VentanaPrincipal extends javax.swing.JFrame {

    public VentanaPrincipal() {
        initComponents();
        this.setDefaultCloseOperation(EXIT_ON_CLOSE);
        this.setTitle("FIUSAC Copy Analyzer");
        this.setLocationRelativeTo(null);
        this.setResizable(false);
        this.setLayout(null);
    }

    @SuppressWarnings("unchecked")
    // <editor-fold defaultstate="collapsed" desc="Generated Code">//GEN-BEGIN:initComponents
    private void initComponents() {

        jLabel1 = new javax.swing.JLabel();
        Pestañas = new javax.swing.JPanel();
        PanelPestania = new javax.swing.JTabbedPane();
        jScrollPane3 = new javax.swing.JScrollPane();
        MostrarTextoEditor = new javax.swing.JTextArea();
        jScrollPane2 = new javax.swing.JScrollPane();
        TextConsola = new javax.swing.JTextArea();
        jLabel2 = new javax.swing.JLabel();
        Limpiar = new javax.swing.JButton();
        jMenuBar1 = new javax.swing.JMenuBar();
        AbrirArchivo = new javax.swing.JMenu();
        CrearPestania = new javax.swing.JMenu();
        EliminarPestania = new javax.swing.JMenu();
        Ejecutar = new javax.swing.JMenu();
        Reportes = new javax.swing.JMenu();

        setDefaultCloseOperation(javax.swing.WindowConstants.EXIT_ON_CLOSE);

        jLabel1.setFont(new java.awt.Font("Consolas", 0, 20)); // NOI18N
        jLabel1.setText("Editor");

        MostrarTextoEditor.setColumns(20);
        MostrarTextoEditor.setRows(5);
        jScrollPane3.setViewportView(MostrarTextoEditor);

        PanelPestania.addTab("Principal", jScrollPane3);

        javax.swing.GroupLayout PestañasLayout = new javax.swing.GroupLayout(Pestañas);
        Pestañas.setLayout(PestañasLayout);
        PestañasLayout.setHorizontalGroup(
            PestañasLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(PestañasLayout.createSequentialGroup()
                .addContainerGap()
                .addComponent(PanelPestania, javax.swing.GroupLayout.DEFAULT_SIZE, 346, Short.MAX_VALUE)
                .addContainerGap())
        );
        PestañasLayout.setVerticalGroup(
            PestañasLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(PestañasLayout.createSequentialGroup()
                .addContainerGap()
                .addComponent(PanelPestania, javax.swing.GroupLayout.DEFAULT_SIZE, 359, Short.MAX_VALUE)
                .addContainerGap())
        );

        TextConsola.setColumns(20);
        TextConsola.setRows(5);
        jScrollPane2.setViewportView(TextConsola);

        jLabel2.setFont(new java.awt.Font("Consolas", 0, 20)); // NOI18N
        jLabel2.setText("Consola");

        Limpiar.setText("Borrar");
        Limpiar.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                LimpiarActionPerformed(evt);
            }
        });

        AbrirArchivo.setText("File");
        AbrirArchivo.setFont(new java.awt.Font("Consolas", 0, 14)); // NOI18N
        AbrirArchivo.addMouseListener(new java.awt.event.MouseAdapter() {
            public void mouseClicked(java.awt.event.MouseEvent evt) {
                AbrirArchivoMouseClicked(evt);
            }
        });
        jMenuBar1.add(AbrirArchivo);

        CrearPestania.setText("Crear Pestaña");
        CrearPestania.setFont(new java.awt.Font("Consolas", 0, 14)); // NOI18N
        CrearPestania.addMouseListener(new java.awt.event.MouseAdapter() {
            public void mouseClicked(java.awt.event.MouseEvent evt) {
                CrearPestaniaMouseClicked(evt);
            }
        });
        jMenuBar1.add(CrearPestania);

        EliminarPestania.setText("Eliminar Pestaña");
        EliminarPestania.setFont(new java.awt.Font("Consolas", 0, 14)); // NOI18N
        jMenuBar1.add(EliminarPestania);

        Ejecutar.setText("Ejecutar");
        Ejecutar.setFont(new java.awt.Font("Consolas", 0, 14)); // NOI18N
        Ejecutar.addMouseListener(new java.awt.event.MouseAdapter() {
            public void mouseClicked(java.awt.event.MouseEvent evt) {
                EjecutarMouseClicked(evt);
            }
        });
        jMenuBar1.add(Ejecutar);

        Reportes.setText("Reportes");
        Reportes.setFont(new java.awt.Font("Consolas", 0, 14)); // NOI18N
        jMenuBar1.add(Reportes);

        setJMenuBar(jMenuBar1);

        javax.swing.GroupLayout layout = new javax.swing.GroupLayout(getContentPane());
        getContentPane().setLayout(layout);
        layout.setHorizontalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(layout.createSequentialGroup()
                .addGap(15, 15, 15)
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addComponent(Pestañas, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addGroup(layout.createSequentialGroup()
                        .addComponent(jLabel1)
                        .addGap(38, 38, 38)
                        .addComponent(Limpiar)))
                .addGap(18, 18, 18)
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addComponent(jScrollPane2, javax.swing.GroupLayout.PREFERRED_SIZE, 238, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addComponent(jLabel2))
                .addContainerGap(34, Short.MAX_VALUE))
        );
        layout.setVerticalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(layout.createSequentialGroup()
                .addGap(30, 30, 30)
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(jLabel1)
                    .addComponent(jLabel2)
                    .addComponent(Limpiar))
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addComponent(jScrollPane2, javax.swing.GroupLayout.PREFERRED_SIZE, 368, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addComponent(Pestañas, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))
                .addContainerGap(25, Short.MAX_VALUE))
        );

        pack();
    }// </editor-fold>//GEN-END:initComponents

    private void CrearPestaniaMouseClicked(java.awt.event.MouseEvent evt) {//GEN-FIRST:event_CrearPestaniaMouseClicked
        Ventanas nuevo = new Ventanas();
       PanelPestania.add("Nuevo", nuevo);
    }//GEN-LAST:event_CrearPestaniaMouseClicked

    private void AbrirArchivoMouseClicked(java.awt.event.MouseEvent evt) {//GEN-FIRST:event_AbrirArchivoMouseClicked
        JFileChooser windows = new JFileChooser();
        FileNameExtensionFilter extencion = new FileNameExtensionFilter("Documentos tipo FCA y JS", "fca", "js");
        windows.setFileFilter(extencion);
        
        windows.showOpenDialog(null);
        File archivo = windows.getSelectedFile();
        
        try {
            FileReader leer = new FileReader(archivo);
            BufferedReader escuchar = new BufferedReader(leer);
            
            String texto = "";
            String linea = "";
            
            while(((linea = escuchar.readLine()) != null)){
                texto += linea+"\n";
            }
            MostrarTextoEditor.setText(texto);
        } catch (Exception e) {
            JOptionPane.showMessageDialog(null, "Se ha detectado un error");
        }
        
    }//GEN-LAST:event_AbrirArchivoMouseClicked

    private void LimpiarActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_LimpiarActionPerformed
        if (MostrarTextoEditor.getText().isEmpty() && TextConsola.getText().isEmpty()) {
            JOptionPane.showMessageDialog(null, "No se ha cargado algun archivo");
        }else{
            MostrarTextoEditor.setText(" ");
            TextConsola.setText(" ");
        }
    }//GEN-LAST:event_LimpiarActionPerformed

    private void EjecutarMouseClicked(java.awt.event.MouseEvent evt) {//GEN-FIRST:event_EjecutarMouseClicked
        parseoJS();
    }//GEN-LAST:event_EjecutarMouseClicked


    // Variables declaration - do not modify//GEN-BEGIN:variables
    private javax.swing.JMenu AbrirArchivo;
    private javax.swing.JMenu CrearPestania;
    private javax.swing.JMenu Ejecutar;
    private javax.swing.JMenu EliminarPestania;
    private javax.swing.JButton Limpiar;
    private javax.swing.JTextArea MostrarTextoEditor;
    private javax.swing.JTabbedPane PanelPestania;
    private javax.swing.JPanel Pestañas;
    private javax.swing.JMenu Reportes;
    private javax.swing.JTextArea TextConsola;
    private javax.swing.JLabel jLabel1;
    private javax.swing.JLabel jLabel2;
    private javax.swing.JMenuBar jMenuBar1;
    private javax.swing.JScrollPane jScrollPane2;
    private javax.swing.JScrollPane jScrollPane3;
    // End of variables declaration//GEN-END:variables

public void parseoFCA(){
        String parseo = MostrarTextoEditor.getText();
        TextConsola.setText("Procesando\n");
        Sintactico sintaxCorrect = new Sintactico(new Lexico(new StringReader(parseo)));
        
        try {
            sintaxCorrect.parse();
            System.out.println(TextConsola.getText()+"Si jala\n");
        } catch (Exception e) {
            TextConsola.setText(TextConsola.getText()+"Error Sintactico\n");
        }
        TextConsola.setText(TextConsola.getText()+"Finalizado");
}

public void parseoJS(){
    String parseo = MostrarTextoEditor.getText();
    TextConsola.setText("Procesando\n");
    AnalizadorJS.Sintactico sintaxJS = new AnalizadorJS.Sintactico(new AnalizadorJS.Lexico(new StringReader(parseo)));
    
    try {
        sintaxJS.parse();
        System.out.println(TextConsola.getText()+" Si jalo\n");
    } catch (Exception e) {
        TextConsola.setText(TextConsola.getText()+"Error Sintactico\n");
    }
    TextConsola.setText(TextConsola.getText()+" Finalizado");
}
}


