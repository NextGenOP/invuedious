<template>
	<div class="modal active" id="modalSettings" @click="$emit('close')">
		<div class="modal-overlay" aria-label="Close"></div>
		<div class="modal-container" @click.stop>
			<div class="modal-header">
				<button
					class="btn btn-clear float-right"
					aria-label="Close"
					@click="$emit('close')"
				></button>
				<div class="modal-title h5">Settings</div>
			</div>
			<div class="modal-body">
				<div class="content">
					<div style="margin-bottom: 1.5em">
						<p class="text-light">Choose instance:</p>
						<div class="form-group">
							<select class="form-select" v-model="instance" 
								v-on:change="onChangeSite($event)">
								<option
									v-for="(inst, n) in $store.state.apis"
									:key="n"
									:value="inst[1].type + '://' + inst[0]"
								>
									{{ inst[1].type + "://" + inst[0] }}
								</option>
								<option value="other">Other</option>
							</select>
							<p class="text-light"> Instance: 
								{{ instance }} 
							</p>
							<input v-if="instance === 'other'"
								v-model="custominstance" type="text" 
								v-on:change="onChangeSite($event)" />
						</div>
					</div>
					<div>
						<p class="text-light">Choose theme:</p>
						<div class="form-group">
							<select class="form-select" v-model="theme">
								<option value="red">Black and red</option>
								<option value="blue">Dark blue</option>
							</select>
						</div>
					</div>
				</div>
			</div>
			<div class="modal-footer text-light">
				<div class="container">
					<div class="columns">
						<div class="column col-12">
							<span
								>Note: a lot of instances don't allow third
								party usage</span
							>
						</div>
						<div class="column col-12" style="margin-top: 0.5rem">
							<button class="btn btn-primary" @click="save">
								SAVE
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "modalSettings",
	data() {
		return {
			custominstance: "",
			instance: "",
			first: 0,
			theme: "",
		}
	},
	created() {
		if (this.custominstance != undefined){
			this.custominstance = this.$store.state.selected
		}
		if (this.instance != 'other'){
			this.instance = this.$store.state.selected
		}
		this.theme = localStorage.getItem("theme")
		if (this.theme == undefined) {
			this.theme = "red"
		}
	},
	methods: {
		onChange: function(e) {
		var id = e.target.value;
		var name = e.target.options[e.target.options.selectedIndex].text;
		console.log('id ',id );
		console.log('name ',name );
		},
		save() {
		if (this.instance === 'other'){
			this.instance = this.custominstance
		}
		this.$emit("save", [this.instance, this.custominstance, this.theme])
		},
	},
}
</script>

<style scoped>
.modal-overlay {
	background-color: rgba(0, 0, 0, 0.75) !important;
}
.modal-container {
	background-color: var(--bg-dark) !important;
}
.modal-title {
	color: var(--primary) !important;
}
</style>
