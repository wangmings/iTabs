import requests
from time import sleep 



# 文件存储
def fileStore(path, data=None, type='ab'):
    if data == None: type = 'r'
    with open(path,type) as file:
        if data == None:
            return file.read()
        else:
            file.write(data)





# 获取视频片段数据
def get_data(name,url):

    # 模拟游览器
    headers = {
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.131 Safari/537.36"
    }

    # 解析URL并提取数据
    req = requests.get(url,headers=headers,timeout=30)
    data = req.content
    paths = './img/' + name
    fileStore(paths,data)




def mergeData(data):
    gs = 'let imgPathArray = '
    config = fileStore('./config.js').replace(gs,'')
    config = eval(config)

    if len(data) == len(config):
        return False
    else:
        config = config + data
        js = gs + str(config)
        fileStore('./config.js',js,'w+')




if __name__ == '__main__':
    data = fileStore('./img.json')
    data = eval(data)
    json = mergeData(data)

    if json == False:
        print('数据重复了,请检查...')
    else:
        for img in data:
            print(img['name'])
            get_data(img['name'], img['src'])
            sleep(2)

