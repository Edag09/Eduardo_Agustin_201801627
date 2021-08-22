//
// Created by renea on 18/08/2021.
//

#include "ListHomework.h"

ListDoubleHomework ::ListDoubleHomework() {
    this->first = NULL;
    this->end = NULL;
}

void ListDoubleHomework :: InsertList(int id, string carne, string nombre, string descripcion, string materia, string fecha, string estado) {
    DoubleNodeHomework* Tarea = new DoubleNodeHomework;
    Tarea->setId(id);
    Tarea->setCarne(carne);
    Tarea->setNombre(nombre);
    Tarea->setDescripcion(descripcion);
    Tarea->setMateria(materia);
    Tarea->setFecha(fecha);
    Tarea->setEstado(estado);

    if (first == NULL){
        first = Tarea;
        first->setSig(NULL);
        first->setAnt(NULL);
        end = first;
    }else{
        end->setSig(Tarea);
        Tarea->setSig(NULL);
        Tarea->setAnt(end);
        end = Tarea;
    }
}

void ListDoubleHomework :: Show() {
    DoubleNodeHomework* aux = new DoubleNodeHomework();
    aux = first;
    if (first != NULL){
        do {
            cout << "ID: " << aux->getId() << '\n';
            cout <<"Carne: " << aux->getCarne() << '\n';
            cout << "Nombre Tarea: " << aux->getNombre() << '\n';
            cout << "Fecha de entrega: " << aux->getFecha() << '\n';
            cout << "Estado de la tareas: " << aux->getEstado() << '\n';
            cout << '\n';
            aux = aux->getSig();
        } while (aux != NULL);
    }else{
        cout << "Error";
    }
}

void ListDoubleHomework :: Modify(int id) {
    DoubleNodeHomework* aux = new DoubleNodeHomework();
    find = false;
    aux = first;
    string carne, nombre, descripcion, materia, fecha, estado;
    if (first != NULL){
        do {
            if (aux->getId() == id){
                cout << "La tarea de " << aux->getNombre() << " del alumno con carne " << aux->getCarne() << '\n';
                cout << "esta " << aux->getEstado() << '\n';
                cout << "Los datos seran Modificados\n";

                //Carne
                cout << "Carne: \n";
                getline(cin>>ws, carne);
                aux->setCarne(carne);
                //Nombre
                cout << "Nombre: \n";
                getline(cin>>ws, nombre);
                aux->setNombre(nombre);
                //Descripcion
                cout << "Descripcion: \n";
                getline(cin>>ws, descripcion);
                aux->setDescripcion(descripcion);
                //Materia
                cout << "Materia: \n";
                getline(cin>>ws, materia);
                aux->setMateria(materia);
                //Fecha
                cout << "Fecha: \n";
                getline(cin>>ws, fecha);
                aux->setFecha(fecha);
                //Estado
                cout << "Estado: \n";
                getline(cin>>ws, estado);
                aux->setEstado(estado);

                cout << aux->getNombre() << " - " << aux->getDescripcion() << " - " << aux->getMateria() << " - " << aux->getFecha() << " - " << aux->getEstado() << '\n';
                find = true;
            }
            aux = aux->getSig();
        }while(aux != NULL && !find);
        if (!find){
            cout << "Datos no encontrados";
        }
    }else{
        cout << "No se han encontrado datos ingresados";
    }
}

void ListDoubleHomework :: DeleteNode(int id) {
    DoubleNodeHomework* aux = new DoubleNodeHomework();
    find = false;
    aux = first;
    string carne, nombre, descripcion, materia, fecha, estado;
    if (first != NULL){
        do {
            if (aux->getId() == id){
                cout << "El alumno con carne " << aux->getCarne() << '\n';
                cout << "Seran Eliminado\n";

                //Carne
                aux->setCarne(to_string(-1));
                //Nombre
                aux->setNombre(to_string(-1));
                //Descripcion
                aux->setDescripcion(to_string(-1));
                //Materia
                aux->setMateria(to_string(-1));
                //Fecha
                aux->setFecha(to_string(-1));
                //Estado
                aux->setEstado(to_string(-1));

                cout << aux->getNombre() << " - " << aux->getDescripcion() << " - " << aux->getMateria() << " - " << aux->getFecha() << " - " << aux->getEstado() << '\n';
                cout << "Eliminado\n";
                find = true;
            }
            aux = aux->getSig();
        }while(aux != NULL && !find);
        if (!find){
            cout << "Datos no encontrados";
        }
    }else{
        cout << "No se han encontrado datos ingresados";
    }
}

void ListDoubleHomework :: Insert(int mes, int dia, int hora, string carne, string nombre, string descripcion, string materia, string fecha, string estado) {
    DoubleNodeHomework* aux = new DoubleNodeHomework();
    int IDCol;
    IDCol = Mes(mes)+5*((Dia(dia)-1)+30*Hora(hora));
    find = false;
    aux = first;
    if (first != NULL){
        do {
            if (aux->getId() == IDCol){
                cout << IDCol << " <- ID verificado\n";
                aux->setCarne(carne);
                aux->setNombre(nombre);
                aux->setDescripcion(descripcion);
                aux->setMateria(materia);
                aux->setFecha(fecha);
                aux->setEstado(estado);
                find = true;
            }
            aux = aux->getSig();
        }while(aux != NULL && !find);
    }else{
        cout << "Lista Vacia \n";
    }
}

int ListDoubleHomework :: Mes(int m) {
    switch (m) {
        case 7:
            return 0;
            break;
        case 8:
            return 1;
            break;
        case 9:
            return 2;
            break;
        case 10:
            return 3;
            break;
        case 11:
            return 4;
            break;
        default:
            cout << "Error\n";
            return -1;
    }
}

int ListDoubleHomework :: Dia(int d) {
    switch (d) {
        case 1:
            return 1;
            break;
            case 2:
                return 2;
                break;
                case 3:
                    return 3;
                    break;
                    case 4:
                        return 4;
                        break;
                        case 5:
                            return 5;
                            break;
                            case 6:
                                return 6;
                                break;
                                case 7:
                                    return 7;
                                    break;
                                    case 8:
                                        return 8;
                                        break;
                                        case 9:
                                            return 9;
                                            break;
                                            case 10:
                                                return 10;
                                                break;
                                                case 11:
                                                    return 11;
                                                    break;
                                                    case 12:
                                                        return 12;
                                                        break;
                                                        case 13:
                                                            return 13;
                                                            break;
                                                            case 14:
                                                                return 14;
                                                                break;
                                                                case 15:
                                                                    return 15;
                                                                    break;
                                                                    case 16:
                                                                        return 16;
                                                                        break;
                                                                        case 17:
                                                                            return 17;
                                                                            break;
                                                                            case 18:
                                                                                return 18;
                                                                                break;
                                                                                case 19:
                                                                                    return 19;
                                                                                    break;
                                                                                    case 20:
                                                                                        return 20;
                                                                                        break;
                                                                                        case 21:
                                                                                            return 21;
                                                                                            break;
                                                                                            case 22:
                                                                                                return 22;
                                                                                                break;
                                                                                                case 23:
                                                                                                    return 23;
                                                                                                    break;
                                                                                                    case 24:
                                                                                                        return 24;
                                                                                                        break;
                                                                                                        case 25:
                                                                                                            return 25;
                                                                                                            break;
                                                                                                            case 26:
                                                                                                                return 26;
                                                                                                                break;
                                                                                                                case 27:
                                                                                                                    return 27;
                                                                                                                    break;
                                                                                                                    case 28:
                                                                                                                        return 28;
                                                                                                                        break;
                                                                                                                        case 29:
                                                                                                                            return 29;
                                                                                                                            break;
                                                                                                                            case 30:
                                                                                                                                return 30;
                                                                                                                                break;
                                                                                                                                default:
                                                                                                                                    cout << "Error\n";
                                                                                                                                    return -1;
    }
}

int ListDoubleHomework :: Hora(int h) {
    switch (h) {
        case 8:
            return 0;
            break;
            case 9:
                return 1;
                break;
                case 10:
                    return 2;
                    break;
                    case 11:
                        return 3;
                        break;
                        case 12:
                            return 4;
                            break;
                            case 13:
                                return 5;
                                break;
                                case 14:
                                    return 6;
                                    break;
                                    case 15:
                                        return 7;
                                        break;
                                        case 16:
                                            return 8;
                                            break;
                                            default:
                                                cout << "Error\n";
                                                return -1;
    }
}

void ListDoubleHomework :: SearchNode(int mes, int dia, int hora) {
    DoubleNodeHomework* aux = new DoubleNodeHomework();
    int IDCol;
    IDCol = Mes(mes)+5*((Dia(dia)-1
            )+30*Hora(hora));
    find = false;
    aux = first;
    if (first != NULL){
        do {
            if (aux->getId() == IDCol){
                cout << "ID de la tarea -> " << aux->getId() << '\n';
                cout << "Caren -> " << aux->getCarne() << '\n';
                cout << "Nombre -> " << aux->getNombre() << '\n';
                cout << "Descripcion -> " << aux->getDescripcion() << '\n';
                cout << "Materia -> " << aux->getMateria() << '\n';
                cout << "Estado -> " << aux->getEstado() << '\n';
                find = true;
            }
            aux = aux->getSig();
        }while(aux != NULL && !find);
        if (!find){
            cout << "Datos no encontrados";
        }
    }else{
        cout << "No se han encontrado datos ingresados";
    }
}
