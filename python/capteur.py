import serial

tab = []
moy = 0

with serial.Serial("/dev/tty.usbmodem1D1311", 9600, timeout=1) as serialPort:
    if serialPort.isOpen():
        while True:
            line = serialPort.readline().decode().replace('\r', '').replace('\n', '')
            if line != '':
                dist = int(line)
                if len(tab) < 30:
                    tab.append(dist)
                    print('learning', dist)
                    if len(tab) == 29:
                        for i in tab:
                            moy += i
                        moy = int(moy / len(tab))
                elif abs(dist - moy) > 2:
                    print('+' * 50 + f"\nALERT\t\t{dist}\n" + '+' * 50)
