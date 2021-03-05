from LS import Simple_list
from LC import Circular_list

simple = Simple_list()
circular = Circular_list()
data = ''


class process:
    def past(self):
        process.pros(self, data)

    def pros(self, root):
        for element in root:
            name = element.get('nombre')
            n = element.get('n')
            m = element.get('m')
            circular.addCircular(name, n, m, element)
        circular.viewC()


