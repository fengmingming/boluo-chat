const domain = 'http://localhost:9090'
const tenantId = '1866136483145224194'
let account = uni.getStorageSync('__account')
let authorization = uni.getStorageSync('__authorization');
function execute(url, method, param) {
	let req = {url: domain + url, method: method, dataType: 'json'}
	req.header = {'content-type': 'application/json'}
	if(authorization) {
		req.header['Authorization'] = 'Bearer ' + authorization
	}
	if(param) {
		req.data = param
	}
	return uni.request(req)
}

export default {
	tenantId: tenantId,
	setAccount: function(value) {
		account = value
		uni.setStorageSync('__account', account)
	},
	getAccount: function() {
		return account;
	},
	setAuthorization: function(value) {
		authorization = value
		uni.setStorageSync('__authorization', authorization)
	},
	post: function(url, param) {
		return execute(url, 'POST', param)
	},
	get: function(url, param) {
		return execute(url, 'GET', param)
	},
	put: function(url, param) {
		return execute(url, 'PUT', param)
	},
	delete: function(url, param) {
		return execute(url, 'DELETE', param)
	},
	handleResponsePromise: function(promise, successF) {
		promise.then(res => {
			if(res.statusCode >= 200 && res.statusCode < 300) {
				if(res.data.code === 0) {
					successF && successF(res.data.data)
				}else {
					uni.showToast({title: res.data.codeDesc || '响应异常', icon: 'none'})
				}
			}else {
				uni.showToast({title:`请求异常${res.statusCode}`, icon: 'fail'})
			}
		}).catch(error => {
			console.log(error)
			uni.showToast({title:`执行异常${error.errMsg}`, icon: 'fail'})
		})
	}
}
