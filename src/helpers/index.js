import axios from 'axios'

const uri = 'http://localhost:6777'
const headers = {"ContentType" : "application/json"}

const main = {
    login(_u, _p, cb){
        if(!_u || !_p) {
            console.error('user not found');
        }
        axios.post( uri + '/login', 
                    {username: _u, password: _p}, 
                    {headers}).then( function(res){
                        cb(res.data);
        })
    },
    logout(_id, cb){
        if(!_id) {
            console.error('user not found');
        }
        axios.post( uri + '/logout', 
                    {_id}, 
                    {headers}).then( function(res){
                        cb(res.data);
        })
    },
    getData(cb){
        axios.get(uri + '/data', {headers}).then(function(res){
            cb(res.data);
        })
    },
    addData(_obj, _adminid, cb){
        if(!_adminid) {
            console.error("shouldn't be empty")
            return
        }
        axios.post(uri + '/client' + '/add-many', {_docArr: _obj, _id: _adminid}, {headers}).then(function(res){
            cb(res.data);
        })
    },
    editData(_obj, _adminid, cb){
        delete _obj.__v
        delete _obj.name
        delete _obj.identification_id
        axios.post(uri + '/client' + '/edit', 
            {doc: _obj, doc_id: _obj._id, _id: _adminid},
            {headers}).then(function(res){
            cb(res.data);
        })
    }
}

export default main;