import sys
import time
import os
from PyQt5.QtGui import *
from PyQt5.QtCore import *
from PyQt5.QtWidgets import *
from PyQt5.QtWebChannel import *
from PyQt5.QtWebEngineWidgets import *

from WebChannels import DeviceListChannel

class MainWindow(QWebEngineView):   
    """主窗口"""
    def __init__(self, main_entry):
        super(MainWindow, self).__init__()
        self.setWindowState(Qt.WindowMaximized) # 设置窗口最大化
        self.setWindowTitle('Felicitysolar')  # 窗口标题

        self.__channel = QWebChannel(self.page())
        self.__my_object = DeviceListChannel(self)
        self.__channel.registerObject('DeviceList',self.__my_object)
        self.page().load(QUrl.fromLocalFile(main_entry))


if __name__ == '__main__':
    app = QApplication(sys.argv)
    main_entry = os.path.realpath(os.path.dirname(__file__) + "/FrontEnd/templates/device_list.html") 
    w = MainWindow(main_entry)
    w.resize(400,500)
    w.show()
    app.exec_()