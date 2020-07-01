
import sys
from PyQt5.QtWidgets import QApplication
from PyQt5.QtCore import QObject, pyqtSlot, QUrl
from PyQt5.QtWebChannel import QWebChannel
from PyQt5.QtWebEngineWidgets import QWebEngineView
 
 
class CallHandler(QObject):   # 用一个类包装所有的JS接口以及JS业务逻辑
    @pyqtSlot(result=str)
    def myHello(self):
        view.page().runJavaScript('uptext("hello, Pythongjhkkkk");')
        print('call received')
        return 'hello, Python'


    @pyqtSlot(str, result=str)
    def myTest(self, test):
        print('test is',test)
        return '返回前端结果'
 
 
if __name__ == '__main__':
    app = QApplication(sys.argv)
    view = QWebEngineView()
    channel = QWebChannel()
    handler = CallHandler()  # 分开写，不然线程容易死，得先用变量接收一下编程QObject
    channel.registerObject('pyjs', handler)# 前者是str，后者是一个QObject（里面放着需要调用的函数）
    view.page().setWebChannel(channel)
    url_string = "file:///G:/Felicitysolar/HostComputer/Serial_assistant/index.html"  # 内置的网页地址，此处我采用的是本地的。远程同样可以使用。 
    view.load(QUrl(url_string))
    view.show()
    sys.exit(app.exec_())


