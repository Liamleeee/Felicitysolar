from PyQt5.QtCore import *


class DeviceListChannel(QObject):   # 用一个类包装所有的JS接口以及JS业务逻辑
    def __init__(self,parent=None):
        QObject.__init__(self,parent)

    @pyqtSlot(str)
    def consolePrint(self,msg):
        print(msg)

