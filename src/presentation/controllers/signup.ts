import {HttRequest,HttpResponse} from '../protocols/http'
import { badRequest } from '../helpers/http-helper'
import { MissingParamError } from '../errors/missing-params-errors'

export class SignUpController{
    handle(httpRequest:HttRequest):HttpResponse{

        if(!httpRequest.body.name){
            return badRequest(new MissingParamError('name'))
        }

        if(!httpRequest.body.email){
            return badRequest(new MissingParamError('email'))
        }
    }
}