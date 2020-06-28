import sys
from PyQt5.QtCore import *
from PyQt5.QtGui import *
from PyQt5.QtWidgets import *
from PyQt5.QtWebEngineWidgets import *


class MainWindow(QMainWindow):
    def __init__(self):
        super(MainWindow, self).__init__()
        self.setWindowTitle('Host Computer')  # 窗口标题
        self.setGeometry(5,30,1355,730)  # 窗口的大小和位置设置
        self.browser=QWebEngineView()    # 以Web引擎方式加载外部的web界面
        
        self.browser.load(QUrl('file:///FrontEnd/templates/ProjectInfo.html'))
        self.setCentralWidget(self.browser)

if __name__ == '__main__':
    app=QApplication(sys.argv)
    win=MainWindow()
    win.show()
    app.exit(app.exec_())