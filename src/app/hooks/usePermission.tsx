
type RolePermissionProps = {
    displayName: string | Error,
    isEnabled: Boolean,
    permId: number
}


class RolePermissions {

    displayName = [
        
    ]
    rolePerms = 0

     constructor (permissions: number){
        this.rolePerms = permissions
        
    }

    private getRoleDisplayNameFromNumber<String>(roleNumber: number){
        switch(roleNumber){
            case 1: return 'komentowanie postów'
            case 2: return 'tworzenie nowych postów'
            case 4: return 'reagowanie własnymi emoji'
            case 8: return 'zarządzanie użytkownikami'
            case 16: return 'usuwanie postów'
            case 32: return 'edytowanie postów'
            case 64: return 'not yet implemented'
            case 128: return 'not yet implemented'
            default: return new Error('invalid role')
        }
     
    }

    private isPermissionEnabled<Boolean>(permissions: number, permissionToCheck: number){
        return (permissionToCheck&permissions) == 0 ? false : true
    }

    getRolePermissions(){
        let list: RolePermissionProps[] = []
        for(let i=1; i<255; i+=i){
            list.push({
                isEnabled: this.isPermissionEnabled(this.rolePerms, i),
                displayName: this.getRoleDisplayNameFromNumber(i),
                permId: i
                
            })
        }
        return list
    }



    canCommentPosts<Boolean>() {
        return (this.rolePerms & 1) == 1? true : false
    }

    canCreateNewPosts<Boolean>() {
        return this.rolePerms & 2 ? true : false
    }

    canReactWithCustomEmojis<Boolean>() {
        return (this.rolePerms & 4) == 4 ? true : false
    }

    canManageUsers<Boolean>() {
        return this.rolePerms & 8 ? true : false
    }

    canDeletePosts<Boolean>() {
        return this.rolePerms & 16 ? true : false
    }

    canEditPosts<Boolean>() {
        return this.rolePerms & 32 ? true : false
    }
    canDoSomething<Boolean>() {
        return (this.rolePerms & 64) == 64 ? true : false
    }

    canDoSomethingElse<Boolean>() {
        return this.rolePerms&128 ? true : false
    }
    isSuperuser<Boolean>() {
        return this.rolePerms == 255 ? true : false
    }

    modifyPermission(permission: modifyPermissionProps,
        action: string | 'revoke' | 'grant'
    ) {
        switch (permission) {
            case 'isSuperuser': {
                if (action === 'revoke') {
                    this.rolePerms=0
                } else if (action === 'grant') {
                    this.rolePerms=255
                }
                else{
                    throw Error("Action must be one of the following: grant or revoke")
                }
                return this.rolePerms
            }
            case 'canCommentPosts': {
                console.log("test: "+ (this.rolePerms&1) ) 
                if (action === 'revoke') {
                    this.rolePerms^=1
                } else if (action === 'grant') {
                    this.rolePerms^=1
                }
                else{
                    throw Error("Action must be one of the following: grant or revoke")
                }
                return this.rolePerms
            }
            case 'canCreateNewPosts': {
                if (action === 'revoke') {
                    this.rolePerms^=2
                } else if (action === 'grant') {
                    this.rolePerms^=2
                }
                else{
                    throw Error("Action must be one of the following: grant or revoke")
                }
                return this.rolePerms
            }
            case 'canReactWithCustomEmojis': {
                if (action === 'revoke') {
                    this.rolePerms^=4
                } else if (action === 'grant') {
                    this.rolePerms^=4
                }
                else{
                    throw Error("Action must be one of the following: grant or revoke")
                }
                return this.rolePerms
            }
            case 'canManageUsers': {
                if (action === 'revoke') {
                    this.rolePerms^=8
                } else if (action === 'grant') {
                    this.rolePerms^=8
                }
                else{
                    throw Error("Action must be one of the following: grant or revoke")
                }
                return this.rolePerms
            }
            case 'canDeletePosts': {
                if (action === 'revoke') {
                    this.rolePerms^=16
                } else if (action === 'grant') {
                  this.rolePerms^=16
                }
                else{
                    throw Error("Action must be one of the following: grant or revoke")
                }
                return this.rolePerms
            }
            case 'canEditPosts': {
                if (action === 'revoke') {
                    this.rolePerms^=32
                } else if (action === 'grant') {
                    this.rolePerms^=32
                }
                else{
                    throw Error("Action must be one of the following: grant or revoke")
                }
                return this.rolePerms
            }
            case 'canDoSomething': {
                if (action === 'revoke') {
                    this.rolePerms^=64
                } else if (action === 'grant') {
                    this.rolePerms^=64
                }
                else{
                    throw Error("Action must be one of the following: grant or revoke")
                }
                return this.rolePerms
            }
            case 'canDoSomethingElse': {
                if (action === 'revoke') {
                    this.rolePerms^=128
                } else if (action === 'grant') {
                    this.rolePerms^=128
                }
                else{
                    throw Error("Action must be one of the following: grant or revoke")
                }
                return this.rolePerms
           
            }
        }


    }
    toText(permission: modifyPermissionProps){

    }

}

type useRoleProps = (
    permissions: number,
    roleType: 'post' | 'role'
) => RolePermissions ;

export const usePermission: useRoleProps = (permissions, roleType) => {

    let roleObject = new RolePermissions(permissions)
    if (roleType == 'role') {



        

    
    }
    return roleObject;
   
}




type modifyPermissionProps = 'canCommentPosts' | 'canCreateNewPosts' | 'canReactWithCustomEmojis' |
    'canManageUsers' | 'canDeletePosts' | 'canEditPosts' | 'canDoSomething' | 'canDoSomethingElse' | 'isSuperuser'



// unlogged 

// 1 - can comment posts
// 2 - can create new posts
// 4 - can react with custom emojis (user can upload their own reaction while reacting to post)
// 8 -  manage other users 
// 16 - delete posts
// 32 - edit posts
// 64 - can do something else
// 128 - can do something else aswell
// 255 - means superuser (can access admin dashboard)