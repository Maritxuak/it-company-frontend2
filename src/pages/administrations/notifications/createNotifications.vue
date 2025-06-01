<template>
  <div class="main-wrapper">

    <div class="main-content">

      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <div class="mx-2 mx-lg-4 mx-xl-5">
              <form action="#">
                <div class="row">
                  <div class="col-xl-12">
                    <div class="card mb-30">
                      <div class="card-body p-30">
                        <div class="change-password">
                          <div><h4 class="mb-4 pt-2">Уведомление</h4></div>
                          <div class="form-group mb-4">
                            <label for="old-pass" class="bold font-14 mb-2">Уведомление:</label>
                            <input type="password" class="theme-input-style" id="old-pass" placeholder="********">
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 text-right">
                    <div class="button-group pt-1">
                      <button type="reset" class="link-btn bg-transparent mr-3 soft-pink">Отменить</button>
                      <button type="button" class="btn">Отправить</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "createNotifications",
}
</script>
