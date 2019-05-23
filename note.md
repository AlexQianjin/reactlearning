### Virtual Box
- VBoxManage.exe setextradata "Your VM Name" CustomVideoMode1 "1600x900x32"
- VBoxManage.exe setextradata global GUI/MaxGuestResolution any
- VBoxManage modifyhd YOUR_HARD_DISK.vdi --resize SIZE_IN_MB
- VBoxManage modifyhd D:\VM\Windows10\Windows10-disk001.vdi --resize 70000
- VBoxManage modifyhd D:\VM\Windows10\Snapshots\{2d190a82-1d43-4440-a6a8-ec474cea2ce9}.vdi --resize 70000
- VBoxManage modifyhd D:\VM\Windows10\Snapshots\{919a0c8b-9664-43b0-9052-033ac7ee3f4a}.vdi --resize 70000

### Azure Storage emulator
```
$PSVersionTable.PSVersion
Set-ExecutionPolicy unrestricted
Get-Module -All
Get-Module -ListAvailable |Where-Object {$_.Name -like 'AzureRM*'}
Get-Module -ListAvailable
Uninstall-Module -Name AzureRmStorageTable -RequiredVersion 1.0.0.23
Install-Module -Name Az -AllowClobber
Install-Module -Name AzureRmStorageTable

Import-Module AzureRmStorageTable
```