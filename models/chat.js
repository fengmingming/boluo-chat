const domain = 'http://localhost:9090'
const tenantId = '1866136483145224194'
const wsUrl = 'ws://127.0.0.1:8081/chat'

function execute(url, method, param) {
	let req = {url: domain + url, method: method, dataType: 'json'}
	req.header = {'content-type': 'application/json'}
	let authorization = uni.getStorageSync('__authorization')
	if(authorization) {
		req.header['Authorization'] = 'Bearer ' + authorization
	}
	if(param) {
		req.data = param
	}
	return uni.request(req)
}

function logout() {
	uni.clearStorageSync()
	uni.reLaunch({
		url: '/pages/index/index'
	})
}

export default {
	getTenantId: function() {
		return tenantId;
	},
	setAccount: function(value) {
		uni.setStorageSync('__account', value)
	},
	getAccount: function() {
		return uni.getStorageSync('__account')
	},
	setAuthorization: function(value) {
		uni.setStorageSync('__authorization', value)
	},
	getAuthorization: function() {
		return uni.getStorageSync('__authorization')
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
	handleResponsePromise: function(promise, successF, failF) {
		promise.then(res => {
			if(res.statusCode >= 200 && res.statusCode < 300) {
				if(res.data.code == 0) {
					successF && successF(res.data.data)
				}else {
					uni.showToast({title: res.data.codeDesc || '响应异常', icon: 'none'})
					if(res.data.code == 401) {
						logout()
					}
				}
			}else {
				uni.showToast({title:`请求异常${res.statusCode}`, icon: 'fail'})
			}
		}).catch(error => {
			if(failF) {
				failF(error)
			}else {
				console.log(error)
				uni.showToast({title:`执行异常${error.errMsg}`, icon: 'fail'})
			}
		})
	},
	logout,
	wsUrl,
	cacheWraper: function(promise, cacheKey) {
		let cacheValue = uni.getStorageSync(cacheKey)
		if(cacheValue) {
			return new Promise((resolve,reject) => {
				resolve(cacheValue)
			})
		}else {
			return new Promise((resolve, reject) => {
				promise.then(res => {
					if(res.statusCode >= 200 && res.statusCode < 300 && res.data.code == 0) {
						uni.setStorageSync(cacheKey, res)
					}
					resolve(res)
				}).then(error => {
					reject(error)
				})
			})
		}
	}
}
