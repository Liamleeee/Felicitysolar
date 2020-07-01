import serial #导入模块
import serial.tools.list_ports

if __name__ == '__main__':
    port_list = list(serial.tools.list_ports.comports())
    if len(port_list) == 0:
        print('当前无可用设备')
    print('串口测试程序')
    print("当前可用串口列表为：")
    for i in range(len(port_list)):
        print("序号:", i, port_list[i])
    open_serial_id = int(input("请选择需要打开的串口（序号）："))
    port = input("请输入串口波特率：")
    serialFd = serial.Serial(port_list[open_serial_id][0],port,bytesize=8, parity='N', stopbits=1, timeout=1)
    # serialFd.open()
    serialFd.isOpen()